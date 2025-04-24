{
    const name = [
        { name: 'rajan', age: 12, number: '9099XXXX30' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
        { name: 'bbb', age: 12, number: '1234567890' },
    ]
    const t1 = name.map((value, ind, arr) => {
        return `
            <tr>
                <td class='njn'> name: ${value.name}  <br> age : ${value.age} <br> number : ${value.number} <td> 
            </tr>
        `
    }).join('')
    document.getElementById('name').innerHTML = `<table>${t1}</table>`;
}

{
 const nm = [
    {name : 'r1'},{name : 'r1'},{name : 'r1'},{name : 'r1'},{name : 'r1'}
 ]

const n2 = nm.map((val)=>{
    return {name : val.name , number : Math.random() * 10 , address : 'lala'}
})

console.log(n2 , nm)
}