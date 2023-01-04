const { package } = require('grunt');
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
          'src/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['opera 12', 'ff 15', 'chrome 25']
      },

      dist: {
        files: {
          'src/css/prefix/main.css': 'src/css/main.css',
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dest/css/main.min.css': 'src/css/prefix/*.css',
        }
      }
    },

    // concat: {
    //   options: {
    //     separator: ';',
    //   },
    //   dist: {
    //     src: ['src/js/basic-slider.js', 'src/js/akademi-slider.js'],
    //     dest: 'src/js/bundle.js',
    //   },
    // },

    // jshint: {
    //   options: {
    //     reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
    //   },

    //   // when this task is run, lint the Gruntfile and all js files in src
    //   files: ['src/js/*.js']
    // },

    eslint: {
      options: {
        configFile: '.eslintrc.json',
        // format: 'html',
        // outputFile: 'logs/eslintReport.html',
        fix: false
      },
      target: [
        'dest/js/anasayfa.js'
      ]
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ["@babel/preset-env"],
      },
      dest: {
        files: {
          'dest/js/babel/anasayfa.js': 'dest/js/anasayfa.js',
        },
      },
    },

    uglify: {
      options: {
        compress: true,
      },
      dest: {
        files: {
          'dest/js/babel/min/anasayfa.min.js': 'dest/js/babel/anasayfa.js',
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'dest/css/*.css',
            'dest/js/babel/min/*.js',
            '*.html',
            'dest/js/*.js'
            // 'logs/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'newer:autoprefixer', 'cssmin']
      },

      // js: {
      //   files: ['dest/js/*.js'],
      //   tasks: ['newer:eslint', 'newer:babel', 'newer:uglify'],
      // }
    }
  })

  // LOAD GRUNT PLUGINS ========================================================
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-browser-sync');

  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserSync', 'watch']);
}