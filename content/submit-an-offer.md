---
title: "Submit an offer"
permalink: /list-of-courses/submit-an-offer
ref: /submit-an-offer/
doc-note-type: draft
lang: en
layout: submit-to-list
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
contributors:
 - name: Letícia Seixas
github:
  repository: wai-list-of-courses
  path: content/submit-an-offer.md
---

<div style="grid-column: 4 / span 4">

<style>
{% include css/styles.css %}
main > header { grid-column: 4 / span 4; }
</style>

<a href="../">Back to List of Courses</a>

<form>
  <div class="excol-all"></div>
  
  {% include excol.html type="start" open="true" %}
  <h2 id="about-you">About you</h2>
  <p>We'd like to know who you are, so that we can contact you with questions about your submission.</p>

  {% include excol.html type="middle" %}
  <div class="field">
    <label for="submitter-name">Name (required)</label>
    <input type="text" id="submitter-name" required>
  </div>
  <div class="field">
    <label for="submitter-email">Email (required)</label>
    <input type="email" id="submitter-email" required>
  </div>
  {% include excol.html type="end" %}

  {% include excol.html type="start" %}
  <h2 id="the-offer">About the offer</h2>
  <p>Provide some information about your offer. We will list this with the offer.</p>

  {% include excol.html type="middle" %}
  <div class="field">
    <label for="offer-name">Name (required)</label>
    <input type="text" id="offer-name" required>
  </div>
  <div class="field">
    <label for="offer-provider">Provider (required)</label>
    <input type="text" id="offer-provider" required>
  </div>

  <div class="field">
    <label for="offer-type">Course type</label>
    <div class="radio-field">
      <input id="offer-type-non-credit" type="radio" name="offer-type">
      <label for="offer-type-non-credit">Non-credit</label>
    </div>
    <div class="radio-field">
      <input id="offer-type-undergrad" type="radio" name="offer-type">
      <label for="offer-type-undergrad">Undergraduate</label>
    </div>
    <div class="radio-field">
      <input id="offer-type-graduate" type="radio" name="offer-type">
      <label for="offer-type-graduate">Graduate</label>
    </div>
    <div class="radio-field">
      <input id="offer-type-professional" type="radio" name="offer-type">
      <label for="offer-type-professional">professional</label>
    </div>
    <div class="radio-field">
      <input id="offer-type-other" type="radio" name="offer-type">
      <label for="offer-type-other">Other</label>
    </div>
  </div>
  <div class="field">
    <label for="offer-degree-certification">Degree/Certification</label>
    <input type="text" id="offer-degree-certification">
  </div>
  <div class="field">
    <label for="offer-prerequisites">Prerequisites</label>
    <input type="text" id="offer-prerequisites">
  </div>

  <div class="field">
    <label for="offer-target-role">Target Role</label>
    <div class="radio-field">
      <input id="offer-target-role-developer" type="radio" name="offer-target-role">
      <label for="offer-target-role-developer">Developer</label>
    </div>
    <div class="radio-field">
      <input id="offer-target-role-designer" type="radio" name="offer-target-role">
      <label for="offer-target-role-designer">Designer</label>
    </div>
    <div class="radio-field">
      <input id="offer-target-role-content-author" type="radio" name="offer-target-role">
      <label for="offer-target-role-content-author">Content author</label>
    </div>
    <div class="radio-field">
      <input id="offer-target-role-manager" type="radio" name="offer-target-role">
      <label for="offer-target-role-manager">Manager</label>
    </div>
    <div class="radio-field">
      <input id="offer-target-role-tester" type="radio" name="offer-target-role">
      <label for="offer-target-role-tester">Tester</label>
    </div>
    <div class="radio-field">
      <input id="offer-target-role-other" type="radio" name="offer-target-role">
      <label for="offer-target-role-other">Other</label>
    </div>    
  </div>
  <div class="field">
    <label for="offer-level">Level</label>
    <div class="radio-field">
      <input id="offer-level-basic" type="radio" name="offer-level">
      <label for="offer-level-basic">Basic</label>
    </div>
    <div class="radio-field">
      <input id="offer-level-intermediate" type="radio" name="offer-level">
      <label for="offer-level-intermediate">Intermediate</label>
    </div>
    <div class="radio-field">
      <input id="offer-level-advanced" type="radio" name="offer-level">
      <label for="offer-level-advanced">Advanced</label>
    </div>    
  </div>

  <div class="field">
    <label for="offer-curricula-correspondence">WAI Curricula correspondence (module)</label>
    <input type="text" id="offer-curricula-correspondence">
  </div>
  <div class="field">
    <label for="offer-keywords-topics">Keywords/Topics</label>
    <input type="text" id="offer-keywords-topics">
  </div>
  <div class="field">
    <label for="offer-language">Language</label>
    <input type="text" id="offer-language">
  </div>  
  <div class="field">
    <label for="offer-country">Country</label>
    <input type="text" id="offer-country">
  </div>
  <div class="field">
    <label for="offer-format">Format</label>
    <div class="radio-field">
      <input id="offer-format-online" type="radio" name="offer-format">
      <label for="offer-format-online">Online</label>
    </div>
    <div class="radio-field">
      <input id="offer-format-face-to-face" type="radio" name="offer-format">
      <label for="offer-format-face-to-face">Face-to-face</label>
    </div>
    <div class="radio-field">
      <input id="offer-format-hybrid" type="radio" name="offer-format">
      <label for="offer-format-hybrid">Hybrid</label>
    </div>    
  </div>
  
  <div class="field">
    <label for="offer-platform">Platform</label>
    <input type="text" id="offer-platform">
  </div>

  
  <div class="field">
    <label for="offer-cost">Cost</label>
    <div class="radio-field">
      <input id="offer-cost-free" type="radio" name="offer-cost">
      <label for="offer-cost-free">Free</label>
    </div>
    <div class="radio-field">
      <input id="offer-cost-free-certificates-for-purchase" type="radio" name="offer-cost">
      <label for="offer-cost-free-certificates-for-purchase">Free with certificates for purchase</label>
    </div>
    <div class="radio-field">
      <input id="offer-cost-free-limited-time" type="radio" name="offer-cost">
      <label for="offer-cost-free-limited-time">Free for limited time</label>
    </div>    
     <div class="radio-field">
      <input id="offer-cost-free-or-reduced-for-some" type="radio" name="offer-cost">
      <label for="offer-cost-free-or-reduced-for-some">Free or reduced fee for some</label>
    </div> 
    <div class="radio-field">
      <input id="offer-cost-for-fee" type="radio" name="offer-cost">
      <label for="offer-cost-for-fee">For fee</label>
    </div>
  </div>
  <div class="field">
    <label for="offer-duration">Duration</label>
    <input type="text" id="offer-duration">
  </div>
  <div class="field">
    <label for="offer-link">Link to offer page</label>
    <input type="text" id="offer-link" placeholder="https://">
  </div>
  <div class="field">
    <label for="offer-link-reviews">Link to offer reviews page</label>
    <input type="text" id="offer-link-reviews" placeholder="https://">
  </div>

  <div class="field">
    <label for="offer-last-info-update">Date of last information update</label>
    <input type="text" id="offer-last-info-update" required>
  </div>
  <div class="field">
    <label for="offer-last-content-updates">Date of last update to course contents</label>
    <input type="text" id="offer-last-content-updates" required>
  </div>
  
  {% include excol.html type="end" %}

  <h2>Submitting your offer</h2>
  <p>Let us know if you have any comments.</p>
  <div class="field">
    <label for="comments">Comments</label>
    <textarea id="comments"></textarea>
  </div>

  <div class="field">
    <label><input type="checkbox" required> The information I provided is correct according to the best of my knowledge.</label>
    <label><input type="checkbox" required> I give permission for my information to be published in the W3C's course list.</label>
  </div>
  <p>When you submit the form, we will review your offer and add it to the list. This should take 1-4 weeks.</p>
  <div class="field">
    <button type="submit">Submit your offer</button>
  </div>
</form>

</div>