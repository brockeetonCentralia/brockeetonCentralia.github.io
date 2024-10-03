const words = ["Broc Keeton.", "a Software Developer.", "a Learner."];
let i = 0;
let counter;
// let pause;

function typeNow() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('text').innerHTML += word.shift();
        } else {
            // pause = setTimeout(400);
            deleteNow();
            return false;
        };
        counter = setTimeout(loopTyping, 100);
        
    };
    loopTyping();
};

function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typeNow();
            return false;
        };
        counter = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};
typeNow();