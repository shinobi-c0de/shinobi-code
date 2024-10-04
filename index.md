---
# Coming-Soon Page
layout: home

hero:
  name: "Shinobi Code"
  text: ""
  tagline: "Unleash Your Inner Shinobi, Code using Ninjutsu from Naruto!"

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

### Coming Soon ...

### Meanwhile listen and enjoy to this masterpiece. (Please use earphones)

<p style="padding:2rem 0">
    <img src="/naruto-jiraiya.jpg" title="Source: Google Images"/>
</p>

::: info Note
If the audio doesn't play automatically, click anywhere on the page to start it.
:::

Audio Source: [https://youtu.be/_6N9f1ad9Ow?si=kB5eg5t7SS_ErKJk](https://youtu.be/_6N9f1ad9Ow?si=kB5eg5t7SS_ErKJk)

<audio id="myaudio" autoplay>
    <source src="/samidare.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<script>
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.addEventListener('click', () => {
      const audio = document.getElementById('myaudio');
      if (audio) {
        audio.play();
      }
    });
}
</script>
