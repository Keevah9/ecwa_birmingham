import Link from "next/link";
import "@splidejs/react-splide/css";
import Image from "next/image";
// import moment from "moment";

interface ArticleCardProps {
  featuredImage?: string;
  date: any;
  title: string;
  content: string;
  imgSize: string
  ImageProps: any;
  link?: string | null;
}

function ArticleCard(props: ArticleCardProps) {
  return (
    <Link href={`${props.link}`} title={props.title}>
      <a className="mb- rounded-[12px] border-b-4 border-ecwalightblue lg:mb- px-4 lg:py-6 cursor-pointer" itemScope itemType="http://schema.org/Blog">
        <div>
          <div className={`relative mb-2 lg:mb-3 rounded-[10px]` + props.imgSize}>
            {props.featuredImage ? (
              <Image style={{borderRadius: "10px"}}
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
       <div className="px-4 lg:px-6">
          <h4 itemProp="title" className="my-1 lg:my-3 lg:min-h-[4rem] text-[#F04A48] max-w-sm ">
            {props.title}
          </h4>
          {props.content ? (
            <p>{props.content}</p>
          ) : null}
          <span className="underline text-ecwalightblue">Read More</span>
       </div>
      </a>
    </Link>
  );
}

export default ArticleCard;
