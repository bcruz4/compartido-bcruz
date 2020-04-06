(function(){

    const mifuncion = function (a:string) {
        return a.toUpperCase();
    }

    const mifuncionF = (a:string ) => a.toUpperCase();

    console.log( mifuncion('Normal') );
    console.log( mifuncionF('Flecha') );

    const sumar = (a:number , b:number) => (a+b);
    console.log( sumar(3,5));

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( () => {
                console.log( `${this.nombre} smash!!` );
            }, 1000);            
        }
    }

    const thor = {
        nombre: 'Thor',
        smash() {
            setTimeout( () => {
                console.log( `${this.nombre} smash!!` );
            }, 1000);            
        }
    }

    hulk.smash();
    thor.smash();