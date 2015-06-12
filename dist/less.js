System.register(["less-versions"], function (_export) {
  "use strict";

  var lessVersions, less, lessInst;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_lessVersions) {
      lessVersions = _lessVersions["default"];
    }],
    execute: function () {
      less = (function () {
        function less() {
          _classCallCheck(this, less);
        }

        _createClass(less, [{
          key: "getVersions",
          value: function getVersions() {
            return lessVersions;
          }
        }, {
          key: "loadVersion",
          value: function loadVersion(version) {
            var url = "//cdnjs.cloudflare.com/ajax/libs/less.js/" + version + "/less.min.js";
            var scriptTag = document.createElement("script");
            scriptTag.src = url;

            delete window.less;
            document.head.appendChild(scriptTag);
          }
        }, {
          key: "convert",
          value: function convert(lessSrc) {
            return window.less.render(lessSrc);
          }
        }]);

        return less;
      })();

      lessInst = new less();

      _export("default", lessInst);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVNLElBQUksRUFpQkosUUFBUTs7Ozs7Ozs7Ozs7QUFqQlIsVUFBSTtpQkFBSixJQUFJO2dDQUFKLElBQUk7OztxQkFBSixJQUFJOztpQkFDRyx1QkFBRztBQUNaLG1CQUFPLFlBQVksQ0FBQztXQUNyQjs7O2lCQUNVLHFCQUFDLE9BQU8sRUFBRTtBQUNuQixnQkFBTSxHQUFHLGlEQUErQyxPQUFPLGlCQUFjLENBQUM7QUFDOUUsZ0JBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQscUJBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUVwQixtQkFBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ25CLG9CQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztXQUN0Qzs7O2lCQUNNLGlCQUFDLE9BQU8sRUFBRTtBQUNmLG1CQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQ3BDOzs7ZUFkRyxJQUFJOzs7QUFpQkosY0FBUSxHQUFHLElBQUksSUFBSSxFQUFFOzt5QkFFbEIsUUFBUSIsImZpbGUiOiJsZXNzLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==