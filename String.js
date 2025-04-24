let a = 'this is string'
let b = "this is string"

let len_a = a.length;
let charat = a.charAt(5);

document.getElementById('str').innerHTML = a + '<br>' + b

    + '<br>' + 'this is length of first line ' + + len_a + ' with space' + '<br>' +

    'at 5th Place ' + charat

let a1 = 'Hello World !';

let a_at = a1[12];
let a1_charcode = a1.charCodeAt(8)
let a1_slice = a1.slice(0, 5)
let a1_slice_1 = a1.slice(6)
let a1_slice_2 = a1.slice(-7)
let a1_slice_3 = a1.slice(-13, -7)

document.getElementById('at').innerHTML = a_at + ' ' + a1_charcode + '<br><br>' + a1_slice + ' <br> ' + a1_slice_1 + '<br> ' + a1_slice_2 + '<br> ' + a1_slice_3;


let string = 'This is big sentence';
let sbr_str = string.substring(8, 11);

document.getElementById('str1').innerHTML = sbr_str;


let substr = 'this sentence is too long!'
let substr_1 = substr.substr(17, 3)
let substr_2 = substr.substr(-4)

document.getElementById('substr').innerHTML = substr_1 + '<br>' + substr_2

var u1 = 'This Formet is Title Formet'
document.getElementById('ucase').innerHTML = u1

function uppercase() {
    document.getElementById('ucase').innerHTML = u1.toUpperCase();
}

function lowercase() {
    document.getElementById('ucase').innerHTML = u1.toLowerCase();
}

var con1 = 'hello '
document.getElementById('connect_demo1').innerHTML = con1

var con2 = 'world ! '
document.getElementById('connect_demo2').innerHTML = con2

function connect() {
    let con = con1.concat(' ', con2)

    document.getElementById('connect').innerHTML = con

    let hide = document.getElementById('connect_demo1')
    let hide1 = document.getElementById('connect_demo2')

    hide.style.display = 'none';
    hide1.style.display = 'none';
}

let t1 = '  hello!   '
let t2 = t1.trim();

document.getElementById('trim').innerHTML = 'first t1s length is :' + t1.length + '<br> second t2s lenght is  :' + t2.length;

function repett() {
    let txt = document.getElementById('repet');
    const textValue = txt.innerHTML;
    if (textValue) {
        document.getElementById('repet').innerHTML = textValue.replace('Rajan', 'Karan');
    }
}

let in1 = 'this is an apple this apple is red';

let in11 = in1.indexOf('an');

document.getElementById('index1').innerHTML = in11;

let lin1 = 'this is an apple this apple is red'

let lin11 = lin1.lastIndexOf('apple');

document.getElementById('lastindex1').innerHTML = lin11;

let include1 = 'this is an apple';

let include11 = include1.includes('apple');

document.getElementById('include1').innerHTML = include11

let include2 = 'this is an banana';

let include22 = include2.includes('apple');

document.getElementById('include2').innerHTML = include22


{
    let start1 = 'this is an apple this apple is red';

    let start11 = start1.startsWith('this');

    document.getElementById('start1').innerHTML = start11;

    let start2 = 'this is an apple this apple is red';

    let start22 = start2.startsWith('is');

    document.getElementById('start2').innerHTML = start22;


    let end1 = 'this is an apple this apple is red';

    let end11 = start1.endsWith('red');

    document.getElementById('end1').innerHTML = end11;

    let end2 = 'this is an apple this apple is red';

    let end22 = end2.endsWith('is');

    document.getElementById('end2').innerHTML = start22;
}

{
    const name1 = 'Rajan';

    const surname = 'Chovatiya';

    const t1 = 10;

    const t2 = 16;

    const FullName = `my fullname is ${name1} ${surname}`

    document.getElementById('stringtem1').innerHTML = FullName + '<br>' + `${t1 + t2 / 10}`;


}

{
    const n1 = 100;

    const n2 = NaN;

    const n1n2 = n1+n2;

    document.getElementById('Number1').innerHTML = n1n2;

    document.getElementById('Number2').innerHTML = n1 + Infinity;

    document.getElementById('Number3').innerHTML =  2 / 0;

    document.getElementById('Number4').innerHTML = typeof Infinity


    let no1 = 10;
    let no2 = new Number(10);
    
    document.getElementById('numbero1').innerHTML = typeof no2;

    document.getElementById("numobero2").innerHTML = no1 == no2;

    document.getElementById("numobero3").innerHTML = 'using === ' + '<br> <br>' +  (no1 === no2 )
} 

