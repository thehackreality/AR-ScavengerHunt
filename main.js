let current_hash = ""; 
let current_id = ""; 
let current_input = ""; 

AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;

        marker.addEventListener("markerFound", ()=> {
            current_hash = marker.value; 
            //current_id = marker.id;
            
            marker.value = cypher(marker.value, clean_input, true);

            console.log(current_id); 
            console.log(current_hash);             
            console.log(clean_input); 
            //console.log(current_id); 
            console.log(current_hash)

           

            let decode = cypher(current_hash,clean_input, true);

            console.log(decode)

            //document.getElementById(current_id).setAttribute("value", decode); 
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
    let clean_input = input.replace(/\s/g, '').toLowerCase();
    current_input = clean_input; 
 
}