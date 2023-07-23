module.exports = grunt => {

    grunt.initConfig({
        
        concat: {
            css: {
                src: [
                    './assets/css/header.css',
                    './assets/css/section.css',
                    './assets/css/footer.css'
                ],
                dest: './dist/all.css'
            },
            js: {
                src: [
                    './assets/js/site.js',
                    './assets/js/utils.js'
                ],
                dest: './dist/all.js'
            }
        },

        compass: {
            default: { 
                options: {
                    config: 'sass/default-theme/default-theme.rb',
                    cssDir: 'assets/css/'
                }
            },
        },

        cssmin: {
            styles: {
                files: {
                    './dist/all.min.css': ['./dist/all.css']
                }
            }
        },

        uglify: {
            functions: {
                files: {
                    './dist/all.min.js': ['./dist/all.js']
                }
            }
        },

        watch: {
            
            css: {
                files: ['./assets/css/*.css'],
                tasks: ['concat:css', 'cssmin']
            },

            js: {
                files: './assets/js/*.js',
                tasks: ['concat:js', 'uglify']
            }

        }

    })

    grunt.loadNpmTasks("grunt-contrib-concat")
    grunt.loadNpmTasks("grunt-contrib-cssmin")
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks('grunt-contrib-compass')

    grunt.registerTask('default', ['watch','compass'])

    grunt.registerTask('style', ['cssmin','concat:css'])

    grunt.registerTask('script', ['concat:js','uglify'])


}