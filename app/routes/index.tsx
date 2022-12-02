import { json, LoaderArgs } from "@remix-run/server-runtime";
import { getAllVideos, getAllCategories } from "~/models/video.server";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const videos = await getAllVideos();
  const allCategories = await getAllCategories();
  return json({ videos, allCategories });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log("front log", data);
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1>Hello World</h1>
        </div>
      </div>
    </main>
  );
}
