document.addEventListener("DOMContentLoaded", function (event) {

    let twiButton = document.querySelector('#section-content__button');

    twiButton.onclick = function () {

        let elementsList = document.getElementById('section-content__block-message'),
            input = document.getElementsByName("twitter-text")[0];
        let delitElem = document.getElementsByClassName('section-content__block-m')[0];

            let form = document.getElementById("section-content__block-message");
            elementsList = document.createElement("div");
            elementsList.setAttribute("class", "section-content__block-m");
            form.appendChild(elementsList);
        delitElem.remove(delitElem);

        let div = document.createElement('div');
        div.appendChild(document.createTextNode(input.value));
        elementsList.appendChild(div);


    }
});