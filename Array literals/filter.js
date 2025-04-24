{
    const number = [10, 15, 12, 24, 25, 29, 30, 35]

    const filter_num = number.filter((val) => {
        return val >= 25;
    })

    document.getElementById('filter_array').innerHTML = filter_num;
}

{
    const number = [12, 45, 21, 45, 10, 42]

    const reduse = number.reduce((total, val) => {
        return total + val;
    })
    document.getElementById('reduse').innerHTML = reduse

    const rightreduse = number.reduceRight((total, val) => {
        // console.log(total)
        return total + val;
    })

    document.getElementById('reduseright').innerHTML = rightreduse

    const every = number.every((val) => { return val => 45 })

    document.getElementById('every').innerHTML = every;

    const n1 = [12, 45, 12, 65, 23, 24]
    let some = n1.some((value, index, arr) => {
        // console.log(arr)
        return value > 18;
    })
    document.getElementById('some').innerHTML = some;
}

{
    const arr = Array.from('this senetence 10 convert into array');

    document.getElementById('from').innerHTML = arr;
    // console.log(arr);
}
{
    const k1 = ['key1','key2','key3','key4','key5'];

    const keys = k1.keys()

    let op = '';
    for(let x of keys){
        op += x + '<br>';
    }
    console.log(op)
    document.getElementById('keys').innerHTML = op;
}

{
    const e = ['first','second','third','forth','fifth'];

    const entries = e.entries();

    for(x of entries){
        document.getElementById('entriea').innerHTML += '<li>'+ x + '</li>';
    }
}
{
    const month = ['jan' , 'feb' ,'march' ,'apr'];

    const withh = month.with(2,'mar');

    document.getElementById('with').innerHTML = withh;
}
{
    const num1 = ['one','two'];
    const num2 = ['three','four'];

    const number = [...num1,...num2];
    
    console.log(number)
    document.getElementById('spreds').innerHTML = number + ' ' + number.length;
}