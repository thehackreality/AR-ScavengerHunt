let current_tag = "marmar"; 

AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;

        marker.addEventListener("markerFound", ()=> {
            current_tag = "lala"; 
        });

        marker.addEventListener("markerLost",() =>{
            console.log('Marker Lost: ');
        });
    },
});

function ordA(a) {
    return a.charCodeAt(0) - 65;
  }
   
  // vigenere
function vigenere(text, key, decode) {
    var i = 0, b;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });
}
   

function decrypt() {

    let text = "Mona Lisa"; 
    let ekey = "thestarrynight"; 

    let input = document.getElementById("secret").value;

    let clean_input = input.replace(/\s/g, '').toLowerCase();

    let encode = vigenere(text,ekey);

    console.log(encode); 

    let decode = vigenere(encode,clean_input, true);

    console.log(decode)

    document.getElementById("im1").setAttribute("value", decode); 
 
}