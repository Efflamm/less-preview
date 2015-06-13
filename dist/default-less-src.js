System.register([], function (_export) {
  "use strict";

  var lessSrc;
  return {
    setters: [],
    execute: function () {
      lessSrc = ".transition(@transition) {\n  -webkit-transition: @transition;\n-moz-transition: @transition;\n-o-transition: @transition;\ntransition: @transition;\n}\n.opacity(@opacity) {\n  opacity: @opacity / 100;\n  filter: ~\"alpha(opacity=@{opacity})\";\n}\n\na {\n.transition(all 0.4s);\n&:hover {\n  .opacity(70);\n  }\n}\n\n// Selector interpolation only works in 1.3.1+. Try it!\n@theGoodThings: ~\".food, .beer, .sleep, .javascript\";\n\n@{theGoodThings} {\n  font-weight: bold;\n}";

      _export("default", lessSrc);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtbGVzcy1zcmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQU0sT0FBTzs7OztBQUFQLGFBQU87O3lCQXlCSixPQUFPIiwiZmlsZSI6ImRlZmF1bHQtbGVzcy1zcmMuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9