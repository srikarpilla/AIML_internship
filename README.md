# Smart Gate — Robotics Assignment

A virtual "Smart Gate" system that detects vehicles using an ultrasonic sensor, opens automatically, stays open for 5 seconds, and closes only when the path is clear.

---

## Project Structure

```
smart-gate/
├── smart_gate_arduino.ino   # Part 1 — Arduino C++ code (Wokwi)
├── open_gate_block.js       # Part 2 — Blockly custom block definition
├── smart_gate_dashboard.html # Part 3 — Web dashboard UI
└── README.md
```

---

## Part 1 — Hardware Simulation (Wokwi)

**Live Simulation:** https://wokwi.com/projects/463366486226140161

### Components Used
- Arduino Uno
- HC-SR04 Ultrasonic Distance Sensor
- SG90 Servo Motor (acts as the gate arm)
- LED + 220Ω Resistor (blinks while gate is in motion)

### Wiring

| Component | Pin | Arduino Pin |
|-----------|-----|-------------|
| HC-SR04 | VCC | 5V |
| HC-SR04 | GND | GND |
| HC-SR04 | TRIG | Pin 9 |
| HC-SR04 | ECHO | Pin 10 |
| Servo | Signal (orange) | Pin 6 |
| Servo | VCC (red) | 5V |
| Servo | GND (brown) | GND |
| LED | Anode (+) | Pin 13 |
| LED | Cathode (−) | GND (via 220Ω) |

### Logic Flow
1. Sensor continuously reads distance
2. If distance < 20 cm → vehicle detected → gate opens (servo rotates to 90°)
3. LED blinks while gate is in motion
4. Gate stays open for 5 seconds
5. After 5 seconds, if path is clear → gate closes (servo returns to 0°)
6. If path is still blocked → gate stays open and keeps checking

---

## Part 2 — Blockly Custom Block

File: `open_gate_block.js`

Defines a custom Blockly block called `open_gate_with_speed` that:
- Takes a speed input (1–10)
- Generates servo motor code: `servo.write(angle)` with a speed-mapped delay
- Speed 10 = fastest (5ms delay), Speed 1 = slowest (50ms delay)

---

## Part 3 — Web Dashboard

File: `smart_gate_dashboard.html`

A standalone HTML/CSS/JS dashboard with:
- Live animated gate visual (SVG servo arm rotates open/closed)
- Status badge: Gate Closed → Gate Opening → Gate Open → Gate Closing
- 5-second auto-close countdown bar
- Real-time event log
- Sensor readings panel (distance, angle, event count)
- "Simulate Vehicle" button to trigger the full gate cycle

Open the file directly in any browser — no server or backend needed.

---

## How to Run

### Wokwi Simulation
1. Open the link: https://wokwi.com/projects/463366486226140161
2. Click the ▶ Play button
3. Click on the HC-SR04 sensor → drag the distance slider below 20 cm
4. Watch the gate open, LED blink, and gate auto-close after 5 seconds

### Web Dashboard
1. Open `smart_gate_dashboard.html` in any browser
2. Click **"Simulate Vehicle"** to trigger the gate
3. Watch the full open → countdown → close cycle

---

## Technologies Used

- C++ (Arduino / Wokwi simulation)
- JavaScript (Blockly block generator)
- HTML / CSS / Vanilla JS (Frontend dashboard)
