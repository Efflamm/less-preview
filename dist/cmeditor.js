System.register(['aurelia-framework', 'codemirror', 'codemirror/mode/css/css'], function (_export) {
  'use strict';

  var customElement, bindable, CodeMirror, cmeditor;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_codemirror) {
      CodeMirror = _codemirror['default'];
    }, function (_codemirrorModeCssCss) {}],
    execute: function () {
      cmeditor = (function () {
        var _instanceInitializers = {};

        function cmeditor() {
          _classCallCheck(this, _cmeditor);

          _defineDecoratedPropertyDescriptor(this, 'readonly', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);
        }

        var _cmeditor = cmeditor;

        _createDecoratedClass(_cmeditor, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            this.codeMirror = CodeMirror.fromTextArea(this.cmTextarea, {
              lineNumbers: true,
              matchBrackets: true,
              mode: 'text/x-less',
              theme: 'lesser-dark',
              readOnly: this.readonly
            });
            this.codeMirror.setValue(this.value || '');
            this.codeMirror.on('change', function (codeMirror, changeObj) {
              var newValue = codeMirror.getValue();
              if (newValue !== _this.value) {
                _this.value = newValue;
              }
            });
          }
        }, {
          key: 'valueChanged',
          value: function valueChanged(newValue, oldValue) {
            if (this.codeMirror && newValue !== this.codeMirror.getValue()) {
              this.codeMirror.setValue(newValue);
            }
          }
        }, {
          key: 'readonly',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        cmeditor = customElement('cmeditor')(cmeditor) || cmeditor;
        return cmeditor;
      })();

      _export('cmeditor', cmeditor);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQ0FNYSxRQUFROzs7Ozs7Ozs7O3dDQU5iLGFBQWE7bUNBQUUsUUFBUTs7Ozs7QUFNbEIsY0FBUTs7O2lCQUFSLFFBQVE7Ozs7Ozs7O3dCQUFSLFFBQVE7Ozs7aUJBSVgsb0JBQUc7OztBQUNULGdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6RCx5QkFBVyxFQUFFLElBQUk7QUFDakIsMkJBQWEsRUFBRyxJQUFJO0FBQ3BCLGtCQUFJLEVBQUUsYUFBYTtBQUNuQixtQkFBSyxFQUFFLGFBQWE7QUFDcEIsc0JBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QixDQUFDLENBQUM7QUFDSCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQyxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBSztBQUN0RCxrQkFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLGtCQUFJLFFBQVEsS0FBSyxNQUFLLEtBQUssRUFBRTtBQUMzQixzQkFBSyxLQUFLLEdBQUcsUUFBUSxDQUFDO2VBQ3ZCO2FBQ0YsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDVyxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQy9CLGdCQUFJLElBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDOUQsa0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1dBQ0Y7Ozt1QkF2QkEsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7QUFGRSxnQkFBUSxHQURwQixhQUFhLENBQUMsVUFBVSxDQUFDLENBQ2IsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJjbWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=