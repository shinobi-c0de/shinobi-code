---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Shinobi Code"
  text: ""
  tagline: Code like a shinobi from your fav. anime Naruto
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div style="  background-color: orange;">
  Here is an audio file you can play:

  <audio id="myaudio" controls>
    <source src="/samidare.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

<script>
  document.addEventListener('click', () => {
    const audio = document.getElementById('myaudio');
    if (audio) {
      audio.play();
    }
  });
</script>
