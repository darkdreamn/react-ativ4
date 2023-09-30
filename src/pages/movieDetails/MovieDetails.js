import { useParams } from "react-router-dom"
import { MovieImage } from "../../components/MovieImage/MovieImage";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
	const { movieId } = useParams();
	const movie = useGetMovieDetail(movieId);

	return (
		<article className={styles.movie}>
			<MovieImage path={movie.poster_path} size={500} />

			<div className={styles.movieInfo}>
				<h1>{movie.title}</h1>

				<div className={styles.movieDescription}>
					{movie.overview}
				</div>
				<div>
					<ul>
						<li><span className={styles.topicInfor}>Data de lançamento: </span><span>{movie.release_date}</span></li>
						<li><span className={styles.topicInfor}>Nota: </span><span>{movie.vote_average}</span></li>
						<li><span className={styles.topicInfor}>Popularidade: </span><span>{movie.popularity}</span></li>
						<li><span className={styles.topicInfor}>Duração: </span><span>{`${movie.runtime} minutos`}</span></li>
					</ul>
				</div>
			</div>
		</article>
	)
}
