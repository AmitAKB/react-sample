import axios from 'axios';
import { msalConfig, loginRequest } from './msalConfig';
import { PublicClientApplication } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
});

apiClient.interceptors.request.use(async (config) => {
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length) {
    const account = accounts[0];
    try{
      const response = await msalInstance.acquireTokenSilent({ ...loginRequest, account });
      (config.headers as any).Authorization = `Bearer ${response.accessToken}`;
    }catch(e){
      // silent token acquisition failed
    }
  }
  return config;
});

export default apiClient;
