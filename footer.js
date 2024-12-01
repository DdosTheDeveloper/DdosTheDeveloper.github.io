export function createFooter() {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.insertAdjacentHTML(
        "beforeend",
        `
        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <img src="Strong-Media-logo-v7.jpeg" alt="Strong Media Logo">
            </div>
            <div class="footer-contact">
              <h3>Контакти</h3>
              <p>Імейл: support@example.com</p>
              <p>Телефон: +380 99 60 94 748</p>
            </div>
            <div class="footer-social">
              <h3>Соціальні мережі</h3>
              <a href="https://www.instagram.com" target="_blank">Інстаграм</a>
              <a href="https://www.facebook.com" target="_blank">Фейсбук</a>
            </div>
          </div>
        </footer>
      `
      );
    });
  }
  
  createFooter();