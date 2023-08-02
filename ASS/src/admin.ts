import axios from "axios";

    axios.get('http://localhost:3000/milks').then(response => {
        const milks = response.data;
        
         milks.forEach((milk: { id: number; name: string; price: number; thumbnail:string }) => {
             const html = `
             <tr>
             <td>${milk.id}</td>
             <td>${milk.name}</td>
             <td>${milk.price.toLocaleString('vi-VN')}đ</td>
             <td>
                 <img src="${milk.thumbnail}}"
                     width="50px" height="50px" alt="">
             </td>
             <td>
                 <p>
                     <button type="button"  data-bs-toggle="modal" data-bs-target="#edit_modal" id="btnEdit" value="${milk.id}" class="btn btn-warning">Edit</button>
                     <button id="btnDel" value="${milk.id}"  class="btn btn-danger">Delete</button>
                 </p>
             </td>
         </tr>
             `;
           const tbody = document.querySelector('#milkList') as HTMLElement;
           tbody.innerHTML += html;

           const btnDel = document.querySelectorAll('#btnDel') as NodeListOf<HTMLButtonElement>;
              btnDel.forEach(btn => {
                    btn.onclick = () => {
                        const id = btn.value;
                        const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
                        if (confirm) {
                            axios.delete(`http://localhost:3000/milks/${id}`).then(response => {
                                if (response.status === 200) {
                                    alert('Xóa thành công');
                                    window.location.href = 'admin.html';
                                }else{
                                    alert('Xóa thất bại');
                                    return;
                                }
                            });
                        }
                    }
                });

                const btnEdit = document.querySelectorAll('#btnEdit') as NodeListOf<HTMLButtonElement>;
                btnEdit.forEach(btn => {
                    btn.onclick = () => {
                        const id = btn.value;
                        axios.get(`http://localhost:3000/milks/${id}`).then(response => {
                            const milk = response.data;
                            const form_edit = document.querySelector('#form-edit') as HTMLFormElement;
                            const id_edit = document.querySelector('#id_edit') as HTMLInputElement;
                            const name_edit = document.querySelector('#name_edit') as HTMLInputElement;
                            const price_edit = document.querySelector('#price_edit') as HTMLInputElement;
                            const thumbnail_edit = document.querySelector('#thumbnail_edit') as HTMLInputElement;
                            id_edit.value = milk.id;
                            name_edit.value = milk.name;
                            price_edit.value = milk.price;
                            thumbnail_edit.value = milk.thumbnail;
                            form_edit.onsubmit = (event) => {
                                event.preventDefault();
                                const formdata = new FormData(form_edit);
                                const name = formdata.get('name_edit');
                                const price = formdata.get('price_edit') as unknown as number;
                                const thumbnail = formdata.get('thumbnail_edit');
                                const data = {
                                    name: name,
                                    price: parseInt(price.toString()),
                                    thumbnail: thumbnail
                                }
                               
                                axios.put(`http://localhost:3000/milks/${id}`, data).then(response => {
                                    if (response.status === 200) {
                                        alert('Sửa thành công');
                                        window.location.href = 'admin.html';
                                    }else{
                                        alert('Sửa thất bại');
                                        return;
                                    }
                                });
                               
                            }
                        });
                    }
                    
                }
                );
        

         });

        
     });
     
     const btnAdd = document.querySelector('#btnAdd') as HTMLButtonElement;
     btnAdd.onclick = () => {
         const danhsach = document.querySelector('#danhsach') as HTMLElement;
         danhsach.classList.remove('show');
     }
     
     const btnList = document.querySelector('#list') as HTMLButtonElement;
     btnList.onclick = () => {
         const adddata = document.querySelector('#new_data') as HTMLElement;
         adddata.classList.remove('show');
     }
     
     const form_add = document.querySelector('#form-add') as HTMLFormElement;
     
     form_add.onsubmit = (event) => {
         event.preventDefault();
         const formdata = new FormData(form_add);
         const name = formdata.get('name');
         const price = formdata.get('price') as unknown as number;
         const thumbnail = formdata.get('thumbnail');
         // validate
         if (name === '' || price === 0 || thumbnail === '') {
             alert('Vui lòng nhập đầy đủ thông tin');
             return;
         }
     
         const data = {
             name: name,
             price: parseInt(price.toString()),
             thumbnail: thumbnail
         }
         axios.post('http://localhost:3000/milks', data).then(response => {
             if (response.status === 201) {
                 alert('Thêm thành công');
                 window.location.href = 'admin.html';
             }else{
                 alert('Thêm thất bại');
                 return;
             }
         });
     }
 
 
     const search_input = document.querySelector('#search_input') as HTMLInputElement;
        search_input.onkeyup = () => {
            const search = search_input.value;
            axios.get('http://localhost:3000/milks').then(response => {
                const milks = response.data;
                const tbody = document.querySelector('#milkList') as HTMLElement;
                let html = '';
                milks.forEach((milk: { id: number; name: string; price: number; thumbnail:string }) => {
                    if (milk.name.toLowerCase().includes(search.toLowerCase())) {
                        html += `
                        <tr>
                        <td>${milk.id}</td>
                        <td>${milk.name}</td>
                        <td>${milk.price.toLocaleString('vi-VN')}đ</td>
                        <td>
                            <img src="${milk.thumbnail}}"
                                width="50px" height="50px" alt="">
                        </td>
                        <td>
                            <p>
                                <button type="button"  data-bs-toggle="modal" data-bs-target="#edit_modal" id="btnEdit" value="${milk.id}" class="btn btn-warning">Edit</button>
                                <button id="btnDel" value="${milk.id}"  class="btn btn-danger">Delete</button>
                            </p>
                        </td>
                    </tr>
                        `;
                    }
                });
                tbody.innerHTML = html;

                const btnDel = document.querySelectorAll('#btnDel') as NodeListOf<HTMLButtonElement>;
                btnDel.forEach(btn => {
                      btn.onclick = () => {
                          const id = btn.value;
                          const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
                          if (confirm) {
                              axios.delete(`http://localhost:3000/milks/${id}`).then(response => {
                                  if (response.status === 200) {
                                      alert('Xóa thành công');
                                      window.location.href = 'admin.html';
                                  }else{
                                      alert('Xóa thất bại');
                                      return;
                                  }
                              });
                          }
                      }
                  });
                   const btnEdit = document.querySelectorAll('#btnEdit') as NodeListOf<HTMLButtonElement>;
                btnEdit.forEach(btn => {
                    btn.onclick = () => {
                        const id = btn.value;
                        axios.get(`http://localhost:3000/milks/${id}`).then(response => {
                            const milk = response.data;
                            const form_edit = document.querySelector('#form-edit') as HTMLFormElement;
                            const id_edit = document.querySelector('#id_edit') as HTMLInputElement;
                            const name_edit = document.querySelector('#name_edit') as HTMLInputElement;
                            const price_edit = document.querySelector('#price_edit') as HTMLInputElement;
                            const thumbnail_edit = document.querySelector('#thumbnail_edit') as HTMLInputElement;
                            id_edit.value = milk.id;
                            name_edit.value = milk.name;
                            price_edit.value = milk.price;
                            thumbnail_edit.value = milk.thumbnail;
                            form_edit.onsubmit = (event) => {
                                event.preventDefault();
                                const formdata = new FormData(form_edit);
                                const name = formdata.get('name_edit');
                                const price = formdata.get('price_edit') as unknown as number;
                                const thumbnail = formdata.get('thumbnail_edit');
                                const data = {
                                    name: name,
                                    price: parseInt(price.toString()),
                                    thumbnail: thumbnail
                                }
                               
                                axios.put(`http://localhost:3000/milks/${id}`, data).then(response => {
                                    if (response.status === 200) {
                                        alert('Sửa thành công');
                                        window.location.href = 'admin.html';
                                    }else{
                                        alert('Sửa thất bại');
                                        return;
                                    }
                                });
                               
                            }
                        });
                    }
                    
                }
                );
            });
        }