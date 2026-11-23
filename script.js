"use strict";

function certificateEmbed(path, fallbackText = "Open certificate in a new tab") {
  return `
    <div class="cert-embed">
      <iframe src="${path}" title="Certificate Preview"></iframe>
    </div>
    <p class="cert-fallback"><a href="${path}" target="_blank" rel="noreferrer">${fallbackText}</a></p>
  `;
}

const details = {
  "cw-architecture": {
    title: "Computer Architecture",
    body: `
      <p>Processor organization, memory systems, and low-level computational structure.</p>
      <p class="detail-tech">PROCESSORS · MEMORY · LOW-LEVEL SYSTEMS</p>
    `
  },
  "cw-embedded": {
    title: "Embedded Systems",
    body: `
      <p>Focus on firmware, microcontrollers, embedded interfaces, debugging, and real-world system integration.</p>
      <p class="detail-tech">MICROCONTROLLERS · FIRMWARE · INTERFACES</p>
    `
  },
  "cw-digital": {
    title: "Digital Logic Design",
    body: `
      <p>Core logic and digital system design foundations that connect directly to RTL, FPGA, and hardware thinking.</p>
      <p class="detail-tech">DIGITAL LOGIC · HARDWARE FOUNDATIONS</p>
    `
  },
  "cw-software": {
    title: "Software Engineering",
    body: `
      <p>Structured software development, implementation, testing, debugging, and collaborative workflow.</p>
      <p class="detail-tech">DESIGN · TESTING · DEBUGGING · DEVELOPMENT</p>
    `
  },
  "cw-dsa": {
    title: "Data Structures & Algorithms",
    body: `
      <p>Algorithmic efficiency, data organization, and systematic problem solving in software.</p>
      <p class="detail-tech">ALGORITHMS · DATA STRUCTURES · PROBLEM SOLVING</p>
    `
  },
  "cw-circuits": {
    title: "Electronic Circuits",
    body: `
      <p>Circuit-level foundations supporting analog reasoning, embedded hardware understanding, and testing work.</p>
      <p class="detail-tech">CIRCUITS · HARDWARE · ANALYSIS</p>
    `
  },

  "project-thermostat": {
    title: "Embedded Digital Thermostat",
    body: `
      <p>An embedded thermostat combining sensor-driven temperature monitoring with automated control.</p>
      <ul>
        <li>Developed C/C++ firmware for temperature monitoring and automated control.</li>
        <li>Integrated sensors and control logic.</li>
        <li>Tested and debugged firmware and hardware through iterative validation.</li>
        <li>Created Python scripts to automate supporting technical tasks.</li>
      </ul>
      <p class="detail-tech">C/C++ · SENSORS · CONTROL LOGIC · DEBUGGING · PYTHON</p>
    `
  },

  "project-poyo": {
    title: "Poyo's Potion Dashboard",
    body: `
      <p>A HackUTD full-stack inventory dashboard project.</p>
      <ul>
        <li>Built with React, JavaScript, HTML, and CSS.</li>
        <li>Developed backend functionality using Node.js, Express.js, REST APIs, and SQLite/database workflows.</li>
        <li>Implemented auditing and discrepancy detection between physical measurements and business records.</li>
        <li>Created real-time visualization and collaborated on testing/debugging features.</li>
      </ul>
      <p class="detail-tech">REACT · JAVASCRIPT · NODE.JS · EXPRESS · SQLITE · REST APIs</p>
    `
  },

  "project-esp32": {
    title: "ESP32 Sensing & Monitoring System",
    body: `
      <p>IEEE project combining sensing, monitoring, and wireless embedded firmware.</p>
      <ul>
        <li>Developed C/C++ firmware for environmental monitoring and camera streaming.</li>
        <li>Integrated sensors, embedded hardware, and wireless communication.</li>
        <li>Implemented real-time monitoring functionality.</li>
        <li>Tested and debugged system functionality.</li>
      </ul>
      <p class="detail-tech">ESP32 · EMBEDDED C/C++ · WIFI · SENSORS · DEBUGGING</p>
    `
  },

  "project-solis": {
    title: "Solis Rover",
    body: `
      <p>Robotics and embedded systems work on the Comet Robotics rover platform.</p>
      <ul>
        <li>Developed C++/ROS2 firmware and nodes for rover sensors and motor control.</li>
        <li>Worked with BNO08X IMU and LiDAR integration.</li>
        <li>Performed board bring-up, hardware testing, and firmware debugging.</li>
        <li>Supported system-level hardware-software integration.</li>
      </ul>
      <p class="detail-tech">C++ · ROS2 · IMU · LIDAR · EMBEDDED SYSTEMS</p>
    `
  },

  "project-hls": {
    title: "HLS & FPGA Optimization",
    body: `
      <p>Digital hardware optimization and verification work across Verilog, HLS, and FPGA-oriented flows.</p>
      <ul>
        <li>Used Verilog and C/C++ for digital hardware implementation.</li>
        <li>Applied pipelining, parallelism, loop optimization, and HLS concepts.</li>
        <li>Validated designs using simulation and waveform analysis.</li>
      </ul>
      <p class="detail-tech">VERILOG · HLS · FPGA · PIPELINING · SIMULATION</p>
    `
  },

  "research-darc": {
    title: "DARC Labs — Digital Hardware Research",
    body: `
      <p><strong>May 2026 – Aug 2026</strong></p>
      <ul>
        <li>Developed and optimized digital hardware using Verilog, C/C++, HLS, and FPGA workflows.</li>
        <li>Applied pipelining, parallelism, loop optimization, and related optimization techniques.</li>
        <li>Validated designs through simulation and waveform analysis.</li>
        <li>Built Python automation tools to support research workflows.</li>
        <li>Used AI-assisted development tools to improve efficiency.</li>
      </ul>
      <p class="detail-tech">VERILOG · C/C++ · HLS · FPGA · PYTHON AUTOMATION · WAVEFORM ANALYSIS</p>
    `
  },

  "research-qml": {
    title: "Quantum Materials Lab — Semiconductor Research",
    body: `
      <p><strong>May 2025 – Aug 2025</strong></p>
      <ul>
        <li>Worked on semiconductor device fabrication and characterization.</li>
        <li>Used photolithography, CVD, and etching processes.</li>
        <li>Performed device measurements and process characterization.</li>
        <li>Analyzed experimental data and contributed to lab research workflows.</li>
      </ul>
      <p class="detail-tech">SEMICONDUCTORS · PHOTOLITHOGRAPHY · CVD · ETCHING · DEVICE MEASUREMENTS</p>
    `
  },

  "cert-claude": {
    title: "Claude Code in Action",
    body: `
      <p>Anthropic — AI-assisted development tooling and workflows.</p>
      <p class="detail-tech">AI-ASSISTED DEVELOPMENT</p>
      ${certificateEmbed("assets/certificates/claude-code-in-action.pdf")}
    `
  },

  "cert-aws": {
    title: "AWS Cloud Practitioner Essentials",
    body: `
      <p>AWS Training & Certification — completed September 07, 2026.</p>
      <p class="detail-tech">AWS · CLOUD FOUNDATIONS</p>
      ${certificateEmbed("assets/certificates/aws-cloud-practitioner.pdf")}
    `
  },

  "cert-ibm": {
    title: "Introduction to Cloud",
    body: `
      <p>IBM / Cognitive Class — issued September 06, 2026.</p>
      <p class="detail-tech">CLOUD COMPUTING</p>
      ${certificateEmbed("assets/certificates/introduction-to-cloud.pdf")}
    `
  },

  "cert-cisco": {
    title: "Introduction to Cybersecurity",
    body: `
      <p>Cisco Networking Academy — completed September 06, 2026.</p>
      <p class="detail-tech">CYBERSECURITY FOUNDATIONS</p>
      ${certificateEmbed("assets/certificates/introduction-to-cybersecurity.pdf")}
    `
  },

  "cert-python": {
    title: "Python (Basic)",
    body: `
      <p>HackerRank skill certification.</p>
      <p class="detail-tech">PYTHON</p>
      ${certificateEmbed("assets/certificates/hackerrank-python-basic.pdf")}
    `
  },

  "cert-java": {
    title: "Java (Basic)",
    body: `
      <p>HackerRank skill certification.</p>
      <p class="detail-tech">JAVA</p>
      ${certificateEmbed("assets/certificates/hackerrank-java-basic.pdf")}
    `
  },

  "skill-programming": {
    title: "Programming",
    body: `
      <p>My programming languages include C, C++, Python, Java, JavaScript, SQL, MATLAB, and Bash.</p>
      <p class="detail-tech">LANGUAGES · SOFTWARE FOUNDATIONS</p>
    `
  },

  "skill-hardware": {
    title: "Digital Hardware",
    body: `
      <p>Verilog, VHDL, RTL design, FPGA design, High-Level Synthesis, hardware optimization, and verification.</p>
      <p class="detail-tech">RTL · FPGA · HLS · VERIFICATION</p>
    `
  },

  "skill-embedded": {
    title: "Embedded & Robotics",
    body: `
      <p>ESP32, ROS2, sensors, firmware, board bring-up, motor control, IMU/LiDAR integration, and hardware-software integration.</p>
      <p class="detail-tech">EMBEDDED SYSTEMS · ROS2 · FIRMWARE · ROBOTICS</p>
    `
  },

  "skill-tools": {
    title: "Testing & Engineering Tools",
    body: `
      <p>Linux, Git/GitHub, oscilloscopes, logic analyzers, multimeters, simulation, waveform analysis, KiCad, OrCAD, and SolidWorks.</p>
      <p class="detail-tech">TOOLS · DEBUGGING · MEASUREMENT · ENGINEERING WORKFLOW</p>
    `
  },

  "skill-ai": {
    title: "Software, Cloud & AI",
    body: `
      <p>React, Node.js, REST APIs, databases, AWS, generative AI, LLMs, AI-assisted development, and automation workflows.</p>
      <p class="detail-tech">FULL STACK · CLOUD · AI · AUTOMATION</p>
    `
  }
};


const dialog = document.getElementById("detailDialog");
const detailTitle = document.getElementById("detailTitle");
const detailBody = document.getElementById("detailBody");
const closeDetail = document.getElementById("closeDetail");
let detailTrigger = null;

document.querySelectorAll("[data-detail]").forEach((trigger) => {
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.addEventListener("click", () => {
    const item = details[trigger.dataset.detail];
    if (!item) return;
    detailTrigger = trigger;
    detailTitle.textContent = item.title;
    detailBody.innerHTML = item.body;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("modal-open");
    closeDetail.focus();
  });
});
closeDetail.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  detailBody.replaceChildren();
  detailTrigger?.focus({ preventScroll: true });
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(expanded));
  navigation.classList.toggle("is-open", expanded);
});
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link) {
    closeMenu();
    const destination = document.querySelector(link.getAttribute("href"));
    // Keep focus at the destination after the mobile menu becomes hidden.
    if (window.matchMedia("(max-width: 600px)").matches && destination) {
      destination.setAttribute("tabindex", "-1");
      destination.focus({ preventScroll: true });
      destination.addEventListener("blur", () => destination.removeAttribute("tabindex"), { once: true });
    }
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia("(max-width: 600px)").addEventListener("change", closeMenu);

// Native page scrolling; the observer only updates the navigation highlight.
const navLinks = [...navigation.querySelectorAll("a")];
const sectionAliases = { coursework: "research", skills: "certifications" };
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = sectionAliases[entry.target.id] || entry.target.id;
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}

document.getElementById("year").textContent = String(new Date().getFullYear());
