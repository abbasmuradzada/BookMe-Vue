import Home from './Components/Home'
import Blog from './Components/Blog'

export const routes = [
    {path: '/', redirect: {name : 'home'} },
    {path: '/home', component : Home, name: 'home'},
    {path: '/blog', component : Blog, name: 'blog'},
]