<script setup>
defineProps({
  bgImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <header>
    <div
      class="page-header"
      :style="{
        backgroundImage: `url(${bgImage})`,
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"
          >
            <h1 class="text-white mb-4">{{ title }}</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              {{ abstract }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
