import React, { useState, useRef } from 'react';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 600; //ms

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = useState('');
  const timer = useRef<NodeJS.Timeout>();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        className='h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-300 text-black focus:outline-none focus:border focus:border-solid focus:border-cyan-100'
        type='text'
        placeholder='Search Movie'
        value={text}
        onChange={handleInput}
      />
    </>
  );
};

export default SearchInput;
