import Image from "next/image";
import "@splidejs/react-splide/css";
import BgLeftImg1 from "../../../../public/img/bgrightimg.png";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const HappyCustomers = dynamic(() => import('../../../components/BlockComponents/HappyCustomers'));
export default function HasHappyCustomersBlock(props: any) {
  const router = useRouter();
  return (
    <>
      {props?.data?.HasHappyCustomers && (
        <div
          className={`flexible-component pb-8 lg:mb-0 ${router.asPath === "/exhibition-stand-design" && "hidden lg:block "
            } `}
        >
          <div className=" relative">
            <div className="absolute -right-10 top-20 z-0 block sm:top-10 lg:hidden ">
              <Image
                src={BgLeftImg1}
                height={450}
                width={300}
                alt={"background image"}
              />
            </div>
            <HappyCustomers Title={` ${router.asPath === '/exhibition-stand-printing' ? 'We’ve worked with hundreds of amazing companies' : 'Some Of Our Happy Customers'} `} />
          </div>
        </div>
      )}
    </>
  );
}
