let contacts = [
    {
        name: "Van Toan 123",
        phone: "123123123",
        email: "abc@gmail.com"
    },
    {
        name: "Giao Phan",
        phone: "123123123",
        email: "abc@gmail.com"
    }
]

if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"))
}

let cardsContainer = document.getElementById("cards")
let createBtn = document.getElementById("create-btn")
let popupContainer = document.querySelector(".popup-container")
let popupMain = document.querySelector(".popup-main")
let onAction = document.querySelector(".clickPopup")
let clickDelete = document.querySelector(".clickDelete")

// open popup
createBtn.addEventListener('click', function() {
    let popupContainer = document.querySelector(".popup-container")
    popupContainer.classList.toggle('active')
})
// close popup
popupContainer.addEventListener('click', function() {
    let popupContainer= document.querySelector(".popup-container")
    document.getElementById("field-name").value = ""
    document.getElementById("field-phone").value = ""
    document.getElementById("field-email").value = ""
    popupContainer.classList.toggle('active')
})

// prevent main popup close
popupMain.addEventListener('click', function(event) {
    // console.log("event", event)
    event.stopPropagation()
})

function onCreate() {
    // onAction.classList.add("active-edit-non")
    let name = document.getElementById("field-name").value
    let phone = document.getElementById("field-phone").value
    let email = document.getElementById("field-email").value
    console.log(name, phone, email)
    contacts.push({
        name,
        phone,
        email
    })
    localStorage.setItem("contacts", JSON.stringify(contacts))
    render()
}
// Delete Card
function deleteCard(index) {
    console.log(index, "Delete Card")
    contacts.splice(index, 1)
    render()
    localStorage.setItem("contacts", JSON.stringify(contacts))
}
// Edit Update card
let editIndex = null
// khi click Edit
function editCard(index) {
    editIndex = index
    // console.log("EditIndex: ", editIndex) 
    editShow(editIndex)
}
// Save card
function saveCard() {
    let name = document.getElementById("field-name").value
    let phone = document.getElementById("field-phone").value
    let email = document.getElementById("field-email").value
    if (editIndex !== null) { 
        contacts[editIndex].name = name
        contacts[editIndex].phone = phone
        contacts[editIndex].email = email
        localStorage.setItem("contacts", JSON.stringify(contacts))
        render()
    } else {
        console.error("Không thể chỉnh sửa vì không tìm thấy phần tử trong mảng contacts.");
    }
    oncancel()
} 
// Show card
function editShow(editIndex) {
    onAction.classList.add("active-edit")
    clickDelete.classList.add("active-edit-non")
    if (editIndex !== null) {
        popupContainer.classList.toggle("active")
        document.getElementById("field-name").value = contacts[editIndex].name
        document.getElementById("field-phone").value = contacts[editIndex].phone
        document.getElementById("field-email").value = contacts[editIndex].email
    }
}

function oncancel() {
    editIndex = null;
    onAction.classList.remove("active-edit")
    clickDelete.classList.remove("active-edit-non")
    document.getElementById("field-name").value = ""
    document.getElementById("field-phone").value = ""
    document.getElementById("field-email").value = ""
    popupContainer.classList.remove("active")
}

// Render
function render() {
    let elements = contacts.map((item, index) => {
        return `
        <div class="cards">
            <div class="card">
                <div class="card-item">
                    <img src="./assets/img/icon/contact.svg" alt="">
                    <span id="name">${item.name}</span>
                </div>

                <div  class="card-item">
                    <img src="./assets/img/icon/phone.svg" alt="">
                    <span id="phone">${item.phone}</span>
                </div>

                <div  class="card-item">
                    <img src="./assets/img/icon/email.svg" alt="">
                    <span id="mail">${item.email}</span>
                </div>

                <div class="action">
                    <img id="edit" onclick=editCard(${index}) src="./assets/img/icon/edit.svg" alt="">
                    <img id="delete" onclick="deleteCard(${index})" src="./assets/img/icon/delete.svg" alt="">
                </div>
            </div>
        </div>
        `
    }) 
    cardsContainer.innerHTML = elements.join('')
}

render()


