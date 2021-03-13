let current_hash = ""; 
let current_id = ""

AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;

        marker.addEventListener("markerFound", ()=> {
            current_hash = el.value; 
            current_id = el.id;
        });

        marker.addEventListener("markerLost",() =>{
            console.log('Marker Lost: ');
        });
    },
});

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

    let input = document.getElementById("secret").value;

    console.log(input); 

    let clean_input = input.replace(/\s/g, '').toLowerCase();

    let decode = cypher(current_hash,clean_input, true);

    console.log(decode)

    document.getElementById(current_id).setAttribute("value", decode); 
 
}