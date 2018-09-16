// DO WHATEVER YOU WANT HERE
var incrementorCounter = 0;
var asyncIncrementorCounter = 0;
var incrementer = 0;
const createEnumerableProperty = () => { };
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        set: (value) => { propertyName = value },
        get: () => (propertyName),
        enumerable: false
    });
    return propertyName;
};
const createProtoMagicObject = () => { func = function () { }; func.prototype = func.__proto__ = null; return func; };
const incrementor = () => { ++incrementorCounter; return incrementor; };
incrementor.constructor.prototype.toString = () => incrementorCounter;
const asyncIncrementor = () => { return Promise.resolve(++asyncIncrementorCounter) };
const createIncrementer = () => {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next: function () {
            return {
                done: false,
                value: ++incrementer
            }
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param)
        }, 1100)
    })
};
const getDeepPropertiesCount = (array, count = 0) => {
    if (typeof array === 'object') {
        for (key in array) {
            count += 1;
            count += getDeepPropertiesCount(array[key]);
        }
        return count;
    }
};
const createSerializedObject = () => { return null };
const toBuffer = () => { return "Best function" };
const sortByProto = function (arr) {
    return arr.sort(
        (f, s) => {
            let result = countProtos(f) - countProtos(s);
            return result == 0 ? 0 : result > 0 ? -1 : 1
        }
    )
};
function countProtos(obj, count = 0) {
    if (obj.__proto__) {
        return countProtos(obj.__proto__, ++count);
    }
}

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;