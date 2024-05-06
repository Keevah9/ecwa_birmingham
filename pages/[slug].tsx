
import StrapiPage from "@/constants/cms/strapi-page";
import { SingleStrapiPageResponse, StrapiPageResponse } from "@/constants/lib/types/strapi";
import { getStrapiURL } from "@/constants/lib/util/api";
import axios from "axios";

import { ReactElement } from "react";
import Layout from "../constants/layout";

type ParamProps = {
    params: {
        slug: string;
    };
};

export async function getStaticPaths() {
    const paramArray: Array<ParamProps> = [];

    const res = await axios.get<StrapiPageResponse>(
        getStrapiURL("/pages?populate=deep")
    );
    const pages = res.data;
    pages.data.map((page: any) => {
        paramArray.push({ params: { slug: page.attributes.Slug } });
    });

    return {
        paths: paramArray,
        fallback: "blocking",
    };
}

//@ts-ignore
export async function getStaticProps({ params }) {
    const res = await axios.get(
        getStrapiURL(`/pages?filters[Slug][$eq]=${params.slug}&populate=deep`)
    );
    const page = res.data;
    let pageData = null;

    page.data.map((item: SingleStrapiPageResponse) => {
        pageData = item.attributes;
    });

    if (pageData !== null) {
        return {
            props: {
                data: pageData,
            },
            revalidate: 10,
        };
    } else {
        return {
            notFound: true,
            revalidate: 10,
        };
    }
}
//@ts-ignore
const Page: NextPageWithLayout = ({ data }) => {
   
    return (
        <>
            {data ? (
                <StrapiPage
                    //@ts-ignore
                    data={data}
                />
            ) : null}
        </>
    );
};
Page.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
export default Page;
