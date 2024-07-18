let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);

saveButton.addEventListener("click", function () {
  if (textInput.value.length <= 140) {
    let text = textInput.value;
    text = text.replaceAll("\n", "<br>");

    let cardColor = "";
    if (categoryInput.value === "Учеба") {
      cardColor = "study";
    } 
    else if(categoryInput.value === "Важно"){
      cardColor = "important";
    }
    else if(categoryInput.value === "Программирование"){
      cardColor = "programming";
    }
    

    notesNode.innerHTML +=
      `<div class="col-4">
    <div class="card ${cardColor}">
      <div class="card-body">
        <h5 class="card-title ">` +
      titleInput.value +
      `</h5>
        <h6 class="card-subtitle mb-2 text-muted">` +
      categoryInput.value +
      `</h6>
        <p class="card-text">` +
      text +
      `</p>
      </div>
      <div class="card-footer text-muted">
        ` +
      dateInput.value +
      `
      </div>
    </div>
  </div>
  `;
  }
});

// сколько символов в строке
let wordCount = document.getElementById("word-count");
textInput.addEventListener("input", function () {
  wordCount.textContent = textInput.value.length + "/140";

  if (textInput.value.length > 140) {
    wordCount.textContent = "Превышена длина текста!";
  }
});
