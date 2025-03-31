"use client";
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    title: 'fire tv stick HD',
    discount: '30%OFF',
    price: '¥4,880',
    originalPrice: '¥6,980',
    badge: 'スマイル SALE 新生活 FINAL',
  },
  {
    id: 2,
    title: 'Kindle Paperwhite',
    discount: '17%OFF',
    price: '¥22,980',
    originalPrice: '¥27,980',
    badge: 'スマイル SALE 新生活 FINAL',
  },
  {
    id: 3,
    title: 'Fire タブレット',
    discount: '20%OFF',
    price: '¥9,980',
    originalPrice: '¥12,980',
    badge: 'スマイル SALE 新生活 FINAL',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full">
      {/* プログレスバー */}
      <div className="w-full h-1 flex">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`flex-1 h-full ${index === currentSlide ? 'bg-gray-300' : 'bg-gray-500'}`} 
          />
        ))}
      </div>
      
      {/* メインスライダー */}
      <div className="relative w-full overflow-hidden">
        {/* グリーンバックグラウンド */}
        <div className="w-full h-[300px] bg-[#1cb11a]">
          {/* グラデーション下部 */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#eaeded] to-transparent z-10" />
          
          {/* コンテンツコンテナ */}
          <div className="relative max-w-6xl mx-auto h-full px-4">
            {/* テキストエリア */}
            <div className="absolute left-0 top-0 p-6 z-20">
              <div className="bg-white inline-block px-2 py-1 rounded mb-3">
                <p className="text-[#057a37] font-bold text-xs">{currentSlideData.badge}</p>
              </div>
              
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-2">{currentSlideData.discount}</h2>
                <div className="flex items-baseline mb-2">
                  <span className="text-base line-through mr-2">{currentSlideData.originalPrice}</span>
                  <span className="text-4xl font-bold">{currentSlideData.price}</span>
                </div>
                <h3 className="text-2xl font-bold">{currentSlideData.title}</h3>
              </div>
            </div>
            
            {/* 右側に表示する商品画像は実際の画像ファイルがないため省略 */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
              <div className="text-white text-6xl font-bold">FireTV</div>
            </div>
          </div>
        </div>
        
        {/* ナビゲーションボタン */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-8 h-14 shadow flex items-center justify-center z-20"
          aria-label="前のスライド"
        >
          <FiChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-8 h-14 shadow flex items-center justify-center z-20"
          aria-label="次のスライド"
        >
          <FiChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider; 