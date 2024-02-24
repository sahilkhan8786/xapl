import { heroImage, heroImage1 } from "../assets/image";

export default function Hero() {
    return (
        <div className="mt-2 lg:mt-8 max-w-7xl mx-auto">
            <div className="w-full relative">
                <img src={heroImage} alt="" className="object-cover" />
                <img src={heroImage1} alt="" className="absolute bottom-4 -left-20 max-[1440px]:left-0 w-52 md:w-fit" />
            </div>
        </div>
    )
}
