"use client";
import Link from 'next/link';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="text-white sticky top-0 z-50">
      {/* トップヘッダー */}
      <div className="bg-[#131921] py-2 px-2">
        <div className="max-w-screen-2xl mx-auto flex items-center">
          {/* ロゴ */}
          <Link href="/" className="mr-4">
            <div className="text-[#ff9900] font-bold whitespace-nowrap">
              amazon.co.jp
            </div>
          </Link>

          {/* 検索バー */}
          <div className="flex-1 flex h-9 max-w-4xl mx-4">
            <div className="bg-white rounded-l-md flex items-center px-2 text-black text-sm">
              <span>すべて</span>
              <span className="ml-1">▼</span>
            </div>
            <input
              type="text"
              className="flex-1 h-full py-2 px-3 border-none outline-none text-black"
              placeholder="Amazon.co.jpを検索"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] h-full px-3 rounded-r-md flex items-center justify-center">
              <FiSearch className="h-5 w-5 text-black" />
            </button>
          </div>

          {/* 右側メニュー */}
          <div className="flex items-center space-x-4 text-xs">
            <div className="hidden md:block cursor-pointer">
              <p>こんにちは, ログイン</p>
              <p className="font-bold">アカウント＆リスト ▼</p>
            </div>

            <div className="hidden md:block cursor-pointer">
              <p>返品もこちら</p>
              <p className="font-bold">注文履歴</p>
            </div>

            <div className="relative flex items-center cursor-pointer">
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#f3a847] text-center rounded-full text-black font-bold text-xs">
                0
              </span>
              <FiShoppingCart className="h-6 w-6" />
              <span className="hidden md:inline ml-1 font-bold">カート</span>
            </div>
          </div>
        </div>
      </div>

      {/* ボトムヘッダー */}
      <div className="bg-[#232f3e] py-1 px-2">
        <div className="max-w-screen-2xl mx-auto flex items-center text-sm overflow-x-auto">
          <div className="flex items-center cursor-pointer px-2 py-1">
            <span className="font-bold mr-1">≡</span>
            <span>すべて</span>
          </div>
          <div className="cursor-pointer px-2 py-1">Amazonポイント</div>
          <div className="cursor-pointer px-2 py-1">ヘルプ</div>
          <div className="cursor-pointer px-2 py-1">ふるさと納税</div>
          <div className="cursor-pointer px-2 py-1">ネットスーパー</div>
          <div className="cursor-pointer px-2 py-1">ランキング</div>
          <div className="cursor-pointer px-2 py-1">Amazon Basics</div>
          <div className="cursor-pointer px-2 py-1">プライム特典</div>
        </div>
      </div>
    </header>
  );
};

export default Header;