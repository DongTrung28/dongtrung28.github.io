/* Shared behaviour: theme toggle, mobile nav, scroll reveal, BibTeX copy, blog/news rendering. */
(function () {
  var root = document.documentElement;

  // ── Theme toggle (initial theme is set inline in <head> to avoid a flash)
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // ── Mobile nav
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.topbar__nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ── BibTeX copy buttons
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.parentElement.querySelector('pre').innerText;
      navigator.clipboard.writeText(code).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    });
  });

  // ── Blog + home news (data lives in assets/js/posts.js)
  var posts = (window.POSTS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var base = document.body.getAttribute('data-base') || '';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function linkify(s) {
    return esc(s)
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|\s)#(\w+)/g, '$1<span style="color:var(--accent)">#$2</span>');
  }
  function fmtDate(d, short) {
    var dt = new Date(d + 'T12:00:00');
    return dt.toLocaleDateString('en-US', short ? { month: 'short', year: 'numeric' } : { month: 'long', day: 'numeric', year: 'numeric' });
  }

  var newsEl = document.getElementById('news-list');
  if (newsEl && posts.length) {
    newsEl.innerHTML = posts.slice(0, 6).map(function (p) {
      return '<li><time datetime="' + p.date + '">' + fmtDate(p.date, true) + '</time><div>' +
        (p.tags && p.tags[0] ? '<span class="news-tag">' + esc(p.tags[0]) + '</span>' : '') +
        esc(p.summary || p.title) +
        ' <a href="' + base + 'blog/#' + p.id + '">Read&nbsp;→</a></div></li>';
    }).join('');
  }

  var blogEl = document.getElementById('posts');
  if (blogEl) {
    var filtersEl = document.getElementById('filters');
    var allTags = [];
    posts.forEach(function (p) { (p.tags || []).forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); }); });

    function render(tag) {
      var list = tag ? posts.filter(function (p) { return (p.tags || []).indexOf(tag) >= 0; }) : posts;
      if (!list.length) { blogEl.innerHTML = '<p class="empty">No posts yet — check back soon.</p>'; return; }
      blogEl.innerHTML = list.map(function (p) {
        return '<article class="post reveal is-in" id="' + p.id + '">' +
          '<div class="post__head"><img src="' + base + 'headshot.jpeg" alt="">' +
          '<div><div class="post__who">Trung Tien Dong</div><div class="post__meta">' + fmtDate(p.date) +
          (p.via ? ' · <i class="fas fa-retweet"></i> reposted from ' + esc(p.via) : '') + '</div></div>' +
          (p.url ? '<a class="post__src" href="' + p.url + '" target="_blank" rel="noopener" aria-label="View on LinkedIn"><i class="fab fa-linkedin"></i></a>' : '') +
          '</div>' +
          (p.title ? '<h2 class="post__title">' + esc(p.title) + '</h2>' : '') +
          '<div class="post__body' + (p.body.length > 700 ? ' is-clamped' : '') + '">' + linkify(p.body) + '</div>' +
          (p.body.length > 700 ? '<button class="post__more">Show more</button>' : '') +
          (p.image ? '<div class="post__media"><img src="' + base + p.image + '" alt="" loading="lazy"></div>' : '') +
          (p.images ? '<div class="post__gallery">' + p.images.map(function (src) {
            return '<a href="' + base + src + '" target="_blank"><img src="' + base + src + '" alt="" loading="lazy"></a>';
          }).join('') + '</div>' : '') +
          '<div class="post__foot">' + (p.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
          (p.url ? '<a class="orig" href="' + p.url + '" target="_blank" rel="noopener">View on LinkedIn →</a>' : '') +
          '</div></article>';
      }).join('');
    }

    if (filtersEl && allTags.length) {
      filtersEl.innerHTML = '<button class="is-active" data-tag="">All</button>' +
        allTags.map(function (t) { return '<button data-tag="' + esc(t) + '">' + esc(t) + '</button>'; }).join('');
      filtersEl.addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') return;
        filtersEl.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
        e.target.classList.add('is-active');
        render(e.target.getAttribute('data-tag'));
      });
    }
    blogEl.addEventListener('click', function (e) {
      if (!e.target.classList.contains('post__more')) return;
      var body = e.target.previousElementSibling;
      var open = body.classList.toggle('is-clamped');
      e.target.textContent = open ? 'Show more' : 'Show less';
    });
    render('');
    if (location.hash) { var t = document.querySelector(location.hash); if (t) t.scrollIntoView(); }
  }

  // ── Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-in'); });
  }
})();
