// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

//
// var arr2 = arr.map(function(value, index, array){
//
//     var count = 0
//     array.forEach(function (v) {//dla każdej wartości jaką wstawimy w funkcję spradzamy czy jest taki kolejny (counter) dla każdej sumy
//         if (v === value){
//             count ++
//         }
//     })
//         return value + '('+count+' x)'
// })
// console.log(arr2)

///////////////////////////////////////////////
///////////////////////////////////////////////
var arr2 = arr.map(function(value, index, array){

    var key = array.indexOf(value)      // sprawdzamy index danej wartości
    var count = 0                       // counter na 0
    while (key != -1){                  // dopóki key jest różne od -1 liczymy ile jest tych indexOf
        count ++                        // jeżeli sprawdzamy tablicę, dana wartość na pewno wystąpi chociaż 1 raz czyli jest ich tyle ile jest dopóki indexOf nie będzie -1
        key = array.indexOf(value, key + 1)
    }
    return value + '('+count+' x)'
})
console.log(arr2)
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////




function activateBox(value) {
    console.log('Aktywuje BOXY dla wartości "' + value + '"');
    var arrayElementsDOM = document.getElementById('array-elements');
    var key = arr.indexOf(value);
    var box = arrayElementsDOM.childNodes[key];
    box.className += " box-active";
}

updateView();
var filteredArr = arr.filter(function(value){ // filtruje wartości tablicy które są mniejszej długości lub równe 5
    if (value.length > 5)
        return true
})


var reduced = filteredArr.reduce(function(result, value){
    return result += value.length
},0)

console.log(reduced + " suma długości przefiltorwanych samochodów")


filteredArr.forEach(function(value) {
    activateBox(value)  //podświetlenie filtorwanych wartości na niebiesko
})

//var arr2Dim = [
//    ["Nazwa", "Koszt", "Rocznik"],
//    ["Ferrari", 50000, 2007],
//    ["Skoda", 24000, 1997],
//    ["Mercedes", 5000, 2017]
//];
//
//for (i = 0; i < arr2Dim.length; i++) {
//    for (j = 0; j < arr2Dim[j].length; j++) {
//        drawBox(arr2Dim[i][j]);
//    }
//}
//
//arr2Dim.forEach(function (value) {
//    value.forEach(drawBox);
//});



function removeElement(key) {
    console.log('Usuwam pozycję z tablicy o kluczu "' + key + '"');
    arr.splice(key, 1);
    updateView();
}

function cloneElement(key) {
    console.log('Klonuję pozycję z tablicy o kluczu "' + key + '"');
    arr.splice(key, 0, arr[key]);
    updateView();
}

function mergeElement(key) {
    console.log('Merguje pozycję z tablicy o kluczu "' + key + '"');
    if (key > 0) {
        arr[key - 1] += ' ' + arr[key];
        removeElement(key);
    }
}

function mergeAllElement(key) {
    console.log('Merguje wszystkie pozycję z tablicy o kluczu "' + key + '"');
    if (key > 0) {
        // splice elementów od 1 do key
        var spliced = arr.splice(1, key);
        // join splice'owanych elementów ze spacją (żeby mieć stringa)
        var string = spliced.join(' ');
        // do pierwszego elementu dodaj spację oraz powstały string
        arr[0] = arr[0] + ' ' + string;
        updateView();
    }
}

function moveLeft(key) {
    console.log('Przesuwam w lewo element o kluczu "' + key + '"');
    if (key > 0) {
        var tmp = arr[key - 1];
        arr[key - 1] = arr[key];
        arr[key] = tmp;
        updateView();
    }
}

function moveRight(key) {
    console.log('Przesuwam w prawe element o kluczu "' + key + '"');
    if (key < arr.length - 1) {
        var tmp = arr[key];
        arr[key] = arr[key + 1];
        arr[key + 1] = tmp;
        updateView();
    }
}

function unshiftElement() {
    // Pobranie wartosci z inputa o id = element-name
    var value = document.getElementById("element-name").value;
    arr.unshift(value);
    updateView();
}

function pushElement() {
    // Pobranie wartosci z inputa o id = element-name
    var value = document.getElementById("element-name").value;
    arr.push(value);
    updateView();
}

// Pokazanie wszystkich boxów oraz aktualizacja informacji o tablicy
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
<span class="badge badge-primary float-left">' + index + '</span>\n\
<button class="btn btn-danger btn-sm" onclick="removeElement(\'' + index + '\')">\n\
<i class="far fa-trash-alt"></i>\n\
</button>\n\
<button class="btn btn-warning btn-sm" onclick="cloneElement(\'' + index + '\')">\n\
<i class="far fa-clone"></i>\n\
</button>\n\
<button class="btn btn-primary btn-sm" onclick="mergeElement(\'' + index + '\')">\n\
<i class="fas fa-compress"></i>\n\
</button>\n\
<button class="btn btn-primary btn-sm" onclick="mergeAllElement(\'' + index + '\')">\n\
<i class="fas fa-arrow-left"></i>\n\
</button>\n\
<button class="btn btn-success btn-sm" onclick="moveLeft(' + index + ')">\n\
<i class="far fa-arrow-alt-circle-left"></i>\n\
</button>\n\
<button class="btn btn-success btn-sm" onclick="moveRight(' + index + ')">\n\
<i class="far fa-arrow-alt-circle-right"></i>\n\
</button>\n\
</div>\n\
<h2>' + arrValue + '</h2>\n\
</div>\n\
</div>';
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}

function removeLast() {
    arr.pop();
    updateView();
}

function removeFirst() {
    arr.shift();
    updateView();
}