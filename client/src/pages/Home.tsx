import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import Newsletter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import CommunityEngagement from "@/components/CommunityEngagement";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Statistics />
        <CallToAction />
        <CommunityEngagement/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home;