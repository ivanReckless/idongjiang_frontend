<script setup>
import RotatingCard from "../../../layouts/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../layouts/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../layouts/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../layouts/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              title="i东疆<br /> 中国东部边疆历史文化遗产的数智守将"
              description="文化遗产是人类共同的一个记忆的容器，它装载着人类的文明，记载着每个民族每一代人的印记."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="山东大学数字人文实验室"
              description="通过数据采集、建立信息档案及数据库；数字化复原、重建、场景建模；沉浸式观展、云游体验……等数字化技术，为文化遗产插上翅膀."
              :action="[
                {
                  route: 'https://ashistory.wh.sdu.edu.cn/',
                  label: '访问实验室',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              class="mt-3"
              icon="attachment"
              title="科普"
              description="通过数智化平台，致力于为普通民众及青少年提供学习资源."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="tag"
              title="传承"
              description="致力于边疆文化遗产的传承与传承，为普通民众及青少年提供专题实践教育基地."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="star"
              title="数智服务"
              description="为科研工作者提供专业的古籍数据库和数字化云端科研训练环境."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="apps"
              title="知识共享"
              description="为边疆历史文化爱好者提供最为专业的知识服务."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
