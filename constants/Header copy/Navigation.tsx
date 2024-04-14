import { ReactChild } from "react";
import NavLink from "./Navigation/NavLink";
import SearchGetStarted from "./Navigation/Sections/SearchGetStarted";
import SearchMakes from "./Navigation/Sections/SearchMakes";
import SearchModels from "./Navigation/Sections/SearchModels";
import CarFinanceGetStarted from "./Navigation/Sections/CarFinanceGetStarted";
import CarFinanceFaqs from "./Navigation/Sections/CarFinanceFaqs";
import WhyFinance from "./Navigation/Sections/WhyFinance";
import WhyFaqs from "./Navigation/Sections/WhyFaqs";
import SupportHelp from "./Navigation/Sections/SupportHelp";
import SupportFaqs from "./Navigation/Sections/SupportFaqs";
import React from "react";

interface MegaMenuDropdownProps {
    children: ReactChild
    fullWidth?: boolean
    forceOpenDev?: boolean
    partExchange?: boolean
}



function MegaMenuDropdown(props: MegaMenuDropdownProps) {
    return (
        <div className={` h-[100vh] transition ease-out duration-300 absolute top-[102px] xl:top-[103px] left-0 right-0 pointer-events-none ${props.partExchange ? 'px-0' : 'px-6'} ${props.forceOpenDev ? 'flex' : 'opacity-0 -translate-y-1'} group-hover:opacity-100 group-hover:translate-y-0`}>
            <div className={`pointer-events-none group-hover:pointer-events-auto bg-white rounded-b-xl ${props.fullWidth ? 'w-full' : 'w-auto'} mx-auto  ${props.partExchange ? 'lg:p-6 xl:p-12' : 'px-12 pt-12 pb-20'} drop-shadow-menu`}>
                {props.children}
            </div>
        </div>
    );
}

function Navigation() {
    return (
        <>
            <ul className={"ml-auto mr-12 hidden list-none flex-wrap lg:flex"}>
                <li className={"group"}>
                    <NavLink url={"/"} label={"Search cars"} />
                    <MegaMenuDropdown>
                        <div className={"max-w-[1110px] mx-auto grid grid-cols-3 gap-20"}>
                            <div>
                                <SearchGetStarted />
                            </div>
                            <div>
                                <SearchMakes />
                            </div>
                            <div>
                                <SearchModels />
                            </div>
                        </div>
                    </MegaMenuDropdown>
                </li>
                <li className={"group"}>
                    <NavLink url={"/"} label={"Car finance"} />
                    <MegaMenuDropdown>
                        <div className={"max-w-[900px] mx-auto grid grid-cols-2 gap-20"}>
                            <div>
                                <CarFinanceGetStarted />
                            </div>
                            <div>
                                <CarFinanceFaqs />
                            </div>
                        </div>
                    </MegaMenuDropdown>
                </li>
                
                <li className={"group"}>
                    <NavLink url={"/"} label={"Why caruno?"} />
                    <MegaMenuDropdown>
                        <div className={"max-w-[900px] mx-auto grid grid-cols-2 gap-20"}>
                            <div>
                                <WhyFinance />
                            </div>
                            <div>
                                <WhyFaqs />
                            </div>
                        </div>
                    </MegaMenuDropdown>
                </li>
                <li className={"group"}>
                    <NavLink url={"/"} label={"Support"} />
                    <MegaMenuDropdown>
                        <div className={"max-w-[900px] mx-auto grid grid-cols-2 gap-20"}>
                            <div>
                                <SupportFaqs />
                            </div>
                            <div>
                                <SupportHelp />
                            </div>

                        </div>
                    </MegaMenuDropdown>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
