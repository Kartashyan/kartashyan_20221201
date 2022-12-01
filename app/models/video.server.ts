import { Video } from "@prisma/client";
import { Context } from "~/db.context.server";

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

type VideoItem = MakeOptional<Video, "id">;

export const createVideo = (videoItem: VideoItem, ctx: Context) => {
    return ctx.prisma.video.create({
        data: videoItem,
    })
};