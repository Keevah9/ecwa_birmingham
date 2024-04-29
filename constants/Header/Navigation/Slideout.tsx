// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, {
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
} from "react";
//@ts-ignore
import { Dialog, Transition } from "@headlessui/react";
// import { navLinksTypes } from "../Header/Header";
// import {
//   faPlus,
//   faMinus,
//   faAngleRight,
// } from "@fortawesome/pro-regular-svg-icons";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { faClose } from "@fortawesome/pro-regular-svg-icons";
// import { Fragment } from "react";
// import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { CompanyMenu, ExhibitionStandsMenu } from "./Navigation";
//@ts-ignore
// import useMobileDetect from 'use-mobile-detect-hook';
import { ModalContext } from "@/constants/lib/context/demo-modal";
import Socials from "@/components/Socials";

interface LocalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navLinks: any;
}

interface NavLinkProps {
  url: string;
  label: string;
  category?: boolean;
}

function NavLink(props: NavLinkProps) {
  return (
    <li>
      <Link href={`/${props.url}`} legacyBehavior>
        <a
          title={props.label}
          className={
            "mb-3 flex text-[16px] justify-between items-center font-medium text-white hover:cursor-pointer lg:mb-0 xl:text-[16px]"
          }
        >
          {props.label}{" "}
          {props.category && (
            <></>
          )}
        </a>
      </Link>
    </li>
  );
}
interface AccordionBlockProps {
  title: string;
  children: ReactNode;
}
function AccordionBlock(props: AccordionBlockProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
      <div>
        <h3
          className={`mb-4 px-4 flex justify-between items-center border-t border-[#223B50] pt-5  hover:cursor-pointer text-[16px] font-bold`}
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {props.title}
{/* 
          <FontAwesomeIcon
            icon={accordionOpen ? faMinus : faPlus}
            className="border-none hover:cursor-pointer text-lg"
          /> */}
        </h3>
        {accordionOpen && <div className="p-0 pl-8 pr-2 font-sans">{props.children} </div>}
      </div>
  );
}
export default function Slideout(props: LocalProps) {
  const { modalVisible, setModalVisible, setQuoteModalVisible } = useContext(ModalContext);
  // const detectMobile = useMobileDetect();
  return (
    <div>
    
    </div>
  );
}


{/* <Transition.Root show={props.open} as={Fragment}>
  <Dialog
    as="div"
    className="fixed inset-0 z-50 flex"
    onClose={() => props.setOpen(false)}
  >
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog.Overlay className="absolute inset-0 bg-uniquedarkgrey backdrop-blur-sm transition-opacity" />
    </Transition.Child>

    <Transition.Child
      as={Fragment}
      enter="transition ease-in-out duration-500 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-500 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="trans absolute inset-0 overflow-hidden">
        <div className="left-right pointer-events-none fixed inset-y-0 flex max-w-full">
          <div className="pointer-events-auto relative flex w-screen flex-col overflow-y-auto bg-uniquedarkgrey text-white">
            <div
              className={`border-red bg-nwbmdarkgrey absolute pt-10 top-0 z-50 min-h-screen w-full list-none  px-[1.3em] py-[1.3em] text-white `}
            >
              <div className="mb-8 items-center">
                <FontAwesomeIcon
                  icon={faClose as IconProp}
                  onClick={() => props.setOpen(false)}
                  className="mb-3 mr-4 cursor-pointer text-[30px] "
                />
                <h2 className="text-[22px] max-w-[17rem] lg:max-w-[28rem] font-black  capitalize text-[#F04A48]">
                  Multi award winning design and build exhibition stand
                  company
                </h2>
              </div>
              <div className=" list-none border-t-[1px] border-[#223B50]">
                <div className=" flex items-center justify-between px-4 p-0">
                  <Link href={`/`} title='Home'>
                    <p
                      onClick={() => props.setOpen(false)}
                      className="mb-4 flex w-full items-center justify-between  border-[#223B50] pt-5  text-[16px] hover:cursor-pointer font-bold"
                    >
                      Home
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="border-none hover:cursor-pointer text-lg"
                      />
                    </p>
                  </Link>
                </div>
              </div>
              <div className=" border-t-[1px] list-none border-[#223B50]">
                <div className=" flex items-center justify-between px-4 p-0">
                  <Link href={`/exhibition-stands`} title={props.navLinks.NavMenus[0].NavMenuName}>
                    <p
                      onClick={() => props.setOpen(false)}
                      className="mb-4 flex w-full items-center justify-between  border-[#223B50] hover:cursor-pointer pt-5  text-[16px] font-bold"
                    >
                      {props.navLinks.NavMenus[0].NavMenuName}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="border-none hover:cursor-pointer text-lg"
                      />
                    </p>
                  </Link>
                </div>

              </div>
              <div className=" list-none border-[#223B50]">
                <AccordionBlock
                  title={props.navLinks.NavMenus[1].NavMenuName}
                >
                  <ul
                    className={"list-none  p-0 pb-3"}
                    onClick={() => props.setOpen(false)}
                  >
                    {props.navLinks.NavMenus[1].Pages.data.map(
                      (link: any) => (
                        <NavLink
                          category
                          key={link.attributes.id}
                          url={link.attributes.Slug}
                          label={link.attributes.PageSubTitle}
                        />
                      )
                    )}
                  </ul>
                </AccordionBlock>
              </div>
              <div className=" border-t-[1px] list-none border-[#223B50]">
                <div className=" flex items-center justify-between px-4 p-0">
                  <Link href={`/portfolio-of-work`} title={props.navLinks.NavMenus[2].NavMenuName}>
                    <span
                      onClick={() => props.setOpen(false)}
                      className="mb-4 flex w-full items-center hover:cursor-pointer justify-between  border-[#223B50] pt-5  text-[16px] font-bold"
                    >
                      {props.navLinks.NavMenus[2].NavMenuName}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="border-none hover:cursor-pointer text-lg"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className=" border-b-[1px] list-none border-[#223B50]">
                <AccordionBlock
                  title={props.navLinks.NavMenus[3].NavMenuName}
                >
                  <ul
                    className={"list-none p-0 pb-3"}
                    onClick={() => props.setOpen(false)}
                  >
                    {props.navLinks.NavMenus[3].Pages.data.map(
                      (link: any) => (
                        <NavLink
                          category
                          key={link.attributes.id}
                          url={link.attributes.Slug}
                          label={link.attributes.PageSubTitle}
                        />
                      )
                    )}
                    {CompanyMenu.map((links: any) => {
                      return (
                        <NavLink
                          category
                          key={links.id}
                          url={`${links.slug}`}
                          label={links.PageSubTitle}
                        />
                      );
                    })}
                    <NavLink
                      category
                      url={`/contact`}
                      label={"Get in touch"}
                    />
                  </ul>
                </AccordionBlock>
              </div>

              <div className=" mt-12 flex flex-col justify-center gap-5 sm:flex-row lg:hidden">

                <>
                  <span onClick={() => {
                    props.setOpen(false)
                    setQuoteModalVisible(true)
                  }}>
                    
                  </span>
                  <span onClick={() => {
                    props.setOpen(false)
                    setModalVisible(true)
                  }}>
                    
                  </span>
                </>

              </div>
              <div
                className={
                  " cms-container mt-8 flex justify-center text-center  xl:hidden"
                }
              >
                <div className=" w-full  lg:w-1/2">
                  <a
                    href={`tel:${props.navLinks.TelephoneNumber}`}
                    className="text-[30px]  font-black  text-white lg:text-[34px]"
                  >
                    {" "}
                    {props.navLinks.TelephoneNumber}
                  </a>{" "}
                  <div className="mt-3 mx-auto flex w-full justify-center  ">
                    <Socials
                      FbLink
                      TwLink={props.navLinks.Twitter}
                      IgLink={props.navLinks.Instagram}
                      InLink={props.navLinks.Linkedin}
                      color
                      style
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition.Child>
  </Dialog>
</Transition.Root> */}