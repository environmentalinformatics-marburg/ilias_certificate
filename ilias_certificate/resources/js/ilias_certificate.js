/* 
 A class to convert web-data xml file and export as zip. 
 Create certificate templates for Ilias
*/ 

/* Titles of areas */
var carea1Title = new Array();
carea1Title = ['I Medientheorie und Mediengesellschaft',
                        'II Didaktik und Methodik des Medieneinsatzes',
                        'III Mediennutzung',
                        'IV Medien und Schulentwicklung',
                        'V Lehrerrolle und Personalentwicklung'];
                        
/* Themas  */    
var carea1Checkbox = new Array();                    
carea1Checkbox =  [
['Thematisierung aktueller Zusammenhänge zwischen Medien und Gesellschaft, auch mit Blick auf die Bedeutung des Zugangs zu Informations- und Kommunikations-systemen für gesellschaftliche, wirtschaftliche und industrielle Belange.',  'Thematisierung der Mediensozialisation von Schülerinnen und Schülern sowie Möglichkeiten zur pädagogischen Impulssetzung im Sinne einer medienethischen Werterziehung und aktiver, demokratischer Teilhabe.',  'Thematisierung von Fragen des Kinder- und Jugendschutzes  Thematisierung von Chancen und Risiken der Mediennutzung.'], ['Thematisierung der didaktischen Funktion des Medieneinsatzes in Abstimmung mit Unterrichtsmethoden und -inhalten.', 'Thematisierung der Nutzung von Medien zur Unterstützung selbstgesteuerten, kooperativen und kreativen Lernens.', 'Thematisierung von Möglichkeiten unterrichtlicher Differenzierung durch Medien-einsatz.'], ['Einführung bzw. intensive Nutzung unterrichtsrelevanter Medien und Software. Spezifikation der Medien/Software:', 'Ein- bzw. Anleitung zur kritischen und ergebnisorientierten Recherche in Vorbereitung des Schul- oder Unterrichtsalltags.'],
['Thematisierung von Möglichkeiten zur Initiierung von Medienprojekten im schulischen Kontext'],
['Kritische Reflexion der eigenen Haltung in Bezug auf Mediennutzung, Mediengesellschaft und Medieneinsatz.', 'Reflexion der eigenen Medienbiographie im Hinblick auf Möglichkeiten,Schülerinnen und Schüler zu einer kompetenten Teilnahme zu motivieren und moralische Haltungen, ethische Werte und ästhetische Urteile zu fördern.', 'Auseinandersetzung mit Entwicklungen der Medienwelt, darauf aufbauend Thematisierung dieser Entwicklungen als Chance zur beruflichen und persönlichen Weiterentwicklung im Sinne einer zeitgemäßen Lehrerrolle sowie die Ableitung des eigenen Fortbildungsbedarf.']
];


/* Create html element*/
function crElement(element, id, titel, text, type, cName) {
  var resElement = document.createElement(element);
  if(type == 'checkbox'){ 
      resElement.setAttribute('type', 'checkbox');
     // resElement.setAttribute('onchange', 'onToggle('+ titel +',' + text +')');
  } else {
    resElement.innerHTML = text;
  }
  resElement.id = id;
  resElement.className = cName;
  return resElement;
}

/* Add checkboxses and labels*/
function addCheckboxs(){   
  for( var i = 0; i < carea1Title.length; i++){
    divNode = crElement('div', 'carea1'+i, '','<p class="carea1-content-title">'+carea1Title[i]+'</p>',  'div','carea1-content-div');
    for( var j = 0; j < carea1Checkbox[i].length; j++){
      div = crElement('div', 'carea1'+i+j, '', '', 'div', '');
      //Checkbox
      childCheckbox = crElement('input', 'checkbox'+ i+''+j, i, j, 'checkbox','carea1-content-checkbox');
      //Label
      childLabel = crElement('label', '', '', carea1Checkbox[i][j], 'label', 'carea1-content-label');

      div.appendChild(childCheckbox);
      div.appendChild(childLabel);
      divNode.appendChild(div);
    }
    document.getElementById('carea1').appendChild(divNode);
  }
}

/* */
function enumerationNode(text) {
    var res = '';
    var text = text;
    var text = text.replace(/-/gi, '');
    text = '<fo:list-item-body start-indent="body-start()"><fo:block>' + text + '</fo:block></fo:list-item-body>';
    res = '<fo:list-item-label end-indent="label-end()" text-align="end" wrap-option="no-wrap"><fo:block><fo:inline font="1em serif">•</fo:inline></fo:block></fo:list-item-label>' + text;
    res = '<fo:list-block space-before="1em" space-after="1em"><fo:list-item relative-align="baseline">' + text + '</fo:list-item></fo:list-block>';
    return res;
}

addCheckboxs();

function exportToXML(filename) {
    var today = new Date();
    var xmlFile = '';
    xmlFile += '<?xml version="1.0"?><fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format"><fo:layout-master-set><fo:simple-page-master master-name="ILIAS_certificate" page-height="297mm" page-width="210mm">';
    xmlFile += '<fo:region-body margin="0cm 2cm 0cm 2cm"/><fo:region-before region-name="background-image" extent="0"/>';
    xmlFile += '</fo:simple-page-master></fo:layout-master-set>';

    xmlFile += '<fo:page-sequence master-reference="ILIAS_certificate"><fo:static-content flow-name="background-image">';
    xmlFile += '<fo:block-container absolute-position="absolute" top="0cm" left="0cm" z-index="0">'; // CONTAINER 1
    xmlFile += '<fo:block><fo:external-graphic src="resources/images/background.jpg" content-height="297mm" content-width="210mm"/></fo:block></fo:block-container></fo:static-content>';

    xmlFile += '<fo:flow flow-name="xsl-region-body"><fo:block padding-top="4cm"/><fo:block><fo:block><fo:block>'; // BLOCK 1 
    xmlFile += '<fo:block font-family="Times New Roman">';// BLOCK 2
    /********************************************************************************************************/
    xmlFile += '<fo:block-container position="absolute" top="5cm" left="9cm" height="4cm" width="8cm">'; // CONTAINER 2
    xmlFile += '<fo:block text-align="right" font-size="0.7em">Philipps-Universität Marburg</fo:block>'; //straße
    xmlFile += '<fo:block text-align="right" font-size="0.7em">35032 Marburg</fo:block>'; //straße
    xmlFile += '<fo:block text-align="right" font-size="0.7em">[COURSE_OWNER]</fo:block>'; //E-Mail
    xmlFile += '<fo:block text-align="right" font-size="0.7em">[COURSE_OWNER_MAIL]</fo:block>'; //E-Mail
    xmlFile += '<fo:block text-align="right" font-size="0.7em">Marburg, den [DATE]</fo:block>'; //DATE
    xmlFile += '</fo:block-container>'; // CONTAINER 2
    /********************************************************************************************************/
    xmlFile += '<fo:block text-align="left" font-size="0.6em">Philipps-Universität Marburg</fo:block> '; //Workplace
    xmlFile += '<fo:block text-align="left" font-size="0.6em" border-bottom="1px solid black">35032 Marburg</fo:block>'; //Workplace
    xmlFile += '<fo:block-container position="absolute" top="5cm" left="0cm" height="4cm" width="8cm">'; //
    xmlFile += '<fo:block text-align="left" font-size="0.9em">[USER_SALUTATION] [USER_TITLE] [USER_FIRSTNAME] [USER_LASTNAME]</fo:block>'; //
    xmlFile += '<fo:block text-align="left" font-size="0.9em"> eingeschrieben an der Philipps-Universität Marburg</fo:block>'; //
    xmlFile += '</fo:block-container>'; // CONTAINER 1
    /********************************************************************************************************/
    
    xmlFile += '</fo:block>';// BLOCK 2
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block margin-top="4cm" font-size="1.5em" font-weight="bold">Teilnahmebescheinigung</fo:block>';
    xmlFile += '<fo:block font-weight="bold" font-size="1.2em">für [USER_SALUTATION] [USER_TITLE] [USER_FIRSTNAME] [USER_LASTNAME]</fo:block>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:inline font-weight="bold" font-size="1.2em">Veranstaltung: [COURSE_TITLE]</fo:inline>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block font-weight="bold">Inhalt der Veranstaltung:</fo:block>';
    xmlFile += '<fo:block text-align="justify">[COURSE_DESC]</fo:block>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '[COURSE_AREA_1]';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '[COURSE_AREA_2]';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block></fo:block>';
    xmlFile += '<fo:block>Ausstellungstermin: </fo:block><fo:block>[DATE_COMPLETED]</fo:block>';
    xmlFile += ' <fo:block> </fo:block><fo:block> </fo:block><fo:block> </fo:block><fo:block> </fo:block>';

    xmlFile += '<fo:block>[COURSE_OWNER_NAME]</fo:block>';
    xmlFile += '<fo:block> </fo:block><fo:block> </fo:block><fo:block> </fo:block><fo:block> </fo:block>';
    xmlFile += '<fo:block text-align="left" font-size="0.7em" border-top="1px solid black">Dies ist ein automatisch generiertes Zertifikat. Es ist auch ohne Unterschrift gültig.</fo:block>';
    xmlFile += '</fo:block></fo:block></fo:block></fo:flow> ';// BLOCK 1
    xmlFile += ' </fo:page-sequence></fo:root>';

    // Replace user account characteristics
    xmlFile = xmlFile.replace(/\[DATE]/gi, today.toISOString().substring(0, 10));
    xmlFile = xmlFile.replace(/\[DATE_COMPLETED]/gi, today.toISOString().substring(0, 10));

    // Replace cours characteristics
    if (document.forms[0].ctitle.value != '') xmlFile = xmlFile.replace(/\[COURSE_TITLE]/gi, ufirst = document.forms[0].ctitle.value);
    if (document.forms[0].ccontent.value != '') xmlFile = xmlFile.replace(/\[COURSE_DESC]/gi, ufirst = document.forms[0].ccontent.value);

    // Course content
    var courseArea1 = '';
    for (var i = 0; i < carea1Title.length; i++) {
      var t = [false,false,false,false,false];
      for(var j = 0; j < carea1Checkbox[i].length; j++) { 
        if(document.getElementById('checkbox'+ i + '' + j).checked == true){
                if(t[i] == false) {
                  courseArea1 += '<fo:block><fo:block><fo:inline font-style="italic">Teilbereich ' + carea1Title[i] + '</fo:inline></fo:block><fo:list-block>';
                  t[i] = true;
                }
                courseArea1 += '<fo:list-item relative-align="baseline"><fo:block>' + carea1Checkbox[i][j] + '</fo:block></fo:list-item>';
       }
     } if (t[i] == true) courseArea1 += '</fo:list-block></fo:block> ';
   }

    var carea2Content = document.forms[0].carea2.value;
    var courseArea2 = '';
    var enumerations = carea2Content.split("\n");
    for (var i = 0; i < enumerations.length; i++) {
        if (enumerations[i].indexOf('-') > -1) {
            courseArea2 += enumerationNode(enumerations[i]);
        } else {
            courseArea2 += '<fo:block>' + enumerations[i] + '</fo:block> ';
        }
    }

    if (courseArea1 != '') xmlFile = xmlFile.replace(/\[COURSE_AREA_1]/gi, courseArea1);
    if (courseArea2 != '') xmlFile = xmlFile.replace(/\[COURSE_AREA_2]/gi, '<fo:block>Sonstiges:' + courseArea2 + '</fo:block>');

    var bg_image = "resources/images/background.jpg";
    var zipfilename = today.toISOString().substring(0, 10) + "_" + today.getUTCMilliseconds() + "_course_certificate.zip";
    var zip = new JSZip();
    zip.file(filename, xmlFile);
    JSZipUtils.getBinaryContent(bg_image, function (err, data) {
        if (err) {
            throw err;
        }
        zip.file("background.jpg", data, { binary: true });
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, zipfilename);
        });
    });
}
