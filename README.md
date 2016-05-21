# es-schema

Bind an object to a defined schema.
If type is wrong, it will throw an error.

## Usage
### Defined a schema
```js
const mySchema = {
    use_constructor_function: String,
    use_array_literal: [],
    use_array_literal_with_type: [Number],
    use_object_literal: {},
    use_object_literal_with_definition: {
        use_defined_schema: SubSchema // const SubSchema = String;
    },
    use_a_value_as_default: "es"
};
```
### Write an object
```js
const myData = {
    use_constructor_function: "yes",
    use_array_literal: [1, "mixed is ok"],
    use_array_literal_with_type: [0, 2, /* "other type will be error" */],
    use_object_literal: null, // null is ok
    use_object_literal_with_definition: {},
    self_property: "hello"
};
```
### Generate an instance
```js
const strictBinder = new Schema(Schema.strict, false);
const ignoreBinder = new Schema(Schema.ignoreUndefined, false); // undefined property will be omitted
const fillBinder = new Schema(Schema.fillWithDefault, false); // undefined property will be filled with default value
const extendBinder = new Schema(Schema.fillWithDefault, true); // property not defined in schema will still be append to output

```
### Bind data to schema
```js
const output1 = strictBinder.bind(myData, mySchema);
//TypeError: BindeError: expected string @ use_object_literal_with_definition.use_defined_schema but get undefined in Symbol(strict) mode.

const output2 = ignoreBinder.bind(myData, mySchema);
/*
{ use_constructor_function: 'yes',
  use_array_literal: [ 1, 'mixed is ok' ],
  use_array_literal_with_type: [ 0, 2 ],
  use_object_literal: null,
  use_object_literal_with_definition: {} 
}
*/

const output3 = fillBinder.bind(myData, mySchema);
/*
{ use_constructor_function: 'yes',
  use_array_literal: [ 1, 'mixed is ok' ],
  use_array_literal_with_type: [ 0, 2 ],
  use_object_literal: null,
  use_object_literal_with_definition: { use_defined_schema: '' },
  use_a_value_as_default: 'es' 
}
*/

const output4 = extendBinder.bind(myData, mySchema);
/*
{ use_constructor_function: 'yes',
  use_array_literal: [ 1, 'mixed is ok' ],
  use_array_literal_with_type: [ 0, 2 ],
  use_object_literal: null,
  use_object_literal_with_definition: { use_defined_schema: '' },
  use_a_value_as_default: 'es',
  self_property: 'hello' 
}
*/
```
