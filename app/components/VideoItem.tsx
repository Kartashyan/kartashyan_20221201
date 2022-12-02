import type { Video } from "@prisma/client";

type Props = Pick<Video, "title" | "categoryName" | "videoUrl" | "thumbnail">;

export const VideoItem = ({
  videoUrl,
  title,
  categoryName,
  thumbnail,
}: Props) => {
  return (
    <div className="flex flex-col">
      <h2>{title}</h2>
      <h4>{categoryName}</h4>
      <video src={videoUrl} width="320" height="240" controls />
    </div>
  );
};
