<?php
function getAmPm($hour)
{
   return $hour<=12? $hour.':00 AM':($hour-12).':00 PM';
}
function mesageContent($isFromCode,$receivedData)
{
    if($isFromCode){
        $reservationsTypes = ["Caney","Piscina","Parque","Cabañas","Otros"];
        $dateInt = date_parse($receivedData["dateInit"]);
        $dateEnd = date_parse($receivedData["dateEnd"]); 
        $monthSpanish = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
       $content = '<html>  
        <head>
        <meta http-equiv=Content-Type content="text/html; charset=utf-8>
        <meta name=Generator content="Microsoft Word 15 (filtered)">
        <title>mail</title>
        <style>
        <!--
        /* Font Definitions */
        @font-face
            {font-family:"Cambria Math";
            panose-1:2 4 5 3 5 4 6 3 2 4;}
        @font-face
            {font-family:Calibri;
            panose-1:2 15 5 2 2 2 4 3 2 4;}
        @font-face
            {font-family:Consolas;
            panose-1:2 11 6 9 2 2 4 3 2 4;}
        /* Style Definitions */
        p.MsoNormal, li.MsoNormal, div.MsoNormal
            {margin-top:0cm;
            margin-right:0cm;
            margin-bottom:8.0pt;
            margin-left:0cm;
            line-height:107%;
            font-size:11.0pt;
            font-family:"Calibri",sans-serif;}
        p.MsoHeader, li.MsoHeader, div.MsoHeader
            {mso-style-link:"Encabezado Car";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri",sans-serif;}
        p.MsoFooter, li.MsoFooter, div.MsoFooter
            {mso-style-link:"Pie de p�gina Car";
            margin:0cm;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri",sans-serif;}
        a:link, span.MsoHyperlink
            {color:#0563C1;
            text-decoration:underline;}
        a:visited, span.MsoHyperlinkFollowed
            {color:#954F72;
            text-decoration:underline;}
        span.EncabezadoCar
            {mso-style-name:"Encabezado Car";
            mso-style-link:Encabezado;}
        span.PiedepginaCar
            {mso-style-name:"Pie de página Car";
            mso-style-link:"Pie de página";}
        .MsoPapDefault
            {margin-bottom:8.0pt;
            line-height:107%;}
        /* Page Definitions */
        @page WordSection1
            {size:595.3pt 841.9pt;
            margin:72.0pt 72.0pt 72.0pt 72.0pt;}
        div.WordSection1
            {page:WordSection1;}
        -->
        </style>

        </head>

        <body lang=ES-VE link="#0563C1" vlink="#954F72">

        <div class=WordSection1>

        <p class=MsoNormal align=right style=\'text-align:right\'><img width=120
        height=120 id="Imagen 1" src="http:\\www.laGuacha.net\V1\images\positivo-negro.png"></p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>Hola, '.$receivedData["name"].' usted ha recibido
        este correo porque se ha realizado una solicitud de reserva en la guacha granja
        ecoturística, utilizando esta dirección de e-mail a través de nuestro portal
        web.</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>Detalles de reserva:</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>Nombre: '.$receivedData["name"].'</p>

        <p class=MsoNormal>Tipo de Reserva: '. $reservationsTypes[intval ($receivedData["reserveType"])-1].'</p>

        <p class=MsoNormal>Numero Celular: '. $receivedData["cellphone"].'</p>

        <p class=MsoNormal>Cantidad de Personas: '. $receivedData["guests"].'</p>

        <p class=MsoNormal>Desde: el '.$dateInt["day"].' de'. $monthSpanish[$dateInt["month"]-1].' del año '.$dateInt["year"].' a las '.getAmPm($dateInt["hour"]).'</p>

        <p class=MsoNormal>Hasta:  el '.$dateEnd["day"].' de '.$monthSpanish[$dateEnd["month"]-1].' del año '.$dateEnd["year"].' a las '.getAmPm($dateEnd["hour"]).'</p>

        <p class=MsoNormal>Informacion adicional: '. $receivedData["information"].'</p>

        <p class=MsoNormal>&nbsp;</p>       

        <p class=MsoNormal>Para confirmar la reserva haga click en el siguiente enlace:</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>En caso de haber recibido este correo por error, haga caso
        omiso del mismo, siéntase en total libertad de borrarlo, le pedimos nuestras
        mas sinceras disculpas por las molestias ocasionadas y le invitamos a conocernos
        a través de nuestro sitio web <a href="http://www.laguacha.net">www.laguacha.net</a>
        </p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal>&nbsp;</p>

        <p class=MsoNormal><span style=\'font-size:7.0pt;line-height:107%;font-family:
        Consolas\'>&nbsp;</span></p>

        <p class=MsoNormal><span style=\'font-size:7.0pt;line-height:107%;font-family:
        Consolas\'>&nbsp;</span></p>

        <p class=MsoNormal><span style=\'font-size:7.0pt;line-height:107%;font-family:
        Consolas\'>&nbsp;</span></p>

        <p class=MsoNormal style=\'margin-bottom:0cm;margin-bottom:.0001pt\'><span
        style=\'font-size:7.0pt;line-height:107%;font-family:Consolas\'>La guacha granja ecoturística:</span></p>

        <p class=MsoNormal style=\'margin-bottom:0cm;margin-bottom:.0001pt\'><span
        style=\'font-size:7.0pt;line-height:107%;font-family:Consolas\'>Contactos</span></p>

        <p class=MsoNormal style=\'margin-bottom:0cm;margin-bottom:.0001pt\'><span
        lang=EN-US style=\'font-size:7.0pt;line-height:107%;font-family:Consolas\'>Tel:</span><span
        lang=EN-US> </span><span style=\'font-size:7.0pt;line-height:107%;font-family:
        Consolas\'>+584147937084</span><span lang=ES-US style=\'font-size:7.0pt;
        line-height:107%;font-family:Consolas\'></span></p>

        <p class=MsoNormal style=\'margin-bottom:0cm;margin-bottom:.0001pt\'><span
        lang=EN-US style=\'font-size:7.0pt;line-height:107%;font-family:Consolas\'>Twitter:
        <a href="https://twitter.com/laguachaeco">https://twitter.com/laguachaeco</a> </span></p>

        <p class=MsoNormal style=\'margin-bottom:0cm;margin-bottom:.0001pt\'><span
        lang=EN-US style=\'font-size:7.0pt;line-height:107%;font-family:Consolas\'>Instagram:
        <a href="https://www.instagram.com/laguacha.granjaecoturistica/">https://www.instagram.com/laguacha.granjaecoturistica/</a></span></p>

        <p class=MsoNormal style=\'margin-bottom:0cm;margin-bottom:.0001pt\'><span
        lang=EN-US style=\'font-size:7.0pt;line-height:107%;font-family:Consolas\'>Facebook:
        <a href="https://www.facebook.com/laguacha.granjaecoturistica/">https://www.facebook.com/laguacha.granjaecoturistica/</a></span></p>

        </div>

        </body>

        </html>';  
        return $content;
        }
        else
        {
            echo '<script>
            (function(){
                javascript:history.go(-1);
            })();
            </script>';
        }
    }
?>