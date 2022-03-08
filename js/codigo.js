(function() { 
    var actualizarHora = function() {
        var fecha = new Date();
            horas = fecha.getHours();
            minutos = fecha.getMinutes();
            segundos = fecha.getSeconds();

        var pHoras = document.getElementById('horas');
            pAMPM = document.getElementById('ampm');
            pMinutos = document.getElementById('minutos');
            pSegundos = document.getElementById('segundos');

        if(horas >= 12) {
            horas = horas - 12;
            ampm = "PM";
        }
        else {
            ampm = "AM";
        };

        if( horas === 0 ) {
            horas = 12;
        };

        if(horas < 10) { horas = `0${horas}`}
        if(minutos < 10) { minutos = `0${minutos}`}
        if( segundos < 10) { segundos = `0${segundos}` }

        pHoras.textContent = horas;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        pAMPM.textContent = ampm;
    };

    actualizarHora();
    var untervalo = setInterval(actualizarHora, 1000);
}());

function fibonnaci( ) {

    let splitMinutos = minutos.toString();
    splitMinutos = splitMinutos.split("");

    let limit = segundos.toString();
    let lblFibonnaci = document.getElementById('lblFibonnaci');

    if(limit.startsWith("0")) {
        limit = limit.replace("0","");
    }

    let p0 = Number(splitMinutos[0]);
    let p1 = Number(splitMinutos[1]);

    fibo = [];
    fibo = [p0,p1];

    console.log("fibo: " + fibo[0], fibo[1] )
    lblFibonnaci.textContent = fibo[0] + " - " + fibo[1] + " - ";

    console.log(limit);

    for(i = fibo.length; i <= limit; i++) {
        fibo.push(fibo[i-1] + fibo[i-2]);
        lblFibonnaci.textContent += fibo[i] +" - ";
    }
}
