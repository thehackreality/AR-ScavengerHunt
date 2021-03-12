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

    let text = "hello its me"; 
    let ekey = "there"; 

    //let input = document.getElementById("decryptxt").value;

    let encode = vigenere(text,ekey);

    console.log(encode); 

    let decode = vigenere(encode,ekey, true);

    console.log(decode)

    document.getElementById("im1").setAttribute("value", current_tag+input); 
 
}