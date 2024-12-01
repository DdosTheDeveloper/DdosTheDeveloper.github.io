export function createTopMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="top-menu">
        <ul>
          <li>
            <a href="#" data-page="home">
              <img src="Strong-Media-logo-v4.png" class="logo" alt="Home">
            </a>
          </li>
          <li><a href="#" data-page="about-us">Про нас</a></li>
          <li><a href="#" data-page="contact">Контакти</a></li>
        </ul>
      </div>
    `
    );

    const menuLinks = document.querySelectorAll(".top-menu a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const page = this.getAttribute("data-page"); // Get the logical page name
        loadPage(page); // Load the page dynamically
      });
    });
  });
}

function loadPage(page) {
  const pages = {
    home: `
      <h1>Розширення спортзалу завдяки соціальним мережам - це наша спеціалізація</h1>
      <p>Навідмінну від конкурентів, спортзали - це наша спеціалізація</p>
    `,
    "about-us": `
      <h1>Про нас</h1>
      <p>Ми компанія, яка спеціалізується на просуванні спортзалів через соціальні мережі.</p>
      <p>Ціль нашого бізнесу це допомогти твоєму рости.</p>
    `,
    contact: `
      <h1>Наші контакти</h1>
      <p>Імейл: support@example.com</p>
      <p>Телефон: +380 99 60 94 748</p>
      <p>Інстаграм: @example</p>
      <p>Фейсбук: example</p>
    `,
  };

  if (pages[page]) {
    document.querySelector(".content").innerHTML = pages[page];
    history.pushState({ page }, "", `#${page}`); // Add entry to history
  } else {
    document.querySelector(".content").innerHTML =
      "<p>Page not found. Please try again.</p>";
  }
}

window.addEventListener("popstate", (event) => {
  const page = event.state?.page || "home"; // Default to home if no state
  loadPage(page);
});

createTopMenu();
