import Image from "next/image";
import { useEffect, useState } from "react";
import EcwaLogo from "../public/ecwa-logo.png";
import Link from "next/link";

export default function Logo() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (
        <div className={` flex flex-grow justify-center`}>
            <div
                className={`h-full logo cursor-pointer lg:mt-1 xl:mt-0 `}
            >
                <Link href="/" passHref legacyBehavior title="ECWA Birmingham">
                    <div className="relative h-20 w-20 overflow-clip xl:flex ">
                        <Image src={EcwaLogo} alt={"unique exhibition"} />
                    </div>
                </Link>
            </div>
           
        </div>
    );
}
