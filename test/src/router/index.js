import Vue from 'vue';
import Router from 'vue-router';
import { setTitle } from '@/utils';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  const { title } = to.meta;
  if (title) setTitle(title);
  next();
});

export default router;
