import React, { useState} from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import Domain from "../../../public/img/domain.png";
import Phone from "../../../public/img/phone.png";
import Info from "../../../public/img/info.png";
import Image from "next/image";
//@ts-ignore
import TagManager from "react-gtm-module";
//@ts-ignore
import { MapInteractionCSS } from "react-map-interaction";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";
import Socials from "@/components/Socials";
import FormInput from "@/constants/Forms/FormInput";
import Alert from "@/components/Alert";
import { getContact } from "@/constants/lib/util/api";
// const HappyCustomers = dynamic(
//   () => import("../../components/BlockComponents/HappyCustomers")
// );
declare const window: any;
//use miion contact-3
export default function ContactUs(props: any) {
  const { contact, global } = props;
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
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
  const submit = async (values:any) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LceYMcnAAAAAH8LX7ElKqv-CupIf0lJbJx6d-a2", {
          action: "submit",
        })
        .then((token: string) => {
          setSubmitting(true);
          axios
            .post("https://unique.use-fuse.com/rest/v2/enquiry", {
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
              "g-recaptcha-response": token,
              source: window.location.href,
            })
            .then(function (response) {
              setSuccess(true);
              TagManager.dataLayer({
                dataLayer: {
                  event: "submitted-enquiry",
                },
              });
              setFormData({ ...formData });
            })
            .catch(function (error) {
              setSubmitting(false);
            });
        });
    });
    setFormData({ ...formData });
  };

  function handleSubmit() {
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
    <>
      <SEO seoData={contact.SEO} title={contact.Title} canonical={contact.SEO.canonicalURL} />
      <section className="overflow-splide w-full overflow-hidden pt-4 lg:pt-2">
        <div
          className={" cms-container flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-12 2xl:gap-0"
          }
        >
          <div className="w-full lg:w-[57%] 2xl:w-[60%]">
            <div className="lg:mb-5">
              <h1 className=" pb-3 capitalize">{contact.PageTitle}</h1>
              <p>{contact.PageIntroductoryContent}</p>
            </div>
            <div>
              <div>
                <div className=" py-4 sm:pb-8">
                  <div className="flex gap-6">
                    <div className="relative h-[45px] min-w-[45px]">
                      <Image src={Phone} alt="phone icon" layout="fill" />
                    </div>

                    <div className="max-w-3xl">
                      <p>
                        <span className="font-black  text-[#F04A48]">
                          Give us a call
                        </span>
                        . A good chat is how we like to get the ball rolling so
                        our friendly team are on hand to help. Office hours are{" "}
                        {global.OpeningTimes}
                      </p>
                      <a href={`tel:${global.TelephoneNumber}`} className="pt-3 text-[30px] font-black  text-[#F04A48] "
                      >
                        {global.TelephoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 pt-4">
                    <div className="relative h-[45px] min-w-[45px]">
                      <Image src={Domain} alt="phone icon" layout="fill" />
                    </div>
                    <div>
                      <a href={`mailto: ${global.EmailAddress}`} className="font-bold text-[#F04A48]"
                      >
                        {global.EmailAddress}
                      </a>
                      <address className="mb-4 text-[14px] not-italic leading-[25px] text-uniqueprimarybodylg:text-[16px] ">
                        {global.Address}
                      </address>
                      <div className=" mb-4 w-fit lg:mb-0">
                        <Socials
                          FbLink
                          TwLink={global.Twitter}
                          IgLink={global.Instagram}
                          InLink={global.Linkedin}
                          color
                          style
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full rounded-[10px] lg:mb-20 ">
                <MapInteractionCSS showControls>
                  <p className="hidden sm:block">
                    <Image
                      src={`/contact.png`}
                      width={880}
                      height={452}
                      alt="map desktop"
                    />
                  </p>
                  <p className="block sm:hidden">
                    <Image
                      src={`/contactMobile.png`}
                      width={331}
                      height={399}
                      alt="map mobile"
                    />
                  </p>
                </MapInteractionCSS>
              </div>
              {/* <div className="mt-8 hidden pb-8  lg:block">
                <HappyCustomers Title="Some of Our happy customers" />
              </div> */}
            </div>
          </div>
          <div className="-mx-6 lg:mx-0 lg:mt-6 lg:w-[40%] 2xl:w-[32%] ">
            <div className=" bg-[#EFF6F9] px-8 py-8 lg:rounded-[10px]">
              <h2 className=" mb-4 text-[28px] font-black  leading-8 text-[#F04A48] lg:max-w-[26rem]">
                Not sure where to start? Our expert team are on hand to help!
              </h2>
              <p className="pb-6 lg:max-w-[26rem] lg:pb-8 ">
                We have over 16 years of experience, so we&apos;re full of
                knowledge and ideas. Together, we can make an exhibition stand
                that’s right for you.
              </p>
              {success ? (
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-6xl text-blue-600"
                  />
                  <h4 className="mb-4 mt-8 font-bold">
                    Your form has been submitted!
                  </h4>
                  <p className="leading-8">
                    Thank you! We will be in contact with you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    {formError && (
                      <div className={"my-6"}>
                        <Alert type={"error"} message={formError} />
                      </div>
                    )}
                    <div className="w-full gap-5 lg:flex">
                      <p className="w-full ">
                        <FormInput
                          type={"text"}
                          label={"Company"}
                          value={formData.companyName}
                          required
                          fullWidth
                          onChange={(e) => {
                            setFormData((prevState) => ({
                              ...prevState,
                              companyName: e.target.value,
                            }));
                          }}
                        />
                      </p>
                      <p className="w-full">
                        <FormInput
                          type={"text"}
                          label={"Contact name"}
                          value={formData.forename}
                          required
                          fullWidth
                          onChange={(e) => {
                            setFormData((prevState) => ({
                              ...prevState,
                              forename: e.target.value,
                            }));
                          }}
                        />
                      </p>
                    </div>
                    <div className="gap-5 lg:flex">
                      <FormInput
                        type={"number"}
                        label={"Contact number"}
                        value={formData.phoneNumber}
                        required
                        fullWidth
                        onChange={(e) => {
                          setFormData((prevState) => ({
                            ...prevState,
                            phoneNumber: e.target.value,
                          }));
                        }}
                      />
                      <FormInput
                        type={"email"}
                        label={"Email"}
                        value={formData.email}
                        required
                        fullWidth
                        onChange={(e) => {
                          setFormData((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="w-full pb-2 ">
                      <FormInput
                        type={"textarea"}
                        label={"Message"}
                        value={formData.message}
                        required
                        textWidth
                        onChange={(e) => {
                          setFormData((prevState) => ({
                            ...prevState,
                            message: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div className="my-4 inline cursor-pointer flex-row-reverse justify-start gap-4 ">
                      <input
                        name="query"
                        id="query"
                        type="checkbox"
                        className="mr-2 inline w-fit "
                        value={isSubscribed === true ? "true" : "false"}
                        onChange={(e) => {
                          setIsSubscribed((prev) => !prev);
                          setFormData((prevState) => ({
                            ...prevState,
                            query: e.target.value,
                          }));
                        }}
                      />
                      <label htmlFor="query" className="-mt-1 inline text-[12px] font-normal">
                        I’m happy to be contacted with regard to my query only.
                      </label>
                    </div>
                    <div className="mt-2 block cursor-pointer flex-row-reverse justify-start gap-4 ">
                      <input id="marketing"
                        name="marketing"
                        type="checkbox"
                        className="mr-2 inline w-fit "
                        value={isMarketing === true ? "true" : "false"}
                        onChange={(e) => {
                          setIsMarketing((current) => !current);
                          setFormData((prevState) => ({
                            ...prevState,
                            marketing: e.target.value,
                          }));
                        }}
                      />
                      <label htmlFor="marketing" className="-mt-1 inline text-[12px] font-normal">
                        I don’t mind my details being used for marketing
                        purposes.
                      </label>
                    </div>

                    <span
                      className="mt-6 block text-center lg:w-full"
                      onClick={validateAndCreate}
                    >
                      {/* <DynamicButton
                        data-callback="handleSubmit"
                        data-sitekey={
                          "6LceYMcnAAAAAH8LX7ElKqv-CupIf0lJbJx6d-a2"
                        }
                        // data-action="submit"
                        // btnType="submit"
                        buttonStyle={`min-w-full font-black  text-white ${submitting && "opacity-50"
                          }`}
                        label={"Submit"}
                      /> */}
                    </span>
                  </div>
                </>
              )}

              {!success && (
                <div className="hidden items-center gap-4 sm:flex">
                  <div className="relative mt-6 flex h-[45px] min-w-[45px] items-center">
                    <Image src={Info} alt="info icon" layout="fill" />
                  </div>
                  <p className="mt-8 text-[12px] italic leading-5 lg:w-5/6">
                    Don’t worry, we only use this personal information to get
                    back in touch with you to provide a quote. We do not share,
                    distribute or lease this data.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = await getContact();
  return {
    props: {
      contact: contact.data.attributes,
    },
    revalidate: 10,
  };
};
