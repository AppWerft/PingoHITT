PingoHITT
=========

This chrome app connects [H-ITT devices](http://www.h-itt.com/k-12/student-response-systems.htm) with [PINGO-system](https://wiwi.uni-paderborn.de/en/dep3/winfo2/forschung/projekte/pingo/) from uni paderborn.


![](http://www.h-itt.com/img/iCue%20BaseRF.JPG) ![](http://www.h-itt.com/images/3100_lanyard3.JPG)![](http://www.h-itt.com/images/3100_lanyard3.JPG)

The receiver will connected with PC/Mac of teacher. The plug is USB, but internal the protocol is serial.
The communication on this line is hashed. The company offers a .so and a .dll, this libs decodes the binary on line. To use the receiver without the .dll/.so in JS world you have to patch the devices. After patching of device every click on handheld generats a short string with device number and keycode.

