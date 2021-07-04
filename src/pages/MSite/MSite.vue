<template>
  <section class="msite">
    <!--首页头部-->
    <header-top :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </header-top>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!-- 首页导航 二维数组 -->
        <!-- 每一页最大8个元素,总元素/8=数组个数a,把数组categories分为a个数组 -->
        <!-- 嵌套v-for 遍历渲染每一个列表(八个元素)，每一个元素(图片+文字) -->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categories.length">
            <div class="swiper-wrapper">
              <!-- :pagination="true" -->
              <div
                class="swiper-slide"
                v-for="(categories, index) in categoriesArr"
                :key="index"
              >
                <a
                  href="javascript:"
                  class="link_to_food"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <div class="food_container">
                    <img :src="baseImageUrl + category.image_url" />
                  </div>
                  <span>{{ category.title }}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- 未加载时候的 Skeleton 骨架屏-->
          <img v-else src="./images/msite_back.svg" alt="back" />
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 已经注册头部组件为全局组件
import ShopList from "@/components/ShopList/ShopList";
import Swiper from "swiper";
import BScroll from "better-scroll";
import "swiper/swiper.min.css";
import { mapState } from "vuex";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getShops");
  },
  watch: {
    categories(value) {
      // 界面更新就立即创建Swiper对象
      this.$nextTick(() => {
        // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
        // 创建一个Swiper实例对象, 来实现轮播
        new Swiper(".swiper-container", {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });

        new BScroll(".miste-content-wrapper", {
          click: true
        });
      });
    }
  },
  computed: {
    ...mapState(["address", "categories", "userInfo"]),

    // 根据categories（一维数组）生成二维数组（内部的数组中的元素个数最大为8个）
    categoriesArr() {
      const { categories } = this;
      // 准备空的2维数组
      const arr = [];
      // 准备一个小数组(最大长度为8)
      let minArr = [];
      // 遍历categories
      categories.forEach(c => {
        // 如果当前小数组已经满了, 创建一个新的
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr是空的, 将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(c);
      });

      return arr;
    }
  },
  components: {
    ShopList
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .miste-content-wrapper {
    position: fixed;
    top: 45px;
    bottom: 46px;
    width: 100%;

    .msite_nav {
      bottom-border-1px(#e4e4e4);
      margin-top: 15px;
      height: 200px;
      background: #fff;

      .swiper-container {
        width: 100%;
        height: 100%;

        .swiper-wrapper {
          width: 100%;
          height: 100%;

          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;

            .link_to_food {
              width: 25%;

              .food_container {
                display: block;
                width: 100%;
                text-align: center;
                padding-bottom: 10px;
                font-size: 0;

                img {
                  display: inline-block;
                  width: 50px;
                  height: 50px;
                }
              }

              span {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 13px;
                color: #666;
              }
            }
          }
        }

        .swiper-pagination {
          >span.swiper-pagination-bullet-active {
            background: #02a774;
          }
        }
      }
    }

    .msite_shop_list {
      top-border-1px(#e4e4e4);
      margin-top: 10px;
      background: #fff;

      .shop_header {
        padding: 10px 10px 0;

        .shop_icon {
          margin-left: 5px;
          color: #999;
        }

        .shop_header_title {
          color: #999;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
