import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage/MovieImage";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/features/favorites";
import styles from "./movieItem.module.css";
import heartOff from '../../assets/heart0.png'
import heartOn from '../../assets/heart1.png'

export function MovieItem({ movie }) {
	const dispatch = useDispatch();
	const favoriteMovies = useSelector((state) => state.favorite.movies);

	return (
		<div className={styles.movie}>
			<Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
				<MovieImage path={movie.poster_path} />
				<h3>{movie.title}</h3>
			</Link>
			{favoriteMovies.find((m) => m.id === movie.id) ? (
				<img src={heartOn} className={styles.iconFavorite} alt="icone favorito vermelho" state="remove" onClick={() => dispatch(removeMovie(movie))} />
			) : (
				<img src={heartOff} className={styles.iconFavorite} alt="icone favorito apagado" onClick={() => dispatch(addMovie(movie))} />
			)}
		</div>
	)
}
