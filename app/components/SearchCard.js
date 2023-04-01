export function SearchCard(props) {
  let { id, _embedded, title } = props;
  let slug = _embedded.self[0].slug;
  let urlPoster =
    _embedded.self[0].featured_media_src_url || "app/assets/favicon.png";
  let summary = _embedded.self[0].excerpt.rendered;

  return `
  <article class="post-card-a card mb-3 mt-5" style="max-width: 70%; margin: auto; background-color: #636363;">
  <div class="row g-0 text-white">
    <div class="col-md-4 m-auto">
      <img src="${urlPoster}" class="img-fluid rounded-start" alt="${title}" style="object-fit: cover;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p class="card-text">${summary}</p>
        <p class="card-text">
          <a href="#/${slug}" data-id="${id}" class="btn btn-light">Ver Publicación</a>
        </p>
      </div>
    </div>
  </div>
</article>
  `;
}
