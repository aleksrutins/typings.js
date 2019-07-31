namespace typings {
  export type TypeName<T> = string | Function;
  type BasicConstructor<T> = () => void;
  type ClassProtoConstructor = (tipes: Object) => Object;
  // Type mappings. Key is type name, value is a function that:
  // Returns true if x is of the key type
  // Returns false otherwise.
  // And a function that creates the type.
  const types: Map<string, Function[]> = new Map<string, Function[]>([
    ["int", [x => Number.isInteger(x), () => 0]],
    ["string", [x => typeof x === "string", () => ""]],
    ["float", [x => !isNaN(parseFloat(x)), () => 0.0]],
    ["bool", [x => typeof x === "boolean", () => false]]
  ]);
  //create a typed variable. type is the type name or constructor, and value is the value.
  export function createTypedVar<T extends object>(
    tipe: TypeName<T>,
    value: T
  ) {
    let _val: T = value;
    let res = function() {
      if (arguments.length >= 1) {
        if (!typeCheck(tipe, arguments[0])) {
          throw new TypeError(
            "Expected type: " + tipe + ", got: " + typeof arguments[0]
          );
        } else {
          _val = arguments[0];
        }
        return;
      }
      return _val;
    };
    return res;
  }
  export function createGenericClass(
    genArgs: string[],
    proto: ClassProtoConstructor
  ) {
    let res = (...args: TypeName<any>[]) => {
      let i = 0;
      var typeArgs = {};
      for (let arg of genArgs) {
        typeArgs[arg] = args[i++];
      }
      let res = function() {
        let __this__ = proto(typeArgs);
        proto(typeArgs).constructor(__this__, ...arguments);
        return __this__;
      };
      res.prototype = proto(typeArgs);
      return res;
    };
    return res;
  }
  export function typeCheck<T>(tipe: TypeName<T>, obj: T): boolean {
    if (typeof tipe === "string") {
      return types.get(<string>tipe)[0](obj);
    } else {
      return obj instanceof <Function>tipe;
    }
  }
  export function instantiate<T>(tipe: TypeName<T>): T {
    return typeof tipe === "string"
      ? types.get(<string>tipe)[1]()
      : new (<BasicConstructor<T>>tipe)();
  }
}
