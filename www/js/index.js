
(()=> {
    
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    };
    
    function onBackKeyDown(){
        window.close();
        alert("bien atras");

        
    }

})();