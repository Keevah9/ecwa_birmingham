import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import Logo from "../Logo";
import Button from "@/components/Button";


export default function Header({ global, header }: any) {
    function MainHeader() {
        return (
            <nav className={` max-container flex items-center`}>
                <MenuToggle />
                <div className={"w-4/12 md:w-auto"}>
                    <Link href={"/"}>
                        <a className={"flex"}>
                            <Logo />
                        </a>
                    </Link>
                </div>
                <Navigation />
                <Button
                    type="button"
                    title="About Us"
                    variant="btn_blue"
                    link='/about-us'
                />
            </nav>
        );
    }

   

   
   
    const [scroll, setScroll] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const listener = () => {
            setScroll(window.scrollY > 0);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);
    let stickyHeaderClass = "";

    if (router.pathname == "/cars") {
        scroll
            ? (stickyHeaderClass = "bg-white lg:drop-shadow")
            : (stickyHeaderClass = "drop-shadow-none");
    } else {
        scroll
            ? (stickyHeaderClass = "bg-white drop-shadow")
            : (stickyHeaderClass = "drop-shadow-none");
    }
    return (
        <>
            
            <header
                className={`shadow-md sticky duration-300 z-[40] top-0 w-f border bg-white ${stickyHeaderClass}`}
            >
                
                    <MainHeader/>
             
            </header>
        </>
    );
}
