import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons/faBars";
import { faTimes } from "@fortawesome/pro-light-svg-icons/faTimes";
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
                    "flex cursor-pointer appearance-none items-center py-4 pl-0 text-2xl lg:hidden"
                }
                onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
                <span
                    className={`flex h-[39px] w-[39px] items-center justify-center rounded-full ${
                        mobileMenuVisible ? "" : ""
                    }`}
                >
                    <FontAwesomeIcon
                        icon={mobileMenuVisible ? faTimes : faBars}
                        fixedWidth
                        className={
                            mobileMenuVisible
                                ? "text-ecwadarkblue text-2xl"
                                : "text-ecwadarkblue text-2xl"
                        }
                    />
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
