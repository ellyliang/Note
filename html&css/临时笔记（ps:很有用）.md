```html
  npm install harp -g
```

不想用Apache的话，可以用这个命令

启动如下：

```js
 harp server
```

感谢八哥推荐！


笔记二：

grunt livereload + chrome reload插件

```js
  module.exports = function(grunt) {
      // 项目配置(任务配置)
      grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          watch: {
              client: {
                  files: ['*.html', 'css/*', 'js/*', 'images/**/*'],
                  options: {
                      livereload: true
                  }
              }
          }
      });
   
      // 加载插件
      grunt.loadNpmTasks('grunt-contrib-watch');
   
      // 自定义任务
      grunt.registerTask('live', ['watch']);
   
  };
```

NOTE: livereload需要在服务器上运行，因为对file://支持不是很好。

连接： http://www.bluesdream.com/blog/grunt-plugin-livereload-wysiwyg-editor.html
