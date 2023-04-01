export function Post(props) {
  let { title, date, content, link } = props;
  let dateFormat = new Date(date).toLocaleDateString();

  return `
    <section class="post-page rounded-5" style="background-color: #b5b5b5; border: none">
    <aside>
    <h2><a href="${link}" class="link-secondary" style="text-decoration: none;">${title.rendered}</a></h2>
    </aside>
    <hr>
    <article>${content.rendered}</article>
    <hr>
    <time datetime="${date}">Made: ${dateFormat}</time>
    </section>
    `;
}
