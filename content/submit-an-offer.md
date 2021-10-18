---
title: "Submit a course, training, or certification offer"
nav_title: "Submit a course, training, or certification offer"
doc-note-type: draft
lang: en   # Change "en" to the translated-language shortcode from https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
last_updated: 2021-@@-@@   # Put the date of this translation YYYY-MM-DD (with month in the middle)
github:
  repository: leticiaseixas/wai-list-of-courses
  path: content/submit-an-offer.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /list-of-courses/submit-an-offer   # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr
# NEW: 3 navigation lines below are only needed for multi-page resources where you have previous and next at the bottom. If so, un-comment them; otherwise delete these lines.
# navigation:
  # previous: /teach-advocate/course-list/@@
  # next: /teach-advocate/course-list/@@
ref: /teach-advocate/course-list/   # Translators, do not change this
changelog: /teach-advocate/course-list/changelog/  # NEW: set up a changelog so it's ready for later
acknowledgements: /teach-advocate/course-list/acknowledgements/  # NEW: delete if don't have a separate acknowledgements page. And delete it in the footer below.
description:  # NEW: add a 150ish-character-description for social media   # translate the description
# image: /content-images/wai-course-list/social.png  # NEW: image for social media (leave commented out if we don't have a specific one for this reource)
# In the footer below:
# Do not translate or change CHANGELOG or ACKNOWLEDGEMENTS.
# Translate the other words below, including "Date:" and "Editor:"
# Translate the Working Group name. Leave the Working Group acronym in English.
# Do not change the dates in the footer below.
footer: 
   <p><strong>Date:</strong> <!-- Updated @@ Month 2021.--> First published Month 20@@. CHANGELOG.</p>
   <p><strong>Editors:</strong> @@name, @@name. <strong>Contributors:</strong> @@name, @@name, and <a href="https://www.w3.org/groups/wg/eowg/participants">participants of the EOWG</a>. ACKNOWLEDGEMENTS lists contributors and credits.</p>
   <p>Developed by the Accessibility Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Developed as part of the <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP project</a>, co-funded by the European Commission.</p>
---

<div style="grid-column: 4 / span 4">

<style>
{% include css/styles.css %}
main > header { grid-column: 4 / span 4; }
</style>

<a href="../list-of-courses">Back to List of Courses</a>

<form>
  <p>The <a href="../list-of-courses">List of Courses</a> shows course, training, or certification offers on digital accessibility from different vendors, so that people can make informed decisions when they choose an offer.</p>
  <p>We'd like to display as many offers as we can, we welcome you to submit yours using this form.</p>    

<div class="field">
    <label for="offer-name">Title (required)</label>
    <input type="text" id="offer-name" required>
</div>

<div class="field">
    <label for="offer-description">Description (required)</label>
    <p class="expl">Provide a brief description of you offer.</p>
    <textarea id="offer-description" required></textarea>
</div>

<fieldset class="field" id="offer-type">
  <legend class="label">Type (required)</legend>
  <p class="expl">Indicate the type of the offer.</p>

  <div class="radio-field">
    <input type="radio" name="offer-type" id="offer-type-graduate" required>
    <label for="offer-type-graduate">Graduate program</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-type" id="offer-type-undergraduate">
    <label for="offer-type-undergraduate">Undergraduate program</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-type" id="offer-type-training">
    <label for="offer-type-training">Training program</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-type" id="offer-type-certification">
    <label for="offer-type-certification">Professional certification</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-type" id="offer-type-other">
    <label for="offer-type-other">Other</label>
  </div>
</fieldset>

<fieldset class="field" id="offer-audience">
  <legend class="label">Audience (required)</legend>
  <p class="expl">Indicate who is the intended audience for this offer.</p>

  <div class="radio-field">
    <input type="checkbox" name="offer-audience" id="offer-audience-developer" value="offer-audience-developer" required>
    <label for="offer-audience-developer">Developer</label>
  </div>
  <div class="radio-field">
    <input type="checkbox" name="offer-audience" id="offer-audience-designer" value="offer-audience-designer" required>
    <label for="offer-audience-designer">Designer</label>
  </div>
  <div class="radio-field">
    <input type="checkbox" name="offer-audience" id="offer-audience-content-author" value="offer-audience-content-author" required>
    <label for="offer-audience-content-author">Content Author</label>
  </div>
  <div class="radio-field">
    <input type="checkbox" name="offer-audience" id="offer-audience-manager" value="offer-audience-manager" required>
    <label for="offer-audience-manager">Manager</label>
  </div>
  <div class="radio-field">
    <input type="checkbox" name="offer-audience" id="offer-audience-tester" value="offer-audience-tester" required>
    <label for="offer-audience-tester">Tester</label>
  </div>
  <div class="radio-field">
    <input type="checkbox" name="offer-audience" id="offer-audience-other" value="offer-audience-other" required>
    <label for="offer-audience-other">Other</label>
  </div>
</fieldset>

<fieldset class="field" id="offer-level">
  <legend class="label">Level (required)</legend>
  <p class="expl">Indicate the level of digital accessibility proficiency required for this offering.</p>

  <div class="radio-field">
    <input type="radio" name="offer-level" id="offer-level-basic" required>
    <label for="offer-level-basic">Basic</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-level" id="offer-level-intermediate">
    <label for="offer-level-intermediate">Intermediate</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-level" id="offer-level-advanced">
    <label for="offer-level-advanced">Advanced</label>
  </div>
</fieldset>

<div class="field">
    <label for="offer-prerequisites">Prerequisites</label>
    <p class="expl">Describe what are the prerequisites for this offer.</p>
    <input type="text" id="prerequisites">
</div>

<div class="field">
    <label for="offer-topics" required>Topics (required)</label>
    <p class="expl">Describe at least 3 and up to 6 topics covered by this offer.</p>
    <input type="text" id="topics">
</div>

<fieldset id="offer-wai-curricula">
    {% include wai-curricula.liquid %}
</fieldset>

<div class="field" id="divSelectLang">
    <label for="offer-language">Language (required)</label>
    <p class="expl">Indicate in which language or languages this offer is provided.</p>
    <select name="language" id="language" class="field-language select-form" required> 
        <option value=""></option>
        {% for language in site.data.lang %}
            <option value="{{ language[0] }}">{{ language[1].name }} ({{language[1].nativeName }})</option>
        {% endfor %}
    </select>
    {% include_cached button.html type="fake" label="Add language" class="small button-new-lang" %}
</div>

<div class="field" id="divSelectCountry">
    <label for="offer-country">Country (required)</label>
    <p class="expl">Indicate by which country or countries this offer is provided.</p>
    <select name="country" id="country" class="field-country select-form" required>
        <option value=""></option>
        {% for country in site.data.countries %}
            <option value="{{ country[0] }}">{{ country[1].name }} ({{country[1].nativeName}})</option>
        {% endfor %}
    </select>
    {% include_cached button.html type="fake" label="Add country" class="small button-new-country" %}
</div>

<fieldset class="field" id="offer-format">
  <legend class="label">Format (required)</legend>
  <p class="expl">Indicate in which format this offer is provided.</p>
  <div class="radio-field">
    <input type="radio" name="offer-format" id="offer-format-online" required>
    <label for="offer-format-online">Online</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-format" id="offer-format-face-to-face">
    <label for="offer-format-face-to-face">Face-to-face</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-format" id="offer-format-hybrid">
    <label for="offer-format-hybrid">Hybrid</label>
  </div>
</fieldset>


<fieldset class="field" id="offer-learning">
    <legend class="label">Learning (required)</legend>
    <p class="expl">Indicate the type of learning provided in this offer.</p>
    <div class="radio-field">
        <input type="checkbox" id="offer-learning-guided" value="offer-learning-guided" required>
        <label for="offer-learning-guided">Guided</label>
    </div>
    <div class="radio-field">
        <input type="checkbox" id="offer-learning-non-guided" value="offer-learning-non-guided">
        <label for="offer-learning">Non-guided</label>
    </div>
    <div class="radio-field">
        <input type="checkbox" id="offer-learning-synchronous" value="offer-learning-synchronous">
        <label for="offer-learning-synchronous">Synchronous</label>
    </div>
    <div class="radio-field">
        <input type="checkbox" id="offer-learning-asynchronous" value="offer-learning-asynchronous">
        <label for="offer-learning-asynchronous">Asynchronous</label>
    </div>            
</fieldset>

<div class="field">
    <label for="offer-platform">Platform</label>
    <p class="expl">Indicate on which platform this offer is provided.</p>
    <input type="text" id="platform">
</div>

<div class="field">
    <label for="offer-accessibility-resources">Accessibility resources</label>
    <p class="expl">Describe what accessibility resources are provided in this offering.</p>
    <input type="text" id="offer-accessibility-resources">
</div>
<div class="field">
    <label for="offer-duration">Duration (required)</label>
    <p class="expl">Indicate the duration of this offer.</p>
    <input type="number" id="offer-number-duration" class="duration-input" required>
    <select id="offer-unity-duration" class="duration-input" required> 
        <option value=""></option>
        <option value="hours">Hours</option>
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
        <option value="years">Years</option>
    </select>
</div>

<fieldset class="field" id="offer-cost">
  <legend class="label">Cost (required)</legend>
  <p class="expl">Indicate the cost of your offer.</p>
  <div class="radio-field">
    <input type="radio" name="offer-cost" id="offer-cost-free-certificates-for-purchase" required>
    <label for="offer-cost-free-certificates-for-purchase">Free with certificates for purchase</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-cost" id="offer-cost-free-limited-time">
    <label for="offer-cost-free-limited-time">Free for limited content or duration</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-cost" id="offer-cost-free-or-reduced-for-some">
    <label for="offer-cost-free-or-reduced-for-some">Free or reduced fee for some</label>
  </div>
  <div class="radio-field">
    <input type="radio" name="offer-cost" id="offer-cost-paid">
    <label for="offer-cost-paid">Paid</label>
  </div>  
</fieldset>

<div class="field">
    <label for="offer-website">Web site (required)</label>
    <p class="expl">Provide the web site containing more information about this offer.</p>
    <input type="url" name="offer-website" id="offer-website" required>
</div>

<div class="field">
    <label for="offer-reviews-page">Reviews page</label>
    <p class="expl">Provide the web site containing consumer reviews about this offer.</p>
    <input type="url" name="offer-reviews-page" id="offer-reviews-page">
</div>
<div class="field">
    <label for="offer-content-update">Content update date (required)</label>
    <p class="expl">Please indicate the date when the content of this offer was last updated.</p>
    <input type="date" id="offer-content-update" required>
</div>

<h2>Submitting your offer</h2>
  <p>Let us know if you have any comments.</p>
  <div class="field">
    <label for="comments">Comments</label>
    <textarea id="comments"></textarea>
  </div>
  <p><em>Note: <abbr title="World Wide Web Consortium">W3C</abbr> does not endorse specific vendor products. Inclusion of offers in this list does not indicate endorsement by W3C. Products and search criteria are listed with no quality rating. All information will be publicly available as this page generates a Pull Request on our GitHub repository.</em></p> 
  <div class="field">
    <label><input type="checkbox" required> The information I provided is correct according to the best of my knowledge.</label>
    <label><input type="checkbox" required> I give permission for my information to be published in the W3C's list of courses.</label>
  </div>
  <p>When you submit the form, we will review your offer and add it to the list. This should take 1-4 weeks.</p>
  <div class="field">
    <button type="submit">Submit your offer</button>
  </div>
</form>



<script>
{% include js/offers.js %}
</script>