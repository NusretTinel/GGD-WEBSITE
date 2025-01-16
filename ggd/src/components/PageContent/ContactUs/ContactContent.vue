<template>
  <div class="banner">
    <h1>Aramıza Katılın</h1>
  </div>

  <div class="contact-content">
    <div class="form-row">
      <!-- Left Column Form -->
      <div class="form-column">
        <h2>Partner Olarak</h2>
        <form @submit.prevent="submitPartnerForm">
          <div class="form-group">
            <label for="name">Kuruluş Adı</label>
            <input type="text" id="name" v-model="partnerForm.name" required>
          </div>

          <div class="form-group">
            <label for="email">İletişim Maili</label>
            <input type="email" id="email" v-model="partnerForm.email" required>
          </div>

          <div class="form-group">
            <button type="button" class="secondary-button">
              PIF Talep Et
            </button>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="newsletter" v-model="partnerForm.kvkk">
            <label for="newsletter">KVKK Metnini Okudum ve Kabul Ediyorum</label>
          </div>

          <button type="submit">Gönder</button>
        </form>
      </div>

      <!-- Right Column Form -->
      <div class="form-column">
        <h2>Gönüllü Olarak</h2>
        <form @submit.prevent="submitVolunteerForm">
          <div class="form-group">
            <label for="companyName">İsim Soyisim</label>
            <input type="text" id="companyName" v-model="volunteerForm.companyName" required>
          </div>

          <div class="form-group">
            <label for="businessEmail">Email</label>
            <input type="email" id="businessEmail" v-model="volunteerForm.email" required>
          </div>

          <div class="form-group">
            <label for="referance">Bizi Nereden Duyduğunuz</label>
            <select id="referance" v-model="volunteerForm.referance">
              <option value="">Seçiniz</option>
              <option value="google">Google Araması</option>
              <option value="social">Sosyal Medya</option>
              <option value="referance">Tanıdık</option>
            </select>
          </div>

          <div class="form-group">
            <label for="aboutYou">Kısaca Kendinizi Tanıtın</label>
            <textarea id="aboutYou" v-model="volunteerForm.aboutYou" rows="4"></textarea>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="terms" v-model="volunteerForm.terms" required>
            <label for="terms">KVKK Metnini Okudum ve Kabul Ediyorum</label>
          </div>

          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactContent',
  data() {
    return {
      partnerForm: {
        name: '',
        email: '',
        kvkk: false
      },
      volunteerForm: {
        companyName: '',
        email: '',
        referance: '',
        aboutYou: '',
        terms: false
      }
    }
  },
  methods: {
    submitPartnerForm() {
      console.log('General Form Submitted:', this.partnerForm)
      // Add your form submission logic here
    },
    submitVolunteerForm() {
      console.log('Business Form Submitted:', this.volunteerForm)
      // Add your form submission logic here
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 33vh;
  background-color: #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.banner h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: justify;
}

.form-row {
  display: flex;
  gap: 3rem;
}

.form-column {
  flex: 1;
}

.form-group {
  margin-bottom: 1.5rem;
}

.secondary-button {
  background-color: white;
  color: #1e3a8a;
  border: 2px solid #1e3a8a;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background-color: #f0f5ff;
  border-color: #2d4ba0;
  color: #2d4ba0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
}

button {
  background-color: #1e3a8a;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2d4ba0;
}

h2 {
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background-color: #1e3a8a;
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner {
    height: 25vh;
  }

  .banner h1 {
    font-size: 2rem;
  }

  .form-row {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-content {
    padding: 1rem;
  }
}
</style>