function load(path) {
  return () => import(`@/pages/${path}`);
}

const routes = [
  {
    path: '/demo',
    name: 'demo',
    meta: { title: '示例dev' },
    component: load('demo/index'),
  },
  {
    path: '/demo2',
    name: 'demo2',
    meta: { title: '示例2' },
    component: load('demo/demo2'),
  },
];

export default routes;

