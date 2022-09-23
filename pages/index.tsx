import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
//Components
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import Spinner from '../components/Spinner/Spinner';
import Grid from '../components/Grid/Grid';
//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
//fetch hook
import { useFetchMovies } from '../api-source/fetchHooks';

const Home: NextPage = () => {
  const [query, setQuery] = React.useState('');
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);
  console.log(data);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  return (
    <main
      className='relative h-screen overflow-y-scroll'
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data.pages[0].results[0].backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : '/no-image.png'
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <Grid
        className='p-4 max-w-7xl m-auto'
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : `Popular Movies`
        }
      >
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <Card
                    imgUrl={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : '/no-image.png'
                    }
                    title={movie.original_title}
                  />
                </Link>
              ))
            )
          : null}
      </Grid>
      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  );
};

export default Home;
