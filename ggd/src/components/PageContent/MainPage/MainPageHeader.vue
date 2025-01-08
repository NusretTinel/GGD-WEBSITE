<template>
  <div class="homepage">
    <canvas id="particle-canvas"></canvas>
    <div class="hero-section">
      <div class="text-content">
        <h1>Genç Girişimci Derneği</h1>
        <p>Türkiye'de gençlerin yerli ve uluslararası girişimlerine destek olan bir sivil toplum kuruluşu</p>
        <div class="buttons">
          <button class="primary-button">Biz Kimiz</button>
          <button class="secondary-button">Projelerimiz</button>
        </div>
      </div>
      <div class="image-content">
        <div class="bubble-container">
          <img
              src="https://gencgirisimdernegi.org/wp-content/uploads/2024/07/Ekran-goruntusu-2024-07-18-110159.png"
              alt="Hero Image"
              class="bubble-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // İlk başta canvas'ı tam ekran ayarla
    resizeCanvas();

    // Partikül oluşturma
    const particles = [];
    const numParticles = 39; // Daha az partikül

    // Rastgele bir renk oluştur
    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.7)`; // Opaklık 0.7
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() * 0.5) - 0.35, // Daha yavaş hız
        speedY: (Math.random() * 0.5) - 0.35, // Daha yavaş hız
        color: getRandomColor(), // Her partiküle rastgele bir renk ata
      });
    }

    // Partikül animasyonu
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Kenarlardan sekme
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Çizim
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color; // Rastgele renk kullan
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Pencere boyutları değiştiğinde canvas'ı yeniden boyutlandır
    window.addEventListener("resize", resizeCanvas);
  },
};
</script>




<style scoped>
#particle-canvas {
  position: fixed; /* Canvas her zaman ekrana sabitlenir */
  top: 0;
  left: 0;
  width: 100vw; /* Tam ekran genişlik */
  height: 100vh; /* Tam ekran yükseklik */
  z-index: -1; /* İçeriğin arkasında yer alır */
  pointer-events: none; /* Etkileşim alınmaz */
}
/* Genel Sayfa Ayarları */
.homepage {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: transparent;
  margin-bottom: 60px;
}

/* Hero Bölümü */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10%;
}

.text-content {
  max-width: 40%;
  margin-right: 3rem;
  text-align: center;
}

.text-content h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 1rem;
}

.text-content p {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.primary-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 20px;
  background: linear-gradient(45deg, #007bff, #ff3c3c);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.primary-button:hover {
  background: linear-gradient(45deg, #0056b3, #d32f2f);
}

.secondary-button {
  padding: 0.8rem 1.5rem;
  border: 2px solid #014da3;
  border-radius: 20px;
  background: transparent;
  color: #014da3;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: #014da3;
  color: white;
}

/* Resim İçeriği */
.image-content {
  max-width: 40%;
  position: relative;
}

.bubble-container {
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  padding: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  animation: bubble-frame 3s infinite alternate ease-in-out;
}

.bubble-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

/* Çerçeve Animasyonu */
@keyframes bubble-frame {
  0% {
    transform: scale(1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 3rem 5%;
  }

  .text-content {
    max-width: 100%;
    margin-right: 0;
    text-align: center;
  }

  .image-content {
    max-width: 80%;
    margin-top: 2rem;
  }

  .primary-button,
  .secondary-button {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
