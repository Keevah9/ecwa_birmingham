import { getStrapiURL } from "../../constants/lib/util/api"
import Layout from "../../constants/layout"
import axios from "axios"
//@ts-ignore
import { NextSeo } from "next-seo"
import Link from "next/link"
import { ReactElement } from "react"
import { NextPageWithLayout } from "../../constants/types/global"
import BlogCard from "../../components/blog-card"

export const getStaticProps = async () => {
    const res = await axios.get(getStrapiURL(`/blogs?populate=*&pagination[pageSize]=100&sort=publishedAt:desc`))
    const page = res.data

    return {
        props: {
            data: page,
        },
        revalidate: 10,
    }
}

const Blog: NextPageWithLayout = (props: any) => {
    return (
        <>
            <NextSeo
                title="Blog"
                description="All the latest news from Grasslands Nursery"
            />
            <section className="py-12">
                <div className="cms-container">
                    <h1 className="">Blog</h1>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {props.data.data.map((blog: any, index: any) =>

                            <BlogCard key={index} title={blog.attributes.BlogTitle} url={blog.attributes.Slug} publishDate={blog.attributes.publishedAt} image={blog.attributes.FeaturedImage.data?.attributes.url} />

                            // <Link
                            //     key={index}
                            //     prefetch={false}
                            //     href={`/blog/${blog.attributes.Slug}`}
                            // >
                            //     <a
                            //         title={blog.BlogTitle}
                            //         className="bg-white shadow-[0_4px_5px_rgba(0,0,0,0.1)] p-4 rounded-lg flex flex-col"
                            //     >
                            //         <div className="rounded-md overflow-hidden aspect-[4/3] flex items-center justify-center">
                            //             <img
                            //                 src={
                            //                     blog.attributes.FeaturedImage.data ? blog.attributes.FeaturedImage.data?.attributes.url : "/img/cat_placeholder.jpg"
                            //                 }
                            //                 className="object-cover aspect-[4/3] "
                            //                 alt={blog.BlogTitle}
                            //             />
                            //         </div>
                            //         <div className="opacity-60 mt-4 mb-1">
                            //             {moment(
                            //                 blog.attributes.publishedAt
                            //             ).format("DD MMM YYYY")}
                            //         </div>
                            //         <div className="font-[800] text-xl leading-6 ">
                            //             {blog.attributes.BlogTitle}
                            //         </div>
                            //         <div className="mt-auto pt-2">
                            //             Grasslands Nursery
                            //         </div>
                            //         <div className="text-right underline font-[800] text-grasstextmediumblue">
                            //             Read more
                            //         </div>
                            //     </a>
                            // </Link>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
Blog.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}

export default Blog
