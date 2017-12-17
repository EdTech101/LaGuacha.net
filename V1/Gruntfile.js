module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            build: {
                src: ['js/main.dist.js', 'css/main.dist.css']
            }
        },
        concat: {
            js: {
                src: [
                    'js/jquery.colors.js',
                    'js/jquery-ui.js',
                    'js/smoothScrolling.js',
                    'js/carousel.js',
                    'js/menu.js',
                    'js/player.js',
                    'js/slickInit.js',
                    'js/gallery.js',
                    'js/datePickers.js',
                    'js/formController.js',
                    'js/tooltips.js',
                    'js/requests.js',
                    'js/main.js',
                ],
                dest: 'js/main.dist.js',
                separator: ';',
            },
            css: {
                src: ['css/*.css'],
                dest: 'css/main.dist.css',
            }
        },
        uglify: {
            js: {
                files: {
                    'js/main.min.js': ['js/main.dist.js']
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'css/main.min.css': ['css/main.dist.css']
                }
            }
        },
        imageoptim: {
            myTask: {
                src: ['images/**/*.jpg', 'images/**/*.png']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [
        'clean',
        'concat',
        'uglify',
        'cssmin',
        'imageoptim',
    ]);
};