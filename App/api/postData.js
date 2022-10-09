import client from './client';

const postReporterInfo = data =>
  client.post('/store/reporter', data.data, data.header);
const postPatientInfo = data =>
  client.post('/store/patient', data.data, data.header);

export default {
  postReporterInfo,
  postPatientInfo
};
