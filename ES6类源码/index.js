function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  // superClass要么是函数，要么是null，才能通过
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  // 将原型为superClass原型的新对象替换subClass的原型
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  // 为了让subClass能继承superClass的static属性和方法
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var P = function P(tall) {
  _classCallCheck(this, P);

  this.tall = tall;
};

var Person = /*#__PURE__*/ (function(_P) {
  _inherits(Person, _P);

  var _super = _createSuper(Person);

  function Person(name, tall) {
    var _this;

    _classCallCheck(this, Person);

    _this = _super.call(this, tall);
    _this.name = name;
    return _this;
  }

  _createClass(Person, null, [
    {
      key: 'createGenerator',
      value: /*#__PURE__*/ regeneratorRuntime.mark(function createGenerator() {
        return regeneratorRuntime.wrap(
          function createGenerator$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  console.log(this);
                  _context.next = 3;
                  return 1;

                case 3:
                  _context.next = 5;
                  return 2;

                case 5:
                  return _context.delegateYield(
                    this.createGenerator2(),
                    't0',
                    6
                  );

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          },
          createGenerator,
          this
        );
      })
    },
    {
      key: 'createGenerator2',
      value: /*#__PURE__*/ regeneratorRuntime.mark(function createGenerator2() {
        return regeneratorRuntime.wrap(function createGenerator2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2;
                return 5;

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, createGenerator2);
      })
    }
  ]);

  return Person;
})(P);
