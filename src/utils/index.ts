// Set <a-menu> items
import type { MenuProps } from 'ant-design-vue';
type MenuItem = Required<MenuProps>['items'][number];
export const getItem = function(label, key?, icon?, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const getImageUrl = function(url) {
  return new URL(`../assets/${url}`, import.meta.url).href
}

// export const modules = import.meta.glob('@/assets/*')
// export const getImageUrl = (url) => {
//   const path = '/src/assets/${url}'
//   return modules[path]?.default
// }