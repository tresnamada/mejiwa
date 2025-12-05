import Navbar from "../app/components/Navbar"
import HeroSection from "../app/components/HeroSection"
import MejiwaSection from "../app/components/MejiwaSection"
import SehatJiwaSection from "../app/components/SehatJiwaSection"
import Footer from "../app/components/Footer"

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
