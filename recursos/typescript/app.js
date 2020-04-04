(function () {
    var mifuncion = function (a) {
        return a.toUpperCase();
    };
    var mifuncionF = function (a) { return a.toUpperCase(); };
    console.log(mifuncion('Normal'));
    console.log(mifuncionF('Flecha'));
    var sumar = function (a, b) { return (a + b); };
    console.log(sumar(3, 5));
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            console.log($, { "this": .nombre }, smash);
        }
    };
    hulk.smash();
})();
