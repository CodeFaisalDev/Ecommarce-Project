import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import NewArivalSlide from "@/components/NewArivalSlide";
import BestPicks from "@/components/BestPicks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen max-sm:max-w-screen flex-col items-center justify-between ">
      <Hero />
      <NewArivalSlide />
      <Featured />
      <BestPicks />
      <Footer />
    </main>
  );
}
