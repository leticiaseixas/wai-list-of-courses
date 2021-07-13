const filterForm = document.querySelector('[data-filter-form]');
const jsonOffers = JSON.parse('{{ site.data.offers | jsonify}}');
const jsonFilters = JSON.parse('{{site.data.filters | jsonify}}');
const offersList = document.getElementById('offers-list');

if (filterForm) {

  filterForm.addEventListener('change', e => {
    filterJson(filterForm);
  });

  filterForm.addEventListener('submit', e => {

    // Store reference to form to make later code easier to read
    const form = e.target;

    filterJson(form);

    // Prevent the default form submit
    e.preventDefault();
  });


  function filterJson(form) {

    var filtersOn = [];
    var allFiltersOn = [];
    var filterName;
    var newResults = [];
    //var groupFiltered = [];
    var offersFiltered = [];

    // for each group filter category
    form.querySelectorAll('fieldset').forEach(group => {

      // identify filters on
      filtersOn = [];
      offersFiltered = [];

      group.querySelectorAll('input[type="checkbox"]').forEach(filter => {
        if (filter.checked) {
          filterName = group.querySelector("label[for='" + filter.id + "']").innerText;
          filtersOn.push(filterName);
          allFiltersOn.push(filterName);
        }
      });

      if (filtersOn.length > 0) {

        jsonOffers.forEach(offer => {
          if (filtersOn.includes(offer[group.id]))
            offersFiltered.push(offer);
        })
        // groupFiltered.push({'group': group.id, 'filtersOn': filtersOn, 'offers': offersFiltered});
        newResults.push(offersFiltered);

      }
    });

    console.log(newResults);

    // if no filter, show all offers
    if (newResults.length === 0)
      newResults = jsonOffers;
    // intersection between results [offers]
    else
      newResults = newResults.reduce((a, c) => a.filter(i => c.includes(i)));


    //rebuild document
    rebuildList(newResults, allFiltersOn);

    console.log("Filters:");
    console.log(jsonFilters);
    console.log("Offers:");
    console.log(jsonOffers);
    console.log("Filters On:");
    console.log(filtersOn);
    console.log("Results:");
    console.log(newResults);
    console.log("offersList");
    console.log(offersList);

  }

  function clean(obj) {
    for (var propName in obj) {
      if (obj[propName].length === 0) {
        delete obj[propName];
      }
    }
    return obj
  }


  function rebuildList(newResults, filtersOn) {

    const articles = offersList.querySelectorAll('ARTICLE');

    articles.forEach(el => {
      if (!newResults.find(o => o.id === el.id))
        el.hidden = true;
      else
        el.hidden = false;
    })

    if (filtersOn.length === 0) {
      document.getElementById("total-offers").innerText =
        "Showing " + newResults.length + " offers";
      hideClearFilters(true);
    }
    else if (newResults.length > 0) {
      document.getElementById("total-offers").innerText =
        "Showing " + newResults.length + " offers matching the filters: " + filtersOn.toString();
      hideClearFilters(false);
    }
    else {
      document.getElementById("total-offers").innerText = "Sorry, but no items match these criteria";
      hideClearFilters(false);
    }
  }

  function hideClearFilters(visibility) {
    document.getElementById("deselect").hidden = visibility;
  }

  document.getElementById("deselect").addEventListener('click', e => {
    rebuildList(jsonOffers, []);
    filterForm.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
  });

}