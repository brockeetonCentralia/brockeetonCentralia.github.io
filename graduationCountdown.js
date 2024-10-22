var countDownDate = new Date("June 17, 2025 21:00:00").getTime();

let i = 0;
let counter;
// let pause;

function typeNow() {
    let word = countDownDate[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('text').innerHTML += word.shift();
        } else {
            // pause = setTimeout(400);
            // deleteNow();
            return false;
        };
        counter = setTimeout(loopTyping, 220);
    };
    loopTyping();
};

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + " days " + hours + " hrs " + minutes + " mins " + seconds + " sec ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Expired";
    }
}, 1000);

// function deleteNow() {
//     let word = words[i].split("");
//     var loopDeleting = function() {
//         if (word.length > 0) {
//             word.pop();
//             document.getElementById('text').innerHTML = word.join("");
//         } else {
//             if (words.length > (i + 1)) {
//                 i++;
//             } else {
//                 i = 0;
//             };
//             typeNow();
//             return false;
//         };
//         counter = setTimeout(loopDeleting, 100);
//     };
//     loopDeleting();
// };
typeNow();