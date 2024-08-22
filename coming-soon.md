---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Shinobi Code"
  text: ""
  tagline: "Code like a shinobi from your fav. anime Naruto"

  #actions:
  #  - theme: brand
  #    text: Markdown Examples
  #    link: /markdown-examples
  #  - theme: alt
  #    text: API Examples
  #    link: /api-examples


#features:
#  - title: Feature A
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Feature B
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Feature C
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<h3> Coming Soon ...</h3>
<h4>Meanwhile listen and enjoy to this masterpiece. (Please use earphones)</h4>
    <div align="center" style="padding:2rem 0">
        <img width="80%" src="/naruto-jiraiya.jpg" title="Source: Google Images"/>
    </div>

<div style="background-color:;">
(If the audio doesn't play automatically, click anywhere on the page to start it.)
<p>Audio Source: 
    <a href="https://youtu.be/_6N9f1ad9Ow?si=kB5eg5t7SS_ErKJk" target="_blank">https://youtu.be/_6N9f1ad9Ow?si=kB5eg5t7SS_ErKJk</a>
</p>
<audio id="myaudio" autoplay>
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
