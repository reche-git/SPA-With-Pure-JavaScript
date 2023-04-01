import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";
import { ScrollTop } from "./components/ScrollTop.js";
import { Tutorial } from "./components/Tutotial.js";
import { Socials } from "./components/Socials.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  $root.appendChild(ScrollTop());
  $root.appendChild(Tutorial());
  $root.appendChild(Socials());
  
  Router();
  InfiniteScroll();
}
