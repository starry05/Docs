import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'db5'),
    routes: [
      {
        path: '/docs/1.0.0',
        component: ComponentCreator('/docs/1.0.0', 'fd9'),
        routes: [
          {
            path: '/docs/1.0.0',
            component: ComponentCreator('/docs/1.0.0', '676'),
            routes: [
              {
                path: '/docs/1.0.0/category/tutorial---basics',
                component: ComponentCreator('/docs/1.0.0/category/tutorial---basics', 'a59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/category/tutorial---extras',
                component: ComponentCreator('/docs/1.0.0/category/tutorial---extras', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/intro',
                component: ComponentCreator('/docs/1.0.0/intro', '3e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/1.0.0/tutorial-basics/congratulations', 'ff6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/1.0.0/tutorial-basics/create-a-blog-post', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/1.0.0/tutorial-basics/create-a-document', 'ca2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/1.0.0/tutorial-basics/create-a-page', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/1.0.0/tutorial-basics/deploy-your-site', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/1.0.0/tutorial-basics/markdown-features', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/1.0.0/tutorial-extras/manage-docs-versions', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.0.0/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/1.0.0/tutorial-extras/translate-your-site', 'be4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '39c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '889'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '363'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DownLoad',
                component: ComponentCreator('/docs/DownLoad', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HMI',
                component: ComponentCreator('/docs/HMI', 'c4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HMI/',
                component: ComponentCreator('/docs/HMI/', '28d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK',
                component: ComponentCreator('/docs/SDK', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp',
                component: ComponentCreator('/docs/SDK/cpp', '331'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_API',
                component: ComponentCreator('/docs/SDK/cpp/cpp_API', '4c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_class',
                component: ComponentCreator('/docs/SDK/cpp/cpp_class', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_data',
                component: ComponentCreator('/docs/SDK/cpp/cpp_data', '3bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_error',
                component: ComponentCreator('/docs/SDK/cpp/cpp_error', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_example',
                component: ComponentCreator('/docs/SDK/cpp/cpp_example', '8fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_Intro',
                component: ComponentCreator('/docs/SDK/cpp/cpp_Intro', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_method',
                component: ComponentCreator('/docs/SDK/cpp/cpp_method', 'f3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cpp/cpp_problem',
                component: ComponentCreator('/docs/SDK/cpp/cpp_problem', '14c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/cs',
                component: ComponentCreator('/docs/SDK/cs', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/csharp/cs_API',
                component: ComponentCreator('/docs/SDK/csharp/cs_API', '8ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/csharp/cs_Intro',
                component: ComponentCreator('/docs/SDK/csharp/cs_Intro', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/python',
                component: ComponentCreator('/docs/SDK/python', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/python/py_API',
                component: ComponentCreator('/docs/SDK/python/py_API', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/python/py_Intro',
                component: ComponentCreator('/docs/SDK/python/py_Intro', 'e62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/quick_start',
                component: ComponentCreator('/docs/SDK/quick_start', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SDK/SDK_Intro',
                component: ComponentCreator('/docs/SDK/SDK_Intro', 'bb5'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
