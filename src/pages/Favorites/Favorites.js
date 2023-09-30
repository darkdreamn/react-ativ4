import { useSelector } from "react-redux";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import styles from './favorites.module.css'

export function Favorites() {
    const movies = useSelector(state => state.favorite.movies);

    return (
        <>
            <h3 className={styles.titleFavorite}>Filmes favoritos</h3>
            <MoviesList movies={movies} />
        </>
    )
}
