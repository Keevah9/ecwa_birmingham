import { About_LINKS, FOOTER_CONTACT_INFO, FOOTER_LINKS, Invloved_LINKS, SOCIALS } from '@/constants'
import Logo from '@/constants/Logo';
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

interface FooterProps{
   id:number;
   url: string;
   label: string
}

interface AccordionBlockProps {
  title: string;
  children: ReactNode;
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
        <span
          title={props.label}
          className={
            "mb-3 flex items-center justify-between  text-[15px] font-light capitalize text-white lg:mb-0 xl:text-[16px]"
          }
        >
          {props.label}{" "}
          {props.category && (
            <span className='text-white -mr-4'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg></span>
          )}
        </span>
      </Link>
    </li>
  );
}

function AccordionBlock(props: AccordionBlockProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <>
      <div>
        <h3
          className={`flex items-center justify-between border-b-2 text-[18px] font-bold lg: lg:text-[18px] ${accordionOpen && "border-none"
            }  text-white border-ecwaorange  py-4`}
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {props.title}
          {accordionOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
          </svg>}
          
        </h3>
        {accordionOpen && (
          <p className="border-b-2 border-ecwaorange tex-white px-4 p-0 ">
            {props.children}{" "}
          </p>
        )}
      </div>
    </>
  );
}

const Footer = ({ footer }:any) => {
  return (
    <footer className="lg:flexCente bg-ecwadarkblue min-h-[570px]">
      <div className='flex max-container w-full text-center pt-16 '>
        
          <div className='flex flex-col w-full justify-center'>
            <Link href="/" >
            <a className="pb-6 mx-auto lg:w-60"><Logo /></a>
          </Link>
            <p className='mt-2  text-white text-center '>1st Ariel Scout, Birmingham</p>
          </div>
       
      </div>
      <div className="padding-containr  py-10 overflow-splide max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-between lg:flex-row">
         
<div className='w-full flex flex-col mt-6 lg:mt-0 gap-4'>
            <div className='block w-full lg:hidden'><div className=" border-t- list-none border-[#223B50]">
              <AccordionBlock title={FOOTER_LINKS[0].title}>
                <ul className={"list-none p-0 pb-3"}>
                  {FOOTER_LINKS[0].links.map((link: any) => (
                    <NavLink
                      category
                      key={link.id}
                    url={link.url}
                      label={link.label}
                    />
                  ))}
                </ul>
              </AccordionBlock>
            </div>
            <div>
              <AccordionBlock title={About_LINKS[0].title}>
                <ul className={"list-none p-0 pb-3"}>
                    {About_LINKS[0].links.map((link: any) => (
                    <NavLink
                      category
                      key={link.id}
                      url={link.url}
                      label={link.label}
                    />
                  ))}
                </ul>
              </AccordionBlock>
            </div>
              <AccordionBlock title={Invloved_LINKS[0].title}>
                <ul className={"list-none p-0 pb-3"}>
                  {Invloved_LINKS[0].links.map((link: any) => (
                    <NavLink
                      category
                      key={link.id}
                      url={link.url}
                      label={link.label}
                    />
                  ))}
                </ul>
              </AccordionBlock>
            </div>
            <div className="flex lg:hidden mt-6 text-center justify-center items-center flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <div>
                      <p className="whitespace-nowrap text-white">
                        {link.label}:
                      </p>
                      <p className="medium-14 whitespace-nowrap text-white">
                        {link.url}
                      </p>
                    </div>
                  </Link>
                ))}
              </FooterColumn>
              <FooterColumn>
                <ul className=" -mt-3 flex gap-4 ">
                  {SOCIALS.links.map((link: FooterProps) => (
                    <li key={link.id}>
                      <Link href={`${link.url}`} >
                        {/* <a href="">{link.label}</a> */}
                        <Image src={link.label} alt="logo" width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            </div>
</div>
          <div className='lg:flex hidden flex-wrap sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-1   flex flex-col gap-4 text-gray-">
                  {columns.links.map((link: FooterProps) => (
                    <li key={link.id} className='text-white'><Link href={`${link.url}`} >
                      {link.label}
                    </Link></li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            {About_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-1   flex flex-col gap-4 text-gray-">
                  {columns.links.map((link: FooterProps) => (
                    <li key={link.id} className='text-white'><Link href={`${link.url}`} >
                      {link.label}
                    </Link></li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            {Invloved_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-1   flex flex-col gap-4 text-gray-">
                  {columns.links.map((link: FooterProps) => (
                    <li key={link.id} className='text-white'><Link href={`${link.url}`} >
                      {link.label}
                    </Link></li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <div>
                      <p className="whitespace-nowrap text-white">
                        {link.label}:
                      </p>
                      <p className="medium-14 whitespace-nowrap text-white">
                        {link.url}
                      </p>
                    </div>
                  </Link>
                ))}
              </FooterColumn>
              <FooterColumn>
                <ul className=" -mt-4 flex gap-4 ">
                  {SOCIALS.links.map((link: FooterProps) => (
                    <li key={link.id}>
                      <Link href={`${link.url}`} >
                        {/* <a href="">{link.label}</a> */}
                        <Image src={link.label} alt="logo" width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            {/* <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className=" flex gap-4 ">
                  {SOCIALS.links.map((link:FooterProps) => (
                    <li key={link.id}>
                      <Link href={`${link.url}`} >
                        <Image src={link.label} alt="logo" width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div> */}
          </div>
        </div>

        
      <p className="w-full text-center mt-10 pb-16 text-white">2024 ECWA Birmingham | All rights reserved</p>
     
    </footer>
  )
}

type FooterColumnProps = {
  title?: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-ecwaorange whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer