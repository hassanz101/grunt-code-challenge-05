// add grunt into the prameter
module.exports = function(grunt) {

  grunt.initConfig({
    // uglify - minification
    uglify: {
      my_target: {
        files: {
          // destination of where the min.js file will go : [target which file will get minification]
          'server/public/scripts/scripts.min.js': ['client/script.js'],
          'server/public/scripts/heroService.min.js': ['client/heroService.js'],
        }//end files
      }//end my_target
    },//end uglify
    // watch - watch files for changes and run tasks on them, watch the client file and run uglify
    watch: {
      files:['client/*js'],
      tasks:['uglify']
    },//end watch
    // copy - copy our vendor files
    copy: {
      main: {
        files: [
          //current working directory
          {expand: true, cwd: 'node_modules', src: ['bootstrap/**', 'angular/**'], dest: 'server/public/vendors'}
        ]
      }
    }
  });//end grunt initConfig

// must load the task via npm install
// $: npm install grunt-contrib-<name of task go here> --save-dev
// to add the files in terminal type
// $: grunt uglify
// $: grunt watch
// $: grunt copy
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');


//grunt register tasks
// now instead of typing in the terminal $: grunt uglify..etc just need to type $: grunt
grunt.registerTask('default', ['watch']);
};//end of modules
