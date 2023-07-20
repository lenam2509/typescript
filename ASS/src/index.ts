
interface Milk {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
}

const url = 'http://localhost:3000/milks';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const milks: Milk[] = data;
    console.log(milks.map((milk) => milk));

    const milkList = document.getElementsByClassName('box')[0];

    milks.forEach((milk) => {
      milkList.innerHTML += `
        <div class="card">
          <img src="${milk.thumbnail}" alt="">
          <div class="card-title">${milk.name}</div>
          <div class="card-price">${milk.price.toLocaleString('vi-VN')} đ</div>
          <button href="#">đặt hàng</button>
        </div>
      `;
    });
  });