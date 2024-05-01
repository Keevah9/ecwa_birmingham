// import { FEATURES } from '@/constants'
// import Image from 'next/image'
// import React from 'react'
// import Button from './Button'

// const Features = () => {
//   return (
//     <div className="flex-col flexCenter overflow-hidden ">
//       <div className="max-container padding-containe relative w-full gap-20 fle justify-end">
//         {/* <div className="flex relative flex-1  lg:w-[50%] xlg:min-h-[900px]">
//           <Image style={{borderRadius: "10px"}}
//             src="/church8.jpg"
//             alt="phone"
//            layout='fill'
//             className="feature-phon"
//           />
//         </div> */}

//         <div className="z-20 flex w-full flex-col lg:w-[50%">
//           {/* <div className='relative'>
//             <Image
//               src="/ecwa-logo.png"
//               alt="camp"
//               width={50}
//               height={50}
//               className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
//             />
//             <span className="font-black mb-4 text-ecwaorange">JOIN A LIFE GROUP</span>
//             <h2 className="">ECWA Birmingham</h2>
//             <p> We welcome you with great joy to ECWA Birmingham. We are here to share the great news of Jesus Christ to all that will listen.

//               The name of the Lord is a strong tower; the righteous run into it and are safe.

//             </p>
//           </div> */}
//           <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
//             {FEATURES.map((feature) => (
//               <FeatureItem
//                 key={feature.title}
//                 title={feature.title}
//                 icon={feature.icon}
//                 description={feature.description}
//               />
//             ))}
//           </ul>
//         </div>
       
//       </div>
//       <Button type={'button'} title={'Learn More'} variant={'btn_blue'} />
//     </div>
//   )
// }

// type FeatureItem = {
//   title: string;
//   icon: string;
//   description: string;
// }

// const FeatureItem = ({ title, icon, description }: FeatureItem) => {
//   return (
//     <li className="flex w-full flex-1  flex-col justify-center items-start">
//       <div className="rounded-full cursor-pointer flex items-center justify-center p-4 lg:p-6 bg-ecwaorange hover:bg-ecwadarkblue">
//         <Image src={icon} alt="map" width={28} height={28} />
//       </div>
//       <h4 className=" mt-5 max-w-[18rem] capitalize text-ecwadarkblue leading-9">
//         {title}
//       </h4>
//       <p className=" mt-4 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
//         {description}
//       </p>
//     </li>
//   )
// }

// export default Features



import styles, { layout } from "@/constants/style";
import { features } from "../constants";

import Button from "./Button";
import AchievementsSection from "@/constants/Homepage/HeroSlider/Achievement";

const FeatureCard = ({ icon, title, content, index }: any) => (
  <div className={`flex items-start flex-row pb-3 rounded-[20px] ${index !== features.length - 1 ? "" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px]  rounded-full  bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] mt-2 h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className=" ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`  max-container overflow-splide`}>
    <div className={`relativ flex lg:gap-8 mb-8 lg:flex-row flex-col items-cente justify-between`}>
      <div >
        <span>About Us</span>
        <h2 className="leading-[35px]">
          Lorem ipsum dolor sit amet
        </h2>
        <p className={`${styles.paragraph}  mb-8 max-w-[470px] mt-3`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget risus mauris. Sed pharetra sem in nunc pulvinar dignissim.
        </p>

        <div className="w-40 lg:block hidden"><Button title="More about us" style link="/about-us" variant="btn" /></div>
      </div>

      <div className={` flex-col flex lg:w-[45%]`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <div className="w-40 block mt-8 mx-auto lg:hidden"><Button title="More about us" style link="/about-us" variant="btn" /></div>
   </div>
    <AchievementsSection />
  </section>
);

export default Business;