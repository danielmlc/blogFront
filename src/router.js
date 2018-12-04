import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = resolve => require(['./views/Main'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect:'home',
      children: [
        { path: 'home', component: () => import('./views/home'), name: '首页'  },
        { path: 'diary', component: () => import('./views/diary'), name: '日记'  },
        { path: 'article', component: () => import('./views/article'), name: '文章'  },
        { path: 'articleDetail', component: () => import('./views/article/articleDetail'), name: '文章详情页'  },
        { path: 'photo', component: () => import('./views/photo'), name: '相册'  },
        { path: 'photoDetail', component: () => import('./views/photo/photoDetail'), name: '相册详情页'  },
        { path: 'project', component: () => import('./views/project'), name: '专题'  },
        { path: 'projectDetail', component: () => import('./views/project/projectDetail'), name: '专题'  },
        { path: 'todolist', component: () => import('./views/todoList'), name: 'TodoList'  },
        { path: 'me', component: () => import('./views/me'), name: '我'  },
      ]
    },
    {
      path: '/reset', name: 'resetPage', component: () => import('./views/uiReset')
    }
  ]
})
