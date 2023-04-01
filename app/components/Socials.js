export function Socials() {
    const $template = document.createElement("div");
    $template.innerHTML = `
    <div class="wrapper btn-floating">
  <a href="#" class="icon facebook">
    <div class="tooltip">Facebook</div>
    <i class="fa fa-facebook" aria-hidden="true"></i>
  </a>
  <a href="#" class="icon twitter">
    <div class="tooltip">Twitter</div>
    <i class="fa fa-twitter" aria-hidden="true"></i>
  </a>
  <a href="#" class="icon instagram">
    <div class="tooltip">Instagram</div>
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </a>
  <a href="#" class="icon github">
    <div class="tooltip">Github</div>
    <i class="fa fa-github" aria-hidden="true"></i>
  </a>
</div>
    `;

    return $template
}