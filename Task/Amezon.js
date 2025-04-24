let cart = JSON.parse(localStorage.getItem('productData')) || [];
if (!Array.isArray(cart)) {
    cart = [];
}
let main = [];
const fridg1 = {
    img: 'https://m.media-amazon.com/images/I/61sNCBeFfQL._SY741_.jpg',
    details: 'Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE PRM 2S SAPPHIRE BLOOM-Z, 2023 Model)',
    price: 13490,
    id : 1,
    qty: 1
}

const fridg2 = {
    img: 'https://m.media-amazon.com/images/I/3115JIW2htL._SX342_SY445_QL70_FMwebp_.jpg',
    details: 'Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 2S SHERRY WINE-Z, Red, Model',
    price: 12490,
    id : 2,
    qty: 1
}
const fridg3 = {
    img: 'https://m.media-amazon.com/images/I/5134E0Z7iwL._AC_UL480_FMwebp_QL65_.jpg',
    details: 'Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE PRM 2S WINE BLOOM-Z, 2023 Model)',
    price: 13490,
    id : 3,
    qty: 1
}
const fridg4 = {
    img: 'https://m.media-amazon.com/images/I/71bYFsyEFFL._AC_UL480_FMwebp_QL65_.jpg',
    details: 'Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1824CR/HL, Red,Camellia Purple, Base Stand Drawer) ',
    price: 16490,
    id : 4,
    qty: 1
}
const fridg5 = {
    img: 'https://m.media-amazon.com/images/I/61bjbYa+rFL._AC_UL480_FMwebp_QL65_.jpg',
    details: 'Godrej 180 L 2 Star Advanced Capillary Technology, With Jumbo Vegetable Tray Direct Cool Single Door Refrigerator(2023 Model, RD EDGE 205B WRF PP BL, Pep Blue)',
    price: 12490,
    id : 5,
    qty: 1
}
main.push(fridg1, fridg2, fridg3, fridg4, fridg5);

const products = main.map((val, i) => {
    return `
    <div style="display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;">
        <img src="${val.img}" style="width: 50%;height: 50%;">
        <div style="font-size: 22px;width: 70%;">${val.details}</div>
        <div style="font-size: 30px; margin-top: 20px;">
            ${val.price}
        </div>
        <div>
            <button style="padding: 20px 30px;
            font-size: 18px;border: 1px solid black;
            border-radius: 10px;
            background-color: rgba(255, 255, 0, 0.667);" onclick="addtocart(${i})">Add to Cart</button>
        </div>
        
    </div>`
}).join("");


document.getElementById('design').innerHTML = products;

function addtocart(index) {
    alert("1 item added to your cart");

    let value = main[index];

    let findProd = cart.find((item) => {
        return item.id == value.id;
    });
    
    if(findProd){
        findProd.qty += 1;
    } else {
        cart.push(value);
    }

    localStorage.setItem('productData',JSON.stringify(cart));

    console.log('@@@@@@@@@@@@@@@@',cart);
    
    document.getElementById('TotalProduct').innerHTML = cart.length;
}
document.getElementById('TotalProduct').innerHTML = cart.length