<script setup>
import { onMounted, onUnmounted, reactive } from "vue";

//example components
import NavbarDefault from "../../layouts/navbars/NavbarDefault.vue";
import DefaultFooter from "../../layouts/footers/FooterDefault.vue";
import HeaderCarousel from "./Components/HeaderCarousel.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import MaterialSocialButton from "@/layouts/components/MaterialSocialButton.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
  getData();
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

import axios from "axios";
// get-data
let baseUrl = "http://124.221.249.68:8000/api/app/request_list?page=0";
const data = reactive({
  data_list: [],
});
const getData = () => {
  axios
    .get(baseUrl)
    .then((res) => {
      data.data_list = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>

  <HeaderCarousel />

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data.data_list.data" />
    <PresentationTestimonials />
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">感谢您对历史文化遗产的关注！</h4>
            <p class="lead mb-0">山东大学数字人文实验室·i东疆团队</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route=""
              component="twitter"
              color="twitter"
              label="Tweet"
            />
            <MaterialSocialButton
              route=""
              component="facebook-square"
              color="facebook"
              label="Share"
            />
            <MaterialSocialButton
              route=""
              component="pinterest"
              color="pinterest"
              label="Pin it"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
