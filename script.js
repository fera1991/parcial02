var flag = false;
var ventana = document.getElementById("deseos");

var elementos = [{ nombre: "telefono1", Precio: 100},{nombre: "telefono2", Precio: 200}];

function listaDeseo()  {
    flag = !flag;
    console.log(flag)
    if (flag) {
        // ventana.innerHTML = `
        // <div class="cuadrado2">
        // <button class="" onclick="listaDeseo()">Lista de deseos</button>
        // <div> 
        // <button>vaciar</button>
        // </div id = "containerDeseo">
            
        // </div>`
        divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class", "cuadrado2")
        ventana.appendChild(divPrincipal);
        divPrincipal.innerHTML += ` <button onclick="listaDeseo()">Lista de deseos</button>`;
        divItems = document.createElement("div");
        divPrincipal.appendChild(divItems);
        btnElimiarTodo = document.createElement("button");
        divPrincipal.appendChild(btnElimiarTodo);
        btnElimiarTodo.textContent = "eliminar";
            elementos.map(dato => {
                lista = document.createElement("li");
                nombre = document.createElement("p");
                nombre.textContent = ` ${dato.nombre}`;
                precio = document.createElement("p");
                precio.textContent = `${dato.Precio+""}`;
                btnElimiar = document.createElement("button");
                lista.appendChild(nombre);
                lista.appendChild(precio);
                lista.appendChild(btnElimiar);
                divItems.appendChild(lista);
            })


    }
    else
    {
        ventana.innerHTML = ` <button class="cuadrado" onclick="listaDeseo()">Lista de deseos</button>`
    }
}