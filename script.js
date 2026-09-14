document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
      });
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('fname').value.trim();
      status.textContent = name
        ? 'Dhanyavaad, ' + name + ' — our counsellor will call you within one working day.'
        : 'Thanks — our counsellor will call you within one working day.';
      form.reset();
    });
  }

  // Highlight the active section link on scroll
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('#navList a');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.style.borderBottomColor = link.getAttribute('href') === '#' + entry.target.id
              ? '#E2A23B'
              : 'transparent';
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }
});
