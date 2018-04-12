// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

updateView();

function removeElement(index) {
    arr.splice(index, 1)                          // usuwamy wartość którą chcemy uzunąć z tablicy
    updateView()                                // aktualizujemy wygląd bez tej tablicy
}

function removeLast() {
    arr.pop()                         // usuwamy wartość którą chcemy uzunąć z tablicy
    updateView()                                // aktualizujemy wygląd bez tej tablicy
}
function removeFirst() {
    arr.shift()                         // usuwamy wartość którą chcemy uzunąć z tablicy
    updateView()                                // aktualizujemy wygląd bez tej tablicy
}


function pushElement(){//dodatnie wpisanego tekstu na koniec tablicy
    ////tutaj pobieramy watość z input o id = element-name
    var value = document.getElementById("element-name").value
    console.log(value)
    arr.push(value)
    updateView()
}


function unshiftElement(){  //dodatnie wpisanego tekstu na początek tablicy
    ////tutaj pobieramy watość z input o id = element-name
    var value2 = document.getElementById("element-name").value
    console.log(value2)
    arr.unshift(value2)
    updateView()
}

function updateView() {
    var arrayElementsDOM = document.getElementById('array-elements');
    // Usunie mi istniejace boxy
    arrayElementsDOM.innerHTML = "";
    // Narysuje mi je ponownie
    arr.forEach(drawBox);
    // Aktualizuje informacje o tablicy
    drawArrayInfo(arr);
}

// Pokazujemy informacje o tablicy
function drawArrayInfo(arr) {
    console.log('Rysuję informację o tablicy:');
    console.log(arr);
    var arrayElementsDOM = document.getElementById('array');
    arrayElementsDOM.innerHTML = "";
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<h3><small class="text-muted pr-2">Length:</small>' + arr.length + '</h3>');
}

// Rysowanie boxu z informacja
function drawBox(arrValue, index) {
    console.log('Rysuję BOX dla wartości "' + arrValue + '" [klucz = ' + index + ']');
    var arrayElementsDOM = document.getElementById('array-elements');
    var html = '<div class="col-3">\n\
<div class="box">\n\
<div class="box-actions">\n\
<button class="btn btn-danger btn-sm" onclick="removeElement(\'' + index+ '\')">\n\
<span class="badge badge-secondary">'+index+'</span>\n\
<i class="far fa-trash-alt"></i>\n\
</button>\n\
</div>\n\
<h2>' + arrValue + '</h2>\n\
</div>\n\
</div>';
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}

