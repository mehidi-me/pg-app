import { create } from "apisauce";
// import storage from "../auth/storage";

const apiClient = create({
  baseURL: "https://amarousodh.com/api",
  //baseURL: 'http://192.168.0.104:3002/api/v1',
});

// apiClient.addAsyncRequestTransform(async (req) => {
//   const authToken = await storage.getToken();

//   if (!authToken) return;

//   req.headers["Authorization"] = `Bearer ${authToken}`;
//   // req.headers['contentType'] = 'application/json; charset=utf-8';
// });

export default apiClient;
