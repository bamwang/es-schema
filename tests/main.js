var assert = require('chai').assert;
var schemaHelper = require('../libs/main');
describe('strict binder', () => {
  const binder = new schemaHelper.Binder(schemaHelper.Binder.strict, false);
  const zero = 0;
  const blank = '';
  const fal = false;
  const num = 1;
  const str = 'www';
  const bool = true;
  const eobj = {};
  const earr = [];
  const obj = {a: 2, b: null};
  const objStr = {a: "t", b: null};
  const arr = [1, 3];
  const arrStr = ["t", "s"];
  const arrMixed = ["t", 1];
  const nul = null;
  const und = undefined;
  const func = () => { };
  describe('bind to string', () => {
    const modelSample = 'test';
    const modelConstructor = String;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should return it blank itself', () => {
      assert.equal(binder.bind(blank, modelSample), blank);
      assert.equal(binder.bind(blank, modelConstructor), blank);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should return it string itself', () => {
      assert.equal(binder.bind(str, modelSample), str);
      assert.equal(binder.bind(str, modelConstructor), str);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to number', () => {
    const modelSample = 2333;
    const modelConstructor = Number;
    it('should return zero itself', () => {
      assert.equal(binder.bind(zero, modelSample), zero);
      assert.equal(binder.bind(zero, modelConstructor), zero);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should return number itself', () => {
      assert.equal(binder.bind(num, modelSample), num);
      assert.equal(binder.bind(num, modelConstructor), num);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to boolean', () => {
    const modelSample = true;
    const modelConstructor = Boolean;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should return false itself', () => {
      assert.equal(binder.bind(fal, modelSample), fal);
      assert.equal(binder.bind(fal, modelConstructor), fal);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should return boolean itself', () => {
      assert.equal(binder.bind(bool, modelSample), bool);
      assert.equal(binder.bind(bool, modelConstructor), bool);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array', () => {
    const modelSample = [];
    const modelConstructor = Array;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should return array itself', () => {
      assert.deepEqual(binder.bind(arr, modelSample), arr);
      assert.deepEqual(binder.bind(arr, modelConstructor), arr);
    });
    it('should return mixed array itself', () => {
      assert.deepEqual(binder.bind(arrMixed, modelSample), arrMixed);
      assert.deepEqual(binder.bind(arrMixed, modelConstructor), arrMixed);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array with type', () => {
    const modelSample = [String];
    const modelConstructor = ['www'];
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with wrong type', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with mixed type', () => {
      assert.throws(() => binder.bind(arrMixed, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arrMixed, modelConstructor), schemaHelper.BindError);
    });
    it('should return array with correct type', () => {
      assert.deepEqual(binder.bind(arrStr, modelSample), arrStr);
      assert.deepEqual(binder.bind(arrStr, modelConstructor), arrStr);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object', () => {
    const modelSample = {};
    const modelConstructor = Object;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty object itself', () => {
      assert.deepEqual(binder.bind(eobj, modelSample), eobj);
      assert.deepEqual(binder.bind(eobj, modelConstructor), eobj);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should return object itself', () => {
      assert.deepEqual(binder.bind(obj, modelSample), obj);
      assert.deepEqual(binder.bind(obj, modelConstructor), obj);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul); // todo
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object with struct', () => {
    const modelSample = {
      a: 3
    };
    const modelConstructor = {
      a: Number
    };
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object with wrong type', () => {
      assert.throws(() => binder.bind(objStr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(objStr, modelConstructor), schemaHelper.BindError);
    });
    it('should return object without undefined property in model', () => {
      const b1 = binder.bind(obj, modelSample);
      const b2 = binder.bind(obj, modelConstructor);
      assert.equal(b1.a, obj.a);
      assert.equal(b2.a, obj.a);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul);
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });
});

describe('fillWithDefault binder', () => {
  const binder = new schemaHelper.Binder(schemaHelper.Binder.fillWithDefault, false);
  const zero = 0;
  const blank = '';
  const fal = false;
  const num = 1;
  const str = 'www';
  const bool = true;
  const eobj = {};
  const earr = [];
  const obj = {a: 2, b: null};
  const objStr = {a: "t", b: null};
  const arr = [1, 3];
  const arrStr = ["t", "s"];
  const arrMixed = ["t", 1];
  const nul = null;
  const und = undefined;
  const func = () => { };
  describe('bind to string', () => {
    const modelSample = 'test';
    const modelConstructor = String;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should return it blank itself', () => {
      assert.equal(binder.bind(blank, modelSample), blank);
      assert.equal(binder.bind(blank, modelConstructor), blank);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should return it string itself', () => {
      assert.equal(binder.bind(str, modelSample), str);
      assert.equal(binder.bind(str, modelConstructor), str);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return sample/blank', () => {
      assert.equal(binder.bind(und, modelSample), modelSample);
      assert.equal(binder.bind(und, modelConstructor), blank);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to number', () => {
    const modelSample = 2333;
    const modelConstructor = Number;
    it('should return zero itself', () => {
      assert.equal(binder.bind(zero, modelSample), zero);
      assert.equal(binder.bind(zero, modelConstructor), zero);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should return number itself', () => {
      assert.equal(binder.bind(num, modelSample), num);
      assert.equal(binder.bind(num, modelConstructor), num);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return sample/zero', () => {
      assert.equal(binder.bind(und, modelSample), modelSample);
      assert.equal(binder.bind(und, modelConstructor), zero);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to boolean', () => {
    const modelSample = true;
    const modelConstructor = Boolean;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should return false itself', () => {
      assert.equal(binder.bind(fal, modelSample), fal);
      assert.equal(binder.bind(fal, modelConstructor), fal);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should return boolean itself', () => {
      assert.equal(binder.bind(bool, modelSample), bool);
      assert.equal(binder.bind(bool, modelConstructor), bool);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return sample/false when input is undefined', () => {
      assert.equal(binder.bind(und, modelSample), modelSample);
      assert.equal(binder.bind(und, modelConstructor), fal);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array', () => {
    const modelSample = [];
    const modelConstructor = Array;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should return array itself', () => {
      assert.deepEqual(binder.bind(arr, modelSample), arr);
      assert.deepEqual(binder.bind(arr, modelConstructor), arr);
    });
    it('should return mixed array itself', () => {
      assert.deepEqual(binder.bind(arrMixed, modelSample), arrMixed);
      assert.deepEqual(binder.bind(arrMixed, modelConstructor), arrMixed);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array when input is undefined', () => {
      assert.deepEqual(binder.bind(und, modelSample), earr);
      assert.deepEqual(binder.bind(und, modelConstructor), earr);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array with type', () => {
    const modelSample = [String];
    const modelConstructor = ['www'];
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with wrong type', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with mixed type', () => {
      assert.throws(() => binder.bind(arrMixed, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arrMixed, modelConstructor), schemaHelper.BindError);
    });
    it('should return array with correct type', () => {
      assert.deepEqual(binder.bind(arrStr, modelSample), arrStr);
      assert.deepEqual(binder.bind(arrStr, modelConstructor), arrStr);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array', () => {
      assert.deepEqual(binder.bind(und, modelSample), earr);
      assert.deepEqual(binder.bind(und, modelConstructor), earr);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object', () => {
    const modelSample = {};
    const modelConstructor = Object;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty object itself', () => {
      assert.deepEqual(binder.bind(eobj, modelSample), eobj);
      assert.deepEqual(binder.bind(eobj, modelConstructor), eobj);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should return object itself', () => {
      assert.deepEqual(binder.bind(obj, modelSample), obj);
      assert.deepEqual(binder.bind(obj, modelConstructor), obj);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul);
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should return null when input is undefined', () => {
      assert.deepEqual(binder.bind(und, modelSample), nul);
      assert.deepEqual(binder.bind(und, modelConstructor), nul);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object with struct', () => {
    const modelSample = {
      a: 3
    };
    const modelConstructor = {
      a: Number
    };
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should return sample object/default when input is empty object', () => { // todo check mixed
      assert.deepEqual(binder.bind(eobj, modelSample), modelSample);
      assert.deepEqual(binder.bind(eobj, modelConstructor), {a: 0});
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object with wrong type', () => {
      assert.throws(() => binder.bind(objStr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(objStr, modelConstructor), schemaHelper.BindError);
    });
    it('should return object without undefined property in model', () => {
      const b1 = binder.bind(obj, modelSample);
      const b2 = binder.bind(obj, modelConstructor);
      assert.equal(b1.a, obj.a);
      assert.equal(b2.a, obj.a);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself when input is null', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul);
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should return null when input is undefined', () => {
      assert.deepEqual(binder.bind(und, modelSample), nul);
      assert.deepEqual(binder.bind(und, modelConstructor), nul);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });
});

describe('ignore binder', () => {
  const binder = new schemaHelper.Binder(schemaHelper.Binder.ignoreUndefined, false);
  const zero = 0;
  const blank = '';
  const fal = false;
  const num = 1;
  const str = 'www';
  const bool = true;
  const eobj = {};
  const earr = [];
  const obj = {a: 2, b: null};
  const objStr = {a: "t", b: null};
  const arr = [1, 3];
  const arrStr = ["t", "s"];
  const arrMixed = ["t", 1];
  const nul = null;
  const und = undefined;
  const func = () => { };
  describe('bind to string', () => {
    const modelSample = 'test';
    const modelConstructor = String;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should return it blank itself', () => {
      assert.equal(binder.bind(blank, modelSample), blank);
      assert.equal(binder.bind(blank, modelConstructor), blank);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should return it string itself', () => {
      assert.equal(binder.bind(str, modelSample), str);
      assert.equal(binder.bind(str, modelConstructor), str);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return undefined itself', () => {
      assert.equal(binder.bind(und, modelSample), undefined);
      assert.equal(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to number', () => {
    const modelSample = 2333;
    const modelConstructor = Number;
    it('should return zero itself', () => {
      assert.equal(binder.bind(zero, modelSample), zero);
      assert.equal(binder.bind(zero, modelConstructor), zero);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should return number itself', () => {
      assert.equal(binder.bind(num, modelSample), num);
      assert.equal(binder.bind(num, modelConstructor), num);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return undefined itself', () => {
      assert.equal(binder.bind(und, modelSample), undefined);
      assert.equal(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to boolean', () => {
    const modelSample = true;
    const modelConstructor = Boolean;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should return false itself', () => {
      assert.equal(binder.bind(fal, modelSample), fal);
      assert.equal(binder.bind(fal, modelConstructor), fal);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should return boolean itself', () => {
      assert.equal(binder.bind(bool, modelSample), bool);
      assert.equal(binder.bind(bool, modelConstructor), bool);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return undefined itself', () => {
      assert.equal(binder.bind(und, modelSample), undefined);
      assert.equal(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array', () => {
    const modelSample = [];
    const modelConstructor = Array;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array itself', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should return array itself', () => {
      assert.deepEqual(binder.bind(arr, modelSample), arr);
      assert.deepEqual(binder.bind(arr, modelConstructor), arr);
    });
    it('should return mixed array itself', () => {
      assert.deepEqual(binder.bind(arrMixed, modelSample), arrMixed);
      assert.deepEqual(binder.bind(arrMixed, modelConstructor), arrMixed);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return undefined itself', () => {
      assert.deepEqual(binder.bind(und, modelSample), undefined);
      assert.deepEqual(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array with type', () => {
    const modelSample = [String];
    const modelConstructor = ['www'];
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array itself', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with wrong type', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with mixed type', () => {
      assert.throws(() => binder.bind(arrMixed, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arrMixed, modelConstructor), schemaHelper.BindError);
    });
    it('should return array itself when type is correct', () => {
      assert.deepEqual(binder.bind(arrStr, modelSample), arrStr);
      assert.deepEqual(binder.bind(arrStr, modelConstructor), arrStr);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should return undefined itself', () => {
      assert.deepEqual(binder.bind(und, modelSample), undefined);
      assert.deepEqual(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object', () => {
    const modelSample = {};
    const modelConstructor = Object;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty object itself', () => {
      assert.deepEqual(binder.bind(eobj, modelSample), eobj);
      assert.deepEqual(binder.bind(eobj, modelConstructor), eobj);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should return object itself', () => {
      assert.deepEqual(binder.bind(obj, modelSample), obj);
      assert.deepEqual(binder.bind(obj, modelConstructor), obj);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul);
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should return undefined itself', () => {
      assert.deepEqual(binder.bind(und, modelSample), undefined);
      assert.deepEqual(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object with struct', () => {
    const modelSample = {
      a: 3
    };
    const modelConstructor = {
      a: Number
    };
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty object itself', () => {
      assert.deepEqual(binder.bind(eobj, modelSample), eobj);
      assert.deepEqual(binder.bind(eobj, modelConstructor), eobj);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object with wrong type', () => {
      assert.throws(() => binder.bind(objStr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(objStr, modelConstructor), schemaHelper.BindError);
    });
    it('should return object without undefined property in model', () => {
      const b1 = binder.bind(obj, modelSample);
      const b2 = binder.bind(obj, modelConstructor);
      assert.equal(b1.a, obj.a);
      assert.equal(b2.a, obj.a);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul);
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should return undefined itself', () => {
      assert.deepEqual(binder.bind(und, modelSample), undefined);
      assert.deepEqual(binder.bind(und, modelConstructor), undefined);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });
});

describe('strict binder with own property', () => {
  const binder = new schemaHelper.Binder(schemaHelper.Binder.strict, true);
  const zero = 0;
  const blank = '';
  const fal = false;
  const num = 1;
  const str = 'www';
  const bool = true;
  const eobj = {};
  const earr = [];
  const obj = {a: 2, b: null};
  const objStr = {a: "t", b: null};
  const arr = [1, 3];
  const arrStr = ["t", "s"];
  const arrMixed = ["t", 1];
  const nul = null;
  const und = undefined;
  const func = () => { };
  describe('bind to string', () => {
    const modelSample = 'test';
    const modelConstructor = String;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should return it blank itself', () => {
      assert.equal(binder.bind(blank, modelSample), blank);
      assert.equal(binder.bind(blank, modelConstructor), blank);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should return it string itself', () => {
      assert.equal(binder.bind(str, modelSample), str);
      assert.equal(binder.bind(str, modelConstructor), str);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to number', () => {
    const modelSample = 2333;
    const modelConstructor = Number;
    it('should return zero itself', () => {
      assert.equal(binder.bind(zero, modelSample), zero);
      assert.equal(binder.bind(zero, modelConstructor), zero);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should return number itself', () => {
      assert.equal(binder.bind(num, modelSample), num);
      assert.equal(binder.bind(num, modelConstructor), num);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to boolean', () => {
    const modelSample = true;
    const modelConstructor = Boolean;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should return false itself', () => {
      assert.equal(binder.bind(fal, modelSample), fal);
      assert.equal(binder.bind(fal, modelConstructor), fal);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should return boolean itself', () => {
      assert.equal(binder.bind(bool, modelSample), bool);
      assert.equal(binder.bind(bool, modelConstructor), bool);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array', () => {
    const modelSample = [];
    const modelConstructor = Array;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should return array itself', () => {
      assert.deepEqual(binder.bind(arr, modelSample), arr);
      assert.deepEqual(binder.bind(arr, modelConstructor), arr);
    });
    it('should return mixed array itself', () => {
      assert.deepEqual(binder.bind(arrMixed, modelSample), arrMixed);
      assert.deepEqual(binder.bind(arrMixed, modelConstructor), arrMixed);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to array with type', () => {
    const modelSample = [String];
    const modelConstructor = ['www'];
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty array itself', () => {
      assert.deepEqual(binder.bind(earr, modelSample), earr);
      assert.deepEqual(binder.bind(earr, modelConstructor), earr);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object', () => {
      assert.throws(() => binder.bind(obj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(obj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with wrong type', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is array with mixed type', () => {
      assert.throws(() => binder.bind(arrMixed, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arrMixed, modelConstructor), schemaHelper.BindError);
    });
    it('should return array itself if type is correct', () => {
      assert.deepEqual(binder.bind(arrStr, modelSample), arrStr);
      assert.deepEqual(binder.bind(arrStr, modelConstructor), arrStr);
    });
    it('should throw error when input is null', () => {
      assert.throws(() => binder.bind(nul, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(nul, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object', () => {
    const modelSample = {};
    const modelConstructor = Object;
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should return empty object itself', () => {
      assert.deepEqual(binder.bind(eobj, modelSample), eobj);
      assert.deepEqual(binder.bind(eobj, modelConstructor), eobj);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should return object itself', () => {
      assert.deepEqual(binder.bind(obj, modelSample), obj);
      assert.deepEqual(binder.bind(obj, modelConstructor), obj);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul); // todo
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });

  describe('bind to object with struct', () => {
    const modelSample = {
      a: 3
    };
    const modelConstructor = {
      a: Number
    };
    it('should throw error when input is zero', () => {
      assert.throws(() => binder.bind(zero, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(zero, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is blank', () => {
      assert.throws(() => binder.bind(blank, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(blank, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty object', () => {
      assert.throws(() => binder.bind(eobj, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(eobj, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is empty array', () => {
      assert.throws(() => binder.bind(earr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(earr, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is false', () => {
      assert.throws(() => binder.bind(fal, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(fal, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is number', () => {
      assert.throws(() => binder.bind(num, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(num, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is boolean', () => {
      assert.throws(() => binder.bind(bool, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(bool, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is string', () => {
      assert.throws(() => binder.bind(str, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(str, modelConstructor), schemaHelper.BindError);
    });

    it('should throw error when input is object with wrong type', () => {
      assert.throws(() => binder.bind(objStr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(objStr, modelConstructor), schemaHelper.BindError);
    });
    it('should return object with own property in input object', () => {
      const b1 = binder.bind(obj, modelSample);
      const b2 = binder.bind(obj, modelConstructor);
      assert.equal(b1.a, obj.a);
      assert.equal(b2.a, obj.a);
      assert.equal(b1.b, obj.b);
      assert.equal(b2.b, obj.b);
    });
    it('should throw error when input is array', () => {
      assert.throws(() => binder.bind(arr, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(arr, modelConstructor), schemaHelper.BindError);
    });
    it('should retrun null itself', () => {
      assert.deepEqual(binder.bind(nul, modelSample), nul);
      assert.deepEqual(binder.bind(nul, modelConstructor), nul);
    });
    it('should throw error when input is undefined', () => {
      assert.throws(() => binder.bind(und, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(und, modelConstructor), schemaHelper.BindError);
    });
    it('should throw error when input is function', () => {
      assert.throws(() => binder.bind(func, modelSample), schemaHelper.BindError);
      assert.throws(() => binder.bind(func, modelConstructor), schemaHelper.BindError);
    });
  });
});

describe('mixed up test', () => {
  const binder = new schemaHelper.Binder(schemaHelper.Binder.fillWithDefault, true);
  const input = {
    str1: String,
    str2: "test",
    obj: {
      o: Object,
      arr: Array,
      arr2: ['str'],
      arr3: [{a: 2}],
      arr4: [[2]]
    }
  };

  it('should equal to expected', () => {
    const output = binder.bind({
      obj: {
        arr2: ["sss", "23123"],
        arr3: [{}, {}],
        arr4: [[12, 43], [3344, 3344]]
      }
    }, input);
    const expected = {
      str1: "",
      str2: "test",
      obj: {
        o: null,
        arr: [],
        arr2: [
          "sss",
          "23123"
        ],
        arr3: [
          {
            a: 2
          },
          {
            a: 2
          }
        ],
        arr4: [
          [
            12,
            43
          ],
          [
            3344,
            3344
          ]
        ]
      }
    };
    assert.deepEqual(output, expected);
  });
});
