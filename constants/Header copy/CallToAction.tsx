import React, { useEffect, useState } from "react";
import * as FuseAPI from "../../api";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { StrapiGlobalResponse, USPBarRepeaterItem } from "../../redux/types/api-model/strapi.type.api";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-regular-svg-icons";
import router, { useRouter } from "next/router";

export default function CallToAction() {

    const [globalResponse, setGlobalResponse] = useState<StrapiGlobalResponse>({});
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        async function fetchData() {
            const data = await FuseAPI.getInline<StrapiGlobalResponse>('/strapi/global');
            return data;
        }
        fetchData().then((response) => {
            if (response) {
                setGlobalResponse(response);
            }
        }).catch((error) => {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data)
            }
        });
    }, []);

    if (error) {
        return <></>;
    }

    return (
        <section className={` ${router.asPath === "/about-us/application" ? '' : 'bg-[#DEF3F1] py-4'} `}>
            <div className="container">
                <Splide
                    className="no-margin-bottom splide"
                    options={{
                        perPage: 4,
                        type: "loop",
                        pagination: false,
                        arrows: false,
                        autoplay: true,
                        perMove: 1,
                        speed: 3000,
                        breakpoints: {
                            1535: {
                                perPage: 3,
                            },
                            992: {
                                perPage: 2,
                            },
                            650: {
                                perPage: 1,
                            },
                        }
                    }}
                >
                    <>
                        {globalResponse.data ? (
                            <>
                            {router.asPath === "/about-us/application" ? null : (
                    <>{globalResponse.data.attributes.USPBarRepeater.map((item: USPBarRepeaterItem, index) => (
                        <SplideSlide key={index}>
                            <div className=" flex items-center justify-center md:justify-start">
                                <div className="flex items-center justify-center mr-4 h-[47px] min-w-[35px]">
                                    <Image src={item.Icon.data!.attributes.url} width={item.Icon.data!.attributes.width} height={item.Icon.data!.attributes.height} alt="14 Day moneyback guarantee" priority />
                                </div>
                                <div className="text-dynamicblue lg:pr-8 xl:pr-14 2xl:pr-8 text-sm 2xl:text-base">{item.Content ? item.Content : ''}</div>
                            </div>
                        </SplideSlide>
                    ))}</>
                )}
                                
                            </>
                        ) : (
                            <SplideSlide>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="flex items-center justify-center mr-4 h-[47px] min-w-[35px]">
                                        <FontAwesomeIcon
                                            icon={faSpinnerThird}
                                            className={"text-2xl text-dynamicblue"}
                                            spin
                                        />
                                    </div>
                                    <div className="text-dynamicblue lg:pr-8 xl:pr-14 2xl:pr-8 text-sm 2xl:text-base">

                                    </div>
                                </div>
                            </SplideSlide>
                        )}
                    </>
                </Splide>
            </div>
        </section>
    )
}