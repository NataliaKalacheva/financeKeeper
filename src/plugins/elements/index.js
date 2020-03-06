import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
} from 'element-ui';

const elements = [
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
];

locale.use(lang);

elements.forEach(el => Vue.use(el, { locale }));
 // use components in global