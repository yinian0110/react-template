// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: false,
    baseNavigator: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          redirect: '/dashboard/analysis',
        },
        {
          name: 'analysis',
          icon: 'smile',
          path: '/dashboard/analysis',
          component: './dashboard/analysis',
        },
        // {
        //   path: '/dashboard',
        //   name: 'dashboard',
        //   icon: 'dashboard',
        //   routes: [
        //     {
        //       name: 'analysis',
        //       icon: 'smile',
        //       path: '/dashboard/analysis',
        //       component: './dashboard/analysis',
        //     },
        //     {
        //       name: 'monitor',
        //       icon: 'smile',
        //       path: '/dashboard/monitor',
        //       component: './dashboard/monitor',
        //     },
        //     {
        //       name: 'workplace',
        //       icon: 'smile',
        //       path: '/dashboard/workplace',
        //       component: './dashboard/workplace',
        //     },
        //   ],
        // },
        {
          component: '404',
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
