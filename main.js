
const input = document.getElementById("pantalla");
var aux = "";
var aux1 = "";
var res = 0;
var res2 = 0 ;
function nums(boton_evento) {
    const num = boton_evento.target.id
    if (num == "ac") {
        input.value = "";
        return;
    }
    if (num == "igual") {
        try{
            input.value = eval(input.value);
            
        } catch {
            input.value = "error";
        }
        return;
    }
    if (num === "borrar") {
        input.value = input.value.slice(0, -1);
        console.log(res);
        return;
    }

    if (input.value == "error") {
        input.value = num;
    }

    input.value += num;

}