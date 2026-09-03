module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "src/app/store/native.reducer.karma.js",
      "src/app/store/native.reducer.karma.spec.js"
    ],
    reporters: ["progress", "junit"],
    junitReporter: {
      outputDir: "reports/junit",
      outputFile: "karma-test-results.xml",
      useBrowserName: false
    },
    browsers: ["jsdom"],
    singleRun: true,
    restartOnFileChange: false
  });
};
