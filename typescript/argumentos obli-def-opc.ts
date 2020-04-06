(function(){

function activar(quien:string, 
                 momento?:string,
                 objeto:string = 'batiseñal') {
    
    if ( momento ) {
        console.log(`${quien} activo la ${objeto} en la ${momento}` );    
    } else {
        console.log(`${quien} activo la ${objeto}`);
    }
    
}


activar('Gordon', 'tarde');

 function getEdad(){
     return 16 + 10;
 }


// function getEdad(){
//     return 100 + 100;
// }

// const nombre = 'Fernando';
// const edad = 33;
// const apellido = 'Herrera';

// // const salida = nombre + " " + apellido + "( " + edad + " )";
// //console.log(salida);

// const salida =  `${ nombre } ${ apellido } (${ getEdad() })`;
// console.log(salida);




})();


