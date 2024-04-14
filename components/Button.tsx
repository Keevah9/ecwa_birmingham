import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  link?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full, link }: ButtonProps) => {
  return (
    <>
      {link ?
        <Link href={`${link}`}>
          <button className={`flexCenter gap-3 rounded-[50px] ${variant} ${full && 'w-full'}`}
            type={type}
          >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
          </button></Link> : <button
          className={`flexCenter gap-3 rounded-[50px] py-4 rounded-full ${variant} ${full && 'w-full'}`}
            type={type}
          >
          {icon && <Image src={icon} alt={title} width={24} height={24} />}
          <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
      }
    </>
  )
}

export default Button