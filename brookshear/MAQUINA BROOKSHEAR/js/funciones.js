var body;
var html;
var nEnt;
var baseAct;
var baseAnt;
var valBin;
var valOct;
var valDec;
var valHex;
var overL;

window.addEventListener ?
  window.addEventListener("load", mostrarBM, false) :
  window.attachEvent && window.attachEvent('onload', mostrarBM);

window.onresize = function() {
  resizeEntrada();
 // resizeOverL();
};

function mostrarBM() {
  resizeEntrada();
} 

function mostrarCalculadora() { 
  html = document.getElementsByTagName('html')[0];
  html.style.height = "100%";
  html.style.width = "100%";
  body = document.getElementsByTagName('body')[0];
  body.style.overflow = "hidden";
  body.style.padding = "0px";
  body.style.margin = "0px";
  body.style.height = "100%";
  body.style.width = "100%";
  body.style.backgroundColor = "black";
  nEnt = "";
  baseAnt = 10;
  baseAct = 10;
  valBin = "";
  valOct = "";
  valDec = "";
  valHex = "";
  document.getElementById('bA').style.opacity = "0.2";
  document.getElementById('bB').style.opacity = "0.2";
  document.getElementById('bC').style.opacity = "0.2";
  document.getElementById('bD').style.opacity = "0.2";
  document.getElementById('bE').style.opacity = "0.2";
  document.getElementById('bF').style.opacity = "0.2";
  document.getElementById('bA').disabled = true;
  document.getElementById('bB').disabled = true;
  document.getElementById('bC').disabled = true;
  document.getElementById('bD').disabled = true;
  document.getElementById('bE').disabled = true;
  document.getElementById('bF').disabled = true;

  //////////// Para Admob

    if(( /(ipad|iphone|ipod|android)/i.test(navigator.userAgent) )) {
      document.addEventListener('deviceready', onDeviceReady, false);
    } else {
      onDeviceReady();
    }  
}

function onDeviceReady() {
  document.addEventListener("menubutton", onMenuKeyDown, false);
  document.addEventListener("backbutton", onBackKeyDown, false);
  initAd();
  window.plugins.AdMob.createInterstitialView();
}

function borrarOverL() {
  body.removeChild(overL);
  overL = null;
}

function onMenuKeyDown() {
  if (overL)
    borrarOverL();
  else {
    var msg = "<button style=\"width:100%;height:100px;background:url(\'img/idea.png\') center no-repeat;background-size:contain;background-color:transparent;outline:none;user-select:none;border:none;\" disabled></button><br>" +
              "&nbsp;&nbsp;Diego&nbsp;Corsi&nbsp;&nbsp;&nbsp;";
    overL = document.createElement("DIV");
    overL.style.position = 'absolute';
    overL.style.zIndex = '100';
    overL.style.left = '0px';
    overL.style.top = '0px';
    overL.style.width = '100%';
    overL.style.height = '100%';
    overL.style.backgroundImage = "url('img/rejilla.png')";
    overL.innerHTML = '<div id="txtOverL" style="margin:0 auto;border-radius:10px;box-shadow:inset 0px 0px 0px 1px #000000;width:80%;background-color:#FFFFFF;position:relative;cursor:default;user-select:none;text-align:center;padding:10px;color:#000000;">' + msg + '</div>';
    body.appendChild(overL);
    resizeOverL();
  }
}

function resizeOverL() {
  if (overL) {
    var aux = document.getElementById('txtOverL');
    var aux2 = overL;
    if (aux.innerHTML != "") {
      var fontSize = 10;
      do {
        fontSize++;
        aux.style.font = "bold " + fontSize + 'px Arial,sans-serif';
      } while (aux2.scrollHeight <= aux2.clientHeight && aux2.scrollWidth <= aux2.clientWidth && fontSize < 100);
      do {
        fontSize--;
        aux.style.font = "bold " + fontSize + 'px Arial,sans-serif';
      } while (aux2.scrollHeight > aux2.clientHeight && aux2.scrollWidth > aux2.clientWidth && fontSize > 10);
      aux.style.top = (aux2.clientHeight - aux.clientHeight) / 2 + 'px';
	}
  }
}

function onBackKeyDown() {
  if (overL)
    borrarOverL();
  else {
    overL = document.createElement("DIV");
    overL.style.position = 'absolute';
    overL.style.zIndex = '100';
    overL.style.left = '0px';
    overL.style.top = '0px';
    overL.style.width = '100%';
    overL.style.height = '100%';
    overL.style.backgroundImage = "url('img/rejilla.png')";
    overL.innerHTML =
      '<div style="width:100%;height:50%;"><button style="width:100%;height:100%;background:url(\'img/limpiar.png\') center no-repeat;background-size:contain;background-color:transparent;outline:none;user-select:none;border:none;" onclick="borrarOverL();pulsacion(18);"></button></div>' +
      '<div style="width:100%;height:50%;"><button style="width:100%;height:100%;background:url(\'img/salir.png\') center no-repeat;background-size:contain;background-color:transparent;outline:none;user-select:none;border:none;" onclick="window.plugins.AdMob.showInterstitialAd();window.plugins.AdMob.createInterstitialView();navigator.app.exitApp();"></button></div>';
    body.appendChild(overL);
  }
}

function initAd() {
  if (window.plugins && window.plugins.AdMob) {
    var ad_units = {
      ios: {
        banner: 'ca-app-pub-1049177957580462/9597550835',
        interstitial: 'ca-app-pub-1049177957580462/9597550835'
      },
      android: {
        banner: 'ca-app-pub-1049177957580462/9597550835',
        interstitial: 'ca-app-pub-1049177957580462/9597550835'
      }
    };
    var admobid = (/(android)/i.test(navigator.userAgent)) ? ad_units.android : ad_units.ios;

    window.plugins.AdMob.setOptions({
      publisherId: admobid.banner,
      interstitialAdId: admobid.interstitial,
      bannerAtTop: false, // set to true, to put banner at top
      overlap: false, // set to true, to allow banner overlap webview
      offsetTopBar: false, // set to true to avoid ios7 status bar overlap
      isTesting: false, // receiving test ad
      autoShow: false // auto show interstitial ad when loaded
    });
  } else {
    //            alert( 'admob plugin not ready' );
  }
}

function resizeEntrada() {
  var fSize = Math.floor(window.innerHeight * 0.031);
  for (var i = 0; i < 275; i++)
    document.getElementsByTagName('input')[i].style.fontSize = "" + fSize + "px";
  document.getElementsByTagName('input')[276].style.fontSize = "" + fSize + "px";
  document.getElementsByTagName('input')[277].style.fontSize = "" + fSize + "px";
  document.getElementsByTagName('textarea')[0].style.fontSize = "" + fSize + "px";
}








var corriendo = false;
var delay = 300;
var trace = false;
var renglon = new Array(); 

function normalizar(S){
      var C;
      var NS = '';
      S=S.toUpperCase();
      for(i = 0 ; i <S.length ; i++){
      C = S.charAt(i);
      if ((C>='0' && C<='9')|| (C>='A' && C <= 'F')) NS = NS+C;
   }
     return NS;
}

function traceHTMLinicial() {
	traceVent = open("","traceCualquiera","width=780,height=460,resizable=yes,scrollbars=yes");
	traceVent.moveTo(0,0);
        traceVent.document.write ('<ht'+'ml>\n');
        traceVent.document.write ('<he'+'ad>\n');
        traceVent.document.write ('<title>\n');
        traceVent.document.write ('Valor de los registros');
        traceVent.document.write ('</title>\n');
        traceVent.document.write ('<BO'+'DY>\n');
        traceVent.document.write ('<FONT face="courier new" color=green> \n');
        traceVent.document.write ('CP&nbsp;&nbsp;INST&nbsp;&nbsp;R0&nbsp;&nbsp;R1&nbsp;&nbsp;R2&nbsp;&nbsp;R3&nbsp;&nbsp;R4&nbsp;&nbsp;R5&nbsp;&nbsp;R6&nbsp;&nbsp;R7&nbsp;&nbsp;R8&nbsp;&nbsp;R9&nbsp;&nbsp;R10&nbsp;R11&nbsp;R12&nbsp;R13&nbsp;R14&nbsp;R15<BR>\n');
	renglon[0] = '00';
	renglon[1] = '00';
	renglon[2] = '00';
	renglon[3] = '00';
	renglon[4] = '00';
	renglon[5] = '00';
	renglon[6] = '00';
	renglon[7] = '00';
	renglon[8] = '00';
	renglon[9] = '00';
	renglon[10] = '00';
	renglon[11] = '00';
	renglon[12] = '00';
	renglon[13] = '00';
	renglon[14] = '00';
	renglon[15] = '00';
   }

    function codigoHTMLinicial() {
		nuevaVent = open("","cualquiera","width=360,height=460,resizable=yes,scrollbars=yes");
		nuevaVent.moveTo(0,0);
        nuevaVent.document.write ('<ht'+'ml>\n');
        nuevaVent.document.write ('<he'+'ad>\n');
        nuevaVent.document.write ('<title>\n');
        nuevaVent.document.write ('Desemsamblado');
        nuevaVent.document.write ('</title>\n');
        nuevaVent.document.write ('<BO'+'DY>\n');
        nuevaVent.document.write ('<FONT face="courier new" color=green> \n');
   }

    function NibbleDec2Hex(n){
      switch (n){
       case 10 : return 'A'; break;
       case 11 : return 'B'; break;
       case 12 : return 'C'; break;
       case 13 : return 'D'; break;
       case 14 : return 'E'; break;
       case 15 : return 'F'; break;
       default : return n;
      }
     }


 function NibbleHex2Dec (di){
    var de;
    di = di.toString();
    if (di >= '0' && di <= '9') de = di;
     else switch (di) {
      case 'A': de = '10'; break;
      case 'B': de = '11'; break;
      case 'C': de = '12'; break;
      case 'D': de = '13'; break;
      case 'E': de = '14'; break;
      case 'F': de = '15'; break;
     }
//     return de;
     return di;
   }


   
 function mnemonico(a){
        switch(a.charAt(0)){
	
	case '1': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+',['+a.charAt(2)+a.charAt(3)+']';break;
	
	case '2': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+','+a.charAt(2)+a.charAt(3);break; 
	
	case '3': return 'MOV ['+a.charAt(2)+a.charAt(3)+'],R'+NibbleHex2Dec(a.charAt(1));break;

	case '4': return 'MOV R'+NibbleHex2Dec(a.charAt(3))+',R'+NibbleHex2Dec(a.charAt(2));break;

	case '5': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+', ADDC2(R'+
                        NibbleHex2Dec(a.charAt(2))+',R'+NibbleHex2Dec(a.charAt(3))+')';break;

	case '6': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+', ADDFP(R'+
                        NibbleHex2Dec(a.charAt(2))+',R'+NibbleHex2Dec(a.charAt(3))+')';break;

	case '7': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+', OR(R'+
                        NibbleHex2Dec(a.charAt(2))+',R'+NibbleHex2Dec(a.charAt(3))+')';break;


	case '8': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+', AND(R'+
                        NibbleHex2Dec(a.charAt(2))+',R'+NibbleHex2Dec(a.charAt(3))+')';break;

	case '9': return 'MOV R'+NibbleHex2Dec(a.charAt(1))+', XOR(R'+
                        NibbleHex2Dec(a.charAt(2))+',R'+NibbleHex2Dec(a.charAt(3))+')';break;

	case 'A': return 'ROR R'+NibbleHex2Dec(a.charAt(1))+','+a.charAt(2)+a.charAt(3);break;

	case 'B': if(a.charAt(1)=='0') return 'JMP '+a.charAt(2)+a.charAt(3);
			else return 'CMP R'+NibbleHex2Dec(a.charAt(1))+',R0; JE '+
				      a.charAt(2)+a.charAt(3);
                break;


	case 'C': if((a.charAt(2)=='0') && (a.charAt(3)=='0')) return 'HLT';
					else return '&nbsp;&nbsp;???';
                break;

	}
 	}



function ByteDec2Hex(N){
var re;
var di;
 re=N % 16;
 N=N-re;
 di=N / 16;
 return ' '+ NibbleDec2Hex(di) + NibbleDec2Hex(re);
}


function linea(w,x,y){
  nuevaVent.document.write(ByteDec2Hex(w)+' '+x+' '+y+'<BR>\n');
}



function proceso(){
        entrada = prompt("Ingrese el programa:","");
		if (entrada) {
        codigoHTMLinicial();
 	entrada = normalizar(entrada);
        i = 0; cp = 0;
        while ( i < entrada.length) {
        byte = entrada.charAt (i); i++;
        if ( i< entrada.length) byte = byte + entrada.charAt(i);
	else byte = byte + '0' ;
	i++;
	if (!valido(byte)) {linea (cp, byte, '&nbsp;&nbsp;???'); cp ++; }
	else { if (i<entrada.length)instruccion = byte +  entrada.charAt (i);
	else instruccion = byte + '0';
	i++;
	if (i<entrada.length) instruccion = instruccion + entrada.charAt (i);
	else intruccion = instruccion + '0';
	i++;
	linea (cp, instruccion, mnemonico(instruccion));
	cp = cp+2;
       }
     }
  
   codigoHTMLfinal();
   }
}

function codigoHTMLfinal() {
         nuevaVent.document.write ('</font>\n');
         nuevaVent.document.write ('</body>\n');
         nuevaVent.document.write ('</html>\n');	
   }

function traceHTMLfinal() {
         traceVent.document.write ('</font>\n');
         traceVent.document.write ('</body>\n');
         traceVent.document.write ('</html>\n');	
   }


function valido(b){
  return(b.charAt(0)=='1') || (b.charAt(0)=='2') ||
        (b.charAt(0)=='3') || (b.charAt(0)=='4' && b.charAt(1)=='0') ||
        (b.charAt(0)=='5') || (b.charAt(0)=='6') ||
        (b.charAt(0)=='7') || (b.charAt(0)=='8') ||
        (b.charAt(0)=='9') || (b.charAt(0)=='A') ||
        (b.charAt(0)=='B') || (b.charAt(0)=='C' && b.charAt(1)=='0')
}
        
    
  
      function digHex2bin(h){
        h = h.toString();
        switch (h){
          case '0': b = '0000'; break;
          case '1': b = '0001'; break;
          case '2': b = '0010'; break;
          case '3': b = '0011'; break;
          case '4': b = '0100'; break;
          case '5': b = '0101'; break;
          case '6': b = '0110'; break;
          case '7': b = '0111'; break;
          case '8': b = '1000'; break;
          case '9': b = '1001'; break;
          case 'A': case 'a': b = '1010'; break;
          case 'B': case 'b': b = '1011'; break;
          case 'C': case 'c': b = '1100'; break;
          case 'D': case 'd': b = '1101'; break;
          case 'E': case 'e': b = '1110'; break;
          case 'F': case 'f': b = '1111';
        }
        return b;
      }
      
      function digHex2dec(h){
        switch (h){
          case '0': d = 0; break;
          case '1': d = 1; break;
          case '2': d = 2; break;
          case '3': d = 3; break;
          case '4': d = 4; break;
          case '5': d = 5; break;
          case '6': d = 6; break;
          case '7': d = 7; break;
          case '8': d = 8; break;
          case '9': d = 9; break;
          case 'A': case 'a': d = 10; break;
          case 'B': case 'b': d = 11; break;
          case 'C': case 'c': d = 12; break;
          case 'D': case 'd': d = 13; break;
          case 'E': case 'e': d = 14; break;
          case 'F': case 'f': d = 15; 
        }  
        return d;
      }
      
      function valDec2hex(d){
        switch (d){
          case 0: h = '0'; break;
          case 1: h = '1'; break;
          case 2: h = '2'; break;
          case 3: h = '3'; break;
          case 4: h = '4'; break;
          case 5: h = '5'; break;
          case 6: h = '6'; break;
          case 7: h = '7'; break;
          case 8: h = '8'; break;
          case 9: h = '9'; break;
          case 10: h = 'A'; break;
          case 11: h = 'B'; break;
          case 12: h = 'C'; break;
          case 13: h = 'D'; break;
          case 14: h = 'E'; break;
          case 15: h = 'F';
        }  
        return h;
      }

      function hex2dec(h){
        d = 0;
        for (i = 0; i < h.length; i++)
          d = d * 16 + digHex2dec(h.charAt(i));
      return d;
		}
      
      function hex2bin(h){
        b = '';
        for (i = 0; i < h.length; i++)
          b = b + digHex2bin(h.charAt(i));
        return b;
      }
      
      function dec2hex(d){
        return valDec2hex(Math.floor(d/16)) + valDec2hex(d%16);
      }

      function hex2int(h){
        d = hex2dec(h);
        if (d >= 0 && d < 128) i = d;
        else i = d - 256;
        return i;
      }
      
      function int2hex(i){
        if (i >= 0) d = i;
        else d = i + 256;
        h = dec2hex(d);
        return h;
      }

      function hex2flo(h){
        b = hex2bin(h);
        s = b.charAt(0);
        e = b.charAt(1)+b.charAt(2)+b.charAt(3);
        m = b.charAt(4)+b.charAt(5)+b.charAt(6)+b.charAt(7);
        if (s == '0') S = 1; else S = -1;
        if (m == '0000') M = 0;      else
        if (m == '0001') M = 0.0625; else
        if (m == '0010') M = 0.125;  else
        if (m == '0011') M = 0.1875; else
        if (m == '0100') M = 0.25;   else
        if (m == '0101') M = 0.3125; else
        if (m == '0110') M = 0.375;  else
        if (m == '0111') M = 0.4375; else
        if (m == '1000') M = 0.5;    else
        if (m == '1001') M = 0.5625; else
        if (m == '1010') M = 0.625;  else
        if (m == '1011') M = 0.6875; else
        if (m == '1100') M = 0.75;   else
        if (m == '1101') M = 0.8125; else
        if (m == '1110') M = 0.875;  else
        if (m == '1111') M = 0.9375;
        if (e == '000') E = 0; else
        if (e == '001') E = 1; else
        if (e == '010') E = 2; else
        if (e == '011') E = 3; else
        if (e == '100') E = 4;  else
        if (e == '101') E = 5;  else
        if (e == '110') E = 6;  else
        if (e == '111') E = 7;
        if (b == '00000000') return 0;
        else return S * (1+M) * Math.pow(2,E-4);
      }

      function bin2hex(b){
        if (b == '0000') h = '0'; else
        if (b == '0001') h = '1'; else
        if (b == '0010') h = '2'; else
        if (b == '0011') h = '3'; else
        if (b == '0100') h = '4'; else
        if (b == '0101') h = '5'; else
        if (b == '0110') h = '6'; else
        if (b == '0111') h = '7'; else
        if (b == '1000') h = '8'; else
        if (b == '1001') h = '9'; else
        if (b == '1010') h = 'A'; else
        if (b == '1011') h = 'B'; else
        if (b == '1100') h = 'C'; else
        if (b == '1101') h = 'D'; else
        if (b == '1110') h = 'E'; else
        if (b == '1111') h = 'F';
        return h;
      }
      
      function flo2hex(f){
        if (f >= 0) S = '0';
        else {
          S = '1';
          f = -f;
        }
        m = f;
        e = 0;
        while (m >= 2 && e < 3) {
          e++;
          m = m / 2;
        }
        while (m < 1 && e > -4) {
          e--;
          m = m * 2;
        }
        e = digHex2bin(e + 4);
        E = e.charAt(1) + e.charAt(2) + e.charAt(3);
        if (m < 1.0625) M = '0000'; else
        if (m < 1.125) M = '0001'; else
        if (m < 1.1875) M = '0010'; else
        if (m < 1.25) M = '0011'; else
        if (m < 1.3125) M = '0100'; else
        if (m < 1.375) M = '0101'; else
        if (m < 1.4375) M = '0110'; else
        if (m < 1.5) M = '0111'; else
        if (m < 1.5625) M = '1000'; else
        if (m < 1.625) M = '1001'; else
        if (m < 1.6875) M = '1010'; else
        if (m < 1.75) M = '1011'; else
        if (m < 1.8125) M = '1100'; else
        if (m < 1.875) M = '1101'; else
        if (m < 1.9375) M = '1110'; else M = '1111';
        b = S + E + M;
        n1 = b.charAt(0) + b.charAt(1) + b.charAt(2) + b.charAt(3);
        n2 = b.charAt(4) + b.charAt(5) + b.charAt(6) + b.charAt(7);
        h = bin2hex(n1) + bin2hex(n2);
        return h;
      }
      
      function cargar(){
        prog = prompt("Ingrese el programa:","");
        pr = '';
        for (i = 0; i < prog.length; i++) {
          dig = prog.charAt(i).toUpperCase();
          if ((dig >= '0' && dig <= '9') || (dig >= 'A' && dig <= 'F')) pr = pr + dig;
        }
        if (pr.length % 2 != 0) pr = pr + '0';
        pr = pr.substring(0,512);
        for (i = 0; i < pr.length / 2; i++) {
          valor = pr.charAt(i*2) + pr.charAt(i*2+1);
          document.getElementsByTagName('input')[i].value = valor;
        }
      }

      function parar() {
         corriendo = false;
                document.getElementsByTagName('input')[280].style.backgroundImage = "url('img/run.png')";
		if (trace) {
			traceHTMLfinal(); 
			trace = false;
		}
      }

      function correr(){
        if(corriendo) {
          ejecutar();
          setTimeout("correr()", delay);
        }
      }

      function automatico (){
         if (corriendo) parar();
	 else {
                document.getElementsByTagName('input')[280].style.backgroundImage = "url('img/halt.png')";
				if (confirm("¿Desea generar el listado de los registros?"))
					trace = true;
				else trace = false;
                delay = prompt("Ingrese el valor del retardo entre instrucciones (en milisegundos):","");
                corriendo = true;
				if (trace)
					traceHTMLinicial(); 
                correr(); 
         }
      }

      function reiniciar(){
        if (confirm("¿Desea borrar la memoria?")) {
          for (i = 0; i < 256; i++) document.getElementsByTagName('input')[i].value = "00";
        }
        if (confirm("¿Desea borrar los registros?")) {
          for (i = 256; i < 273; i++) document.getElementsByTagName('input')[i].value = "00";
	  document.getElementsByTagName('input')[273].value = "0000";
        }
        document.getElementsByTagName('input')[274].value = "";
        document.getElementsByTagName('input')[276].value = "";
        document.getElementsByTagName('input')[277].value = "";
        document.getElementsByTagName('textarea')[0].value = "";
      }

      function ejecutar(){
        err = false;
        document.getElementsByTagName('textarea')[0].value = '';
        for (i = 256; i < 273; i++) {
          document.getElementsByTagName('input')[i].value = document.getElementsByTagName('input')[i].value.toUpperCase();
          while (document.getElementsByTagName('input')[i].value.length < 2) document.getElementsByTagName('input')[i].value = '0' + document.getElementsByTagName('input')[i].value;
          b1 = document.getElementsByTagName('input')[i].value.charAt(0);
          b2 = document.getElementsByTagName('input')[i].value.charAt(1);
          if (((b1 < '0' || b1 > '9') && (b1 < 'A' || b1 > 'F')) || ((b2 < '0' || b2 > '9') && (b2 < 'A' || b2 > 'F'))) {
            alert(b1 + b2 + ' no es un valor hexadecimal!');
            err = true;
            break;
          }
        }
        if (!err) {
          b1 = hex2dec(document.getElementsByTagName('input')[272].value);
          if (b1 == 255) b2 = 0; else b2 = b1 + 1;
          while (document.getElementsByTagName('input')[b1].value.length < 2) document.getElementsByTagName('input')[b1].value = '0' + document.getElementsByTagName('input')[b1].value;
          while (document.getElementsByTagName('input')[b2].value.length < 2) document.getElementsByTagName('input')[b2].value = '0' + document.getElementsByTagName('input')[b2].value;
          d1 = document.getElementsByTagName('input')[b1].value.toUpperCase().charAt(0);
          d2 = document.getElementsByTagName('input')[b1].value.toUpperCase().charAt(1);
          d3 = document.getElementsByTagName('input')[b2].value.toUpperCase().charAt(0);
          d4 = document.getElementsByTagName('input')[b2].value.toUpperCase().charAt(1);
          if (((d1 < '0' || d1 > '9') && (d1 < 'A' || d1 > 'F')) || ((d2 < '0' || d2 > '9') && (d2 < 'A' || d2 > 'F')) || ((d3 < '0' || d3 > '9') && (d3 < 'A' || d3 > 'F')) || ((d4 < '0' || d4 > '9') && (d4 < 'A' || d4 > 'F'))) {
            alert(d1 + d2 + d3 + d4 + ' no es un valor hexadecimal!');
            err = true;
          }  
          if (!err) {
            document.getElementsByTagName('input')[273].value = d1 + d2 + d3 + d4;
            instruccion = document.getElementsByTagName('input')[273].value;
            cod = instruccion.charAt(0);
            switch (cod) {
              case '1':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = document.getElementsByTagName('input')[hex2dec(instruccion.charAt(2) + instruccion.charAt(3))].value;
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con el contenido de la celda de memoria ' + instruccion.charAt(2) + instruccion.charAt(3) + '.';
                break;
              case '2':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = instruccion.charAt(2) + instruccion.charAt(3);
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con el valor ' + instruccion.charAt(2) + instruccion.charAt(3) + '.';
                break;
              case '3':
                document.getElementsByTagName('input')[hex2dec(instruccion.charAt(2) + instruccion.charAt(3))].value = document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value;
                document.getElementsByTagName('textarea')[0].value = 'Se almacenó el contenido del registro ' + instruccion.charAt(1) +' en la celda de memoria ' + instruccion.charAt(2) + instruccion.charAt(3) + '.';
                break;
              case '4':
                if (instruccion.charAt(1) == '0'){
                  document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(3))].value = document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(2))].value;
                  document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(3) +' con el contenido del registro ' + instruccion.charAt(2) + '.';
                }
                else {
                  err = true;
                  alert ('"' + instruccion + '" no es una instrucción válida');
                } 
                break;
              case '5':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = int2hex(hex2int(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(2))].value) + hex2int(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(3))].value));
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con la suma de los enteros contenidos en los registros ' + instruccion.charAt(2) + ' y ' + instruccion.charAt(3) + '.';
                break;
              case '6':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = flo2hex(hex2flo(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(2))].value) + hex2flo(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(3))].value));
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con la suma de los números de punto flotante contenidos en los registros ' + instruccion.charAt(2) + ' y ' + instruccion.charAt(3) + '.';
                break;
              case '7':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = dec2hex(hex2dec(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(2))].value) | hex2dec(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(3))].value));
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con el resultado de hacer un OR entre los contenidos de los registros ' + instruccion.charAt(2) + ' y ' + instruccion.charAt(3) + '.';
                break;
              case '8':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = dec2hex(hex2dec(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(2))].value) & hex2dec(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(3))].value));
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con el resultado de hacer un AND entre los contenidos de los registros ' + instruccion.charAt(2) + ' y ' + instruccion.charAt(3) + '.';
                break;
              case '9':
                document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = dec2hex(hex2dec(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(2))].value) ^ hex2dec(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(3))].value));
                document.getElementsByTagName('textarea')[0].value = 'Se cargó el registro ' + instruccion.charAt(1) +' con el resultado de hacer un XOR entre los contenidos de los registros ' + instruccion.charAt(2) + ' y ' + instruccion.charAt(3) + '.';
                break;
              case 'A':
                if (instruccion.charAt(2) == '0'){
                  bin = hex2bin(document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value);
                  for (veces=1; veces<= hex2dec(instruccion.charAt(3)); veces++)
                    bin = bin.charAt(7) + bin.charAt(0) + bin.charAt(1) + bin.charAt(2) + bin.charAt(3) + bin.charAt(4) + bin.charAt(5) + bin.charAt(6);
                  document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value = bin2hex(bin.charAt(0) + bin.charAt(1) + bin.charAt(2) + bin.charAt(3))+bin2hex(bin.charAt(4) + bin.charAt(5) + bin.charAt(6) + bin.charAt(7));
                  document.getElementsByTagName('textarea')[0].value = 'Se rotó ' + hex2dec(instruccion.charAt(3)) + ' veces hacia la derecha el contenido del registro ' + instruccion.charAt(1) +'.';
                }
                else {
                  err = true;
                  alert ('"' + instruccion + '" no es una instrucción válida');
                } 
                break;
              case 'B':
                p1 = document.getElementsByTagName('input')[256].value;
                p2 = document.getElementsByTagName('input')[256+hex2dec(instruccion.charAt(1))].value;
                if (p1 == p2){
                  b2 = hex2dec(instruccion.charAt(2) + instruccion.charAt(3));
                  if (b2 == 0) b2 = 255; else b2--;
                  document.getElementsByTagName('textarea')[0].value = 'Se comparó el registro ' + instruccion.charAt(1) +' con R0. Como son iguales, la próxima instrucción será la que comienza en ' + instruccion.charAt(2) + instruccion.charAt(3) + '.';
                }
                else document.getElementsByTagName('textarea')[0].value = 'Se comparó el registro ' + instruccion.charAt(1) +' con R0. Como son diferentes, continuará normalmente la secuencia de ejecución.';
                break;
              case 'C':
                if (instruccion.charAt(1) + instruccion.charAt(2) + instruccion.charAt(3) == '000'){
                  if (b1 == 0) b2 = 255; else b2 = b1 - 1;
                  document.getElementsByTagName('textarea')[0].value = 'Paró la ejecución.';
		  parar();
                }
                else {
                  err = true; alert ('"' + instruccion + '" no es una instrucción válida');
                } 
                break;
              default:
                err = true; alert ('"' + instruccion + '" no es una instrucción válida');
            }
			if (trace) {
			traceVent.document.write ('<FONT COLOR="red">');
			traceVent.document.write (document.getElementsByTagName('input')[272].value + '&nbsp;&nbsp;');
			traceVent.document.write (instruccion + '&nbsp;&nbsp;');
			traceVent.document.write ('</FONT>');
			for (i = 256; i < 272; i++) {
				if (renglon[i-256] == document.getElementsByTagName('input')[i].value)
					traceVent.document.write (document.getElementsByTagName('input')[i].value + '&nbsp;&nbsp;');
				else {
					traceVent.document.write ('<FONT COLOR="red"><b>');
					traceVent.document.write (document.getElementsByTagName('input')[i].value + '&nbsp;&nbsp;');
					traceVent.document.write ('</b></FONT>');
					renglon[i-256] = document.getElementsByTagName('input')[i].value;
				}
			}
			traceVent.document.write ('<BR>\n');
			}
          }
          if (!err) {
            if (b2 == 255) b1 = 0; else b1 = b2 + 1;
            document.getElementsByTagName('input')[272].value = dec2hex (b1);
          }
	  else parar();
        }  
      }
      
      function convertir(){
        document.getElementsByTagName('input')[274].value = document.getElementsByTagName('input')[274].value.toUpperCase();
		if (document.getElementsByTagName('input')[274].value != "") {
        while (document.getElementsByTagName('input')[274].value.length < 2) document.getElementsByTagName('input')[274].value = '0' + document.getElementsByTagName('input')[274].value;
        b1 = document.getElementsByTagName('input')[274].value.charAt(0);
        b2 = document.getElementsByTagName('input')[274].value.charAt(1);
        if (((b1 < '0' || b1 > '9') && (b1 < 'A' || b1 > 'F')) || ((b2 < '0' || b2 > '9') && (b2 < 'A' || b2 > 'F'))) {
          document.getElementsByTagName('input')[276].value = '';
          document.getElementsByTagName('input')[277].value = '';
          alert(b1 + b2 + ' no es un valor hexadecimal!');
        }
        else {
              document.getElementsByTagName('input')[276].value = hex2int(document.getElementsByTagName('input')[274].value);
              document.getElementsByTagName('input')[277].value = hex2flo(document.getElementsByTagName('input')[274].value);
        } 
        } 
      }