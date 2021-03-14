
let current_cypher = ""; 
let current_id = ""; 

//Crappy js.png
function update(cypher, id){
    current_cypher = cypher;
    current_id = id; 
}


function ordA(a) {
    return a.charCodeAt(0) - 65;
}
   
//Prolly gonna be broken in like 2 secs :(
//TODO: Add support for spaces and preserve in encryption
function cypher(text, key, decode) {
    var i = 0, b;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });
}
   
//hmmmmmm
function decrypt() {
    let inputVar = document.getElementById("secret").value; // key

    let cleanInput = inputVar.replace(/\s+/g, ''); //cleanKey

    let decode = cypher(current_cypher, cleanInput, true); //decode

    let encodeTest = cypher(decode,cleanInput); 

    let decode2 = cypher(encodeTest, cleanInput, true); //decode 2

    if(encodeTest === current_cypher && decode2 === decode){
        console.log(encodeTest, current_cypher, decode2, decode); 

        let lastDecode = cypher(encodeTest, cleanInput, true); 
        console.log(lastDecode); 
        document.getElementById(current_id).setAttribute("value", lastDecode);
        document.getElementById(current_id).setAttribute("color", "green");
    
    }

     
}