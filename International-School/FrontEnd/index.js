// Get the requirements
import {encrypt, decrypt, generatePassword} from './encryptor_decryptor.js';
console.log("Imported");

// Check for data in Session Storage
try{
    sessionStorage.getItem("ENCRYPTED_KEY")
} catch{
    // create a new element tag [a].
    const link = document.createElement('a');
    // Encrypt the key
    var key = generatePassword(256);
    //Encrypt the key
    key = key.split('').map(char => char.charCodeAt(0).toString(2)).join('');
    key = encodeURIComponent(key);
    var content = key;
    //Save data in session storage
    sessionStorage.setItem('ENCRYPTED_KEY', key);
    console.log(sessionStorage.getItem('ENCRYPTED_KEY'));
}