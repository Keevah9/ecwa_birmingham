import FormInput from "@/constants/Forms/FormInput";
import { ModalContext } from "@/constants/lib/context/demo-modal";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import FAQs from "@/components/faq/FAQComponent";
import React from "react";
// import { faPlus, faMinus, faArrowRight, faCheck, faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FAQProps {
    question: string;
    children: React.ReactNode;
    joinUs: boolean
}

// export function FAQS(props: FAQProps) {
//     const [FaqOpen, setFaqOpen] = useState(false);
//     return (
//         <section className={`w-full cursor-pointer items-center ${props.joinUs ? '' : 'border-b border-[#E7E8EB]'} lg:px-6 pt-6 py-5 font-medium  `}
//         >
//             <div
//                 className=" flex gap-2 md:gap-0"
//                 onClick={() => setFaqOpen(!FaqOpen)}
//                 itemScope
//                 itemProp="mainEntity"
//                 itemType="https://schema.org/Question"
//             >
//                 <div
//                     className="mr-3  w-full list-none text-[16px] font-bold leading-[22px]"
//                     itemProp="name"
//                 >
//                     {props.question}
//                 </div>
//                 <span className="ml-auto flex text-[#223B50] px-2 py-2 text-[16px] ">
//                     <FontAwesomeIcon icon={FaqOpen ? faMinus : faPlus} />
//                 </span>
//             </div>

//             <div
//                 className={`${FaqOpen ? "block" : "hidden"}`}
//                 itemScope
//                 itemProp="acceptedAnswer"
//                 itemType="https://schema.org/Answer"
//             >
//                 <div className="transit break-words leading-8 text-[16px] pt-5 opacity-60 " itemProp="text">
//                     {props.children}
//                 </div>
//             </div>
//         </section>
//     );
// }

const joinUs = [
    {
        id: 1,
        Question: "Visit your first ECWA Birmingham service",
        Answer: "<p>Join us at 10am at our church address -  1st Ariel Scout Group Building Selly Oak, Opposite, 5 & 7 Gibbins Rd, Birmingham B29 6QR</p>",
        // btnLabel1: "Get directions",
        BtnLink1: "/",
        BtnLink2: "/"
    },
    {
        id: 2,
        Question: "Discover volunteer opportunities",
        Answer: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</p> ",
        btnLabel1: "Learn more",
        BtnLink1: "/volunteer",
        
    },
    {
        id: 3,
        Question: "Our Ministries",
        Answer: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>  ",
        btnLabel1: "Learn more",
        BtnLink1: "/ministries",
    },
]
const joinusFaq = [
    {
        id: 1,
        Question: "How big is the church?",
        Answer: "We are about 80 members in total. 25 women, 20 men andabout 30 children"
    },
    {
        id: 2,
        Question: "How can I become a member?",
        Answer: "It is as simple as coming to worship with us on a sunday morning. The will welcome you and the senior pastors will get your contact and do a follow up. You are always welcome"
    },
    {
        id: 3,
        Question: "What do you believe in as a church?",
        Answer: "The Evangelical Church Winning All (ECWA) Birmingham, like other branches of ECWA, focuses on spreading the message of Jesus Christ through Bible teachings, prayer, and a welcoming, inclusive community. The church holds strong to its evangelical roots, emphasizing salvation through faith in Jesus Christ, the Bible as the inspired word of God, and the importance of sharing the Gospel to make disciples. It supports ministries for different community groups, fostering spiritual growth, unity, and service. ECWA churches encourage a personal relationship with God, rooted in the teachings of Jesus, and emphasize core Christian beliefs such as the Trinity (Father, Son, and Holy Spirit) and salvation through Jesus Christ’s sacrificial death and resurrection. They also focus on building a community that celebrates diversity and unity among believers of all backgrounds. For more details on their beliefs, you can explore resources available through ECWA's broader mission on their official website."
    },
    {
        id: 4,
        Question: "What is your mission?",
        Answer: "The mission of ECWA Birmingham, like that of the wider Evangelical Church Winning All (ECWA), is focused on evangelism, discipleship, and holistic service to individuals and communities, aiming to spread the teachings of Jesus Christ and help people grow in their faith. ECWA places a strong emphasis on biblical teaching, community engagement, and meeting the practical and spiritual needs of its members. The church serves as a gathering place for worship, Bible study, prayer, and fellowship. Its mission extends to fostering growth in believers and reaching out to those who may not know Christ, both within the local community and beyond." },

]
export default function JoinUs() {
    const { modalVisible, setModalVisible } = useContext(ModalContext);
    const cancelButtonRef = useRef(null);
    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        floorWidth: "",
        floorLength: "",
        showLocation: "",
        showName: "",
        showVenue: "",
        standNumber: "",
        showStart: "",
        showEnds: "",
        enquiryUrl: "",
        forename: "",
        surname: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        message: "",
        includeItems: "",
        otherEnquiry: "",
        budget: "",
        file: "",
        query: "false",
        marketing: "false",
    });
    const [formError, setFormError] = useState<string>("");
    const emailValid = (email: string) => {
        const filter =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (filter.test(email) && formData.email) {
            return true;
        } else {
            return false;
        }
    };
    const phoneNumberValid = (phoneNumber: string) => {
        const filter =
            /\s*(([+](\s?\d)([-\s]?\d)|0)?(\s?\d)([-\s]?\d){9}|[(](\s?\d)([-\s]?\d)+\s*[)]([-\s]?\d)+)\s*/;
        if (filter.test(phoneNumber) && formData.phoneNumber) {
            return true;
        } else {
            return false;
        }
    };

    const submit = async (values: any) => {

        setSubmitting(true);
        axios
            .post("", {
                metadata: {
                    query: formData.query,
                    marketing: formData.marketing,
                    companyName: formData.companyName,
                },
                enquiryUrl: "",
                forename: formData.forename,
                surname: "",
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                message: formData.message,
                source: window.location.href,
            })
            .then(function (response) {
                setSuccess(true);
                // TagManager.dataLayer({
                //   dataLayer: {
                //     event: "submitted-enquiry",
                //   },
                // });
                setFormData({ ...formData });
            })
            .catch(function (error) {
                setSubmitting(false);
            });


        setFormData({ ...formData });
    };

    function handleSubmit() {
        // e.preventDefault();
        submit({ ...formData });
        setSuccess(false);
    }
    const validateAndCreate = () => {
        if (!formData.companyName) {
            setFormError("Please enter your company's name");
            // return false
        } else if (!formData.forename) {
            setFormError("Please enter your name");
            // return false
        } else if (!phoneNumberValid(formData.phoneNumber)) {
            setFormError("Please enter a valid phone number. Format: 0777788990");
            // return false
        } else if (!emailValid(formData.email)) {
            setFormError("Please enter a valid email address");
            return false;
        } else if (!formData.message) {
            setFormError("Please enter your message");
            return false;
        } else {
            setFormError("");

            handleSubmit();
            // return true
        }
    };
    const [isSubscribed, setIsSubscribed] = useState(true);
    const [isMarketing, setIsMarketing] = useState(true);
    return (
        <><div className=" min-h-[630px] flex flex-col justify-center items-center text-center bg-ecwaorange">
            <div className="max-container overflow-splide">
                <h1 className="mb-7">New to Church?</h1>
                <p className="my-6 text-white max-w-5xl mx-auto">We’re delighted to have you with us! At ECWA, we believe in fostering a community where everyone can grow in faith, build lasting relationships, and serve others. Whether you’re exploring your faith or looking for a church home, we invite you to join us in worship, fellowship, and learning. </p>
          
                <div className="flex mt-10 justify-center gap-6">
                    <Button type={"button"} title={"Questions"} variant={"btn border-4 !border-white"} link="/frequently-asked-questions" />
                    <Button type={"button"} title={"Contact Us"} link="/contact-us" />
                </div>
            </div>
        </div>
            <section className="">
                <h2 className="lg:text-center max-container leading-[35px] -mb-12 lg:-mb-20">  These are the next steps for you</h2>
                <div className="max-w-5xl mx-auto">

                    <FAQs data={joinUs} joinUs number />

                </div>
            </section> 
            <section className="max-container hidden" >
                <div>
                    <h2>OUR CORE VAULES</h2>
                    <p>   <span>Grace </span>– tSuspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                    <p className="my-2">

                        <span>Truth</span> – Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>
                    <p>                <span>Relationship</span> – Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>

                    <p className="my-2">
                        <span>Compassion </span>– Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>
                    <p>                   <span>Acceptance</span> – Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.

                    </p>

                    <p className="my-2">                  <span>Honor</span> – Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                    </p>
                    <p> <span>Internal Integrity</span> – Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>

                    {/* Internal Integrity – is the quality or state of being complete, whole, and undivided. It leads to key shifts in thoughts and behavior, creating opportunities that otherwise would not present themselves. When everything flows together from a place of wholeness on the inside, things fall in place for you on the outside. You move in harmony with the present moment, without attempting to control outcomes. You dance with life, serving its unfolding. You then hold on tight with an open hand!

    Diversity – acknowledging, understanding, accepting, valuing, and celebrating our differences and uniqueness in God with respect to race, age, gender, class, and physical and mental ability. In the words of the late Rev. Tom Skinner, “Don’t leave me out of the choir.”

    Generosity – we respond to God with a heart of generosity and liberality by supporting the needs of the Church, the city we live in, the State, the nation, and the nations. We excel in the grace of giving. We live to give.

    Leadership – is all about serving what wants to unfold from Heaven into the earthly arena. It is about shaping, influencing, and co-creating the future with God. Everyone is a leader because someone is following him or her somewhere.

    Intimacy with God – we are a worshipping people, flowing together to minister unto the Lord in celebratory, ethnically diverse, multi-cultural expressions of praise, intercession, and adoration, flowing together in the many streams of the one river of the Holy Spirit. */}

                    {/* </p> */}
                </div>
            </section>
            <section className="max-container">
                <div>
                    <h2>At Ecwa, Our core values are:</h2>
                 
                    <div className="grid mt-6 gap-4 bg-ecwadarkblue rounded-[5px] px-6 py-8 sm:grid-cols-3 lg:grid-cols-4">
                        <p className="text-white flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> Grace</p>
                        <p className="text-white  flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> Truth</p>
                        <p className="text-white  flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                         Relationship</p>
                        <p className="text-white flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                         Compassion</p>
                        <p className="text-white  flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> Acceptance</p>
                        <p className="text-white  flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> Honor</p>
                        <p className="text-white  flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> Internal Integrity</p>
                    </div>
                </div>
            </section>
            <section className="max-container">

                <div className="max-w-5xl mx-auto">
                    <h2 className="lg:text-center -mb-20">Frequently asked questions</h2>
                    <FAQs data={joinusFaq} />

                </div>
            </section>
            <section className="max-container">
                <div className="flex items-center lg:flex-row gap-10 flex-col">
                    <div className="lg:w-1/2"><span>Contact us</span>
                        <h2>We are always happy to hear from you</h2>
                        <div className="mt-12">
                            <div>
                                <li className="flex w-full  gap-6 items-start">
                                    {/* <div className="rounded-full flex items-center justify-center p-4 lg:p-6 bg-ecwadarkblue">
                                        <Image src={'/map.svg'} alt="map" width={28} height={28} />
                                    </div> */}
                                    <div>
                                        {/* <h4 className=" mt- max-w-[18rem] capitalize text-ecwaorange leading-9">
                                        Our Location
                                    </h4> */}
                                        <p className=" !text-[20px] lg:bg-none">
                                            We are always happy to hear from you
                                        </p></div>
                                </li>
                            </div>
                            <div className="my-6 hidden">
                                <li className="flex w-full  gap-6 items-start">
                                    {/* <div className="rounded-full flex items-center justify-center p-4 lg:p-6 bg-ecwadarkblue">
                                        <Image src={'/map.svg'} alt="map" width={28} height={28} />
                                    </div> */}
                                    <div><h4 className=" mt- max-w-[18rem] capitalize text-ecwaorange leading-9">
                                        Our Location
                                    </h4>
                                        <p className=" mt-4  lg:bg-none">
                                            We are always happy to hear from you
                                        </p></div>
                                </li>
                            </div>
                            <div className="hidden"> 
                                <li className="flex w-full  gap-6 items-start">
                                    <div className="rounded-full flex items-center justify-center p-4 lg:p-6 bg-ecwadarkblue">
                                        <Image src={'/map.svg'} alt="map" width={28} height={28} />
                                    </div>
                                    <div><h4 className=" mt- max-w-[18rem] capitalize text-ecwaorange leading-9">
                                        Our Location
                                    </h4>
                                        <p className=" mt-4  lg:bg-none">
                                            We are always happy to hear from you
                                        </p></div>
                                </li>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-1/2 bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3) p-10 rounded-[10px]">
                        <div className="gap ">
                            <FormInput
                                type={"text"}
                                label={"Name"}
                                value={formData.companyName}
                                required
                                onChange={(e) => {
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        companyName: e.target.value,
                                    }));
                                }} />
                            <FormInput
                                type={"email"}
                                label={"Email"}
                                value={formData.forename}
                                required
                                onChange={(e) => {
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        forename: e.target.value,
                                    }));
                                }} />
                            <FormInput
                                type={"number"}
                                label={"Contact number"}
                                value={formData.phoneNumber}
                                required
                                onChange={(e) => {
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        phoneNumber: e.target.value,
                                    }));
                                }} />
                        </div>

                        <div className="w-full ">
                            <FormInput
                                type={"textarea"}
                                label={"Message"}
                                value={formData.message}
                                required
                                otherOptions
                                onChange={(e) => {
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        message: e.target.value,
                                    }));
                                }} />
                        </div>
                        {/* <p>What is your preferred mode of communication?</p>
                        <div className="mb-2 mt-3 inline-block cursor-pointer flex-row-reverse justify-start gap-4 ">
                            <input
                                id="query"
                                name="query"
                                type="radio"
                                className="mr-2 inline w-fit "
                                // value={
                                //     isSubscribed === true ? "true" : "false"
                                // }
                                onChange={(e) => {
                                    setIsSubscribed((prev) => !prev);
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        query: e.target.value,
                                    }));
                                }} />
                            <label htmlFor="query" className="-mt-1 inline text-[16px] font-normal">
                                Phone number
                            </label>
                        </div> */}
                        {/* <div className="mb-4 block cursor-pointer flex-row-reverse justify-start gap-4 ">
                            <input
                                id="query"
                                name="query"
                                type="radio"
                                className="mr-2 inline w-fit "
                                // value={
                                //     isSubscribed === true ? "true" : "false"
                                // }
                                onChange={(e) => {
                                    setIsSubscribed((prev) => !prev);
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        query: e.target.value,
                                    }));
                                }} />
                            <label htmlFor="query" className="-mt-1 inline text-[16px] font-normal">
                                Email
                            </label>
                        </div> */}
                        {/* <div className="my-2 block cursor-pointer flex-row-reverse justify-start gap-4 ">
                            <input
                                id="query"
                                name="query"
                                type="checkbox"
                                className="mr-2 inline w-fit "
                                // value={
                                //     isSubscribed === true ? "true" : "false"
                                // }
                                onChange={(e) => {
                                    setIsSubscribed((prev) => !prev);
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        query: e.target.value,
                                    }));
                                }} />
                            <label htmlFor="query" className="-mt-1 inline text-[13px] font-normal">
                                I’m happy to be contacted with regard to my
                                query only.
                            </label>
                        </div> */}
                        {/* <div className="mt-2 block cursor-pointer flex-row-reverse justify-start gap-4 ">
                            <input
                                name="marketing"
                                id="marketing"
                                type="checkbox"
                                className="mr-2 inline w-fit "
                                value={isMarketing === true ? "true" : "false"}
                                onChange={(e) => {
                                    setIsMarketing((current) => !current);
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        marketing: e.target.value,
                                    }));
                                }} />
                            <label htmlFor="marketing" className="-mt-1 inline text-[13px] font-normal">
                                I am happy to be added to the newsletter.
                            </label>
                        </div> */}
                        <span
                            className=" block text-cente w-40"
                            onClick={validateAndCreate}
                        >
                            <Button type={"button"} title={"Send us a Message"} style variant={"btn_blue"} />
                            {/* <DynamicButton
              data-callback="handleSubmit"
              data-sitekey={
                "6LceYMcnAAAAAH8LX7ElKqv-CupIf0lJbJx6d-a2"
              }
              buttonStyle={`min-w-full font-black  text-white ${submitting && "opacity-50"
                }`}
              label={"Request a callback"}
            /> */}
                        </span>
                    </div>
                </div>
            </section></>
    )
}