import TagLine from "./Tagline";
import Image from "next/image";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <><Image src="/ecwa-logo.png" alt="camp" width={50} height={50} /><span className="font-black uppercase text-ecwaorange ">{tag}</span></>}
      {title && <h2 className="h2 mt-4">{title}</h2>}
      {text && <p className="body-2 mt-7 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
