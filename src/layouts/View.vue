<script setup>
import { onMounted } from "vue";
// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

onMounted(() => {
  setNavPills();
});
// prop
defineProps({
  id: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
  >
    <div class="container border-bottom">
      <div class="row justify-space-between py-2">
        <div class="col-lg-3 me-auto">
          <p class="lead text-dark pt-1 mb-0">{{ title }}</p>
        </div>
        <div class="col-lg-3">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill flex-row p-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 active"
                  data-bs-toggle="tab"
                  :href="`#preview-${id}`"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fas fa-desktop text-sm me-2"></i> 预览
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="tab"
                  :href="`#code-${id}`"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="fas fa-code text-sm me-2"></i> 详情
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content tab-space">
      <div class="tab-pane active p-2" :id="`preview-${id}`">
        <div class="overflow-auto" :class="`${height && `height-${height}`}`">
          <slot />
        </div>
      </div>
      <div class="tab-pane" :id="`code-${id}`">
        <div class="position-relative p-4 pb-2">
          <v-md-preview :text="code" />
        </div>
      </div>
    </div>
  </div>
</template>
