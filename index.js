const path = require('path')

const fs = require('fs');
const glob = require('glob');
const matter = require('gray-matter');

module.exports = (options = {}, context) => ({
   extendPageData($page) {

      const { customFields, defaultMatchAttribute = null,  fieldsToDelete } = options;

      // 获取所有Markdown文件
      const files = glob.sync('docs/**/*.md');


     if (files.length === 0) {
       console.error('No Markdown files found.');
     } else {
       files.forEach((file) => {
         try {
           const content = fs.readFileSync(file, 'utf-8');
           const { data, content: markdownContent } = matter(content);

           // 检查是否存在 matchAttribute，如果不存在，则使用默认值
           const matchAttribute = data[defaultMatchAttribute] || defaultMatchAttribute;

           // 增加用户指定的字段
           customFields.forEach((fieldObj) => {
             const { fields } = fieldObj;

             // 检查属性是否匹配条件或者默认配置为全改
             if (!matchAttribute || data[matchAttribute]) {
               // 遍历字段名和字段值对象
               fields.forEach((field) => {
                 const { name, value } = field;
                 data[name] = value;
               });

               // 将修改后的frontmatter重新写入文件中
               const updatedContent = matter.stringify(markdownContent, data);
               fs.writeFileSync(file, updatedContent, 'utf-8');
               console.log(`字段已添加到 ${file} 中`);
             }

           });

           // 删除用户指定的字段
           fieldsToDelete.forEach((fieldToDelete) => {
             if (data[fieldToDelete] !== undefined) {
               delete data[fieldToDelete];
               console.log(`字段 ${fieldToDelete} 已从 ${file} 中删除`);
             }
           });

           // 将修改后的frontmatter重新写入文件中
           const updatedContent = matter.stringify(markdownContent, data);
           fs.writeFileSync(file, updatedContent, 'utf-8');


         } catch (error) {
           console.error(`在 ${file} 中更改字段时出错：${error.message}`);
         }

       });
     }
    }
});
