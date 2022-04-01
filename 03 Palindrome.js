function palindrome(str){
    var newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var rev = newStr.split('').reverse().join("");
    return newStr === rev;

}

console.log(palindrome("Ayoub , a kan, a nin, Oabal"))