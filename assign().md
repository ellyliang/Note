```js
var createAssigner = function(keysFunc, defaults) {
    return function(obj) { 
        var length = arguments.length;  // 获取arguments的长度

        if(defaults) {                  // 如果defaults为真的话，不管传入什么，强制转化为对象
            obj = Object(obj);
        }

        if(length < 2 || obj == null) { // 如果参数长度小于1或传入的参数为null,则返回obj
            return obj;                 // return obj停止执行下边
        }

        for(var index = 1; index < length; index++) { // 当参数大于2的时候循环
            var source = arguments[index],    // arguments返回的是数组
                keys = keysFunc(source),      // 获取数组中对象的key值
                l = keys.length;              
   
            for(var i = 0; i<l; i++) {
                var key = keys[i];
                
                if(!defaults || obj[key] === void 0) {
                    obj[key] = source[key];
                }
            }
        }
        return obj;
    };
};

var isObject = function(obj) {
    var type = typeof obj;
    if(type === 'function') {
        return true;
    } else if(type === 'object') {
        return true;
    } else {
        return !!obj;
    }
};

function key(source) {
    if(!isObject(source)) {
        return [];
    }
 
    var keys = [];
    for(var key in source) {
        keys.push(key);
    }
    //console.log(keys)
    return keys;
}

var assign = createAssigner(key, 2);
assign({e:3}, {'b': 1, 'c':2, 'd':3});
```
