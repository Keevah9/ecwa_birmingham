import React, { ReactChild, useState, useEffect } from "react";
import Link from "next/link";
// import { faAngleRight } from "@fortawesome/pro-regular-svg-icons/faAngleRight";
// import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons/faAngleLeft";
// import { faCircleUser } from "@fortawesome/pro-solid-svg-icons/faCircleUser";
// import { faRightFromBracket } from "@fortawesome/pro-solid-svg-icons/faRightFromBracket";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Button from "@/components/Button";


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
            <li className={"cursor-pointer border-b border-ecwadarkblue"}>
                <div
                    onClick={() => setMenuSectionOpen(true)}
                    className={`flex justify-between items-center px-6 py-5 text-lg`}
                >
                    {props.label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#022147" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                </div>
            </li>
            <div
                className={`h-mobileNavHeight z-10 absolute top-0 left-0 right-0 bottom-0 transform overflow-scroll border-t bg-white p-6 pb-20 transition duration-200 ease-in-out ${
                    menuSectionOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div
                    onClick={() => setMenuSectionOpen(false)}
                    className={"cursor-pointer"}
                >
                    {/* <FontAwesomeIcon icon={faAngleLeft} className={"mr-3"} /> */}
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
            <ul className={"list-none border-t border-ecwadarkblue"}>
                <NavLink label={"About Us"}>
                    <>
                        <p
                            className={
                                "mt-4 rounded-lg flex flex-col justify-center text-center gap-5 bg-ecwadarkblue text-white p-1 py-3 pt-4 items-center "
                            }
                        >
                            Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            <Button type={"button"} link="/about-us" title={'About us'} />
                        </p>
                        <div className={"mt-8 mb-10"}>
                            <SearchGetStarted />
                        </div>
                        {/* <div className={"mb-10"}>
                            <SearchMakes />
                        </div> */}
                        <div className={"mb-10"}>
                            <SearchModels />
                        </div>
                    </>
                </NavLink>
                <NavLink label={"Ministries"}>
                    <>
                        <div className={"my-10"}>
                            <CarFinanceGetStarted />
                        </div>
                        <div className={"mb-10"}>
                            <CarFinanceFaqs />
                        </div>
                    </>
                </NavLink>
                <NavLink label={"Services"}>
                    {/* <>
                        <div className={"my-10"}>
                            <WhyFinance />
                        </div>
                        <div className={"mb-10"}>
                            <WhyFaqs />
                        </div>
                    </> */}
                </NavLink>
                <NavLink label={"Sermons"} >
                    <>
                        
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
                
                <div className="px-5 mt-8 z-0">
                    <Button type={"button"} link="/contact-us" variant="btn" title={'Contact Us'} />
                    <Button type={"button"} link="/give" title={'Give'} />
                </div> 
            </ul>
            
        </>
    );
}

export default MobileNavigation
