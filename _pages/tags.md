---
layout: default
title: "Tags"
permalink: /tags/
author_profile: true
---

<section class="taxonomy-index">
  <header class="taxonomy-index__header">
    <h1>Tags</h1>
  </header>

  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    {% assign tag_name = tag[0] %}
    {% assign posts = tag[1] %}
    <section class="taxonomy-section" id="{{ tag_name | slugify }}">
      <h2>{{ tag_name }} <span>{{ posts.size }}</span></h2>
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
