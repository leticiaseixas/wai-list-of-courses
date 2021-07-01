const filterForm = document.querySelector('[data-filter-form]');
const jsonOffers = JSON.parse('{{ site.data.offers | jsonify}}');
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

    // ############
    // no filters means all filters #todo ?
    // ############

    // Getting filters on and filtering offers by label
    form.querySelectorAll("input[type='checkbox']").forEach(el => {
      if (el.checked) {
        var label = form.querySelector("label[for='" + el.id + "']");
        filtersOn.push(label.innerText);
      }
    });

    if (filtersOn.length === 0) newResults = jsonOffers;

    newResults = jsonOffers.filter((contact) => 
      filtersOn.every((tag) => Object.values(contact).includes(tag)));



    //rebuild document
    rebuildList(newResults, filtersOn);

    
    console.log("Offers:");
    console.log(jsonOffers);
    console.log("Filters:");
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
    }
    else if(newResults.length > 0){
      document.getElementById("total-offers").innerText = 
        "Showing " + newResults.length + " offers matching the filters: " + filtersOn.toString();
    }
    else
      document.getElementById("total-offers").innerText = "Sorry, but no items match these criteria";

  }

}