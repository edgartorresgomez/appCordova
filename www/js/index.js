
(()=> {
    
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
        document.querySelector('#funcion1', funcion1, false);
        //document.addEventListener("click", funcion1, false);
        //document.addEventListener("click", funcion2, false);

    };

    function funcion1() {
        alert("funcion1");
    };

    function funcion2() {
        alert("funcion2");
    };
    
    function onBackKeyDown(){
        alert("bien atras");
        window.navigator.
        window.close();
        alert("bien atras no cerro");

        
    }

})();