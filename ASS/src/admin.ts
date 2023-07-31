import axios from "axios";





axios.get('http://localhost:3000/milks').then(response => {
   const milks = response.data;
   
    milks.forEach((milk: { id: number; name: string; price: number; thumbnail:string }) => {
        const html = `
        <tr>
        <th scope="row">${milks.length}</th>
        <td>${milk.id}</td>
        <td>${milk.name}</td>
        <td>${milk.price}</td>
        <td>
            <img src="${milk.thumbnail}}"
                width="50px" height="50px" alt="">
        </td>
        <td>
            <p>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </p>
        </td>
    </tr>
        `;
        document.querySelector('#milkList').innerHTML += html;
    });
});

