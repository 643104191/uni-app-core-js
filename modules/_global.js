var check = function (it) {
  return it && it.Math == Math && it;
};

var checkEmptyObj = function(it){
  return check(Object.getOwnPropertyNames(it).length ? it : false)
}

var substitution = function(){
  var O = 'object';
  var base = {
    Array: Array,
    Date: Date,
    Function: Function,
    JSON: JSON,
    Math: Math,
    Number: Number,
    Object: Object,
    String: String,
    clearInterval: clearInterval,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    setTimeout: setTimeout
  };
  typeof ArrayBuffer == O && ( base.ArrayBuffer = ArrayBuffer )
  typeof DataView == O && ( base.DataView = DataView )
  typeof Map == O && ( base.Map = Map )
  typeof Promise == O && ( base.Promise = Promise )
  typeof Reflect == O && ( base.Reflect = Reflect )
  typeof RegExp == O && ( base.RegExp = RegExp )
  typeof Set == O && ( base.Set = Set )
  typeof Symbol == O && ( base.Symbol = Symbol )
  typeof TypedArray == O && ( base.TypedArray = TypedArray )
  typeof Int8Array == O && ( base.Int8Array = Int8Array )
  typeof Uint8Array == O && ( base.Uint8Array = Uint8Array )
  typeof Uint8ClampedArray == O && ( base.Uint8ClampedArray = Uint8ClampedArray )
  typeof Int16Array == O && ( base.Int16Array = Int16Array )
  typeof Uint16Array == O && ( base.Uint16Array = Uint16Array )
  typeof Int32Array == O && ( base.Int32Array = Int32Array )
  typeof Uint32Array == O && ( base.Uint32Array = Uint32Array )
  typeof Float32Array == O && ( base.Float32Array = Float32Array )
  typeof Float64Array == O && ( base.Float64Array = Float64Array )
  typeof WeakMap == O && ( base.WeakMap = WeakMap )
  typeof WeakSet == O && ( base.WeakSet = WeakSet )
  return base;
}
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : (checkEmptyObj(Function('return this')()) || substitution());
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
