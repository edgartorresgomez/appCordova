var app = {

    inicio: function(){
        document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        // Register the event listener
        //document.addEventListener("backbutton", onBackKeyDown, false);
        this.receivedEvent('deviceready');
        //alert("Aplicacion lista");
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        alert('Received Event: ' + id);
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