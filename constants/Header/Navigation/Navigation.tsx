import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import MenuGroup from "./MenuGroup";
import { getStrapiMedia } from "@/constants/lib/util/media";
import SearchGetStarted from "@/constants/Header copy/Navigation/Sections/SearchGetStarted";
import SearchMakes from "@/constants/Header copy/Navigation/Sections/SearchMakes";
import SearchModels from "@/constants/Header copy/Navigation/Sections/SearchModels";

interface NavLinkProps {
  url: string | undefined;
  label: string;
  category?: boolean;
  subLabel?: any;
  image?: any;
  loading?: boolean;
  mostPopular?: any;
  onClick?: any;
}

function NavLink(props: NavLinkProps) {
  return (
    <li className="relative inline-block  cursor-pointer pb-3">
      <>
        <Link href={`/${props.url}`} title={props.label} legacyBehavior>
          <span className="relative ">
            {props.mostPopular && (
              <span className="absolute left-[25%] top-3 z-40 rounded-[30px] bg-uniquegrey px-3 py-2 text-white">
                Most popular
              </span>
            )}
            <span className=" relative mb-4 block h-[15rem] w-[15rem] ">
              {props.loading ? (
                <FontAwesomeIcon
                  icon={faSpinnerThird}
                  className={" absolute left-[35%] top-32 text-2xl"}
                  spin
                />
              ) : (
                <Image
                  style={{ borderRadius: "10px" }}
                  src={props?.image}
                  alt={props.label}
                  layout="fill"
                />
              )}
            </span>
            <span
              title={props.label}
              className={
                "block cursor-pointer text-[17px] font-black  capitalize text-[#F04A48] "
              }
            >
              {props.label}
            </span>
            <span
              title={props.label}
              className={
                " block cursor-pointer text-[16px] font-medium capitalize text-[#49525E]"
              }
            >
              {props.subLabel}
            </span>
          </span>
        </Link>
      </>
    </li>
  );
}

type LocalProps = {
  navLinks: any;
};
export const ExhibitionStandsMenu = [
  {
    id: 1,
    PageSubContent: "Flexible and cost-effective",
    img: "/img/bespoke.png",
    slug: "modular-exhibition-stands",
    mostPopular: "Most Popular",
    PageSubTitle: "Modular Exhibition Stands",
  },
  {
    id: 2,
    PageSubContent: "Totally unique",
    img: "/img/hybrid.png",
    slug: "bespoke-exhibition-stands",
    PageSubTitle: "Bespoke Exhibition Stands",
  },
  {
    id: 3,
    PageSubContent: "The best of both",
    img: "/img/modular.png",
    slug: "hybrid-exhibition-stands",
    PageSubTitle: "Hybrid Exhibition Stands",
  },
];

export const CompanyMenu = [
  {
    id: 4,
    PageSubContent: "Flexible and cost-effective",
    img: "/img/faq.png",
    slug: "frequently-asked-questions",
    mostPopular: "Most Popular",
    PageSubTitle: "Frequently Asked Questions",
  },
  {
    id: 5,
    PageSubContent: "Articles and resources",
    img: "/img/blogs.png",
    slug: "blog",
    PageSubTitle: "Blog",
  },
];

export default function Navigation(props: LocalProps) {
  return (
    <nav className="hidden w-full border justify-center bg-black lg:flex">
      <MenuGroup
        mainLink={"/exhibition-stands"}
        label={'test'}
        // title={props.navLinks.NavMenus[0].NavMenuName}
      >
        <div className="pointer-events-none absolute left-[14%] z-50  mt-4 w-fit -translate-y-1 rounded-b-[15px]  bg-black  px-4 opacity- shadow-[0_15px_15px_rgba(0,0,0,0.05)] transition  duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="drop-shadow-menu pointer-events-none gap-4 px-8 group-hover:pointer-events-auto">
            <div className={"  grid grid-cols-3 gap-20"}>
              hi
              <div>
                <SearchGetStarted />
              </div>
              <div>
                <SearchMakes />
              </div>
              <div>
                <SearchModels />
              </div>
            </div>
          </div>
        </div>
      </MenuGroup>
      <div className="grid">
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>

      <MenuGroup
        label={'test'}
        // title={props.navLinks.NavMenus[1].NavMenuName}
      >
        <div className="nav pointer-events-none absolute z-50 mt-4 w-fit -translate-y-1 rounded-b-[15px] bg-white px-4 opacity-0 shadow-[0_15px_15px_rgba(0,0,0,0.05)] transition duration-300  ease-out group-hover:translate-y-0 group-hover:opacity-100 2xl:left-[10%]">
          <div className="pointer-events-none flex gap-4 py-3 group-hover:pointer-events-auto 2xl:px-8">
            <div>
              <ul className={`flex gap-3 2xl:gap-6`}>
                {/* {props.navLinks.NavMenus[1].Pages?.data.map((link) => (
                  <NavLink
                    key={link.attributes.id}
                    url={link.attributes.Slug}
                    label={link.attributes.PageSubTitle}
                    category
                    image={getStrapiMedia(
                      link.attributes.Image.data.attributes.url
                    )}
                    subLabel={link.attributes.PageSubContent}
                  />
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </MenuGroup>
      <MenuGroup
        label={'test'}
      // title={props.navLinks.NavMenus[1].NavMenuName}
      ></MenuGroup>
      <MenuGroup
        label={'test'}
      // title={props.navLinks.NavMenus[1].NavMenuName}
      >
      
        <div className="nav pointer-events-none absolute z-50 mt-4 w-fit -translate-y-1 rounded-b-[15px] bg-white px-4 opacity-0 shadow-[0_15px_15px_rgba(0,0,0,0.05)] transition duration-300  ease-out group-hover:translate-y-0 group-hover:opacity-100 2xl:left-[10%]">
          <div className="pointer-events-none flex gap-4 py-3 group-hover:pointer-events-auto 2xl:px-8">
            <div>
              {/* <ul className={` flex gap-3  2xl:gap-6`}>
                {props.navLinks.NavMenus[3].Pages?.data.map((link:any) => (
                  <NavLink
                    key={link.attributes.id}
                    url={link.attributes.Slug}
                    label={link.attributes.PageSubTitle}
                    category
                    image={getStrapiMedia(
                      link.attributes.Image.data.attributes.url
                    )}
                    subLabel={link.attributes.PageSubContent}
                  />
                ))}
                {CompanyMenu.map((link) => (
                  <NavLink
                    key={link.id}
                    url={link.slug}
                    subLabel={link.PageSubTitle}
                    category
                    image={link.img}
                    label={link.PageSubContent}
                  />
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </MenuGroup>
      <MenuGroup
        mainLink={"/contact"}
        label={"Contact"}
        title={"Contact"}
      ></MenuGroup>
    </nav>
  );
}
