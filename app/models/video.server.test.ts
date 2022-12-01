import { Video } from "@prisma/client";
import { Context, MockContext } from "~/db.context.server";
import { createVideo } from "./video.server";

let mockCtx: MockContext;
let ctx: Context;

describe("video model", () => {
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
    it.todo("should fail if category does not mutch acceptable category list");
    it.todo("should get a video item list");
});