<script setup>
import DefaultCounterCard from "../../../layouts/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="数字化边疆文化遗产项目"
                description="70+ Digital border Cultural heritage project"
                :count="70"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="数字化爱国主义边疆知识教育主题"
                description="15+ Digital patriotism frontier knowledge education project"
                :count="15"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="边疆数字化平台集成"
                description="Integration of 4 frontier digital platforms"
                :count="4"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
