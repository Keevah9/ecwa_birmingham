import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/pro-light-svg-icons/faBars";
// import { faTimes } from "@fortawesome/pro-light-svg-icons/faTimes";
import MobileNavigation from "./MobileNavigation";
import { useRouter } from "next/router";

export default function MenuToggle() {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const listener = () => {
            setMobileMenuVisible(false);
        };
        router.events.on("routeChangeStart", listener);
        return () => {
            router.events.off("routeChangeStart", listener);
        };
    }, []);

    return (
        <>
            <div className={
                    "flex cursor-pointer appearance-none items-center py-4 pb-5 pl-0 text-2xl lg:hidden"
                }
                onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
                <span
                    className={`flex h-[39px] w-[39px] items-center justify-center rounded-full ${
                        mobileMenuVisible ? "" : ""
                    }`}
                >
                    {/* <FontAwesomeIcon
                        icon={mobileMenuVisible ? faTimes : faBars}
                        fixedWidth
                        className={
                            mobileMenuVisible
                                ? "text-ecwadarkblue text-2xl"
                                : "text-ecwadarkblue text-2xl"
                        }
                    /> */} 
                    
                    <span>
                        {mobileMenuVisible ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="#022147" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="#022147" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                            </svg>}
                    </span>
                </span>
            </div>
            {mobileMenuVisible && (
                <div
                    className={"h-mobileNavHeight fixed top-[71px] left-0 right-0 z-[5001] overflow-auto overflow-x-hidden bg-white lg:hidden"}>
                    <MobileNavigation />
                </div>
            )}
        </>
    );
}
