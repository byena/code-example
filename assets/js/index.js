document.querySelectorAll('.nav-block').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-block').forEach(block => {
      block.classList.remove('active');
    });
    this.classList.toggle('active');
  });
});

function loadContent(section) {
  fetch(`/${section}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('dynamic-section').innerHTML = html;
      document.getElementById('dynamic-content').innerHTML = html;
    })
    .catch(error => console.error('Ошибка загрузки контента:', error));
}

document.querySelectorAll('.nav-block a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionName = this.getAttribute('href').slice(1);
    loadContent(sectionName);
  });
});

document.querySelectorAll('.nav-block').forEach(block => {
  block.addEventListener('click', function() {
    const sectionName = this.querySelector('a').getAttribute('href').slice(1);
    loadContent(sectionName);
  });
});