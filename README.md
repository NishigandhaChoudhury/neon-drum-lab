# 🎛️ Neon Drum Lab

A beginner-friendly **React Drum Machine** with a unique neon-inspired interface.

Play drum sounds using your **mouse or keyboard**, control the master volume, and turn the drum machine on or off.

## 🚀 Live Demo

👉 **[Try Neon Drum Lab Live](https://nishigandhachoudhury.github.io/neon-drum-lab/)**

Play the drum machine directly in your browser using your mouse or keyboard.

## ✨ Features

- 🎵 9 interactive drum pads
- ⌨️ Keyboard controls: `Q W E A S D Z X C`
- 🖱️ Mouse click controls
- 🔊 Master volume control
- ⚡ Power ON/OFF toggle
- 💡 Neon glow effect when a pad is played
- 📟 Digital display showing the currently played sound
- 📱 Responsive design
- 🎧 Local MP3 drum samples

## 🛠️ Built With

- React
- JavaScript
- HTML
- CSS
- Vite

## 🧠 React Concepts Used

- `useState` for application state and visual effects
- `useRef` for controlling HTML audio elements
- `useEffect` for keyboard event listeners
- Event listener cleanup
- Props and component communication
- Lifting state up
- Array `.map()` for dynamically creating drum pads

## 📁 Project Structure

```text
drum-machine/
├── public/
│   └── audio/
│       ├── kick.mp3
│       ├── snare.mp3
│       ├── clap.mp3
│       ├── hihat.mp3
│       ├── openhat.mp3
│       ├── tom.mp3
│       ├── lowtom.mp3
│       ├── crash.mp3
│       └── ride.mp3
│
├── src/
│   ├── components/
│   │   ├── DrumPad.jsx
│   │   └── Display.jsx
│   │
│   ├── data/
│   │   └── soundBank.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
└── package.json
