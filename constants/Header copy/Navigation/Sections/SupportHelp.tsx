import React from "react";
import ContactBlock from "../ContactBlock";

export default function SupportHelp() {
    return (
        <>
            <h5 className={"mb-6 uppercase text-ecwaorange font-black text-[18px]"}>Get in touch</h5>
            <ul className={"list-none"}>
                
                <span className="lg:hidden"><ContactBlock label={"Phone"} description={"Call us during our opening hours on 0000000."} url={"tel:00000000"} /></span>
                <span className="hidden lg:block"><ContactBlock label={"Phone"} description={"Call us during our opening hours on 0000000000."} url={""} /></span>

                <ContactBlock label={"Email"} description={"Get in touch via email and we'll reply with all the required details."} url={"mailto:ecwa@gmail.com"} />
                {/* <ContactBlock label={"Live Chat"} description={"Can't talk? Don't worry! Start a live chat with one of our team here."} url={"/"} dummy={true} /> */}
            </ul>
        </>
    )
}
