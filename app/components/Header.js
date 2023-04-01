import { SearchForm } from "./SearchForm.js";
import api from "../helpers/wp_api.js";

export function Header() {
  const $nav = document.createElement("nav");
  $nav.classList.add("navbar", "navbar-light", "bg-secondary", "bg-gradient");
  $nav.innerHTML = `
<div class="container-fluid">
    <a href="${api.DOMAIN}" class="navbar-brand text-light" target="_blank" rel="noopener">
        <img src="app/assets/favicon.ico" alt="" width="30" height="24" class="d-inline-block align-text-top">  
        ${api.NAME.toUpperCase()}       
    </a>
    <ul class="nav nav-pills d-flex">
        <li class="nav-item">
            <a href="#/" class="nav-link text-light">Home</a>
        </li>
        <li class="nav-item">
            <a href="#/search" class="nav-link text-light">Search</a>
        </li>
        <li class="nav-item">
            <a href="#/contacto" class="nav-link text-light">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light"></a>
        </li>
  </ul>
  </div>
  `;

  setTimeout(() => {
    document.querySelector(".navbar-brand").insertAdjacentElement("afterend", SearchForm());
  }, 100);

  return $nav;
}