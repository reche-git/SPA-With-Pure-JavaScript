import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const d = document,
    $main = d.getElementById("main");

  let { hash } = location;

  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = "";

        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      $main.innerHTML = `
      <div class="py-5">
      <h1 class="display-5 fw-bold text-white">
        Let's get into it!
      </h1>
      <div class="col-lg-6 mx-auto">
      <h3 class="mb-4 text-light text-center">
        Use the search bar above to find what are you looking for!
      </h3>
        <p class="fs-5 mb-4 text-light text-center">          
          You can use a sentence, one keyword, more than one keyword... which would make a sentence...
        </p>
        <p class="fs-5 mb-4 text-light text-center">
          Or maybe you want to go back to the main page?
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="#/" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">To the main page please!</a>
        </div>
      </div>
    </div>
      `;
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        // console.log(search);
        let html = "";

        if (search.length === 0) {
          html = `
          <div class="mt-5 mx-auto d-flex justify-content-center">
            <p class="alert alert-info border-end-0 rounded-0" style="width: auto;">
            No matches found...  <a href="#/" class="link-dark">Wanna go back?</a>
            </p>
          </div>
          `;
        } else {
          //For each result we send the post to SearchCard()
          search.forEach((post) => (html += SearchCard(post)));
        }

        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        // console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
