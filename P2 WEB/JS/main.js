const NoLocalDevices=[];

const form = document.getElementById('form-data');
const AddContainer = document.getElementById('container-card'); 
   
window.onload = () =>{
    if (localStorage.length > 0) {
        let Devices = JSON.parse(localStorage.getItem("device"))
        var localArray = NoLocalDevices.concat(Devices);
        const addHTML = localArray.reduce((sum,data) => {//se utiliza el reduce para que sume cada valor del arreglo en forma de etiquetas
            return sum + string(data);
        }, '')
            AddContainer.innerHTML = addHTML//añadiendo el arreglo string al div que lo contendra
    }
}


//renderizando cards de los items
function string(data) {
    return `
    <div class="card">
        <div class="form-groud" id="image">
            <img class="card-img" src="${data.imgInput}" alt="">
        </div>

        <div class="form-groud" id="names">
            <h4 class="nameP">${data.nameInput}</h4>
        </div>

        <div class="form-groud" id="oss">
            <h5 class="brandP">${data.brandInput}</h5>
        </div>

        <div class="form-groud" id="brands">
            <h5 class="OsP">${data.OSInput}</h5>
        </div>

        <div class="form-groud" id="processors">
            <h5 class="processorP">${data.processorInput}</h5>
        </div>
        
        <div class="form-groud" id="prices">
            <h5 class="priceP">$${data.priceInput}</h5>  
        </div>
        
        <a href="#">Add to <i class="far fa-heart"></i></a>
    </div>
    \n
    `
}

function renderNoLocalDevices(){
    const addHTML = NoLocalDevices.reduce((sum,data) => {//se utiliza el reduce para que sume cada valor del arreglo en forma de etiquetas
        return sum + string(data);
    }, '')
        AddContainer.innerHTML = addHTML//añadiendo el arreglo string al div que lo contendra
    }


//detector del agregado
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    var formData = new FormData(form);
    var phone = {
        id: `Tsc_${new Date().getTime()}`,
        imgInput: formData.get("img"),
        nameInput: formData.get("name"),
        brandInput: formData.get("brand"),
        OSInput: formData.get("OS"),
        processorInput: formData.get("processor"),
        priceInput: formData.get("price"),
    }
    console.log(phone);
    //verificaciones
       if(imgInput != "" && nameInput != "" && brandInput != "" && OSInput != "" && processorInput != "" && priceInput != "")
        {
            NoLocalDevices.push(phone);
            localStorage.setItem("device", JSON.stringify(NoLocalDevices));
            renderNoLocalDevices();
        }
})
