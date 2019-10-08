import Vue from 'vue'
import App from './App.vue'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Col from './components/Col'
import Icon from './components/Icon'
import Input from './components/Input'
import Row from './components/Row'
import Cascader from './components/Cascader/cascader'
import CascaderItem from './components/Cascader/cascader-item'
import Carousel from './components/Carousel/carousel'
import CarouselItem from './components/CarouselItem/carousel-item'

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Row)
Vue.component('n-cascader', Cascader)
Vue.component('n-cascader-item', CascaderItem)
Vue.component('n-carousel', Carousel)
Vue.component('n-carousel-item', CarouselItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
