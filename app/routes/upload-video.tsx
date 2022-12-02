import { Form, useLoaderData } from "@remix-run/react";
import {
  ActionArgs,
  json,
  LoaderArgs,
  redirect,
} from "@remix-run/server-runtime";
import { UploadVideoFormFields } from "~/components/UploadVideoFormFields";
import { getAllCategories } from "~/models/video.server";

export async function loader({ request }: LoaderArgs) {
  const allCategories = await getAllCategories();
  return json({ allCategories });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const category = formData.get("category");
  const video = formData.get("video");
  const thumbnail = formData.get("thumbnail");
  console.log("log fields", {
    title,
    category,
    video,
    thumbnail,
  });
  return redirect("/");
}

export default function UploadVideoPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Upload Video Form</h1>
      <Form method="post" encType="multipart/form-data">
        <UploadVideoFormFields
          categoryList={data.allCategories}
          titleFieldName="title"
          categoryFieldName="category"
          fileFieldName="video"
          thumbnailFieldName="thumbnail"
        />
      </Form>
    </>
  );
}
