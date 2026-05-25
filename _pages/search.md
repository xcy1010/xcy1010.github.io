---
layout: default
title: "Search"
permalink: /search/
author_profile: true
search_page: true
---

<section class="blog-search" data-search-index="{{ '/search.json' | relative_url }}">
  <header class="blog-search__header">
    <h1>Search</h1>
  </header>

  <form class="blog-search__form" role="search">
    <label class="visually-hidden" for="blog-search-input">Search posts</label>
    <input id="blog-search-input" type="search" placeholder="Search posts" autocomplete="off">
    <button type="submit">Search</button>
  </form>

  <p class="blog-search__status" id="blog-search-status" aria-live="polite"></p>
  <div class="blog-search__results" id="blog-search-results"></div>

  <noscript>
    <p>JavaScript is required for search. You can browse posts from the <a href="{{ '/archive/' | relative_url }}">Archive</a>.</p>
  </noscript>
</section>
