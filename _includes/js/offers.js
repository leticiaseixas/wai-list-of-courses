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
    var newResults = [];
    
    

    // filtering AND
    form.querySelectorAll('fieldset').forEach(element => {
      element.querySelectorAll('input[type="checkbox"]').forEach(el => {
        if (el.checked){
          var filterCategory = element.id; 
          var filterValue = form.querySelector("label[for='" + el.id + "']").innerText;
          filtersOn.push(filterValue);
          var results = jsonOffers.filter(offer => offer[filterCategory] == filterValue); 
          if(results.length > 0) 
            newResults.push(results);        
        }
      });
    });

    // filtering OR
    newResults = newResults.reduce((a, c) => a.filter(i => c.includes(i)));
    
    
    //rebuild document
    rebuildList(newResults, filtersOn);

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

  function rebuildList(newResults, filtersOn) {

    const articles = offersList.querySelectorAll('ARTICLE');

    articles.forEach(el => {
      if (!newResults.find(o => o.id === el.id))
        el.hidden = true;
      else
        el.hidden = false;
    })

    if(filtersOn.length === 0){
      document.getElementById("total-offers").innerText = 
        "Showing " + newResults.length + " offers";
      hideClearFilters(true);  
    }
    else if(newResults.length > 0){
      document.getElementById("total-offers").innerText = 
        "Showing " + newResults.length + " offers matching the filters: " + filtersOn.toString();
      hideClearFilters(false);
    }
    else {
      document.getElementById("total-offers").innerText = "Sorry, but no items match these criteria";
      hideClearFilters(false);
    }
  }

  function hideClearFilters(visibility){
      document.getElementById("deselect").hidden = visibility;
  }

  document.getElementById("deselect").addEventListener('click', e => {
    rebuildList(jsonOffers, []);
    filterForm.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
  });

}