function timesig() {
    var topNum = parseInt(ttop.value);
    var bottomNum = parseInt(bottom.value);
    var content = myString.value.toLowerCase().split("")
    var newString = [];
    for (var i = 0; i < content.length; i++) {
        while (content[i] === ' ') {
            content.splice(i, 1);
            newString.push(' ');
        }
        if ((i + 1) % topNum == 0) {
            var newChar = String.fromCharCode(content[i].charCodeAt(0) - bottomNum)
            if (newChar.charCodeAt(0) < 97) {
                newChar = String.fromCharCode(newChar.charCodeAt(0) + 26)
            }
            newString.push(newChar);
        } else {
            newString.push(content[i])
        }
    }
    result.textContent = newString.join("")
}

var ttop = document.getElementById('T');
var bottom = document.getElementById('B');
var myString = document.getElementById("myString");
var result = document.getElementById('stdout');
myString.addEventListener("input", timesig);

/*
3/4
e v i r y x h i r g
0 1 2 3 4 5 6 7 8 9 
o o x o o x o o x o
index + 1 % 3 -
*/