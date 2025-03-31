"use client";

// ダミーデータ
const products = [
  {
    id: 1,
    title: 'HP ノートパソコン Pavilion Aero 13',
    price: 129800,
    originalPrice: 157000,
    discount: 17,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    title: 'MAXZEN テレビ 32型 ハイビジョン',
    price: 18981,
    originalPrice: 20980,
    discount: 10,
    rating: 4.0,
    reviews: 256,
  },
  {
    id: 3,
    title: 'Pixio PX248 Wave White ゲーミングモニター',
    price: 24280,
    originalPrice: 26980,
    discount: 10,
    rating: 4.2,
    reviews: 89,
  },
  {
    id: 4,
    title: 'REDMAGIC 10 Pro',
    price: 145160,
    originalPrice: 152800,
    discount: 5,
    rating: 4.7,
    reviews: 42,
  },
  {
    id: 5,
    title: 'Dowinx ゲーミングチェア',
    price: 19860,
    originalPrice: 24700,
    discount: 20,
    rating: 4.3,
    reviews: 167,
  },
];

const ProductGrid = () => {
  return (
    <div className="bg-[#eaeded] py-4">
      {/* 商品グリッド */}
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 hover:shadow-md transition-shadow"
            >
              {/* 割引表示とセールタグ */}
              <div className="flex justify-between mb-2">
                <div className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-sm">
                  <span>{product.discount}%OFF</span>
                </div>
                <div className="text-[#c45500] text-xs font-semibold">
                  セール
                </div>
              </div>
              
              {/* 商品画像（ダミー表示） */}
              <div className="w-full h-32 bg-gray-100 mb-3 flex items-center justify-center text-gray-400">
                商品画像
              </div>
              
              {/* 商品情報 */}
              <div>
                {/* 商品名 */}
                <h3 className="text-sm text-[#0066c0] hover:text-[#c45500] cursor-pointer mb-1 line-clamp-2">
                  {product.title}
                </h3>
                
                {/* 評価 */}
                <div className="flex items-center mb-1">
                  <div className="flex text-[#ffa41c]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(product.rating) ? "text-[#ffa41c]" : "text-gray-300"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-[#007185] ml-1">
                    ({product.reviews})
                  </span>
                </div>
                
                {/* 価格 */}
                <div className="mb-1">
                  <div className="flex items-baseline">
                    <span className="text-xs">￥</span>
                    <span className="text-lg font-medium">{product.price.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="line-through">
                      過去価格: ￥{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                {/* 配送情報 */}
                <div className="text-xs flex items-center mt-2">
                  <span className="text-[#007185] font-bold mr-1">Prime</span>
                  <span className="text-gray-700">通常配送無料</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* ナビゲーションボタン */}
      <div className="flex justify-end max-w-screen-2xl mx-auto px-4 mt-4">
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-300">
          N
        </button>
      </div>
    </div>
  );
};

export default ProductGrid; 