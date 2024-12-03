import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zhenxun_bot/markdown-page',
    component: ComponentCreator('/zhenxun_bot/markdown-page', 'a11'),
    exact: true
  },
  {
    path: '/zhenxun_bot/',
    component: ComponentCreator('/zhenxun_bot/', '8b4'),
    exact: true
  },
  {
    path: '/zhenxun_bot/',
    component: ComponentCreator('/zhenxun_bot/', '494'),
    routes: [
      {
        path: '/zhenxun_bot/',
        component: ComponentCreator('/zhenxun_bot/', 'f3a'),
        routes: [
          {
            path: '/zhenxun_bot/',
            component: ComponentCreator('/zhenxun_bot/', '81a'),
            routes: [
              {
                path: '/zhenxun_bot/about',
                component: ComponentCreator('/zhenxun_bot/about', 'dc6'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/zhenxun_bot/faq',
                component: ComponentCreator('/zhenxun_bot/faq', 'cea'),
                exact: true,
                sidebar: "faqSidebar"
              },
              {
                path: '/zhenxun_bot/install_xiaobai',
                component: ComponentCreator('/zhenxun_bot/install_xiaobai', 'ade'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhenxun_bot/install/install-qq',
                component: ComponentCreator('/zhenxun_bot/install/install-qq', 'e5b'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/install-sql/mysql',
                component: ComponentCreator('/zhenxun_bot/install/install-sql/mysql', '96b'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/install-sql/postgresql/linux',
                component: ComponentCreator('/zhenxun_bot/install/install-sql/postgresql/linux', '549'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/install-sql/postgresql/windows',
                component: ComponentCreator('/zhenxun_bot/install/install-sql/postgresql/windows', '215'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/install-sql/sqlite',
                component: ComponentCreator('/zhenxun_bot/install/install-sql/sqlite', 'd06'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/install-zhenxun',
                component: ComponentCreator('/zhenxun_bot/install/install-zhenxun', 'c0c'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/intro',
                component: ComponentCreator('/zhenxun_bot/install/intro', 'bf9'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/webui/install-webui-default',
                component: ComponentCreator('/zhenxun_bot/install/webui/install-webui-default', 'a0e'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/install/webui/install-webui-nginx',
                component: ComponentCreator('/zhenxun_bot/install/webui/install-webui-nginx', 'b0c'),
                exact: true,
                sidebar: "installSidebar"
              },
              {
                path: '/zhenxun_bot/intro',
                component: ComponentCreator('/zhenxun_bot/intro', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/about',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/about', '82b'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/admin_help',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/admin_help', '739'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/admin_watch',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/admin_watch', '795'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/ban',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/ban', '0e7'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/gm_update',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/gm_update', 'be6'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/group_update',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/group_update', 'fd3'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/plugin_switch',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/plugin_switch', '634'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/admin/welcome_message',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/admin/welcome_message', 'a4c'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/auto_update',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/auto_update', '808'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/catchphrase',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/catchphrase', 'c97'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/chat_history',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/chat_history', '2c9'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/check',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/check', '39d'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/group_handle',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/group_handle', 'f73'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/help',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/help', 'ef9'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/help_help',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/help_help', '404'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/hooks',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/hooks', '4a7'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/info',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/info', 'e39'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/init',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/init', '921'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/nickname',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/nickname', '692'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/plugin_store',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/plugin_store', 'b0e'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/record_request',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/record_request', '50e'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/restart',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/restart', 'd3d'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/scheduler/auto_backup',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/scheduler/auto_backup', 'b42'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/scheduler/auto_update_group',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/scheduler/auto_update_group', 'e6d'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/scheduler/chat_check',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/scheduler/chat_check', '44f'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/scheduler/morning',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/scheduler/morning', 'cfa'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/shop',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/shop', '3e8'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/sign_in',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/sign_in', '343'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/statistics_handle',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/statistics_handle', 'c88'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/broadcast',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/broadcast', '58a'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/clear_data',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/clear_data', '548'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/exec_sql',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/exec_sql', '106'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/fg_manage',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/fg_manage', '19a'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/group_manage',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/group_manage', 'bdd'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/reload_setting',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/reload_setting', 'fce'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/request_manage',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/request_manage', '8b9'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/set_admin',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/set_admin', 'c18'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/super_help',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/super_help', '398'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/superuser/update_fg_info',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/superuser/update_fg_info', 'e1e'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/web_ui',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/web_ui', '144'),
                exact: true,
                sidebar: "usageSidebar"
              },
              {
                path: '/zhenxun_bot/usage/builtin_plugins/withdraw',
                component: ComponentCreator('/zhenxun_bot/usage/builtin_plugins/withdraw', 'a5d'),
                exact: true,
                sidebar: "usageSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
