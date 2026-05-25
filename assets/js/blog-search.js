(function () {
  var root = document.querySelector(".blog-search");
  var input = document.getElementById("blog-search-input");
  var results = document.getElementById("blog-search-results");
  var status = document.getElementById("blog-search-status");
  var form = document.querySelector(".blog-search__form");

  if (!root || !input || !results || !status || !form) {
    return;
  }

  var posts = [];
  var ready = false;
  var indexUrl = root.getAttribute("data-search-index") || "/search.json";

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function tokenize(query) {
    return normalize(query).split(/\s+/).filter(Boolean);
  }

  function scorePost(post, terms) {
    var title = normalize(post.title);
    var meta = normalize([].concat(post.categories || [], post.tags || []).join(" "));
    var body = normalize([post.excerpt, post.content].join(" "));
    var score = 0;

    terms.forEach(function (term) {
      if (title.indexOf(term) !== -1) score += 8;
      if (meta.indexOf(term) !== -1) score += 4;
      if (body.indexOf(term) !== -1) score += 1;
    });

    return score;
  }

  function render(matches, query) {
    if (!query) {
      status.textContent = "";
      results.innerHTML = "";
      return;
    }

    if (!ready) {
      status.textContent = "Loading posts...";
      results.innerHTML = "";
      return;
    }

    if (matches.length === 0) {
      status.textContent = "No posts found.";
      results.innerHTML = "";
      return;
    }

    status.textContent = matches.length + (matches.length === 1 ? " post found." : " posts found.");
    results.innerHTML = matches.map(function (post) {
      var tags = [].concat(post.categories || [], post.tags || []).slice(0, 4);
      return [
        '<article class="blog-search-result">',
        '<time datetime="' + escapeHtml(post.date) + '">' + escapeHtml(post.date) + '</time>',
        '<h2><a href="' + escapeHtml(post.url) + '">' + escapeHtml(post.title) + '</a></h2>',
        post.excerpt ? '<p>' + escapeHtml(post.excerpt) + '</p>' : "",
        tags.length ? '<div class="blog-search-result__tags">' + tags.map(function (tag) {
          return "<span>" + escapeHtml(tag) + "</span>";
        }).join("") + "</div>" : "",
        "</article>"
      ].join("");
    }).join("");
  }

  function runSearch() {
    var query = input.value.trim();
    var terms = tokenize(query);

    if (terms.length === 0) {
      render([], "");
      return;
    }

    var matches = posts.map(function (post) {
      return {
        post: post,
        score: scorePost(post, terms)
      };
    }).filter(function (item) {
      return item.score > 0;
    }).sort(function (a, b) {
      return b.score - a.score || normalize(a.post.title).localeCompare(normalize(b.post.title));
    }).map(function (item) {
      return item.post;
    });

    render(matches, query);
  }

  fetch(indexUrl, { credentials: "same-origin" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Search index failed to load.");
      }
      return response.json();
    })
    .then(function (data) {
      posts = Array.isArray(data) ? data : [];
      ready = true;
      runSearch();
    })
    .catch(function () {
      ready = true;
      status.textContent = "Search is unavailable.";
    });

  input.addEventListener("input", runSearch);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    runSearch();
  });
})();
