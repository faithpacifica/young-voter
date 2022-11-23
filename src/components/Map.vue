<template>

  <section id="map" class="map h-[660px] w-[100%] relative">
    <div class="map-inner h-[660px] w-[100%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11988.366614334664!2d69.22815304999999!3d41.3068697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1649677559623!5m2!1sru!2s"
        width="100%"
        height="660"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Identify class="left-[7%] top-[10%] absolute" />
    </div>
  </section>

</template>

<script>
import Identify from "../components/Identify.vue";
export default {
  components: {
    Identify,
  },
};
</script>
<style lang="scss">
.map {
  .gm-style-moc {
    position: static !important;
    width: 0 !important;
    height: 0 !important;
    z-index: 0 !important;
  }

  .gm-style-mot {
    position: unset !important;
  }
}
</style>
