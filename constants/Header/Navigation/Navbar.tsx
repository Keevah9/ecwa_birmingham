// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "../../../components/Button"

// const Navbar = ({ global, header }:any) => {
//   return (
//     <nav className="flexBetween max-container relative z-30 ">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//             {link.label}
//           </Link>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button 
//           type="button"
//           title="Give"
//           // icon="/user.svg"
//           variant="btn_dark_blue"
//         />
//       </div>

//       <Image 
//         src="/menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   )
// }

// export default Navbar


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext, useRef } from "react";
dynamic
// import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { useRouter } from "next/router";
import Breadcrumbs from "nextjs-breadcrumbs";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";

import dynamic from "next/dynamic";

const Navigation = dynamic(() => import('../Navigation/Navigation'));
const Slideout = dynamic(() => import('../Navigation/Slideout'));
const RequestCallBack = dynamic(() => import('../../../components/RequestCallback'));
const Logo = dynamic(() => import('../../Logo'));
//@ts-ignore
// import useMobileDetect from 'use-mobile-detect-hook';
import { ModalContext } from "@/constants/lib/context/demo-modal";
import Socials from "@/components/Socials";
import Button from "@/components/Button";
import { NAV_LINKS } from "@/constants";

export type navLinksTypes = {
  id: number;
  url: string;
  label: string;
  isBold?: boolean;
  submenu?: any;
  NavMenus?: any;
  Telephone: number;

};

//@ts-ignore
export default function Header({ global, header }) {
  const { pathname } = useRouter();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);
  const [slideoutOpen, setSlideoutOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const detectMobile = useMobileDetect();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const {
    modalVisible,
    setModalVisible,
    quoteModalVisible,
    setQuoteModalVisible,
  } = useContext(ModalContext);

  return (
    <>
      {/* <div className="bg-[#223B50]">
        <div className={" cms-container hidden items-center justify-between py-1 text-[13px] text-white lg:flex"}
        >
          <p className="text-[13px] text-white">
            Need help? Our friendly team are on hand to help
            <a href={`tel:${header.TelephoneNumber}`} className="pl-1 text-[13px] text-white "
            >
              {header.TelephoneNumber}
            </a>
          </p>
          <div className="pt-1">
            <Socials
              FbLink
              TwLink={header.Twitter}
              IgLink={header.Instagram}
              InLink={header.Linkedin}
            />
          </div>
        </div>
      </div> */}
      <div className="bg-[#223B50]">
        <div className={" cms-container hidden items-center justify-between py-1 text-[13px] text-white lg:flex"}
        >
          <p className="text-[13px] text-white">
            Need help? Our friendly team are on hand to help
            <a href={`tel:${header.TelephoneNumber}`} className="pl-1 text-[13px] text-white "
            >
              {header.TelephoneNumber}
            </a>
          </p>
          {/* <div className="pt-1">
            <Socials
              FbLink
              TwLink={header.Twitter}
              IgLink={header.Instagram}
              InLink={header.Linkedin}
            />
          </div> */}
        </div>
      </div>
      <header className={`drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] sticky transition-shadow duration-300 z-[40] top-0 w-full border `}>
        <div className={"py-0 "}>
          <div className={"max-container relative flex w-full items-center border justify-between py-4"}
          >
            <div className="flex border w-fi justify-between items-center gap-6 lg:gap-4 ">
              <div className="my-2  md:block lg:hidden">
                {/* <FontAwesomeIcon
                  icon={faBars as IconProp}
                  onClick={() => setSlideoutOpen(true)}
                  className={"cursor-pointer text-[30px]"}
                /> */} +
              </div>
              <Logo />
            </div>

            <div className="flex h-fit text-center gap-4 justify-center  border xl:w-full w-full lg:items-center 2xl:gap-10">
              <Navigation navLinks={NAV_LINKS} />
              <div className="hidden gap-2 xl:gap-3 lg:flex">


                <div onClick={() => setModalVisible(true)}>
                  <div className=" flex items-center">
                    <Button type={"button"} title={"text"} variant={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slideout
          open={slideoutOpen}
          setOpen={setSlideoutOpen}
          navLinks={NAV_LINKS}
        />
      </header>

      {!isHome && (
        <div className="cms-container pt-6 mb-6">
          <div className=" items-center justify-center text-xs font-light  md:h-[45px] md:rounded-full md:text-sm md:font-medium">
            <Breadcrumbs
              rootLabel="Home"
              listClassName={"flex flex-wrap link flex-row text-[16px]"}
              inactiveItemClassName={"breadcrumb-seperator capitalize"}
              activeItemClassName={"capitalize bread-crumb"}
            />
          </div>
        </div>
      )}
      <RequestCallBack />
    </>
  );
}
