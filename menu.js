// Функція для обрізання тексту
function truncateText(text, limit) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

// Дані про всі статті
const articles = {
  1: {
    title: "Що таке SEO та як його оптимізувати",
    content: "SEO (Search Engine Optimization) — це набір стратегій та технік для покращення видимості вебсайту в пошукових системах (Google, Bing). Мета оптимізації SEO — підвищити рейтинг сайту, щоб більше користувачів могли знайти його через пошук, що збільшує трафік, конверсії та популярність.",
  },
  2: {
    title: "Найпопулярніші спорт-тренди у 2024 році",
    content: "Фітнес на основі технологій: Використання носимих пристроїв, віртуальних тренерів та додатків для відстеження тренувань продовжить набирати популярність.",
  },
  3: {
    title: "Швидкі та прості способи підвищити лайки в інстаграм",
    content: "Публікуйте якісні фото та відео: Використовуйте гарне освітлення, цікаві ракурси та яскраві кольори. Оптимальний час публікацій: Розміщуйте контент, коли ваша аудиторія найбільш активна.",
  },
};

// Головна функція створення меню
export function createTopMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="top-menu">
        <ul>
          <li class="logo-item">
            <a href="#" data-page="home">
              <div class="logo-text-wrapper">
                <img src="Strong-Media-logo-v4.png" class="logo" alt="Home">
                <span class="logo-text">Strong Media</span>
              </div>
            </a>
          </li>
          <li><a href="#" data-page="about-us">Про нас</a></li>
          <li><a href="#" data-page="contact">Контакти</a></li>
          <li><a href="#" data-page="blog">Блог</a></li>
        </ul>
      </div>
      `
    );

    const menuLinks = document.querySelectorAll(".top-menu a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const page = this.getAttribute("data-page");
        loadPage(page);
      });
    });
  });
}

// Завантаження сторінки
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
    blog: generateBlogPage(),
  };

  if (pages[page]) {
    document.querySelector(".content").innerHTML = pages[page];
    history.pushState({ page }, "", `#${page}`);

    if (page === "blog") {
      const previews = document.querySelectorAll(".post-preview");
      previews.forEach((preview) => {
        preview.addEventListener("click", (e) => {
          const postId = e.currentTarget.getAttribute("data-post");
          loadPost(postId);
        });
      });
    }
  } else {
    document.querySelector(".content").innerHTML =
      "<p>Page not found. Please try again.</p>";
  }
}

// Генерація сторінки блогу
function generateBlogPage() {
  let blogHTML = `<h1>Блог</h1><div class="blog-posts">`;
  for (const [id, article] of Object.entries(articles)) {
    blogHTML += `
      <div class="post-preview" data-post="${id}">
        <h2>${article.title}</h2>
        <p>${truncateText(article.content, 150)}</p>
      </div>
    `;
  }
  blogHTML += `</div>`;
  return blogHTML;
}

// Завантаження повної статті
function loadPost(postId) {
  const article = articles[postId];
  if (article) {
    document.querySelector(".content").innerHTML = `
      <h1>${article.title}</h1>
      <p>${article.content}</p>
    `;
    history.pushState({ postId }, "", `#blog/${postId}`);
  } else {
    document.querySelector(".content").innerHTML =
      "<p>Article not found. Please try again.</p>";
  }
}

window.addEventListener("popstate", (event) => {
  const page = event.state?.page || "home";
  const postId = event.state?.postId;
  if (postId) {
    loadPost(postId);
  } else {
    loadPage(page);
  }
});

createTopMenu();
