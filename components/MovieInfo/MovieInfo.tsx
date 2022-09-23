import Image from 'next/image';
//Helping functions
import { calcTime, convertMoney } from '../../helpers';
//Components
import Thumb from '../Thumb/Thumb';
import Tag from '../Tag/Tag';
//Types
import type { Crew } from '../../api-source/types';

type Props = {
  title: string;
  year: string;
  thumbUrl: string;
  backgroundImgUrl: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = ({
  title,
  year,
  thumbUrl,
  backgroundImgUrl,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue
}: Props) => (
  <div className='relative w-full h-auto p-4'>
    <div className='relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-400 bg-opacity-80'>
      <div className='relative w-full h-96 md:h-auto md:w-1/3'>
        <Thumb imgUrl={thumbUrl} />
        <div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold'>
          {rating}
        </div>
      </div>
      <div className='text-black px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3'>
        <h2 className='text-2xl md:text-2xl font-bold pb-4'>
          {title} ({year})
        </h2>
        <h3 className='text-lg font-bold'>Summary:</h3>
        <p className='mb-8 text-sm md:text-sm'>{summary}</p>
        <div>
          <div>
            <h3 className='text-lg font-bold'>
              Director: {directors.length > 1 ? 's' : ' '}
            </h3>
            <div>
              {directors.map((director) => (
                <p className='mb-8 text-sm md:text-sm' key={director.credit_id}>
                  {director.name}
                </p>
              ))}
            </div>
          </div>
          <div className='mt-8'>
            <h3 className='text-lg font-bold'>Info:</h3>
            <Tag className='ml-0' text={`Running time: ${calcTime(time)}`} />
            <Tag text={`Budget: ${convertMoney(budget)}`} />
            <Tag text={`Revenue: ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      objectFit='cover'
      objectPosition='center'
      layout='fill'
      src={backgroundImgUrl}
      alt='thumb'
    />
  </div>
);

export default MovieInfo;
