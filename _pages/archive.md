---
layout: default
title: "Archive"
permalink: /archive/
author_profile: true
---

<section class="archive-index">
  <header class="archive-index__header">
    <h1>Archive</h1>
  </header>

  {% assign current_year = "" %}
  {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post_year != current_year %}
      {% unless forloop.first %}
        </ol>
      </section>
      {% endunless %}
      <section class="archive-year" id="{{ post_year }}">
        <h2>{{ post_year }}</h2>
        <ol class="archive-posts">
      {% assign current_year = post_year %}
    {% endif %}

    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>

    {% if forloop.last %}
        </ol>
      </section>
    {% endif %}
  {% else %}
    <p class="archive-index__empty">No posts yet.</p>
  {% endfor %}
</section>
