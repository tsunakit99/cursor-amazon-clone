import Image from 'next/image';

// ダミーデータ
const products = [
  {
    id: 1,
    title: 'HP ノートパソコン Pavilion Aero 13',
    price: 129800,
    originalPrice: 157000,
    discount: 17,
    image: '/products/laptop.jpg',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    title: 'MAXZEN テレビ 32型 ハイビジョン',
    price: 18981,
    originalPrice: 20980,
    discount: 10,
    image: '/products/tv.jpg',
    rating: 4.0,
    reviews: 256,
  },
  {
    id: 3,
    title: 'Pixio PX248 Wave White ゲーミングモニター',
    price: 24280,
    originalPrice: 26980,
    discount: 10,
    image: '/products/monitor.jpg',
    rating: 4.2,
    reviews: 89,
  },
  {
    id: 4,
    title: 'REDMAGIC 10 Pro',
    price: 145160,
    originalPrice: 152800,
    discount: 5,
    image: '/products/phone.jpg',
    rating: 4.7,
    reviews: 42,
  },
  {
    id: 5,
    title: 'Dowinx ゲーミングチェア',
    price: 19860,
    originalPrice: 24700,
    discount: 20,
    image: '/products/chair.jpg',
    rating: 4.3,
    reviews: 167,
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 max-w-screen-2xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
        >
          <div className="relative h-48 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="space-y-2 flex-grow">
            <h3 className="text-sm font-medium line-clamp-2 mb-1 hover:text-amazon-blue-light cursor-pointer">
              {product.title}
            </h3>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-blue-500">({product.reviews})</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                {product.discount}%OFF
              </span>
              <span className="text-lg font-bold">¥{product.price.toLocaleString()}</span>
            </div>
            <div className="text-sm text-gray-500">
              <span className="line-through">
                参考: ¥{product.originalPrice.toLocaleString()}
              </span>
            </div>
            <div className="text-xs text-amazon-blue mt-2">
              <span className="font-bold">Prime</span> - 通常配送無料
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid; 