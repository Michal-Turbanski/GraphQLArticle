let movies = [
    { id: '1', title: 'Inception', category: ['Action', 'Adventure', 'Sci-Fi'] },
    { id: '2', title: 'The Matrix', category: ['Action', 'Sci-Fi'] },
    { id: '3', title: 'Interstellar', category: ['Adventure', 'Drama', 'Sci-Fi'] },
    { id: '4', title: 'The Dark Knight', category: ['Action', 'Crime', 'Drama'] },
    { id: '5', title: 'Pulp Fiction', category: ['Crime', 'Drama'] },
];

let authors = [
    { id: '1', name: 'John', verified: true },
    { id: '2', name: 'Sarah', verified: false },
    { id: '3', name: 'Mike', verified: true },
];

let reviews = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', movie_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', movie_id: '1' },
    { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', movie_id: '3' },
    { id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', movie_id: '4' },
    { id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', movie_id: '5' },
    { id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', movie_id: '2' },
    { id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', movie_id: '1' },
];

export default { movies, authors, reviews }