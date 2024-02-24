import { social1, social2, social3, social4 } from "../assets/image";
import { right } from "../assets/icons";

export default function Footer() {
    return (
        <div className="bg-primary font-poppins p-8 ">
            <div className="max-w-[1280px] mx-auto text-white p-8 flex  flex-col xl:flex-row justify-between items-center xl:items-start">
                <div className="flex gap-12">
                    <article className="flex flex-col gap-6">
                        <h1 className="uppercase text-footerPrimary  tracking-wider">Company</h1>
                        <span className="text-xs text-white">Our story</span>
                        <span className="text-xs text-white">Careers</span>
                        <span className="text-xs text-white">Blog</span>
                        <span className="text-xs text-white">About</span>
                    </article>
                    <article className="flex flex-col gap-6">
                        <h1 className="uppercase text-footerPrimary  tracking-wider">Help</h1>
                        <span className="text-xs text-white">FAQ</span>
                        <span className="text-xs text-white">Terms & Conditions</span>
                        <span className="text-xs text-white">Privacy Policy</span>
                        <span className="text-xs text-white">Contact Us</span>
                    </article>
                </div>
                <div className="flex mt-12 pt-12 gap-8 xl:flex-row flex-col items-center xl:items-start">
                    <div className="uppercse flex flex-col gap-2">
                        <h1 className="text-footerPrimary uppercase">social media</h1>
                        <div className="flex gap-2">
                            <img src={social1} alt="" />
                            <img src={social2} alt="" />
                            <img src={social3} alt="" />
                            <img src={social4} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="uppercase text-footerPrimary">stay updated with us</h1>
                        <div className="bg-white p-4 flex">
                            <input type="text" placeholder="Your email address" className="bg-transparent" />
                            <img src={right} alt="" />
                        </div>
                        <span>Copyright © 2023 FitSnap</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
