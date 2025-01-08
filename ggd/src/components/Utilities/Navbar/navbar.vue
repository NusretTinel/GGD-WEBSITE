<template>
  <nav class="navbar">
    <div class="logo">
      <img class="imageLogo" style="width: 200px; height: 150px" src="@/assets/images/logo.png" alt="Logo" />
    </div>
    <ul class="nav-links">
      <!-- Ana Menü -->
      <li><router-link to="/">Ana Sayfa</router-link></li>
      <li><router-link to="/about">Hakkımızda</router-link></li>

      <!-- Dropdown Menü -->
      <li class="dropdown">
        <router-link to="/projects" class="dropdown-toggle">Projeler</router-link>
        <ul class="dropdown-menu">
          <li><router-link to="/projects/esc">ESC</router-link></li>
          <li class="dropdown-submenu">
            <router-link to="/projects/ka1" class="submenu-toggle">KA1</router-link>
            <ul class="submenu">
              <!-- Yıllar -->
              <li class="dropdown-submenu">
                <router-link to="/projects/ka1/2022" class="submenu-toggle">2022</router-link>
                <ul class="submenu">
                  <li><router-link to="/projects/ka1/2022/june">June</router-link></li>
                  <li><router-link to="/projects/ka1/2022/july">July</router-link></li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <router-link to="/projects/ka1/2023" class="submenu-toggle">2023</router-link>
                <ul class="submenu">
                  <li><router-link to="/projects/ka1/2023/january">January</router-link></li>
                  <li><router-link to="/projects/ka1/2023/february">February</router-link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li><router-link to="/join">Katıl</router-link></li>
      <li><router-link to="/contact">Bize Ulaşın</router-link></li>
    </ul>
    <button class="cta-button" @click="downloadPDF">Get PIF</button>
  </nav>
</template>

<script>
export default {
  name: "NavbarS",
  methods: {
    downloadPDF() {
      const pdfUrl = "https://example.com/sample.pdf"; // Buraya gerçek PDF linkinizi koyun
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "PIF.pdf"; // İndirme sırasında dosya adı
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
/* Navbar Temel Stilleri */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  //box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 80px;
}

.logo img {
  height: 50px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  font-size: 16px;
  color: #444;
  padding: 0.5rem 1rem;
  display: block;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff5f5f; /* Hover durumunda yazı rengi */
}

/* Dropdown Menü */
.dropdown {
  position: relative;
}

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(10px);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: linear-gradient(120deg, #ffeecf, #ffadad, #ffd6a5);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  z-index: 10;
  list-style: none;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
}

.dropdown-menu li a {
  text-decoration: none;
  color: #3a3a3a;
  font-size: 14px;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.dropdown-menu li a:hover {
  background-color: rgba(255, 255, 255, 0.9);
  color: #1d3557;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

/* Alt Menü */
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu:hover > .submenu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateX(10px);
}

.submenu {
  position: absolute;
  top: 0;
  left: 100%;
  background: linear-gradient(120deg, #b9fbc0, #ffc6ff);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  z-index: 10;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(0);
  transition: all 0.3s ease-in-out;
}

.submenu li {
  padding: 0.5rem 1rem;
}

.submenu li a {
  text-decoration: none;
  color: #343a40;
}

.submenu li a:hover {
  background-color: rgba(255, 241, 204, 0.8);
  color: #6a0572;
  border-radius: 5px;
}

/* CTA Buton */
.cta-button {
  background: linear-gradient(120deg, #ff9f1c, #ff1654);
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  background: linear-gradient(120deg, #ff6f61, #ff9f1c);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
