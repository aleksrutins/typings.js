# typings.js
A typing system for JavaScript that ACTUALLY WORKS!

## Getting Started
To use typings.js, just include `main.js` in your HTML.
```html
...
<script src="/path/to/typings.js/main.js"></script>
...
```
## The `typings` object
The namespace for typings.js is called `typings`. It has the following interface:
```WebIDL
namespace typings {
  //TypeName<T> is a string or a constructor.
  //BasicConstructor<T> is a constructor.
  //ClassProtoConstructor is a function that takes in an object of generic types with string keys and TypeName<any> values.
  callback Observable<T> = T?(optional T? val);
  Observable<T> createTypedVar<T extends Object>(TypeName<T> tipe, T value);
  
}
```
