import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white">
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-4 pt-16 pb-6 font-roboto px-4 md:px-0 space-y-8 md:space-y-0">
      <div className="">
        <h3 className="font-bold text-xl text-blue-700 md:mb-5">HomeSpace</h3>
        <div className="text-base font-normal mb-7">
          <p>Jalan Merpati No.87 A</p>
          <p>Yogyakarta, Depok Sleman</p>
          <p>Indonesia</p>
        </div>

        <div>
          <p className="text-base font-normal"><span className="font-bold">Phone:</span> 0858-5139-3874</p>
          <p className="text-base font-normal"><span className="font-bold">Email:</span> andi.mahardika.mulya@gmail.com</p>
        </div>
      </div>

      <div className="md:ps-5">
        <h3 className="font-bold text-xl text-blue-700 md:mb-5">Usefull Links</h3>
        <ul className="text-base font-normal space-y-2">
          <li><Link className="hover:text-blue-700" to="">Home</Link></li>
          <li><Link className="hover:text-blue-700" to="">About Us</Link></li>
          <li><Link className="hover:text-blue-700" to="">Services</Link></li>
          <li><Link className="hover:text-blue-700" to="">Blog</Link></li>
          <li><Link className="hover:text-blue-700" to="">Contact Us</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl text-blue-700 md:mb-5">Our Services</h3>
        <ul className="text-base font-normal space-y-2">
          <li><Link className="hover:text-blue-700" to="">Home Design</Link></li>
          <li><Link className="hover:text-blue-700" to="">Complete Amenities</Link></li>
          <li><Link className="hover:text-blue-700" to="">Safe & Comfortable Environment</Link></li>
          <li><Link className="hover:text-blue-700" to="">Security and Comfort</Link></li>
          <li><Link className="hover:text-blue-700" to="">Competitive Pricing</Link></li>
        </ul>
      </div>

      <div className="flex flex-col-reverse pb-4">
        <ul className="flex gap-4">
          <li><Link className="" to="https://www.facebook.com/andi.m.mulya.90"><FaFacebook size={25} className="text-blue-700" /></Link></li>
          <li><Link className="" to="https://x.com/AndiStudents"><FaTwitter size={25} className="hover:text-slate-600" /></Link></li>
          <li><Link className="" to="https://www.instagram.com/andimahardikamulya_/"><FaInstagram size={25} className="text-red-600" /></Link></li>
        </ul>
      </div>
    </section>
    <hr />
    <footer className="text-center text-sm font-normal py-7 font-roboto">
      Copyright ® 2024 andi mahardika mulya
    </footer>
    </div>
  )
}