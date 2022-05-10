export const mapper = (movies) => {
    return movies.map(({ id, title, backdrop_path: img }) => (
        { id, title, img, isWatched: false }
    ));
};