// src/app.tsx
import { component$ } from '@builder.io/qwik'
import { movies } from './data/movies'
import { MovieCard } from './components/movie-card'
import './app.css'

export const App = component$(() => {
  return (
    <main>
      <header>
        <h1>Movie Catalog</h1>
      </header>

      <section class="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  )
})