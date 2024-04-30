import { notification1 } from "../assets";
import { notificationImages } from "../constants";
import Image from "next/image";

const Notification = ({ className, title }: any) => {
    return (
        <div
            className={`${className || ""
                } flex items-center bg-white p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
        >
            <Image
                src={'/ecwa-logo.png'}
                width={62}
                height={62}
                alt="image"
                className="rounded-xl"
            />

            <div className="flex-1">
                {/* <h6 className="mb-1 font-semibold text-base">{title}</h6> */}

                <div className="flex items-cente justify-between">
                    <ul className="flex -m border border-ecwaorange">
                        {/* {notificationImages.map((item, index) => (
                            <li
                                key={index}
                                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                            >
                                <Image
                                    src={item}
                                    className="w-full"
                                    width={20}
                                    height={20}
                                    alt={'item'}
                                />
                            </li>
                        ))} */}
                    </ul>
                    <div className="text-[16px] text-ecwadarkblue">ECWA Birmingham</div>
                </div>
            </div>
        </div>
    );
};

export default Notification;