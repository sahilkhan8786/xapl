import DContent from "../components/DContent";
import DNavbar from "../components/DNavbar";
import SideBar from "../components/SideBar";


export default function Dashboard() {
    return (

        <div className="flex w-full">
            <div >
                <SideBar />
            </div>
            <div className="w-full">
                <DNavbar />
                <DContent />
            </div>
        </div>

    )
}
