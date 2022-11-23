<template>
  <div class="site-top">
    <Header />
    <Intro />
  </div>
  <AboutProject />
  <VideoPosts />
  <DownloadingFiles />
  <Map />
  <Register />
  <Statistics />
  <AboutPresidentElection />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Intro from "@/components/Intro";
import AboutProject from "@/components/AboutProject";
import VideoPosts from "@/components/VideoPosts";
import DownloadingFiles from "@/components/DownloadingFiles";
import Map from "@/components/Map";
import Register from "@/components/Register";
import Statistics from "@/components/Statistics";
import AboutPresidentElection from "@/components/AboutPresidentElection";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Intro,
    AboutProject,
    VideoPosts,
    DownloadingFiles,
    Map,
    Register,
    Statistics,
    AboutPresidentElection,
    Footer,
  },
};
</script>

<style lang="scss">
.site-top {
  overflow-x: hidden;
  background-image:
    // linear-gradient(90deg, #0D2144 0%, rgba(13, 33, 68, 0.6) 100%),
    url(@/static/img/intro-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
