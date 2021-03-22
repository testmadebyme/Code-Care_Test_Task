var arr1 = ['asdf', 'fdas', 'asds', 'dfm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];
 
var repeats = [];
var temp = [];
 
for (let letter of arr1) {
 
    var obj = {}
 
    for (x = 0, length = letter.length; x < length; x++) {
        let l = letter.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
 
    //console.log(obj)
 
    for (let key in obj) {
        if (obj[key] === 2) {
            repeats.push(new Array(letter).toString(""));
        }
    }
}
for (i = 0; i < repeats.length; i++) {
    temp.push((repeats[i]));
}
 
console.log(Array.from(new Set(temp)));