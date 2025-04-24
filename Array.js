{
    const a1 = ['a1', 'a2', 'a3', 'a4', 'a5'];

    document.getElementById('arr1').innerHTML = '-- > ' + a1;

    const a2 = new Array('a1', 'a2', 'a3', 'a4', 'a5',);

    document.getElementById('arr2').innerHTML = '-- > ' + a2;

    let a1_4 = a1[3];

    document.getElementById('aceess_array').innerHTML = '-- > ' + a1_4;

    let a1_5 = a1[a1.length - 1];

    document.getElementById('ind_arr').innerHTML = '-- > ' + a1_5;

    a1[0] = 'a_one';

    a1[1] = 'a_two';

    document.getElementById('chang_a1').innerHTML = '-- > ' + a1;

    const cov_string = a1.toString();

    document.getElementById('con_str').innerHTML = '-- > ' + cov_string

    document.getElementById('type').innerHTML = '-- > ' + typeof a1;
    // console.log(a1)

    let ul = '<ul>'

    for (i = 0; i < a1.length; i++) {
        ul += ' <li>' + a1[i] + '</li>';
    }
    ul += '</ul>';

    document.getElementById('loop1').innerHTML = ul
}
{
    const arr = ['one', 'two', 'three', 'foure', 'five', 'six', 'sevan', 'eight'];
    arr.push('nine',);
    arr[arr.length] = 'ten';

    let ol = '<ol style="padding : 0px 0px 0px 20px;">'

    for (i = 0; i < arr.length; i++) {
        ol += '<li>' + arr[i] + '</li>';
    }

    ol += '</ol>';

    document.getElementById('loop2').innerHTML = ol


}


{
    const o1 = {
        name: 'rajan',
        surname: 'Chovatiya',
        eno_no: 230801109,
        roll_no: 17
    }
    document.getElementById('ob1').innerHTML = o1;
}

{
    const cars = {
        car_company: 'TATA',
        owner_name: 'Ratan TATA',
        cars_model: [
            { name: 'TATA', models: ['nexon', 'harrier', 'curve'] },
            { name: 'toyota', models: ['inova', 'fortuner'] },
            { name: 'BMW', models: ['X3', 'X5', '320'] }
        ]
    }
    let c1 = ''
    for (let i in cars.cars_model) {
        c1 += '<h1>' + cars.cars_model[i].name + '</h1>';
        for (let j in cars.cars_model[i].models) {
            c1 += '<p>' + cars.cars_model[i].models[j] + '</p>';
        }
    }

    document.getElementById('arrayobject').innerHTML = c1
}

// ARRAY METHODS   

{
    const number = ['one', 'two', 'three', 'four'];
    let a = number.length;

    document.getElementById('length').innerHTML = a;

    let b = number.toString();

    document.getElementById('tostring').innerHTML = b

    let c = number.at(2);

    document.getElementById('at').innerHTML = c;

    let d = number.join('|');

    document.getElementById('arrayjoin').innerHTML = d;

    const e = number.pop(3);

    document.getElementById('pop').innerHTML = e + ' is deleted';

    document.getElementById('array').innerHTML = 'after deleted : ' + number

    const f = number.push('four');

    document.getElementById('push').innerHTML = f + ' is added';

    document.getElementById('array1').innerHTML = 'after add : ' + number

    const g = number.shift();

    document.getElementById('shift').innerHTML = g

    document.getElementById('arr3').innerHTML = number

    const h = number.unshift('one');

    document.getElementById('unshift').innerHTML = h

    delete number[0];

    document.getElementById('delete').innerHTML = number;
    document.getElementById('d1').innerHTML = 'now One is ' + number[0];

    const number1 = ['one', 'two', 'three'];

    const number2 = ['1', '2', '3'];

    const concat_number = number1.concat(number2 + ', rajan')

    document.getElementById('concat').innerHTML = concat_number

    const copi_within = number.copyWithin(2, 1, 3);

    document.getElementById('copywithin').innerHTML = copi_within;

    const new_numbwe = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    const splice = new_numbwe.splice(2, 2, 'three', 'four');

    document.getElementById('splice').innerHTML = new_numbwe;
}
{
    // const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '4']
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 11];

    const indexof = arr.indexOf('4') + 1;

    document.getElementById('indexof').innerHTML = indexof

    const lastindexof = arr.lastIndexOf('4') + 1;

    document.getElementById('lastindexof').innerHTML = lastindexof;

    const include = arr.includes('4',);

    document.getElementById('include').innerHTML = include;

    const find = arr.find(fi);

    document.getElementById('find').innerHTML = find

    function fi(val, inx, arr) {
        // console.log(val, inx, arr);
        return val > 4;
    }

    const findindex = arr.findIndex(fii);

    function fii(val, indx, arr) {
        return val > 4;
    }

    document.getElementById('findindex').innerHTML = findindex;

    const findlast = arr.findLast(fl);

    function fl(val, indx, arr) {
        return val > 10;
    }

    document.getElementById('findlast').innerHTML = findlast;

    const findlastindex = arr.findLastIndex(fil)

    function fil(val, indx, arr) {
        return val > 4
    }

    document.getElementById('lastfindindex').innerHTML = findlastindex;
    document.getElementById('arr').innerHTML = arr
    function sort1() {
        arr.sort(function () { return 0.5 - Math.random() });
        document.getElementById('arr').innerHTML = arr
    }

    let min = arr.sort(function (a, b) { return a - b })

    document.getElementById('min').innerHTML = min;
}

{
    const myarr = [1, 4, 2, 5, 3, 6,]
    document.getElementById('myar').innerHTML = myarr;

    function reset() {
        myarr.sort(function (a, b) { return 0.5 - Math.random() })
        document.getElementById('myarr').innerHTML = myarr;
    }

    function minmun() {
        let len = myarr.length;
        let min = Infinity;

        while (len--) {
            if (myarr[len] < min) {
                min = myarr[len];
            }
        }
        document.getElementById('minvalue').innerHTML = min;
        console.log(min)
    }

}
{
    const myarr = [1, 5, 2, 6, 3, 7, 4, 8];
    document.getElementById('max_val').innerHTML = myarr;

    function maxvalue() {
        let len = myarr.length;
        let max = -Infinity;

        while (len--) {
            if (myarr[len] > max) {
                max = myarr[len];
            }
        }
        document.getElementById('maxv').innerHTML = max;
    }
}
{
    const myarr = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];
    document.getElementById('sort_array').innerHTML = myarr;

    function sort() {
        let sa = myarr.sort(function (a, b) { return a - b })

        document.getElementById('sorted_array').innerHTML = sa
    }

    function des_sort() {
        let dsa = myarr.sort(function (a, b) { return b - a })

        document.getElementById('sorted_array').innerHTML = dsa
    }
}
{

    const cars = [
        { name: 'saab', year: 2001 },
        { name: 'BMW', year: 2000 },
        { name: 'Volvo', year: 2011 }
    ];

    function displaycars() {
        document.getElementById('object1212').innerHTML = cars[0].name + ' : ' + cars[0].year + '<br>'
            + cars[1].name + ' : ' + cars[1].year + '<br>' + cars[2].name + ' : ' + cars[2].year;
    }

    function sort_object() {
        cars.sort(function (a, b) { return a.year - b.year })

        document.getElementById('object1212').innerHTML = cars[0].name + ' : ' + cars[0].year + '<br>'
            + cars[1].name + ' : ' + cars[1].year + '<br>' + cars[2].name + ' : ' + cars[2].year;
    }

}

{

    const cars = [
        { name: 'saab', year: 2001 },
        { name: 'BMW', year: 2000 },
        { name: 'Volvo', year: 2011 }
    ];

    function dsort() {
        cars.sort(function (i, j) {
            let x = i.name.toLowerCase();
            let y = j.name.toLowerCase();
            if (x > y) { return -1; }
            if (x < y) { return 1; }
            return 0;
        })
        document.getElementById('object12121').innerHTML = cars[0].name + ' : ' + cars[0].year + '<br>'
            + cars[1].name + ' : ' + cars[1].year + '<br>' + cars[2].name + ' : ' + cars[2].year;
    }
}

{
    const a = [12, 2, 12, 32, 43]
    let text = ' ';
    a.forEach((val, ind, arr) => {
        text += val + `<hr>`
    })
    document.getElementById('foreach').innerHTML = text;
}