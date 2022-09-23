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

const Movie: NextPage = () => (
  <main>
    <Header />
    <MovieInfo />
    <Grid>
      <Card />
    </Grid>
  </main>
);

export default Movie;
