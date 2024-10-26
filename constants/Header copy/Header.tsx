import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import Logo from "../Logo";
import Button from "@/components/Button";
import PrayerRequest from "@/components/PrayerRequest";
import { ModalContext } from "../lib/context/demo-modal";


export default function Header({ global, header }: any) {
    function MainHeader() {
        return (
            <nav className={` max-container flex justify-between items-center`}>
                <div className="flex items-center gap-4">
                    <MenuToggle />
                    <div className={"w-2/12 lg:4/12 md:w-auto"}>
                        <Link href={"/"}>
                            <a className={"flex"}>
                                <Logo />
                            </a>
                        </Link>
                    </div>
                </div>
                <Navigation />
                <div className="flex ">
                    {/* <Button
                        type="button"
                        title="I am new"
                        // variant={"btn "}
                        link='/join-us'
                    />
                    <Button
                        type="button"
                        title="Give"
                        variant="btn_blue"
                        link='/donate'
                    /> */}
                    <Button type={"button"} title={'I am new'} variant={"btn"} link="/join-us" />
                    </div>
            </nav>
        );
    }

   

   
    const {
        modalVisible,
        setModalVisible,
        quoteModalVisible,
        setQuoteModalVisible,
    } = useContext(ModalContext);
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
        {/* <PrayerRequest selectedItem={setModalVisible(true)} onCloseModal={setModalVisible(false)} /> */}
            <div className="bg-ecwadarkblue hidden">
                <div className={" max-container hidden items-center justify-center gap-6 py-2 text-[15px] text-white lg:flex"}
                >
                    <p className="text-[15px] font-bold text-white">
                        Do you have a prayer request?
                        
                    </p>
                    <div>
                        <Button type={"submit"} link='/' title={"Click Here"} variant={"btn !text-white"}/>
                        
                    </div>
                    {/* <PrayerRequest onCloseModal={setModalVisible(false)} /> */}
                    {/* <div className="pt-1">
                        <Socials
                            FbLink
                            TwLink={header.Twitter}
                            IgLink={header.Instagram}
                            InLink={header.Linkedin}
                        />
                    </div> */}
                </div>
            </div>
            <header
                className={`drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] sticky duration-300 z-[40] top-0 w-f border bg-white ${stickyHeaderClass}`}
            >
                
                    <MainHeader/>
             
            </header>
        </>
    );
}
