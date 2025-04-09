import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import PopularShopsSection from "@/components/home/PopularShopsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <PopularShopsSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}
