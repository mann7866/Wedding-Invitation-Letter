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