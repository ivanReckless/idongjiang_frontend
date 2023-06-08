<style scoped lang="scss">
.carousel-item {
  max-height: 105vh;
}
</style>
<script>
export default {
  name: "headerCarousel",
  setup() {},
  data() {
    return {
      carousel_list: [
        {
          imgUrl: "http://124.221.249.68:8000/headerCarousel/header-carousel-1.jpg",
          isActive: true,
        },
        {
          imgUrl: "http://124.221.249.68:8000/headerCarousel/header-carousel-2.jpg",
          isActive: false,
        },
        {
          imgUrl: "http://124.221.249.68:8000/headerCarousel/header-carousel-3.jpg",
          isActive: false,
        },
        // { imgUrl: "headerCarousel/header-carousel-1.jpg", isActive: true},
        // { imgUrl: "headerCarousel/header-carousel-2.jpg", isActive: false},
        // { imgUrl: "headerCarousel/header-carousel-3.jpg", isActive: false},
      ],
    };
  },
};
</script>
<template>
  <header class="header-2">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          :class="{ active: carousel.isActive }"
          class="carousel-item"
          data-bs-interval="1700"
          v-for="carousel in carousel_list"
          :key="carousel"
        >
          <img
            loading="lazy"
            :src="carousel.imgUrl"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  </header>
</template>
