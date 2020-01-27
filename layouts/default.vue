<template>
  <div>
    <navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

/* Colors */
$background_color_1: #f6f2f8;
$background_color_2: #ffffff;
$color_1: #333333;
$color_2: #ff5733;
$color_3: #222222;
$color_4: #0082f3;

/* container-start */
.container {
  z-index: 5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;

  &.wrap {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  &.container-navbar {
    padding-right: 24px;
    padding-left: 24px;

    &.align-middle {
      &.space-between {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;

        &.height64 {
          min-height: 64px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        }
      }

      &.height64 {
        min-height: 64px;
      }
    }

    &.height64 {
      min-height: 64px;
    }
  }

  &.position-relative {
    z-index: 6;

    &.z-index-10 {
      z-index: 99999;
    }

    &.is-wrapped {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  &.container-nested {
    width: auto;
    margin-right: -24px;
    margin-left: -24px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;

    &.is-wrapped {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  &.margin-bottom-double.margin-top-negative {
    margin-top: -127px;
  }

  &.flex-horizontal {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;

    &.container-wrap,
    &.is-wrapping {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  &.is-fullwidth {
    max-width: 100%;
  }

  &.is-narrow {
    max-width: 970px;
  }

  &.is-wide {
    max-width: 1400px;
  }

  &.bg-white {
    background-color: $background_color_2;
  }
}

/* container-end */

</style>
