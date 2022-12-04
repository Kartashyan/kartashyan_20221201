import type { Video } from "@prisma/client";
import { useVideoModalContext } from "~/hooks/useVideoModalContext";

type Props = Pick<Video, "title" | "categoryName" | "videoUrl" | "lgTmbnail">;

export const VideoItem = ({
  videoUrl,
  title,
  categoryName,
  lgTmbnail,
}: Props) => {
  const { setSource } = useVideoModalContext();

  const hanldeClick = () => {
    setSource(videoUrl);
  };

  return (
    <li className="relative">
      <p className="pointer-events-none mb-2 block truncate text-sm font-medium text-gray-900">
        {categoryName}
      </p>

      <div className="group relative block w-full overflow-hidden rounded-lg">
        <img
          src={lgTmbnail}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">{title}</span>
        </button>

        <div
          onClick={hanldeClick}
          className="absolute inset-0  flex h-full w-full cursor-pointer items-center justify-center bg-slate-400/20 font-extrabold leading-4 text-black opacity-0 transition-opacity hover:opacity-100"
        >
          {title}
        </div>
      </div>
    </li>
  );
};
