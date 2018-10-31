import Vue from 'vue'
import {
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Submenu,
  Notification,
  Tooltip,
  Popover,
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Submenu)
Vue.use(Tooltip)
Vue.use(Popover)

Vue.prototype.$notify = Notification
