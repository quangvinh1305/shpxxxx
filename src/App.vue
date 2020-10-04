<template>
  <div id="app">
    <carousel :autoplay="true" :navigationEnabled="true">
      <slide>
        <span class="label">
        1
        </span>
      </slide>
      <slide>
        <span class="label">
        2
        </span>
      </slide>
      <slide>
        <span class="label">
        3
        </span>
      </slide>
            <slide>
        <span class="label">
        4
        </span>
      </slide>
            <slide>
        <span class="label">
        5
        </span>
      </slide>
            <slide>
        <span class="label">
        6
        </span>
      </slide>
            <slide>
        <span class="label">
        7
        </span>
      </slide>
            <slide>
        <span class="label">
        8
        </span>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}
#app {
  padding: 0 60px;
}
</style>
