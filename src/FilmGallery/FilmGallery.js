import { FilmGalleryItem } from "./FilmGalleryItem";
import PropTypes from 'prop-types';

export const FilmGallery = ({ movies, onToggleWacthed }) => (
    <ul>
        {movies.map(({ id, title, img, isWatched }) => (
            <FilmGalleryItem
                key={id}
                id={id}
                title={title}
                img={img}
                isWatched={isWatched}
                onToggleWacthed={onToggleWacthed}          
            />
        ))};
    </ul>
)

FilmGallery.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    })).isRequired,
    onToggleWacthed: PropTypes.func.isRequired,
}