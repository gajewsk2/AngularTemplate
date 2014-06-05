/**
 * Created by gajewsm on 6/3/2014.
 */
//exports.config = {
//
//    specs: ['test/e2e/*_test.js'],
//    baseUrl: 'http://localhost:9001' //default test port with Yeoman
//}

exports.config = {
//    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:63342/yeoman%20angularjs/app/index.html#/',
    specs: [
//        'test/spec/e2e/scenarios.test.js'
        'C:/Users/gajewsm/yeoman angularjs/test/spec/e2e/scenarios.test.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,

//    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine'

//    jasmineNodeOpts: {
//        defaultTimeoutInterval: 30000
//    }
};