const options = { year: 'numeric', month: 'long', day: 'numeric' };


document.querySelector('.start-preview').addEventListener('click', e => {
    getPreviewSubmission(e);
})


//function getPreviewSubmission() {
function getPreviewSubmission(e) {

    e.preventDefault();


    const overlay = document.getElementById("preview-submission-overlay");
    const overlayContent = overlay.querySelector(".overlay-content");

    overlayContent.querySelectorAll('.button-close_preview').forEach(el => {
        el.addEventListener('click', e => {
            closePreviewOverlay();
        })
    })

    overlay.style.display = "flex";

    const data = document.getElementById('form-submit-a-course').elements;

    var detailsPreview = document.querySelector(".details_preview");
    detailsPreview.innerText = "";

    var list = document.createElement("ul");
    detailsPreview.appendChild(list);


    Array.from(data).forEach(el => {

        var elType = el.getAttribute("type");


        if ((elType === "text" || elType === "email" || elType === "url" || elType === "date") && (!el.classList.contains('input_hidden')) && (!el.classList.contains('new-option-field'))) {

            var label = document.querySelector("label[for='" + el.id + "']").innerText;

            var value = "";
            if (el.value === "") value = "{{strings.not_provided}}";
            else {
                value = el.value;

                if (elType === "date") {

                    value = new Date(value);
                    value = value.toLocaleDateString(undefined, options);
                }

            }

            var listItem = document.createElement("li");
            listItem.innerText = label + ": " + value;
            list.appendChild(listItem);
        }

        if (el.classList.contains('fieldset_radio')) {

            var radiosChecked = el.querySelector("input[type='radio']:checked");


            var label = getFieldsetText(el.querySelector("legend"));

            var value = "";
            if (radiosChecked) value = document.querySelector("label[for='" + radiosChecked.id + "']").innerText;
            else value = "{{strings.not_provided}}";

            var listItem = document.createElement("li");

            var newField = el.querySelector('.new-option-field');

            if (newField && newField.value) {
                value += " (" + newField.value + ")";
            }

            listItem.innerText = label + ": " + value;

            list.appendChild(listItem);

        }
        if (el.classList.contains('fieldset_select_text')){
            console.log("TODO: Country && Lang");
        }

        if (el.classList.contains('fieldset_check') || el.classList.contains('fieldset_check_title')) {


            var label = getFieldsetText(el.querySelector("legend"));

            var listItem = document.createElement("li");
            listItem.innerText = label + ":";
            list.appendChild(listItem);


            var checks = el.querySelectorAll("input[type='checkbox']:checked");

            if (checks) {

                if (el.classList.contains('fieldset_check_title')) {

                    el.querySelectorAll('details').forEach(d => {

                        var subListTitle = document.createElement("ul");
                        var subListItems = document.createElement("li");
                        subListItems.innerText = d.querySelector('h4').innerText + ": ";
                        subListTitle.appendChild(subListItems);

                        var checksItem = d.querySelectorAll("input[type='checkbox']:checked");

                        if (checksItem.length === 0) {

                            subListItems.innerText += "{{strings.not_provided}}";

                        }
                        else {

                            var subListItemsList = document.createElement("ul");
                            subListItems.appendChild(subListItemsList);

                            checksItem.forEach(c => {

                                var subListItemsListItem = document.createElement("li");
                                subListItemsListItem.innerText = el.querySelector("label[for='" + c.id + "']").innerText;

                                subListItemsList.appendChild(subListItemsListItem);
                            })
                        }
                        listItem.appendChild(subListTitle);
                    });
                }

                else {
                    var sublist = document.createElement("ul");

                    checks.forEach(c => {

                        var subListItem = document.createElement("li");
                        subListItem.innerText = el.querySelector("label[for='" + c.id + "']").innerText;
                        sublist.appendChild(subListItem);
                    })


                    if (checks.length === 0) {

                        listItem.innerText += " {{strings.not_provided}}";

                    }

                    listItem.appendChild(sublist);

                }
            }
        }
    });
}

function closePreviewOverlay() {
    var overlay = document.getElementById("preview-submission-overlay");
    overlay.style.display = "none";
}


function getFieldsetText(str) {

    if (str.querySelector('h3'))
        return str.querySelector('h3').innerText;
    return str.innerText;
}
