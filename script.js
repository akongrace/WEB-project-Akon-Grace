function showMessage() {
  const tips = [
    "✨ Confidence is the best outfit. Wear it and rock it! ✨",
    "👗 Always dress like it’s the best day of your life!",
    "👜 Accessories can transform any outfit instantly.",
    "👠 Style is a way to say who you are without speaking.",
    "🌸 Fashion fades, but your personal style is forever."
  ];

  
  const randomTip = tips[pick .floor(pick .random()* tips.length)];

  document.getElementById("message").innerText = randomTip;
} 
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".image-card img");

  items.forEach(item => {
    item.addEventListener("click", () => {
      alert("You clicked on " + item.alt + "!");
    });
  });
});