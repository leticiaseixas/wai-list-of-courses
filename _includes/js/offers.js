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
    // no filters means all filters #todo
    // ############

    // Getting filters on and filtering offers by label
    form.querySelectorAll("input[type='checkbox']").forEach(el => {
      if (el.checked) {
        var label = form.querySelector("label[for='" + el.id + "']");
        filtersOn.push(label.innerText);
      }
    });

    if (filtersOn.length === 0) newResults = jsonOffers;

    var searchTest = function (varToSearch, jsonOffers) {

      for (var key in jsonOffers) {
        if (typeof (jsonOffers[key]) === 'object') {
          searchTest(filtersOn, jsonOffers[key]);
        } else {
          if (varToSearch.includes(jsonOffers[key])) {
            newResults.push(jsonOffers);

          }
        }
      }

    }


    searchTest(filtersOn, jsonOffers);

    console.log("Offers:");
    console.log(jsonOffers);
    console.log("Filters:");
    console.log(filtersOn);
    console.log("Results:");
    console.log(newResults);

    //rebuild document
    rebuildList(newResults);

  }

  function rebuildList(newResults) {

    // Create result message container and copy HTML from doc

    const articles = offersList.querySelectorAll('ARTICLE');

    articles.forEach(el => {
      if (!newResults.find(o => o.id === el.id))
        el.hidden = true;
      else
        el.hidden = false;
    })

    offersList.getElementById("total-offers").innerText = "Showing " + newResults.length + " offers";

    console.log("offersList");
    console.log(offersList);



    //offersList.innerHTML = doc.body.innerHTML;    
  }

  /*
  
    function submitForm(form) {
      // get status message references
      const statusBusy = document.querySelector('.status-busy');
      const statusFailure = document.querySelector('.status-failure');
  
  
      console.log(filtersChecked);
  
      // Post data using the Fetch API
       fetch(form.action, {
          method: form.method
          //body: new FormData(form)
        })
        // We turn the response into text as we expect HTML
        .then(res => res.text())
    
        // Let's turn it into an HTML document
        .then(text => new DOMParser().parseFromString(text, 'text/html'))
    
        // Now we have a document to work with let's replace the <form>
        .then(doc => {
    
          // Create result message container and copy HTML from doc
          const offersList = document.getElementById('offers-list');
          offersList.innerHTML = doc.body.innerHTML;
    
          // Allow focussing this element with JavaScript
          offersList.tabIndex = -1;
    
    
          // Hide the busy state
          statusBusy.hidden = true;
    
          // Hide error message
          statusFailure.hidden = true;
    
          // Unlock form elements
          Array.from(form.elements).forEach(field => field.disabled = false);
        })
        .catch(err => {
    
          // Unlock form elements
          Array.from(form.elements).forEach(field => field.disabled = false);
    
          // Return focus to active element
          lastActive.focus();
    
          // Hide the busy state
          statusBusy.hidden = true;
    
          // Show error message
          statusFailure.hidden = false;
    
          console.log(err);
        });
    
      // Before we disable all the fields, remember the last active field
      const lastActive = document.activeElement;
    
      // Show busy state and move focus to it
      statusBusy.hidden = false;
    
      // Disable all form elements to prevent further input
      Array.from(form.elements).forEach(field => field.disabled = true);
    
      // Make sure connection failure message is hidden
      statusFailure.hidden = true; 
    }
  
  */
}