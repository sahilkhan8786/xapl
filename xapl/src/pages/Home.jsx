import Detail from "../components/Detail";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="max-w-[1440px] mx-auto">
                <Hero />
                <Detail />
            </div>

            <Download />

            <Footer />
        </>
    )
}
