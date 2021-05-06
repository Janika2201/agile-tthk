function ReverseString(string) {
    return string.split("").reverse().join("").replace(" ", "").toLowerCase();
}

function Palindrome(string) {
    return string.toLowerCase().replace(" ", "") == reverseString(string);
}

function MultiplicationTable(int) {
    for (i = 1; i < 20; i++) {
        console.log(`${int} X ${i} = ${int * i}`);
    }
}

function Maxminarr(arr) {
    let min = arr[0];
    let max = arr[0];
    arr.forEach(i => {
        if (i > max) {
            max = i;
        }
        if (i < min) {
            min = i;
        }
    });
    console.log(`Min = ${min}, Max = ${max}`);
}

function Largestgiven(arr) {
    let max = arr[0];
    if (arr.length <= 3) {
        arr.forEach(i => {
            if (i > max) {
                max = i;
            }
        });
        console.log(`Max = ${max}`);
    } else {
        console.log("Too many elements!")
    }

}

function Arraysum(string) {
    arr = string.split("");
    let result = "0";
    arr.forEach(i => {
        result = parseInt(result) + parseInt(i)
    });
    console.log(`The sum is ${result}`)
}

function Pyramid(int) {
    for(var i=1; i=rows; i++)
    {
        for(var k=1; k<=( rows-i ); k++)
        {
            document.write("&nbsp;");
        }
        for (var j=1; j<=i; j++)
        {
            document.write("* ");
        }
        document.write("<br/>");
    }
}

function Evenodd(int) {
    if (int % 2 == 0) {
        console.log(`${int} is even`)
    }
    else {
        console.log(`${int} is not even`)
    }

}

console.log(reverseString("Tere"));
console.log(checkPalindrome("civic"));
multiplicationTable(4);
maxminarr([1, 2, 3, 4]);
largestgiven([41, 53, 17]);
arraysum("45865");
pyramid(5); 
evenodd(61)