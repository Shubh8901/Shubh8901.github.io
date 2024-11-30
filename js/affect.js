// List of 53 sections with statements and song URLs
const sections = [
  {
    statement: "How I felt when I first realized I started falling for you 💕",
    youtubeLink: "https://youtu.be/pHu4PLhuKgQ?t=18"
  },
  {
    statement: "How I feel about us 🥰",
    youtubeLink: "https://youtu.be/ZhIsAZO5gl0?t=55"
  },
  {
    statement: "A song I dedicate to you 🎶",
    youtubeLink: "https://youtu.be/Cv5Xs8Yj5zU?t=186"
  },
  {
    statement: "How I felt when I first wanted to ask you out but was hesistant💕",
    youtubeLink: "https://youtu.be/ho0WBKPJtfc?t=27"
  },
  // Add more statements and YouTube links here...
];

// Dynamically generate 53 sections
const sectionContainer = document.getElementById("sections");

for (let i = 0; i < 53; i++) {
  const sectionData = sections[i] || {
    statement: `Reason #${i + 1}: You are my sunshine 🌞`,
    youtubeLink: "https://www.youtube.com/watch?v=lWA2pjMjpBs"
  };

  const section = document.createElement("section");
  const header = document.createElement("h2");
  const button = document.createElement("button");

  header.textContent = sectionData.statement;
  button.textContent = "Play the Song 🎵";

  button.addEventListener("click", () => {
    window.open(sectionData.youtubeLink, "_blank");
  });

  section.appendChild(header);
  section.appendChild(button);
  sectionContainer.appendChild(section);
}
