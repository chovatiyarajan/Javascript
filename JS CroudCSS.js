let name = document.getElementById("name");
let email = document.getElementById("email");
let malee = document.getElementById("male");
let femalee = document.getElementById("female");
let passWord = document.getElementById("passWord");
let Cricket = document.getElementById("h1");
let Tt = document.getElementById("h2");
let Search = document.getElementById("search");
let sAll = document.getElementById("checkAll");
let isUpdate = false;
let updateInx;

const getval = JSON.parse(localStorage.getItem("namee@@@@@@")) || [];
let main = [];
main = getval;
setData();

function save() {
  if (name.value == "") {
    document.getElementById("gName").innerHTML = "Enter name plss";
  } else {
    document.getElementById("gName").innerHTML = "";
  }

  if (email.value == "") {
    document.getElementById("gEmail").innerHTML = "Enter email plss";
  } else {
    document.getElementById("gEmail").innerHTML = "";
  }

  if (passWord.value == "") {
    document.getElementById("gPass").innerHTML = "Enter pass plss";
  } else {
    document.getElementById("gPass").innerHTML = "";
  }

  if (
    name.value == "" ||
    email.value == "" ||
    passWord.value == "" ||
    (malee.checked == false && femalee.checked == false)
  ) {
    document.getElementById("gGen").innerHTML = "select your Gender plss";
  } else {
    document.getElementById("gGen").innerHTML = "";
  }

  if (
    name.value == "" ||
    email.value == "" ||
    passWord.value == "" ||
    (malee.checked == false && femalee.checked == false)
  ) {
    return alert("enter all form plese !!");
  } else {
    const person = {
      name: name.value,
      email: email.value,
      password: passWord.value,
      gender: gen(),
      hobby: hoby(),
    };

    if (isUpdate) {
      const newArray = main.map((value, index) => {
        console.log(index, " ", updateInx);
        if (index == isUpdate) {
          return { ...person };
        }
        return value;
      });

      main = newArray;
      isUpdate = false;
      updateInx = null;
    } else {
      main.push(person);
    }

    name.value = "";
    email.value = "";
    passWord.value = "";
    malee.checked = false;
    femalee.checked = false;

    let unChecckeckbox = document.querySelectorAll("input[name = Hobby]");
    unChecckeckbox.forEach((check) => (check.checked = false));

    setData();
    document.getElementById("Save_Data").innerHTML = "Save";
    delArr = null;
  }
}

function gen() {
  if (malee.checked === true) {
    console.log("1234567890");
    return malee.value;
  }
  if (femalee.checked === true) {
    return femalee.value;
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

  if ((value.malee = value.malee)) {
    malee.checked = true;
    femalee.checked = false;
  } else if ((value.femalee = "female")) {
    femalee.checked = true;
    malee.checked = false;
  }

  let upDate = document.getElementById(`row-${inx}`);

  if (upDate) {
    upDate.style.transition = "1s all";
    // upDate.style.opacity = '0';
    upDate.style.backgroundColor = "yellow";
  }

  document.getElementById("Save_Data").innerHTML = "Update";
  isUpdate = true;
  updateInx = inx;
}

function filter(index) {
  let row = document.getElementById(`row-${index}`);

  if (row) {
    row.style.transition = "opacity 1s";
    row.style.opacity = "0.5";

    setTimeout(() => {
      main = main.filter((_, ind) => ind !== index);
      setData();
    }, 500);
  }
}

function selectAll() {
  const checkAll = main.map((ele) => {
    return { ...ele, isCheck: !ele.isCheck };
  });
  main = checkAll;
  setData();
  console.log("@@@@@", main);
}

function check(index) {
  const isCheked = main.map((ele, i) => {
    if (index == i) {
      return { ...ele, isCheck: !ele.isCheck };
    }
    return ele;
  });
  main = isCheked;
  console.log("###############", main);
}

function mulDel() {
  const isDeleted = main.filter((ele) => {
    if (ele.isCheck === true) {
      return false;
    }
    return true;
  });
  main = isDeleted;
  setData();
}
function setData() {
  const saveData = main
    .map((val, ind) => {
      const isChecked = val.isCheck ? "checked" : "";
      return `
            <tr class="nm" id="row-${ind}">
                <td class="dataTD">
                    <input class="checkk" type="checkbox" value="Del" onchange="check(${ind})" ${isChecked}>
                </td>
                <td class="dataTD" id="idTd">${val.name}</td>
                <td class="dataTD" id="idTd">${val.email}</td>
                <td class="dataTD" id="idTd">${val.password}</td>
                <td class="dataTD" id="idTd">${val.gender}</td>
                <td class="dataTD" id="idTd">${val.hobby}</td>
                <td class="dataTD" id="idTd">
                    <button onclick='update(${JSON.stringify(
                      val
                    )}, ${ind})' class="tableBtn">Update</button>
                    <button onclick='filter(${ind})' class="tableBtn">Delete</button>
                </td>
            </tr>`;
    })
    .join("");

  localStorage.setItem("namee@@@@@@", JSON.stringify(main));

  document.getElementById("saveDataonTable").innerHTML = saveData;
}
function searchData() {
  let serchnm = Search.value;
  const searchName = main.filter((val) => {
    return val.name.includes(serchnm.trim().toLowerCase());
  });
  main = searchName;
  setData();
}