System.register(['less-versions'], function (_export) {
  'use strict';

  var lessVersions, less, lessInst;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lessVersions) {
      lessVersions = _lessVersions['default'];
    }],
    execute: function () {
      less = (function () {
        function less() {
          _classCallCheck(this, less);
        }

        _createClass(less, [{
          key: 'getVersions',
          value: function getVersions() {
            return lessVersions;
          }
        }, {
          key: 'loadVersion',
          value: function loadVersion(version) {
            this.lessPromise = new Promise(function (resolve, reject) {

              var url = '//cdnjs.cloudflare.com/ajax/libs/less.js/' + version + '/less.min.js';
              delete window.less;

              $.getScript(url, function (data, textStatus, jqxhr) {
                resolve(window.less);
              });
            });
            return this.lessPromise;
          }
        }, {
          key: 'convert',
          value: function convert(lessSrc) {
            return this.lessPromise.then(function (less) {
              return less.render(lessSrc);
            });
          }
        }]);

        return less;
      })();

      lessInst = new less();

      _export('default', lessInst);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVNLElBQUksRUF3QkosUUFBUTs7Ozs7Ozs7Ozs7QUF4QlIsVUFBSTtpQkFBSixJQUFJO2dDQUFKLElBQUk7OztxQkFBSixJQUFJOztpQkFDRyx1QkFBRztBQUNaLG1CQUFPLFlBQVksQ0FBQztXQUNyQjs7O2lCQUNVLHFCQUFDLE9BQU8sRUFBRTtBQUNuQixnQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7O0FBRWxELGtCQUFNLEdBQUcsaURBQStDLE9BQU8saUJBQWMsQ0FBQztBQUM5RSxxQkFBTyxNQUFNLENBQUMsSUFBSSxDQUFDOztBQUVuQixlQUFDLENBQUMsU0FBUyxDQUFFLEdBQUcsRUFBRSxVQUFVLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFHO0FBQ3BELHVCQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQ3RCLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztBQUNILG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7V0FDekI7OztpQkFDTSxpQkFBQyxPQUFPLEVBQUU7QUFDZixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUNwQixJQUFJLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDZCxxQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQztXQUNOOzs7ZUFyQkcsSUFBSTs7O0FBd0JKLGNBQVEsR0FBRyxJQUFJLElBQUksRUFBRTs7eUJBRWxCLFFBQVEiLCJmaWxlIjoibGVzcy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=