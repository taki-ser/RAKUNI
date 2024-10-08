import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [bgScale, setBgScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; // スクロールに応じた背景の拡大率を設定
      setBgScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/867179_0.jpg')",
        backgroundSize: `${bgScale * 100}%`, // 背景サイズの拡大
        paddingBottom: '56.25%', // 16:9 のアスペクト比を維持するためのパディング
      }}
    >
      {/* グレーオーバーレイ */}
      <div className="absolute inset-0 bg-gray-800 opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-1">
        <h2 className="text-5xl text-white font-bold text-center">
          タイ古式
          <span className="block lg:inline">{' '}マッサージ</span>
        </h2>
        <h2 className="text-3xl text-white font-semibold text-center">ラクニへようこそ</h2>
      </div>
    </section>
  );
};

export default HeroSection;