'use strict';

const primitiveType = {
  string: true,
  number: true,
  boolean: true,
  undefined: true
};

class BindError extends TypeError {
  constructor(expected, key, actual, mode) {
    super(`BindeError: expected ${expected} @ ${key} but get ${actual} in ${mode.toString()} mode.`);
    this.detail = {expected, key, actual, mode};
  }
}

class ParamError extends Error {
  constructor(expected, actual) {
    super(`ParamError: expected ${expected}, but get ${actual}`);
    this.detail = {expected, actual};
  }
}

class Binder {
  constructor(mode, keepSelfDefined) {
    if ([Binder.ignoreUndefined, Binder.fillWithDefault, Binder.strict].indexOf(mode) === -1) {
      this.mode = Binder.strict;
    }
    this.mode = mode;
    this.keepSelfDefined = keepSelfDefined || false;
  }

  static get ignoreUndefined() {
    return Symbol.for('ignoreUndefined');
  }

  static get fillWithDefault() {
    return Symbol.for('fillWithDefault');
  }

  static get strict() {
    return Symbol.for('strict');
  }

  static get BindError() {
    return BindError;
  }

  static get ParamError() {
    return ParamError;
  }

  analizeModel(model) {
    let type;
    let value;

    if (typeof model === 'function') {
      if ([Number, String, Array, Object, Boolean].indexOf(model) === -1) {
        throw new ParamError(
          'wrong type constructor in Number, String, Array, Object, Boolean',
          model
        );
      }
      type = model.name.toLowerCase();
      switch (type) {
        default:
          value = undefined;
          break;
        case 'number':
          value = 0;
          break;
        case 'string':
          value = '';
          break;
        case 'boolean':
          value = false;
          break;
        case 'array':
          value = [];
          break;
        case 'object':
          value = {};
          break;
      }
    } else {
      type = this.getTypeOf(model);
      value = model;
    }
    if (model === undefined || model === null) {
      throw new ParamError('internal_error', {message: 'null or undefined is not allowed to be a model', data: model});
    }

    return {type, value};
  }

  getTypeOf(input) {
    if (Array.isArray(input)) {
      return 'array';
    }
    return typeof input;
  }

  bind(input, model, keyPrefix) {
    keyPrefix = keyPrefix || '';
    const analizedModel = this.analizeModel(model);
    const defaultValue = analizedModel.value;
    const modelType = analizedModel.type;
    const inputType = this.getTypeOf(input);
    if (typeof input === 'number' && (isNaN(input) || input === Infinity || input === -Infinity)) {
      throw new BindError('non-irregular-number', keyPrefix.substr(1), input, this.mode);
    }
    if (modelType) {
      switch (this.mode) {
        case Binder.strict:
          if (modelType !== inputType) {
            throw new BindError(modelType, keyPrefix.substr(1), input, this.mode);
          }
          break;
        case Binder.ignoreUndefined:
          if (inputType === 'undefined') {
            return undefined;
          }
          if (modelType !== inputType) {
            throw new BindError(modelType, keyPrefix.substr(1), input, this.mode);
          }
          break;
        case Binder.fillWithDefault:
          if (inputType === 'undefined') {
            if (modelType === 'array') {
              input = [];
              break;
            }
            if (modelType === 'object') {
              input = null;
              break;
            }
            input = defaultValue;
            break;
          }
          if (modelType !== inputType) {
            throw new BindError(modelType, keyPrefix.substr(1), input, this.mode);
          }
          break;
        default:
          throw new ParamError('undefined mode', {mode: this.mode});
      }
    }

    if (modelType in primitiveType) {
      return input;
    }

    if (modelType === 'array') {
      if (input.length === 0) {
        return input;
      }
      if (defaultValue.length === 0) {
        return input.slice(0);
      }
      const m = defaultValue[0];
      return input.map((v, i) => this.bind(v, m, `${keyPrefix}.${i}`)).filter(v => v !== undefined);
    }

    if (modelType === 'object') {
      if (input === null) {
        return null;
      }
      if (Object.keys(defaultValue).length === 0) {
        return Object.assign({}, input);
      }
      const binded = {};
      for (const k in defaultValue) {
        const v = this.bind(input[k], defaultValue[k], `${keyPrefix}.${k}`);
        if (v !== undefined) {
          binded[k] = v;
        }
      }
      if (this.keepSelfDefined) {
        for (const k in input) {
          if (!(k in model)) {
            binded[k] = input[k];
          }
        }
      }
      return binded;
    }
  }
}

module.exports = Binder;
