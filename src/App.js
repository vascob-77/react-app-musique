import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Faded",
      artist: "Alan Walker",
      img_src: "./images/Alan-Walker-Faded.jpg",
      src: "./music/Alan Walker - Faded.mp3"
    },
    {
      title: "It's You",
      artist: "Ali Gatie",
      img_src: "./images/it's-you.jpg",
      src: "./music/Ali Gatie - It s You.mp3"
    },
    {
      title: "Saturday Nights",
      artist: "Khalid",
      img_src: "./images/saturday-nights.jpg",
      src: "./music/Khalid-Saturday-Nights.mp3"
    },
    {
      title: "Summertime Sadness",
      artist: "Lana Del Rey",
      img_src: "./images/summertime - lana.jpg",
      src: "./music/Lana Del Rey Summertime Sadness.mp3"
    },
    
    {
      title: "On & On",
      artist: "Cartoon",
      img_src: "./images/on-n-on.jpg",
      src: "./music/on-n-on.mp3"
    }
   
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1);

  useEffect(()=>{
    setNextSongIndex(() => {

      if (currentSongIndex + 1 > songs.length -1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }

    });

  }, [currentSongIndex])

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
