import React from "react";
import { NextSeo } from "next-seo";

export default function SEO(props: any) {
    return (
        <>
            <NextSeo 
                title={props.seoData?.metaTitle ? props.seoData?.metaTitle : props.title}
                description={props.seoData?.metaDescription}
                canonical={props.seoData?.canonicalURL}
            />
        </>
    )
}