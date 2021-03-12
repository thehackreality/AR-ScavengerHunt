
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


function decrypt() {

    let input = document.getElementById("decryptxt").value;

    document.getElementById("im1").setAttribute("value", current_tag+input); 
 
}