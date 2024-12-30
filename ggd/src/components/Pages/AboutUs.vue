<template>
  <div>
    <Navbar class="navbar_container"></Navbar>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from "@/components/Utilities/Navbar/navbar.vue";
import Content from "@/components/PageContent/AboutUs/AboutContent.vue";
import Footer from "@/components/Utilities/Footer/Footer.vue";

export default defineComponent({
  components: { Navbar, Content, Footer },
  name: 'AboutUs',
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
