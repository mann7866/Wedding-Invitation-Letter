const countDownDate = new Date("Sep 21, 2025 09:00:00").getTime();
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Acara Sedang Berlangsung 🎉";
    clearInterval(x);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// ucapan
document.getElementById("kirim-ucapan").addEventListener("click", function (){
  let nomor = "+6281235117136"
  let pesan = "Assalamualaikum"
  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
})

// flower
  function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // daftar gambar bunga
  const images = [
    "./assets/images/floweer-removebg-preview.png",
    "./assets/images/flower_blue-removebg-preview.png"
  ];

  // pilih random dari array
  const randomImg = images[Math.floor(Math.random() * images.length)];
  flower.innerHTML = `<img src="${randomImg}" width="${20 + Math.random() * 30}">`;

  flower.style.left = Math.random() * 100 + "vw"; // posisi acak
  flower.style.animationDuration = (3 + Math.random() * 5) + "s"; // durasi jatuh acak
  // flower.style.opacity = 0.3 + Math.random() * 0.10;
  
  document.querySelector(".falling-flowers").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}

setInterval(createFlower, 500);

// add music to scroll
// const musik = document.getElementById("music");
//   let musikSudahDimainkan = false; // supaya cuma dimainkan sekali

//   window.addEventListener("scroll", () => {
//     if (!musikSudahDimainkan) {
//       musik.play().catch(() => {
//         console.log("Browser butuh interaksi user sebelum play musik.");
//       });
//       musikSudahDimainkan = true;
//     }
//   });
const musik = document.getElementById("music");
const overlay = document.getElementById("overlay");

function startMusic() {
  musik.play().catch(() => {
    console.log("Browser mobile butuh interaksi user.");
  });
  overlay.style.display = "none"; // sembunyikan overlay
}

// klik/tap overlay (seluruh layar)
overlay.addEventListener("click", startMusic);

// scroll atau touch pertama juga bisa trigger
window.addEventListener("scroll", startMusic, { once: true });
window.addEventListener("touchstart", startMusic, { once: true });


