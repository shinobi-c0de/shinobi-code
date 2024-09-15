<!-- .vitepress/theme/FeatureList.vue -->

<template>
  <section class="features-section">
    <div class="features-container">
      <div class="feature-item">
        <img src="/undraw/undraw_done.svg" alt="Feature 1">
        <h3>One Click Install</h3>
        <p>Shinobi Code is a VSCode Extension, no need to download any dependencies.
          Zero headaches with PIP/NPM.</p>
      </div>
      <div class="feature-item">
        <img src="/undraw/undraw_outer_space.svg" alt="Feature 2">
        <h3>Fast and Modern</h3>
        <p>Perform a variety of Jutsu as seen in Naruto anime.
          Instantly detects and is lightweight on memory.<br>
          Well Documented.</p>
      </div>
      <div class="feature-item">
        <img src="/undraw/undraw_questions.svg" alt="Feature 3">
        <h3>Do you need Help?</h3>
        <p>Are you encountering problems?<br>
          Then you can create an issue or discussion topic on GitHub so that others can help you.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Optionally, you can add script logic here
</script>

<style scoped>
.features-section {
  padding: 40px 20px;
}

.features-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between items */
}

.feature-item {
  flex: 1 1 calc(33.333% - 40px); /* 3 items per row with spacing */
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: scale(1.05); /* Slightly enlarge on hover */
  border: 3px solid #FF7F00;
}

.feature-item img {
  display: block;
  margin: 0 auto; /* Center horizontally */
  max-width: 200px; /* Adjust as needed */
  height: 200px;
}

.feature-item h3 {
  margin: 10px 0;
  font-size: 1.25em;
}

.feature-item p {
  font-size: 1em;
}
</style>
