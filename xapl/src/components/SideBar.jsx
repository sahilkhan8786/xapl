import { activity, dashboard, ep, leaderboard, track } from "../assets/icons";

export default function SideBar() {
    return (
        <div className="px-12 py-12 font-poppins mt-20  flex flex-col gap-6">
            <p className="bg-primaryD pl-4 pr-12 py-2 flex gap-2 rounded-lg items-center text-white ">
                <img src={dashboard} alt="" />
                <span>Dashboard</span>
            </p>
            <p className=" pl-4 pr-12 py-2 flex gap-2 rounded-lg items-center  ">
                <img src={leaderboard} alt="" />
                <span>Leaderboard</span>
            </p>
            <p className=" pl-4 pr-12 py-2 flex gap-2 rounded-lg items-center ">
                <img src={track} alt="" />
                <span>Track Progress</span>
            </p>
            <p className=" pl-4 pr-12 py-2 flex gap-2 rounded-lg items-center  ">
                <img src={ep} alt="" />
                <span>Exercise <br />Progression</span>
            </p>
            <p className=" pl-4 pr-12 py-2 flex gap-2 rounded-lg items-center  ">
                <img src={activity} alt="" />
                <span>Activity&nbsp;log</span>
            </p>
        </div>
    )
}
