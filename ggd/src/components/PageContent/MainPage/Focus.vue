<template>
  <div class="slider-container">
    <!-- Slider İçeriği -->
    <div class="slider-content">
      <img :src="slides[currentSlide].image" alt="Slide Image" class="slider-image" />

      <div class="slider-text">
        <!-- Genel Başlık -->
        <div class="main-title">Odaklarımız</div>

        <!-- Değişen Alt Başlık ve Metin -->
        <h1 class="slide-title">{{ slides[currentSlide].title }}</h1>
        <p class="slide-description">{{ slides[currentSlide].description }}</p>
        <a href="#" class="slider-link">Projelerimiz →</a>

        <!-- Kontroller Yazıların Altına Taşındı -->
        <div class="slider-controls">
          <button @click="prevSlide" class="control-btn">←</button>
          <button @click="nextSlide" class="control-btn">→</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'HomePageFocus',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: require('@/assets//images/a.webp'), // Proje dizininde assets/slide1.jpg
          title: "Sürdürülebilirlik",
          description: "Sürdürülebilirlik, tüm çalışmalarımızın temel taşıdır. Gelecek nesillere daha yaşanabilir bir dünya bırakmak için seyahat ve etkinliklerde çevreye duyarlı çözümler geliştiriyor ve uyguluyoruz. ",
        },
        {
          image: require('@/assets//images/b.webp'),
          title: "Beceriler ve Yeterlilikler",
          description: "Sürekli gelişim bizim için bir öncelik. Eğitim ve atölyelerle hem bireysel hem ekip olarak yetkinliklerimizi artırıyor, en yeni teknolojilerle bilgi ve becerilerimizi yeniliyoruz. Başarımızın anahtarı, öğrenmeye olan bağlılığımız. ",
        },
        {
          image: require('@/assets//images/c.webp'),
          title: "Eşitlik ve Kapsayıcılık",
          description: "Eşitlik ve kapsayıcılık bizim için bir değer değil, bir yaşam biçimi. Her bireyin farklılıklarıyla güçlü olduğuna inanıyor ve herkese eşit fırsatlar sunarak kapsayıcı bir ortam yaratıyoruz. Birlikte daha adil bir dünya inşa ediyoruz.",
        },
      ],

    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
          (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
/* Genel Konteyner */
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

/* Slider İçeriği */
.slider-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
  position: relative;
}

/* Resim */
.slider-image {
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Metin Alanı */
.slider-text {
  flex: 1;
  margin-left: 50px;
  text-align: left;
  padding: 16px;
  position: relative;
}

/* Genel Başlık (Odaklarımız) */
.main-title {
  position: absolute;
  background-color: white;
  top: 15px;
  /* Yazıyı metin alanının sağ üst köşesine hizalar */
  font-size: 17px;
  font-weight: bold;
  color: #ffa500; /* Yazı rengi turuncu */
  padding: 8px 20px; /* Kutunun boyutunu ayarlamak için iç boşluk */
  border: 2px solid #ffa500; /* Turuncu bir kenarlık */
  border-radius: 50px; /* Kenarları yuvarlayarak elips formuna çevirir */
  transform: translate(0, -50%); /* Yatay merkezleme */

  text-align: center; /* Yazının kutu içinde düzgün durmasını sağlar */
}


/* Alt Başlık (Değişen) */
.slide-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #002c5e;
}

/* Açıklama Metni */
.slide-description {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

/* Link */
.slider-link {
  margin-top: 16px;
  font-size: 18px;
  display: inline-block;
  text-decoration: none;
  color: #002c5e;
  font-weight: bold;
  position: relative; /* Animasyon için gerekli */
  transition: transform 0.3s ease; /* Yazının kayma animasyonu için geçiş */
}

.slider-link:hover {
  transform: translateX(-10px); /* Linkin sola kaymasını sağlar */
}


/* Kontroller */
.slider-controls {
  margin-top: 20px;
  display: flex;
  gap: 12px;
  justify-content: flex-start; /* Sol hizalı */
}

.control-btn {
  background: #ffa500;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.control-btn:hover {
  background: #ff8c00;
}
</style>


