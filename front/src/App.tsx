import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeroSection from './Hero';
import './App.css';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>タイ古式マッサージ | RAKUNI</title>
        <meta name="description" content="[湯島駅近く]本場タイ古式マッサージラクニへようこそ。"/>
      </Helmet>
      <div className="text-gray-800">
        {/* ヘッダー */}
        <header className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">RAKUNI</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#about">About</a></li>
                <li><a href="#owner">Owner</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#access">Access</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* ヒーロー */}
        <HeroSection />

        {/* About Us */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">About</h3>
            <p className="text-lg">当店では、タイ古式/アロママッサージ/リフレ/ヘッドなど様々なメニューをご用意しております。本場タイの熟練技術を体感していただき、全身リラックスしていただけますと幸いです。ほっとできる癒しの空間をご提供いたします。</p>
            {/* <p className="text-lg">また、タイ古式マッサージの施術師の教育を行っています</p> */}
            <img 
              src="/assets/867335_0.jpg" 
              alt="タイ古式マッサージの画像" 
              className="mx-auto mt-6 object-cover w-1/2"
            />
          </div>
        </section>
        {/* Owner */}
        <section id="owner" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Owner</h3>
            <h4 className="text-2xl font-semibold mb-4">ルークミー</h4>
            <img 
              src="/assets/3A89685F-DDA4-4F1C-BBFC-756982909D4D.jpg" 
              alt="タイ古式マッサージの画像" 
              className="mx-auto mt-6 rounded-full w-48 h-48 object-cover shadow-lg"
            />
            <p className="text-lg">明日への活力に繋げていただけるよう、精一杯お客様に寄り添った施術をさせていただきます！タイ古式が初めての方もぜひお越しください。</p>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Menu</h3>
            {/* <ul className="text-lg space-y-4">
              <li>アロママッサージ - 60分</li>
              <li>指圧マッサージ - 60分</li>
              <li>リフレクソロジー - 30分</li>
            </ul> */}
            <img
              src="/assets/867336_0.jpg"
              alt="タイ古式マッサージの画像"
              className="mx-auto mt-6 "
            />
          </div>
        </section>

        {/* Access */}
        <section id="access" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Access</h3>
            <h4 className='text-2xl'>住所</h4>
            <p className="text-lg">文京区湯島3-35-5 湯島橋本ビル</p>
            <p className="text-sm">東京メトロ千代田線「湯島駅」徒歩1分</p>
            <p className="text-sm">東京メトロ銀座線「上野広小路駅」徒歩4分</p>
            <h4 className='text-2xl mt-8'>地図</h4>
            {/* <!-- Map Wrapper for Centering --> */}
            <div className=" mt-8 max-w-4/5">
              <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
                <iframe 
                  title="RAKUNI"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.4841123003056!2d139.7699782231124!3d35.70787263586825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c21ac4e0a73%3A0x9a7cc2fdb634af1a!2z44CSMTEzLTAwMzQg5p2x5Lqs6YO95paH5Lqs5Yy65rmv5bO277yT5LiB55uu77yT77yV4oiS77yV!5e0!3m2!1sja!2sjp!4v1724924288813!5m2!1sja!2sjp" 
                  className="w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
          <h4 className='text-2xl mt-8'>営業時間</h4>
          <p className="text-lg">11:00〜02:00</p>
          <h4 className='text-2xl mt-8'>電話番号</h4>
          <p className="text-lg">090-6654-8491</p>
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
