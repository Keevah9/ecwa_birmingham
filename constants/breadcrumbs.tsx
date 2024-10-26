import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumb: React.FC = () => {
    const router = useRouter();
    const pathArray = router.asPath.split("/").filter((path) => path); // Split the path into segments

    return (
        <nav className="mb-8">
            <ol className="flex items-center gap-2">
                <li className="list-none bg-gray-200 px-3 py-2 rounded">
                    <Link href="/">
                        <span className="text-black cursor-pointer">Home</span>
                    </Link>
                </li>
                {pathArray.length > 0 && '> '  }
{router.pathname === '/checkout' ?  <li className="flex border border-gray-200 px-3 py-2 rounded">
   Checkout  </li>:  <>
               
                {pathArray.map((path, index) => {
                    const href = `/${pathArray.slice(0, index + 1).join("/")}`;
                    return (
                        <React.Fragment key={href}>
                            
                            {index > 0 && <span className="text-gray-500">&gt;</span>}
                            <li className="flex border border-gray-200 px-3 py-2 rounded">
                                <Link href={href} className="text-black flex">
<span className="!text-black cursor-pointer">                                    {path.charAt(0).toUpperCase() + path.slice(1)}</span>
                                </Link>
                            </li>
                        </React.Fragment>
                    );
                })} </>}
            </ol>
        </nav>
    );
};

export default Breadcrumb;