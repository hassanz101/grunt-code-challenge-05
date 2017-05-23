module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'server/public/scripts/scripts.min.js': ['client/script.js'],
          'server/public/scripts/heroService.min.js': ['client/heroService.js'],
        }//end files
      }//end my_target
    },//end uglify
    watch: {
      files:['client/*js'],
      tasks:['uglify']
    },//end watch
    copy: {
      main: {
        files: [
          //current working directory
          {expand: true, cwd: 'node_modules', src: ['bootstrap/**', 'angular/**'], dest: 'server/public/vendors'}
        ]
      }
    }
  });//end grunt initConfig

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');


//grunt register tasks
grunt.registerTask('default', ['copy', 'watch']);
};//end of modules
