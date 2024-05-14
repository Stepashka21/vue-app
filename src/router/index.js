import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ListProject from '../components/ListProject.vue';
import ProjectEditor from '../components/ProjectEditor.vue';
import Replace from '../components/ReplaceDialog.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListProject
  },
  {
    path: '/edit/:projectName',
    name: 'edit',
    component: ProjectEditor,
    props: true
  }, 
  {
    path: '/ReplaceDialog',
    name: 'ReplaceDialog',
    component: Replace,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
