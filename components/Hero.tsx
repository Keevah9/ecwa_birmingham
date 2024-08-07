import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="hidden flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative max-container padding-container z-20 flex flex-1 flex-col xl:w-1/2">
        <span className='text-[13px] font-bold text-btn_blue'>LET&apos;S WORSHIP TOGETHER</span>
        <h1 className="bold-52 lg:bold-88 capitalize">Jesus is <br /> my hope</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="flex flex-col w-full gap-3 mt-11 sm:flex-row">
          <Button 
            type="button" 
            title="About Us" 
            variant="btn_blue" 
            link='/about-us'
          />
          {/* modal */}
          <Button 
            type="button" 
            title="Visit Us" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[300px flex-col gap-8 rounded-3xl bg-blue-100 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Church</p>
              {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
            </div>
            <span className="font-bold text-white text-[13px]">Evangelical Church Winning All</span>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Location</p>
              <span className="font-bold text-white text-[13px] ">Birmingham</span>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero