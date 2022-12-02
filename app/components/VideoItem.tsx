import type { Video } from "@prisma/client";
import { useEffect, useState } from "react";

type Props = Pick<Video, "title" | "categoryName" | "videoUrl" | "thumbnail">;

export const VideoItem = ({
  videoUrl,
  title,
  categoryName,
  thumbnail,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="flex flex-col">
      <h2>{title}</h2>
      <h4>{categoryName}</h4>
      <div className="relative h-40 w-40 overflow-hidden rounded">
        <img
          src={thumbnail}
          alt="Avatar"
          className="h-full w-full object-cover"
        />
        <div
          onClick={() => setOpen(true)}
          className="absolute inset-x-0 bottom-0 flex h-full w-full cursor-pointer items-center justify-center bg-slate-400 font-extrabold leading-4 text-black opacity-10 hover:opacity-90"
        >
          Play
        </div>
      </div>
      {open && (
        <div className="absolute inset-x-0 inset-y-0 z-10 flex cursor-pointer items-center justify-center">
          <video src={videoUrl} width={400} height={320} controls autoPlay />
        </div>
      )}
    </div>
  );
};
