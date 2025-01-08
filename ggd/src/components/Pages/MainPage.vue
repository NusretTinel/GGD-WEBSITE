<template>
  <div>
    <Navbar class="navbar_container"></Navbar>
    <Header></Header>
    <Focus></Focus>

    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from "@/components/Utilities/Navbar/navbar.vue";
import Header from "@/components/PageContent/MainPage/MainPageHeader.vue";
import Footer from "@/components/Utilities/Footer/Footer.vue";
import Focus from "@/components/PageContent/MainPage/Focus.vue"

export default defineComponent({
  components: { Navbar, Header,Focus, Footer },
  name: 'MainPage',
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
