<template>
  <div class="recent-projects-section">
    <h2 class="recent-projects-title">Son Projelerimiz</h2>
    <div class="projects-grid">
      <div
          class="project-card"
          v-for="project in projects"
          :key="project.id"
          :style="{ backgroundImage: `url(${project.backgroundImage})` }"
      >
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-date">{{ project.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RecentProjects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Çözüm Sosyal Girişimcilik",
          date: "2022",
          backgroundImage: require("@/assets/projectImages/Untitled-2_0001_IMG-20231126-WA0180.webp"), // Resim yolu
        },
        {
          id: 2,
          title: "Sportif Gençlik Yönlendirme ve Gençlik Çalışmaları",
          date: "15 Aralık 2023",
          backgroundImage: require("@/assets/projectImages/Untitled-2_0004_IMG_6916.webp"), // Resim yolu
        },
        {
          id: 3,
          title: "Simülasyon ile Gençlik Çalışmaları",
          date: "30 Kasım 2023",
          backgroundImage: require("@/assets/projectImages/Untitled-2_0002_IMG_8992.webp"), // Resim yolu
        },
        {
          id: 4,
          title: "Gençlerin Sesi Gençlerin Geleceği",
          date: "10 Ekim 2023",
          backgroundImage: require("@/assets/projectImages/Untitled-2_0006_IMG_0491.webp"), // Resim yolu
        },
      ],
    };
  },
};
</script>



<style scoped>
/* Bölüm Stilleri */
.recent-projects-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  text-align: center;
}

/* Başlık */
.recent-projects-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #ff5733, #ffcc33, #33ff57, #3399ff, #ff33cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: vibrant-gradient-animation 4s infinite;
  background-size: 200% 200%;
}

@keyframes vibrant-gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

/* Kartlar */
.project-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 200px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.project-content {

  color: white;
  width: 100%;
  padding: 1rem;
  text-align: center;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.project-date {
  font-size: 1rem;
}
</style>




