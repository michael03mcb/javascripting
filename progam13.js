var pets = ['cat', 'dog', 'rat'];
var total = pets.length;
for (var i = 0; i < total; i++) {
    pets[i] = pets[i] + "s";
}
console.log(pets);