import { component$, type PropFunction } from '@builder.io/qwik'
import type { Movie } from '../data/movies'

interface MovieCardProps {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite$: PropFunction<(id: number) => void>
}

export const MovieCard = component$<MovieCardProps>(
  ({ movie, isFavorite, onToggleFavorite$ }) => {
    return (
      <article class={{ 'movie-card': true, favorited: isFavorite }}>
        <div class="poster-wrapper">
          <img src={movie.image} alt={`Poster for ${movie.title}`} width="300" height="450" />
          <button
            type="button"
            class="favorite-button"
            onClick$={() => onToggleFavorite$(movie.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>
        <div class="movie-card-content">
          <h3>{movie.title}</h3>
          <p class="movie-meta">
            {movie.genre} · {movie.year}
          </p>
          <p class="movie-description">{movie.description}</p>
        </div>
      </article>
    )
  }
)