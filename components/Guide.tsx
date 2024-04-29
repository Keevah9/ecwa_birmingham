import Image from 'next/image'
import React from 'react'
import Camp from './Camp'
import ClipPath from '@/assets/svg/ClipPath'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import Button from './Button'

export const GuideItem = () => {
  return (

    <>
    {/* <div className='lg:gri hidden mt-8 grid-cols-4 gap-'>
      <div className=' p-6 bg-ecwadarkblue'>
        <h4 className='text-white leading-[32px] h-[4.5rem]'>All your heart</h4>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim. </p>
      </div>
      <div className=' p-6 bg-ecwaorange'>
        <h4 className='text-white  leading-[32px] h-[4.5rem]'>Praise</h4>
        <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
      </div>
      <div className=' p-6 bg-ecwadarkblue'>
        <h4 className='text-white leading-[32px] h-[4.5rem]'>Worships</h4>
        <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
      </div>
      <div className=' p-6 bg-ecwaorange'>
        <h4 className='text-white leading-[32px] h-[4.5rem]'>Prayers</h4>
        <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
      </div>
    </div> */}
      <div className='mt-8'>
         <Splide
        className="splide"
        hasTrack={false}
        options={{
          //@ts-ignore
          rewind: "true",
          perPage: 4,
          perMove: 1,
          pagination: false,
          arrows: false,
          lazyLoad: "nearby",
          gap: "1.5rem",
          snap: true,
          speed: 1000,
          easing: "linear",
          interval: 5000,
          type: "loop",
          autoplay: true,
          breakpoints: {
            "1024": {
              arrows: false,
              perPage: 2,
            },
            "920": {
              arrows: false,
              perPage: 2,
            },
            "540": {
              arrows: false,
              perPage: 1,
            },
          },
        }}
      >
        <SplideTrack className="splide__track">



          <SplideSlide

            className="splide__splide"
          >

            <div className='flex flex-col justify-center items-cente py-7 h-[13rem] px-6 bg-ecwadarkblue'>
              <h4 className='text-white leading-[32px] mb-3'>All your heart</h4>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim. </p>
            </div>


          </SplideSlide>
            <SplideSlide

              className="splide__splide"
            >

            <div className=' flex flex-col justify-center items-cente py-7 px-6 h-[13rem] bg-ecwaorange'>
              <h4 className='text-white  leading-[32px] mb-3'>Praise</h4>
                <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
              </div>


            </SplideSlide>
            <SplideSlide

              className="splide__splide"
            >

            <div className='flex flex-col justify-center items-cente py-7 px-6 h-[13rem] bg-ecwadarkblue'>
              <h4 className='text-white leading-[32px] mb-3'>Worships</h4>
                <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
              </div>


            </SplideSlide>
            <SplideSlide

              className="splide__splide"
            >

            <div className='flex flex-col justify-center items-cente py-7 px-6 h-[13rem] bg-ecwaorange'>
              <h4 className='text-white leading-[32px] mb-3'>Prayers</h4>
                <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
              </div>


            </SplideSlide>
            <SplideSlide

              className="splide__splide"
            >

            <div className='flex flex-col justify-center items-cente py-7 px-6 h-[13rem] bg-ecwadarkblue '>
                <h4 className='text-white leading-[32px] mb-3'>Bible Study</h4>
                <p className='text-white'>Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib.</p>
              </div>


            </SplideSlide>
          


        </SplideTrack>
      </Splide>
      
      </div></> 
  )
}

const Guide = () => {
  return (
    <section className="flexCente flex-col">
      <div className="padding-containe overflow-splide max-container w-full pb-">
        <Image src="/ecwa-logo.png" alt="camp" width={50} height={50} />
        <p className="uppercase border-b4 border-ecwadarkblue pb-1 w-fit mb-3 text-ecwaorange font-black">
          We are here...
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className=" max-w-xl"> To join hands together, to take a step further to Jesus</h2>
          <p className=" xl:max-w-[520px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim. Vivamus dapibus, urna et vestibulum fringilla, lorem risus suscipit nib</p>
        </div>
      </div>
      {/* <Camp/> */}
      <GuideItem/>

      {/* <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-blue-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Guide