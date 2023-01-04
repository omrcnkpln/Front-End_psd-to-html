const {package} = require('grunt');
const sass = require('node-sass');

module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dest: {
                files: {
                    'dest/css/main.css': 'src/css/main.scss'
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '*.html',
                        '*.php',
                        'dest/css/main.css'
                    ]
                },
                options: {
                    watchTask: true,
                    // iki adresi de dinleyebilir
                    // proxy: "http://localhost:8064/phpprojects/burakFiliz/"
                    // proxy: "http://phpprojects:8064/tm-unified/"
                    server: {
                        baseDir: "./"

                    }
                }
            }
        },

        watch: {
            stylesheets: {
                files: ['src/**/*.css', 'src/**/*.scss'],
                tasks: ['sass']
            }
        }
    })

    // LOAD GRUNT PLUGINS ========================================================
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
}
