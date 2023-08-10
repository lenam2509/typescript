import axios from 'axios'

const baseUrl:string = 'https://random-data-api.com/api/v2/'

const api_endpoint = document.getElementById('api_endpoint') as HTMLSelectElement
api_endpoint.onchange = () => {
  const api_endpoint_value = api_endpoint.value
  console.log(api_endpoint_value);
  axios.get(baseUrl + api_endpoint_value)
    .then((response) => {
      const data = response.data
      const show_data = document.querySelector('.show_data') as HTMLDivElement
      show_data.innerHTML = JSON.stringify(data, null, 2)
    });
}
