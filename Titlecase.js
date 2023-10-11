function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let text = "this is a sample text";
let titleCasedText = toTitleCase(text);
console.log(titleCasedText);
