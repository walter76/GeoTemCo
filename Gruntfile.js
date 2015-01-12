module.exports = function (grunt) {

    // configure the tasks
    grunt.initConfig({

        copy: {
            build: {
                cwd: 'js',
                src: [ '**' ],
                dest: 'build',
                expand: true
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            }
        },

        uglify: {
            build: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                    preserveComments: 'all'
                },
                files: {
                    'build/geotemco.js': [ 'build/**/*.js' ]
                }
            }
        }

    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // define the tasks
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean', 'copy', 'uglify']
    );

};