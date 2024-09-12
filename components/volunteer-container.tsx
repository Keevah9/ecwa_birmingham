import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Link from "next/link";
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Button from "./Button";
import { ModalContext } from "@/constants/lib/context/demo-modal";
import { useContext, useEffect, useState } from "react";
import RequestCallBack from "./RequestCallback";
interface VolunteerDataProps {
    data: VolunteerProps[]
}

interface VolunteerProps {
    id?: number,
    backgroundUrl?: string,
    iconUrl?: string,
    text?: string,
    title?: string,
    imageUrl?: string,
    url?: string
}
const VolunteerContainer = (props: VolunteerDataProps) => {
    const {
        modalVisible,
        setModalVisible,
        quoteModalVisible,
        setQuoteModalVisible,
    } = useContext(ModalContext);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (item:any) => {
        setSelectedItem(item);
    };

    
    useEffect(() => {
        if (selectedItem) {
            setModalVisible(true);
        }
    }, [selectedItem, setModalVisible]);

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <Splide
                className="splide"
                hasTrack={false}
                options={{
                    //@ts-ignore
                    rewind: "true",
                    perPage: 3,
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    lazyLoad: "nearby",
                    gap: "1.5rem",
                    snap: true,
                    speed: 1000,
                    easing: "linear",
                    interval: 5000,
                    type: "loop",
                    autoplay: true,
                    breakpoints: {
                        "1024": {
                            arrows: false,
                            perPage: 2.5,
                        },
                        "920": {
                            arrows: false,
                            perPage: 2,
                        },
                        "540": {
                            arrows: false,
                            perPage: 1,
                        },
                    },
                }}
            >
                <SplideTrack className="splide__track">


                    {props.data.map((item: any) => {
                        return (
                            <><SplideSlide
                                key={item.id}
                                className="splide__splide"
                            >

                                <div
                                    className="block shadow-md relative p-0.5 rounded-[5px] bg-no-repeat bg-[length:100%_100%] md:max-w-[27rem] "
                                    style={{
                                        background: `${item.backgroundUrl}`,
                                    }}
                                    key={item.id}
                                >
                                    <div className="relative z-2 flex flex-col h-[25.5rem] p-[2.4rem] ">
                                        <h5 className="h5 mb-5 text-white font-extrabold">{item.title}</h5>
                                        <p className="body-2 mb-6 text-white text-n-3">{item.text}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div onClick={() => handleOpenModal(item)}>
                                                <Button title="Volunteer" variant="btn" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="absolut relative z-0 inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                            {item.imageUrl && (
                                                <img src={item.imageUrl} width={370} height={322} alt={item.title} className="w-full h-full object-contain" />
                                            )}
                                        </div>
                                    </div>
                                    <ClipPath />
                                </div>


                            </SplideSlide>
                            </>
                        );
                    })}

                </SplideTrack>
            </Splide> 
            {/* <div className="hidden xl:grid gap-6 grid-cols-3 ">
                {props.data.map((item) => (
                    <div
                        className="block shadow-xl relative p-0.5 rounded-[5px] bg-no-repeat bg-[length:100%_100%] md:max-w-[27rem] "
                        style={{
                            background: `${item.backgroundUrl}`,
                        }}
                        key={item.id}
                    >
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                            <h5 className="h5 mb-5 text-white font-extrabold">{item.title}</h5>
                            <p className="body-2 mb-6 text-white text-n-3">{item.text}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div onClick={() => handleOpenModal(item)}>
                                    <Button title="Volunteer" variant="btn" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="absolut relative z-0 inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                {item.imageUrl && (
                                    <img src={item.imageUrl} width={370} height={322} alt={item.title} className="w-full h-full object-contain" />
                                )}
                            </div>
                        </div>
                        <ClipPath />
                    </div>
                ))}
            </div> */}
            <div className="fle lg:hidden flex-wra gri ">
                {/* Your Splide slider code */}
            </div>
            {/* Render the modal with the selected item */}
            {selectedItem && (
                <RequestCallBack selectedItem={selectedItem} onCloseModal={handleCloseModal} />
            )}
        </>
    );
};

export default VolunteerContainer;

