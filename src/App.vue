<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
// import { reqFoodCategories } from "@/api/index";
export default {
  name: "App",
  // async mounted() {
  //   const result = await reqFoodCategories();
  //   console.log(result);
  // },
  mounted() {
    // const address = this.$store.dispatch("getAddress");
    // console.log(address);
    const address = this.getAddress();
    // console.log(address);
  },
  methods: {
    ...mapActions(["getAddress"])
  },
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
