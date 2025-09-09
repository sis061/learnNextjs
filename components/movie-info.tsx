import styles from "../styles/movie-info.module.css";

import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
  //   console.log(`fecthing movie :${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt="" className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          {" "}
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
