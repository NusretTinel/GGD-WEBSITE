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
        <img src="hero-image.jpg" alt="Group" />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
};
</script>

<style scoped>
.homepage {
  text-align: center;
  font-family: Arial, sans-serif;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
}

.text-content {
  max-width: 50%;
}

.text-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.text-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.primary-button,
.secondary-button {
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.primary-button {
  background: linear-gradient(45deg, #007bff, #ff3c3c);
  color: white;
}

.secondary-button {
  background: transparent;
  border: 2px solid #007bff;
  color: #007bff;
}

.image-content img {
  max-width: 40%;
  border-radius: 15px;
}
</style>
