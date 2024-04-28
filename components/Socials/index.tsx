import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface SocialProps {
  FbLink?: boolean;
  TwLink?: string;
  IgLink?: string;
  InLink?: string;
  color?: boolean;
  style?: boolean
}
const Socials = (props: SocialProps) => {
  return (
    <div className={`h-fit ${props.style && 'w-full items-center justify-center'} flex w-full`}>
      {props.FbLink && <Link href={`https://www.facebook.com/UniqueExhibitions/`} legacyBehavior>
        <a title="facebook" target={"_blank"}
          className={` ${props.style ? 'w-[40px]' : ' w-[40px] lg:h-[26px lg:w-[25px]'} cursor-pointer  rounded-full ${props.color ? "text-[#F04A48]" : "text-[#FFF]"
            }`}
        >
          <FontAwesomeIcon icon={faFacebookF} className={` ${props.style ? 'max-h-[21.5px] text-[21px] lg:text-xl pr-l pt-[1px] pb-[1px' : 'text-2xl max-h-[22.5px] pt-[1.8px  pb-[1px lg:text-[21.5px]'}`} />
        </a>
      </Link>}
      {props.IgLink && <Link href={`${props.IgLink}`} legacyBehavior>
        <a title="instagram" target={"_blank"}
          className={` ${props.style ? 'w-[40px]' : 'w-[40px] lg:h-[20px] lg:w-[28px]'} cursor-pointer items-center rounded-full ${props.color ? "text-[#F04A48]" : "text-[#FFF]"
            }`}
        >
          <FontAwesomeIcon icon={faInstagram} className={` ${props.style ? 'text-[27px] lg:text-[2xl] max-h-[25px] pr-2 mt-' : 'text-2xl lg:text-[23px]'} `} />
        </a>
      </Link>}
      {props.TwLink && <Link href={`${props.TwLink}`} legacyBehavior>
        <a title="twitter" target={"_blank"}
          className={` ${props.style ? 'w-[40px]' : 'w-[40px] lg:h-[28px] lg:w-[28px]'} cursor-pointer items-center rounded-full ${props.color ? "text-[#F04A48]" : "text-[#FFF]"
            }`}
        >
          <FontAwesomeIcon icon={faTwitter} className={` ${props.style ? 'text-[23px] max-h-[25px] lg:text-[28px] pr-2 mt-' : 'lg:pl-1 text-2xl lg:text-[23px]'} `} />
        </a>
      </Link>}
      {props.InLink && <Link href={`${props.InLink}`} legacyBehavior>
        <a title="linkedin" target={"_blank"}
          className={`${props.style ? 'w-[40px] ' : 'w-[40px] lg:h-[26px] lg:w-fit'} flex  cursor-pointer  items-center rounded-full ${props.color ? "text-[#F04A48]" : "text-[#FFF]"
            }`}
        >
          <FontAwesomeIcon icon={faYoutube} className={` ${props.style ? 'text-[23px] max-h-[25px] lg:text-[24px] pb-[1.4px]  pl-1' : 'text-2xl lg:pl-3 pb-[1.4px] lg:text-[22px]'}  `} />
        </a>
      </Link>}
    </div>
  );
};

export default Socials;
