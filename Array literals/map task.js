const hedder = [
    {name : 'r1',link : 'https://www.w3schools.com/js/js_array_iteration.asp#mark_map'},
    {name : 'html',link : 'https://www.w3schools.com/html/default.asp'},
    {name : 'css',link : 'https://www.w3schools.com/css/default.asp'},
    {name : 'jacascript',link : 'https://www.w3schools.com/js/default.asp'},
    {name : 'sql',link : 'https://www.w3schools.com/sql/default.asp'},
    {name : 'python',link : 'https://www.w3schools.com/python/default.asp'},
    {name : 'mongodb' , link : 'https://www.w3schools.com/mongodb/index.php'}
]

const hedder1 = hedder.map((value) => {
    return `<a class="a" href="${value.link}"><div class="li">${value.name}</div></a>`
}).join('')

console.log('@@@@@@@@@@@',hedder)
document.getElementById('hedder').innerHTML = '<div class="ul">' + hedder1 + '</div>'  ;