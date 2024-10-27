let nameInput = document.querySelector("#saveName");
let mybutton = document.querySelector("#button-addon2");
let deleteButton = document.querySelector("#button-addon3");
let aletBox1 = document.querySelector("#aletBox1");
let userList = document.querySelector("#userList");

function saveNameApp() {

  if (nameInput.value == "") {

    alert("adınızı giriniz ulan beyefendi")

  } else {

    let nameInputSave = nameInput.value;

    localStorage["veri"] = nameInputSave;
    nameInput.value = "";

    showMessage();

    setTimeout(showUserList, 7000);

  }


};

mybutton.addEventListener("click", saveNameApp);

function showMessage() {
  const message = document.getElementById("aletBox1");

  message.style.display = "block";
  message.innerHTML = `
  <div class="alert alert-primary" role="alert">
                 Adınız sisteme kayıt edilmiştir. Sizi Hatırlayacağız...
   </div>
  `;

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
}

function showUserList() {
  if (localStorage["veri"]) {
    let saveUser = localStorage["veri"];
    userList.innerHTML = `

        <li class="list-group-item">Sisteme kayıtlı kullanıcı = ${saveUser}</li>

    `;
  }
}

function deleteUser() {
  localStorage.removeItem("veri");
  userList.innerHTML = "";
}

deleteButton.addEventListener("click", deleteUser);