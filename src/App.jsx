import { useEffect, useRef, useState } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import soundBank from "./data/soundBank";

function App() {
  const [currentSound, setCurrentSound] = useState("READY");
  const [volume, setVolume] = useState(70);
  const [power, setPower] = useState(true);
  const [activeKey, setActiveKey] = useState("");

  const audioRefs = useRef({});

  const playSound = (sound) => {
    if (!power) return;

    const audio = audioRefs.current[sound.key];

    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume / 100;
      audio.play();
    }

    setCurrentSound(sound.type);
    setActiveKey("");

    setTimeout(() => {
      setActiveKey(sound.key);
    }, 10);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();

      const sound = soundBank.find((item) => item.key === key);

      if (sound) {
        playSound(sound);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, power]);

  return (
    <div className="app">
      <h1>NEON DRUM LAB</h1>

      <Display
        currentSound={currentSound}
        volume={volume}
        power={power}
      />

      <div className="drum-grid">
        {soundBank.map((sound) => (
          <DrumPad
            key={sound.key}
            sound={sound}
            onPlay={playSound}
            activeKey={activeKey}
          />
        ))}
      </div>

      <div className="controls">
        <div className="volume-control">
          <label>MASTER VOLUME</label>

          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
          />

          <span>{volume}%</span>
        </div>

        <button
          className={`power-button ${power ? "on" : "off"}`}
          onClick={() => setPower(!power)}
        >
          {power ? "POWER ON" : "POWER OFF"}
        </button>
      </div>

      {soundBank.map((sound) => (
        <audio
          key={sound.key}
          ref={(element) => {
            audioRefs.current[sound.key] = element;
          }}
          src={sound.file}
        />
      ))}
    </div>
  );
}

export default App;