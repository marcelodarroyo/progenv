
/*API disponible para usar en cada actividad:
	*getCanvasContext(): obtiene el objeto asociado con el lienzo (canvas) de dibujo
	*getProgram(): obtiene el programa del editor
	*writeConsole(mensaje): escribe en la consola.
*/

function main(){

    /****colors ****/
    var verde = '#27e400';
    var rojo = '#fc0602';
    var blanco = '#ffffff';
    var negro = '#000000';
    var azul = '#271af4';
    var amarillo ='#ffff0e';
    var violeta ='#7f1aa0';

    var ctx = getCanvasContext(),
        prog = getProgram();

    function posicionarseEn(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function dibujarLineaHacia(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }


    function marcarOrigen(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function marcarDestino(x, y) {
        ctx.lineTo(x, y);
    }

    function dibujar() {
        ctx.stroke();
    }

    function cambiarColorLapiz(color) {
        ctx.strokeStyle = color;
    }


    function cambiarAnchoLapiz(ancho) {
        ctx.lineWidth = ancho;

    }

    function tirarMoneda() {
        var moneda = Math.floor((Math.random() * 2));
        var valor = "cara";
        if (moneda==1) {
            valor = "cruz";
        }
        writeConsole("Moneda: " + moneda + " (" + valor + ")");
        return moneda;
    }

    function dibujarLinea(ox, oy, dx, dy) {
        posicionarseEn(ox, oy);
        dibujarLineaHacia(dx, dy);
    }


    function dibujarRectangulo(ox, oy, lx, ly) {
        ctx.beginPath();
        ctx.rect(ox, oy, lx, ly);
        ctx.stroke();
    }

    function dibujarCirculo(ox, oy, r) {
        ctx.beginPath();
        ctx.arc(ox, oy, r, 0, 2 * Math.PI);
        ctx.stroke();
    }


    function dibujarTriangulo(ox, oy, l) {
        p1x = ox;
        p1y = oy;
        p2x = p1x + l;
        p2y = p1y;
        mitadDeL = l/2
        p3x = p1x + mitadDeL;
        p3y = p1y - Math.sqrt((l * l) - (mitadDeL * mitadDeL));
        ctx.beginPath();

        dibujarLinea(p1x, p1y, p2x, p2y);
        dibujarLinea(p2x, p2y, p3x, p3y);
        dibujarLinea(p3x, p3y, p1x, p1y);

        ctx.stroke();
    }

    showCanvas();
    try {
        eval(prog); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        }
    }
}
