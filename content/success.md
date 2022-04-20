---
title: 'Form Submitted'
permalink: /success
---
<div style="grid-column: 4 / span 4">

<style> 
{% include css/styles.css %}
main > header { grid-column: 4 / span 4; }
</style>

{% assign strings = site.data.strings %}

{{ strings.success_message }}

<a href="../course-list">{{strings.back_to_list_link}}</a>
</div>