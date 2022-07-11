import Vue from "vue";
import "@/assets/styles/theme/index.css";

import ElementUI, {
  Alert,
  Aside,
  Autocomplete,
  Avatar,
  Backtop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Select,
  Slider,
  Spinner,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Timeline,
  TimelineItem,
  Tooltip,
  Transfer,
  Tree,
  Upload,
} from "element-ui";

import zhTwLang from "element-ui/lib/locale/lang/zh-TW";
import locale from "element-ui/lib/locale";

export function configElementUi() {
  locale.use(zhTwLang);

  Vue.use(Pagination);
  Vue.use(Dialog);
  Vue.use(Autocomplete);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(RadioButton);
  Vue.use(Checkbox);
  Vue.use(CheckboxButton);
  Vue.use(CheckboxGroup);
  Vue.use(Switch);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(OptionGroup);
  Vue.use(Button);
  Vue.use(ButtonGroup);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(DatePicker);
  Vue.use(TimeSelect);
  Vue.use(TimePicker);
  Vue.use(Popover);
  Vue.use(Tooltip);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Tabs);
  Vue.use(TabPane);
  Vue.use(Tag);
  Vue.use(Tree);
  Vue.use(Alert);
  Vue.use(Slider);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);
  Vue.use(Progress);
  Vue.use(Badge);
  Vue.use(Card);
  Vue.use(Rate);
  Vue.use(Steps);
  Vue.use(Step);
  Vue.use(Carousel);
  Vue.use(CarouselItem);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Cascader);
  Vue.use(ColorPicker);
  Vue.use(Transfer);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Aside);
  Vue.use(Main);
  Vue.use(Footer);
  Vue.use(Timeline);
  Vue.use(TimelineItem);
  Vue.use(Link);
  Vue.use(Divider);
  Vue.use(Image);
  Vue.use(Calendar);
  Vue.use(Backtop);
  Vue.use(PageHeader);
  Vue.use(Avatar);

  /* global element config */
  Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
}
