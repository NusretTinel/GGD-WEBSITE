<template>
  <div class="stats-section" :style="sectionStyle">
    <div class="stats-content">
      <h2>BUGÜNE KADAR</h2>
      <div class="stats-items">
        <div class="stat-item">
          <h3>{{ projects }}</h3>
          <p>Proje ile</p>
        </div>
        <div class="stat-item">
          <h3>{{ countries }}</h3>
          <p>Ülkede</p>
        </div>
        <div class="stat-item">
          <h3>{{ organizations }}</h3>
          <p>Kuruluş ile</p>
        </div>
        <div class="stat-item">
          <h3>{{ participants }}</h3>
          <p>den Fazla Katılımcı</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatsSection",
  data() {
    return {
      projects: 0,
      countries: 0,
      organizations: 0,
      participants: 0,
    };
  },
  computed: {
    sectionStyle() {
      return {
        backgroundImage: `url(${require('@/assets/images/c.webp')})`,
      };
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.animateCounts();
          }
        },
        { threshold: 0.5 }
    );

    observer.observe(this.$el);
  },
  methods: {
    animateCounts() {
      const counts = { projects: 0, countries: 0, organizations: 0, participants: 0 };
      const targets = { projects: 8, countries: 12, organizations: 18, participants: 500 };
      const duration = 1000; // Animasyon süresi (ms)
      const stepTime = 10; // Adım süresi (ms)
      const steps = duration / stepTime;

      const interval = setInterval(() => {
        Object.keys(counts).forEach((key) => {
          counts[key] += targets[key] / steps;
          this[key] = Math.floor(counts[key]);
        });

        if (counts.projects >= targets.projects) {
          Object.keys(targets).forEach((key) => {
            this[key] = targets[key];
          });
          clearInterval(interval);
        }
      }, stepTime);
    },
  },
};
</script>





<style scoped>
.stats-section {
  position: relative;
  height: 60vh; /* Yükseklik */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 100px;
}
.stats-content {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5); /* Arka plan opaklığı */
  border-radius: 10px;
}

.stats-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-transform: uppercase;
  border-bottom: 2px solid #bc4e00; /* Alt çizgi rengi */
  display: inline-block;
  padding-bottom: 0.5rem;
}

.stats-items {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

.stat-item p {
  font-size: 1.2rem;
  margin: 0.5rem 0 0;
}
</style>

