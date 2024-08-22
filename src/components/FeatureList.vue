<!-- .vitepress/theme/FeatureList.vue -->

<template>
  <div class="features">
    <div class="feature">
      <img class="featureSvg" src="/undraw_press_play.svg">
      <h3>One Click Install</h3>
        <p align="center">Shinobi-Code is a webapp, no need to download any dependencies.
        Zero headaches with PIP/NPM.</p>
    </div>
    <div class="feature">
      <img class="featureSvg" src="/undraw_outer_space.svg">
      <h3>Fast and Modern</h3>
      <p align="center">Perform a variety of Jutsu as seen in Naruto anime.
        Instantly detects and is lightweight on memory.</p>
    </div>
    <div class="feature">
      <img class="featureSvg" src="/undraw_questions.svg">
      <h3>Do you need Help?</h3>
      <p align="center">Are you encountering problems? Then you can create an issue or discussion topic on GitHub so that others can help you.</p>
    </div>
  </div>
</template>

<script setup>
// Optionally, you can add script logic here
</script>

<style>
.features {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  width: 100%;
}
.feature {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers horizontally */
  align-items: center;    
}
.featureSvg {
  height: 200px;
  width: 200px;
}
h3:hover {
  color: #FF7F00;
}
</style>
