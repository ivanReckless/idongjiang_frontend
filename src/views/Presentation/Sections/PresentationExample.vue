<script setup>
import MaterialBadge from "../../../layouts/components/MaterialBadge.vue";
import View from "../../../layouts/View.vue";
import HeaderOne from "../../../layouts/HeaderOne.vue";
defineProps({
  data: {
    type: Array,
    required: true,
    title: {
      type: String,
      required: true,
    },
    titleImage: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    contentXML: {
      type: String,
      required: true,
    },
  },
  col1: {
    type: String,
    default: "col-lg-3",
  },
  col2: {
    type: String,
    default: "col-lg-9",
  },
});
</script>

<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <MaterialBadge color="success" class="mb-3"
              >威海文遗矩阵</MaterialBadge
            >

            <h2 class="text-dark mb-0">文遗二三事——东疆文遗的传承故事</h2>
            <p class="lead mt-3">
              威海文遗矩阵由五个板块构成，始终与传承者心意相连，共鸣情感。
              “忆海洋往昔”，“渔民号子”喊出大海的波涛骇浪，“渔民节”祈鱼虾满仓；
              “追东夷史话”，秦始皇东临成山，“令兵伐木”千古流传；“寻朝夕映像”，
              “文登鲁绣”一针一线造一绝绣品，“威海剪纸”剪出纷繁民间文化故事；
              “踏东疆足迹”，赤山法华院系中日韩三国情谊，刘公岛载近代东亚之变迁；
              “呈非遗技艺”，“威海锡镶”雕镂出别样金属美学，“海草房”凝结威海人民的建筑智慧.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-sm-5 mt-3">
      <div
        v-for="(item, index) in data"
        :class="`row ${index !== 0 && index !== -1 ? 'pt-lg-6' : ''}`"
        :key="item[0]"
      >
        <div :class="`${col1 ?? 'col-lg-3'}`">
          <div
            class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
            style="top: 100px"
          >
            <h3>{{ item[1] }}</h3>
            <h6 class="text-secondary font-weight-normal pe-3">
              {{ item[3] }}
            </h6>
          </div>
        </div>
        <div :class="`${col2 ?? 'col-lg-9'}`">
          <View :code="item[4]" :id="item[0]">
            <HeaderOne
              :title="item[1]"
              :abstract="item[3]"
              :bg-image="item[2]"
            />
          </View>
        </div>
      </div>
    </div>
  </section>
</template>
