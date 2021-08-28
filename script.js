
// show password
function showPass(lengthID = "", lowerID = "", upperID = "", numID = "", specialID = "") {

    // default settings
    length = 8;
    lower = true;
    upper = false;
    num = false;
    special = false;

    // get inputs
    if(lengthID.length != 0) length = document.getElementById(lengthID).value;
    if(lowerID.length != 0) lower = document.getElementById(lowerID).checked;
    if(upperID.length != 0) upper = document.getElementById(upperID).checked;
    if(numID.length != 0) num = document.getElementById(numID).checked;
    if(specialID.length != 0) special = document.getElementById(specialID).checked;

    document.getElementById("pass").innerHTML = createPass(length, lower, upper, num, special);
}

// function to create password given input parameters
function createPass(passLength = 12, hasChars = true, hasCaps = true, hasNums = true, hasSpecial = false) {

    // store password characters
    lowerChars = [];
    upperChars = [];
    nums = [];
    special = [];

    // store password
    password = new Array(passLength);
    currChar = 0;

    // generate available characters and add at least one to password
    if(hasChars) {
        lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        password.push(randomChar(lowerChars));
        currChar++;
    }

    if(hasCaps) {
        upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        password.push(randomChar(upperChars));
        currChar++;
    }

    if(hasNums) {
        nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        password.push(randomChar(nums));
        currChar++;
    }

    if(hasSpecial) {
        special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '<', '>', '?', '[', ']', '{', '}'];
        password.push(randomChar(special));
        currChar++;
    }

    // number of total available characters
    totalLength = lowerChars.length + upperChars.length + nums.length + special.length;

    if(totalLength <= 0) return;

    // generate remaining password
    while(currChar < passLength) {

        // generate random number
        rand = Math.floor(totalLength * Math.random());

        // generate character based on index
        if(rand < lowerChars.length) {
            password.push(lowerChars[rand]);
            currChar++;
            continue;
        } else {
            rand -= lowerChars.length;
        }

        if(rand < upperChars.length) {
            password.push(upperChars[rand]);
            currChar++;
            continue;
        } else {
            rand -= upperChars.length;
        }

        if(rand < nums.length) {
            password.push(nums[rand]);
            currChar++;
            continue;
        } else {
            rand -= nums.length;
        }

        if(rand < special.length) {
            password.push(special[rand]);
            currChar++;
            continue;
        } else {
            rand -= special.length;
        }

    }

    // shuffle and return
    shuffle(password);
    return password.join('');

}

// shuffle the elements in the input array in place
// uses Fisher-Yates Shuffle
function shuffle(array = []) {

    // check for edge cases
    if(array.length == 0) return;

    // loop through array and shuffle
    for(i = array.length - 1; i > 0; i--) {

        // random number between 0 and i
        j = Math.floor((i + 1) * Math.random());

        // swap
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;

    }

}

// return random element from input array
function randomChar(array = []) {

    if(array.length == 0) return null;

    return array[Math.floor(array.length * Math.random())];

}

function changeLabel(inputID = "", outputID = "", text = "") {

    // do nothing if no input or output
    if(inputID.length == 0 || outputID.length == 0) return;

    value = document.getElementById(inputID).value;
    document.getElementById(outputID).innerHTML = text + " " + value;

}