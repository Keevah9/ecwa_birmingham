import Link from "next/link";

export default function NavCallToAction() {
    return (
        <Link href={"/apply-now"}>
            <a title={"Check my eligibility"} className={"hidden lg:flex ml-auto rounded-full bg-dynamicblue px-4 py-3 text-sm text-sm font-bold text-white md:text-base lg:ml-1 xl:ml-5 xl:px-6 xl:py-4 xl:text-base"}>
                Check my eligibility
            </a>
        </Link>
    );
}
