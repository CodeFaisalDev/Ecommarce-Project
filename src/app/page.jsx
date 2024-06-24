import Featured from "@/app/components/Featured";
import Hero from "@/app/components/Hero";
import NewArivalSlide from "@/app/components/NewArivalSlide";
import BestPicks from "@/app/components/BestPicks";
import Footer from "@/app/components/Footer";

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
