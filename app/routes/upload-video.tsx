import { unstable_parseMultipartFormData as parseMultipartFormData } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import { UploadVideoFormFields } from "~/components/UploadVideoFormFields";
import { createVideo, getAllCategories } from "~/models/video.server";
import { uploadHandler } from "~/utils/file-upload-handler.server";

export async function loader({ request }: LoaderArgs) {
  const allCategories = await getAllCategories();
  return json({ allCategories });
}

export async function action({ request }: ActionArgs) {
  const formData = await parseMultipartFormData(request, uploadHandler);
  const title = formData.get("title") || "";
  const category = formData.get("category") || "";
  const video = formData.get("video");
  const thumbnail = formData.get("thumbnail") || "";
  const categoryName = category.toString() || "Exercise";
  //@ts-ignore
  const videoUrl = `videos/${video?.name}`;
  const res = await createVideo({
    title: title.toString(),
    thumbnail: thumbnail.toString(),
    //@ts-ignore
    categoryName,
  });
  console.log("log fields", {
    title,
    categoryName,
    video,
    thumbnail,
  });
  return redirect("/");
}

export default function UploadVideoPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-teal-200 mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  VIDEO UPLOAD
                </span>
              </h1>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <Form method="post" encType="multipart/form-data">
                  <UploadVideoFormFields
                    categoryList={data.allCategories}
                    titleFieldName="title"
                    categoryFieldName="category"
                    fileFieldName="video"
                    thumbnailFieldName="thumbnail"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
