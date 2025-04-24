let Name = document.getElementById('Name');
let Email = document.getElementById('Email');
let phonNO = document.getElementById('phonNO');
// let Language = document.getElementById('Language');
let submit = document.getElementById('submit');
let isSelected = false;
let selecteredIndex;

let main = [];

function save() {
    // Get selected gender
    // let selectedGender = document.querySelector('input[name="gender"]:checked');

    // let selectedLanguages = [...document.querySelectorAll('input[name="language"]:checked')].map(lang => lang.value);

    if (Name.value === '' || Email.value === '' || phonNO.value === '') {//|| !selectedGender || selectedLanguages.length === 0) {
        // alert("Enter all fields and select at least one language!");
        // return;
    }

    const obj = {
        name: Name.value,
        email: Email.value,
        phone: phonNO.value,
        //gender: selectedGender.value,
        // languages: selectedLanguages.join(", ") // Store as a comma-separated string
    };

    if (isSelected) {
        const newData = main.map((val, ind, ela) => {
            if (ind === selecteredIndex) {
                return obj
            }
            return val;
        })
        main = newData;
        isSelected = false;
        selecteredIndex = '';
    }
    else {
        main.push(obj);
    }


    // Map and update the table
    table();

    // Clear input fields after saving
    Name.value = '';
    Email.value = '';
    phonNO.value = '';

    // document.querySelectorAll('input[name="language"]').forEach(cb => cb.checked = false);    
}
function updat(ind) {
    const getVal = main.find((ele, index) => {
        return ind === index;
    })
    // console.log(getVal);
    Name.value = getVal.name;
    Email.value = getVal.email;
    phonNO.value = getVal.phone;
    submit.innerHTML = "Update";
    console.log()

    isSelected = true;
    selecteredIndex = ind;
}
function table() {
    const table = main.map((ele, inx) => {
        return `<tr>
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.phone}</td>
        <td><button type="button" onclick=updat(${inx})>Update</button>
            </td>
        </tr>`;
    }).join('');
    document.getElementById('table').innerHTML = table;
}