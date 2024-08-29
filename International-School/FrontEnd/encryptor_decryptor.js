//Encrypt function using AES encryption
export function encrypt(text, password) {
    //encrypt
    var encrypted = CryptoJS.AES.encrypt(
       text,
       password
    );
    //return
    return encrypted;
 }
 //Decrypt function using AES decryption
 export function decrypt(EncryptedValue, password) {
    //decrypt
    var decrypted = CryptoJS.AES.decrypt(
       EncryptedValue,
       password
    ).toString(CryptoJS.enc.Utf8);
    //return decrypted
    return decrypted;
 }

 //Function to generate a random password for encrypting and decrypting
 export function generatePassword(length) {
    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_-+=';
  
    const allChars = lowercase + uppercase + numbers + specialChars; 
  
    // Generate a random password by selecting random characters from each set until the desired length is reached.
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;  
  
  }