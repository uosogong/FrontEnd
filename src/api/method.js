import axios, { isAxiosError } from 'axios';

const logOnDev = (message) => {
  if (import.meta.env.MODE === 'development') {
    console.log(message);
  }
};

const handleError = async (message) => {
  console.error('Error:', message);
};

const onRequest = (config) => {
  const { method, url } = config;
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  if (method === 'get') {
    config.params = {
      ...config.params,
      _t: Date.now(),
    };
    config.timeout = 3000;
    config.timeout = 3000;
  }
  return config;
};

const onResponse = (response) => {
  const { method, url } = response.config;
  const { status } = response;
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
  return response;
};

const onErrorResponse = (error) => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const config = error.config;
    const { method, url } = config;
    const status = error.response?.status;

    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );

    switch (status) {
      case 401:
        postFetcher('/auth/refresh', {
          Authorization: `Bearer ${refreshToken}`,
        })
          .then((res) => {
            localStorage.setItem('refreshToken', res.refreshToken);
            localStorage.getItem('accessToken', res.accessToken);
          })
          .catch((error) => {
            console.log(error);
          });
        handleError('토큰이 만료되었습니다.');
        break;
      case 403:
        handleError('권한이 없습니다.');
        break;
      case 404:
        handleError('잘못된 요청입니다.');
        break;
      case 500:
        handleError('서버에 문제가 발생했습니다.');
        break;
      default:
        handleError('알 수 없는 오류가 발생했습니다.');
        break;
    }
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`);
    handleError(error.message);
  }

  return Promise.reject(error);
};

const setupInterceptors = (instance) => {
  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponse, onErrorResponse);
  return instance;
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER,
});

setupInterceptors(axiosInstance);

export const getFetcher = async (url, headers) => {
  const response = await axiosInstance.get(url, {
    headers,
  });
  return response.data;
};

export const postFetcher = async (url, data, headers) => {
  const response = await axiosInstance.post(url, data, {
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const putFetcher = async (url, data, headers) => {
  const response = await axiosInstance.put(url, data, {
    responseType: 'json',
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const patchFetcher = async (url, data, headers) => {
  const response = await axiosInstance.patch(url, data, {
    responseType: 'json',
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const deleteFetcher = async (url, headers) => {
  const response = await axiosInstance.delete(url, {
    responseType: 'json',
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const errorHandler = (error) => {
  try {
    if (isAxiosError(error)) {
      if (error.message === undefined) throw error;
      if (error.status === 500) throw error;
      return error.message;
    } else {
      throw error;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
