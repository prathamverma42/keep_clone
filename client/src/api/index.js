import axios from 'axios';
const api=axios.create({
    url:'http://localhost:5000',
})
export const getNotes=()=>api.get('/');
export const postNote=payload=>api.post('/',payload);
const apis={
    getNotes,
    postNote,
}
export default apis;