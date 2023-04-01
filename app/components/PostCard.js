export function PostCard(props) {
  let { title, date, slug, featured_media_src_url, id, excerpt, _embedded } =
    props;
  let dateFormat = new Date(date).toLocaleDateString();
  let urlPoster = featured_media_src_url || "app/assets/favicon.png";
  let author = _embedded.author[0].name;

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card-a a")) return false;
    if (e.target.matches(".post-card-a a"))
      localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
<article class="post-card-a mt-5 w-50" style="margin: auto">
  <div class="card mb-3 text-white rounded-5" style="background-color: #636363; border: none">
    <img src="${urlPoster}" alt="${title.rendered}" class="card-img-top rounded-5">
    <div class="card-body">
      <h5 class="card-title">${title.rendered}</h5>
      <p class="card-text">${excerpt.rendered}</p>
      <p class="card-text"><time datetime="${date}">${dateFormat}</time> by ${author}</p>
      <a href="#/${slug}" data-id="${id}" class="btn btn-light">See Post</a>
    </div>
  </div>
</article>
  `;
}
