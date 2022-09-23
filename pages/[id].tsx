import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../config';
import { basicFetch } from '../api-source/fetchFunctions';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Movie, Credits, Crew, Cast } from '../api-source/types';
import Header from '../components/Header/Header';
import BreadcrumbNav from '../components/BreadcrumbNav/BreadcrumbNav';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
import MovieInfo from '../components/MovieInfo/MovieInfo';

type Props = {
  movie: Movie;
  directors: Crew[];
  cast: Cast[];
};

const MoviePage: NextPage<Props> = ({ movie, cast, directors }) => (
  <main>
    <Header />
    <MovieInfo />
    <Grid>
      <Card />
    </Grid>
  </main>
);

export default MoviePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const movieEndpoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const movie = await basicFetch<Movie>(movieEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  //Get directors only
  const directors = credits.crew.filter((member) => member.job === 'Director');

  return {
    props: {
      movie,
      directors,
      cast: credits.cast
    },
    revalidate: 60 * 60 * 24 //re-build page every 24 hours
  };
};
