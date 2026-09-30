function Display({ currentSound, volume, power }) {
  return (
    <div className="display">
      <div className="display-title">DRUM MACHINE</div>

      <div className="display-screen">
        {power ? currentSound : "SYSTEM OFF"}
      </div>

      <div className="display-info">
        <span>VOL: {volume}%</span>
        <span>{power ? "● READY" : "○ OFF"}</span>
      </div>
    </div>
  );
}

export default Display;