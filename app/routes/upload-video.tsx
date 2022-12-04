import { unstable_parseMultipartFormData as parseMultipartFormData } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import { UploadVideoFormFields } from "~/components/UploadVideoFormFields";
import {
  CategoryName,
  createVideo,
  getAllCategories,
} from "~/models/video.server";
import { uploadHandler } from "~/utils/file-upload-handler.server";

export async function loader({ request }: LoaderArgs) {
  const allCategories = await getAllCategories();
  return json({ allCategories });
}

export async function action({ request }: ActionArgs) {
  const formData = await parseMultipartFormData(request, uploadHandler);
  const title = formData.get("title") || "";
  const category = (formData.get("category") as CategoryName) || "Exercise";
  const video = formData.get("video") as { name: string };
  const smTmbnail = formData.get("smThumbnail") as string;
  const mdTmbnail = formData.get("mdThumbnail") as string;
  const lgTmbnail = formData.get("lgThumbnail") as string;
  const videoUrl = `videos/${video?.name}`;
  await createVideo({
    title: title.toString(),
    videoUrl,
    smTmbnail: smTmbnail,
    mdTmbnail: mdTmbnail.toString(),
    lgTmbnail: lgTmbnail.toString(),
    categoryName: category,
  });
  return redirect("/");
}

export default function UploadVideoPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="relative min-h-screen rounded-lg bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative rounded bg-teal-500 px-8 py-16 text-white">
        <h1 className="text-center text-xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
          <span className="block uppercase drop-shadow-md">VIDEO UPLOAD</span>
        </h1>
        <div className="mx-auto mt-4 max-w-sm sm:flex sm:max-w-none sm:justify-center">
          <Form method="post" encType="multipart/form-data">
            <UploadVideoFormFields
              categoryList={data.allCategories}
              titleFieldName="title"
              categoryFieldName="category"
              fileFieldName="video"
              smallThumbnailFieldName="smThumbnail"
              mediumThumbnailFieldName="mdThumbnail"
              largeThumbnailFieldName="lgThumbnail"
            />
          </Form>
        </div>
      </div>
    </main>
  );
}
