const filterForm = document.querySelector('[data-filter-form]');

if (filterForm) {

  filterForm.addEventListener('change', e => {
    submitForm(filterForm);
  });

  filterForm.addEventListener('submit', e => {

    // Store reference to form to make later code easier to read
    const form = e.target;

    submitForm(form);

    // Prevent the default form submit
    e.preventDefault();
  });


  function filterJson(form) {

    var filtersOn = [];
    form.querySelectorAll("input[type='checkbox']").forEach(el => {
      if (el.checked) filtersOn.push(el.name);
    });

    fetch(form.action)
      
      .then((response) => {
        var jsonData = response;
        
        console.log(jsonData);
        console.log(filtersChecked);

        var searchTest = function (varToSearch, jsonData) {

          for (var key in jsonData) {
            if (typeof (jsonData[key]) === 'object') {
              searchTest(filtersOn, jsonData[key]);
            } else {
              if (varToSearch.includes(jsonData[key])) {
                console.log(jsonData);
              }
            }
          }

        }

        searchTest(filtersOn, jsonData);







      }

  }

  function submitForm(form) {
    // get status message references
    const statusBusy = document.querySelector('.status-busy');
    const statusFailure = document.querySelector('.status-failure');


    filterJson(form);

    //console.log(filtersChecked);

    // Post data using the Fetch API
    /* fetch(form.action, {
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
    statusFailure.hidden = true; */
  };
}
