import { component$, useSignal } from '@builder.io/qwik'
import { movies } from './data/movies'
import { MovieCard } from './components/movie-card'
import './app.css'

export const App = component$(() => {
  const searchTerm = useSignal('')

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )

  return (
    <main>
      <header>
        <h1>Movie Catalog</h1>
        <input
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
          filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p class="no-results">No movies found.</p>
        )}
      </section>
    </main>
  )
})