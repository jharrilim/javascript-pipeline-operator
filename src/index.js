function multiply(x, y) {
    return x * y;
}

function double(x) {
    return x * 2;
}

function printf(template) {
    function _print(objs) {
        if (!objs) {
            console.log(objs);
            return objs;
        }
        if (template) {
            if (Symbol.iterator in Object(objs)) {
                for (let i = 0; i < objs.length; i++) {
                    const regexp = new RegExp('\\{' + i + '\\}', 'gi');
                    template = template.replace(regexp, objs[i]);
                }
                console.log(template);
            }
            else {
                const regexp = new RegExp('\\{0\\}', 'gi');
                template = template.replace(regexp, objs);
                console.log(template);
            }
        }
        else {
            console.log(objs);
        }
        return objs;
    }
    return _print;
}

function map(action) {
    function _map(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = action(arr[i]);
        }
        return newArr;
    }
    return _map;
}

function filter(predicate) {
    function _filter(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    return _filter;
}

// TODO
function reduce(accumulate) {
    function _reduce(arr, accumulator) {
        if (Symbol.iterator in Object(arr)) {
            if (arr.length < 2) {
                return accumulate(accumulator, arr[0]);
            }
            for(let i = 0; i < arr.length; i++) {
                accumulator = accumulate(accumulator, arr[i]);
            }
            return accumulator;
        }
        return accumulate(accumulator, arr);
    }
    return _reduce;
}


function main() {
    // (5 * 2) * 3 = 30
    let x = 5
        |> double
        |> (five => multiply(five, 3))
        |> printf("5 * 2 * 3 = {0}");

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // An array where each element in arr has 1 added to it
    let arrPlusOne = ((n) => n + 1) |> arr.map;
    console.log('arr + 1: ' + arrPlusOne);

    // Pipes work well with currying:
    // f(x)(g)
    // can be done with:
    // g |> f(x)
    let bigArr = arr
        |> map(x => x * 10)
        |> filter(x => x > 40)
        |> printf("Numbers greater than 40: ")
        |> printf();
}
main();