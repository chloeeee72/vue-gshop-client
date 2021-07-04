<template>
  <div class="star" :class="'star-' + size">
    <!--
      v-for遍历显示对应评分score的星星状态 根据数组starClasses显示
      starClasses 存储五颗星状态的数组，通过计算属性获得与score评分对应的星星状态，并将其存储到数组里
      :class 显示对应样式的星星（通过style引入对应图片）  
      sc是数组中的元素，根据style（stylus）显示对应状态的星星图片（on half off）
    -->
    <span
      class="star-item"
      v-for="(sc, index) in starClasses"
      :key="index"
      :class="sc"
    ></span>
  </div>
</template>

<script>
// 类名常量
const CLASS_ON = "on";
const CLASS_HALF = "half";
const CLASS_OFF = "off";
export default {
  props: {
    score: Number,
    size: Number
  },
  // 根据score计算星星状态，根据评分数据动态显示星星
  computed: {
    // 几双属性：存储每一颗星星显示状态（on half off）的数组
    starClasses() {
      // 根据score产生返回一个数组
      // this为当前vm实例，this.score
      const { score } = this;
      const scs = [];
      // 向scs中添加n个'CLASS_ON'
      // 向scs中添加0/1个'CLASS_HALF'
      // 向scs中添加n个'CLASS_OFF'
      // 整数部分是全星个数 地板除，for循环添加
      const scoreInteger = Math.floor(score); //得到评分的整数部分
      for (let index = 0; index < scoreInteger; index++) {
        // 根据整数scoreInteger生成相应个数的全星，并存入数组
        scs.push(CLASS_ON);
      }
      // 小数部分>=0.5时出现半星  *10防止小数计算不精确的情况
      if (score * 10 - scoreInteger * 10 >= 5) {
        scs.push(CLASS_HALF);
      }
      // 灰星：5-全星个数-半星个数
      while (scs.length < 5) {
        scs.push(CLASS_OFF);
      }
      return scs;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.star //2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/stars/star48_on')
      &.half
        bg-image('./images/stars/star48_half')
      &.off
        bg-image('./images/stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star36_on')
      &.half
        bg-image('./images/stars/star36_half')
      &.off
        bg-image('./images/stars/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star24_on')
      &.half
        bg-image('./images/stars/star24_half')
      &.off
        bg-image('./images/stars/star24_off')
</style>
