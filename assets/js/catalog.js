/* Product catalog: sidebar category filter + 12-per-page pagination (static, no backend) */
(function () {
  var PAGE_SIZE = 12;

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('prodGrid');
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.prod-card'));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.cat-nav-link'));
    var pagination = document.getElementById('prodPagination');
    var emptyNote = document.getElementById('prodEmpty');

    var currentFilter = 'all';
    var currentPage = 1;

    // Initial filter from location hash (e.g. page.html#scrubber-dryer)
    var initHash = (location.hash || '').replace('#', '');
    if (initHash && navLinks.some(function (l) { return l.getAttribute('data-filter') === initHash; })) {
      currentFilter = initHash;
    }

    function filteredCards() {
      if (currentFilter === 'all') return cards;
      return cards.filter(function (c) { return c.getAttribute('data-cat') === currentFilter; });
    }

    function render() {
      // Sync active highlight
      navLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('data-filter') === currentFilter);
      });
      var list = filteredCards();
      var totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
      if (currentPage > totalPages) currentPage = totalPages;

      var start = (currentPage - 1) * PAGE_SIZE;
      var pageItems = list.slice(start, start + PAGE_SIZE);

      cards.forEach(function (c) { c.style.display = 'none'; });
      pageItems.forEach(function (c) { c.style.display = ''; });

      // Empty state
      if (emptyNote) emptyNote.style.display = list.length ? 'none' : '';

      // Pagination
      if (!pagination) return;
      pagination.innerHTML = '';
      if (totalPages <= 1) return;

      function btn(label, page, opts) {
        opts = opts || {};
        var b = document.createElement('button');
        b.className = 'page-num' + (opts.active ? ' active' : '') + (opts.disabled ? ' disabled' : '');
        b.innerHTML = label;
        if (opts.disabled) {
          b.setAttribute('disabled', 'disabled');
        } else {
          b.addEventListener('click', function () {
            currentPage = page;
            render();
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
        return b;
      }

      pagination.appendChild(btn('&laquo; Prev', currentPage - 1, { disabled: currentPage === 1 }));
      for (var p = 1; p <= totalPages; p++) {
        pagination.appendChild(btn(String(p), p, { active: p === currentPage }));
      }
      pagination.appendChild(btn('Next &raquo;', currentPage + 1, { disabled: currentPage === totalPages }));
    }

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
        currentFilter = link.getAttribute('data-filter');
        currentPage = 1;
        render();
      });
    });

    render();

    // Accordion: expand one first-level group at a time; click again to collapse
    document.querySelectorAll('.cat-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.closest('.cat-group');
        var willOpen = !group.classList.contains('open');
        document.querySelectorAll('.cat-group').forEach(function (g) {
          g.classList.remove('open');
          var t = g.querySelector('.cat-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (willOpen) {
          group.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();
