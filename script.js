<script>
  const themeToggle = document.getElementById('theme-toggle');
  const main = document.querySelector('main');

  themeToggle.addEventListener('click', () => {
    main.classList.toggle('dark-mode');
  });
</script>
