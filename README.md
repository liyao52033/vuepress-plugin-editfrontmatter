

## 文章必须在docs目录下，否则无法使用本插件

目录结构参考[vuepress官网](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

```javascript
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```



## 安装

```bash
npm i vuepress-plugin-editfrontmatter

or 

yarn add vuepress-plugin-editfrontmatter
```



## 使用

```javascript
// .vuepress/config.js
module.exports = {

  plugins: [
    ['editfrontmatter'],
}
```



## 可选参数

```javascript
// .vuepress/config.js
module.exports = {

  plugins: [
    ['editfrontmatter', {
      customFields:[{     
        //要增加的字段，每一个为一个对象
        fields: [
          {name: 'sidebar', value: false}
        ]
      }],
       //只对title为liyao的md文件添加字段，可以为frontmatter的任何字段，不写添加到所有md文件
      defaultMatchAttribute： 'title', // frontmatter属性
      attr: 'liyao'                   //  对应的值
      
      //要删除的frontmatter字段，数组形式
      fieldsToDelete: ['author', 'tags']
  }]

  ],

}
```

