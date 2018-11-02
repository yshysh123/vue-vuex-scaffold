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
  Message,
  Tooltip,
  Popover,
  Form,
  FormItem,
  Input,
  Radio,
  Select,
  Option,
  DatePicker,
  Checkbox,
  Col,
  Row,
  Card,
  ColorPicker,
  Table,
  TableColumn,
  Pagination,
  Loading,
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
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(ColorPicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Loading)
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
