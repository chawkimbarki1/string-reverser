function revertString() {
    let string = document.getElementsByTagName("textarea")[0].value;
    console.log(string);
    let revertedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        revertedString += string.charAt(i);
    }
    document.getElementsByTagName("p")[0].innerHTML = revertedString;
}