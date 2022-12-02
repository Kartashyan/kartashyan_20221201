import { Form } from "@remix-run/react";

export const UploadVideoFormFields = () => {
    return (
        <section>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" />
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="video">Upload Video</label>
                <input id="video" name="video" role="upload-video" type="file" />
            </div>
            <img src="" role="show-thumbnail" alt="Video thumbnail" />
            <button type="submit" role="submit">Upload Video</button>
        </section>
    );
}