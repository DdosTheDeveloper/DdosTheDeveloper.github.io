export function createTopMenu() {
  document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="top-menu">
        <ul>
          <li><a href="index.html"><img src='Strong-Media-logo-v4.png' class="logo"></a></li>
          <li><a href="contact.html">Контакти</a></li>
        </ul>
      </div>
    `);
  });
}

createTopMenu();
