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
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input id="title" name={titleFieldName} data-testid={titleFieldName} />
      </div>
      <label htmlFor="category">Choose a car:</label>

      <select
        id="category"
        name={categoryFieldName}
        data-testid={categoryFieldName}
      >
        {categoryList.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="video">Upload Video</label>
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
      <button type="submit">
        Upload Video
      </button>
    </section>
  );
};
