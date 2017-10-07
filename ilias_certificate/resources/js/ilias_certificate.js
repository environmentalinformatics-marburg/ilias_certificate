var imported = document.createElement('script');
//imported.src = 'jszip-v3.1.4-22/dist/jszip.js';
//imported.src = 'dist/jszip.min.js';

document.head.appendChild(imported);

function concatNode(node, text) {
    var res = '';
    res = node + '>' + text
}

function enumerationNode(text) {
    var res = '';
    var text = text;
    var text = text.replace(/-/gi, '');
    text = '<fo:list-item-body start-indent="body-start()"><fo:block>' + text + '</fo:block></fo:list-item-body>';
    res = '<fo:list-item-label end-indent="label-end()" text-align="end" wrap-option="no-wrap"><fo:block><fo:inline font="1em serif">•</fo:inline></fo:block></fo:list-item-label>' + text;
    res = '<fo:list-block space-before="1em" space-after="1em"><fo:list-item relative-align="baseline">' + text + '</fo:list-item></fo:list-block>';
    return res;
}

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
    /*
    var usalutation = document.forms[0].usalutation.value;
    var utitle = document.forms[0].utitle.value;
    if (utitle == 'ut0') utitle = '';
    if (usalutation == 'us0') usalutation = '';
    */
    /*
    xmlFile = xmlFile.replace(/\[USER_SALUTATION]/gi, usalutation);
    xmlFile = xmlFile.replace(/\[USER_TITLE]/gi, utitle);
    if (document.forms[0].ufirst.value != '') xmlFile = xmlFile.replace(/\[USER_FIRSTNAME]/gi, ufirst = document.forms[0].ufirst.value);
    if (document.forms[0].ulast.value != '') xmlFile = xmlFile.replace(/\[USER_LASTNAME]/gi, ufirst = document.forms[0].ulast.value);
    */

    // Replace cours characteristics
    if (document.forms[0].ctitle.value != '') xmlFile = xmlFile.replace(/\[COURSE_TITLE]/gi, ufirst = document.forms[0].ctitle.value);
    if (document.forms[0].ccontent.value != '') xmlFile = xmlFile.replace(/\[COURSE_DESC]/gi, ufirst = document.forms[0].ccontent.value);

    // Course content
    var cContent1 = document.forms[0].carea1.value;
    var cContent1Res = '';
    var enumerations = cContent1.split("\n");
    for (var i = 0; i < enumerations.length; i++) {
        if (enumerations[i].indexOf('-') > -1) {
            cContent1Res += enumerationNode(enumerations[i]);
        } else {
            cContent1Res += '<fo:block>' + enumerations[i] + '</fo:block> ';
            //alert(cContent1Res);
        }
    }

    //if (cContent1.indexOf('/n') > -1) {
    //cContent1 = cContent1.replace(/\n/gi,'</fo:block><fo:block>' ); 
    //cContent1 = '<fo:block>' + cContent1 + '</fo:block>';
    //}

    var cContent2 = document.forms[0].carea2.value;
    var cContent2Res = '';
    var enumerations = cContent2.split("\n");
    for (var i = 0; i < enumerations.length; i++) {
        if (enumerations[i].indexOf('-') > -1) {
            cContent2Res += enumerationNode(enumerations[i]);
        } else {
            cContent2Res += '<fo:block>' + enumerations[i] + '</fo:block> ';
        }
    }

    if (cContent1Res != '') xmlFile = xmlFile.replace(/\[COURSE_AREA_1]/gi, cContent1Res);
    if (cContent2Res != '') xmlFile = xmlFile.replace(/\[COURSE_AREA_2]/gi, cContent2Res);

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




