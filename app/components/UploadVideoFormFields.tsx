import type { Category } from "~/models/video.server";

type Props = {
  categoryList: Category[];
  titleFieldName: string;
  categoryFieldName: string;
  fileFieldName: string;
  thumbnailFieldName: string;
};

export const UploadVideoFormFields = ({
  categoryList,
  titleFieldName,
  categoryFieldName,
  fileFieldName,
  thumbnailFieldName,
}: Props) => {
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
          name={fileFieldName}
          data-testid={fileFieldName}
          type="file"
        />
      </div>
      <img src="" alt="Video thumbnail" />
      <input
        type="hidden"
        name={thumbnailFieldName}
        data-testid={thumbnailFieldName}
      />
      <div className="flex justify-center">
        <button className="w-full rounded bg-teal-900 px-4 py-2 text-white shadow-xl">
          Upload
        </button>
      </div>
    </section>
  );
};
