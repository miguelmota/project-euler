/*
* Problem 1
* Multiples of 3 and 5
*
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
*
* Find the sum of all the multiples of 3 or 5 below 1000.
*/

(function() {
    function iterator(limit, func) {
        var acc = 0;

        for (var i = 0; i < limit; i++) {
            acc += func(i);
        }

        return acc;
    }

    function multiples() {
        var m = [].slice.apply(arguments);

        return function(i) {
            return m.some(function(n) {
                if (i % n === 0) {
                    return true;
                }
                return false;
            }) ? i : 0;
        };
    }

    return iterator(1000, function(i) {
        return multiples(3,5)(i);
    });
})();
