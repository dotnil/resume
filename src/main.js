import data from './data.json'

function createContact({ name, title, email, github }) {
  return `
    <div class="resume__contacts">
      <h1 class="resume__contacts-name">${name}</h1>
      <h2 class="resume__contacts-title">${title}</h2>
      <p class="resume__contacts-link">
        <img class="resume__contacts-icon" src="/assets/icons/github.svg" alt="GitHub" />
        <a href="https://github.com/${github}" target="_blank" rel="noopener">github.com/${github}</a>
      </p>
      <p class="resume__contacts-link">
        <img class="resume__contacts-icon" src="/assets/icons/envelope.svg" alt="Email" />
        <a href="mailto:${email}">${email}</a>
      </p>
    </div>
  `
}

function createSummary(text) {
  return `<p class="resume__summary">${text.replace(/\n/g, '<br>')}</p>`
}

function createProjects(projects) {
  return `
    <div class="resume__projects">
      ${projects.map(project => `
        <div class="resume__projects-item">
          <a class="resume__projects-link" href="${project.url}" target="_blank" rel="noopener">
            <span>${project.name}</span>
            <img class="resume__projects-img" src="/assets/img/${project.image}" alt="${project.name} preview" loading="lazy" />
          </a>
        </div>
      `).join('')}
    </div>
  `
}

// Рендерим всё в #app
document.querySelector('#app').innerHTML = `
  <div class="resume">
    ${createContact(data)}
    ${createSummary(data.summary)}
    ${createProjects(data.projects)}
  </div>
`
