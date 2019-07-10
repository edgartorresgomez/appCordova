var app = {

    inicio: function(){
        document.addEventListener("deviceready", onDeviceReady, false);
    },

    onDeviceReady: function() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
        alert("Aplicacion lista");
    }


};
app.inicio();

/*
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

*/