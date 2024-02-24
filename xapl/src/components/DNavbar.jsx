import { admin, bell, down, flag, search } from "../assets/icons";


export default function DNavbar() {
    return (
        <div className="flex justify-between py-8 px-5 font-poppins">
            <h1 className=" text-4xl font-semibold">Dashboard</h1>
            <div className="flex gap-3">
                <div className="flex gap-2 h-fit bg-navInput py-2 px-4  rounded-lg">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search here..." className="w-full bg-transparent" />
                </div>
                <div className="flex gap-4 h-fit items-center">
                    <img src={flag} alt="" />
                    <span>IND</span>
                    <img src={down} alt="" className="h-fit" />
                </div>
            </div>
            <div className="flex h-fit items-center gap-3 ">
                <img src={bell} alt="" />
                <div className="flex gap-12 items-center">
                    <img src={admin} alt="" />
                    <span className="flex items-start gap-12">
                        <div className="flex items-start flex-col ">
                            <p >Lorem</p>
                            <p className="text-xs text-detailBG">Admin</p>
                        </div>
                        <img src={down} alt="" className="h-fit pt-2" />
                    </span>
                </div>
            </div>

        </div>
    )
}
