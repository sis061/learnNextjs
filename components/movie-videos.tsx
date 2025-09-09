import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

const getVideos = async (id: string) => {
  // console.log(`fecthing video :${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("not good");
  const res = await fetch(`${API_URL}/${id}/videos`, { cache: "force-cache" });
  return res.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((v) => (
        <iframe
          key={v.id}
          src={`https:www.youtube.com/embed/${v.key}`}
          title={v.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
