---
layout: default
title: "Categories"
permalink: /categories/
author_profile: true
---

<section class="taxonomy-index">
  <header class="taxonomy-index__header">
    <h1>Categories</h1>
  </header>

  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    {% assign category_name = category[0] %}
    {% assign posts = category[1] %}
    <section class="taxonomy-section" id="{{ category_name | slugify }}">
      <h2>{{ category_name }} <span>{{ posts.size }}</span></h2>
      <ol class="taxonomy-posts">
        {% for post in posts %}
          <li>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ol>
    </section>
  {% endfor %}
</section>
