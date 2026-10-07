/* Renderuje obsah z js/data.js – sem bežne nemusíš siahať. */

const $ = (s) => document.querySelector(s);
let activeFilter = "Všetko";
let searchQuery = "";

// ---------- HERO + O MNE + KONTAKT (statické texty) ----------
function renderProfile() {
  $("#logo").textContent = "‹" + PROFILE.name.split(" ")[0].toLowerCase() + "/›";
  $("#heroHi").textContent = PROFILE.hi;
  $("#heroName").textContent = PROFILE.name;
  $("#heroRole").textContent = PROFILE.role;
  $("#heroDesc").textContent = PROFILE.desc;
  $("#aboutText").textContent = PROFILE.about;
  $("#aboutNow").textContent = PROFILE.now;
  $("#aboutFacts").innerHTML = PROFILE.facts.map((f) => `<li>${f}</li>`).join("");
  $("#contactText").textContent = CONTACT.text;
  $("#footerText").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · postavené v čistom HTML/CSS/JS`;

  $("#heroCode").textContent =
`const dev = {
  meno: "${PROFILE.name}",
  rola: "${PROFILE.role}",
  stack: ["HTML", "CSS", "JS"],
  uciSa: true,
  otvorenySpolupraci: true
};`;

  const socials = [
    ["GitHub", PROFILE.github],
    ["LinkedIn", PROFILE.linkedin],
    ["E-mail", "mailto:" + PROFILE.email],
  ].filter(([, url]) => url && url !== "#");
  $("#heroSocial").innerHTML = socials
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  $("#contactList").innerHTML = `
    <li>✉️ <a href="mailto:${PROFILE.email}">${PROFILE.email}</a></li>
    <li>💻 <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a></li>
    <li>🔗 <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>`;
}

// ---------- SKILLS ----------
function renderSkills() {
  $("#skillsGrid").innerHTML = SKILLS.map(
    (s) => `<div class="skill-card"><h3>${s.category}</h3><ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`
  ).join("");
}

// ---------- PROJEKTY ----------
function allTags() {
  const set = new Set();
  PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return ["Všetko", ...[...set].sort()];
}

function renderFilters() {
  $("#filters").innerHTML = allTags()
    .map((t) => `<button class="${t === activeFilter ? "active" : ""}" data-tag="${t}">${t}</button>`)
    .join("");
  document.querySelectorAll("#filters button").forEach((b) =>
    b.addEventListener("click", () => {
      activeFilter = b.dataset.tag;
      renderFilters();
      renderProjects();
    })
  );
}

function filteredProjects() {
  return PROJECTS.filter((p) => {
    const matchTag = activeFilter === "Všetko" || p.tags.includes(activeFilter);
    const q = searchQuery.toLowerCase();
    const matchQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.join(" ").toLowerCase().includes(q);
    return matchTag && matchQ;
  });
}

function linkBtn(label, url) {
  if (!url || url === "#") return "";
  return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
}

function renderProjects() {
  const list = filteredProjects();
  $("#projectCount").textContent = `(${list.length}/${PROJECTS.length})`;
  $("#emptyState").classList.toggle("hidden", list.length > 0);
  $("#projectsGrid").innerHTML = list
    .map(
      (p, i) => `
    <article class="card">
      <span class="status">${p.status}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="card-links">
        <button data-detail="${PROJECTS.indexOf(p)}">Detail</button>
        ${linkBtn("Demo ↗", p.demo)}
        ${linkBtn("Kód ↗", p.code)}
      </div>
    </article>`
    )
    .join("");

  document.querySelectorAll("[data-detail]").forEach((b) =>
    b.addEventListener("click", () => openModal(PROJECTS[+b.dataset.detail]))
  );
}

// ---------- MODAL ----------
function openModal(p) {
  $("#modalBody").innerHTML = `
    <span class="status">${p.status}</span>
    <h3 style="margin-top:.6rem">${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags" style="margin-top:.6rem">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    ${(p.details?.length ? `<ul>${p.details.map((d) => `<li>${d}</li>`).join("")}</ul>` : "")}
    <div class="card-links">${linkBtn("Demo ↗", p.demo)} ${linkBtn("Kód ↗", p.code)}</div>`;
  $("#modal").classList.remove("hidden");
}
function closeModal() { $("#modal").classList.add("hidden"); }

// ---------- SKÚSENOSTI ----------
function renderExperience() {
  $("#timeline").innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="timeline-item">
      <div class="date">${e.date}</div>
      <h3>${e.role} · ${e.company}</h3>
      <ul>${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    </div>`
  ).join("");
}

// ---------- EVENTS ----------
function initEvents() {
  $("#searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  $("#navToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  document.querySelectorAll("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => $("#navLinks").classList.remove("open"))
  );
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Správa z portfólia od ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}

// ---------- START ----------
renderProfile();
renderSkills();
renderFilters();
renderProjects();
renderExperience();
initEvents();
