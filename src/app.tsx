import { component$, useSignal, $ } from '@builder.io/qwik'
import { movies } from './data/movies'
import { MovieCard } from './components/movie-card'
import './app.css'

export const App = component$(() => {
  const searchTerm = useSignal('')
  const favorites = useSignal<number[]>([])

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )

  const toggleFavorite = $((id: number) => {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter((favId) => favId !== id)
    } else {
      favorites.value = [...favorites.value, id]
    }
  })

  return (
    <main>
      <header>
        <h1>Movie Catalog</h1>
        <label for="search" class="sr-only">Search movies</label>
        <input
          id="search"
          type="text"
          class="search-input"
          placeholder="Search movies..."
          value={searchTerm.value}
          onInput$={(event) => {
            searchTerm.value = (event.target as HTMLInputElement).value
          }}
        />
      </header>

      <section class="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.value.includes(movie.id)}
              onToggleFavorite$={toggleFavorite}
            />
          ))
        ) : (
          <p class="no-results">No movies found.</p>
        )}
      </section>
    </main>
  )
})