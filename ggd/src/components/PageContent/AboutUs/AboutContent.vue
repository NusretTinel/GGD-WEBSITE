<template>
  <div class="banner">
    <h1>About Us</h1>
  </div>

  <div class="about-content">
    <div class="row">
      <div class="column text">
        <h2>Welcome to Our Story</h2>
        <p>Genç Girişim Derneği, gençlerin sosyal yaşamda ihtiyaçlarını karşılamaya çalışan, sosyal rollerini ve
          kimliklerini keşfetmelerini kolaylaştıran ve aktif katılımlarını artıran bir gençlik derneğidir. Sosyal
          dezavantajlı grupların ihtiyaçları üzerine çalışmalar yürüten derneğimiz, toplumda olumlu bir etki yaratmayı
          hedeflemektedir. Farklı gayriresmi gruplar ve öğrenci kulüplerini içeren derneğimiz, 2020 yılından bu yana
          ulusal ve uluslararası düzeyde çeşitli programlar çerçevesinde projeler ve etkinlikler yürütmektedir.
          <br>
          <br>
          Üniversite toplulukları ağımız sayesinde, farklı şehirlerden farklı niteliklere sahip birçok gençle iş birliği
          yapmaktayız. Yerel kamu kurumları ve üniversitelerle olan iş birliklerimiz sayesinde toplumsal etkisi güçlü
          çalışmalar gerçekleştirdik.
        </p>
      </div>
      <div class="column image">
        <img src="https://girisimngo.org/wp-content/uploads/2024/07/Logo-1.png" alt="About Us">
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h3>Misyonumuz</h3>
        <p>Genç Girişim Derneği olarak misyonumuz, gençlerin sosyal rollerini ve kimliklerini keşfetmelerine ve aktif
          katılımlarını artırmalarına yardımcı olmaktır. Sosyal dezavantajlı grupların ihtiyaçlarına yönelik çalışmalar
          yaparak, topluma olumlu bir etki yaratmayı amaçlamaktayız. Erasmus programı kapsamında, müzik, profesyonel
          gelişim, dijitalleşme, sosyal medya, yapay zeka, sosyal girişimcilik, engelli ve dezavantajlı gruplar, spor
          faaliyetleri, eğitim kalitesinin artırılması gibi çeşitli alanlarda faaliyetler düzenlemekteyiz. Amacımız,
          gençlerin girişimcilik ruhunu desteklemek, sosyal sorunlara sosyal girişimci perspektifiyle çözümler aramak ve
          gençlerin topluma yeniden kazandırılmasını sağlamaktır.</p>
      </div>
      <div class="column">
        <h3>Vizyonumuz</h3>
        <p>Genç Girişim Derneği olarak vizyonumuz, gençlerin topluma pozitif katkı sağlayacak bireyler olarak
          yetişmelerini desteklemektir. Sosyal girişimcilik ekosistemine katkı sağlayacak start-up’lar oluşturmak, genç
          istihdamını destekleyen projelerde yer almak ve fırsat eşitliği sağlamaktır. Yerel ve ulusal düzeydeki
          politika yapımında sosyal etki iş dünyasının iyi uygulamalarını tanıtmak ve Avrupa Birliği politikalarına
          katkıda bulunmak hedeflerimiz arasındadır. Toplumda aktif girişimcilik ruhu oluşturmak ve gençler arasında
          ortak bir demokrasi kültürü ve perspektifi yaratmak için çalışmaktayız.</p>
      </div>
    </div>
  </div>
  <div class="button-container">
    <button class="learn-more-btn">PIF Talep Et</button>
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 33vh;  /* 1/3 of viewport height */
  background-color: #1e3a8a;  /* Dark blue to match theme */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 2rem;
  /* background-image: url('@/assets/banner-bg.jpg'); */
  /* background-size: cover; */
  /* background-position: center; */
}

.banner h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}
.about-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: justify;
}

.row {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.column {
  flex: 1;
  margin-left: 2%;
}

.column img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h2,
h3 {
  margin-bottom: 1rem;
  color: #1a1a1a;
  /* Very dark gray, almost black */
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after,
h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  /* Width of the underline - adjust as needed */
  height: 5px;
  /* Thickness of the underline */
  background-color: #0042f6;
  /* Dark blue color */
}

p {
  color: #1a1a1a;
  /* Very dark gray, almost black */
  line-height: 1.6;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.learn-more-btn {
  padding: 12px 30px;
  background-color: #1e3a8a;
  /* Dark blue to match headers */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #2d4ba0;
  /* Slightly lighter blue on hover */
}

/* Responsive design */
@media (max-width: 768px) {
  .banner {
    height: 25vh;
  }

  .banner h1 {
    font-size: 2rem;
  }

  .about-content {
    padding: 1rem;
  }

  .row {
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    width: 100%;
  }

  .column {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem;
  }

  .column img {
    width: 100%;
    max-width: 100%;
  }

  .button-container {
    margin-top: 1rem;
  }
}
</style>