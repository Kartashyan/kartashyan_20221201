import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { Header } from "~/components/Header";
import VideoItemList from "~/components/VideoItemList";
import { VideoModal } from "~/components/VideoModal";
import { getAllCategories, getAllVideos } from "~/models/video.server";

export async function loader({ request }: LoaderArgs) {
  const videos = await getAllVideos();
  const allCategories = await getAllCategories();
  return json({ videos, allCategories });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <main className="relative flex min-h-screen flex-col bg-white sm:flex sm:items-center">
      <Header />
      <VideoItemList list={data.videos} />
      <VideoModal />
    </main>
  );
}
