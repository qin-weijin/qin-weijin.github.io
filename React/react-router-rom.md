# [React Router](https://reactrouter.com/en/main)

    $ npm create vite@latest [ project-name ] -- --template react

    $ npm install react-router-dom localforage match-sorter sort-by

## 添加路由 main.tsx

```
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",                                        // 指定路径
    element: <Root />,                                // 指定组件
    errorElement: <ErrorPage />,                      // 导航失败时
    loader: rootLoader,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## root.tsx

```
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "./contact"

export async function loader() {
  const constact = await getContacts();
  return { contacts }
}

```
























































**BrowserRouter**

预览器路由

- `basename: String` - 导航前缀，部署的相对地址
- `getUserConfirmation: (msg, cb) => {}` - 指定导航方法
- `forceRefresh: Boolean` - 导航时刷新整个页面
- `keyLength: Number` - location.key 长度
- `children: node` - 指定渲染的组件

**Route**

根据 URL 渲染 UI

- `path: String | string []`
- `exact: Boolean` - 精准匹配
- `strict: Boolean`
- `location: Object`
- `sensitive: Boolean` - 区分大小写
