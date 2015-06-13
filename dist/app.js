System.register(['./less', 'bootstrap', './default-less-src'], function (_export) {
  'use strict';

  var less, defaultLessSrc, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_less) {
      less = _less['default'];
    }, function (_bootstrap) {}, function (_defaultLessSrc) {
      defaultLessSrc = _defaultLessSrc['default'];
    }],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);

          var lessVersions = less.getVersions();
          this.lessVersion = lessVersions[lessVersions.length - 1];
          less.loadVersion(this.lessVersion);
          var hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
          var loadedFromHash = false;
          if (hash) {
            try {
              var data = JSON.parse(hash);
              this.lessSrc = data.less;
              loadedFromHash = true;
            } catch (e) {}
          }
          if (!loadedFromHash) {
            this.lessSrc = defaultLessSrc;
          }
        }

        _createClass(App, [{
          key: 'lessSrc',
          get: function () {
            return this._lessSrc;
          },
          set: function (value) {
            var _this = this;

            this._lessSrc = value;
            if (value !== defaultLessSrc) {
              window.location.hash = '#' + encodeURIComponent(JSON.stringify({ less: value }));
            }
            less.convert(value).then(function (cssResp) {
              _this.css = cssResp.css;
            });
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEJBSWEsR0FBRzs7Ozs7Ozs7Ozs7OztBQUFILFNBQUc7QUFDSCxpQkFEQSxHQUFHLEdBQ0E7Z0NBREgsR0FBRzs7QUFFWixjQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEMsY0FBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxjQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyxjQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEUsY0FBSSxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQzNCLGNBQUksSUFBSSxFQUFFO0FBQ1IsZ0JBQUk7QUFDRixrQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLDRCQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCLENBQ0QsT0FBTSxDQUFDLEVBQUUsRUFDUjtXQUNGO0FBQ0QsY0FBSSxDQUFDLGNBQWMsRUFBRTtBQUNuQixnQkFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7V0FDL0I7U0FDRjs7cUJBbkJVLEdBQUc7O2VBb0JILFlBQUc7QUFDWixtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1dBQ3RCO2VBQ1UsVUFBQyxLQUFLLEVBQUU7OztBQUNqQixnQkFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsZ0JBQUksS0FBSyxLQUFLLGNBQWMsRUFBRTtBQUM1QixvQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO0FBQ0QsZ0JBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQ2hCLElBQUksQ0FBQyxVQUFDLE9BQU8sRUFBSztBQUNqQixvQkFBSyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUN4QixDQUFDLENBQUM7V0FDTjs7O2VBaENVLEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=