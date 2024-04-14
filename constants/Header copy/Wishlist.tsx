import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHeart } from "@fortawesome/pro-regular-svg-icons/faCircleHeart";
import Link from "next/link";

export default function Wishlist() {
    return (
        <Link href={"/wishlist"}>
            <a title={"Wishlist"}>
                <FontAwesomeIcon icon={faCircleHeart} className={"mr-2"} />
                Wishlist
            </a>
        </Link>
    );
}
