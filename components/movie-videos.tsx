import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  // console.log(`fecthing video :${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("not good");
  const res = await fetch(`${API_URL}/${id}/videos`, { cache: "force-cache" });
  return res.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
