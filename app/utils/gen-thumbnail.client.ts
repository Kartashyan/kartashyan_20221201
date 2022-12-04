export type ThumbnailSet = {
  sm: string;
  md: string;
  lg: string;
};

const SQUARE = "SQUARE";
const LANDSCAPE = "LANDSCAPE";
const PORTRAIT = "PORTRAIT";

export async function getThumbnailSet(videoUrl: string): Promise<ThumbnailSet> {
  const [sm, md, lg] = await Promise.all([
    await getVideoThumbnail(videoUrl, [64, 64]),
    await getVideoThumbnail(videoUrl, [128, 128]),
    await getVideoThumbnail(videoUrl, [256, 256]),
  ]);
  return {
    sm,
    md,
    lg,
  };
}

export async function getVideoThumbnail(
  videoUrl: string,
  [width, height]: number[] = [256, 256]
) {
  const video = document.createElement("video");
  const canvas = document.createElement("canvas");
  video.style.display = "none";

  await new Promise((resolve) => {
    video.addEventListener("loadedmetadata", () => {
      const ratio = video.videoWidth / video.videoHeight;
      canvas.width = width;
      canvas.height = height;
      video.width = video.videoWidth;
      video.height = video.videoHeight;
      video.currentTime = video.duration * 0.2;
    });
    video.addEventListener("seeked", resolve);
    video.src = videoUrl;
  });

  const orientation = getOrientation(video.videoWidth, video.videoHeight);

  const smallSideSize = Math.min(video.videoWidth, video.videoHeight);

  switch (orientation) {
    case SQUARE:
      canvas.getContext("2d")?.drawImage(video, 0, 0, width, height);
      break;
    case LANDSCAPE:
      canvas
        .getContext("2d")
        ?.drawImage(
          video,
          (video.videoWidth - smallSideSize) / 2,
          0,
          smallSideSize,
          smallSideSize,
          0,
          0,
          width,
          height
        );
      break;
    case PORTRAIT:
      canvas
        .getContext("2d")
        ?.drawImage(
          video,
          0,
          (video.videoHeight - smallSideSize) / 2,
          smallSideSize,
          smallSideSize,
          0,
          0,
          width,
          height
        );
      break;
  }
  const imageUrl = canvas.toDataURL("image/png");
  return imageUrl;
}

function getOrientation(width: number, height: number) {
  if (width > height) {
    return LANDSCAPE;
  } else if (width < height) {
    return PORTRAIT;
  } else {
    return SQUARE;
  }
}
