import HeroSlider from '@/components/home/HeroSlider';
import ProductGrid from '@/components/home/ProductGrid';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSlider />
        <ProductGrid />
      </main>
    </div>
  );
}
