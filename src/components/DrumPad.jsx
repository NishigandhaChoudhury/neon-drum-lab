import { useEffect, useState } from "react";

function DrumPad({ sound, onPlay, activeKey }) {
  const [active, setActive] = useState(false);

  const handlePlay = () => {
    setActive(true);
    onPlay(sound);

    setTimeout(() => {
      setActive(false);
    }, 150);
  };

  useEffect(() => {
    if (activeKey === sound.key) {
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 150);
    }
  }, [activeKey, sound.key]);

  return (
    <button
      className={`drum-pad ${active ? "active" : ""}`}
      onClick={handlePlay}
    >
      <span className="pad-key">{sound.key}</span>
      <span className="pad-name">{sound.name}</span>
    </button>
  );
}

export default DrumPad;