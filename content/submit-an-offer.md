---
title: "[Draft] Submit an offer"
nav_title: "[Draft] Submit an offer"
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

<a href="../">Back to List of Courses</a>

<form>
  <p>The <a href="../">Course List</a> shows offers from different vendors, so that people can make informed decisions when they choose a course, training, or certification offer.</p>
  <p>We'd like to display as many offers as we can, we welcome you to submit yours using this form.</p>
  <p>Note: all information will be publicly available as this page generates a Pull Request on our GitHub repository.</p>


<div class="field">
    <label for="submitter-name">Name (required)</label>
    <input type="text" id="submitter-name" required>
</div>

<div class="field">
    <label for="offer-type">Type</label>
    <select id="offer-type">
        <option value="offer-type-graduate">Graduate program</option>
        <option value="offer-type-undergraduate">Undergraduate program</option>
        <option value="offer-type-training">Training program</option>
        <option value="offer-type-certification">Professional certification</option>
        <option value="offer-type-other">Other</option>
    </select>
</div>
---

{% include submit-an-offer.liquid %}





</form>

</div>