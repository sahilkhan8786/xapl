import { user, logo } from "../assets/logo"
import { GiHamburgerMenu } from '../assets/icons'
export default function Navbar() {
    return (
        <header className="bg-primary">
            <nav className="max-w-[1440px] mx-auto flex items-center justify-between font-lato px-4 font-bold">
                <div className="w-45 h-[86px]  flex items-center justify-start overflow-hidden " >
                    <img src={logo} alt="FITSNAP" className="w-[70%] cursor-pointer object-cover lg:w-full " />
                </div>
                <div className="lg:gap-10 text-white uppercase items-center hidden md:flex px-5 gap-2">

                    <ul className="flex text-sm lg:text-base gap-2   " >
                        <li>Home</li>
                        <li>Workout plan</li>
                        <li>ai tracker</li>
                        <li>exercise</li>
                    </ul>
                    <ul className="flex  gap-2 items-center lg:gap- text-sm lg:text-base">
                        <li>about</li>
                        <li className="flex gap-2 bg-secondry px-1 py-1 rounded-md lg:px-2">
                            <img src={user} alt="" />
                            <span>Login</span>
                        </li>
                    </ul>

                </div>
                <div className="pr-9 text-white block md:hidden">
                    <GiHamburgerMenu className="text-4xl cursor-pointer " />
                </div>
            </nav>
        </header>
    )
}
