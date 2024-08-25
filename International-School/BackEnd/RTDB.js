import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, set, once, onValue} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAT08qUZxvau0g2qIL7wC3d14r9Q8vyuRc",
    authDomain: "international-school-f8cd0.firebaseapp.com",
    databaseURL: "https://international-school-f8cd0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "international-school-f8cd0",
    storageBucket: "international-school-f8cd0.appspot.com",
    messagingSenderId: "478948302270",
    appId: "1:478948302270:web:66a027800a1342107e6def",
    measurementId: "G-Q0LFLRM7ZK"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function getDataOnUpdate(dbObj){
    const reference = ref(db, 'DataBases/International_School_DB/'+dbObj);

    onValue(reference, (snapshot) => {
        const values = snapshot.val();
        return values;
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.error(err);
    });
};

function getData(dbObj){
    const reference = ref(db, 'DataBases/International_School_DB/'+dbObj);

    once(reference, 'value').then((snapshot) => {
        const values = snapshot.val();
        return values;
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
};

export function AddData(jsonData, dbObj, jsonData_Name){
    const reference = ref(db, 'DataBases/International_School-DB/'+dbObj+'/'+jsonData_Name);

    set(reference, jsonData).then((data)=>{
        return true, data;
    }).catch((err)=>{
        return false, err;
    });
};

