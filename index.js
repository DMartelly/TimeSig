function timesig() {
    var topNum = parseInt(topN.value);
    var bottomNum = parseInt(bottomN.value);
    if (!topNum || !bottomNum){
        result.textContent = "Please enter a valid top and bottom number, and string"
        return
    }
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

var topN = document.getElementById('T');
var bottomN = document.getElementById('B');
var myString = document.getElementById("myString");
var result = document.getElementById('stdout');
topN.addEventListener("input", timesig);
bottomN.addEventListener("input", timesig);
myString.addEventListener("input", timesig);
timesig()