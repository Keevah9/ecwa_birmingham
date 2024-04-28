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
            <div className={`h-full cursor-pointer lg:mt-1 xl:mt-0 `}
            >
                <Link href="/" passHref legacyBehavior title="ECWA Birmingham">
                    <div className="relative h-[3.5rem] w-[3.2rem] lg:h-[3.7rem] lg:w-[3.5rem] xl:h-20 xl:w-20 overflow-clip xl:flex ">
                        <Image src={EcwaLogo} alt={"unique exhibition"} />
                    </div>
                </Link>
            </div>

        </div>
    );
}
