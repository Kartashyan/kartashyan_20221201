export async function getVideoThumbnail(videoUrl: string) {
  const video = document.createElement("video");
  const canvas = document.createElement("canvas");
  video.style.display = "none";
  canvas.style.display = "none";

  await new Promise((resolve) => {
    video.addEventListener("loadedmetadata", () => {
      video.width = video.videoWidth;
      video.height = video.videoHeight;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = video.duration * 0.2;
    });
    video.addEventListener("seeked", resolve);
    video.src = videoUrl;
  });

  canvas
    .getContext("2d")
    ?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  const imageUrl = canvas.toDataURL("image/png");
  return imageUrl;
}
