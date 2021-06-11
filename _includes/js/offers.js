const filterForm = document.querySelector('[data-filter-form]');
const offers = "../_data/offers.json";

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


  function filterJson(){

    fetch(offers)
    // We turn the response into text as we expect HTML
    .then((response) => response.json());

    console.log(filtersChecked);

  }

  function submitForm(form) {
    // get status message references
    const statusBusy = document.querySelector('.status-busy');
    const statusFailure = document.querySelector('.status-failure');
    
    const filters = form.querySelectorAll("input[type='checkbox']");
    const filtersChecked = [].filter.call( filters, function( el ) {
      return el.checked;
   });
   filterJson();

    //console.log(filtersChecked);

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
  };
}
