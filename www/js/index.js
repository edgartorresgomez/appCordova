
(()=> {

    
    
    
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);

        
        var btn1 = document.querySelector('#btn1');
        btn1.addEventListener("click", funcion1,false);

        var btn2 = document.querySelector('#btn2');
        btn2.addEventListener("click", funcion2, false);
        //document.addEventListener("click", funcion2, false);
        
        var btns = document.querySelectorAll('button');
        alert (btns.length);
        for (i=0; i <= btns.length; i++){
            alert (btns.length);
            btn.addEventListener('click', fn, false);
        }
       
    };

    function fn(e) {
        alert('bien: '+e.target.id);
    };

    function funcion1() {
        alert("funcion1");
    };

    function funcion2() {
        alert("funcion2");
        console.log('funcion2');
    };
    
    function onBackKeyDown(){
        alert("bien atras");
        window.navigator.
        window.close();
        alert("bien atras no cerro");

        
    }

})();