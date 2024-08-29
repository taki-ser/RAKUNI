import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>リラックスマッサージ | 至福のひとときを</title>
        <meta name="description" content="最高のリラックスを提供するリラックスマッサージへようこそ。" />
      </Helmet>
      <div className="text-gray-800">
        {/* ヘッダー */}
        <header className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">RAKUNI</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#about">About Us</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#access">Access</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* ヒーロー */}
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
          <div className="container mx-auto flex flex-col justify-center items-center h-full">
            <h2 className="text-5xl text-white font-bold">至福の時間をあなたに</h2>
            <h2 className="text-3xl text-white font-semibold">ラクニへようこそ</h2>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">About Us</h3>
            <p className="text-lg">私たちのマッサージは、お客様に最高のリラックスを提供します。</p>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Menu</h3>
            <ul className="text-lg space-y-4">
              <li>アロママッサージ - 60分</li>
              <li>指圧マッサージ - 60分</li>
              <li>リフレクソロジー - 30分</li>
            </ul>
          </div>
        </section>

        {/* Access */}
        <section id="access" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Access</h3>
            <p className="text-lg">文京区湯島3-35-5 湯島橋本ビル</p>
            <p className="text-sm">東京メトロ千代田線「湯島駅」徒歩1分</p>
            <p className="text-sm">東京メトロ銀座線「上野広小路駅」徒歩4分</p>
            <p className="text-lg">電話番号: 090-6654-8491</p>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-primary text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 RAKUNI</p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
