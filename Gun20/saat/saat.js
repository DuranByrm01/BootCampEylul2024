

function saatYazdır(){
    let suAn = new Date();
    let saatyaz = document.querySelector("#time");
    saatyaz.textContent = suAn.toLocaleTimeString("tr");
    
}

function dayYazdır(){
    let buGun = new Date();
    let hangiGun = document.querySelector("#dayİnfo");
    hangiGun.textContent = buGun.toLocaleDateString();
}

setInterval(() => {
    saatYazdır();
    dayYazdır();
}, 1000);



