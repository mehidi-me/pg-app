import client from './client';

const getArea = () => client.get('/area');

const getHospital = () => client.get('/hospital');

const getMedicine = () => client.get('/medicine');

const getIll = () => client.get('/ill');

const getDepartment = () => client.get('/department');

export default {
  getArea,
  getHospital,
  getMedicine,
  getIll,
  getDepartment,
};
