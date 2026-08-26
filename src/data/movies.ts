export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  image: string;
  description: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    image: "https://placehold.co/300x450?text=Inception",
    description: "A thief who infiltrates dreams to steal secrets is offered one last impossible job.",
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Drama",
    year: 1972,
    image: "https://placehold.co/300x450?text=The+Godfather",
    description: "The aging patriarch of a crime family transfers control to his reluctant son.",
  },
  {
    id: 3,
    title: "Toy Story",
    genre: "Animation",
    year: 1995,
    image: "https://placehold.co/300x450?text=Toy+Story",
    description: "A cowboy doll is threatened when a new spaceman action figure arrives.",
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    image: "https://placehold.co/300x450?text=Interstellar",
    description: "Explorers travel through a wormhole in search of a new home for humanity.",
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    image: "https://placehold.co/300x450?text=The+Dark+Knight",
    description: "Batman faces a criminal mastermind who wants to plunge Gotham into chaos.",
  },
  {
    id: 6,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    image: "https://placehold.co/300x450?text=Parasite",
    description: "A poor family schemes their way into the lives of a wealthy household.",
  },
  {
    id: 7,
    title: "Spirited Away",
    genre: "Animation",
    year: 2001,
    image: "https://placehold.co/300x450?text=Spirited+Away",
    description: "A girl wandering into a spirit world must work to free herself and her parents.",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    image: "https://placehold.co/300x450?text=Pulp+Fiction",
    description: "The lives of two hitmen, a boxer, and a gangster's wife intertwine over one wild day.",
  },
  {
    id: 9,
    title: "Mad Max: Fury Road",
    genre: "Action",
    year: 2015,
    image: "https://placehold.co/300x450?text=Mad+Max",
    description: "A drifter joins a rebel warrior fleeing a tyrant across a desert wasteland.",
  },
  {
    id: 10,
    title: "Get Out",
    genre: "Horror",
    year: 2017,
    image: "https://placehold.co/300x450?text=Get+Out",
    description: "A young man uncovers a disturbing secret when he visits his girlfriend's family.",
  },
];