
class Automoviles {
    constructor(numVehiculo,marcaModelo,color,Km,precio,año) {
        this.numVehiculo = numVehiculo;
        this.marcaModelo = marcaModelo;
        this.color = color;
        this.Km = Km;
        this.precio = precio;
        this.año = año;
    }
}

const Vehiculos = [];

Vehiculos.push(new Automoviles(1, "bmw,i35", "blanco", 0, 35000, 2023));
Vehiculos.push(new Automoviles(2, "Honda Civic exs", "gris", 50.000, 12000, 2016));
Vehiculos.push(new Automoviles(3, "Mercedes Benz c300", "blanco", 5000, 40000, 2017));
Vehiculos.push(new Automoviles(4, "Toyota Hilux", "negra", 0, 25000, 2023));
Vehiculos.push(new Automoviles(5, "Volkswagen Scirocco 2.0 Tsi 211cv", "blanco", 100000, 25000, 2013));


console.log(Vehiculos);

function buscar0Km() {
    let buscar = Vehiculos.filter((kilo) => kilo.Km == 0);
    return buscar;
}


function modificarDatos() {
    alert(JSON.stringify(Vehiculos));
    let numAutoSelec = parseInt(prompt("Ingrese el numero del auto del que quiera modificar algun dato"));
    for (datos of Vehiculos) {
        if (datos.numVehiculo === numAutoSelec){
            alert("Indique la propiedad a modificar");
            alert(JSON.stringify(Vehiculos[numAutoSelec - 1]));
            const modificación = prompt("Indique el nombre exactamente de la propiedad a modificar");
            let comprobarProp = Vehiculos[numAutoSelec-1];
            let final = comprobarProp.hasOwnProperty(modificación);
            if (final == true){
                let ultMod = prompt("Escriba la modificación que desea realizar");
                if (typeof(ultMod) === 'number'){
                    Vehiculos[numAutoSelec-1].modificación = parseInt(ultMod);
                    alert("Modificacion hecha correctamente");
                    break;
                } else if(typeof(ultMod) === 'string'){
                    Vehiculos[numAutoSelec-1].modificación = ultMod;
                    alert("Modificacion hecha correctamente");
                }
            }else{
                alert("Propiedad no encontrada");
                break;
            }
        }
    }
    console.log(Vehiculos[numAutoSelec-1]);
}

console.log(buscar0Km());

modificarDatos();

console.log(Vehiculos);
