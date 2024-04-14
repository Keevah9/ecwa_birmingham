import Link from "next/link"
// import moment from "moment"
import Image from "next/image";

interface BlogCardProps {
    title: string;
    publishDate: number;
    url: string;
    image: string;
    additionalClasses?: string | null;
}

const BlogCard = ({title, publishDate, url, image, additionalClasses } : BlogCardProps) => {
    return(
        <Link
        prefetch={false}
        href={`/blog/${url}`}
        >
            <a
                title={title}
                className={`bg-white overflow-hidden shadow-[1px_2px_8px_rgba(0,0,0,0.1)] p-4 rounded-lg flex flex-col grow ${additionalClasses}`}

            >
                <div className="rounded-md overflow-hidden aspect-[4/3] flex items-center justify-center">
                    <img
                        src={
                            image ? image : "/img/cat_placeholder.jpg"
                        }
                        className="object-cover aspect-[4/3] "
                        alt={title}
                    />
                </div>
                {/* <div className="opacity-60 mt-4 mb-1">
                    {moment(
                        publishDate
                    ).format("DD MMM YYYY")}
                </div> */}
                <div className="font-[800] text-xl leading-6 ">
                    {title}
                </div>
                <div className="mt-auto pt-2">
                    Grasslands Nursery
                </div>
                <div className="text-right underline font-[800] text-grasstextmediumblue">
                    Read more
                </div>
            </a>
        </Link>
    )
}

export default BlogCard;