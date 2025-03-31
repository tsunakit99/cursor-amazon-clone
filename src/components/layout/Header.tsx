import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-amazon-blue text-white sticky top-0 z-50">
      {/* Top Header */}
      <div className="flex items-center p-2 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href="/">
            <Image
              src="/amazon-jp-logo.png"
              alt="Amazon Logo"
              width={97}
              height={30}
              className="cursor-pointer px-4"
              priority
            />
          </Link>
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-amazon-yellow hover:bg-amazon-yellow-dark">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black"
            placeholder="Amazonで検索"
          />
          <div className="h-12 p-4 text-black">
            <FiSearch className="h-5 w-5" />
          </div>
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p className="hover:text-amazon-yellow">こんにちは</p>
            <p className="font-extrabold md:text-sm">アカウント＆リスト</p>
          </div>

          <div className="link">
            <p className="hover:text-amazon-yellow">返品も</p>
            <p className="font-extrabold md:text-sm">注文履歴</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-amazon-yellow text-center rounded-full text-black font-bold">
              0
            </span>
            <FiShoppingCart className="h-8 w-8" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">カート</p>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon-blue-light text-white text-sm">
        <p className="link flex items-center">
          <span>すべて</span>
        </p>
        <p className="link">Amazonポイント</p>
        <p className="link">ヘルプ</p>
        <p className="link">ふるさと納税</p>
        <p className="link">ネットスーパー</p>
        <p className="link">ランキング</p>
        <p className="link">Amazon Basics</p>
        <p className="link hidden lg:inline-flex">プライム特典</p>
      </div>
    </header>
  );
};

export default Header;