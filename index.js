/**
 * Based on formula found here : https: //en.wikipedia.org/wiki/Derangement
 * 
 */

var derangement = function (n) {
    var sigma = 0
    for (var i = 0; i <= n; i++) {
        sigma += Math.pow(-1, i) / fact(i)
        console.log(sigma)
    }
    var derangement = fact(n) * sigma
    return derangement
}

function fact(x) {
    if (x == 0)
        return 1;
    if (x < 0)
        return undefined;
    for (var i = x; --i;)
        x *= i;
    return x;
}

module.export = derangement