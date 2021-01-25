# http://vuepress.blog.itedus.cn/

![http://vuepress.blog.itedus.cn](https://bugstack.cn/assets/images/2020/all-21-4.png)

- **介绍**：VuePress 由两部分组成：第一部分是一个[极简静态网站生成器 (opens new window)](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。
- **官网**：[https://vuepress.vuejs.org/zh](https://vuepress.vuejs.org/zh/)
- **案例**：[http://vuepress.blog.itedus.cn](http://vuepress.blog.itedus.cn/)
- **源码**：[https://github.com/BlogGuide/vuepress.blog.github.io](https://github.com/BlogGuide/vuepress.blog.github.io) - *克隆到自己的仓库*
- **命令**：
```java
npm install -g vuepress # 安装
vuepress build docs     # 构建，生成html，可以用于部署
vuepress dev docs       # 启动，http://localhost:8080/
```
- **特点**：基于vue实现的博客，功能很多适合扩展。很适合部署到个人独立的服务器，如果是部署到Github，可以参考*源码*，在一个工程中提供docs用于存放生成的网页，这样在Github就不需要再维护额外的分支。
