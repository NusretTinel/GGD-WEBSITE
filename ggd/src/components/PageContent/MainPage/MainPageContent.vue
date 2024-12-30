<template>
  <div class="homepage">
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
};
</script>

<style scoped>
/* Genel Sayfa Ayarları */
.homepage {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: white;
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
  border: 2px solid #007bff;
  border-radius: 20px;
  background: transparent;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: #007bff;
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
