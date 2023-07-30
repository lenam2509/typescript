import axios from 'axios';
import { User, UserProps } from './users';

const url = 'http://localhost:3000/users/';
const user_url = 'http://localhost:3000/users/1';

// axios.post(url, {
//     name: 'Le Viet Nam',
//     age: Math.round(Math.random() * 100),
//     address: '123 HO CHI MINH',
//     job: 'Student',
//     phone: '123456789',
//     email: 'levietnam@gmail'
// });

// axios.put(url+'2', {
//     name: 'Le Viet Nam ',
//     age: Math.random(),
//     address: '123 HO CHI MINH'
// // })

// const user1 = new User({
//     name: 'Le Viet Nam',
//     age: 23,
//     address: '123 HO CHI MINH'
// })

// console.log(user1);


// user1.set({name: 'Le Viet Nam 2'});
// console.log(user1.get('name'));

// user1.on("update", () => {
//     console.log("User data has been updated!");
// });
  
// user1.trigger("update")


axios.get(user_url).then((res) => {
    const users = res.data;
    console.log(users);
    
    const user1 = new User(users);
    const html = `
        <div class="info-box">
           <h1>${user1.get('name')}</h1>
           <h2>${user1.get('job')}</h2>
             <p> <i class="fa-solid fa-phone"></i>${user1.get('phone')}</p>
             <p><i class="fa-solid fa-envelope"></i>${user1.get('email')}</p>
             <p><i class="fa-solid fa-location-dot"></i>${user1.get('address')}</p>
         </div>
     `
    document.querySelector('.info')!.innerHTML = html;
    // users.forEach((user: UserProps) => {
    //     const user1 = new User(user);
    //     const html = `
    //     <div class="info-box">
    //         <h1>${user1.get('name')}</h1>
    //         <h2>${user1.get('job')}</h2>
    //         <p> <i class="fa-solid fa-phone"></i>${user1.get('phone')}</p>
    //         <p><i class="fa-solid fa-envelope"></i>${user1.get('email')}</p>
    //         <p><i class="fa-solid fa-location-dot"></i>${user1.get('address')}</p>
    //     </div>
    // `
    // document.querySelector('.info')!.innerHTML = html;
    // })
});