<template>
  <div class="projects-container">
    <!-- Kategori A -->
    <section class="category-section">
      <h2>KA1</h2>
      <div class="project-row">
        <!-- v-for ile JSON’dan gelen projeleri listeliyoruz -->
        <div
            class="project-card"
            v-for="(project, index) in erasmusProjects"
            :key="index"
        >
          <!-- Tarih (sağ üstte) -->
          <div class="project-date">{{ project.date }}</div>

          <!-- Proje görseli -->
          <img
              v-if="project.image"
              :src="project.image"
              alt="Proje Görseli"
              class="project-image"
          />

          <!-- Alt kısımda %15'lik şerit overlay -->
          <div class="project-overlay">
            <h3 class="project-title" v-html="project.title"></h3>
<!--            <button class="project-button">-->

<!--              <span class="arrow">➜</span>-->
<!--            </button>-->
          </div>
        </div>
      </div>
    </section>

    <!-- Kategori B -->
    <section class="category-section">
      <h2>ESC</h2>
      <div class="project-row">
        <!-- v-for ile JSON’dan gelen projeleri listeliyoruz -->
        <div
            class="project-card"
            v-for="(project, index) in escProjects"
            :key="index"
        >
          <!-- Tarih (sağ üstte) -->
          <div class="project-date">{{ project.date }}</div>

          <!-- Proje görseli -->
          <img
              v-if="project.image"
              :src="project.image"
              alt="Proje Görseli"
              class="project-image"
          />

          <!-- Alt kısımda %15'lik şerit overlay -->
          <div class="project-overlay">
            <h3 class="project-title" v-html="project.title"></h3>
           <!-- <button class="project-button">

              <span class="arrow">➜</span>
            </button> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectsContent",
  data() {
    return {
      erasmusProjects: [],
      escProjects: [],
    };
  },
  created() {
    // Kategori A JSON verisini çek
    fetch("/erasmus.json")
        .then((response) => response.json())
        .then((data) => {
          this.erasmusProjects = data;
        });

    // Kategori B JSON verisini çek
    fetch("/esc.json")
        .then((response) => response.json())
        .then((data) => {
          this.escProjects = data;
        });
  },
};
</script>

<style scoped>
/* Ana konteyner */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Kategori başlıkları */
.category-section {
  margin-bottom: 40px;
}

.category-section h2 {
  width: 95%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(120deg, #0678BF, #ffffff);
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 20px;
}

/* Kartların yerleşimi (3 sütun) */
.project-row {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

/* Proje kartı */
.project-card {
  position: relative;
  flex: 0 0 calc(25% - 20px);
  background: #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1; /* Kare kartlar */
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.02);
}

/* Proje görseli, tüm kartı kaplayan arka plan */
.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

/* Tarih - sağ üst köşede, renkli gradient */
.project-date {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8rem;
  color: #fff;

  background: linear-gradient(45deg, #F28729, #F2C12E);
  padding: 6px 8px;
  border-radius: 8px;
  z-index: 2;
}

/* Overlay: kartın alt %15'ini kaplayan şerit */
.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15%;
  background: linear-gradient(120deg, #2DBBAE, #0678BF);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 2;
}

/* Proje başlığı overlay içerisindeki düzenleme */
.project-overlay .project-title {
  font-size: 1rem;
  margin: 0;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Buton overlay içerisindeki düzenleme */
.project-overlay .project-button {
  padding: 3px 6px;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  color: #0f2742;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-overlay .project-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.arrow {
  margin-left: 5px;
}
</style>
