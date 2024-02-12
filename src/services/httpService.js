import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

app.interceptors.request.use(
  (config) => {
    // خواندن توکن‌ها از کوکی‌ها
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');

    // اگر توکن‌ها وجود داشته باشند، آن‌ها را به هدرها اضافه کنید
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

const http = {
  get: app.get,
  post: async (url, data, config) => {
    try {
      const response = await app.post(url, data, config);

      // اگر درخواست موفق بود و توکن‌ها به دست آمدند
      if (response.data && response.data.access_token && response.data.refresh_token) {
        // تنظیم کوکی‌ها برای ذخیره توکن‌ها
        cookies.set('accessToken', response.data.access_token, { path: '/' });
        cookies.set('refreshToken', response.data.refresh_token, { path: '/' });
      }

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;

// app.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalConfig = err.config;
//     if (err.response.status === 401 && !originalConfig._retry) {
//       originalConfig._retry = true;
//       try {
//         const { data } = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
//           { withCredentials: true }
//         );
//         if (data) return app(originalConfig);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(err);
//   }
// );