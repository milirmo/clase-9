let a=[]
let b=[]
let suma=0;

let cant=parseInt(prompt("ingrese cantidad de numeros a ingresar en A"));
for (i=0; i<cant; i++) {
    a[i]=parseInt(prompt("ingrese numeros para A"));
    if (a[i]%2===0) {
        suma=suma+a[i];
    } else {
        i--
    }
}
let cant1=parseInt(prompt("ingrese cantidad de numeros a ingresar en B"))
for (i=0; i<cant1; i++) {
    b[i]=parseInt(prompt("ingrese numeros para B"));
    if (b[i]%2!=0) {
        suma=suma+b[i];
    } else {
        i--
    }
}
document.write("numeros de A: "+a+"<br>");
document.write("numeros de B: "+b+"<br>");
document.write("la suma de A y B: "+(suma));