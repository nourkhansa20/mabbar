"use client";
import React from 'react';
import Button from '../button';
import YouTubeEmbed from '../YouTubeEmbed';
import SocialMediaCard from './SocialMediaCard';
import Link from 'next/link';

interface Episode {
  title: string;
  description: string;
  img: string;
}

interface PodcastDetailsCardProps {
  title?: string;
  description?: string;
  releaseDate?: string;
  episodes?: Episode[];
}

const PodcastDetailsCard = ({
  title = 'Untitled Podcast',
  description = 'No description available',
  releaseDate = 'Unknown release date',
  episodes = []
}: PodcastDetailsCardProps) => {
  const showViewMore = episodes.length > 3; 
  const visibleEpisodes = showViewMore ? episodes.slice(0, 3) : episodes; 

  return (
    <div>
      <div className='flex flex-col-reverse lg:flex-row justify-between  lg:px-9 py-2 '>
        <div className='flex flex-col justify-center gap-2 lg:gap-5 mx-7 my-5'>
          <h3 className='lg:text-2xl font-bold'>{title}</h3>
          <p className='lg:text-2xl lg:w-[80%]'>{description}</p>
          <div className='lg:text-2xl'>
            <span className='text-secondary mr-4 font-bold'>RELEASED ON:</span>
            {releaseDate}
          </div>
          <Button>Learn More</Button>
        </div>
        <YouTubeEmbed videoId='Jq09wcYC4_E' className='h-[30ex] w-[30rx]' />
      </div>

      <div className='my-4'>
        {visibleEpisodes.map((episode, key) => (
          <div key={key} className='py-4 relative flex flex-col lg:flex-row justify-between items-center border border-t-0 border-x-0 border-b-black h-[10ex] group overflow-hidden'>
            <div className='absolute opacity-0 z-10 top-0 w-0 group-hover:w-full group-hover:opacity-100 h-full bg-black transition-all duration-700' />
            <h3 className='ml-3 z-20 text-xl font-bold text-black group-hover:text-white transition-all duration-700'>{episode.title}</h3>
            <div className="relative max-w-[40ex] break-words z-20 overflow-hidden text-black group-hover:text-white">
              <div className="line-clamp-3 transform translate-x-[40ex] group-hover:translate-x-0 transition-transform opacity-0 group-hover:opacity-100 duration-700">
                {episode.description}
              </div>
            </div>
            <div className='flex items-center gap-4 h-full right-0'>
              <SocialMediaCard iconSize={33} containerClassName='h-fit z-20 gap-[2ex] opacity-0 group-hover:opacity-100 transition-all duration-700' />
              <img src={episode.img} className='mr-3 w-[30ex] max-h-full relative z-20 right-0 -bottom-24 group-hover:bottom-0 transition-all duration-700' />
            </div>
          </div>
        ))}

        
        {showViewMore && (
          <div className='relative mt-5 mb-12'>
            <div className='absolute inset-0 -top-10 h-[10ex] bg-white/10 backdrop-blur-sm z-30' />
            <Link href='/episodes' className='absolute inset-0 z-40 flex items-center justify-center text-xl font-bold text-secondary transition-colors duration-300'>
              View More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastDetailsCard;