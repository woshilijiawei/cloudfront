import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Project from '@/components/Project'
import Pipeline from '@/components/Pipeline'
import Resource from '@/components/Resource'
import EChart from '@/components/EChart'
import Layout from '@/components/Layout'
import LoadBalance from '@/components/LoadBalance'
import Help from '@/components/Help'
import Setting from '@/components/Setting'
import Template from '@/components/Template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/pipeline',
      name: 'Pipeline',
      component: Pipeline
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
    },
    {
      path: '/echart',
      name: 'EChart',
      component: EChart
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/loadBalance',
      name: 'LoadBalance',
      component: LoadBalance
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
})
