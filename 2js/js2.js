//Задача 1
console.log("Задача 1. Функция absValue");
function absValue(N) {
    if (N < 0) {
        return -N;
    }
    return N;
}


//Задача 2
console.log("Задача 2. isPalindrome");
function isPalindrome(word) {
    let arr = []
    //word.split('');
    for (let char of word) {
        arr.push(char);
    }
    for (let i = 0; 2 * i <= arr.length; i++) {
        if (arr[i] == arr[arr.length - 1 - i])
            return console.log("палиндром");
        else
            return console.log("не палиндром");
    }


}

//Задача3
console.log("Задача 3. matrixAddition");
/*
function checkMatrix(arr1, arr2) {
    if (arr1.length !== arr2.length)
        console.log('Матрицы не равны!');
    else {
        for (let n=1; n < arr1.length; n++){
            if ((arr1[n-1].length !== arr1[n])||(arr2[n-1].length !== arr2[n])||(arr1[n-1].length !== arr2[n-1].length))
            console.log('Матрицы не равны!');
        }
    }
}
*/

function checkMatrix(arr1, arr2) {
    if (arr1.length == arr2.length)
        {
        for (let n=1; n < arr1.length; n++) {
            if ((arr1[n-1].length == arr1[n].length)&&(arr2[n-1].length && arr2[n].length)&&(arr1[n-1].length == arr2[n-1].length)) {
                //console.log('матрицы равны');
                return 1;
            }
            else return 0;
        }
        }
    else 
        return 0;
    }


function matrixAddition(arr1, arr2) {
    let arr3 = [];
    //console.log(arr1[0][1] + arr2[0][1]);
    
    
   
   
    //if ((arr1[0].length == arr1[1].length)&&(arr2[0].length==arr2[1].length)&&(arr1[0].length==arr2[0].length)) {
    if (checkMatrix(arr1, arr2)) {  
        for (let i=0; i<=arr1.length-1; i++) {
                for (let k=0; k<=arr1[0].length-1; k++){
                    arr3.push(arr1[i][k] + arr2[i][k]);
                }
            }
        
        for (let i=0; i<= arr3.length-1; i+=2)
            console.log(arr3[i] + '\t', arr3[i+1] + '\n');
    }
    else {
        return console.log('Матрицы не равны! Сложение невозможно');
    }
    
}
let matrix1 = [[1,2], [0,0], [5,3]], matrix2 = [[2,3], [7,8], [8,7]];
console.log(matrix1.length);
matrixAddition(matrix1, matrix2);

//Задача 4
console.log("Задача 4");
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
};
console.log(`Список свойств: `, Object.keys(student));//console.dir() или console.table(), можно еще использовать методы dir и table
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);


//Задача 5 попытка 2
let elements = document.querySelectorAll('.slide');
let go = document.querySelector('.slider-next');
let back = document.querySelector('.slider-previous');
let currentSlide;
let oldSlide;
let i = 0;

let changeIndexGo = function () {
    i++;
    if (i <= 2) {
        oldSlide = elements[i - 1];
        currentSlide = elements[i];
    }
    else {
        oldSlide = elements[i - 1];
        i = 0;
        currentSlide = elements[i];
    }
}

let changeIndexBack = function () {
    i--;
    if (i >= 0) {
        oldSlide = elements[i + 1];
        currentSlide = elements[i];
    }
    else {
        oldSlide = elements[i + 1];
        i = 2;
        currentSlide = elements[i];
    }
}

go.addEventListener('click', function () {
    changeIndexGo();
    oldSlide.classList.add('hide');
    currentSlide.classList.remove('hide');

});

back.addEventListener('click', function () {
    changeIndexBack();
    oldSlide.classList.add('hide');
    currentSlide.classList.remove('hide');
});

