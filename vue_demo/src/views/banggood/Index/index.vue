<template>
  <div :class="$style.main">
    <header :class="$style.header">
      <div :class="$style.hIcon">
        <a href="#">
          <img src="http://css.banggood.com/images/newlogo.png">
        </a>
      </div>
      <div :class="$style.hMid">
        <div :class="$style.hSearch">
          <div :class="$style.hCategory">All categories</div>
          <div :class="$style.hInput">
            <input type="text">
          </div>
        </div>
        <div :class="$style.hMidTip"></div>
      </div>
      <div :class="$style.hUser"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="stylus" module>
.header
  display flex
  padding 17px 25px
  justify-content space-between
  background #211f1d
  >div
    flex 0 0 auto
.hIcon
  a
    width 290px
    height 50px

.hSearch
  background #FFF
  border-radius 20px
  white-space nowrap
  padding 10px 0
.hCategory
  float left
  width 128px
  padding-left 10px
  padding-right 30px
  border-right 1px solid #888
  box-sizing border-box
.hInput
  width 356px
  padding-right 20px
  padding-left 128px
  input
    text-align right
    width 90%
</style>
