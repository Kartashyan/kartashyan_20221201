import { CategoryName, Video } from "@prisma/client";
import { Context } from "~/db.context.server";
import { prisma } from "~/db.server";

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

type VideoItem = MakeOptional<Video, "id">;

export const createVideo = (
  videoItem: VideoItem,
  ctx: Context = { prisma }
) => {
  return ctx.prisma.video.create({
    data: videoItem,
  });
};

export const getAllVideosByCategory = (
  category: CategoryName,
  ctx: Context = { prisma }
) => {
  return ctx.prisma.video.findMany({
    where: {
      categoryName: category,
    },
  });
};

export const getAllVideos = (ctx: Context = { prisma }) => {
  return ctx.prisma.video.findMany({});
};

export const getAllCategories = (ctx: Context = { prisma }) => {
  return ctx.prisma.category.findMany({});
};
