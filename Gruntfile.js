module.exports = function (grunt) {
    var sourceFilenames = [
        'lib/jquery/jquery.min.js',
        'js/Build/Minifier/basic.js',
        'lib/excanvas/excanvas.js',
        'js/Build/Minifier/simile-ajax-basic.js',
        'lib/simile/ajax/scripts/platform.js',
        'lib/simile/ajax/scripts/debug.js',
        'lib/simile/ajax/scripts/xmlhttp.js',
        'lib/simile/ajax/scripts/json.js',
        'lib/simile/ajax/scripts/dom.js',
        'lib/simile/ajax/scripts/graphics.js',
        'lib/simile/ajax/scripts/date-time.js',
        'lib/simile/ajax/scripts/string.js',
        'lib/simile/ajax/scripts/html.js',
        'lib/simile/ajax/scripts/data-structure.js',
        'lib/simile/ajax/scripts/units.js',
        'lib/simile/ajax/scripts/ajax.js',
        'lib/simile/ajax/scripts/history.js',
        'lib/simile/ajax/scripts/window-manager.js',
        'js/Build/Minifier/timeline-basic.js',
        'lib/simile/timeline/timeline-api.js',
        'lib/simile/timeline/scripts/timeline.js',
        'lib/simile/timeline/scripts/band.js',
        'lib/simile/timeline/scripts/themes.js',
        'lib/simile/timeline/scripts/ethers.js',
        'lib/simile/timeline/scripts/ether-painters.js',
        'lib/simile/timeline/scripts/event-utils.js',
        'lib/simile/timeline/scripts/labellers.js',
        'lib/simile/timeline/scripts/sources.js',
        'lib/simile/timeline/scripts/original-painter.js',
        'lib/simile/timeline/scripts/detailed-painter.js',
        'lib/simile/timeline/scripts/overview-painter.js',
        'lib/simile/timeline/scripts/compact-painter.js',
        'lib/simile/timeline/scripts/decorators.js',
        'lib/simile/timeline/scripts/units.js',
        'lib/simile/timeline/scripts/l10n/en/timeline.js',
        'lib/simile/timeline/scripts/l10n/en/labellers.js',
        'js/Build/Minifier/timeplot-basic.js',
        'lib/simile/timeplot/timeplot-api.js',
        'lib/simile/timeplot/scripts/timeplot.js',
        'lib/simile/timeplot/scripts/plot.js',
        'lib/simile/timeplot/scripts/sources.js',
        'lib/simile/timeplot/scripts/geometry.js',
        'lib/simile/timeplot/scripts/color.js',
        'lib/simile/timeplot/scripts/math.js',
        'lib/simile/timeplot/scripts/processor.js',
        'lib/slider/js/range.js',
        'lib/slider/js/slider.js',
        'lib/slider/js/timer.js',
        'js/Time/SimileTimeplotModify.js',
        'lib/openlayers/OpenLayers.js',
        'js/Util/Tooltips.js',
        'js/GeoTemConfig.js',
        'js/Map/MapControl.js',
        'js/Map/CircleObject.js',
        'js/Util/FilterBar.js',
        'js/Util/Selection.js',
        'js/Map/PlacenameTags.js',
        'js/Map/MapConfig.js',
        'js/Map/MapGui.js',
        'js/Map/MapWidget.js',
        'js/Time/TimeConfig.js',
        'js/Time/TimeGui.js',
        'js/Time/TimeWidget.js',
        'js/Table/TableConfig.js',
        'js/Table/TableGui.js',
        'js/Table/TableWidget.js',
        'js/Table/Table.js',
        'js/Util/DataObject.js',
        'js/Util/Dataset.js',
        'js/Time/TimeDataSource.js',
        'js/Map/Binning.js',
        'js/Map/MapDataSource.js',
        'js/Map/Clustering.js',
        'js/Util/Dropdown.js',
        'js/Map/MapZoomSlider.js',
        'js/Map/MapPopup.js',
        'js/Map/PlacenamePopup.js',
        'js/Util/Publisher.js',
        'js/Util/WidgetWrapper.js',
        'js/Build/Minifier/final.js'
    ];

    // configure the tasks
    grunt.initConfig({

        copy: {
            main: {
                cwd: '.',
                src: sourceFilenames,
                dest: 'build',
                expand: true
            }
        },

        clean: {
            main: {
                src: ['build']
            }
        },

        uglify: {
            main: {
                options: {
                    mangle: true,
                    compress: false,
                    beautify: true,
                    preserveComments: 'all'
                },
                files: {
                    'build/geotemco.js': sourceFilenames.map(function(filename) {
                        return 'build/' + filename;
                    })
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
        ['clean', 'copy', 'uglify']
    );

};