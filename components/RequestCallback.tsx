import axios from "axios";
import { Fragment, useRef, useContext, useState } from "react";
//@ts-ignore
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import Image from "next/image";
//@ts-ignore
// import TagManager from "react-gtm-module";
import { faTimes } from "@fortawesome/pro-regular-svg-icons";
import { ModalContext } from "@/constants/lib/context/demo-modal";
import FormInput from "@/constants/Forms/FormInput";
import Alert from "./Alert";

declare const window: any;

export default function RequestCallBack() {
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
        });
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
    <Transition.Root show={modalVisible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => setModalVisible(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity md:bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="absolute bottom-0 left-0 right-0 top-0 h-full w-full transform  overflow-auto bg-white px-6 py-6 text-left shadow-xl transition-all sm:rounded-xl md:relative md:my-8  md:w-[90%] lg:max-w-6xl lg:p-0">
                <div>
                  <div
                    onClick={() => setModalVisible(false)}
                    className="absolute right-2 top-2 mx-auto mb-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full sm:-top-2 sm:mt-8 lg:right-6 lg:top-2 lg:mb-0 "
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-2xl text-[#C3CAD9]"
                    />
                  </div>                 
                      {success ? (
                        <div className="flex h-[25rem] flex-col justify-center text-center">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-8xl text-blue-600"
                          />
                          <h4 className="mb-2 mt-8 text-[28px] font-bold">
                            Your form has been submitted!
                          </h4>
                          <p className="leading-8">
                            Thank you! We will be in contact with you shortly.
                          </p>
                        </div>
                      ) : (
                        <div className="mb-26 h-full justify-between gap-16 lg:flex">
                          <div className="relative mt-8 rounded-md bg-uniquedarkgrey pt-6 sm:mt-12 lg:mt-0 lg:w-1/2 lg:rounded-none lg:pb-[8rem] xl:pb-[7rem] 2xl:pb-[4.8rem]  ">
                            <div className="max-w-xl rounded-[10px] px-8 lg:mt-10 lg:max-w-lg lg:px-10 ">
                              <h2 className="text-[22px] font-black  leading-[35px] text-[#F04A48] lg:mt-6 lg:text-[30px] lg:leading-[45px]">
                                Not sure where to start? Our expert team are on
                                hand to help!
                              </h2>
                              <div className="flex items-center justify-between gap-4 pb-6 lg:pb-0">
                                <p className=" mt-8 max-w-[12rem] text-[15px] font-light text-white sm:max-w-[20rem] sm:text-[18px] lg:max-w-full">
                                  Our friendly team will give you a call back to
                                  have an informal chat about your exhibition
                                  stand and guide you through your options.
                                </p>
                                {/* <div className="absolute bottom-3 right-2 block min-w-[106px] sm:static sm:min-h-[130px] sm:min-w-[145px] lg:hidden ">
                                  <Image
                                    src={MobileModalImage}
                                    unoptimized
                                    height={125}
                                    width={106}
                                    layout="responsive"
                                    alt="mobile modal image"
                                    quality={100}
                                  />
                                </div> */}
                              </div>
                            </div>
                            {/* <div className="-bottom-20 -right-10 hidden lg:relative lg:block ">
                              <Image
                                src={DesktopModalImage}
                                priority
                                unoptimized
                                max-height={454}
                                max-width={594}
                                layout="responsive"
                                alt="desktop modal image"
                              />
                            </div> */}
                          </div>

                          <div className=" w-full pt-4 lg:w-1/2 lg:pb-8 lg:pt-12">
                            {formError && (
                              <div className={"mt-6 lg:mt-12 lg:w-[93%]"}>
                                <Alert type={"error"} message={formError} />
                              </div>
                            )}
                            <div className=" md:max-w-xl">
                              <Dialog.Title
                                as="h2"
                                className="mb-5 mt-6 text-[18px] font-black  text-[#F04A48] lg:mb-10 lg:text-[23px]"
                              >
                                Request A Callback
                              </Dialog.Title>
                            </div>
                            <div>
                              <div className="gap-5 lg:flex lg:gap-0">
                                <FormInput
                                  type={"text"}
                                  label={"Company"}
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
                                  type={"text"}
                                  label={"Contact name"}
                                  value={formData.forename}
                                  required
                                  onChange={(e) => {
                                    setFormData((prevState) => ({
                                      ...prevState,
                                      forename: e.target.value,
                                    }));
                                  }}
                                />
                              </div>
                              <div className="gap-5 lg:flex lg:gap-0">
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
                                <FormInput
                                  type={"email"}
                                  label={"Email"}
                                  value={formData.email}
                                  required
                                  onChange={(e) => {
                                    setFormData((prevState) => ({
                                      ...prevState,
                                      email: e.target.value,
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
                              <div className="my-4 inline cursor-pointer flex-row-reverse justify-start gap-4 ">
                                <input
                                  id="query"
                                  name="query"
                                  type="checkbox"
                                  className="mr-2 inline w-fit "
                                  value={
                                    isSubscribed === true ? "true" : "false"
                                  }
                                  onChange={(e) => {
                                    setIsSubscribed((prev) => !prev);
                                    setFormData((prevState) => ({
                                      ...prevState,
                                      query: e.target.value,
                                    }));
                                  }}
                                />
                                <label htmlFor="query" className="-mt-1 inline text-[12px] font-normal">
                                  I’m happy to be contacted with regard to my
                                  query only.
                                </label>
                              </div>
                              <div className="mt-2 block cursor-pointer flex-row-reverse justify-start gap-4 ">
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
                                <label htmlFor="marketing" className="-mt-1 inline text-[12px] font-normal">
                                  I don’t mind my details being used for
                                  marketing purposes.
                                </label>
                              </div>
                              <span
                                className="mb-5 mt-8 block text-center lg:w-[93%]"
                                onClick={validateAndCreate}
                              >
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
                        </div>
                      )}                    
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
