---
title: "Submit a course, training, or certification on web accessibility"
nav_title: "Submit a course, training, or certification on web accessibility"
doc-note-type: draft
lang: en   
last_updated: 2021-@@-@@
github:
  repository: w3c/wai-course-list
  path: content/submit-a-resource.md
permalink: course-list/submit-a-resource
ref: /teach-advocate/course-list/
changelog: /teach-advocate/course-list/changelog/
acknowledgements: /teach-advocate/course-list/acknowledgements/
description:  # NEW: add a 150ish-character-description for social media   # translate the description
# image: /content-images/wai-course-list/social.png  # NEW: image for social media (leave commented out if we don't have a specific one for this reource)
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

<a href="../course-list">Back to List of Courses</a>
<p>
  This form allows you to provide information about courses, training, and certification on web accessibility. To update existing resources, please <a href="#">upload the file provided</a> when first submiting your resource to this list.

<p><em>Please note that <abbr title="World Wide Web Consortium">W3C</abbr> does not endorse specific providers. Resources are listed with no quality rating. All information (except your name and email) will be publicly available as this page generates a Pull Request on our GitHub repository.</em></p> 

{% include netlify-form.liquid type="start" id="form-submit-a-course" %}
  <h2 id="about-you">About you</h2>
  <p>We'd like to know who you are, so that we can contact you with questions about your submission. This information will not be publicly shared.</p>

  <div class="field">
     <label for="submitter-name" class="label-input">Name (Required)</label>
     <input type="text" id="submitter-name" required>
   </div>
   <div class="field">
     <label for="submitter-email" class="label-input">Email (Required)</label>
     <input type="email" id="submitter-email" required>
  </div>

  <h2 id="the-resource">About the resource</h2>
  <p>Provide some information about the course, training, or certification. This information will be publicly shared.</p>

  <div class="field">
      <label for="course-title" class="label-input">Title (Required)</label>
      <input type="text" id="course-title" required>
  </div>
  <div class="field">
      <label for="course-provider" class="label-input">Provider (Required)</label>
      <input type="text" id="course-provider" required>
  </div>
  {% include sort-countries.liquid %} 

  <fieldset class="field" id="country">
    <legend class="label">Country (Required)</legend>
    <p class="expl">Indicate by which country or countries this resource is provided.</p>
    <div class="line">
      <label for="course-country_1" class="label-input">Country 1 (Required)</label>
      <select name="country" id="course-country_1" class="select-form" required>
          <option value=""></option>
          {% for country in orderedCountries %}
              <option value="{{ country[3] }}">{{ country[0] }} ({{country[1]}})</option>
          {% endfor %}
      </select>
    </div>
    <div class="proto">
      <label for="course-country_[n]" class="label-input">Country [n]</label>
      <select name="country" id="course-country_[n]" class="select-form" required>
          <option value=""></option>
          {% for country in orderedCountries %}
              <option value="{{ country[3] }}">{{ country[0] }} ({{country[1]}})</option>
          {% endfor %}
      </select>    
      </div>
    <button type="button" class="add-line small">Add new country</button>
  </fieldset>

  <div class="field">
      <label for="course-description" class="label-input">Description (Required)</label>
      <p class="expl">Provide a brief description of this resource (max.: 350 chars).</p>
      <textarea id="course-description" maxlength="350" required></textarea>
      <p><em>Please enter only plain text (no HTML). URIs are not linked.</em></p>
  </div>

  <fieldset class="field" id="course-type">
    <legend class="label">Type of resource (Required)</legend>
    <div class="radio-field">
      <input type="radio" name="course-type" id="course-type-graduate" required>
      <label for="course-type-graduate">Graduate program</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-type" id="course-type-undergraduate">
      <label for="course-type-undergraduate">Undergraduate program</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-type" id="course-type-training">
      <label for="course-type-training">Training</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-type" id="course-type-certification">
      <label for="course-type-certification">Professional certification</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-type" id="course-type-other">
      <label for="course-type-other">Other</label>
    </div>  
    <div>
      <label for="course-new-type-course" class="visuallyhidden">Other</label>
      <input type="text" id="course-new-type-course">
    </div>
  </fieldset>

  <fieldset class="field" id="course-audience">
    <legend class="label">Audience (Required)</legend>
    <div class="radio-field">
      <input type="checkbox" name="course-audience-content-author" id="course-audience-content-author" value="course-audience-content-author" group="audience" required>
      <label for="course-audience-content-author">Content author</label>
    </div>
    <div class="radio-field">
      <input type="checkbox" name="course-audience-designer" id="course-audience-designer" value="course-audience-designer" group="audience">
      <label for="course-audience-designer">Designer</label>
    </div>
    <div class="radio-field">
      <input type="checkbox" name="course-audience-developer" id="course-audience-developer" value="course-audience-developer" group="audience">
      <label for="course-audience-developer">Developer</label>
    </div>
    <div class="radio-field">
      <input type="checkbox" name="course-audience-manager" id="course-audience-manager" value="course-audience-manager" group="audience">
      <label for="course-audience-manager">Manager</label>
    </div>
    <div class="radio-field">
      <input type="checkbox" name="course-audience-tester" id="course-audience-tester" value="course-audience-tester" group="audience">
      <label for="course-audience-tester">Tester</label>
    </div>
    <div class="radio-field">
      <input type="checkbox" name="course-audience-other" id="course-audience-other" value="course-audience-other" group="audience">
      <label for="course-audience-other">Other</label>
    </div>
  </fieldset>

  <fieldset class="field" id="course-level">
    <legend class="label">Level (Required)</legend>
    <p class="expl">Indicate the level of digital accessibility proficiency required.</p>
    <div class="radio-field">
      <input type="radio" name="course-level" id="course-level-basic">
      <label for="course-level-basic">Basic</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-level" id="course-level-intermediate">
      <label for="course-level-intermediate">Intermediate</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-level" id="course-level-advanced">
      <label for="course-level-advanced">Advanced</label>
    </div>
  </fieldset>

  <fieldset class="field" id="course-prerequisites">
    <legend class="label">Prerequisites</legend>
    <p class="expl">For example, accessibility concepts and terminology, W3C Accessibility Standards, basic knowledge of HTML and CSS, etc.</p>
    <div class="line">
      <label for="course-prerequisites_1" class="label-input">Prerequisite 1</label>
      <input type="text" id="course-prerequisites_1" name="course-prerequisites">
    </div>
    <div class="proto">
      <label for="course-prerequisites_[n]" class="label-input">Prerequisite [n]</label>
      <input type="text" id="course-prerequisites_[n]" name="course-prerequisites" />
    </div>
    <button type="button" class="add-line small">Add new prerequisite</button>
  </fieldset>

  <fieldset class="field" id="topics">
    <legend class="label">Topics (Required)</legend>
    <p class="expl">For example, accessibility policy and regulations, inclusive design, accessible documents and multimedia, etc.</p>
    <div class="line">
      <label for="course-topics_1" class="label-input">Topic 1 (Required)</label>
      <input type="text" id="course-topics_1" name="course-topics" required>
    </div>
    <div class="proto">
      <label for="course-topics_[n]" class="label-input">Topic [n]</label>
      <input type="text" id="course-topics_[n]" name="course-topics" />
    </div>
    <button type="button" class="add-line small">Add new topic</button>
  </fieldset>

  <fieldset id="course-wai-curricula">
    <legend>
      <h3>WAI Curricula on Web Accessibility</h3>
    </legend>
    <p class="expl">  
    Curricula on Web Accessibility is a WAI resource that provides teaching modules to help you create courses on digital accessibility, or to include accessibility in other courses. The modules cover accessibility foundations that apply broadly, and specific skills for developers, designers, content authors, and others. <a href="https://www.w3.org/WAI/curricula/">See more information about WAI Curricula Modules</a>.
    </p>
    <p class="expl">If applicable, indicate the WAI Curricula modules covered.</p>
      {% include wai-curricula.liquid %}
  </fieldset>


  <fieldset class="field" id="language">
    <legend class="label">Language (Required)</legend>
    <p class="expl">Indicate in which language or languages this resource is provided.</p>
    <div class="line">
      <label for="course-language_1" class="label-input">Language 1 (Required)</label>
      <select name="language" id="language_1" class="select-form" required> 
          <option value=""></option>
          {% for language in site.data.lang %}
              <option value="{{ language[0] }}">{{ language[1].name }} ({{language[1].nativeName }})</option>
          {% endfor %}
      </select>
    </div>
    <div class="proto">
      <label for="course-language_[n]" class="label-input">Language [n]</label>
      <select name="language" id="language_[n]" class="select-form" required> 
          <option value=""></option>
          {% for language in site.data.lang %}
              <option value="{{ language[0] }}">{{ language[1].name }} ({{language[1].nativeName }})</option>
          {% endfor %}
      </select>
      </div>
    <button type="button" class="add-line small">Add new language</button>
  </fieldset>


  <fieldset class="field" id="course-format">
    <legend class="label">Format (Required)</legend>
    <div class="radio-field">
      <input type="radio" name="course-format" id="course-format-face-to-face">
      <label for="course-format-face-to-face">Face-to-face - all teaching sessions are provided on-site</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-format" id="course-format-online" required>
      <label for="course-format-online">Online - all teaching sessions are provided online </label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-format" id="course-format-hybrid">
      <label for="course-format-hybrid">Hybrid - teaching sessions are provided simultaneously on-site and online</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-format" id="course-format-blended">
      <label for="course-format-blended">Blended - teaching sessions are provided either on-site or online</label>
    </div>    
  </fieldset>

  <fieldset id="course-learning">
      <legend class="label">Scheduling (Required)</legend>
      <p class="expl">Indicate the type of activities provided in this resource. Choose as many as apply.</p>
      <div class="radio-field">
          <input type="checkbox" id="course-learning-scheduled" name="course-learning-scheduled" group="learning" required>
          <label for="course-learning-scheduled">Scheduled - participants are required to attend at a specific time</label>
      </div>
      <div class="radio-field">
          <input type="checkbox" id="course-learning-not-scheduled" name="course-learning-not-scheduled" group="learning">
          <label for="course-learning-not-scheduled">Unscheduled - participants can attend at their own pace</label>
      </div>
  </fieldset>

  <div class="field">
      <label for="course-platform" class="label-input">Platform</label>
      <p class="expl">If applicable, indicate on which platform this resource is provided (for example, which Learning Management System (LMS), Student Management System (SMS), Meeting Platform, etc.) </p>
      <input type="text" id="course-platform">
  </div>
  
  <fieldset id="course-accessibility-support">
    <legend><h3>Accessibility support</h3></legend>
    <p class="expl">If applicable, indicate what accessibility support is provided (see guidance on <a href="https://www.w3.org/WAI/teach-advocate/accessible-presentations/">How to Make Your Presentations Accessible to All</a>). Include details in the text box.</p>
    {% include accessibility-support.liquid %}
  </fieldset>

  <div class="field">
      <legend class="label">Length</legend>
      <p class="expl">Indicate the estimated amount of time needed to complete this resource (for example, 2 hours, 3 weeks, 6 months, etc.).</p>
      <input type="text" id="course-length">
  </div>

  <fieldset class="field" id="course-cost">
    <legend class="label">Cost (Required)</legend>
    <div class="radio-field">
      <input type="radio" name="course-cost" id="course-cost-free">
      <label for="course-cost-free">Free</label>
    </div> 
    <div class="radio-field">
      <input type="radio" name="course-cost" id="course-cost-free-certificates-for-purchase" required>
      <label for="course-cost-free-certificates-for-purchase">Free with certificates for purchase</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-cost" id="course-cost-free-limited-time">
      <label for="course-cost-free-limited-time">Free for limited content or duration</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-cost" id="course-cost-free-or-reduced-for-some">
      <label for="course-cost-free-or-reduced-for-some">Free or reduced fee for some</label>
    </div>
    <div class="radio-field">
      <input type="radio" name="course-cost" id="course-cost-paid">
      <label for="course-cost-paid">Paid</label>
    </div>  
  </fieldset>

  <div class="field">
      <label for="course-website" class="label-input">Website (Required)</label>
      <p class="expl">Indicate the website containing more information about this resource.</p>
      <input type="url" name="course-website" id="course-website" required>
  </div>

  <div class="field">
      <label for="course-reviews-page" class="label-input">Reviews page</label>
      <p class="expl">Indicate the web page containing reviews about this resource.</p>
      <input type="url" name="course-reviews-page" id="course-reviews-page">
  </div>
  <div class="field">
      <label for="course-content-update"  class="label-input">Last updated (Required)</label>
      <p class="expl">Please indicate the date when the content of this resource was last updated. Consider items such as syllabus, structure, teaching resources, etc.</p>
      <input type="date" id="course-content-update" required>
  </div>
  <div class="field" id="availability">
      <legend class="label">Availability</legend>
      <label for="course-start-date" class="label-input">Start date (Required)</label>
      <p class="expl">Indicate the start date for the period of time this resource will be available.</p>
      <input type="date" id="course-start-date" required>
      <label for="course-end-date" class="label-input">End date</label>
      <p class="expl">If applicable, indicate the end date for the period of time this resource will be available.</p>      
      <input type="date" id="course-end-date">
  </div>
  <h2>Submitting your course, training, or certification</h2>
  <div class="field">
    <label for="comments" class="label-input">Comments</label>
    <p class="expl">Let us know if you have any comments. This information will not be publicly shared.</p>
    <textarea id="comments"></textarea>
  </div>
  <div class="radio-field">  
    <input type="checkbox" id="check-correct-info" required> 
    <label for="check-correct-info">The information I provided is correct according to the best of my knowledge (Required).</label>
  </div>
  <div class="radio-field">  
    <input type="checkbox" id="check-publish-info" required> 
    <label for="confirmatin-publish-info">I give permission for the information about this resource to be published in the W3C's List of Courses (Required).</label>
  </div>
  <p>When you submit the form, we will review your submission and add it to the list. This will be within a month.</p>
  <div class="field">
    <button type="submit">Send information</button>
  </div>
{% include netlify-form.liquid type="end"%}

<script>
{% include js/courses.js %}
</script>
