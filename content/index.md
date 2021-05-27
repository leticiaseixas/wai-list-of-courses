---
# NEW: Comments for new repos start with "NEW". Please delete the NEW comments. Leave the other comments for translators. Also, search for @@s to replace. For multi-page resources and other frontmatter info, see: https://wai-website-theme.netlify.app/writing/frontmatter/

# Translation instructions are after the "#" character in this first section. They are comments that do not show up in the web page. You do not need to translate the instructions after #.
# In this first section, do not translate the words before a colon. For example, do not translate "title:". Do translate the text after "title:".

title: "List of courses"
lang: en
last_updated: 2021-@@-@@   # Put the date of this translation YYYY-MM-DD (with month in the middle)

doc-note-type: draft
layout: list-with-filters

# translators:    # remove from the beginning of this line and the lines below: "# " (the hash sign and the space)
# - name: "Jan Doe"   # Replace Jan Doe with translator name
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple translators
# contributors:
# - name: "Jan Doe"   # Replace Jan Doe with contributor name, or delete this line if none
# - name: "Jan Doe"   # Replace Jan Doe with name, or delete this line if not multiple contributors

github:
  repository: leticiaseixas/wai-list-of-courses
  path: content/index.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /list-of-courses/   # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr

# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /path/to/previous/file/
  # next: /path/to/next/file/
# @@SLH To Do: figure out if need to add lang here, too, and if this replaces "order" from older resources?

ref: /   # Translators, do not change this
changelog: /@@/changelog/
acknowledgements: /@@/acknowledgements/  # NEW: delete if don"t have a separate acknowledgements page. And delete it in the footer below.
license: creative-commons   # NEW: delete if not creative-commons

description:  # NEW: add a 150ish-character-description for social media   # translate the description
image: /content-images/wai-@@repo/social.png  # NEW: image for social media
feedbackmail: wai@w3.org  # NEW: delete this line if it’s an EOWG resource (the default is wai-eo-editors@w3.org)

# NEW: Footer below has several options, and not all will be relevant for specific pages. (Ask Shawn if questions.)

# In the footer below:
# Do not translate or change CHANGELOG or ACKNOWLEDGEMENTS.
# Translate the other words below, including "Date:" and "Editor:"
# Translate the Working Group name. Leave the Working Group acronym in English.
# Do not change the dates in the footer below.
footer: >
   <p><strong>Date:</strong> Updated @@ Month 2021. First published Month 20@@. CHANGELOG.</p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href="https://www.w3.org/groups/wg/@@wg/participants">participants of the @@WG</a>. ACKNOWLEDGEMENTS lists contributors and credits.</p>
   <p>Developed by the @@ Working Group (<a href="http://www.w3.org/WAI/@@/">@@WG</a>). Developed as part of the <a href="https://www.w3.org/WAI/@@/">WAI-@@ project</a>, @@co-funded by the European Commission.</p>

---


<style> 
{% include css/styles.css %}
</style>

<div class="header-sup">
  <p>Browse for offers.</p>
</div>

{::nomarkdown}
<a class="button button-more submit-a-offer" href="submit-an-offer"><span>Submit an offer</span></a>
 {:/}

<div id="app" class="offers">
  <form class="offers-filters" data-filter-form action="" method="POST">
    <h2 class="visuallyhidden">Filters</h2>
    {% for filter in site.data.filters %}
    <fieldset id="{{ filter.id }}">
      <legend>{{ filter.name }}</legend>
      {% for option in filter.options %}
      <div class="offers-filters__filter">
        <input type="{{ filter.type }}" id="filter-{{ option.id }}" name="{{ option.id }}">
        <label for="filter-{{ option.id }}">{{ option.name }}</label>
      </div>
      {% endfor %}
    </fieldset>
    {% endfor %} 
  </form>
  <div class="offers-offers">
    <h2 class="visuallyhidden">List of offers</h2>
    <div role="alert">
      <p class="status status-busy" hidden>Loading offers…</p>
      <p class="status status-failure" hidden>something went wrong…</p>
    </div>
    <div id="offers-list">
      <p>Showing {{ site.data.offers | size }} offers</p>
      {% for offer in site.data.offers %}
        {% include offer.liquid %}
      {% endfor %}
    </div>
  </div>
</div>