export function Socials() {
  const $template = document.createElement("div");
  $template.innerHTML = `
    <div class="wrapper btn-floating" rel="noreferrer" target="_blank">
  <a href="https://www.facebook.com/" class="icon facebook" rel="noreferrer" target="_blank">
    <div class="tooltip">Facebook</div>
    <i class="fa fa-facebook" aria-hidden="true"></i>
  </a>
  <a href="https://twitter.com/home?lang=en" class="icon twitter" rel="noreferrer" target="_blank">
    <div class="tooltip">Twitter</div>
    <i class="fa fa-twitter" aria-hidden="true"></i>
  </a>
  <a href="https://www.instagram.com/" class="icon instagram" rel="noreferrer" target="_blank">
    <div class="tooltip">Instagram</div>
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </a>
  <a href="https://github.com/reche-git" class="icon github" rel="noreferrer" target="_blank">
    <div class="tooltip">Github</div>
    <i class="fa fa-github" aria-hidden="true"></i>
  </a>
</div>
    `;

  return $template;
}
