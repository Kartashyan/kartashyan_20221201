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
  console.log("front log", data);
  return (
    <main className="relative flex min-h-screen flex-col bg-white sm:flex sm:items-center sm:justify-center">
      <Link to="upload-video">Upload</Link>
      <div className="flex flex-col gap-4">
        {data.videos.map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            videoUrl={video.videoUrl}
            categoryName={video.categoryName}
          />
        ))}
      </div>
    </main>
  );
}
