// umd 兼容 amd commonjs esModule
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.ModuleObj = mod.exports; // 这里的ModuleObj就是你要到处的对象
    }
  })(this, function (exports){
    'use strict';
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ModuleObj; // 这里的ModuleObj就是你要到处的对象
  
    function ModuleObj() {
      return {
        name: "ModuleObj",
        dance: function() { }
      }
    } 
  });