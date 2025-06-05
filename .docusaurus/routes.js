import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '8b4'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/en/blog/authors/all-sebastien-lorber-articles', '444'),
    exact: true
  },
  {
    path: '/en/blog/authors/yangshun',
    component: ComponentCreator('/en/blog/authors/yangshun', '26c'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'e3f'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '3fa'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', 'd71'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', 'db4'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', '7ad'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', '08b'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', '73b'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '31d'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '398'),
    routes: [
      {
        path: '/en/docs/1.0.0',
        component: ComponentCreator('/en/docs/1.0.0', 'b79'),
        routes: [
          {
            path: '/en/docs/1.0.0',
            component: ComponentCreator('/en/docs/1.0.0', 'a84'),
            routes: [
              {
                path: '/en/docs/1.0.0/category/tutorial---basics',
                component: ComponentCreator('/en/docs/1.0.0/category/tutorial---basics', '40d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/category/tutorial---extras',
                component: ComponentCreator('/en/docs/1.0.0/category/tutorial---extras', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/intro',
                component: ComponentCreator('/en/docs/1.0.0/intro', 'a1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-basics/congratulations', '00c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-basics/create-a-blog-post', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-basics/create-a-document', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-basics/create-a-page', 'ee9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-basics/deploy-your-site', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-basics/markdown-features', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-extras/manage-docs-versions', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/1.0.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/1.0.0/tutorial-extras/translate-your-site', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '488'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'dfb'),
            routes: [
              {
                path: '/en/docs/',
                component: ComponentCreator('/en/docs/', 'f1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/DownLoad',
                component: ComponentCreator('/en/docs/DownLoad', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/HMI',
                component: ComponentCreator('/en/docs/HMI', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/HMI/',
                component: ComponentCreator('/en/docs/HMI/', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK',
                component: ComponentCreator('/en/docs/SDK', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp',
                component: ComponentCreator('/en/docs/SDK/cpp', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_API',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_API', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_class',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_class', '244'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_data',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_data', '08f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_error',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_error', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_example',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_example', '686'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_Intro',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_Intro', 'bba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_method',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_method', 'd0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cpp/cpp_problem',
                component: ComponentCreator('/en/docs/SDK/cpp/cpp_problem', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/cs',
                component: ComponentCreator('/en/docs/SDK/cs', 'c84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/csharp/cs_API',
                component: ComponentCreator('/en/docs/SDK/csharp/cs_API', '6c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/csharp/cs_Intro',
                component: ComponentCreator('/en/docs/SDK/csharp/cs_Intro', 'fa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/python',
                component: ComponentCreator('/en/docs/SDK/python', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/python/py_API',
                component: ComponentCreator('/en/docs/SDK/python/py_API', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/python/py_Intro',
                component: ComponentCreator('/en/docs/SDK/python/py_Intro', '35f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/quick_start',
                component: ComponentCreator('/en/docs/SDK/quick_start', '3e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/SDK/SDK_Intro',
                component: ComponentCreator('/en/docs/SDK/SDK_Intro', 'e11'),
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
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
