export function ContactForm() {
  const d = document,
    $form = d.createElement("form"), //For nodes use "appendChild", not "innerHTML"
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
  .contact-form {
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    width: 50rem;
  }

  .contact-form > * {
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
  }

  .contact-form textarea {
    resize: none;
  }

  .contact-form legend,
  .contact-form-response {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    font-family: sans-serif;
  }

  .contact-form input[type="submit"] {
    width: 50%;
    font-weight: bold;
    cursor: pointer;
  }
  .contact-form *::placeholder {
    color: #000;
  }

  .contact-form [required]:valid {
    border: thin solid #4caf50;
  }

  .contact-form-error {
    margin-top: 1rem;
    font-size: 80%;
    background-color: rgb(255, 0, 0);
    color: #fff;
    transition: all 800ms ease;
  }

  .contact-form-error.is-active {
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
  }

  .contact-form-loader {
    text-align: center;
  }

  .none {
    display: none;
  }

  @keyframes show-message {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  `;

  // To JavaScript, the char "\" is a special char, to solve this issue use "\\"
  $form.innerHTML = `
    <legend class="text-light">Send us an email!</legend>
      <input
        type="text"
        name="name"
        placeholder="Your name..."
        title="Only use letters and spaces."
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
        required
      />
      <input
        class="email"
        type="email"
        name="email"
        placeholder="Your email..."
        title='Type a valid email like "imaduck@cuack.com".'
        pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject..."
        title="Subject is required."
        required
      />
      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Type your message..."
        title="Your message cannot exceed 255 characters."
        data-pattern="^.{1,255}$"
        required
      ></textarea>
      <input class="btn-warning w-25" type="submit" value="Submit" />
      <div class="contact-form-loader none">
        <img src="app/assets/loader.svg" alt="Cargando" />
      </div>
      <div class="contact-form-response none text-light">
        <p>Form sended! Check your email!</p>
      </div>
    `;

  function validationsForm() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;

        if (pattern && $input.value !== "") {
          //console.log("input has patern");
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }

        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    d.addEventListener("submit", (e) => {
      e.preventDefault();
      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      let email = d.querySelector(".email").value;
      // console.log(email); It wooooooorks :D

      fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          //console.log(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p class="text-light">${json.message}<br>Check your email!</p>`;
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message = err.statusText || "An error happened, try again!";
          $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none"), ($response.innerHTML = "");
          }, 6000);
        });
    });
  }

  //Using a setTimeout prevents interactive errors with dinamic elements (100 milliseconds are enough)
  setTimeout(() => {
    validationsForm();
  }, 100);

  return $form;
}
