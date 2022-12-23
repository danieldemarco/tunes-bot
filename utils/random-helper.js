// Helper functions for randomizing player matchups
const splitAt = function(i, list) {
    var a = list.slice(0,i);
    var b = list.slice(i, list.length);
    return [a, b];
};

const shuffle = function(list) {
    return list.slice(0).sort(function() {
        return .5 - Math.random();
    });
};

var zip = function(list) {
    return list[0].map(function(_,i) {
        return list.map(function(x) {
            return x[i];
        });
    });
};

var createMatchups = function(list) {
    if(list.length % 2 != 0) {
        console.log("Error. List has uneven number of items.");
        return
    }
    return zip(splitAt(list.length/2, shuffle(list)));
}


var myList = ['poopy', 'Apples', 'Bananas', 'Carrots', 'Penuts', 'Soccerballs', "Tears"];
console.log(createMatchups(myList));
