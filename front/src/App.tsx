import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeroSection from './Hero';
// import Header from './Header';
import './App.css';
import Header from './Header';
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>タイ古式マッサージ | RAKUNI</title>
        <meta name="description" content="[湯島駅近く]本場タイ古式マッサージラクニへようこそ。"/>
      </Helmet>
      <div className="text-gray-800">
        {/* ヘッダー */}
        {/* <header className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold ml">RAKUNI</h1>
            <nav className="overflow-x-auto mx-4">
              <ul className="flex space-x-4">
                <li><a href="#about">About</a></li>
                <li><a href="#staff">Staff</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#access">Access</a></li>

              </ul>
            </nav>
          </div>
        </header> */}
        <Header />
        {/* ヒーロー */}
        <HeroSection />

        {/* About Us */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">About</h3>
            <p className="text-lg">当店では、タイ古式/アロママッサージ/リフレ/ヘッドなど様々なメニューをご用意しております。</p>
            <p className="text-lg">本場タイの熟練技術を体感していただき、全身リラックスしていただけますと幸いです。</p>
            <p className="text-lg">ほっとできる癒しの空間をご提供いたします。</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img 
                src="/assets/083C3A3F-0EB6-4A84-BD19-9FD92D1AE943.jpg" 
                alt="タイ古式マッサージの画像" 
                className="mx-auto mt-6 object-cover"
              />
              <img 
                src="/assets/867335_0.jpg" 
                alt="タイ古式マッサージの画像" 
                className="mx-auto mt-6 object-cover"
              />
              <img 
                src="/assets/6C530DBB-656B-48AF-955D-ADD487A6B1A5.jpg" 
                alt="タイ古式マッサージの画像" 
                className="mx-auto mt-6 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Staff */}
        <section id="" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Staff</h3>
            {/* <h4 className="text-2xl font-semibold mb-4">ルークミー</h4> */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/439631032_3190676324395994_4406625110278184235_n.jpg" 
                  alt="ルークミーさんの画像" 
                  className="mx-auto mt-6 rounded-full w-48 h-48 object-cover shadow-lg"
                />
                <h4 className="text-2xl mt-8">ルークミー</h4>
              </div>
              <div className="flex flex-col items-center">
              <img 
                src="/assets/867326.jpg" 
                alt="プーさんの画像" 
                className="mx-auto mt-6 rounded-full w-48 h-48 object-cover shadow-lg"
              />
              <h4 className="text-2xl mt-8">プー</h4>
              </div>
            </div>
            <p className="text-lg">明日への活力に繋げていただけるよう、精一杯お客様に寄り添った施術をさせていただきます！</p>
            <p className="text-lg">タイ古式が初めての方もぜひお越しください。</p>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Menu</h3>
            <p className='text-lg'>タイの伝統的なマッサージでは、長い時間をかけてゆっくり全身を施術するのが特徴です。</p>
            <p className='text-lg'>局所的対処ではなく、2～3時間かけ、身体全体の血液とリンパ液の流れを良くすることで、体調の改善を図ることを目的とします。</p>
            <p className='text-lg'>肩が凝っているから肩を揉む、腰痛だから腰部だけをマッサージするという考えは、タイ古式マッサージにはありません。</p>
            
            <img
              src="/assets/867336_0.jpg"
              alt="タイ古式マッサージのメニュー画像"
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

        {/* Education */}
        <section id="edu" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Education</h3>
            <h4 className="text-2xl mt-8">タイ伝統医学協会のインストラクターによる教育</h4>
            <p className="text-lg">RAKUNIには協会のインストラクターが所属しています。</p>
            <p className="text-lg">タイ古式マッサージ、オイルマッサージ、足ツボマッサージ等の教育を提供しています。</p>
            <p className="text-lg">タイ古式マッサージを習得したい方は日本人でもタイ人でも受講可能です。</p>
            <p className="text-lg">受講者にはタイ伝統医学協会の修了証が発行されます。</p>
            <p className="text-lg">詳細情報をご希望の方はお気軽にご連絡ください。</p>
            <img 
              src="assets/タイ伝統医学協会.jpg" 
              alt="タイ伝統医学協会の画像" 
              className="mx-auto mt-6 rounded-full w-48 h-48 object-cover shadow-lg" 
               /> 
            <img 
              src="assets/2C0CDA65-0B79-4723-91CA-DC7263E5B9BA.jpg" 
              alt="マッサージの受講終了生の画像" 
              className="mx-auto mt-6 object-cover shadow-lg" 
               />
            {/* <h4 className="text-2xl mt-8">講師</h4>  */}
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
