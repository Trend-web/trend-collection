'use client'
import { FaInstagramSquare } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { CgMail } from "react-icons/cg"
import Link from "next/link"
import Button from "@/components/Button"

export default function Home(){
  return (
    <main className="flex flex-col gap-8 p-10 bg-lightBiege min-h-screen pt-24">
      <section className="mb-12">
        <div className="flex justify-between items-center pb-3">
        <h1 className="text-4xl font-bold mb-6 text-fonnt">About Us</h1>
        <Link href='/'><Button onClick={()=>{}} label="Home"></Button></Link>
        </div>
        <p className="text-lg text-fonnt">
          Trend Collections is your one-stop destination for top-quality garments at affordable prices. 
          We are passionate about bringing the latest fashion trends and designs to our customers, 
          offering a wide range of styles to suit every taste and occasion.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-6 text-fonnt">Contact Us</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-2 rounded border border-darkBiege"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-2 rounded border border-darkBiege"
          />
          <textarea 
            placeholder="Your Message" 
            rows={5} 
            className="p-2 rounded border border-darkBiege"
          ></textarea>
          <button 
            type="submit" 
            className="bg-darkBiege text-fonnt py-2 px-4 rounded hover:bg-categories transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mt-12">
        <h2 className="text-4xl font-bold mb-6 text-fonnt">Connect With Us</h2>
        <div className="flex flex-col gap-4 text-3xl font-semibold">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-fonnt ">
            <FaInstagramSquare/> <p className="text-1xl">Instagram</p>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-fonnt ">

            <FaWhatsappSquare/> <p className="text-1xl">Whatsapp</p>
          </a>
          <a href="tel:+919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-fonnt ">
            <FaPhoneAlt/> <p className="text-1xl">Phone</p>
          </a>
          <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-fonnt ">
            <CgMail/> <p className="text-1xl">Email</p>
          </a>
        </div>
      </section>
    </main>
  )
}