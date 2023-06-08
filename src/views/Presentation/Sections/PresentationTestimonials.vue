<script setup>
import DefaultReviewCard from "@/layouts/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">i东疆平台</h2>
          <h2 class="text-gradient text-success mt-3">
            东部边疆历史文化遗产数智化先驱
          </h2>
          <p class="lead mt-3">
            对于上述三类受众人群，平台精细定位、精诚服务，
            分别设计并落实了“东疆启蒙”、“东疆织梦”和“东疆深耕”的针对性服务模块。
            由此，本平台得以通过三种不同的服务方式将三类人群对东疆的认知程度和研学深度进行提升，
            以期更大程度活化从初识东疆，到爱上东疆、许身东疆的可持续化传承保护链，
            更好效果带动国人关注、呵护、发扬东疆给我们带来的宝贵财富.
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          name="东疆启蒙"
          review="面向初心者的第一次东疆历史文遗科普服务."
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="东疆织梦"
          review="面向志远士的走心式东疆历史文遗学习方案."
          :rating="5.0"
        />

        <DefaultReviewCard
          name="东疆深耕"
          review="面向鸿儒士的定制化东疆历史文遗研学引擎."
          :rating="5.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="text-gradient text-success mt-4 mb-6">合作伙伴</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-4 col-6 ms-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-apple.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-facebook.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-nasa.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-vodafone.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-digitalocean.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
