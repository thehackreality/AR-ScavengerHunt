

AFrame.registerComponent('markerhandler', {
    init: function () {
        var Marker = this.el; 

        Marker.addEventListener('markerFound', function() {
            this.atext = document.querySelector("#im1");
            // TODO: Add your own code here to react to the marker being found.
            console.log(this.atext.value); 
        });
        
    }
})

function ordA(a) {
    return a.charCodeAt(0) - 65;
}
   

function cypher(text, key, decode) {
    var i = 0, b;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });
}
   

function decrypt() {

    console.log("I am here");  
 
}