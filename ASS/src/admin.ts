import axios from "axios";


// fetch('http://localhost:3000/milks').then(response => {
//     console.log(response.json());
// });


axios.get('http://localhost:3000/milks').then(response => {
    console.log(response.data);
});

// console.log('Starting admin');
