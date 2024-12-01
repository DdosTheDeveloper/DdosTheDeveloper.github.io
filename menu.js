export function createTopMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="top-menu">
        <ul>
          <li><a href="#" data-page="home">Home</a></li>
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
  // Define the content for each page
  const pages = {
    home: `
      <h1>Розширення спортзалу завдяки соціальним мережам - це наша спеціалізація</h1>
      <p>Навідмінну від конкурентів, спортзали - це наша спеціалізація</p>
    `,
    contact: `
      <h1>Наші контакти</h1>
      <p>Імейл: support@example.com</p>
      <p>Телефон: +380 99 60 94 748</p>
      <p>Інстаграм: @example</p>
      <p>Фейсбук: example</p>
    `,
  };

  // Check if the requested page exists
  if (pages[page]) {
    document.querySelector(".content").innerHTML = pages[page];
  } else {
    document.querySelector(".content").innerHTML =
      "<p>Page not found. Please try again.</p>";
  }
}


window.addEventListener("popstate", (event) => {
  const page = event.state?.page || "home";
  loadPage(page);
})
createTopMenu();
