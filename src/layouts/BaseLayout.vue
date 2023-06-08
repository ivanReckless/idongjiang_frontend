<script setup>
import DefaultNavbar from "@/layouts/navbars/NavbarDefault.vue";
import DefaultFooter from "@/layouts/footers/FooterDefault.vue";
import Breadcrumbs from "@/layouts/Breadcrumbs.vue";

defineProps({
  breadcrumb: {
    type: Array,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <DefaultNavbar light />
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-12 mx-auto">
        <div class="mb-4 w-100 w-md-50 w-lg-25">
          <Breadcrumbs :routes="breadcrumb" />
          <h3>{{ title }}</h3>
        </div>
        <slot />
      </div>
    </div>
  </div>

  <DefaultFooter />
</template>
