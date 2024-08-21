import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';

function PlayAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    // Attempt to autoplay the audio when the page loads
    const playAudio = () => {
      if (audio) {
        audio.play().catch((error) => {
          console.log('Autoplay failed:', error);
        });
      }
    };
    playAudio();

    // Listen for user interaction to retry autoplay
    document.addEventListener('click', playAudio);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
      <div style={{ padding: '20px' }}>
        <audio ref={audioRef} autoPlay loop>
          <source src="/Samidare.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>(If the audio doesn't play automatically, click anywhere on the page to start it.)</p>
        <p>Audio Source:
          <a href="https://youtu.be/_6N9f1ad9Ow?si=kB5eg5t7SS_ErKJk" target='_blank'> https://youtu.be/_6N9f1ad9Ow?si=kB5eg5t7SS_ErKJk</a>
        </p>
      </div>
  );
}

export default PlayAudio;
