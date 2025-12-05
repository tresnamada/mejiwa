import Navbar from "../../components/Navbar"
import HeroSection from "../../components/HeroSection"
import MejiwaSection from "../../components/MejiwaSection"
import SehatJiwaSection from "../../components/SehatJiwaSection"
import Footer from "../../components/Footer"

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <MejiwaSection />
            <SehatJiwaSection />
            <Footer />
        </div>
    )
}
