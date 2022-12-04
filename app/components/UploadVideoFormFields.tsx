import React, { useEffect, useRef, useState } from "react";
import type { Category } from "~/models/video.server";
import { getThumbnailSet, getVideoThumbnail, ThumbnailSet } from "~/utils/gen-thumbnail.client";

type Props = {
  categoryList: Category[];
  titleFieldName: string;
  categoryFieldName: string;
  fileFieldName: string;
  smallThumbnailFieldName: string;
  mediumThumbnailFieldName: string;
  largeThumbnailFieldName: string;
};

export const UploadVideoFormFields = ({
  categoryList,
  titleFieldName,
  categoryFieldName,
  fileFieldName,
  smallThumbnailFieldName,
  mediumThumbnailFieldName,
  largeThumbnailFieldName,
}: Props) => {
  const [thumbnailSet, setThumbnailSet] = useState<null | ThumbnailSet>(null);

  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    const file = files?.length ? files[0] : new Blob();
    const fileUrl = URL.createObjectURL(file);
    setThumbnailSet(await getThumbnailSet(fileUrl));

  };
  return (
    <section>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Title: </span>
          <input
            name={titleFieldName}
            data-testid={titleFieldName}
            className="w-full rounded px-4 py-2 text-teal-900 shadow-xl"
            required
          />
        </label>
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Category: </span>
          <select
            name={categoryFieldName}
            data-testid={categoryFieldName}
            className="w-full rounded px-4 py-2 text-teal-900 shadow-xl"
          >
            {categoryList.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="pt-2 pb-2">
        <input
          id="video"
          required
          name={fileFieldName}
          onChange={handleFileInputChange}
          accept=".mp4, .mov"
          data-testid={fileFieldName}
          type="file"
        />
      </div>
      {thumbnailSet && (
        <>
          <img src={thumbnailSet.sm} width="64" height="64" alt="Video thumbnail" />
          <img
            src={thumbnailSet.md}
            width="128"
            height="128"
            alt="Video thumbnail"
          />
          <img
            src={thumbnailSet.lg}
            width="256"
            height="256"
            alt="Video thumbnail"
          />
        </>
      )}
      <input
        type="hidden"
        value={thumbnailSet?.sm}
        name={smallThumbnailFieldName}
        data-testid={smallThumbnailFieldName}
      />
      <input
        type="hidden"
        value={thumbnailSet?.md}
        name={mediumThumbnailFieldName}
        data-testid={mediumThumbnailFieldName}
      />
      <input
        type="hidden"
        value={thumbnailSet?.lg}
        name={largeThumbnailFieldName}
        data-testid={largeThumbnailFieldName}
      />
      <div className="flex justify-center">
        <button className="w-full rounded bg-teal-900 px-4 py-2 text-white shadow-xl">
          Upload
        </button>
      </div>
    </section>
  );
};
