import React, { ReactChild, useState, useEffect } from "react";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/pro-regular-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons/faAngleLeft";
import { faCircleUser } from "@fortawesome/pro-solid-svg-icons/faCircleUser";
import { faRightFromBracket } from "@fortawesome/pro-solid-svg-icons/faRightFromBracket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchGetStarted from "./Navigation/Sections/SearchGetStarted";
import SearchMakes from "./Navigation/Sections/SearchMakes";
import SearchModels from "./Navigation/Sections/SearchModels";
import CarFinanceGetStarted from "./Navigation/Sections/CarFinanceGetStarted";
import CarFinanceFaqs from "./Navigation/Sections/CarFinanceFaqs";
import WhyFinance from "./Navigation/Sections/WhyFinance";
import WhyFaqs from "./Navigation/Sections/WhyFaqs";
import SupportHelp from "./Navigation/Sections/SupportHelp";
import SupportFaqs from "./Navigation/Sections/SupportFaqs";
import { useRouter } from "next/router";


interface NavLinkProps {
    label: string;
    children: ReactChild;
}

function NavLink(props: NavLinkProps) {
    const [menuSectionOpen, setMenuSectionOpen] = useState(false);

    useEffect(() => {
        const list = [
            "overflow-hidden",
            "max-h-screen",
            "overscroll-none",
            "lg:overflow-auto",
            "lg:max-h-auto",
            "navOpen",
        ];
        document.body.classList.add(...list);
        return () => {
            document.body.classList.remove(...list);
        };
    }, []);

    return (
        <>
            <li className={"cursor-pointer border-b"}>
                <div
                    onClick={() => setMenuSectionOpen(true)}
                    className={`flex items-center p-5 text-lg`}
                >
                    {props.label}
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className={"ml-auto"}
                    />
                </div>
            </li>
            <div
                className={`h-mobileNavHeight absolute top-0 left-0 right-0 bottom-0 transform overflow-scroll border-t bg-white p-6 pb-20 transition duration-200 ease-in-out ${
                    menuSectionOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div
                    onClick={() => setMenuSectionOpen(false)}
                    className={"cursor-pointer"}
                >
                    <FontAwesomeIcon icon={faAngleLeft} className={"mr-3"} />
                    Back
                </div>
                {props.children}
            </div>
        </>
    );
}



function MobileNavigation() {
    const router = useRouter();

    return (
        <>
            <ul className={"list-none border-t"}>
                <NavLink label={"Search cars"}>
                    <>
                        <div
                            className={
                                "mt-4 rounded-lg bg-[#F6F3FF] p-1 py-3 pt-4 text-center text-sm font-medium"
                            }
                        >
                            Finding your next car is easy with caruno
                            <Link href={"/cars"}>
                                <a
                                    title={"Search all cars"}
                                    className={
                                        "mx-5 my-2 flex items-center justify-center rounded-full bg-dynamicblue px-4 py-4 font-bold text-white"
                                    }
                                >
                                    Search all cars
                                </a>
                            </Link>
                        </div>
                        <div className={"mt-8 mb-10"}>
                            <SearchGetStarted />
                        </div>
                        <div className={"mb-10"}>
                            <SearchMakes />
                        </div>
                        <div className={"mb-10"}>
                            <SearchModels />
                        </div>
                    </>
                </NavLink>
                <NavLink label={"Car finance"}>
                    <>
                        <div className={"my-10"}>
                            <CarFinanceGetStarted />
                        </div>
                        <div className={"mb-10"}>
                            <CarFinanceFaqs />
                        </div>
                    </>
                </NavLink>
                <NavLink label={"Why caruno?"}>
                    <>
                        <div className={"my-10"}>
                            <WhyFinance />
                        </div>
                        <div className={"mb-10"}>
                            <WhyFaqs />
                        </div>
                    </>
                </NavLink>
                <NavLink label={"Support"}>
                    <>
                        <div className={"my-10"}>
                            <SupportFaqs />
                        </div>
                        <div className={"mb-10"}>
                            <SupportHelp />
                        </div>
                    </>
                </NavLink>
                
              
            </ul>

            <Link href={"/apply-now"}>
                <a
                    title={"Check my eligibility"}
                    className={
                        "mx-5 my-2 mt-4 flex items-center justify-center rounded-full bg-dynamicblue px-4 py-4 font-bold text-white"
                    }
                >
                    Check my eligibility
                </a>
            </Link>
        </>
    );
}

export default MobileNavigation
