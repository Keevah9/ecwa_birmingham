import Image from 'next/image'
import React from 'react'
import Camp from './Camp'
import ClipPath from '@/assets/svg/ClipPath'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import Button from './Button'
interface GuideProps{
  Bg?: boolean
}
export const GuideItem = (props: GuideProps) => {
  return (
    <>
      <div className='mt-8'>
         <Splide
        className="splide"
        hasTrack={false}
        options={{
          //@ts-ignore
          rewind: "true",
          perPage: 3,
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
          <SplideSlide className="splide__splide"
          >
              <div className='flex rounded-[5px] flex-col justify-center bg-ecwadarkblue py-7 h-[16rem] px-6 '>
              <h4 className='text-white leading-[32px] mb-3'>All of our hearts</h4>
                <p className='text-white'>We serve God with all our hearts and give Him our best, offering our time, talents, and resources for His glory. It's a commitment to love Him above all else, to follow His commands faithfully, and to trust in His guidance completely. Serving God with all our heart is a joyful expression of gratitude for His love and grace, and it leads to a life of fulfillment, purpose, and blessing.</p>
            </div>

          </SplideSlide>
            <SplideSlide className="splide__splide">

              <div className={` flex rounded-[5px] flex-col justify-center py-7 px-6 h-[16rem] ${props.Bg ? 'bg-ecwadarkblue' : 'bg-white '}`}>
                <h4 className={`${props.Bg ? 'text-white' : ''} leading-[32px] mb-3`}>Praise</h4>
                <p className={`${props.Bg ? 'text-white' : ''} leading-[32px] mb-3`}>In praise, we find strength, joy, and connection—a harmonious dance with the divine. With each word of praise, we honor the beauty of existence and celebrate the boundless grace that surrounds us</p>
              </div>


            </SplideSlide>
            <SplideSlide

              className="splide__splide"
            >

              <div className='flex  rounded-[5px] flex-col justify-center py-7 px-6 h-[16rem] bg-ecwadarkblue'>
              <h4 className='text-white leading-[32px] mb-3'>Worships</h4>
                <p className='text-white'>In worship, we find solace, inspiration, and renewal—a divine dialogue that transcends time and space. It's a sacred journey where the mundane meets the miraculous, and the spirit finds its home in the presence of the divine.</p>
              </div>


            </SplideSlide>
            <SplideSlide

              className="splide__splide"
            >

              <div className={` rounded-[5px] flex flex-col justify-center items-cente py-7 px-6 h-[16rem] ${props.Bg ? ' bg-ecwadarkblue' : 'bg-white '}`}>
                <h4 className={` text-white ${props.Bg ? 'text-white' : ''} leading-[32px] mb-3`}>Prayers</h4>
                <p className={`${props.Bg ? 'text-white' : ''} `}>In prayers, we pour out our hearts, seeking guidance, comfort, and strength. It's a testament to faith, a communion with the divine, where words may falter, but the spirit speaks volumes. Through prayer, we find solace, healing, and a connection to something greater than ourselves.</p>
              </div>


            </SplideSlide>
            <SplideSlide className="splide__splide"
            >
              <div className='flex flex-col rounded-[5px] justify-center  py-7 px-6 h-[16rem] bg-ecwadarkblue '>
                <h4 className='text-white leading-[32px] mb-3'>Bible Study</h4>
                <p className='text-white'>Through diligent study, we gain insight into God's purpose, His promises, and His character. It's a chance to grow in knowledge, faith, and understanding, as we immerse ourselves in the living Word. Bible study is a sacred quest to know God more deeply, to walk in His ways, and to be transformed by His truth.</p>
              </div>
            </SplideSlide>
            </SplideTrack>
      </Splide>
      
      </div></> 
  )
}
interface GuideConProps{
  Bg?: boolean
}
const Guide = (props:GuideConProps) => {
  return (
    <section className="flexCente flex-col">
      <div className="padding-containe overflow-splide max-container w-full ">
        <Image src="/ecwa-logo.png" alt="camp" width={50} height={50} />
        <p className="uppercase border-b4 border-ecwadarkblue pb-1 w-fit mb-3 text-ecwaorange font-black">
          We are here...
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className=" max-w-xl leading-[35px]"> To join hands together, to take a step further to Jesus</h2>
          <p className=" xl:max-w-[520px]">Joining hands together signifies unity, strength, and support. Taking a step further towards Jesus represents a commitment to deepen one's faith and spiritual journey. It's a symbol of walking in the footsteps of Christ, following His teachings, and embracing His love and guidance in our lives. Together, as a community of believers, we strive to grow closer to Jesus, to live out His message of love and compassion, and to spread His light to others.</p>
        </div>
      </div>
      {/* <Camp/> */}
      <GuideItem Bg/>

    </section>
  )
}

export default Guide