import { FaInstagramSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { CgMail } from "react-icons/cg"
import { SubHeading } from "./SubHeading"

export default function Footer(){
    return <div>
         <div className="flex justify-between py-10 px-10 text-fonnt bg-darkBiege">
        <div className="flex flex-col text-wrap ">
            <p className="text-4xl font-semibold">Trend Collections</p>
            <p className="text-2xl">Discover the beauty of Indian fashion with our exquisite collection.</p>
            <p className="text-2xl">The most trending drapery out there beautifully sourced from all over Gujarat.</p>
        </div>
        <div className="flex flex-col gap-5">
            <p className="text-4xl font-semibold">Contact Us</p>
            <div className="flex gap-4 text-3xl font-semibold">
                <FaInstagramSquare/>
                <FaWhatsappSquare/>
                <FaPhoneAlt/>
                <CgMail/>
            </div>
        </div>
    </div>
    <div className="flex justify-center items-center text-lg font-semibold text-white bg-black">
        <p>Created SupaFast by Azim</p>
    </div>
    </div>
}