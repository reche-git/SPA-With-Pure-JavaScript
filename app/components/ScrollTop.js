export function ScrollTop() {
  const d = document,
    $scrollBtn = d.createElement("button");

  $scrollBtn.type = "button";
  $scrollBtn.classList.add(
    "btn",
    "btn-danger",
    "btn-floating",
    "btn-lg",
    "rounded-circle"
  );
  $scrollBtn.id = "btn-back-to-top";
  $scrollBtn.innerHTML = `↑`;

  window.addEventListener("scroll", (e) => {
    if (d.body.scrollTop > 1000 || d.documentElement.scrollTop > 1000) {
      $scrollBtn.style.display = "block";
    } else {
      $scrollBtn.style.display = "none";
    }
  });

  $scrollBtn.addEventListener("click", (e) => {
    d.body.scrollTop = 0;
    d.documentElement.scrollTop = 0;
  });

  return $scrollBtn;
}
