{
    const a = 123;

    document.getElementById('tostring').innerHTML = a.toString() + '<br>' +
        (120 + 4).toString() + '<br>' +
        (125).toString();
}
{
    const b = 16;

    document.getElementById('toexponential').innerHTML = b.toExponential(1) + '<br>' + b.toExponential(2) + '<br>' + b.toExponential(5);
}
{
    const a = 20;

    document.getElementById('tofixed').innerHTML = a.toFixed() + '<br>' + a.toFixed(10) + '<br>' + a.toFixed(5)
}

{
    const a = 9;

    document.getElementById('toprecision').innerHTML = a.toPrecision() + '<br>' + a.toPrecision(5) + '<br>' + a.toPrecision(10)
}

{
    const a = 12.12;

    document.getElementById('valueof').innerHTML = a.valueOf() + '<br>' + a.valueOf(12 + 0.12) + ' <br> ' + (a.valueOf(20) == a);
}
{
    document.getElementById('number').innerHTML = Number(true) + '<br>' + Number(false) + '<br>' + Number('10') + '<br>' + Number('  20.17   ') + '<br>' + Number('20,12') + '<br>' + Number('20 12')

    const date = new Date('1970-01-01')
    const date1 = new Date('2006-04-16')
    const date2 = new Date('2006-05-25')

    document.getElementById('datetonum').innerHTML = Number(date) + '<br> ' + Number(date1) + '<br>' + Number(date2);
}
{
    document.getElementById('parseint').innerHTML = '10 :' + parseInt('10') + '<br> ' + '10 rajan :' + parseInt('10 rajan') + '<br> ' + '10.10 : ' + parseInt('10.10') + '<br>' + 'rajan 10 :' + parseInt('rajan 10')

    document.getElementById('parsefloat').innerHTML = '10 :' + parseFloat('10') + '<br> ' + '10 rajan :' + parseFloat('10 rajan') + '<br> ' + '10.101 : ' + parseFloat('10.101') + '<br>' + 'rajan 10 :' + parseFloat('rajan 10')
}

{
    document.getElementById('checkint').innerHTML = '10 : ' + Number.isInteger(10) + '<br> ' + '10.10 : ' + Number.isInteger(10.10)

    document.getElementById('checkSafeinteger').innerHTML = '10 : ' + Number.isSafeInteger(10) + '<br> ' + '10101010101010101 : ' + Number.isSafeInteger(10101010101010101)
}

{
    document.getElementById('parseFloat').innerHTML = '10.10 : ' + Number.parseFloat('10.10') + '<br>' +
        '10 20 30 : ' + Number.parseFloat('10 20 30') + '<br>' + 'rajan 10 : ' + Number.parseFloat('rajan 10')

    document.getElementById('parseInt').innerHTML = '-10.3232 : ' + Number.parseInt('-10.3232') + '<br>' +
        'rajan -10: ' + Number.parseInt('rajan -10') + '<br>' + '10 23 : ' + Number.parseInt('10 23')
}


{
    let a = Number.EPSILON;

    document.getElementById('epsilon').innerHTML = a;

    let ln = Number.MAX_VALUE;

    let ln11 = Number.MIN_VALUE;

    let ln1 = 6;

    document.getElementById('largnum').innerHTML = ln + '<br> <br>' + 'Max value = 6 : ' + ln1.MAX_VALUE;

    document.getElementById('lownum').innerHTML = ln11;

    const maxseafnum = Number.MAX_SAFE_INTEGER;

    document.getElementById('msnum').innerHTML = maxseafnum;

    const mininum = Number.MIN_SAFE_INTEGER;

    document.getElementById('mininum').innerHTML = mininum;

    const p_i = Number.POSITIVE_INFINITY;

    const p_i1 = 1/0 ;

    document.getElementById('p_infinity').innerHTML = p_i + '<br>' +  '1 / 0  : ' + p_i1;

    const n_i = Number.NEGATIVE_INFINITY;

    const n_i1 = -1/0 ;

    document.getElementById('n_infinity').innerHTML = n_i + '<br>' +  '1 / 0  : ' + n_i1;

    const nan = Number.NaN;

    const nan1 = 10 / 'ten' ;

    document.getElementById('nan').innerHTML = nan + '<br>' + '10 * ten : ' + nan1
}