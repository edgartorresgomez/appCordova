(function(){
    "use strict";

    document.addEventListener("deviceready", onDeviceReady.bind(this), false);

    function onDeviceReady(){
        document.addEventListener("backbutton", onBackKeyDown.bind(this), false);

    };

    function onBackKeyDown(){
        navigator.notification.alert("boton bajar volumen");
        notification.alert('prueba con boton abajo');
    };

})();