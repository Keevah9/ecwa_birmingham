import { About_LINKS, FOOTER_CONTACT_INFO, FOOTER_LINKS, Invloved_LINKS, SOCIALS } from '@/constants'
import Logo from '@/constants/Logo';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface FooterProps{
   id:number;
   url: string;
   label: string
}

const Footer = ({ footer }:any) => {
  return (
    <footer className="flexCenter bg-ecwadarkblue min-h-[550px]">
      <div className="padding-containr overflow-splide max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-between lg:flex-row">
          <div className='flex  lg:w-60'>
            <Link href="/" >
              <div className='flex flex-col justify-start'>
                <a className="pb-6  w-fit"><Logo /></a>
                <p className='mt-4 text-white'>Address</p>
              </div>
            </Link>
         </div>

          <div className='flex flex-wrap sm:justify-between md:flex-1'>
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
          d</div>
        </div>

        <div className="border border-ecwaorange" />
        <p className="w-full text-center text-white">2024 ECWA Birmingham | All rights reserved</p>
      </div>
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