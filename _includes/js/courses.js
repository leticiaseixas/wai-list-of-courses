const filterForm = document.querySelector('[data-filter-form]');
{% include sort-data-folder.liquid data=site.data.courses sortKey="title" %}

const sortForm = document.querySelector('.sort-by');
const searchForm = document.querySelector('#search');

const importJsonCourses = String.raw`{{ itemsSorted | jsonify }}`;
importJsonCourses.replace("\\","\\\\");

const jsonCourses = JSON.parse(importJsonCourses);

// const jsonCourses = JSON.parse('{{ itemsSorted | jsonify}}');

const importJsonCountries = String.raw`{{ itemsSorted | jsonify }}`;
importJsonCountries.replace("\\","\\\\");

const jsonCountry = JSON.parse(importJsonCountries);;

const jsonFilters = JSON.parse('{{site.data.filters | jsonify}}');
const jsonLang = JSON.parse('{{site.data.lang | jsonify}}');


var coursesList = document.getElementById('courses-list');

document.querySelectorAll('.button-clear-button').forEach(item => {
  item.hidden = true;
  item.addEventListener('click', e => { clearFilters() });
})

// if (filterForm && sortForm && search) {

if (filterForm) {
  filterForm.addEventListener('change', el => {
    filterJson(filterForm);
  });

  sortForm.querySelector('select').addEventListener('change', el => {
    filterJson(filterForm);
  });

  searchForm.addEventListener('keyup', el => {
    filterJson(filterForm);
  });

  //Add pre-counters to filters
  showFilterCounters(filterForm);

  function showFilterCounters(form){
    var counterFiltersOn = getActiveFiltersList(form);
    console.log(counterFiltersOn);
    var counterResults = filterNewResultsList(counterFiltersOn);
    console.log(counterResults);
    var projectedCounterFiltersOn = counterFiltersOn;
    form.querySelectorAll('fieldset').forEach(att => {
      att.querySelectorAll('input[type="checkbox"]').forEach(filter => {
        projectedCounterFiltersOn = getActiveFiltersList(form);
        var attValues = [];
        attValues.push(att.querySelector("label[for='" + filter.id + "']").querySelector('.filterName').innerText);
        filterName = att.querySelectorAll('legend')[0].innerText;
        var newFilter = false;
        projectedCounterFiltersOn.forEach(f => {
          if(f.filterId === att.id){
            if(!f.filterValues.includes(att.querySelector("label[for='" + filter.id + "']").querySelector('.filterName').innerText)){
              f.filterValues.push(att.querySelector("label[for='" + filter.id + "']").querySelector('.filterName').innerText);
            }
            newFilter = true;
          }
        })
        if(newFilter === false){
          projectedCounterFiltersOn.push({ filterId: att.id, filterName: filterName, filterValues: attValues }); 
        }
        var projectedCounterResults = filterNewResultsList(projectedCounterFiltersOn);
        var counter = 0;
        
        if(Object.values(projectedCounterResults).length >= Object.values(counterResults).length){
          if(filter.checked){
            Object.values(projectedCounterResults).forEach(r => {
              if(r[att.id].includes(att.querySelector("label[for='" + filter.id + "']").querySelector('.filterName').innerText)){
                counter++;
              }
            })
          } else if(Object.values(projectedCounterResults).length > 0){
            counter = Object.values(projectedCounterResults).length;
          }
          else{
            counter = Object.values(projectedCounterResults).length - Object.values(counterResults).length;
          }
        }else if(Object.values(projectedCounterResults).length < Object.values(counterResults).length){
          counter = Object.values(projectedCounterResults).length;
        }
        att.querySelector("label[for='" + filter.id + "']").querySelector(".filterPreCounter").innerText = "(" + counter + ")";
      })
    });
  }

  function filterJson(form) {
    //form = document.querySelector('[data-filter-form]');

    // selecting filters on
    var filtersOn = getActiveFiltersList(form);
    console.log(filtersOn);

    // filtering results
    var newResults = [];

    newResults = filterNewResultsList(filtersOn);
    console.log(newResults);

    //Filter on search term
    var searchTerm = searchForm.value;
    console.log(searchTerm);
    var searchedResults = [];
    Object.values(newResults).forEach(o => {
      if(o.title.toLowerCase().includes(searchTerm.toLowerCase())){
        searchedResults.push(o);
      }
    })
    console.log(searchedResults);

    //rebuild document
    rebuildList(searchedResults, filtersOn);

    // callDebug(jsonFilters, jsonCourses, filtersOn, newResults, coursesList);
  }

  function getActiveFiltersList(form) {
    var activeFiltersList = [];
    var attValues = [];

    // for each attribute group
    form.querySelectorAll('fieldset').forEach(att => {

      attValues = [];
      filterName = att.querySelectorAll('legend')[0].innerText;

      att.querySelectorAll('input[type="checkbox"]').forEach(filter => {
        if (filter.checked) {
          attValues.push(att.querySelector("label[for='" + filter.id + "']").querySelector('.filterName').innerText);
        }
      })

      if (attValues.length > 0){
        activeFiltersList.push({ filterId: att.id, filterName: filterName, filterValues: attValues });
      }

      att.querySelectorAll('select').forEach(filter => {
        attValues = [];
        if (filter.value != "") {
          attValues.push(filter.value)
          activeFiltersList.push({ filterId: filter.id, filterName: filterName, filterValues: attValues });
        }

      });

    });

    return activeFiltersList;
  }

  function filterNewResultsList(filtersOnList) {
    var newResultsList = [];

    // by attribute
    filtersOnList.forEach(filter => {
      newResultsList.push(Object.values(jsonCourses).filter((x) => filter.filterValues.some(
        function(r) {
          if(x[filter.filterId] !== undefined){
            return x[filter.filterId].includes(r);
          }else{
            return false;
          }
        })
      ));
    })

    // if no filter, show all courses
    if (newResultsList.length === 0)
      newResultsList = jsonCourses;
    // intersection between results [courses]
    else
      newResultsList = newResultsList.reduce((a, c) => a.filter(i => c.includes(i)));

    return newResultsList;
  }

  function rebuildList(newResults, filtersOn) {

    showFilterCounters(filterForm);

    const articles = coursesList.querySelectorAll('aside');
    var totalCoursesCounter = document.getElementById("total-courses");
    var filterCoursesString = document.getElementById("filter-courses-info");

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

    //Sort items
    var list = document.querySelector('.courses-list');
    var sortedArticles = Array.from(articles);
    newResults.sort(sortList);
    sortedArticles.sort(function(a, b){  
      return newResults.findIndex(x => x.title === a.id) - newResults.findIndex(x => x.title === b.id);
    });
    list.innerHTML = "";
    
    for (i = 0; i < sortedArticles.length; ++i) {
      list.appendChild(sortedArticles[i]);
    }

    sortedArticles.forEach(el => {
      if (!Object.values(newResults).find(o => o.id === el.id))
        el.hidden = true;
      else
        el.hidden = false;
    })

    if(Object.values(newResults).length === 1){
      totalCoursesCounter.innerText = Object.values(newResults).length + " course";
    }else{
      totalCoursesCounter.innerText = Object.values(newResults).length + " courses";
    }

    var searchTerm = searchForm.value;
    filterCoursesString.innerText = "";

    if (searchTerm.length > 0){
      var attName = document.createElement('dt');
      attName.innerText = "Searchterm: ";
      listFiltersOnString.appendChild(attName);

      var attValues = document.createElement('dd');
      attValues.innerText = "\"" + searchTerm + "\"";
      listFiltersOnString.appendChild(attValues);

      console.log("search: "+searchTerm);
      // filterCoursesString.appendChild += "Searchterm: \"" + searchTerm + "\"";
    }


    if(filtersOn.length > 0 || searchTerm > 0){
      var headerFiltering = document.createElement('h4');
      headerFiltering.innerText = "Current filtering criteria:";
      filterCoursesString.appendChild(headerFiltering);
      filterCoursesString.appendChild(listFiltersOnString);
      hideClearButton(false);
    }
    else {
      filterCoursesString.innerText = "";
      hideClearButton(true);
    }
    

    if (Object.values(newResults).length === 0) 
      filterCoursesString.innerText = "Sorry, but no courses match the following criteria: ";

    console.log(newResults);
    showFilterCounters(filterForm);
  }

  function sortList(a, b) {
    var selectedSort = document.querySelector('.sort-by').querySelector('select').value;
    if(selectedSort == "alphabeticallyaz"){
      return a.title.localeCompare(b.title);
    }else if(selectedSort == "alphabeticallyza"){
      return b.title.localeCompare(a.title);
    }else if(selectedSort == "recentlyupdated"){
      return new Date(b.update) - new Date(a.update);
    }else if(selectedSort == "recentlyadded"){
      return new Date(b.release) - new Date(a.release);
    }
    return false;
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

if (document.getElementById("form-submit-a-course")) {
  _addLine();
}

function _addLine() {
  var buttons = document.querySelectorAll('button.add-line');

  Array.prototype.forEach.call(buttons, function addClickListener(button) {
    button.addEventListener('click', function (event) {
      var parent = event.target.parentNode;
      var lines = parent.querySelectorAll('.line');
      var proto = parent.querySelector('.proto');
      var newLine = proto.cloneNode(true);

      newLine.classList.remove('proto');
      newLine.classList.add('line');
      newLine.innerHTML = newLine.innerHTML.replace(/\[n\]/g, lines.length + 1);

      proto.parentNode.insertBefore(newLine, proto);

      newLine.querySelector('input, checkbox, select').focus();
    });
  });
}


