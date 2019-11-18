
# R05: Strahlung und Geometrie

Nachdem Sie in der letzten Sitzung schon einiges über Fernerkudnung erfahren haben, greifen wir in dieser Sitzung noch einmal zwei Themen heraus, die etwas genauer beleuchtet werden: den Strahlungspfad, also den Weg zwischen Strahlungsquelle und Sensor und die Aufnahmegeometrie. Beide Themen behandeln wir ausschließlich am Beispiel von passiven optischen Fernerkundungssystemen.

Anders gesagt stellen wir die folgenden Fragen:


*  Welche Eigenschaften hat die von einem Körper emittierte Strahlung und wie werden diese Eigenschaften auf dem Weg von der Strahlungsquelle zum Fernerkundungssensor verändert?


*  Ist die Auflösung eines Datensatzes von 30 x 30 Meter Auflösung überhaupt 30 x 30 Meter?

### Lernziele

--- 

  **Wenn Sie aufpassen, dann können Sie am Ende…**

      * …den Strahlungspfad zwischen Strahlungsquelle und Sensor erkläutern.
      *  …die das elektromagnetische Spektrum beeinflussenden Faktoren im Strahlungspfad  diskutieren.
      * …die Konsequenzen der Beobachtungsgeometrie auf die räumliche Auflösung erklären.
---

## Eigenschaften der Strahlungsquelle


Die von einem Sensor empfangene Strahlung ist eine Funktion der Eigenschaften der Strahlungsquelle, des Strahlungspfads von der Quelle zum Sensor und den Eigenschaften der Objekte, die auf dem Strahlungspfad “getroffen” werden. Zuerst zu den Eigenschaften der Strahlungsquelle.

In einem Abschnitt der [letzten Sitzung](courses/bsc/methoden-geoinformatik/lecture-notes/mg-ln-04) haben Sie bereits Möglichkeiten zur Charakterisierung von elektromagnetischer Strahlung kennengelernt. Neben der Wellenlänge und der Gliederung in charakteristisch benannte Bereiche (sichtbares Licht, nahes Infrarot etc.) wurde hier auch nach der Strahlungsquelle differenziert. Wieso ist das möglich? Die Antwort ergibt sich aus einem wichtigen Strahlungsgesetz – dem Wien’schen Verschiebungsgesetz.

### Wien’sches Verschiebungsgesetz

Das Wien’sche Verschiebungsgesetz besagt, dass die Wellenlänge, in der ein Körper die maximale Energie abstrahlt, invers proportional zur Temperatur des Körpers ist. Also:

Je wärmer ein Körper ist, umso kürzer ist die Wellenlänge, in der er die maximale Energie emittiert.

Das Gesetz ist in der nachfolgenden Abbildung illustriert. Das Maximum der Strahlungskurven verschiebt sich dabei mit zunehmender Temperatur des strahlenden Körpers in den kurzwelligeren Bereich.

Das Maximum der solaren Strahlung (Oberflächentemperatur der Sonne ca. 6.000 K) liegt demzufolge bei einer Wellenlänge von ca. 0,5 µm, also im Zentrum des sichtbaren Spektralbereichs. Das Maximum für einen Körper von ca. 3.000 K bei etwa 0,7 µm. Die Kurve für 300 K kann näherungsweise für die Abstrahlung der Erde dienen (eigentlich eher 255 K). Das Maximum der von der Erde abgestrahlten Energie ist demnach bei ca. 10 µm zu finden. Es fällt zudem auf, dass die kälteren Körper erst ab einer gewissen Wellenlänge eine nennenswerte Strahlung emittieren.

<html><a title="By HighTemplar (Own work) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3APlanck_law_log_log_scale.png"><img width="512" alt="Planck law log log scale" /src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Planck_law_log_log_scale.png/512px-Planck_law_log_log_scale.png"/></a></html>

*Abbildung 05-01: Emittierte Strahlung als Funktion der Oberflächentemperatur und Wellenlänge (public domain, via Wikimedia Commons*)

Anhand des Wien’schen Verschiebungsgesetzes kann man also schon einmal aufgrund der Wellenlänge des Strahlungsmaximums eine Differenzierung der Strahlungsquelle vornehmen. Außerdem sieht man, dass die terrestrische Strahlung, also die Strahlung der Erde, die näherungsweise durch die blaue Kurve beschrieben wird, Strahlung de facto erst ab ca. 3,5 µm emittiert.

Aber wieso kann man das gesamte Spektrum in zwei Teilbereiche, nämlich solar und terrestrisch, gliedern, wenn die Sonne (rote Kurve) doch offenbar auch im Bereich terrestrischen Strahlung emittiert? Die Antwort auf diese Frage liegt im Abstand zwischen der Erde und der Sonne.

Die von der Sonne emittierte Strahlung verteilt sich auf dem Weg zur Erde auf eine immer größere Kugelfläche (Abbildung unten). Das bedeutet, dass die Strahlungsenergie pro Quadratmeter auf, oder kurz über, der Sonnenoberfläche sehr viel größer ist, als die Strahlungsenergie im Abstand von ca. 149 Millionen Kilometern, was ungefähr dem Abstand zwischen Sonne und Erde entspricht. Genauer gesagt, nimmt die Strahlungsenergie pro Flächeneinheit mit dem Quadrat des Radius ab (oder anders gesagt – dass Sie weit hinten im Hörsaal die Folien schlechter lesen können, hat nicht nur etwas mit Kurzsichtigkeit zu tun). Diese Abnahme der Bestrahlungsstärke führt dazu, dass keine für die Atmosphären- und Landfernerkundung nennenswerte solare Strahlung im Wellenlängenbereich größer als 4 µm auf der Erde ankommt.

Wir können also aufgrund des Wien’schen Verschiebungsgesetzes und der Abnahme der Bestrahlungsstärke mit dem Quadrat der Entfernung begründen, warum wir die für die passive Fernerkundung der Landoberfläche und Atmosphäre relevante Strahlung in

      * einen solaren Anteil (< 4 µm) und einen
      * terrestrichen Anteil (> 3,5 µm)

aufteilen können.

Nur nebenbei: Die ebenfalls aus der Abbildung für das Wien’sche Verschiebungsgesetz hervorgehende Eigenschaft, dass warme Körper offenbar mehr Energie emittieren als kalte Körper, wird durch das Stefan-Boltzmann-Gesetz beschrieben. Es besagt, dass die Strahlungsemission eines Körpers mit einer Temperatur größer 0 K eine Funktion der vierten Potenz der Temperatur ist. Also: Je wärmer der Körper ist, umso mehr Energie wird emittiert. Das ist der Grund dafür, dass man fernerkundlich die Temperatur von Objekten bestimmen kann (vgl. [Beispiel der letzten Sitzung](courses/bsc/methoden-geoinformatik/lecture-notes/mg-ln-04#spektrale_eigenschaften_die_informationsgrundlage_der_fernerkundung)).

### Spektrale Eigenschaften von Objekten


Die Ausführungen auf dieser Seite haben Sie fit gemacht, auch einmal einen anderen Text zu lesen.

Studieren Sie jetzt das [Kapitel 2.1 des Eumetrain-Workshops](http://www.eumetrain.org/data/3/36/navmenu.php?page=2.1.0) zur Vegetationsfernerkundung und machen Sie die interaktiven Übungen.

Kommen Sie anschließend wieder auf diese Seite zurück.

Was sind die wichtigsten Aussagen?


*  Das Planck-Gesetz ist die Mutter aller Strahlungsgesetze.

*  Das Wien’sche Verschiebungsgesetz und auch das Stefan-Boltzmann-Gesetz sind Ableitungen aus dem Planck-Gesetz (zugegeben, dass stand eher zwischen den Zeilen, aber lesen Sie nochmal die erste Seite des dortigen Kapitels unter diesem Aspekt).

*  Die zweite Seite war eine Übung, die Sie anhand der Darstellungen oben zum Wien’schen Verschiebungsgesetzt locker beantworten können und der letzte Abschnitt war eine Zusammenfassung über Teile der letzten Sitzung.


---
Weitere Informationen finden Sie…


*  in dem Abschnitt zur [elektromagnetischen Strahlung](http://missionscience.nasa.gov/ems/01_intro.html) und zu den [Welleneigenschaften](http://missionscience.nasa.gov/ems/02_anatomy.html) sowie

*  im Abschnitt zum [sichtbaren Licht](http://missionscience.nasa.gov/ems/09_visiblelight.html), [nahen Infrarot](http://missionscience.nasa.gov/ems/08_nearinfraredwaves.html), [thermalem Infrarot](http://missionscience.nasa.gov/ems/07_infraredwaves.html) und [Mikrowellenbereich](http://missionscience.nasa.gov/ems/06_microwaves.html)

auf den Seiten des [NASA Science Mission Directorate](http://missionscience.nasa.gov/).
---



## Strahlungspfad


Die Strahlung legt auf Ihrem Weg zwischen der Strahlungsquelle und dem Fernerkundungssensor meistens eine ziemlich weite Strecke zurück. Auf diesem Weg interagiert die Strahlung mit allen Objekten, die auf Ihrem Weg liegen oder Ihren Weg kreuzen.


Das folgende Beispiel zeigt den Strahlungspfad und mögliche Interaktionen am Beispiel der Fernerkundung im Bereich der solaren und terrestrischen Strahlung. Für das Beispiel nehmen wir an, dass der Sensor gerade die Fläche des Sees “beobachtet”.

<html><a href="https://www.flickr.com/photos/environmentalinformatics-marburg/14161592595" title="05-02 by Environmental Informatics Marburg, on Flickr"><img src="https://farm3.staticflickr.com/2904/14161592595_0f5d08d003_o.jpg" width="2815" height="1972" alt="05-02"></a></html>

*Abbildung 05-02: Strahlungspfade in der optischen Fernerkundung (lehrewelt.de)*


### Optische Fernerkundung im solaren Spektralbereich

Betrachten Sie zunächst die durchgezogenen blauen Pfeile auf der linken Seite:


*  Auf dem Strahlungspfad zwischen Sonne, Seeoberfläche und Sensor wird die Strahlung an der Wasseroberfläche (bzw. im oberen Bereich des Wasserkörpers) teilweise reflektiert. Hierdurch werden die spektralen Eigenschaften des Sonnenlichts entsprechend den Reflexionseigenschaften der Wasseroberfläche verändert (blaue Lichtanteile werden im Wasser i. d. R. stärker reflektiert als rote und v. a. nahe Infrarote – deshalb erscheint Wasser i. d. R. blau). Das ist eigentlich genau das was wir brauchen, den wir wollen ja in diesem Beispiel die Eigenschaften des Sees untersuchen und die Strahlung ist unser Informationsträger.


*  Auf dem Strahlungspfad zwischen Sonne, Seeoberfläche und Sensor muss die Strahlung aber auch zwei Mal die Atmosphäre passieren. Dabei kommt es zu multiplen Streuungen an den darin enthaltenen Partikeln, so dass das Strahlungssignal zum einen geschwächt wird und zum anderen durch die Streuung spektral verändert wird (Stichworte: Mie-Streuung, Rayleigh-Streuung etc.).


*  Auf dem Strahlungspfad zwischen Sonne und Seeoberfläche kommt es ebenfalls zu Reflexionen in der Atmosphäre, so dass Teile der Strahlung die Seeoberfläche erst gar nicht erreichen und “reine” Atmosphärensignale zurück zum Sensor transportieren.

Die zusätzlichen Interaktionen entlang des Strahlungspfads führen also dazu, dass das Sensorsignal nicht nur von den spektralen Eigenschaften des Sees bestimmt wird, sondern auch von den atmosphärischen Eigenschaften beeinflusst wird. Der Strahlungsgang kann zudem verkompliziert werden, wenn die Strahlung – wie im rechten Bildteil zwischen Wolke und Erdoberfläche angedeutet – mehrmals hin und her gestreut/reflektiert wird.

Die Atmosphäre stellt also quasi ein Störsignal für die Landfernerkundung dar, weshalb v. a. für quantitative Angaben (z. B. Oberflächentemperaturen) oder für zeitlich wiederholte Untersuchungen (z. B. Vitalität der Vegetation) eine Atmosphärenkorrektur vor der eigentlichen Auswertung des Fernerkundungsdatensatzes erfolgen muss. Umgekehrt, wenn uns z. B. Wolken interessieren, dann ist das Landoberflächensignal das “Störsignal”, das korrigiert werden muss.

### Optische Fernerkundung im terrestrischen Spektralbereich


Das gerade gesagte trifft auch auf den mit gestrichelten Linien dargestellten terrestrischen Strahlungsbereich zu. Nur das hier in der Atmosphäre v. a. Absorptions- und Emissionsprozesse eine Rolle spielen, die die von der Landoberfläche emittierte Strahlung entweder abschwächen (Absorption) oder verstärken (Emission).

## Strahlungsinteraktion in der Atmosphäre


Beim Weg der solaren oder terrestrischen Strahlung durch die Erdatmosphäre kommt es also zu zahlreichen Strahlungsinteraktionen zwischen atmosphärischen Bestandteilen (Gase, Aerosole, Wassertropfen). Die Interaktionen im solaren Bereich werden von der Streuung und Reflexion dominiert. Im terrestrischen Bereich spielt die Absorption und Emission eine wichtige Rolle (Stichwort: Treibhauseffekt).

Die nachfolgende Abbildung zeigt die Bedeutung der atmosphärischen Strahlungsinteraktion für die Fernerkundung. Die braunen Bereiche stellen die atmosphärische Extinktion dar (Skala auf der linken Seite). Extinktion ist ein Sammelbegriff für Prozesse, die die Strahlung beim Weg durch ein Medium schwächen. In der Atmosphäre wären dies die Streuung/Reflexion und Absorption. Allgemein spricht man bei Wellenlängenbereichen mit wenig atmosphärischen Einflüssen (also geringer Extinktion) von Fenstern, in Bereichen mit hoher Extinktion spricht man von Banden.

Im Bereich des sichtbaren Lichts ist die atmosphärische Extinktion gering und die solare Strahlung kommt weitgehend ungehindert zur Erdoberfläche und – wichtig für die Fernerkundung – auch wieder von der Erdoberfläche zurück zum Fernerkundungssensor. Im Bereich zwischen 1 und 9 µm sind immer wieder Bereiche mit hoher Extinktion zu erkennen. Sie sorgen durch Reflexion und Absorption dafür, dass solare Strahlung gar nicht erst bis zur Erdoberfläche durchkommt oder doch zumindest deutlich abgeschwächt wird. Umgekehrt wird von der Erde emittierte Strahlung in diesen Banden absorbiert.

Im Bereich um 10 µm ist die Atmosphäre wieder weitgehend durchlässig. Dieser Bereich fällt mit dem Maximum der terrestrischen Strahlung zusammen, was eine fernerkundliche Messung der Oberflächentemperatur deutlich erleichtert.

<html><a title="By NASA (original); SVG by Mysid. [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AAtmospheric_electromagnetic_opacity.svg"><img width="1024" alt="Atmospheric electromagnetic opacity" /src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Atmospheric_electromagnetic_opacity.svg/512px-Atmospheric_electromagnetic_opacity.svg.png"/></a></html>
*Abbildung 05-03: Atmosphärische Banden und Fenster (NASA, public domain, via Wikimedia Commons)*

## Spektrale Eigenschaften und Winkelabhängigkeit

Neben den Eigenschaften des beobachteten Objekts und den Eigenschaften der Atmosphäre hat auch die Beobachtungsgeometrie einen Einfluss auf das gemessene Strahlungssignal. Unter Beobachtungsgeometrie versteht man die relative Geometrie zwischen Sonnen- und Sensorbeobachtungswinkeln.

Studieren Sie jetzt das [Kapitel 2.5](http://www.eumetrain.org/data/3/36/navmenu.php?page=2.5.0) (und [2.5.1](http://www.eumetrain.org/data/3/36/navmenu.php?page=2.5.1)) des Eumetrain-Workshops zur Vegetationsfernerkundung und machen Sie die interaktiven Übungen.

Kommen Sie anschließend wieder auf diese Seite zurück.

Was sind die wichtigsten Aussagen?

**Kapitel 2.5** stellt drei wichtige Typen der Streuung/Reflexion an Objekten vor

*  Diffuse Streuung/Reflexion (diese wird auch Lambert’sche Reflektion genannt)

*  Spiegelnde Reflexion

*  Multiple Streuung an Komplex gegliederten Objekten



**Kapitel 2.5.1** diskutiert anschließend den Einfluss der Beobachtungsgeometrie auf das Sensorsignal. Die Quintessenz (auch der dargestellten Gleichung) ist, dass der Einfluss durch pixelbezogene Winkel bestimmt wird:

*  Sonnenzenith (also Winkel zwischen senkrechtem Sonnenstand und aktueller Sonnenhöhe)

*  Sensorzenith (analog Sonnenzenith)

*  Relative Azimuth – dieser ergibt sich aus der Kombination des Sonnenazimuth, also dem Winkel zwischen der Nordrichtung und der Position der Sonne, und dem Sensorazimuth, (analog Sonnenazimuth)

## Abbildungsgeometrie

Bei der [Charakterisierung von Fernerkundungssystemen](courses/bsc/methoden-geoinformatik/lecture-notes/mg-ln-04#charakterisierung_von_fernerkundungssystemen) in der letzten Sitzung, wurde der Begriff der räumlichen Auflösung bereits eingeführt. Dabei wurde die räumliche Auflösung als Eigenschaft beschrieben, die für jedes Fernerkundungssystem unterschiedlich ist. Die Frage die noch nicht beantwortet ist, ist daher die, ob denn die räumliche Auflösung “innerhalb” eines Fernerkundungssystems, also innerhalb z. B. des Satellitenbildes konstant ist. Zur Beantwortung dieser Frage, muss man zunächst einen Blick auf das Funktionsprinzip eines optischen Satellitensensors werfen.

### Optische Satellitensensoren

Grundsätzlich kann man zwei technische Sensortypen unterscheiden: Along-Track-Scanner und Across-Track-Scanner.

#### Along-Track-Scanner

Der Scannertyp, der am ehesten einer klassichen Digitalkamera entspricht, ist der Along-Track-Scanner. Er besitzt zwar deutlich weniger weniger Sensorpixel als das Modell vom Fotogeschäft, aber dafür bewegt sich der Sensor auch weiter, so dass eigentlich immer nur ein Bildstreifen quer zur Flugrichtung erfasst werden muss.

Die nachfolgende Abbildung illustriert dieses Prinzip. Die vom Objektiv erfasste und zu den Sensoren geleitete Strahlung kommt aus einem Streifen quer zur Flugrichtung. Je mehr Scannerpixel der Sensor hat und je schmaler der erfasste Querstreifen ist, um so größer ist die räumliche Auflösung und umgekehrt (die in der Abbildung auftauchenden Begriffe werden weiter unten erläutert). Die Auflösung in Flugrichtung wird folglich v. a. von der Geschwindigkeit der Sensorplattform bestimmt, die Auflösung quer zur Flugrichtung von der Anzahl der Sensorpixel.

<html><a href="https://www.flickr.com/photos/environmentalinformatics-marburg/13974917639" title="05-04 by Environmental Informatics Marburg, on Flickr"><img src="https://farm8.staticflickr.com/7313/13974917639_d732b3d652_o.jpg" width="1280" height="781" alt="05-04"></a></html>

*Abbildung 05-04: Funktionsprinzip eines Along-Track-Scanners (lehrewelt.de, nach Lillesand et al. 2004)*

#### Across-Track-Scanner

Im Unterschied zum Along-Track-Scanner kommen Across-Track-Scanner bei gleicher Auflösung mit noch weniger Pixel aus. Der Grund hierfür liegt in einem schwenkbaren Spiegel, der vor dem Objektiv angebracht ist. Durch die schnelle Rotation des Spiegels lässt sich so die Erdoberfläche zeilenweise “abscannen”. Die Rotationsgeschwindigkeit des Spiegels ist dabei auf die Fluggeschwindigkeit des Satelliten (oder Flugzeugs) abgestimmt. Das Abscannen der Oberfläche in Flugrichtung ist folglich das Ergebnis der Bewegung des Fernerkundungssystems. Das Abscannen quer zur Flugrichtung ist das Ergebnis des rotierenden Spiegels. Da die Sensoren mehr als eine Sensorzelle haben, kann beim  Abscannen quer zur Flugrichtung gleich ein breiterer Streifen erfasst werden.


<html><a href="https://www.flickr.com/photos/environmentalinformatics-marburg/13974917639" title="05-04 by Environmental Informatics Marburg, on Flickr"><img src="https://farm8.staticflickr.com/7313/13974917639_d732b3d652_o.jpg" width="1280" height="781" alt="05-04"></a></html>

*Abbildung 05-05: Funktionsprinzip eines Across-Track-Scanners (lehrewelt.de, nach Lillesand et al. 2004)*

#### Nominelle räumliche Auflösung eines Fernerkundungssensors

Die folgende Abbildung zeigt einen Schnitt durch die Abbildung des Across-Track-Prinzips quer zur Flugrichtung (analog für Along-Track). Der Punkt (bzw. besser die Linie), der sich lotrecht unter der Fernerkundungsplattform auf der Erdoberfläche befindet, nennt man Nadir. Die Breite des vom Sensor insgesamt quer zur Flugrichtung erfassten Streifens (ground swath in der vorherigen Abbildung) wird beim Across-Track-Scanner durch den Öffnungswinkel des Konstrukts aus Objektiv und Schwenkspiegel bestimmt. Dieser Öffnungswinkel wird als field of view (FOV) bezeichnet. Die Angabe des field of view als Öffnungswinkel mag zunächst ungewöhnlich erscheinen, aber wenn der Öffnungswinkel bekannt ist, kann man aus der Flughöhe des Fernerkundungssystems automatisch die Breite des quer zur Flugrichtung erfassten Oberflächenstreifens in Metern bestimmen. Bei Satellitensytemen, die im Gegensatz zu Flugzeugen immer in annähernd der gleichen Höhe fliegen (sollten), wird alternativ auch oft direkt die Breite des Streifens in Metern angegeben und diese Angabe trotzdem als FOV bezeichnet. Dabei weisen die FOV-Werte je nach Fernerkundungssystem beträchtliche Unterschiede auf. So liegt das FOV von Landsat-7-ETM+ bei 185 km, das von Terra-MODIS bei 2.330 km.


<html><a href="https://www.flickr.com/photos/environmentalinformatics-marburg/13974944958" title="05-06 by Environmental Informatics Marburg, on Flickr"><img src="https://farm3.staticflickr.com/2935/13974944958_8a99bbbfda_b.jpg" width="1024" height="910" alt="05-06"></a></a></html>

*Abbildung 05-06: Beobachtungsgeometrie eines optischen Fernerkundungssensors (lehrewelt.de, nach Lillesand et al. 2004)*

Die Breite des kleinsten Oberflächenelements, dass durch den Scanner erfasst wird, also die Pixel-Größe, wird durch das instataneous field of view (IFOV) angegeben. Durch die Aufnahmegeometrie verändert sich die Blickrichtung des IFOV ständig und die das IFOV bildenden, roten Linien würden ständig von rechts nach links und zurück schwenken und so die Oberfläche quer zur Flugrichtung scannen (im Falle eines Along-Track-Scanners zeigen die roten Linien den Strahlengang für das zweite Pixel links vom Nadir).

Sie wissen bereits, dass die Auflösung eines Sensorsystems durch zwei Faktoren bestimmt wird: dem Abstand zwischen Sensor und beobachtetem Objekt und der Auflösung Ihres Sensors, also der Anzahl an Sensorpixeln. Für die Beantwortung der Frage, ob die räumliche Auflösung innerhalb eines Fernerkundungsdatensatzes wirklich konstant ist, legen wir die Sensorauflösung und die Flughöhe fest und Betrachten die Abbildungsgeometrie für ein Pixel im Nadir und ein Pixel links oder rechts vom Nadir.

Betrachten Sie noch einmal die vorherige Abbildung. Der Abstand zwischen Sensor und Landoberfläche ist im NAdir kürzer als am Rand des FOV. Dies können Sie leicht an der Länge der roten Linien des IFOV im Vergleich zur kürzeren, grünen Linie des Nadirs nachvollziehen. Die Fläche, die von einem gegebenen Raumwinkel, also dem IFOV, umschlossen wird, nimmt damit vom Nadir zum Rand der Szene zu. Damit sind die Nadir-nahen Pixel kleiner als die Nadir-fernen. Die Angabe zur räumlichen Auflösung eines Satellitensensors bezieht sich deshalb immer auf die Auflösung im Nadir, also die höchstmögliche Auflösung unseres Sensorsystems.

Abschließend sei noch erwähnt, dass das FOV nicht für alle Sensorkanäle gleich sein muss. In der Regel sind Kanäle im Bereich der solaren Strahlung besser aufgelöst als Kanäle im Bereich der terrestrischen Strahlung. Diese ist deutlich schwächer als die solare Strahlung, so dass die Sensorfläche vergrößert wird, um – absolut gesehen – einen höheren Strahlungseintrag auf dem Sensor zu bekommen. Für Landsat-7-ETM+ liegt die Auflösung im Nadir daher bei 30 x 30 m, im thermalen Infrarot bei 60 x 60 m.

--- 

  **Weitere Informationen finden Sie…**

*  …im Abschnitt zur [räumlichen Auflösung](http://www.nrcan.gc.ca/earth-sciences/geomatics/satellite-imagery-air-photos/satellite-imagery-products/educational-resources/9407) des [Tutoriums von Natural Resources Canada](http://www.nrcan.gc.ca/earth-sciences/geomatics/satellite-imagery-air-photos/satellite-imagery-products/educational-resources/9309).
---

