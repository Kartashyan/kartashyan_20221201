import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { getAllVideos, getAllCategories } from "~/models/video.server";
import { Link, useLoaderData } from "@remix-run/react";
import { VideoItem } from "~/components/VideoItem";

export async function loader({ request }: LoaderArgs) {
  const videos = await getAllVideos();
  const allCategories = await getAllCategories();
  return json({ videos, allCategories });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <main className="relative flex min-h-screen flex-col bg-white sm:flex sm:items-center sm:justify-center">
      <div className="sticky top-0 flex h-4 w-full justify-end p-10">
        <Link to="upload-video">Upload</Link>
      </div>
      <div className="flex flex-col gap-4">
        {data.videos.map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            lgTmbnail={video.lgTmbnail}
            videoUrl={video.videoUrl}
            categoryName={video.categoryName}
          />
        ))}
      </div>
    </main>
  );
}
