import axios from 'axios';
var instance = axios.create({
  baseURL: API_ROOT
});
export const getCompanyList = 'ajax/editItem'