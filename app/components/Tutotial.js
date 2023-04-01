export function Tutorial() {

  const d = document,
    $template = d.createElement("div");
  $template.id = "btn-template";
  setTimeout(() => {
    let { hash } = location;

    if (!hash || hash === "#/") {
      // console.log("home page");
      $template.innerHTML = $home;
    } else if (hash.includes("#/search")) {
      // console.log("search page");
      $template.innerHTML = $search;
    } else if (hash === "#/contacto") {
      // console.log("contact page");
      $template.innerHTML = $contact;
    } else {
      // console.log("post page");
      $template.innerHTML = $post;
    }

    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }, 100);

  const $home = `
  <button id="myBtn" class = "btn btn-warning btn-floating btn-lg"><img src="app/assets/favicontutorial.png"></button>

  <div id="myModal" class="modal" style="margin: auto;">
      <div class="modal-content p-2 w-50" style="margin: auto;">
        <span class="close">&times;</span>
        <div class="modal-header text-center" style="margin: auto;">
          <h5 class="modal-title fw-bold">Wellcome to my SPA with Wordpress REST API Project!</h5>
        </div>
        <div class="modal-body">
          <p>So many fancy words for a title!</p>
          <p>
            This project was done to show my abilities working with a REST API in vanilla JavaScript.And also the handling of the library Bootstrap as the knowledge of vanilla CSS.
          </p>
          <p>Make sure to click this icon on the other sections of the page to see some of the notes that I left.</p>
        </div>
        <div class="modal-footer">
          <p>You can close this by using the "&times;" button or clicking outside this card.</p>
        </div>
      </div>
  </div>
  `;

  const $search = `
  <button id="myBtn" class = "btn btn-warning btn-floating btn-lg"><img src="app/assets/favicontutorial.png"></button>

  <div id="myModal" class="modal" style="margin: auto;">
      <div class="modal-content p-2 w-50" style="margin: auto;">
        <span class="close">&times;</span>
        <div class="modal-header text-center" style="margin: auto;">
          <h5 class="modal-title fw-bold">Look at that search component!</h5>
        </div>
        <div class="modal-body">
          <p>So how does it work?</p>
          <p>
            When you make a search, the keywords used will be stored in your Local Storage
            for later sessions. Just quit the page! Next time you come back everything will
            be the way you leave it. Unless you delete your history. I can't do magic... Yet...
          </p>
          <p>Wanna see? Go to the "Application" in your developer tools and look at the "wpSearch"
          property (It won't appear until you make a search).
          </p>
        </div>
        <div class="modal-footer">
          <p></p>
        </div>
      </div>
  </div>
  `;

  const $post = `
  <button id="myBtn" class = "btn btn-warning btn-floating btn-lg"><img src="app/assets/favicontutorial.png"></button>

  <div id="myModal" class="modal" style="margin: auto;">
      <div class="modal-content p-2 w-50" style="margin: auto;">
        <span class="close">&times;</span>
        <div class="modal-header text-center" style="margin: auto;">
          <h5 class="modal-title fw-bold">The post component</h5>
        </div>
        <div class="modal-body">
          <p>
            The whole project was made to be reactive. This way the computer loads this project
            one time and the rest is called to the Wordpress API with asynchronous functions.
          </p>
          <p>
            The point of this project is to show you my knowledge manipulating the restful
            API of Wordpress and libraries such as Bootstrap.
          </p>
        </div>
        <div class="modal-footer">
          <p>I also used another API: FormSubmit. Check the contact page for more info!</p>
        </div>
      </div>
  </div>
  `;

  const $contact = `
  <button id="myBtn" class = "btn btn-warning btn-floating btn-lg"><img src="app/assets/favicontutorial.png"></button>

  <div id="myModal" class="modal" style="margin: auto;">
      <div class="modal-content p-2 w-50" style="margin: auto;">
        <span class="close">&times;</span>
        <div class="modal-header text-center" style="margin: auto;">
          <h5 class="modal-title fw-bold">Contact Form component</h5>
        </div>
        <div class="modal-body">
          <p class="text-center">Powered by <a href="https://formsubmit.co/" target="_blank" rel="noopener">Form Submit!</a></p>
          <p>
            I used this library because is the easiest and safest way to show the usage of a contact formulary.
            You need to complete the form (each input is pattern sensitive, so make sure to fill it correctly)
            with your email.
          </p>
          <p>
            The first time you submit the form, check your inbox/spam for an email from FormSubmit.
            After you authorised you email, the form you sent will appear in your inbox! 💌
          </p>
        </div>
        <div class="modal-footer">
          <p>
            Remember:<br>
            1- Authorise 📑<br>
            2- Check your inbox 💌
          </p>
        </div>
      </div>
  </div>
  `;

  return $template;
}
