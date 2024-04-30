
import StrapiPage from "@/constants/cms/strapi-page";
import Layout from "@/constants/layout";
import { SingleStrapiPageResponse, StrapiPageResponse } from "@/constants/lib/types/strapi";
import { getStrapiURL } from "@/constants/lib/util/api";
import axios from "axios";
import { ReactElement } from "react";

type ParamProps = {
    params: {
        slug: string;
    };
};

export async function getStaticPaths() {
    const paramArray: Array<ParamProps> = [];

    const res = await axios.get<StrapiPageResponse>(
        getStrapiURL("/events?populate=deep")
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
    const populateParams: Array<string | never> = [];
    const fieldParams: Array<string | never> = [];
    let fieldString = "";
    let populateString = "";

    fieldParams.map((item, index) => {
        fieldString = fieldString + `&fields[${index + 1}]=${item}`;
    });

    populateParams.map((item, index) => {
        populateString = populateString + `&populate[${index + 1}]=${item}`;
    });

    const res = await axios.get(
        getStrapiURL(
            `/events?filters[Slug][$eq]=${params.slug}${fieldString}${populateString}&populate=deep`
        )
    );
    const page = res.data;
    let pageData;

    page.data.map((item: SingleStrapiPageResponse) => {
        pageData = item.attributes;
    });

    if (!pageData) {
        return {
            notFound: true,
            revalidate: 10,
        };
    }

    return {
        props: {
            data: pageData,
        },
        revalidate: 10,
    };
}
//@ts-ignore
const CaseStudies: NextPageWithLayout = (props: any) => {

    return (
        <>
            <StrapiPage
                //@ts-ignore
                data={props.data}
            />

        </>
    );
};
CaseStudies.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default CaseStudies;
