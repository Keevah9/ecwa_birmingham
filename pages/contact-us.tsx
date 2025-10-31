import FormInput from "@/constants/Forms/FormInput";
import { ModalContext } from "@/constants/lib/context/demo-modal";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Contact() {
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
        <section className="max-container overflow-splide">
            <div className="flex  items-center gap-10 flex-col">
                <div className="lg:w-1/2 text-center"><span>Contact us</span>
                    <h2 className="leading-[35px text-center">We are always happy to hear from you</h2>
                    <div className="mt-4">
                        <div>
                            <li className="flex w-full  gap-6 items-start">
                                {/* 
                                 */}
                                <div>
                                    <p className=" text-[20px] text-center lg:bg-none">
                                        We are always happy to hear from you
                                    </p></div>
                            </li>
                        </div>
                        <div className="my-6 hidden">
                            <li className="flex w-full  gap-6 items-start">
                                <div className="rounded-full flex items-center justify-center p-4 lg:p-6 bg-ecwadarkblue">
                                    <Image src={'/map.svg'} alt="map" width={28} height={28} />
                                </div>
                                <div><h4 className=" mt- max-w-[18rem] capitalize text-ecwaorange leading-9">
                                    Our Location
                                </h4>
                                    <p className=" mt-4 text-center lg:bg-none">
                                        We are always happy to hear from you
                                    </p></div>
                            </li>
                        </div>
                        
                    </div>
                    </div>
               

                <div className="lg:w-1/2 bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] p-10 rounded-[10px]">
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
                            }}
                        />
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
                            }}
                        />
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
                            }}
                        />
                    </div>
                    
                    <div className="w-full pb-3 ">
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
                            }}
                        />
                    </div>
                    {/* <div className="my-4 inline cursor-pointer flex-row-reverse justify-start gap-4 ">
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
                            }}
                        />
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
                            value={
                                isMarketing === true ? "true" : "false"
                            }
                            onChange={(e) => {
                                setIsMarketing((current) => !current);
                                setFormData((prevState) => ({
                                    ...prevState,
                                    marketing: e.target.value,
                                }));
                            }}
                        />
                        <label htmlFor="marketing" className="-mt-1 inline text-[13px] font-normal">
                            I am happy to be added to the newsletter.
                        </label>
                    </div> */}
                    <span
                        className="block text-cente w-40"
                        onClick={validateAndCreate}
                    >
                        <Button type={"button"} title={"Send us a Message"} variant={"btn_blue"} style/>
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
        </section>
    )
}