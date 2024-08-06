import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type?: 'button' | 'submit';
  title?: string;
  icon?: string;
  link?: string;
  variant?: string;
  full?: boolean;
  style?: boolean;
}

const Button = ({ type, title, icon, variant, full, link, style, }: ButtonProps) => {
  return (
    <>
      {link ?
        <Link  href={`${link}`}>
          <a className={`relative inline-flex items-center text-center justify-center cursor-pointer px-4 py-2q mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  hover:text-white dark:text-white sm:min-w-[180px] focus:outline-none ${variant ? 'bg-gradient-to-br from-purple-600 to-ecwadarkblue group-hover:from-purple-600 group-hover:to-ecwadarkblue hover:text-white ' : ' bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-pink-200 dark:focus:ring-pink-800'}`} >
            <label className="relative px-2 min-w-20 py-2.5 cursor-pointer  transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              {title}
            </label>
          </a></Link> :
           <button
          className={`relative sm:min-w-[180px] inline-flex items-center justify-center py-2 mb-2 me-2 px-4 overflow-hidden cursor-pointer  text-sm font-medium text-gray-900 rounded-lg group  hover:text-white dark:text-white  focus:outline-none   ${variant ? 'bg-gradient-to-br from-purple-600 to-ecwadarkblue group-hover:from-purple-600 group-hover:to-ecwadarkblue hover:text-white ' : ' bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-pink-200 dark:focus:ring-pink-800'} ${full && 'w-full'}`}
            type={type}
          >
          {icon && <Image src={icon} alt={title} width={24} height={24} />}
          <label className="relative px-2 min-w-20 py-2.5 transition-all ease-in duration-75  cursor-pointer  rounded-md ">{title}</label>
        </button>
//         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
// <label className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// {title}
// </label>
// </button>
      }
    </>
  )
}

export default Button