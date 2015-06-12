System.register(['./less'], function (_export) {
  'use strict';

  var less, Main;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_less) {
      less = _less['default'];
    }],
    execute: function () {
      Main = (function () {
        function Main() {
          _classCallCheck(this, Main);

          var lessVersions = less.getVersions();
          this.lessVersion = lessVersions[lessVersions.length - 1];
          less.loadVersion(this.lessVersion);
        }

        _createClass(Main, [{
          key: 'lessSrc',
          get: function () {
            return this._lessSrc;
          },
          set: function (value) {
            var _this = this;

            this._lessSrc = value;
            less.convert(value).then(function (cssResp) {
              _this.css = cssResp.css;
            });
          }
        }]);

        return Main;
      })();

      _export('Main', Main);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1lBRWEsSUFBSTs7Ozs7Ozs7Ozs7QUFBSixVQUFJO0FBQ0osaUJBREEsSUFBSSxHQUNEO2dDQURILElBQUk7O0FBRWIsY0FBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3hDLGNBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekQsY0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEM7O3FCQUxVLElBQUk7O2VBTUosWUFBRztBQUNaLG1CQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7V0FDdEI7ZUFDVSxVQUFDLEtBQUssRUFBRTs7O0FBQ2pCLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDaEIsSUFBSSxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBQ2pCLG9CQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ3hCLENBQUMsQ0FBQztXQUNOOzs7ZUFmVSxJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==