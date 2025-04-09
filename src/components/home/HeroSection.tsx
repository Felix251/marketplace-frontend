import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] bg-gray-900 text-white">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/kal-visuals-square.jpg"
          alt="Hero background"
          fill
          priority
          quality={90}
          className="object-cover opacity-50"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Find the best products from trusted sellers. Shop with confidence and get the best deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input
              type="text"
              placeholder="Search for products..."
              className="px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Search
            </Button>
          </div>
          
          {/* Ajout des deux boutons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground font-medium"
              asChild
            >
              <Link href="/categories">
                Explorer les produits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/dashboard/boutiques/nouvelle">
                Ouvrir une boutique
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;