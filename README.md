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
  //ClassProtoConstructor is a function that takes in an object of generic types with string keys and TypeName<any> values and returns an ES6 class.
  callback Observable<T> = T?(optional T? val);
  Observable<T> createTypedVar<T extends Object>(TypeName<T> tipe, T value);
  any createGenericClass(sequence<string> genArgs, ClassProtoConstructor proto);
  boolean typeCheck<T>(TypeName<T> tipe, T obj);
  T instantiate<T>(TypeName<T> tipe);
}
```
## Tutorial
Now that you've gotten Typings.js set up, let's go through a tutorial. This assumes that you are using JavaScript.<br/>
You can see the full source code at [demo.html](https://github.com/munchkinhalfling/blob/demo/demo.html).<br/>
This tutorial uses the [TemplateElement](https://npmjs.com/package/template-element) library.<br/>
First, create an HTML file. I chose "Typings.js Tutorial", but you can choose your own title.
```html
<!doctype html>
<html>
  <head>
    ...
    <title>...</title>
    ...
  </head>
  <body>
    <div id="main"></div>
    <script>
      // This is where our JavaScript will go.
    </script>
  </body>
</html>
```