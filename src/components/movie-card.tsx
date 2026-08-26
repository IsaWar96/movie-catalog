import { component$ } from "@builder.io/qwik";
import type { Movie } from "../data/movies";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = component$<MovieCardProps>(({ movie }) => {
  return (
    <article class="movie-card">
      <img src={movie.image} alt={`Poster for ${movie.title}`} width="300" height="450" />
      <div class="movie-card-content">
        <h3>{movie.title}</h3>
        <p class="movie-meta">
          {movie.genre} · {movie.year}
        </p>
        <p class="movie-description">{movie.description}</p>
      </div>
    </article>
  );
});