
/*API disponible para usar en cada actividad:
    *getCanvasContext(): obtiene el objeto asociado con el lienzo (canvas) de dibujo
    *getProgram(): obtiene el programa del editor
    *writeConsole(mensaje): escribe en la consola.
*/

function main() {

    function decimalABinario(decimal){
       writeConsole(decimal.toString(2));
    }

    function deAsciiACaracter(n){
        showConsole();
        writeConsole(String.fromCharCode(n));
    }

    function deCaracterAAscii(c){
        showConsole();
        writeConsole(c.charCodeAt(0));
    }

    function longitudMensaje(texto){
        return texto.length;
    }

    function paraTodoCaracterConvertir(mensaje){
        var p ='';
        for (var i of rango(0,longitudMensaje(mensaje)-1)) {
            p=p + ' ' + mensaje.charCodeAt(i);
        }
        writeConsole(p);        
    }
    function concatenar()
    {
      for(i = 0; i <arguments.length; i++)
      {
        writeConsole(arguments[i]);
      }
    }

    showConsole();

    var prog = getProgram();

    try {
        eval(prog);
    } catch (e) {
        if (e instanceof SyntaxError) {
           alert(e.message);
        }
    }
}






