# typings.js
A typing system for JavaScript that ACTUALLY WORKS!

## Getting Started
To use typings.js, use ES modules to include the main script:
```js
import * as typings from 'typings.js';
// Use the typings object here
```
If you want to use it in your TypeScript code and include the `TypeName<T>` alias as well:
```ts
import * as typings from 'typings.js/main';
```
## Type definition
To save you some poking around, here are the types for everything in the library:
```ts
export type TypeName<T> = string | BasicConstructor<T>;
type BasicConstructor<T> = () => void;
type ClassProtoConstructor = (tipes: Object) => Object;
export function createTypedVar<T extends object>(tipe: TypeName<T>, initialValue: T);
export function createGenericClass(genericArgumentNames: string[], proto: ClassProtoConstructor);
export function typeCheck<T>(tipe: TypeName<T>, obj: T): boolean
export function instantiate<T>(tipe: TypeName<T>): T
```
## Tutorial
Now that you've gotten Typings.js set up, let's go through a tutorial. This assumes that you are using JavaScript.
You can see the full source code at [demo.html](https://github.com/munchkinhalfling/blob/demo/demo.html).