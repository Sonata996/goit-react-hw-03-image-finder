import axios from 'axios';

export const serviceAPI = async (value, page = 1) =>{
const querySelection = await `https://pixabay.com/api/?key=39127754-be1e37310bae930d939d50f92&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
const getAPI = axios.get(querySelection)

return getAPI
}