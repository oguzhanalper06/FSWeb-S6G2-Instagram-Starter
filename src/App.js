/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React from "react";
import { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler";
import sahteVeri from "./sahte-veri";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaCubuk, setAramaCubuk] = useState("");
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
  const aramaYap = (e) => {
    setAramaCubuk(e);
    setGonderiler(sahteVeri.filter((item) => item.username.includes(e)));
  };

  const gonderiyiBegen = (gonderiID) => {
    setGonderiler(
      gonderiler.map((item) => {
        if (gonderiID == item.id) {
          item.likes++;
        }
        return item;
      })
    );
  };
  return (
    <div className="App">
      <AramaÇubuğu aramaYap={aramaYap} aramaCubuk={aramaCubuk} />{" "}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      <Gönderiler
        gonderiyiBegen={gonderiyiBegen}
        gonderiler={gonderiler}
      />{" "}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer
      ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
