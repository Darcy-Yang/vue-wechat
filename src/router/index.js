import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/views/chat/Chat'
import Contact from '@/views/contact/Contact'
import Find from '@/views/find/Find'
import Me from '@/views/me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
