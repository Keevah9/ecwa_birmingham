import { getStrapiURL } from "../../constants/lib/util/api"
import Image from "next/image"
import axios from "axios"
import React, { ReactElement } from "react"
import ReactMarkdown from "react-markdown"

import Layout from "../../constants/layout"
import { NextPageWithLayout } from "@/constants/lib/types/global"
// import { NextSeo } from "next-seo"
// import BlogPage from "@modules/cms/blog-page"
// import Socials from "@modules/cms/blocks/Socials"


export const getStaticProps = async ({ params }:any) => {
    const res = await axios.get(
        getStrapiURL(`/blogs?filters[Slug][$eq]=${params.slug}&populate=deep`)
    )
    const page = res.data

    return {
        props: {
            data: page,
        },
        revalidate: 10,
    }
}
const SingleBlogPost: NextPageWithLayout = (props: any) => {
    return (
        <>
            {/* <NextSeo
                title={
                    props.data.data[0].SEO?.metaTitle
                        ? props.data.data[0].SEO.metaTitle
                        : props.data.data[0].attributes.BlogTitle
                }
                description={
                    props.data.data[0].SEO?.metaDescription
                        ? props.data.data[0].SEO.metaDescription
                        : null
                }
            /> */}
            <section className="pb-20">
                <div className="cms-container flex flex-col items-center justify-center lg:flex-row">
                    <div className="w-full lg:w-8/12 lg:pr-10">
                        <h1 className="py-6 font-[800]">
                            {/* {props.data.data[0].attributes.BlogTitle} */}
                        </h1>

                        
                                <div className="blog mt-6">
                                    <ReactMarkdown className="markdown">
                                        {props.data.data[0].attributes.BlogTopContent}
                                    </ReactMarkdown>
                                </div>

                                <div className="twoColContent my-6">
                                    {/* {props.data.data[0].attributes?.BlogTwoColumnContent?.BlogTwoCol?.map(
                                        (content) => {
                                            return (
                                                <div
                                                    key={content.id}
                                                    className="flex gap-6 items-center mb-4 w-full"
                                                >
                                                    <div className="w-fit ">
                                                        <Image
                                                            height={
                                                                content.Image?.data
                                                                    ?.attributes.height
                                                            }
                                                            width={
                                                                content.Image?.data
                                                                    ?.attributes.width
                                                            }
                                                            src={
                                                                content.Image?.data
                                                                    ?.attributes.url
                                                            }
                                                            alt={content.Title}
                                                        />
                                                    </div>
                                                    <div className="w-5/6">
                                                        <h4 className=" font-bold pb-2 text-[20px]">
                                                            {content.Title}
                                                        </h4>
                                                        <div className="multipleContent">
                                                            {" "}
                                                            <ReactMarkdown className="markdown">
                                                                {content.Content}
                                                            </ReactMarkdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )} */}
                                </div>
                                <div className="multipleContent">
                                    {/* {props.data.data[0].attributes?.BlogMultipleContent?.BlogMultipleContent?.map(
                                        (content) => {
                                            return (
                                                <div key={content.id} className="pt-5">
                                                    <h2 className="pb-3">
                                                        {content.Title}
                                                    </h2>
                                                    <div className="w-full pb-3">
                                                        <Image
                                                            height={
                                                                content.Image?.data
                                                                    ?.attributes.height
                                                            }
                                                            width={
                                                                content.Image?.data
                                                                    ?.attributes.width
                                                            }
                                                            src={
                                                                content.Image?.data
                                                                    ?.attributes.url
                                                            }
                                                            alt={content.Title}
                                                        />
                                                    </div>
                                                    <div className="multipleContent">
                                                        {" "}
                                                        <ReactMarkdown className="markdown">
                                                            {content.Content}
                                                        </ReactMarkdown>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )} */}
                                </div>
                           
                      
                    {/* <Socials /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

type ParamProps = {
    params: {
        slug: string
    }
}
export async function getStaticPaths() {
    const paramArray: Array<ParamProps> = []

    const res = await axios.get(getStrapiURL("/blogs?populate=deep"))
    const pages = res.data
    pages.data.map((page: any) => {
        paramArray.push({ params: { slug: page.attributes.Slug } })
    })
    return {
        paths: paramArray,
        fallback: "blocking",
    }
}

SingleBlogPost.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}

export default SingleBlogPost
