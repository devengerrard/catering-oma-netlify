document.addEventListener("DOMContentLoaded", function () {
  // Check login state from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  
  // Dynamic header updates
  const navMenu = document.getElementById("nav-menu");
  if (navMenu && user) {
    const loginLink = document.getElementById("nav-login");
    const regLink = document.getElementById("nav-register");
    if (loginLink) loginLink.style.display = "none";
    if (regLink) regLink.style.display = "none";
    
    if (!document.getElementById("nav-user-menu")) {
      const userSpan = document.createElement("a");
      userSpan.id = "nav-user-menu";
      userSpan.href = "/menu.html";
      userSpan.textContent = "Menu (" + user.username + ")";
      navMenu.appendChild(userSpan);
      
      const logoutBtn = document.createElement("a");
      logoutBtn.href = "#";
      logoutBtn.textContent = "Keluar";
      logoutBtn.onclick = function(e) {
        e.preventDefault();
        localStorage.removeItem("user");
        window.location.href = "/index.html";
      };
      navMenu.appendChild(logoutBtn);
    }
  }

  // Handle Login Form Submission
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const errorDiv = document.getElementById("login-error");
      
      try {
        const res = await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username })
        });
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/menu.html";
        } else {
          errorDiv.textContent = data.message || "Gagal masuk.";
          errorDiv.style.display = "block";
        }
      } catch (err) {
        // Fallback login for static preview
        localStorage.setItem("user", JSON.stringify({ username: username, role: "customer" }));
        window.location.href = "/menu.html";
      }
    });
  }

  // Handle Menu Data Load
  const menuGrid = document.getElementById("menu-grid");
  if (menuGrid) {
    fetch("/api/menu")
      .then(res => res.json())
      .then(data => {
        menuGrid.innerHTML = data.map(m => `
          <article class="card">
            <div class="tile ${m.taste}">
              <span class="t-name">${m.taste}</span>
              <span class="t-price">Rp ${m.price.toLocaleString("id-ID")}/porsi</span>
            </div>
            <div class="body">
              <h3>${m.name}</h3>
              <p class="muted">${m.description}</p>
            </div>
          </article>
        `).join("");
      })
      .catch(() => {
        menuGrid.innerHTML = "<p>Gagal memuat menu dari server API.</p>";
      });
  }
});
