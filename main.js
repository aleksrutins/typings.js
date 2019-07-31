var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var typings;
(function (typings) {
    // Type mappings. Key is type name, value is a function that:
    // Returns true if x is of the key type
    // Returns false otherwise.
    // And a function that creates the type.
    var types = new Map([
        ["int", [function (x) { return Number.isInteger(x); }, function () { return 0; }]],
        ["string", [function (x) { return typeof x === "string"; }, function () { return ""; }]],
        ["float", [function (x) { return !isNaN(parseFloat(x)); }, function () { return 0.0; }]],
        ["bool", [function (x) { return typeof x === "boolean"; }, function () { return false; }]]
    ]);
    //create a typed variable. type is the type name or constructor, and value is the value.
    function createTypedVar(tipe, value) {
        var _val = value;
        var res = function () {
            if (arguments.length >= 1) {
                if (!typeCheck(tipe, arguments[0])) {
                    throw new TypeError("Expected type: " + tipe + ", got: " + typeof arguments[0]);
                }
                else {
                    _val = arguments[0];
                }
                return;
            }
            return _val;
        };
        return res;
    }
    typings.createTypedVar = createTypedVar;
    function createGenericClass(genArgs, proto) {
        var res = function () {
            var e_1, _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var i = 0;
            var typeArgs = {};
            try {
                for (var genArgs_1 = __values(genArgs), genArgs_1_1 = genArgs_1.next(); !genArgs_1_1.done; genArgs_1_1 = genArgs_1.next()) {
                    var arg = genArgs_1_1.value;
                    typeArgs[arg] = args[i++];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (genArgs_1_1 && !genArgs_1_1.done && (_a = genArgs_1["return"])) _a.call(genArgs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var res = function () {
                var _a;
                var __this__ = proto(typeArgs);
                (_a = proto(typeArgs)).constructor.apply(_a, __spread([__this__], arguments));
                return __this__;
            };
            res.prototype = proto(typeArgs);
            return res;
        };
        return res;
    }
    typings.createGenericClass = createGenericClass;
    function typeCheck(tipe, obj) {
        if (typeof tipe === "string") {
            return types.get(tipe)[0](obj);
        }
        else {
            return obj instanceof tipe;
        }
    }
    typings.typeCheck = typeCheck;
    function instantiate(tipe) {
        return typeof tipe === "string"
            ? types.get(tipe)[1]()
            : new tipe();
    }
    typings.instantiate = instantiate;
})(typings || (typings = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBVSxPQUFPLENBbUVoQjtBQW5FRCxXQUFVLE9BQU87SUFJZiw2REFBNkQ7SUFDN0QsdUNBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsSUFBTSxLQUFLLEdBQTRCLElBQUksR0FBRyxDQUFxQjtRQUNqRSxDQUFDLEtBQUssRUFBRSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsRUFBRSxjQUFNLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQXJCLENBQXFCLEVBQUUsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLEVBQUUsY0FBTSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDLE1BQU0sRUFBRSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUF0QixDQUFzQixFQUFFLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDLENBQUM7S0FDckQsQ0FBQyxDQUFDO0lBQ0gsd0ZBQXdGO0lBQ3hGLFNBQWdCLGNBQWMsQ0FDNUIsSUFBaUIsRUFDakIsS0FBUTtRQUVSLElBQUksSUFBSSxHQUFNLEtBQUssQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRztZQUNSLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsQyxNQUFNLElBQUksU0FBUyxDQUNqQixpQkFBaUIsR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUMzRCxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO2dCQUNELE9BQU87YUFDUjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBbkJlLHNCQUFjLGlCQW1CN0IsQ0FBQTtJQUNELFNBQWdCLGtCQUFrQixDQUNoQyxPQUFpQixFQUNqQixLQUE0QjtRQUU1QixJQUFJLEdBQUcsR0FBRzs7WUFBQyxjQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4Qix5QkFBd0I7O1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ2xCLEtBQWdCLElBQUEsWUFBQSxTQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtvQkFBcEIsSUFBSSxHQUFHLG9CQUFBO29CQUNWLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDM0I7Ozs7Ozs7OztZQUNELElBQUksR0FBRyxHQUFHOztnQkFDUixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLENBQUEsS0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQyxXQUFXLHFCQUFDLFFBQVEsR0FBSyxTQUFTLEdBQUU7Z0JBQ3BELE9BQU8sUUFBUSxDQUFDO1lBQ2xCLENBQUMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBbkJlLDBCQUFrQixxQkFtQmpDLENBQUE7SUFDRCxTQUFnQixTQUFTLENBQUksSUFBaUIsRUFBRSxHQUFNO1FBQ3BELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxHQUFHLFlBQXNCLElBQUksQ0FBQztTQUN0QztJQUNILENBQUM7SUFOZSxpQkFBUyxZQU14QixDQUFBO0lBQ0QsU0FBZ0IsV0FBVyxDQUFJLElBQWlCO1FBQzlDLE9BQU8sT0FBTyxJQUFJLEtBQUssUUFBUTtZQUM3QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixDQUFDLENBQUMsSUFBMEIsSUFBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUplLG1CQUFXLGNBSTFCLENBQUE7QUFDSCxDQUFDLEVBbkVTLE9BQU8sS0FBUCxPQUFPLFFBbUVoQiJ9