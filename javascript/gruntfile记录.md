Gruntfile记录
=============

####grunt-contrib-jade

```js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  cwd: "test",
                  src: "*.jade",
                  dest: "tmp",
                  expand: true,
                  ext: ".html"
                } ]
            }
        }
    });

    //任务加载
    grunt.loadNpmTasks('grunt-contrib-jade');

    //任务自定义
    grunt.registerTask('default', ['jade']);
};   
```
