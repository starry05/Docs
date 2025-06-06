import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docs/en/markdown-page',
    component: ComponentCreator('/Docs/en/markdown-page', '199'),
    exact: true
  },
  {
    path: '/Docs/en/docs',
    component: ComponentCreator('/Docs/en/docs', 'e74'),
    routes: [
      {
        path: '/Docs/en/docs/1.0.0',
        component: ComponentCreator('/Docs/en/docs/1.0.0', '8c5'),
        routes: [
          {
            path: '/Docs/en/docs/1.0.0',
            component: ComponentCreator('/Docs/en/docs/1.0.0', 'f2a'),
            routes: [
              {
                path: '/Docs/en/docs/1.0.0/category/tutorial---basics',
                component: ComponentCreator('/Docs/en/docs/1.0.0/category/tutorial---basics', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/category/tutorial---extras',
                component: ComponentCreator('/Docs/en/docs/1.0.0/category/tutorial---extras', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/intro',
                component: ComponentCreator('/Docs/en/docs/1.0.0/intro', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-basics/congratulations',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-basics/congratulations', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-basics/create-a-blog-post', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-basics/create-a-document', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-basics/create-a-page', 'db2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-basics/deploy-your-site', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-basics/markdown-features', 'bf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-extras/manage-docs-versions', '981'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/1.0.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Docs/en/docs/1.0.0/tutorial-extras/translate-your-site', 'dbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/Docs/en/docs',
        component: ComponentCreator('/Docs/en/docs', '00f'),
        routes: [
          {
            path: '/Docs/en/docs',
            component: ComponentCreator('/Docs/en/docs', '2be'),
            routes: [
              {
                path: '/Docs/en/docs/',
                component: ComponentCreator('/Docs/en/docs/', 'cad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/DownLoad',
                component: ComponentCreator('/Docs/en/docs/DownLoad', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/HMI',
                component: ComponentCreator('/Docs/en/docs/HMI', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/HMI/',
                component: ComponentCreator('/Docs/en/docs/HMI/', '78e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK',
                component: ComponentCreator('/Docs/en/docs/SDK', 'c3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_API',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_API', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_class',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_class', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_data',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_data', 'f8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_error',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_error', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_example',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_example', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_Intro',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_Intro', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_method',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_method', '500'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cpp/cpp_problem',
                component: ComponentCreator('/Docs/en/docs/SDK/cpp/cpp_problem', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/cs',
                component: ComponentCreator('/Docs/en/docs/SDK/cs', 'e0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/csharp/cs_API',
                component: ComponentCreator('/Docs/en/docs/SDK/csharp/cs_API', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/csharp/cs_Intro',
                component: ComponentCreator('/Docs/en/docs/SDK/csharp/cs_Intro', '464'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/python',
                component: ComponentCreator('/Docs/en/docs/SDK/python', '6bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/python/py_API',
                component: ComponentCreator('/Docs/en/docs/SDK/python/py_API', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/python/py_Intro',
                component: ComponentCreator('/Docs/en/docs/SDK/python/py_Intro', 'd11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/quick_start',
                component: ComponentCreator('/Docs/en/docs/SDK/quick_start', '462'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docs/en/docs/SDK/SDK_Intro',
                component: ComponentCreator('/Docs/en/docs/SDK/SDK_Intro', 'f26'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Docs/en/',
    component: ComponentCreator('/Docs/en/', 'a0d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
