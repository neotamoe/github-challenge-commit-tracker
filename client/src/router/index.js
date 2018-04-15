import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import CurrentChallenge from '@/components/CurrentChallenge'
import PastChallenges from '@/components/PastChallenges'
import AddChallenge from '@/components/AddChallenge'


Vue.use(Router)

export default new Router({
   mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/current',
      name: 'Current Challenge',
      component: CurrentChallenge
    },
    {
      path: '/add',
      name: 'Add Challenge',
      component: AddChallenge
    },
    {
      path: '/previous',
      name: 'Past Challenges',
      component: PastChallenges
    }

  ]
})