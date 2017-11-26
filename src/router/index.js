import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/Login'

import Chat from '@/views/chat/Chat'
import ChatWindow from '@/views/chat/ChatWindow'

import Contact from '@/views/contact/Contact'
import DataCard from '@/views/contact/DataCard'

import Find from '@/views/find/Find'
import Circle from '@/views/find/Circle'

import Me from '@/views/me/Me'

import AddFriend from '@/components/add/AddFriend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/chat-window',
      name: 'chatWindow',
      component: ChatWindow
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
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/add-friend',
      name: 'AddFriend',
      component: AddFriend
    },
    {
      path: '/data-card',
      name: 'dataCard',
      component: DataCard
    }
  ]
})
