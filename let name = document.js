let name = document.getElementById('name');
let email = document.getElementById('email');
let malee = document.getElementById('male');
let femalee = document.getElementById('female');
let passWord = document.getElementById('passWord');
let Cricket = document.getElementById('h1');
let Tt = document.getElementById('h2');
let Search = document.getElementById('search');
let isUpdate = false;
let updateInx;

let main = [];

function save() {
    // check form

    if (name.value == '') {
        document.getElementById('gName').innerHTML = "Enter name plss";
    } else { document.getElementById('gName').innerHTML = ""; }


    if (email.value == '') {
        document.getElementById('gEmail').innerHTML = "Enter email plss";
    } else { document.getElementById('gEmail').innerHTML = ""; }


    if (passWord.value == '') {
        document.getElementById('gPass').innerHTML = "Enter pass plss";
    } else { document.getElementById('gPass').innerHTML = ""; }


    if (name.value == '' || email.value == '' || passWord.value == '' || (malee.checked == false && femalee.checked == false)) {
        document.getElementById('gGen').innerHTML = "select your Gender plss";
    } else { document.getElementById('gGen').innerHTML = ""; }


    if (name.value == '' || email.value == '' || passWord.value == '') {
        return alert("enter all form plese !!");
    }
    else {
        const person = {
            name: name.value,
            email: email.value,
            password: passWord.value,
            gender: gen(),
            hobby: hoby(),
            muldell: mulDel()
        }

        if (isUpdate) {
            main[updateInx] = person;
            isUpdate = false;
            updateInx = null;
        } else {
            main.push(person);
        }

        name.value = '';
        email.value = '';
        passWord.value = '';
        malee.checked = false;
        femalee.checked = false;

        // let unCheckradio = document.querySelectorAll("input[name='gender']")
        // unCheckradio.forEach(radio => radio.checked = false);

        let unChecckeckbox = document.querySelectorAll("input[name = Hobby]");
        unChecckeckbox.forEach(check => check.checked = false);
        setData();
        document.getElementById('Save_Data').innerHTML = 'Save';
    }
}

function gen() {
    if (malee.checked === true) {
        return malee.value
    }
    if (femalee.checked === true) {
        return femalee.value
    }
}

function hoby() {
    let hby = [];
    if (Cricket.checked === true) {
        hby.push(Cricket.value);
    }
    if (Tt.checked === true) {
        hby.push(Tt.value);
    }
    return hby;
}


function update(value, inx) {
    name.value = value.name;
    email.value = value.email;
    passWord.value = value.password;

    if(value.malee = value.malee){
        malee.checked = true;
        // console.log("rajan");
    }
    else  if(value.femalee = 'female'){
        femalee.checked = true;
        // console.log("rajan");
    }

    // if(value.femalee = 'female'){
    //     femalee.checked == true;
    //     console.log("rajan");
    // }
    
    isUpdate = true;
    updateInx = inx;


    document.getElementById('Save_Data').innerHTML = 'Update';

    let upDate = document.getElementById(`row-${inx}`);

    if (upDate) {
        upDate.style.transition = "1s all";
        upDate.style.opacity = '0';
        upDate.style.transform = 'scale(1,0)';
    }

}

function filter(index) {
    let row = document.getElementById(`row-${index}`);

    if (row) {
        row.style.transition = "opacity 1s";
        row.style.opacity = "0.5"; // Visual indication before delete

        setTimeout(() => {
            main = main.filter((_, ind) => ind !== index);
            setData(); // Refresh the table after deletion
        }, 500); // Deletes after 5 seconds
    }
}

// function mulDel() {
    // let totalChecked = {}; // Object to store selected rows

    // let checkboxes = document.querySelectorAll('input[name="mulDel"]:checked');

    // checkboxes.forEach((checkbox) => {
    //     let rowIndex = checkbox.closest("tr").id.split("-")[1]; // Extract row index
    //     totalChecked[rowIndex] = main[rowIndex]; // Store data using index as key
    // });

    // console.log(totalChecked); // Log the selected rows
    // return totalChecked;
// }
let id = null; 
arrr = []
function check(index,checks) {
    console.log(checks);  
    id =  index;
    mulDel()  
}
function mulDel() {
    console.log("hii "+id)
}

function setData() {
    const saveData = main.map((val, ind) => {
        return `
        <tr class="nm" id="row-${ind}">
            <td class="dataTD" id="idTd"><input class="checkk" type="checkbox" name="mulDel" value="Del" onchange="check(${ind},this.checked)"/></td>
            <td class="dataTD" id="idTd">${val.name}</td>
            <td class="dataTD" id="idTd">${val.email}</td>
            <td class="dataTD" id="idTd">${val.password}</td>
            <td class="dataTD" id="idTd">${val.gender}</td>
            <td class="dataTD" id="idTd">${val.hobby}</td>
            <td class="dataTD" id="idTd">
                <button onclick='update(${JSON.stringify(val)}, ${ind})' class="tableBtn">Update</button>
                <button onclick='filter(${ind})' class="tableBtn">Delete</button>
            </td>
        </tr>`;
    }).join('');

    document.getElementById('saveDataonTable').innerHTML = saveData;
}
function searchData() {
    // console.log(Search.value);
    // const searchValue = Search.value.trim()
    // if (!searchValue) return
    // const searchData = main.filter((val) => {
    //     return val.name.includes(searchValue)
    // })
    // main = searchData
    // setData()

    let serchnm = Search.value;
    const searchName = main.filter((val) => {
        return val.name.includes(serchnm.trim().toLowerCase());
    });
    main = searchName;
    setData()
}