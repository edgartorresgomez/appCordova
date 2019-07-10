function inicio() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    // Register the event listener
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown(){
    alert("bien atras");
}

inicio();