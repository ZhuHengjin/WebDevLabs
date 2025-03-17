var x, y;
x = 5;
y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(L) {
//     for (var i = 0; i < L.length; i++) {
//         if (L[i] == "Banana") {
//             alert("Found the Banana at index " + i);
//             break;
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

function checkSingleArray(singleArray, arrayIndex) {
    for (let i = 0; i < singleArray.length; i++) {
        if (singleArray[i] === "Banana") {
            if (arrayIndex === 0) {
                alert("We found a banana in the first array");
            } else if (arrayIndex === 1) {
                alert("We found a banana in the second array");
            } else {
                alert("No banana found in first or second array");
            }
        }
    }
}

function findTheBananaForEach(arrays) {
    arrays.forEach(checkSingleArray);
  }

findTheBananaForEach([L1, L2]);

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning, I am Henry";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon, I am Henry";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening, I am Henry";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        E.innerHTML = "Good night, I am Henry";
    }
}

if (window.location.href.indexOf("index.html") > -1 || window.location.href.endsWith('/')) {
    greetingFunc();
}