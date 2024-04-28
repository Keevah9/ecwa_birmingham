import Link from "next/link";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Button from "../Button";
// import moment from "moment";

interface ArticleCardProps {
  featuredImage?: string;
  date?: any;
  title: string;
  content: string;
  imgSize: string
  ImageProps: any;
  link?: string | null;
  hasBottomBorder?: boolean
  subtitle?: string
  linkLabel?: string | null
}

function ArticleCard(props: ArticleCardProps) {
  return (

    <div className={`mb- bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] border-b-8 rounded-[12px]  border-ecwadarkblue border-2  px-4 py-6 lg:px-8 lg:py-8 w-full `}>
      {/* <Link href={`${props.link}`} title={props.title}>
          <a className="" itemScope itemType="http://schema.org/Blog"> */}
      <div>
        <div className={`relative mb-2 lg:mb-3 rounded-[10px]` + props.imgSize}>
          {props.featuredImage ? (
            <Image style={{ borderRadius: "10px" }}
              priority
              src={props.featuredImage}
              width={450}
              height={300}
              objectFit="cover"
              alt={props.title}
              quality={100}
              itemProp="image"
            />
          ) : null}
        </div>
      </div>
      {/* <p>{moment(props.date).format("DD MMM, YYYY")}</p> */}
      <div className={`px-4  group-hover:text-ecwaorange group-hover:bg-ecwadarkblue`}>
        <span>{props.subtitle}</span>
        <h4 itemProp="title" className=" leading-[30px] h-[4.5rem] max-w-sm mt-3 text-ecwadarkblue">
          {props.title}
        </h4>
        {props.content ? (
          <p className={`${props.link && 'h-[11rem]'} font-[400]`}>{props.content}</p>
        ) : null}
        {props.link &&
          <div className="mt-5"><Button type={"button"}
            //@ts-ignore
            title={props?.linkLabel} link={props.link} /></div>}
      </div>
      {/* </a>
        </Link> */}
    </div>

  );
}

export default ArticleCard;
