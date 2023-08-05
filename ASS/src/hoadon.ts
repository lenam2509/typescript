import axios from 'axios';

axios.get('http://localhost:3000/bills').then(response => {
    const bills = response.data;
    
     bills.forEach((bill:any) => {
         const html = `
         <tr>
         <td>${bill.id}</td>
         <td>${bill.date}</td>
         <td>${bill.total.toLocaleString('vi-VN')}đ</td>
         <td>
                ${bill.note}
         </td>
         <td>
            <select class="form-select" aria-label="Default select example" data-bill-id="${bill.id}" id="status_select">
                <option selected hidden>${bill.status}</option>
                <option value="Đã thanh toán">Đã thanh toán</option>
                <option value="Chưa thanh toán">Chưa thanh toán</option>
            </select>
        </td>
         <td>
             <p>
                 <button type="button"  data-bs-toggle="modal" data-bs-target="#edit_modal" id="btnEdit" value="${bill.id}" class="btn btn-warning">View</button>
             </p>
         </td>
     </tr>
         `;
       const tbody = document.querySelector('#milkList') as HTMLElement;
       tbody.innerHTML += html;
      
       const statusSelects = document.querySelectorAll('#status_select') as NodeListOf<HTMLSelectElement>;
       statusSelects.forEach((statusSelect) => {
         statusSelect.addEventListener('change', (e) => {
           const id = statusSelect.getAttribute('data-bill-id');
           axios.put(`http://localhost:3000/bills/${id}`, {
             ...bill,
             status: statusSelect.value
           }).then(response => {
             if (response.status === 200) {
                window.location.reload();
             }
           });
         });
       });
    
     });
     const btnEdit = document.querySelectorAll('#btnEdit') as NodeListOf<HTMLButtonElement>;
     btnEdit.forEach((btn) => {
        btn.onclick = () =>{
            const id = btn.value;
            axios.get(`http://localhost:3000/bills/${id}`).then(response => {
                const user = response.data.user;
                const products = response.data.products;
                const user_name =   document.querySelector('#user_name') as HTMLInputElement;
                const user_phone =  document.querySelector('#user_phone') as HTMLInputElement;
                const user_address = document.querySelector('#user_address') as HTMLInputElement;
                
                user_name.value = user.name;
                user_phone.value = user.phone;
                user_address.value = user.address;
               
                products.forEach((product:any) => {
                const products_buy = document.querySelector('.products_buy') as HTMLElement;
                const html = `<img src="${product.thumbnail}" width="50" height="50" alt="${product.name}" />`;
                products_buy.innerHTML =  html;
                });
            });
        }
     });
});
