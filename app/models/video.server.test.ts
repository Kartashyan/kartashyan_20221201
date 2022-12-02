import { mock } from "vitest-mock-extended";
import { createMockContext } from "~/db.context.server";
import type { Context, MockContext } from "~/db.context.server";
import {
  createVideo,
  getAllVideos,
  getAllVideosByCategory,
} from "./video.server";
import type { Video } from "./video.server";

let mockCtx: MockContext;
let ctx: Context;

describe("video model", () => {
  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as Context;
  });
  it("should create a video item", async () => {
    const videoItem: Video = {
      id: "random id",
      title: "Brain training",
      thumbnail: "asdfadfsdf242jwqew",
      categoryName: "Education",
    };
    mockCtx.prisma.video.create.mockResolvedValue(videoItem);

    await expect(createVideo(videoItem, ctx)).resolves.toEqual(videoItem);
  });

  it.todo(
    "should fail if category does not mutch acceptable category list",
    async () => {
      const videoItem: Video = {
        id: "random id",
        title: "Brain training",
        thumbnail: "asdfadfsdf242jwqew",
        //@ts-ignore (for testing disabled type-checking cases otherwise, typescript fully covering such cases)
        categoryName: "Category which not exist",
      };

      const error = new Error("Category must must be in the required list!");
      mockCtx.prisma.video.create.mockRejectedValue(error);
      await expect(createVideo(videoItem, ctx)).resolves.toEqual(error);
    }
  );

  it("should get a video item list", async () => {
    const videList = mock<Video[]>();
    mockCtx.prisma.video.findMany.mockResolvedValue(videList);
    await expect(getAllVideos(ctx)).resolves.toEqual(videList);
  });

  it("should get a videos by category", async () => {
    const videList = mock<Video[]>();
    mockCtx.prisma.video.findMany.mockResolvedValue(videList);
    await expect(getAllVideosByCategory("Education", ctx)).resolves.toEqual(
      videList
    );
  });
});
