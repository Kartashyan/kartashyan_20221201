import { Video } from "~/models/video.server";
import { VideoItem } from "./VideoItem";

export default function VideoItemList({ list }: { list: Video[] }) {
  return (
    <div className="container mx-auto mt-8 px-2 sm:px-6 lg:px-8">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {list.map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            lgTmbnail={video.lgTmbnail}
            videoUrl={video.videoUrl}
            categoryName={video.categoryName}
          />
        ))}
      </ul>
    </div>
  );
}
