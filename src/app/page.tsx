import HeroSlider from '@/components/home/HeroSlider';
import ProductGrid from '@/components/home/ProductGrid';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <HeroSlider />
      <ProductGrid />
    </main>
  );
}
