var arr1 = ['asdf', 'fdas', 'asds', 'dfm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];

for (let letter of arr1) {

    const sorted = letter.toString("");
    //console.log(sorted);  


    var obj = {}
    var repeats = [];

    for (x = 0, length = sorted.length; x < length; x++) {
        let l = sorted.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }

    //console.log(obj)

    for (let key in obj) {
        if (obj[key] === 2) {
            repeats.push(new Array(sorted));
        }
    }

    //console.log(repeats)

    if (repeats.length === 0) {
        delete repeats
    } else {
        let result = repeats.splice(0, 1);
        console.log(result);

    }

}