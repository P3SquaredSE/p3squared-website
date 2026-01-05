import Header from "@/components/Header";
import HomeServer from "@/components/HomeServer";

export default function page() {
  return (
    <div className="min-h-screen bg-[#0B3356] text-white">
      <Header />
      <HomeServer />
    </div>
  );
}