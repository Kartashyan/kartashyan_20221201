import { Form } from "@remix-run/react";
import { ActionArgs, redirect } from "@remix-run/server-runtime";
import { UploadVideoFormFields } from "~/components/UploadVideoFormFields";

export function action({ request }: ActionArgs) {
    return redirect("/");
}

export default function UploadVideoPage() {
    return (
        <>
            <h1>Upload Video Form</h1>
            <Form method="post" encType="multipart/form-data">
                <UploadVideoFormFields />
            </Form>
        </>
    );
}