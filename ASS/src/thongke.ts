// Import thư viện Axios (đảm bảo bạn đã cài đặt thư viện này trước)
import axios from 'axios';


axios.get('http://localhost:3000/bills').then(response => {
    const billData: Array<{ id: number; status: string }> = response.data;
    const paidCount = billData.filter(bill => bill.status === 'Đã thanh toán').length;
    const uncheckBill = billData.filter(bill => bill.status === 'Chờ duyệt').length;
    const unpaidCount = billData.filter(bill => bill.status === 'Chưa thanh toán').length;
    const da_thanh_toan_bar = document.querySelector('#da_thanh_toan_bar') as HTMLElement;
    if (da_thanh_toan_bar) {
        da_thanh_toan_bar.style.width = `${paidCount}%`;
        da_thanh_toan_bar.textContent = `${paidCount}`;
    }
    const cho_duyet_bar = document.querySelector('#cho_duyet_bar') as HTMLElement;
    if (cho_duyet_bar) {
        cho_duyet_bar.style.width = `${uncheckBill}%`;
        cho_duyet_bar.textContent = `${uncheckBill}`;
    }
    const chua_thanh_toan_bar = document.querySelector('#chua_thanh_toan_bar') as HTMLElement;
    if (chua_thanh_toan_bar) {
        chua_thanh_toan_bar.style.width = `${unpaidCount}%`;
        chua_thanh_toan_bar.textContent = `${unpaidCount}`;
    }
});

axios.get('http://localhost:3000/milks').then(response => {
    const milks = response.data;
    const totalMilk = milks.length;

    const total_products = document.querySelector('#total_products') as HTMLElement;
    if (total_products) {
        total_products.textContent = `${totalMilk}`;
        total_products.style.width = `${totalMilk}%`;
    }

});