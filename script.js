
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

    // generate remaining password
    while(currChar < passLength) {

        // generate random number
        rand = Math.floor(totalLength * Math.random());

        // generate character based on index
        if(rand < lowerChars.length) {
            password.push(lowerChars[rand]);
            continue;
        } else {
            rand -= lowerChars.length;
        }

        if(rand < upperChars.length) {
            password.push(upperChars[rand]);
            continue;
        } else {
            rand -= upperChars.length;
        }

        if(rand < nums.length) {
            password.push(nums[rand]);
            continue;
        } else {
            rand -= nums.length;
        }

        if(rand < special.length) {
            password.push(special[rand]);
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