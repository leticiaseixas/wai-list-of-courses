const filterForm = document.querySelector('[data-filter-form]');
const jsonCourses = JSON.parse('{{ site.data.courses | jsonify}}');
const jsonFilters = JSON.parse('{{site.data.filters | jsonify}}');
const jsonLang = JSON.parse('{{site.data.lang | jsonify}}');
const jsonCountry = JSON.parse('{{ site.data.countries | jsonify}}');


var coursesList = document.getElementById('courses-list');

document.querySelectorAll('.button-clear-button').forEach(item => {
  item.hidden = true;
  item.addEventListener('click', e => { clearFilters() });
})

if (filterForm) {

  filterForm.addEventListener('change', el => {
    filterJson(filterForm);
  });



  function filterJson(form) {

    //form = document.querySelector('[data-filter-form]');

    // selecting filters on
    var attValues = [];
    var filtersOn = [];

    // for each attribute group
    form.querySelectorAll('fieldset').forEach(att => {

      // [att, [checked values]]
      attValues = [];
      filterName = att.querySelectorAll('legend')[0].innerText;

      att.querySelectorAll('input[type="checkbox"]').forEach(filter => {
        if (filter.checked) {
          attValues.push(att.querySelector("label[for='" + filter.id + "']").innerText);
        }
      })

      if (attValues.length > 0)
        filtersOn.push({ filterId: att.id, filterName: filterName, filterValues: attValues });

      att.querySelectorAll('select').forEach(filter => {
        attValues = [];

        if (filter.value != "") {
          attValues.push(filter.value)
          filtersOn.push({ filterId: filter.id, filterName: filterName, filterValues: attValues });
        }
      });

    });

    // filtering results
    var newResults = [];

    // by attribute
    filtersOn.forEach(filter => {
      newResults.push(jsonCourses.filter((x) => filter.filterValues.some(r => x[filter.filterId].includes(r))));
    })

    // if no filter, show all courses
    if (newResults.length === 0)
      newResults = jsonCourses;
    // intersection between results [courses]
    else
      newResults = newResults.reduce((a, c) => a.filter(i => c.includes(i)));

    //rebuild document
    rebuildList(newResults, filtersOn);

    // callDebug(jsonFilters, jsonCourses, filtersOn, newResults, coursesList);

  }

  function rebuildList(newResults, filtersOn) {

    const articles = coursesList.querySelectorAll('aside');
    var totalCourses = document.getElementById("total-courses");

    var listFiltersOnString = document.createElement('dl');

    filtersOn.forEach(f => {

      var attName = document.createElement('dt');
      attName.innerText = f.filterName + ':';
      listFiltersOnString.appendChild(attName);

      var attValues = document.createElement('dd');

      if (f.filterId == 'language')
        attValues.innerText = jsonLang[f.filterValues[0]].name + " (" + jsonLang[f.filterValues[0]].nativeName + ")";
      else if (f.filterId == 'country')
        attValues.innerText = jsonCountry[f.filterValues[0]].name + " (" + jsonCountry[f.filterValues[0]].nativeName + ")";
      else
        attValues.innerText = f.filterValues.join(', ');
      listFiltersOnString.appendChild(attValues);
    });


    articles.forEach(el => {
      if (!newResults.find(o => o.id === el.id))
        el.hidden = true;
      else
        el.hidden = false;
    })

    if (filtersOn.length === 0) {
      totalCourses.innerText = "Showing " + newResults.length + " results";
      hideClearButton(true);
    }
    else if (newResults.length > 0) {
      if (newResults.length === 1)
        totalCourses.innerText = "Showing " + newResults.length + " result matching the following criteria: ";
      else
        totalCourses.innerText = "Showing " + newResults.length + " results matching the following criteria: ";
      totalCourses.appendChild(listFiltersOnString);
      hideClearButton(false);
    }
    else {
      totalCourses.innerText = "Sorry, but no results match the following criteria: ";
      totalCourses.appendChild(listFiltersOnString);
      hideClearButton(false);
    }
  }


  function hideClearButton(isHidden) {
    document.querySelectorAll('.button-clear-button').forEach(item => { item.hidden = isHidden });
  }


  function clearFilters() {
    rebuildList(jsonCourses, []);
    filterForm.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
    filterForm.querySelectorAll("select").forEach(el => el.selectedIndex = 0);
  }


  function callDebug(jsonFilters, jsonCourses, filtersOn, newResults, coursesList) {
    console.log("Filters:");
    console.log(jsonFilters);
    console.log("Courses:");
    console.log(jsonCourses);
    console.log("Filters On:");
    console.log(filtersOn);
    console.log("Results:");
    console.log(newResults);
    console.log("coursesList");
    console.log(coursesList);
  }

  function clean(obj) {
    for (var propName in obj) {
      if (obj[propName].length === 0) {
        delete obj[propName];
      }
    }
    return obj
  }

}

if (document.getElementById("form-submit-an-course")) {

  const divSelectLang = document.getElementById("divSelectLang");
  const fieldLang = document.getElementsByClassName("field-language")[0];
  document.getElementsByClassName("button-new-lang")[0].addEventListener('click', e => { addNewField(divSelectLang, fieldLang) });

  const divSelectCountry = document.getElementById("divSelectCountry");
  const fieldCountry = document.getElementsByClassName("field-country")[0];
  document.getElementsByClassName("button-new-country")[0].addEventListener('click', e => { addNewField(divSelectCountry, fieldCountry) });

  const divInputPrerequisite = document.getElementById("divInputPrerequisite");
  const fieldPrequisite = document.getElementsByClassName("field-prerequisite")[0];
  document.getElementsByClassName("button-new-prerequisite")[0].addEventListener('click', e => { addNewField(divInputPrerequisite, fieldPrequisite) });

  const divInputTopic = document.getElementById("divInputTopic");
  const fieldTopic = document.getElementsByClassName("field-topic")[0];
  document.getElementsByClassName("button-new-topic")[0].addEventListener('click', e => { addNewField(divInputTopic, fieldTopic) });



  function addNewField(divToAppend, fieldToAppend) {
    var newField = fieldToAppend.cloneNode(true);
    newField.value = '';
    divToAppend.insertBefore(newField, divToAppend.lastElementChild);
    //newField.focus();
  }



    // Add remove possibility to older browsers
    // Source: https://stackoverflow.com/questions/8830839/javascript-dom-remove-element#8830882

    (function () {
        var typesToPatch = ['DocumentType', 'Element', 'CharacterData'],
            remove = function () {
                // The check here seems pointless, since we're not adding this
                // method to the prototypes of any any elements that CAN be the
                // root of the DOM. However, it's required by spec (see point 1 of
                // https://dom.spec.whatwg.org/#dom-childnode-remove) and would
                // theoretically make a difference if somebody .apply()ed this
                // method to the DOM's root node, so let's roll with it.
                if (this.parentNode != null) {
                    this.parentNode.removeChild(this);
                }
            };

        for (var i=0; i<typesToPatch.length; i++) {
            var type = typesToPatch[i];
            if (window[type] && !window[type].prototype.remove) {
                window[type].prototype.remove = remove;
            }
        }
    })();
    //helper function to iterate through elements – it’s just shorter :-D
    function each(elem, func) {
      Array.prototype.forEach.call(elem, func);
    }

    // Each button with class multiple:
    each(document.querySelectorAll('button.multiple'), function(element) {

      // Add event listener
      element.addEventListener('click', function(e) {

        // When clicked, find the list this button refers to…
        var targetMultiple = document.getElementById(e.target.getAttribute('data-for'));

        // Find the template for the list. Clone it.
        var template = targetMultiple.querySelector('.template').cloneNode(true);

        // Remove Template from the item (not strictly necessary)
        template.classList.remove("template");

        // Find the first input element in the copied template, add focusHere class
        template.querySelector('input').classList.add("focusHere");

        // Find the button element in the cloned element and add a class
        template.querySelector('button').classList.add("needsHandler");

        // Insert the copied template before the end of the list.
        targetMultiple.insertAdjacentHTML('beforeend', template.outerHTML);

        // Focus the first input in the inserted list item.
        document.querySelector('.focusHere').focus();

        // Remove focusHere class from all elements that have one. (should always be only one, but better save than sorry before accidentally focussing the wrong element)
        each(document.querySelectorAll('.focusHere'), function(e) {
          e.classList.remove('focusHere');
        });

        // Find the “remove” button and add event listener
        each(document.querySelectorAll('button.remove.needsHandler'), function(e) {
          e.addEventListener('click', function(elem) {
            elem.target.parentNode.parentNode.parentNode.parentNode.querySelector('button.multiple').focus();
            elem.target.parentNode.parentNode.remove();
          });
          e.classList.remove('needsHandler');
        });

      });

    });
  
}

