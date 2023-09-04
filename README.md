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
        //只对标题为liyao的md文件添加字段，可以为frontmatter的任何字段，不写该属性全部添加
        // title: 'liyao', 可选 
        
        //要增加的字段，每一个为一个对象
        fields: [
          {name: 'sidebar', value: false}
        ]
      }],
      
      //要删除的frontmatter字段，数组形式
      fieldsToDelete: ['author', 'tags']
  }]

  ],

}
```

