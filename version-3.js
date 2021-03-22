var arr1 = ['asdf', 'fdas', 'asds', 'dfm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];

var resArr = [];
 
for (let word of arr1) {
    
    var lettersCount = {};
 
    for (x = 0; x < word.length; x++) {
        let letter = word[x];
        lettersCount[letter] = ((!lettersCount[letter]) ? 1 : lettersCount[letter] + 1);
    }
 
    for (let key in lettersCount) {
        if (lettersCount[key] === 2) {
            resArr.push(word);
        }
    }
}

for (let word of resArr) {
  console.log(word);
}