<script>
    function toggleMore() {
      const moreText = document.getElementById("more-text");
      const toggleBtn = document.getElementById("toggle-button");

      if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        toggleBtn.textContent = "Sembunyikan";
      } else {
        moreText.classList.add("hidden");
        toggleBtn.textContent = "Lihat Selengkapnya";
      }
    }
  </script>