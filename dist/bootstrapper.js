System.register(['core-js', 'aurelia-framework', 'aurelia-logging-console'], function (_export) {
  'use strict';

  var core, Aurelia, LogManager, ConsoleAppender, logger, readyQueue, isReady, installedDevelopmentLogging;

  _export('bootstrap', bootstrap);

  function onReady(callback) {
    return new Promise(function (resolve, reject) {
      if (!isReady) {
        readyQueue.push(function () {
          try {
            resolve(callback());
          } catch (e) {
            reject(e);
          }
        });
      } else {
        resolve(callback());
      }
    });
  }

  function bootstrap(configure) {
    return onReady(function () {
      var loader = new window.AureliaLoader(),
          aurelia = new Aurelia(loader);

      return configureAurelia(aurelia).then(function () {
        return configure(aurelia);
      });
    });
  }

  function ready(global) {
    return new Promise(function (resolve, reject) {
      if (global.document.readyState === 'complete') {
        resolve(global.document);
      } else {
        global.document.addEventListener('DOMContentLoaded', completed, false);
        global.addEventListener('load', completed, false);
      }

      function completed() {
        global.document.removeEventListener('DOMContentLoaded', completed, false);
        global.removeEventListener('load', completed, false);
        resolve(global.document);
      }
    });
  }

  function ensureLoader() {
    if (!window.AureliaLoader) {
      if (window.System) {
        return System.normalize('bootstrapper').then(function (bootstrapperName) {
          return System.normalize('aurelia-loader-default', bootstrapperName).then(function (loaderName) {
            return System['import'](loaderName);
          });
        });
      } else if (window.require) {
        return new Promise(function (resolve, reject) {
          require(['aurelia-loader-default'], resolve, reject);
        });
      } else {
        throw new Error('No window.AureliaLoader is defined and there is neither a System API (ES6) or a Require API (AMD) available to load your app.');
      }
    }

    return Promise.resolve();
  }

  function preparePlatform() {
    return System.normalize('bootstrapper').then(function (bootstrapperName) {
      return System.normalize('aurelia-framework', bootstrapperName).then(function (frameworkName) {
        System.map['aurelia-framework'] = frameworkName;

        return System.normalize('aurelia-loader', frameworkName).then(function (loaderName) {
          var toLoad = [];

          if (!System.polyfilled) {
            logger.debug('loading core-js');
            toLoad.push(System.normalize('core-js', loaderName).then(function (name) {
              return System['import'](name);
            }));
          }

          toLoad.push(System.normalize('aurelia-dependency-injection', frameworkName).then(function (name) {
            System.map['aurelia-dependency-injection'] = name;
          }));

          toLoad.push(System.normalize('aurelia-logging-console', bootstrapperName).then(function (name) {
            System.map['aurelia-logging-console'] = name;
          }));

          if (!('import' in document.createElement('link'))) {
            logger.debug('loading the HTMLImports polyfill');
            toLoad.push(System.normalize('webcomponentsjs/HTMLImports.min', loaderName).then(function (name) {
              return System['import'](name);
            }));
          }

          if (!('content' in document.createElement('template'))) {
            logger.debug('loading the HTMLTemplateElement polyfill');
            toLoad.push(System.normalize('aurelia-html-template-element', loaderName).then(function (name) {
              return System['import'](name);
            }));
          }

          return Promise.all(toLoad);
        });
      });
    });
  }

  function configureAurelia(aurelia) {
    return System.normalize('bootstrapper').then(function (bName) {
      var toLoad = [];

      toLoad.push(System.normalize('aurelia-templating-binding', bName).then(function (templatingBinding) {
        aurelia.use.defaultBindingLanguage = function () {
          aurelia.use.plugin(templatingBinding);
          return this;
        };
      }));

      toLoad.push(System.normalize('aurelia-templating-resources', bName).then(function (name) {
        System.map['aurelia-templating-resources'] = name;
        aurelia.use.defaultResources = function () {
          aurelia.use.plugin(name);
          return this;
        };
      }));

      toLoad.push(System.normalize('aurelia-event-aggregator', bName).then(function (eventAggregator) {
        System.map['aurelia-event-aggregator'] = eventAggregator;
        aurelia.use.eventAggregator = function () {
          aurelia.use.plugin(eventAggregator);
          return this;
        };
      }));

      aurelia.use.standardConfiguration = function () {
        aurelia.use.defaultBindingLanguage().defaultResources().eventAggregator();
        return this;
      };

      aurelia.use.developmentLogging = function () {
        if (!installedDevelopmentLogging) {
          installedDevelopmentLogging = true;
          LogManager.addAppender(new ConsoleAppender());
          LogManager.setLevel(LogManager.logLevel.debug);
        }
        return this;
      };

      return Promise.all(toLoad);
    });
  }

  function runningLocally() {
    return window.location.protocol !== 'http' && window.location.protocol !== 'https';
  }

  function handleApp(appHost) {
    var configModuleId = appHost.getAttribute('aurelia-app'),
        aurelia,
        loader;

    if (configModuleId) {
      loader = new window.AureliaLoader();

      return loader.loadModule(configModuleId).then(function (m) {
        aurelia = new Aurelia(loader);
        aurelia.host = appHost;
        return configureAurelia(aurelia).then(function () {
          return m.configure(aurelia);
        });
      });
    } else {
      aurelia = new Aurelia();
      aurelia.host = appHost;

      return configureAurelia(aurelia).then(function () {
        if (runningLocally()) {
          aurelia.use.developmentLogging();
        }

        aurelia.use.standardConfiguration();

        return aurelia.start().then(function (a) {
          return a.setRoot();
        });
      });
    }
  }

  function run() {
    return ready(window).then(function (doc) {
      var appHost = doc.querySelectorAll('[aurelia-app]');

      return ensureLoader().then(function () {
        return preparePlatform().then(function () {
          var i, ii;

          for (i = 0, ii = appHost.length; i < ii; ++i) {
            handleApp(appHost[i]);
          }

          isReady = true;
          for (i = 0, ii = readyQueue.length; i < ii; ++i) {
            readyQueue[i]();
          }
          readyQueue = [];
        });
      });
    });
  }

  return {
    setters: [function (_coreJs) {
      core = _coreJs['default'];
    }, function (_aureliaFramework) {
      Aurelia = _aureliaFramework.Aurelia;
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      logger = LogManager.getLogger('bootstrapper');
      readyQueue = [];
      isReady = false;
      installedDevelopmentLogging = false;
      run();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2YsZUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDL0Msc0JBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1dBQ2pCO0FBQ0Qsb0JBQVUsR0FBRyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0dBQ0o7Ozs7OztrQ0E1Tk8sT0FBTztxQ0FBRSxVQUFVOzsrQ0FDbkIsZUFBZTs7O0FBRW5CLFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztBQUU3QyxnQkFBVSxHQUFHLEVBQUU7QUFDZixhQUFPLEdBQUcsS0FBSztBQTZHZixpQ0FBMkIsR0FBRyxLQUFLO0FBMkd2QyxTQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJib290c3RyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9