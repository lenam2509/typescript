import axios from 'axios';
import { User, UserProps } from './users';

let id:number = 1
const url = 'http://localhost:3000/users/';
const user_url = `http://localhost:3000/users/${id}`;


axios.get(url).then((res) => {
    const users = res.data;
    users.forEach((user: any) => {
        const html = `
          <option value="${user.id}">${user.name}</option>
        `
        document.querySelector('#user_id')!.innerHTML += html;
    });
});

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
});

axios.get(user_url).then((res) => {
    const users = res.data;
    // load data to form
    const form_update = document.querySelector('.form_update')! as HTMLFormElement;
    form_update.name.value = users.name;
    form_update.job.value = users.job;
    form_update.phone.value = users.phone;
    form_update.email.value = users.email;
    form_update.address.value = users.address;
});



function handleSubmit(event: Event) {
    event.preventDefault();
    const form = document.querySelector('.form')! as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const job = formData.get('job') as string;
    const phone = formData.get('phone') as unknown as number;
    const email = formData.get('email') as string;
    const address = formData.get('address') as string;

    axios.post(url, {
        name: name,
        job: job,
        phone: parseInt(phone.toString()),
        email: email,
        address: address,
    })
        .then(function (response) {
            console.log(response);
            if (response.status === 201) {
                alert('Thêm thành công');
                window.location.reload();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    

    

}

function handleUpdate(event: Event) {
    event.preventDefault();
    const form_update = document.querySelector('.form_update')! as HTMLFormElement;
    const formData = new FormData(form_update);
    const name = formData.get('name') as string;
    const job = formData.get('job') as string;
    const phone = formData.get('phone') as unknown as number;
    const email = formData.get('email') as string;
    const address = formData.get('address') as string;

    axios.put(user_url, {
        name: name,
        job: job,
        phone: parseInt(phone.toString()),
        email: email,
        address: address,
    })
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                alert('Cập nhật thành công');
                window.location.reload();
            }
        }
        )
        .catch(function (error) {
            console.log(error);
        }
        );
}


const form = document.querySelector('.form')!;
form.addEventListener('submit', handleSubmit);

const form_update = document.querySelector('.form_update')!;
form_update.addEventListener('submit', handleUpdate);

const select = document.querySelector('#user_id')! as HTMLSelectElement;
select.addEventListener('change', (e) => {
        e.preventDefault();
        id = parseInt(select.value);
        console.log(id);
    
        axios.get(`http://localhost:3000/users/${id}`).then((res) => {
            const users = res.data;
            console.log(users);
            const form_update = document.querySelector('.form_update')! as HTMLFormElement;
            form_update.name.value = users.name;
            form_update.job.value = users.job;
            form_update.phone.value = users.phone;
            form_update.email.value = users.email;
            form_update.address.value = users.address;
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
        });
});