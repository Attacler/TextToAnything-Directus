import { defineOperationApp, useStores, useApi, defineModule, defineInterface } from '@directus/extensions-sdk';
import * as e$1 from 'vue';
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createCommentVNode, ref, createElementBlock, createTextVNode, pushScopeId, popScopeId, createElementVNode, defineComponent, computed, watch, nextTick, onMounted, resolveDirective, toDisplayString, withDirectives, normalizeStyle, unref, Fragment, resolveDynamicComponent, withModifiers, defineModel, isRef, createSlots, renderList, normalizeClass, inject, onBeforeUnmount, reactive, onUnmounted, Teleport, renderSlot } from 'vue';
import { html } from 'js-beautify';

const types = [
  "auspost",
  "azteccode",
  "azteccodecompact",
  "aztecrune",
  "bc412",
  "channelcode",
  "codablockf",
  "code11",
  "code128",
  "code16k",
  "code2of5",
  "code32",
  "code39",
  "code39ext",
  "code49",
  "code93",
  "code93ext",
  "codeone",
  "coop2of5",
  "daft",
  "databarexpanded",
  "databarexpandedcomposite",
  "databarexpandedstacked",
  "databarexpandedstackedcomposite",
  "databarlimited",
  "databarlimitedcomposite",
  "databaromni",
  "databaromnicomposite",
  "databarstacked",
  "databarstackedcomposite",
  "databarstackedomni",
  "databarstackedomnicomposite",
  "databartruncated",
  "databartruncatedcomposite",
  "datalogic2of5",
  "datamatrix",
  "datamatrixrectangular",
  "datamatrixrectangularextension",
  "dotcode",
  "ean13",
  "ean13composite",
  "ean14",
  "ean2",
  "ean5",
  "ean8",
  "ean8composite",
  "flattermarken",
  "gs1-128",
  "gs1-128composite",
  "gs1-cc",
  "gs1datamatrix",
  "gs1datamatrixrectangular",
  "gs1dldatamatrix",
  "gs1dlqrcode",
  "gs1dotcode",
  "gs1northamericancoupon",
  "gs1qrcode",
  "hanxin",
  "hibcazteccode",
  "hibccodablockf",
  "hibccode128",
  "hibccode39",
  "hibcdatamatrix",
  "hibcdatamatrixrectangular",
  "hibcmicropdf417",
  "hibcpdf417",
  "hibcqrcode",
  "iata2of5",
  "identcode",
  "industrial2of5",
  "interleaved2of5",
  "isbn",
  "ismn",
  "issn",
  "itf14",
  "japanpost",
  "kix",
  "leitcode",
  "mailmark",
  "mands",
  "matrix2of5",
  "maxicode",
  "micropdf417",
  "microqrcode",
  "msi",
  "onecode",
  "pdf417",
  "pdf417compact",
  "pharmacode",
  "pharmacode2",
  "planet",
  "plessey",
  "posicode",
  "postnet",
  "pzn",
  "qrcode",
  "rationalizedCodabar",
  "raw",
  "rectangularmicroqrcode",
  "royalmail",
  "sscc18",
  "swissqrcode",
  "symbol",
  "telepen",
  "telepennumeric",
  "ultracode",
  "upca",
  "upcacomposite",
  "upce",
  "upcecomposite"
];
var e0 = defineOperationApp({
  id: "ttabarcode",
  name: "TTA generate barcode",
  icon: "barcode",
  description: "Generate a barcode trough Text to anything!",
  overview: ({ barcodeContent }) => [
    {
      label: "barcode content",
      text: barcodeContent
    }
  ],
  options: [
    {
      field: "barcodeContent",
      name: "content",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "barcodeType",
      name: "type",
      type: "dropdown",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: types.map((e) => ({ text: e, value: e }))
        }
      }
    },
    {
      field: "scale",
      name: "scale",
      type: "number",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "height",
      name: "height",
      type: "number",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "includetext",
      name: "include text",
      type: "boolean",
      meta: {
        width: "full",
        interface: "boolean"
      }
    }
  ]
});

var e1 = defineOperationApp({
  id: "ttapdf",
  name: "TTA generate PDF",
  icon: "picture_as_pdf",
  description: "Generate a PDF trough Text to anything!",
  overview: ({ filename }) => [
    {
      label: "File name",
      text: filename
    }
  ],
  options: [
    {
      field: "filename",
      name: "File name",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "pdfoptions",
      name: "Options",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        options: {
          language: "json",
          placeholder: JSON.stringify(
            {
              html: "<h1>Hello world!</h1>",
              format: "A4",
              landscape: false,
              margin: 10,
              marginRight: 5,
              marginLeft: 5
            },
            null,
            2
          ),
          template: JSON.stringify(
            {
              html: "<h1>Hello world!</h1>",
              format: "A4",
              landscape: false,
              margin: 10,
              marginRight: 5,
              marginLeft: 5
            },
            null,
            2
          )
        }
      }
    }
  ]
});

var e2 = defineOperationApp({
  id: "ttapdftemplate",
  name: "TTA generate PDF from template",
  icon: "picture_as_pdf",
  description: "Generate a PDF based on a template trough Text to anything!",
  overview: ({ filename }) => [
    {
      label: "File name",
      text: filename
    }
  ],
  options: (field) => {
    return [
      {
        field: "filename",
        name: "File name",
        type: "string",
        meta: {
          width: "full",
          interface: "input"
        }
      },
      {
        field: "mode",
        name: "Template source",
        type: "dropdown",
        meta: {
          interface: "select-dropdown",
          options: {
            choices: [
              {
                value: "online",
                text: "TTA Dashboard"
              },
              {
                value: "offline",
                text: "Directus"
              }
            ]
          },
          note: "When selecting 'TTA Dashboard', you will be able to select a template from the TextToAnything dashboard. (https://app.texttoanything.nl)"
        }
      },
      {
        field: "template",
        name: "Template",
        type: "string",
        meta: {
          interface: field.mode == "online" ? "TTA-pdf-online-template-selector" : "TTA-pdf-template-selector",
          options: {}
        }
      },
      {
        field: "templatevariables",
        name: "Template variables",
        type: "json",
        meta: {
          width: "full",
          interface: "input-code",
          options: {
            language: "json"
          }
        }
      }
    ];
  }
});

var e3 = defineOperationApp({
  id: "ttaqrcode",
  name: "TTA generate QRcode",
  icon: "qr_code",
  description: "Generate a QRcode trough Text to anything!",
  overview: ({ content }) => [
    {
      label: "QRCode content",
      text: content
    }
  ],
  options: [
    {
      field: "content",
      name: "QRCode content",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "lightColor",
      name: "Light color",
      type: "string",
      meta: {
        width: "full",
        interface: "select-color"
      }
    },
    {
      field: "darkColor",
      name: "Dark color",
      type: "string",
      meta: {
        width: "full",
        interface: "select-color"
      }
    },
    {
      field: "margin",
      name: "Margin",
      type: "integer",
      meta: {
        width: "half",
        interface: "input"
      }
    },
    {
      field: "width",
      name: "Width",
      type: "integer",
      meta: {
        width: "half",
        interface: "input"
      }
    }
  ]
});

/*
 * liquidjs@10.21.1, https://github.com/harttle/liquidjs
 * (c) 2016-2025 harttle
 * Released under the MIT License.
 */
class Token {
    constructor(kind, input, begin, end, file) {
        this.kind = kind;
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
    }
    getText() {
        return this.input.slice(this.begin, this.end);
    }
    getPosition() {
        let [row, col] = [1, 1];
        for (let i = 0; i < this.begin; i++) {
            if (this.input[i] === '\n') {
                row++;
                col = 1;
            }
            else
                col++;
        }
        return [row, col];
    }
    size() {
        return this.end - this.begin;
    }
}

class Drop {
    liquidMethodMissing(key) {
        return undefined;
    }
}

const toString$1 = Object.prototype.toString;
const toLowerCase = String.prototype.toLowerCase;
const hasOwnProperty = Object.hasOwnProperty;
function isString(value) {
    return typeof value === 'string';
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value) {
    return typeof value === 'function';
}
function isPromise(val) {
    return val && isFunction(val.then);
}
function isIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
}
function escapeRegex(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function stringify(value) {
    value = toValue(value);
    if (isString(value))
        return value;
    if (isNil(value))
        return '';
    if (isArray(value))
        return value.map(x => stringify(x)).join('');
    return String(value);
}
function toEnumerable(val) {
    val = toValue(val);
    if (isArray(val))
        return val;
    if (isString(val) && val.length > 0)
        return [val];
    if (isIterable(val))
        return Array.from(val);
    if (isObject(val))
        return Object.keys(val).map((key) => [key, val[key]]);
    return [];
}
function toArray(val) {
    val = toValue(val);
    if (isNil(val))
        return [];
    if (isArray(val))
        return val;
    return [val];
}
function toValue(value) {
    return (value instanceof Drop && isFunction(value.valueOf)) ? value.valueOf() : value;
}
function toNumber(value) {
    value = Number(value);
    return isNaN(value) ? 0 : value;
}
function isNumber(value) {
    return typeof value === 'number';
}
function toLiquid(value) {
    if (value && isFunction(value.toLiquid))
        return toLiquid(value.toLiquid());
    return value;
}
function isNil(value) {
    return value == null;
}
function isUndefined(value) {
    return value === undefined;
}
function isArray(value) {
    // be compatible with IE 8
    return toString$1.call(value) === '[object Array]';
}
function isArrayLike(value) {
    return value && isNumber(value.length);
}
function isIterable(value) {
    return isObject(value) && Symbol.iterator in value;
}
/*
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
 * The iteratee is invoked with three arguments: (value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning false.
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @return {Object} Returns object.
 */
function forOwn(obj, iteratee) {
    obj = obj || {};
    for (const k in obj) {
        if (hasOwnProperty.call(obj, k)) {
            if (iteratee(obj[k], k, obj) === false)
                break;
        }
    }
    return obj;
}
function last(arr) {
    return arr[arr.length - 1];
}
/*
 * Checks if value is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
 * @param {any} value The value to check.
 * @return {Boolean} Returns true if value is an object, else false.
 */
function isObject(value) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}
function range(start, stop, step = 1) {
    const arr = [];
    for (let i = start; i < stop; i += step) {
        arr.push(i);
    }
    return arr;
}
function padStart(str, length, ch = ' ') {
    return pad(str, length, ch, (str, ch) => ch + str);
}
function padEnd(str, length, ch = ' ') {
    return pad(str, length, ch, (str, ch) => str + ch);
}
function pad(str, length, ch, add) {
    str = String(str);
    let n = length - str.length;
    while (n-- > 0)
        str = add(str, ch);
    return str;
}
function identify(val) {
    return val;
}
function changeCase(str) {
    const hasLowerCase = [...str].some(ch => ch >= 'a' && ch <= 'z');
    return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
}
function ellipsis(str, N) {
    return str.length > N ? str.slice(0, N - 3) + '...' : str;
}
// compare string in case-insensitive way, undefined values to the tail
function caseInsensitiveCompare(a, b) {
    if (a == null && b == null)
        return 0;
    if (a == null)
        return 1;
    if (b == null)
        return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
function argumentsToValue(fn) {
    return function (...args) { return fn.call(this, ...args.map(toValue)); };
}
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
/** Return an array containing unique elements from _array_. Works with nested arrays and objects. */
function* strictUniq(array) {
    const seen = new Set();
    for (const element of array) {
        const key = JSON.stringify(element);
        if (!seen.has(key)) {
            seen.add(key);
            yield element;
        }
    }
}

/**
 * targeting ES5, extends Error won't create a proper prototype chain, need a trait to keep track of classes
 */
const TRAIT = '__liquidClass__';
class LiquidError extends Error {
    constructor(err, token) {
        /**
         * note: for ES5 targeting, `this` will be replaced by return value of Error(),
         * thus everything on `this` will be lost, avoid calling `LiquidError` methods here
         */
        super(typeof err === 'string' ? err : err.message);
        this.context = '';
        if (typeof err !== 'string')
            Object.defineProperty(this, 'originalError', { value: err, enumerable: false });
        Object.defineProperty(this, 'token', { value: token, enumerable: false });
        Object.defineProperty(this, TRAIT, { value: 'LiquidError', enumerable: false });
    }
    update() {
        Object.defineProperty(this, 'context', { value: mkContext(this.token), enumerable: false });
        this.message = mkMessage(this.message, this.token);
        this.stack = this.message + '\n' + this.context +
            '\n' + this.stack;
        if (this.originalError)
            this.stack += '\nFrom ' + this.originalError.stack;
    }
    static is(obj) {
        return (obj === null || obj === void 0 ? void 0 : obj[TRAIT]) === 'LiquidError';
    }
}
class TokenizationError extends LiquidError {
    constructor(message, token) {
        super(message, token);
        this.name = 'TokenizationError';
        super.update();
    }
}
class ParseError extends LiquidError {
    constructor(err, token) {
        super(err, token);
        this.name = 'ParseError';
        this.message = err.message;
        super.update();
    }
}
class RenderError extends LiquidError {
    constructor(err, tpl) {
        super(err, tpl.token);
        this.name = 'RenderError';
        this.message = err.message;
        super.update();
    }
    static is(obj) {
        return obj.name === 'RenderError';
    }
}
class LiquidErrors extends LiquidError {
    constructor(errors) {
        super(errors[0], errors[0].token);
        this.errors = errors;
        this.name = 'LiquidErrors';
        const s = errors.length > 1 ? 's' : '';
        this.message = `${errors.length} error${s} found`;
        super.update();
    }
    static is(obj) {
        return obj.name === 'LiquidErrors';
    }
}
class UndefinedVariableError extends LiquidError {
    constructor(err, token) {
        super(err, token);
        this.name = 'UndefinedVariableError';
        this.message = err.message;
        super.update();
    }
}
// only used internally; raised where we don't have token information,
// so it can't be an UndefinedVariableError.
class InternalUndefinedVariableError extends Error {
    constructor(variableName) {
        super(`undefined variable: ${variableName}`);
        this.name = 'InternalUndefinedVariableError';
        this.variableName = variableName;
    }
}
class AssertionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AssertionError';
        this.message = message + '';
    }
}
function mkContext(token) {
    const [line, col] = token.getPosition();
    const lines = token.input.split('\n');
    const begin = Math.max(line - 2, 1);
    const end = Math.min(line + 3, lines.length);
    const context = range(begin, end + 1)
        .map(lineNumber => {
        const rowIndicator = (lineNumber === line) ? '>> ' : '   ';
        const num = padStart(String(lineNumber), String(end).length);
        let text = `${rowIndicator}${num}| `;
        const colIndicator = lineNumber === line
            ? '\n' + padStart('^', col + text.length)
            : '';
        text += lines[lineNumber - 1];
        text += colIndicator;
        return text;
    })
        .join('\n');
    return context;
}
function mkMessage(msg, token) {
    if (token.file)
        msg += `, file:${token.file}`;
    const [line, col] = token.getPosition();
    msg += `, line:${line}, col:${col}`;
    return msg;
}

// **DO NOT CHANGE THIS FILE**
//
// This file is generated by bin/character-gen.js
// bitmask character types to boost performance
const TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const WORD = 1;
const BLANK = 4;
const QUOTE = 8;
const INLINE_BLANK = 16;
const NUMBER = 32;
const SIGN = 64;
const PUNCTUATION = 128;
function isWord(char) {
    const code = char.charCodeAt(0);
    return code >= 128 ? !TYPES[code] : !!(TYPES[code] & WORD);
}
TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
TYPES[8220] = TYPES[8221] = PUNCTUATION;

function assert$1(predicate, message) {
    if (!predicate) {
        const msg = typeof message === 'function'
            ? message()
            : (message || `expect ${predicate} to be true`);
        throw new AssertionError(msg);
    }
}
function assertEmpty(predicate, message = `unexpected ${JSON.stringify(predicate)}`) {
    assert$1(!predicate, message);
}

class NullDrop extends Drop {
    equals(value) {
        return isNil(toValue(value));
    }
    gt() {
        return false;
    }
    geq() {
        return false;
    }
    lt() {
        return false;
    }
    leq() {
        return false;
    }
    valueOf() {
        return null;
    }
}

class EmptyDrop extends Drop {
    equals(value) {
        if (value instanceof EmptyDrop)
            return false;
        value = toValue(value);
        if (isString(value) || isArray(value))
            return value.length === 0;
        if (isObject(value))
            return Object.keys(value).length === 0;
        return false;
    }
    gt() {
        return false;
    }
    geq() {
        return false;
    }
    lt() {
        return false;
    }
    leq() {
        return false;
    }
    valueOf() {
        return '';
    }
    static is(value) {
        return value instanceof EmptyDrop;
    }
}

class BlankDrop extends EmptyDrop {
    equals(value) {
        if (value === false)
            return true;
        if (isNil(toValue(value)))
            return true;
        if (isString(value))
            return /^\s*$/.test(value);
        return super.equals(value);
    }
    static is(value) {
        return value instanceof BlankDrop;
    }
}

class ForloopDrop extends Drop {
    constructor(length, collection, variable) {
        super();
        this.i = 0;
        this.length = length;
        this.name = `${variable}-${collection}`;
    }
    next() {
        this.i++;
    }
    index0() {
        return this.i;
    }
    index() {
        return this.i + 1;
    }
    first() {
        return this.i === 0;
    }
    last() {
        return this.i === this.length - 1;
    }
    rindex() {
        return this.length - this.i;
    }
    rindex0() {
        return this.length - this.i - 1;
    }
    valueOf() {
        return JSON.stringify(this);
    }
}

class SimpleEmitter {
    constructor() {
        this.buffer = '';
    }
    write(html) {
        this.buffer += stringify(html);
    }
}

class StreamedEmitter {
    constructor() {
        this.buffer = '';
        this.stream = null;
        throw new Error('streaming not supported in browser');
    }
}

class KeepingTypeEmitter {
    constructor() {
        this.buffer = '';
    }
    write(html) {
        html = toValue(html);
        // This will only preserve the type if the value is isolated.
        // I.E:
        // {{ my-port }} -> 42
        // {{ my-host }}:{{ my-port }} -> 'host:42'
        if (typeof html !== 'string' && this.buffer === '') {
            this.buffer = html;
        }
        else {
            this.buffer = stringify(this.buffer) + stringify(html);
        }
    }
}

class BlockDrop extends Drop {
    constructor(
    // the block render from layout template
    superBlockRender = () => '') {
        super();
        this.superBlockRender = superBlockRender;
    }
    /**
     * Provide parent access in child block by
     * {{ block.super }}
     */
    *super() {
        const emitter = new SimpleEmitter();
        yield this.superBlockRender(emitter);
        return emitter.buffer;
    }
}

function isComparable(arg) {
    return (arg &&
        isFunction(arg.equals) &&
        isFunction(arg.gt) &&
        isFunction(arg.geq) &&
        isFunction(arg.lt) &&
        isFunction(arg.leq));
}

const nil = new NullDrop();
const literalValues = {
    'true': true,
    'false': false,
    'nil': nil,
    'null': nil,
    'empty': new EmptyDrop(),
    'blank': new BlankDrop()
};

function createTrie(input) {
    const trie = {};
    for (const [name, data] of Object.entries(input)) {
        let node = trie;
        for (let i = 0; i < name.length; i++) {
            const c = name[i];
            node[c] = node[c] || {};
            if (i === name.length - 1 && isWord(name[i])) {
                node[c].needBoundary = true;
            }
            node = node[c];
        }
        node.data = data;
        node.end = true;
    }
    return trie;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// convert an async iterator to a Promise
function toPromise(val) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isIterator(val))
            return val;
        let value;
        let done = false;
        let next = 'next';
        do {
            const state = val[next](value);
            done = state.done;
            value = state.value;
            next = 'next';
            try {
                if (isIterator(value))
                    value = toPromise(value);
                if (isPromise(value))
                    value = yield value;
            }
            catch (err) {
                next = 'throw';
                value = err;
            }
        } while (!done);
        return value;
    });
}
// convert an async iterator to a value in a synchronous manner
function toValueSync(val) {
    if (!isIterator(val))
        return val;
    let value;
    let done = false;
    let next = 'next';
    do {
        const state = val[next](value);
        done = state.done;
        value = state.value;
        next = 'next';
        if (isIterator(value)) {
            try {
                value = toValueSync(value);
            }
            catch (err) {
                next = 'throw';
                value = err;
            }
        }
    } while (!done);
    return value;
}

const rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
// prototype extensions
function daysInMonth(d) {
    const feb = isLeapYear(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function getDayOfYear(d) {
    let num = 0;
    for (let i = 0; i < d.getMonth(); ++i) {
        num += daysInMonth(d)[i];
    }
    return num + d.getDate();
}
function getWeekOfYear(d, startDay) {
    // Skip to startDay of this week
    const now = getDayOfYear(d) + (startDay - d.getDay());
    // Find the first startDay of the year
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const then = (7 - jan1.getDay() + startDay);
    return String(Math.floor((now - then) / 7) + 1);
}
function isLeapYear(d) {
    const year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
}
function ordinal(d) {
    const date = d.getDate();
    if ([11, 12, 13].includes(date))
        return 'th';
    switch (date % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
}
// default to 0
const padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
};
const padSpaceChars = new Set('aAbBceklpP');
function getTimezoneOffset(d, opts) {
    const nOffset = Math.abs(d.getTimezoneOffset());
    const h = Math.floor(nOffset / 60);
    const m = nOffset % 60;
    return (d.getTimezoneOffset() > 0 ? '-' : '+') +
        padStart(h, 2, '0') +
        (opts.flags[':'] ? ':' : '') +
        padStart(m, 2, '0');
}
const formatCodes = {
    a: (d) => d.getShortWeekdayName(),
    A: (d) => d.getLongWeekdayName(),
    b: (d) => d.getShortMonthName(),
    B: (d) => d.getLongMonthName(),
    c: (d) => d.toLocaleString(),
    C: (d) => century(d),
    d: (d) => d.getDate(),
    e: (d) => d.getDate(),
    H: (d) => d.getHours(),
    I: (d) => String(d.getHours() % 12 || 12),
    j: (d) => getDayOfYear(d),
    k: (d) => d.getHours(),
    l: (d) => String(d.getHours() % 12 || 12),
    L: (d) => d.getMilliseconds(),
    m: (d) => d.getMonth() + 1,
    M: (d) => d.getMinutes(),
    N: (d, opts) => {
        const width = Number(opts.width) || 9;
        const str = String(d.getMilliseconds()).slice(0, width);
        return padEnd(str, width, '0');
    },
    p: (d) => (d.getHours() < 12 ? 'AM' : 'PM'),
    P: (d) => (d.getHours() < 12 ? 'am' : 'pm'),
    q: (d) => ordinal(d),
    s: (d) => Math.round(d.getTime() / 1000),
    S: (d) => d.getSeconds(),
    u: (d) => d.getDay() || 7,
    U: (d) => getWeekOfYear(d, 0),
    w: (d) => d.getDay(),
    W: (d) => getWeekOfYear(d, 1),
    x: (d) => d.toLocaleDateString(),
    X: (d) => d.toLocaleTimeString(),
    y: (d) => d.getFullYear().toString().slice(2, 4),
    Y: (d) => d.getFullYear(),
    z: getTimezoneOffset,
    Z: (d, opts) => d.getTimeZoneName() || getTimezoneOffset(d, opts),
    't': () => '\t',
    'n': () => '\n',
    '%': () => '%'
};
formatCodes.h = formatCodes.b;
function strftime(d, formatStr) {
    let output = '';
    let remaining = formatStr;
    let match;
    while ((match = rFormat.exec(remaining))) {
        output += remaining.slice(0, match.index);
        remaining = remaining.slice(match.index + match[0].length);
        output += format(d, match);
    }
    return output + remaining;
}
function format(d, match) {
    const [input, flagStr = '', width, modifier, conversion] = match;
    const convert = formatCodes[conversion];
    if (!convert)
        return input;
    const flags = {};
    for (const flag of flagStr)
        flags[flag] = true;
    let ret = String(convert(d, { flags, width, modifier }));
    let padChar = padSpaceChars.has(conversion) ? ' ' : '0';
    let padWidth = width || padWidths[conversion] || 0;
    if (flags['^'])
        ret = ret.toUpperCase();
    else if (flags['#'])
        ret = changeCase(ret);
    if (flags['_'])
        padChar = ' ';
    else if (flags['0'])
        padChar = '0';
    if (flags['-'])
        padWidth = 0;
    return padStart(ret, padWidth, padChar);
}

function getDateTimeFormat() {
    return (typeof Intl !== 'undefined' ? Intl.DateTimeFormat : undefined);
}

// one minute in milliseconds
const OneMinute = 60000;
/**
 * Need support both ISO8601 and RFC2822 as in major browsers & NodeJS
 * RFC2822: https://datatracker.ietf.org/doc/html/rfc2822#section-3.3
 */
const TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):?(\d{2}))$/;
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];
const monthNamesShort = monthNames.map(name => name.slice(0, 3));
const dayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const dayNamesShort = dayNames.map(name => name.slice(0, 3));
/**
 * A date implementation with timezone info, just like Ruby date
 *
 * Implementation:
 * - create a Date offset by it's timezone difference, avoiding overriding a bunch of methods
 * - rewrite getTimezoneOffset() to trick strftime
 */
class LiquidDate {
    constructor(init, locale, timezone) {
        this.locale = locale;
        this.DateTimeFormat = getDateTimeFormat();
        this.date = new Date(init);
        this.timezoneFixed = timezone !== undefined;
        if (timezone === undefined) {
            timezone = this.date.getTimezoneOffset();
        }
        this.timezoneOffset = isString(timezone) ? LiquidDate.getTimezoneOffset(timezone, this.date) : timezone;
        this.timezoneName = isString(timezone) ? timezone : '';
        const diff = (this.date.getTimezoneOffset() - this.timezoneOffset) * OneMinute;
        const time = this.date.getTime() + diff;
        this.displayDate = new Date(time);
    }
    getTime() {
        return this.displayDate.getTime();
    }
    getMilliseconds() {
        return this.displayDate.getMilliseconds();
    }
    getSeconds() {
        return this.displayDate.getSeconds();
    }
    getMinutes() {
        return this.displayDate.getMinutes();
    }
    getHours() {
        return this.displayDate.getHours();
    }
    getDay() {
        return this.displayDate.getDay();
    }
    getDate() {
        return this.displayDate.getDate();
    }
    getMonth() {
        return this.displayDate.getMonth();
    }
    getFullYear() {
        return this.displayDate.getFullYear();
    }
    toLocaleString(locale, init) {
        if (init === null || init === void 0 ? void 0 : init.timeZone) {
            return this.date.toLocaleString(locale, init);
        }
        return this.displayDate.toLocaleString(locale, init);
    }
    toLocaleTimeString(locale) {
        return this.displayDate.toLocaleTimeString(locale);
    }
    toLocaleDateString(locale) {
        return this.displayDate.toLocaleDateString(locale);
    }
    getTimezoneOffset() {
        return this.timezoneOffset;
    }
    getTimeZoneName() {
        if (this.timezoneFixed)
            return this.timezoneName;
        if (!this.DateTimeFormat)
            return;
        return this.DateTimeFormat().resolvedOptions().timeZone;
    }
    getLongMonthName() {
        var _a;
        return (_a = this.format({ month: 'long' })) !== null && _a !== void 0 ? _a : monthNames[this.getMonth()];
    }
    getShortMonthName() {
        var _a;
        return (_a = this.format({ month: 'short' })) !== null && _a !== void 0 ? _a : monthNamesShort[this.getMonth()];
    }
    getLongWeekdayName() {
        var _a;
        return (_a = this.format({ weekday: 'long' })) !== null && _a !== void 0 ? _a : dayNames[this.displayDate.getDay()];
    }
    getShortWeekdayName() {
        var _a;
        return (_a = this.format({ weekday: 'short' })) !== null && _a !== void 0 ? _a : dayNamesShort[this.displayDate.getDay()];
    }
    valid() {
        return !isNaN(this.getTime());
    }
    format(options) {
        return this.DateTimeFormat && this.DateTimeFormat(this.locale, options).format(this.displayDate);
    }
    /**
     * Create a Date object fixed to it's declared Timezone. Both
     * - 2021-08-06T02:29:00.000Z and
     * - 2021-08-06T02:29:00.000+08:00
     * will always be displayed as
     * - 2021-08-06 02:29:00
     * regardless timezoneOffset in JavaScript realm
     *
     * The implementation hack:
     * Instead of calling `.getMonth()`/`.getUTCMonth()` respect to `preserveTimezones`,
     * we create a different Date to trick strftime, it's both simpler and more performant.
     * Given that a template is expected to be parsed fewer times than rendered.
     */
    static createDateFixedToTimezone(dateString, locale) {
        const m = dateString.match(TIMEZONE_PATTERN);
        // representing a UTC timestamp
        if (m && m[1] === 'Z') {
            return new LiquidDate(+new Date(dateString), locale, 0);
        }
        // has a timezone specified
        if (m && m[2] && m[3] && m[4]) {
            const [, , sign, hours, minutes] = m;
            const offset = (sign === '+' ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
            return new LiquidDate(+new Date(dateString), locale, offset);
        }
        return new LiquidDate(dateString, locale);
    }
    static getTimezoneOffset(timezoneName, date) {
        const localDateString = date.toLocaleString('en-US', { timeZone: timezoneName });
        const utcDateString = date.toLocaleString('en-US', { timeZone: 'UTC' });
        const localDate = new Date(localDateString);
        const utcDate = new Date(utcDateString);
        return (+utcDate - +localDate) / (60 * 1000);
    }
}

class Limiter {
    constructor(resource, limit) {
        this.base = 0;
        this.message = `${resource} limit exceeded`;
        this.limit = limit;
    }
    use(count) {
        count = toNumber(count);
        assert$1(this.base + count <= this.limit, this.message);
        this.base += count;
    }
    check(count) {
        count = toNumber(count);
        assert$1(count <= this.limit, this.message);
    }
}

class DelimitedToken extends Token {
    constructor(kind, [contentBegin, contentEnd], input, begin, end, trimLeft, trimRight, file) {
        super(kind, input, begin, end, file);
        this.trimLeft = false;
        this.trimRight = false;
        const tl = input[contentBegin] === '-';
        const tr = input[contentEnd - 1] === '-';
        let l = tl ? contentBegin + 1 : contentBegin;
        let r = tr ? contentEnd - 1 : contentEnd;
        while (l < r && (TYPES[input.charCodeAt(l)] & BLANK))
            l++;
        while (r > l && (TYPES[input.charCodeAt(r - 1)] & BLANK))
            r--;
        this.contentRange = [l, r];
        this.trimLeft = tl || trimLeft;
        this.trimRight = tr || trimRight;
    }
    get content() {
        return this.input.slice(this.contentRange[0], this.contentRange[1]);
    }
}

class TagToken extends DelimitedToken {
    constructor(input, begin, end, options, file) {
        const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
        const [valueBegin, valueEnd] = [begin + tagDelimiterLeft.length, end - tagDelimiterRight.length];
        super(TokenKind.Tag, [valueBegin, valueEnd], input, begin, end, trimTagLeft, trimTagRight, file);
        this.tokenizer = new Tokenizer(input, options.operators, file, this.contentRange);
        this.name = this.tokenizer.readTagName();
        this.tokenizer.assert(this.name, `illegal tag syntax, tag name expected`);
        this.tokenizer.skipBlank();
        this.args = this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
    }
}

class OutputToken extends DelimitedToken {
    constructor(input, begin, end, options, file) {
        const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
        const valueRange = [begin + outputDelimiterLeft.length, end - outputDelimiterRight.length];
        super(TokenKind.Output, valueRange, input, begin, end, trimOutputLeft, trimOutputRight, file);
    }
}

class HTMLToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.HTML, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.trimLeft = 0;
        this.trimRight = 0;
    }
    getContent() {
        return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
}

class NumberToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Number, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.content = Number(this.getText());
    }
}

class IdentifierToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Word, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.content = this.getText();
    }
}

class LiteralToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Literal, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.literal = this.getText();
        this.content = literalValues[this.literal];
    }
}

const operatorPrecedences = {
    '==': 2,
    '!=': 2,
    '>': 2,
    '<': 2,
    '>=': 2,
    '<=': 2,
    'contains': 2,
    'not': 1,
    'and': 0,
    'or': 0
};
const operatorTypes = {
    '==': 0 /* OperatorType.Binary */,
    '!=': 0 /* OperatorType.Binary */,
    '>': 0 /* OperatorType.Binary */,
    '<': 0 /* OperatorType.Binary */,
    '>=': 0 /* OperatorType.Binary */,
    '<=': 0 /* OperatorType.Binary */,
    'contains': 0 /* OperatorType.Binary */,
    'not': 1 /* OperatorType.Unary */,
    'and': 0 /* OperatorType.Binary */,
    'or': 0 /* OperatorType.Binary */
};
class OperatorToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Operator, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.operator = this.getText();
    }
    getPrecedence() {
        const key = this.getText();
        return key in operatorPrecedences ? operatorPrecedences[key] : 1;
    }
}

class PropertyAccessToken extends Token {
    constructor(variable, props, input, begin, end, file) {
        super(TokenKind.PropertyAccess, input, begin, end, file);
        this.variable = variable;
        this.props = props;
    }
}

class FilterToken extends Token {
    constructor(name, args, input, begin, end, file) {
        super(TokenKind.Filter, input, begin, end, file);
        this.name = name;
        this.args = args;
    }
}

class HashToken extends Token {
    constructor(input, begin, end, name, value, file) {
        super(TokenKind.Hash, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.name = name;
        this.value = value;
        this.file = file;
    }
}

const rHex = /[\da-fA-F]/;
const rOct = /[0-7]/;
const escapeChar = {
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
    v: '\x0B'
};
function hexVal(c) {
    const code = c.charCodeAt(0);
    if (code >= 97)
        return code - 87;
    if (code >= 65)
        return code - 55;
    return code - 48;
}
function parseStringLiteral(str) {
    let ret = '';
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i] !== '\\') {
            ret += str[i];
            continue;
        }
        if (escapeChar[str[i + 1]] !== undefined) {
            ret += escapeChar[str[++i]];
        }
        else if (str[i + 1] === 'u') {
            let val = 0;
            let j = i + 2;
            while (j <= i + 5 && rHex.test(str[j])) {
                val = val * 16 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
        else if (!rOct.test(str[i + 1])) {
            ret += str[++i];
        }
        else {
            let j = i + 1;
            let val = 0;
            while (j <= i + 3 && rOct.test(str[j])) {
                val = val * 8 + hexVal(str[j++]);
            }
            i = j - 1;
            ret += String.fromCharCode(val);
        }
    }
    return ret;
}

class QuotedToken extends Token {
    constructor(input, begin, end, file) {
        super(TokenKind.Quoted, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
        this.content = parseStringLiteral(this.getText());
    }
}

class RangeToken extends Token {
    constructor(input, begin, end, lhs, rhs, file) {
        super(TokenKind.Range, input, begin, end, file);
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.lhs = lhs;
        this.rhs = rhs;
        this.file = file;
    }
}

/**
 * LiquidTagToken is different from TagToken by not having delimiters `{%` or `%}`
 */
class LiquidTagToken extends DelimitedToken {
    constructor(input, begin, end, options, file) {
        super(TokenKind.Tag, [begin, end], input, begin, end, false, false, file);
        this.tokenizer = new Tokenizer(input, options.operators, file, this.contentRange);
        this.name = this.tokenizer.readTagName();
        this.tokenizer.assert(this.name, 'illegal liquid tag syntax');
        this.tokenizer.skipBlank();
    }
    get args() {
        return this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
    }
}

/**
 * value expression with optional filters
 * e.g.
 * {% assign foo="bar" | append: "coo" %}
 */
class FilteredValueToken extends Token {
    constructor(initial, filters, input, begin, end, file) {
        super(TokenKind.FilteredValue, input, begin, end, file);
        this.initial = initial;
        this.filters = filters;
        this.input = input;
        this.begin = begin;
        this.end = end;
        this.file = file;
    }
}

const polyfill = {
    now: () => Date.now()
};
function getPerformance() {
    return (typeof global === 'object' && global.performance) ||
        (typeof window === 'object' && window.performance) ||
        polyfill;
}

class Render {
    renderTemplatesToNodeStream(templates, ctx) {
        const emitter = new StreamedEmitter();
        Promise.resolve().then(() => toPromise(this.renderTemplates(templates, ctx, emitter)))
            .then(() => emitter.end(), err => emitter.error(err));
        return emitter.stream;
    }
    *renderTemplates(templates, ctx, emitter) {
        if (!emitter) {
            emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
        }
        const errors = [];
        for (const tpl of templates) {
            ctx.renderLimit.check(getPerformance().now());
            try {
                // if tpl.render supports emitter, it'll return empty `html`
                const html = yield tpl.render(ctx, emitter);
                // if not, it'll return an `html`, write to the emitter for it
                html && emitter.write(html);
                if (ctx.breakCalled || ctx.continueCalled)
                    break;
            }
            catch (e) {
                const err = LiquidError.is(e) ? e : new RenderError(e, tpl);
                if (ctx.opts.catchAllErrors)
                    errors.push(err);
                else
                    throw err;
            }
        }
        if (errors.length) {
            throw new LiquidErrors(errors);
        }
        return emitter.buffer;
    }
}

class Expression {
    constructor(tokens) {
        this.postfix = [...toPostfix(tokens)];
    }
    *evaluate(ctx, lenient) {
        assert$1(ctx, 'unable to evaluate: context not defined');
        const operands = [];
        for (const token of this.postfix) {
            if (isOperatorToken(token)) {
                const r = operands.pop();
                let result;
                if (operatorTypes[token.operator] === 1 /* OperatorType.Unary */) {
                    result = yield ctx.opts.operators[token.operator](r, ctx);
                }
                else {
                    const l = operands.pop();
                    result = yield ctx.opts.operators[token.operator](l, r, ctx);
                }
                operands.push(result);
            }
            else {
                operands.push(yield evalToken(token, ctx, lenient));
            }
        }
        return operands[0];
    }
    valid() {
        return !!this.postfix.length;
    }
}
function* evalToken(token, ctx, lenient = false) {
    if (!token)
        return;
    if ('content' in token)
        return token.content;
    if (isPropertyAccessToken(token))
        return yield evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token))
        return yield evalRangeToken(token, ctx);
}
function* evalPropertyAccessToken(token, ctx, lenient) {
    const props = [];
    for (const prop of token.props) {
        props.push((yield evalToken(prop, ctx, false)));
    }
    try {
        if (token.variable) {
            const variable = yield evalToken(token.variable, ctx, lenient);
            return yield ctx._getFromScope(variable, props);
        }
        else {
            return yield ctx._get(props);
        }
    }
    catch (e) {
        if (lenient && e.name === 'InternalUndefinedVariableError')
            return null;
        throw (new UndefinedVariableError(e, token));
    }
}
function evalQuotedToken(token) {
    return token.content;
}
function* evalRangeToken(token, ctx) {
    const low = yield evalToken(token.lhs, ctx);
    const high = yield evalToken(token.rhs, ctx);
    ctx.memoryLimit.use(high - low + 1);
    return range(+low, +high + 1);
}
function* toPostfix(tokens) {
    const ops = [];
    for (const token of tokens) {
        if (isOperatorToken(token)) {
            while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
                yield ops.pop();
            }
            ops.push(token);
        }
        else
            yield token;
    }
    while (ops.length) {
        yield ops.pop();
    }
}

function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
}
function isFalsy(val, ctx) {
    val = toValue(val);
    if (ctx.opts.jsTruthy) {
        return !val;
    }
    else {
        return val === false || undefined === val || val === null;
    }
}

const defaultOperators = {
    '==': equals,
    '!=': (l, r) => !equals(l, r),
    '>': (l, r) => {
        if (isComparable(l))
            return l.gt(r);
        if (isComparable(r))
            return r.lt(l);
        return toValue(l) > toValue(r);
    },
    '<': (l, r) => {
        if (isComparable(l))
            return l.lt(r);
        if (isComparable(r))
            return r.gt(l);
        return toValue(l) < toValue(r);
    },
    '>=': (l, r) => {
        if (isComparable(l))
            return l.geq(r);
        if (isComparable(r))
            return r.leq(l);
        return toValue(l) >= toValue(r);
    },
    '<=': (l, r) => {
        if (isComparable(l))
            return l.leq(r);
        if (isComparable(r))
            return r.geq(l);
        return toValue(l) <= toValue(r);
    },
    'contains': (l, r) => {
        l = toValue(l);
        if (isArray(l))
            return l.some((i) => equals(i, r));
        if (isFunction(l === null || l === void 0 ? void 0 : l.indexOf))
            return l.indexOf(toValue(r)) > -1;
        return false;
    },
    'not': (v, ctx) => isFalsy(toValue(v), ctx),
    'and': (l, r, ctx) => isTruthy(toValue(l), ctx) && isTruthy(toValue(r), ctx),
    'or': (l, r, ctx) => isTruthy(toValue(l), ctx) || isTruthy(toValue(r), ctx)
};
function equals(lhs, rhs) {
    if (isComparable(lhs))
        return lhs.equals(rhs);
    if (isComparable(rhs))
        return rhs.equals(lhs);
    lhs = toValue(lhs);
    rhs = toValue(rhs);
    if (isArray(lhs)) {
        return isArray(rhs) && arrayEquals(lhs, rhs);
    }
    return lhs === rhs;
}
function arrayEquals(lhs, rhs) {
    if (lhs.length !== rhs.length)
        return false;
    return !lhs.some((value, i) => !equals(value, rhs[i]));
}
function arrayIncludes(arr, item) {
    return arr.some(value => equals(value, item));
}

let Node$1 = class Node {
    constructor(key, value, next, prev) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
};
class LRU {
    constructor(limit, size = 0) {
        this.limit = limit;
        this.size = size;
        this.cache = {};
        this.head = new Node$1('HEAD', null, null, null);
        this.tail = new Node$1('TAIL', null, null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    write(key, value) {
        if (this.cache[key]) {
            this.cache[key].value = value;
        }
        else {
            const node = new Node$1(key, value, this.head.next, this.head);
            this.head.next.prev = node;
            this.head.next = node;
            this.cache[key] = node;
            this.size++;
            this.ensureLimit();
        }
    }
    read(key) {
        if (!this.cache[key])
            return;
        const { value } = this.cache[key];
        this.remove(key);
        this.write(key, value);
        return value;
    }
    remove(key) {
        const node = this.cache[key];
        node.prev.next = node.next;
        node.next.prev = node.prev;
        delete this.cache[key];
        this.size--;
    }
    clear() {
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
        this.cache = {};
    }
    ensureLimit() {
        if (this.size > this.limit)
            this.remove(this.tail.prev.key);
    }
}

function domResolve(root, path) {
    const base = document.createElement('base');
    base.href = root;
    const head = document.getElementsByTagName('head')[0];
    head.insertBefore(base, head.firstChild);
    const a = document.createElement('a');
    a.href = path;
    const resolved = a.href;
    head.removeChild(base);
    return resolved;
}
function resolve(root, filepath, ext) {
    if (root.length && last(root) !== '/')
        root += '/';
    const url = domResolve(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str, origin, path) => {
        const last = path.split('/').pop();
        if (/\.\w+$/.test(last))
            return str;
        return origin + path + ext;
    });
}
function readFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.onerror = () => {
                reject(new Error('An error occurred whilst receiving the response.'));
            };
            xhr.open('GET', url);
            xhr.send();
        });
    });
}
function readFileSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
        throw new Error(xhr.statusText);
    }
    return xhr.responseText;
}
function exists(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        return true;
    });
}
function existsSync(filepath) {
    return true;
}
function dirname(filepath) {
    return domResolve(filepath, '.');
}
const sep = '/';

var fs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  resolve: resolve,
  readFile: readFile,
  readFileSync: readFileSync,
  exists: exists,
  existsSync: existsSync,
  dirname: dirname,
  sep: sep
});

function defaultFilter(value, defaultValue, ...args) {
    value = toValue(value);
    if (isArray(value) || isString(value))
        return value.length ? value : defaultValue;
    if (value === false && (new Map(args)).get('allow_false'))
        return false;
    return isFalsy(value, this.context) ? defaultValue : value;
}
function json(value, space = 0) {
    return JSON.stringify(value, null, space);
}
function inspect(value, space = 0) {
    const ancestors = [];
    return JSON.stringify(value, function (_key, value) {
        if (typeof value !== 'object' || value === null)
            return value;
        // `this` is the object that value is contained in, i.e., its direct parent.
        while (ancestors.length > 0 && ancestors[ancestors.length - 1] !== this)
            ancestors.pop();
        if (ancestors.includes(value))
            return '[Circular]';
        ancestors.push(value);
        return value;
    }, space);
}
function to_integer(value) {
    return Number(value);
}
const raw = {
    raw: true,
    handler: identify
};
var misc = {
    default: defaultFilter,
    raw,
    jsonify: json,
    to_integer,
    json,
    inspect
};

const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;'
};
const unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#34;': '"',
    '&#39;': "'"
};
function escape$1(str) {
    str = stringify(str);
    this.context.memoryLimit.use(str.length);
    return str.replace(/&|<|>|"|'/g, m => escapeMap[m]);
}
function xml_escape(str) {
    return escape$1.call(this, str);
}
function unescape$1(str) {
    str = stringify(str);
    this.context.memoryLimit.use(str.length);
    return str.replace(/&(amp|lt|gt|#34|#39);/g, m => unescapeMap[m]);
}
function escape_once(str) {
    return escape$1.call(this, unescape$1.call(this, str));
}
function newline_to_br(v) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.replace(/\r?\n/gm, '<br />\n');
}
function strip_html(v) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<.*?>|<!--[\s\S]*?-->/g, '');
}

var htmlFilters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  escape: escape$1,
  xml_escape: xml_escape,
  escape_once: escape_once,
  newline_to_br: newline_to_br,
  strip_html: strip_html
});

class MapFS {
    constructor(mapping) {
        this.mapping = mapping;
        this.sep = '/';
    }
    exists(filepath) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.existsSync(filepath);
        });
    }
    existsSync(filepath) {
        return !isNil(this.mapping[filepath]);
    }
    readFile(filepath) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.readFileSync(filepath);
        });
    }
    readFileSync(filepath) {
        const content = this.mapping[filepath];
        if (isNil(content))
            throw new Error(`ENOENT: ${filepath}`);
        return content;
    }
    dirname(filepath) {
        const segments = filepath.split(this.sep);
        segments.pop();
        return segments.join(this.sep);
    }
    resolve(dir, file, ext) {
        file += ext;
        if (dir === '.')
            return file;
        const segments = dir.split(/\/+/);
        for (const segment of file.split(this.sep)) {
            if (segment === '.' || segment === '')
                continue;
            else if (segment === '..') {
                if (segments.length > 1 || segments[0] !== '')
                    segments.pop();
            }
            else
                segments.push(segment);
        }
        return segments.join(this.sep);
    }
}

const defaultOptions = {
    root: ['.'],
    layouts: ['.'],
    partials: ['.'],
    relativeReference: true,
    jekyllInclude: false,
    keyValueSeparator: ':',
    cache: undefined,
    extname: '',
    fs: fs,
    dynamicPartials: true,
    jsTruthy: false,
    dateFormat: '%A, %B %-e, %Y at %-l:%M %P %z',
    locale: '',
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: '{%',
    tagDelimiterRight: '%}',
    outputDelimiterLeft: '{{',
    outputDelimiterRight: '}}',
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    ownPropertyOnly: true,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    memoryLimit: Infinity,
    parseLimit: Infinity,
    renderLimit: Infinity
};
function normalize(options) {
    var _a, _b;
    if (options.hasOwnProperty('root')) {
        if (!options.hasOwnProperty('partials'))
            options.partials = options.root;
        if (!options.hasOwnProperty('layouts'))
            options.layouts = options.root;
    }
    if (options.hasOwnProperty('cache')) {
        let cache;
        if (typeof options.cache === 'number')
            cache = options.cache > 0 ? new LRU(options.cache) : undefined;
        else if (typeof options.cache === 'object')
            cache = options.cache;
        else
            cache = options.cache ? new LRU(1024) : undefined;
        options.cache = cache;
    }
    options = Object.assign(Object.assign(Object.assign({}, defaultOptions), (options.jekyllInclude ? { dynamicPartials: false } : {})), options);
    if ((!options.fs.dirname || !options.fs.sep) && options.relativeReference) {
        console.warn('[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning');
        options.relativeReference = false;
    }
    options.root = normalizeDirectoryList(options.root);
    options.partials = normalizeDirectoryList(options.partials);
    options.layouts = normalizeDirectoryList(options.layouts);
    options.outputEscape = options.outputEscape && getOutputEscapeFunction(options.outputEscape);
    if (!options.locale) {
        options.locale = (_b = (_a = getDateTimeFormat()) === null || _a === void 0 ? void 0 : _a().resolvedOptions().locale) !== null && _b !== void 0 ? _b : 'en-US';
    }
    if (options.templates) {
        options.fs = new MapFS(options.templates);
        options.relativeReference = true;
        options.root = options.partials = options.layouts = '.';
    }
    return options;
}
function getOutputEscapeFunction(nameOrFunction) {
    if (nameOrFunction === 'escape')
        return escape$1;
    if (nameOrFunction === 'json')
        return misc.json;
    assert$1(isFunction(nameOrFunction), '`outputEscape` need to be of type string or function');
    return nameOrFunction;
}
function normalizeDirectoryList(value) {
    let list = [];
    if (isArray(value))
        list = value;
    if (isString(value))
        list = [value];
    return list;
}

function whiteSpaceCtrl(tokens, options) {
    let inRaw = false;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (!isDelimitedToken(token))
            continue;
        if (!inRaw && token.trimLeft) {
            trimLeft(tokens[i - 1], options.greedy);
        }
        if (isTagToken(token)) {
            if (token.name === 'raw')
                inRaw = true;
            else if (token.name === 'endraw')
                inRaw = false;
        }
        if (!inRaw && token.trimRight) {
            trimRight(tokens[i + 1], options.greedy);
        }
    }
}
function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token))
        return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
        token.trimRight++;
}
function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token))
        return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
        token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === '\n')
        token.trimLeft++;
}

class Tokenizer {
    constructor(input, operators = defaultOptions.operators, file, range) {
        this.input = input;
        this.file = file;
        this.rawBeginAt = -1;
        this.p = range ? range[0] : 0;
        this.N = range ? range[1] : input.length;
        this.opTrie = createTrie(operators);
        this.literalTrie = createTrie(literalValues);
    }
    readExpression() {
        return new Expression(this.readExpressionTokens());
    }
    *readExpressionTokens() {
        while (this.p < this.N) {
            const operator = this.readOperator();
            if (operator) {
                yield operator;
                continue;
            }
            const operand = this.readValue();
            if (operand) {
                yield operand;
                continue;
            }
            return;
        }
    }
    readOperator() {
        this.skipBlank();
        const end = this.matchTrie(this.opTrie);
        if (end === -1)
            return;
        return new OperatorToken(this.input, this.p, (this.p = end), this.file);
    }
    matchTrie(trie) {
        let node = trie;
        let i = this.p;
        let info;
        while (node[this.input[i]] && i < this.N) {
            node = node[this.input[i++]];
            if (node['end'])
                info = node;
        }
        if (!info)
            return -1;
        if (info['needBoundary'] && isWord(this.peek(i - this.p)))
            return -1;
        return i;
    }
    readFilteredValue() {
        const begin = this.p;
        const initial = this.readExpression();
        this.assert(initial.valid(), `invalid value expression: ${this.snapshot()}`);
        const filters = this.readFilters();
        return new FilteredValueToken(initial, filters, this.input, begin, this.p, this.file);
    }
    readFilters() {
        const filters = [];
        while (true) {
            const filter = this.readFilter();
            if (!filter)
                return filters;
            filters.push(filter);
        }
    }
    readFilter() {
        this.skipBlank();
        if (this.end())
            return null;
        this.assert(this.read() === '|', `expected "|" before filter`);
        const name = this.readIdentifier();
        if (!name.size()) {
            this.assert(this.end(), `expected filter name`);
            return null;
        }
        const args = [];
        this.skipBlank();
        if (this.peek() === ':') {
            do {
                ++this.p;
                const arg = this.readFilterArg();
                arg && args.push(arg);
                this.skipBlank();
                this.assert(this.end() || this.peek() === ',' || this.peek() === '|', () => `unexpected character ${this.snapshot()}`);
            } while (this.peek() === ',');
        }
        else if (this.peek() === '|' || this.end()) ;
        else {
            throw this.error('expected ":" after filter name');
        }
        return new FilterToken(name.getText(), args, this.input, name.begin, this.p, this.file);
    }
    readFilterArg() {
        const key = this.readValue();
        if (!key)
            return;
        this.skipBlank();
        if (this.peek() !== ':')
            return key;
        ++this.p;
        const value = this.readValue();
        return [key.getText(), value];
    }
    readTopLevelTokens(options = defaultOptions) {
        const tokens = [];
        while (this.p < this.N) {
            const token = this.readTopLevelToken(options);
            tokens.push(token);
        }
        whiteSpaceCtrl(tokens, options);
        return tokens;
    }
    readTopLevelToken(options) {
        const { tagDelimiterLeft, outputDelimiterLeft } = options;
        if (this.rawBeginAt > -1)
            return this.readEndrawOrRawContent(options);
        if (this.match(tagDelimiterLeft))
            return this.readTagToken(options);
        if (this.match(outputDelimiterLeft))
            return this.readOutputToken(options);
        return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
    }
    readHTMLToken(stopStrings) {
        const begin = this.p;
        while (this.p < this.N) {
            if (stopStrings.some(str => this.match(str)))
                break;
            ++this.p;
        }
        return new HTMLToken(this.input, begin, this.p, this.file);
    }
    readTagToken(options) {
        const { file, input } = this;
        const begin = this.p;
        if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
            throw this.error(`tag ${this.snapshot(begin)} not closed`, begin);
        }
        const token = new TagToken(input, begin, this.p, options, file);
        if (token.name === 'raw')
            this.rawBeginAt = begin;
        return token;
    }
    readToDelimiter(delimiter, respectQuoted = false) {
        this.skipBlank();
        while (this.p < this.N) {
            if (respectQuoted && (this.peekType() & QUOTE)) {
                this.readQuoted();
                continue;
            }
            ++this.p;
            if (this.rmatch(delimiter))
                return this.p;
        }
        return -1;
    }
    readOutputToken(options = defaultOptions) {
        const { file, input } = this;
        const { outputDelimiterRight } = options;
        const begin = this.p;
        if (this.readToDelimiter(outputDelimiterRight, true) === -1) {
            throw this.error(`output ${this.snapshot(begin)} not closed`, begin);
        }
        return new OutputToken(input, begin, this.p, options, file);
    }
    readEndrawOrRawContent(options) {
        const { tagDelimiterLeft, tagDelimiterRight } = options;
        const begin = this.p;
        let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
        while (this.p < this.N) {
            if (this.readIdentifier().getText() !== 'endraw') {
                leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
                continue;
            }
            while (this.p <= this.N) {
                if (this.rmatch(tagDelimiterRight)) {
                    const end = this.p;
                    if (begin === leftPos) {
                        this.rawBeginAt = -1;
                        return new TagToken(this.input, begin, end, options, this.file);
                    }
                    else {
                        this.p = leftPos;
                        return new HTMLToken(this.input, begin, leftPos, this.file);
                    }
                }
                if (this.rmatch(tagDelimiterLeft))
                    break;
                this.p++;
            }
        }
        throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
    }
    readLiquidTagTokens(options = defaultOptions) {
        const tokens = [];
        while (this.p < this.N) {
            const token = this.readLiquidTagToken(options);
            token && tokens.push(token);
        }
        return tokens;
    }
    readLiquidTagToken(options) {
        this.skipBlank();
        if (this.end())
            return;
        const begin = this.p;
        this.readToDelimiter('\n');
        const end = this.p;
        return new LiquidTagToken(this.input, begin, end, options, this.file);
    }
    error(msg, pos = this.p) {
        return new TokenizationError(msg, new IdentifierToken(this.input, pos, this.N, this.file));
    }
    assert(pred, msg, pos) {
        if (!pred)
            throw this.error(typeof msg === 'function' ? msg() : msg, pos);
    }
    snapshot(begin = this.p) {
        return JSON.stringify(ellipsis(this.input.slice(begin, this.N), 32));
    }
    /**
     * @deprecated use #readIdentifier instead
     */
    readWord() {
        return this.readIdentifier();
    }
    readIdentifier() {
        this.skipBlank();
        const begin = this.p;
        while (!this.end() && isWord(this.peek()))
            ++this.p;
        return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    readNonEmptyIdentifier() {
        const id = this.readIdentifier();
        return id.size() ? id : undefined;
    }
    readTagName() {
        this.skipBlank();
        // Handle inline comment tags
        if (this.input[this.p] === '#')
            return this.input.slice(this.p, ++this.p);
        return this.readIdentifier().getText();
    }
    readHashes(jekyllStyle) {
        const hashes = [];
        while (true) {
            const hash = this.readHash(jekyllStyle);
            if (!hash)
                return hashes;
            hashes.push(hash);
        }
    }
    readHash(jekyllStyle) {
        this.skipBlank();
        if (this.peek() === ',')
            ++this.p;
        const begin = this.p;
        const name = this.readNonEmptyIdentifier();
        if (!name)
            return;
        let value;
        this.skipBlank();
        const sep = isString(jekyllStyle) ? jekyllStyle : (jekyllStyle ? '=' : ':');
        if (this.peek() === sep) {
            ++this.p;
            value = this.readValue();
        }
        return new HashToken(this.input, begin, this.p, name, value, this.file);
    }
    remaining() {
        return this.input.slice(this.p, this.N);
    }
    advance(step = 1) {
        this.p += step;
    }
    end() {
        return this.p >= this.N;
    }
    read() {
        return this.input[this.p++];
    }
    readTo(end) {
        while (this.p < this.N) {
            ++this.p;
            if (this.rmatch(end))
                return this.p;
        }
        return -1;
    }
    readValue() {
        this.skipBlank();
        const begin = this.p;
        const variable = this.readLiteral() || this.readQuoted() || this.readRange() || this.readNumber();
        const props = this.readProperties(!variable);
        if (!props.length)
            return variable;
        return new PropertyAccessToken(variable, props, this.input, begin, this.p);
    }
    readScopeValue() {
        this.skipBlank();
        const begin = this.p;
        const props = this.readProperties();
        if (!props.length)
            return undefined;
        return new PropertyAccessToken(undefined, props, this.input, begin, this.p);
    }
    readProperties(isBegin = true) {
        const props = [];
        while (true) {
            if (this.peek() === '[') {
                this.p++;
                const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
                this.assert(this.readTo(']') !== -1, '[ not closed');
                props.push(prop);
                continue;
            }
            if (isBegin && !props.length) {
                const prop = this.readNonEmptyIdentifier();
                if (prop) {
                    props.push(prop);
                    continue;
                }
            }
            if (this.peek() === '.' && this.peek(1) !== '.') { // skip range syntax
                this.p++;
                const prop = this.readNonEmptyIdentifier();
                if (!prop)
                    break;
                props.push(prop);
                continue;
            }
            break;
        }
        return props;
    }
    readNumber() {
        this.skipBlank();
        let decimalFound = false;
        let digitFound = false;
        let n = 0;
        if (this.peekType() & SIGN)
            n++;
        while (this.p + n <= this.N) {
            if (this.peekType(n) & NUMBER) {
                digitFound = true;
                n++;
            }
            else if (this.peek(n) === '.' && this.peek(n + 1) !== '.') {
                if (decimalFound || !digitFound)
                    return;
                decimalFound = true;
                n++;
            }
            else
                break;
        }
        if (digitFound && !isWord(this.peek(n))) {
            const num = new NumberToken(this.input, this.p, this.p + n, this.file);
            this.advance(n);
            return num;
        }
    }
    readLiteral() {
        this.skipBlank();
        const end = this.matchTrie(this.literalTrie);
        if (end === -1)
            return;
        const literal = new LiteralToken(this.input, this.p, end, this.file);
        this.p = end;
        return literal;
    }
    readRange() {
        this.skipBlank();
        const begin = this.p;
        if (this.peek() !== '(')
            return;
        ++this.p;
        const lhs = this.readValueOrThrow();
        this.skipBlank();
        this.assert(this.read() === '.' && this.read() === '.', 'invalid range syntax');
        const rhs = this.readValueOrThrow();
        this.skipBlank();
        this.assert(this.read() === ')', 'invalid range syntax');
        return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    }
    readValueOrThrow() {
        const value = this.readValue();
        this.assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
        return value;
    }
    readQuoted() {
        this.skipBlank();
        const begin = this.p;
        if (!(this.peekType() & QUOTE))
            return;
        ++this.p;
        let escaped = false;
        while (this.p < this.N) {
            ++this.p;
            if (this.input[this.p - 1] === this.input[begin] && !escaped)
                break;
            if (escaped)
                escaped = false;
            else if (this.input[this.p - 1] === '\\')
                escaped = true;
        }
        return new QuotedToken(this.input, begin, this.p, this.file);
    }
    *readFileNameTemplate(options) {
        const { outputDelimiterLeft } = options;
        const htmlStopStrings = [',', ' ', outputDelimiterLeft];
        const htmlStopStringSet = new Set(htmlStopStrings);
        // break on ',' and ' ', outputDelimiterLeft only stops HTML token
        while (this.p < this.N && !htmlStopStringSet.has(this.peek())) {
            yield this.match(outputDelimiterLeft)
                ? this.readOutputToken(options)
                : this.readHTMLToken(htmlStopStrings);
        }
    }
    match(word) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== this.input[this.p + i])
                return false;
        }
        return true;
    }
    rmatch(pattern) {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
                return false;
        }
        return true;
    }
    peekType(n = 0) {
        return this.p + n >= this.N ? 0 : TYPES[this.input.charCodeAt(this.p + n)];
    }
    peek(n = 0) {
        return this.p + n >= this.N ? '' : this.input[this.p + n];
    }
    skipBlank() {
        while (this.peekType() & BLANK)
            ++this.p;
    }
}

class ParseStream {
    constructor(tokens, parseToken) {
        this.handlers = {};
        this.stopRequested = false;
        this.tokens = tokens;
        this.parseToken = parseToken;
    }
    on(name, cb) {
        this.handlers[name] = cb;
        return this;
    }
    trigger(event, arg) {
        const h = this.handlers[event];
        return h ? (h.call(this, arg), true) : false;
    }
    start() {
        this.trigger('start');
        let token;
        while (!this.stopRequested && (token = this.tokens.shift())) {
            if (this.trigger('token', token))
                continue;
            if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
                continue;
            }
            const template = this.parseToken(token, this.tokens);
            this.trigger('template', template);
        }
        if (!this.stopRequested)
            this.trigger('end');
        return this;
    }
    stop() {
        this.stopRequested = true;
        return this;
    }
}

class TemplateImpl {
    constructor(token) {
        this.token = token;
    }
}

class Tag extends TemplateImpl {
    constructor(token, remainTokens, liquid) {
        super(token);
        this.name = token.name;
        this.liquid = liquid;
        this.tokenizer = token.tokenizer;
    }
}

/**
 * Key-Value Pairs Representing Tag Arguments
 * Example:
 *    For the markup `, foo:'bar', coo:2 reversed %}`,
 *    hash['foo'] === 'bar'
 *    hash['coo'] === 2
 *    hash['reversed'] === undefined
 */
class Hash {
    constructor(input, jekyllStyle) {
        this.hash = {};
        const tokenizer = input instanceof Tokenizer ? input : new Tokenizer(input, {});
        for (const hash of tokenizer.readHashes(jekyllStyle)) {
            this.hash[hash.name.content] = hash.value;
        }
    }
    *render(ctx) {
        const hash = {};
        for (const key of Object.keys(this.hash)) {
            hash[key] = this.hash[key] === undefined ? true : yield evalToken(this.hash[key], ctx);
        }
        return hash;
    }
}

function createTagClass(options) {
    return class extends Tag {
        constructor(token, tokens, liquid) {
            super(token, tokens, liquid);
            if (isFunction(options.parse)) {
                options.parse.call(this, token, tokens);
            }
        }
        *render(ctx, emitter) {
            const hash = (yield new Hash(this.token.args, ctx.opts.keyValueSeparator).render(ctx));
            return yield options.render.call(this, ctx, emitter, hash);
        }
    };
}

function isKeyValuePair(arr) {
    return isArray(arr);
}

class Filter {
    constructor(token, options, liquid) {
        this.token = token;
        this.name = token.name;
        this.handler = isFunction(options)
            ? options
            : (isFunction(options === null || options === void 0 ? void 0 : options.handler) ? options.handler : identify);
        this.raw = !isFunction(options) && !!(options === null || options === void 0 ? void 0 : options.raw);
        this.args = token.args;
        this.liquid = liquid;
    }
    *render(value, context) {
        const argv = [];
        for (const arg of this.args) {
            if (isKeyValuePair(arg))
                argv.push([arg[0], yield evalToken(arg[1], context)]);
            else
                argv.push(yield evalToken(arg, context));
        }
        return yield this.handler.apply({ context, token: this.token, liquid: this.liquid }, [value, ...argv]);
    }
}

class Value {
    /**
     * @param str the value to be valuated, eg.: "foobar" | truncate: 3
     */
    constructor(input, liquid) {
        this.filters = [];
        const token = typeof input === 'string'
            ? new Tokenizer(input, liquid.options.operators).readFilteredValue()
            : input;
        this.initial = token.initial;
        this.filters = token.filters.map(token => new Filter(token, this.getFilter(liquid, token.name), liquid));
    }
    *value(ctx, lenient) {
        lenient = lenient || (ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === 'default');
        let val = yield this.initial.evaluate(ctx, lenient);
        for (const filter of this.filters) {
            val = yield filter.render(val, ctx);
        }
        return val;
    }
    getFilter(liquid, name) {
        const impl = liquid.filters[name];
        assert$1(impl || !liquid.options.strictFilters, () => `undefined filter: ${name}`);
        return impl;
    }
}

class Output extends TemplateImpl {
    constructor(token, liquid) {
        var _a;
        super(token);
        const tokenizer = new Tokenizer(token.input, liquid.options.operators, token.file, token.contentRange);
        this.value = new Value(tokenizer.readFilteredValue(), liquid);
        const filters = this.value.filters;
        const outputEscape = liquid.options.outputEscape;
        if (!((_a = filters[filters.length - 1]) === null || _a === void 0 ? void 0 : _a.raw) && outputEscape) {
            const token = new FilterToken(toString.call(outputEscape), [], '', 0, 0);
            filters.push(new Filter(token, outputEscape, liquid));
        }
    }
    *render(ctx, emitter) {
        const val = yield this.value.value(ctx, false);
        emitter.write(val);
    }
    *arguments() {
        yield this.value;
    }
}

class HTML extends TemplateImpl {
    constructor(token) {
        super(token);
        this.str = token.getContent();
    }
    *render(ctx, emitter) {
        emitter.write(this.str);
    }
}

/**
 * A variable's segments and location, which can be coerced to a string.
 */
class Variable {
    constructor(segments, location) {
        this.segments = segments;
        this.location = location;
    }
    toString() {
        return segmentsString(this.segments, true);
    }
    /** Return this variable's segments as an array, possibly with nested arrays for nested paths. */
    toArray() {
        function* _visit(...segments) {
            for (const segment of segments) {
                if (segment instanceof Variable) {
                    yield Array.from(_visit(...segment.segments));
                }
                else {
                    yield segment;
                }
            }
        }
        return Array.from(_visit(...this.segments));
    }
}
/**
 * Group variables by the string representation of their root segment.
 */
class VariableMap {
    constructor() {
        this.map = new Map();
    }
    get(key) {
        const k = segmentsString([key.segments[0]]);
        if (!this.map.has(k)) {
            this.map.set(k, []);
        }
        return this.map.get(k);
    }
    has(key) {
        return this.map.has(segmentsString([key.segments[0]]));
    }
    push(variable) {
        this.get(variable).push(variable);
    }
    asObject() {
        return Object.fromEntries(this.map);
    }
}
const defaultStaticAnalysisOptions = {
    partials: true
};
function* _analyze(templates, partials, sync) {
    const variables = new VariableMap();
    const globals = new VariableMap();
    const locals = new VariableMap();
    const rootScope = new DummyScope(new Set());
    // Names of partial templates that we've already analyzed.
    const seen = new Set();
    function updateVariables(variable, scope) {
        variables.push(variable);
        const aliased = scope.alias(variable);
        if (aliased !== undefined) {
            const root = aliased.segments[0];
            // TODO: What if a a template renders a rendered template? Do we need scope.parent?
            if (isString(root) && !rootScope.has(root)) {
                globals.push(aliased);
            }
        }
        else {
            const root = variable.segments[0];
            if (isString(root) && !scope.has(root)) {
                globals.push(variable);
            }
        }
        // Recurse for nested Variables
        for (const segment of variable.segments) {
            if (segment instanceof Variable) {
                updateVariables(segment, scope);
            }
        }
    }
    function* visit(template, scope) {
        if (template.arguments) {
            for (const arg of template.arguments()) {
                for (const variable of extractVariables(arg)) {
                    updateVariables(variable, scope);
                }
            }
        }
        if (template.localScope) {
            for (const ident of template.localScope()) {
                scope.add(ident.content);
                scope.deleteAlias(ident.content);
                const [row, col] = ident.getPosition();
                locals.push(new Variable([ident.content], { row, col, file: ident.file }));
            }
        }
        if (template.children) {
            if (template.partialScope) {
                const partial = template.partialScope();
                if (partial === undefined) {
                    // Layouts, for example, can have children that are not partials.
                    for (const child of (yield template.children(partials, sync))) {
                        yield visit(child, scope);
                    }
                    return;
                }
                if (seen.has(partial.name))
                    return;
                const partialScopeNames = new Set();
                const partialScope = partial.isolated
                    ? new DummyScope(partialScopeNames)
                    : scope.push(partialScopeNames);
                for (const name of partial.scope) {
                    if (isString(name)) {
                        partialScopeNames.add(name);
                    }
                    else {
                        const [alias, argument] = name;
                        partialScopeNames.add(alias);
                        const variables = Array.from(extractVariables(argument));
                        if (variables.length) {
                            partialScope.setAlias(alias, variables[0].segments);
                        }
                    }
                }
                for (const child of (yield template.children(partials, sync))) {
                    yield visit(child, partialScope);
                    seen.add(partial.name);
                }
                partialScope.pop();
            }
            else {
                if (template.blockScope) {
                    scope.push(new Set(template.blockScope()));
                }
                for (const child of (yield template.children(partials, sync))) {
                    yield visit(child, scope);
                }
                if (template.blockScope) {
                    scope.pop();
                }
            }
        }
    }
    for (const template of templates) {
        yield visit(template, rootScope);
    }
    return {
        variables: variables.asObject(),
        globals: globals.asObject(),
        locals: locals.asObject()
    };
}
/**
 * Statically analyze a template and report variable usage.
 */
function analyze(template, options = {}) {
    const opts = Object.assign(Object.assign({}, defaultStaticAnalysisOptions), options);
    return toPromise(_analyze(template, opts.partials, false));
}
/**
 * Statically analyze a template and report variable usage.
 */
function analyzeSync(template, options = {}) {
    const opts = Object.assign(Object.assign({}, defaultStaticAnalysisOptions), options);
    return toValueSync(_analyze(template, opts.partials, true));
}
/**
 * A stack to manage scopes while traversing templates during static analysis.
 */
class DummyScope {
    constructor(globals) {
        this.stack = [{ names: globals, aliases: new Map() }];
    }
    /** Return true if `name` is in scope.  */
    has(name) {
        for (const scope of this.stack) {
            if (scope.names.has(name)) {
                return true;
            }
        }
        return false;
    }
    push(scope) {
        this.stack.push({ names: scope, aliases: new Map() });
        return this;
    }
    pop() {
        var _a;
        return (_a = this.stack.pop()) === null || _a === void 0 ? void 0 : _a.names;
    }
    // Add a name to the template scope.
    add(name) {
        this.stack[0].names.add(name);
    }
    /** Return the variable that `variable` aliases, or `variable` if it doesn't alias anything. */
    alias(variable) {
        const root = variable.segments[0];
        if (!isString(root))
            return undefined;
        const alias = this.getAlias(root);
        if (alias === undefined)
            return undefined;
        return new Variable([...alias, ...variable.segments.slice(1)], variable.location);
    }
    // TODO: `from` could be a path with multiple segments, like `include.x`.
    setAlias(from, to) {
        this.stack[this.stack.length - 1].aliases.set(from, to);
    }
    deleteAlias(name) {
        this.stack[this.stack.length - 1].aliases.delete(name);
    }
    getAlias(name) {
        for (const scope of this.stack) {
            if (scope.aliases.has(name)) {
                return scope.aliases.get(name);
            }
            // If a scope has defined `name`, then it masks aliases in parent scopes.
            if (scope.names.has(name)) {
                return undefined;
            }
        }
        return undefined;
    }
}
function* extractVariables(value) {
    if (isValueToken(value)) {
        yield* extractValueTokenVariables(value);
    }
    else if (value instanceof Value) {
        yield* extractFilteredValueVariables(value);
    }
}
function* extractFilteredValueVariables(value) {
    for (const token of value.initial.postfix) {
        if (isValueToken(token)) {
            yield* extractValueTokenVariables(token);
        }
    }
    for (const filter of value.filters) {
        for (const arg of filter.args) {
            if (isKeyValuePair(arg) && arg[1]) {
                yield* extractValueTokenVariables(arg[1]);
            }
            else if (isValueToken(arg)) {
                yield* extractValueTokenVariables(arg);
            }
        }
    }
}
function* extractValueTokenVariables(token) {
    if (isRangeToken(token)) {
        yield* extractValueTokenVariables(token.lhs);
        yield* extractValueTokenVariables(token.rhs);
    }
    else if (isPropertyAccessToken(token)) {
        yield extractPropertyAccessVariable(token);
    }
}
function extractPropertyAccessVariable(token) {
    const segments = [];
    // token is not guaranteed to have `file` set. We'll try to get it from a prop if not.
    let file = token.file;
    // Here we're flattening the first segment of a path if it is a nested path.
    const root = token.props[0];
    file = file || root.file;
    if (isQuotedToken(root) || isNumberToken(root) || isWordToken(root)) {
        segments.push(root.content);
    }
    else if (isPropertyAccessToken(root)) {
        // Flatten paths that start with a nested path.
        segments.push(...extractPropertyAccessVariable(root).segments);
    }
    for (const prop of token.props.slice(1)) {
        file = file || prop.file;
        if (isQuotedToken(prop) || isNumberToken(prop) || isWordToken(prop)) {
            segments.push(prop.content);
        }
        else if (isPropertyAccessToken(prop)) {
            segments.push(extractPropertyAccessVariable(prop));
        }
    }
    const [row, col] = token.getPosition();
    return new Variable(segments, {
        row,
        col,
        file
    });
}
// This is used to detect segments that can be represented with dot notation
// when creating a string representation of VariableSegments.
const RE_PROPERTY = /^[\u0080-\uFFFFa-zA-Z_][\u0080-\uFFFFa-zA-Z0-9_-]*$/;
/**
 * Return a string representation of segments using dot notation where possible.
 * @param segments - The property names and array indices that make up a path to a variable.
 * @param bracketedRoot - If false (the default), don't surround the root segment with square brackets.
 */
function segmentsString(segments, bracketedRoot = false) {
    const buf = [];
    const root = segments[0];
    if (isString(root)) {
        if (!bracketedRoot || root.match(RE_PROPERTY)) {
            buf.push(`${root}`);
        }
        else {
            buf.push(`['${root}']`);
        }
    }
    for (const segment of segments.slice(1)) {
        if (segment instanceof Variable) {
            buf.push(`[${segmentsString(segment.segments)}]`);
        }
        else if (isString(segment)) {
            if (segment.match(RE_PROPERTY)) {
                buf.push(`.${segment}`);
            }
            else {
                buf.push(`['${segment}']`);
            }
        }
        else {
            buf.push(`[${segment}]`);
        }
    }
    return buf.join('');
}

var LookupType;
(function (LookupType) {
    LookupType["Partials"] = "partials";
    LookupType["Layouts"] = "layouts";
    LookupType["Root"] = "root";
})(LookupType || (LookupType = {}));
class Loader {
    constructor(options) {
        this.options = options;
        if (options.relativeReference) {
            const sep = options.fs.sep;
            assert$1(sep, '`fs.sep` is required for relative reference');
            const rRelativePath = new RegExp(['.' + sep, '..' + sep, './', '../'].map(prefix => escapeRegex(prefix)).join('|'));
            this.shouldLoadRelative = (referencedFile) => rRelativePath.test(referencedFile);
        }
        else {
            this.shouldLoadRelative = (_referencedFile) => false;
        }
        this.contains = this.options.fs.contains || (() => true);
    }
    *lookup(file, type, sync, currentFile) {
        const { fs } = this.options;
        const dirs = this.options[type];
        for (const filepath of this.candidates(file, dirs, currentFile, type !== LookupType.Root)) {
            if (sync ? fs.existsSync(filepath) : yield fs.exists(filepath))
                return filepath;
        }
        throw this.lookupError(file, dirs);
    }
    *candidates(file, dirs, currentFile, enforceRoot) {
        const { fs, extname } = this.options;
        if (this.shouldLoadRelative(file) && currentFile) {
            const referenced = fs.resolve(this.dirname(currentFile), file, extname);
            for (const dir of dirs) {
                if (!enforceRoot || this.contains(dir, referenced)) {
                    // the relatively referenced file is within one of root dirs
                    yield referenced;
                    break;
                }
            }
        }
        for (const dir of dirs) {
            const referenced = fs.resolve(dir, file, extname);
            if (!enforceRoot || this.contains(dir, referenced)) {
                yield referenced;
            }
        }
        if (fs.fallback !== undefined) {
            const filepath = fs.fallback(file);
            if (filepath !== undefined)
                yield filepath;
        }
    }
    dirname(path) {
        const fs = this.options.fs;
        assert$1(fs.dirname, '`fs.dirname` is required for relative reference');
        return fs.dirname(path);
    }
    lookupError(file, roots) {
        const err = new Error('ENOENT');
        err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
        err.code = 'ENOENT';
        return err;
    }
}

class Parser {
    constructor(liquid) {
        this.liquid = liquid;
        this.cache = this.liquid.options.cache;
        this.fs = this.liquid.options.fs;
        this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
        this.loader = new Loader(this.liquid.options);
        this.parseLimit = new Limiter('parse length', liquid.options.parseLimit);
    }
    parse(html, filepath) {
        html = String(html);
        this.parseLimit.use(html.length);
        const tokenizer = new Tokenizer(html, this.liquid.options.operators, filepath);
        const tokens = tokenizer.readTopLevelTokens(this.liquid.options);
        return this.parseTokens(tokens);
    }
    parseTokens(tokens) {
        let token;
        const templates = [];
        const errors = [];
        while ((token = tokens.shift())) {
            try {
                templates.push(this.parseToken(token, tokens));
            }
            catch (err) {
                if (this.liquid.options.catchAllErrors)
                    errors.push(err);
                else
                    throw err;
            }
        }
        if (errors.length)
            throw new LiquidErrors(errors);
        return templates;
    }
    parseToken(token, remainTokens) {
        try {
            if (isTagToken(token)) {
                const TagClass = this.liquid.tags[token.name];
                assert$1(TagClass, `tag "${token.name}" not found`);
                return new TagClass(token, remainTokens, this.liquid, this);
            }
            if (isOutputToken(token)) {
                return new Output(token, this.liquid);
            }
            return new HTML(token);
        }
        catch (e) {
            if (LiquidError.is(e))
                throw e;
            throw new ParseError(e, token);
        }
    }
    parseStream(tokens) {
        return new ParseStream(tokens, (token, tokens) => this.parseToken(token, tokens));
    }
    *_parseFileCached(file, sync, type = LookupType.Root, currentFile) {
        const cache = this.cache;
        const key = this.loader.shouldLoadRelative(file) ? currentFile + ',' + file : type + ':' + file;
        const tpls = yield cache.read(key);
        if (tpls)
            return tpls;
        const task = this._parseFile(file, sync, type, currentFile);
        // sync mode: exec the task and cache the result
        // async mode: cache the task before exec
        const taskOrTpl = sync ? yield task : toPromise(task);
        cache.write(key, taskOrTpl);
        // note: concurrent tasks will be reused, cache for failed task is removed until its end
        try {
            return yield taskOrTpl;
        }
        catch (err) {
            cache.remove(key);
            throw err;
        }
    }
    *_parseFile(file, sync, type = LookupType.Root, currentFile) {
        const filepath = yield this.loader.lookup(file, type, sync, currentFile);
        return this.parse(sync ? this.fs.readFileSync(filepath) : yield this.fs.readFile(filepath), filepath);
    }
}

var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["Number"] = 1] = "Number";
    TokenKind[TokenKind["Literal"] = 2] = "Literal";
    TokenKind[TokenKind["Tag"] = 4] = "Tag";
    TokenKind[TokenKind["Output"] = 8] = "Output";
    TokenKind[TokenKind["HTML"] = 16] = "HTML";
    TokenKind[TokenKind["Filter"] = 32] = "Filter";
    TokenKind[TokenKind["Hash"] = 64] = "Hash";
    TokenKind[TokenKind["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind[TokenKind["Word"] = 256] = "Word";
    TokenKind[TokenKind["Range"] = 512] = "Range";
    TokenKind[TokenKind["Quoted"] = 1024] = "Quoted";
    TokenKind[TokenKind["Operator"] = 2048] = "Operator";
    TokenKind[TokenKind["FilteredValue"] = 4096] = "FilteredValue";
    TokenKind[TokenKind["Delimited"] = 12] = "Delimited";
})(TokenKind || (TokenKind = {}));

function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
}
function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
}
function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
}
function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
}
function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
}
function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
}
function isNumberToken(val) {
    return getKind(val) === TokenKind.Number;
}
function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
}
function isWordToken(val) {
    return getKind(val) === TokenKind.Word;
}
function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
}
function isValueToken(val) {
    // valueTokenBitMask = TokenKind.Number | TokenKind.Literal | TokenKind.Quoted | TokenKind.PropertyAccess | TokenKind.Range
    return (getKind(val) & 1667) > 0;
}
function getKind(val) {
    return val ? val.kind : -1;
}

class Context {
    constructor(env = {}, opts = defaultOptions, renderOptions = {}, { memoryLimit, renderLimit } = {}) {
        var _a, _b, _c, _d, _e;
        /**
         * insert a Context-level empty scope,
         * for tags like `{% capture %}` `{% assign %}` to operate
         */
        this.scopes = [{}];
        this.registers = {};
        this.breakCalled = false;
        this.continueCalled = false;
        this.sync = !!renderOptions.sync;
        this.opts = opts;
        this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
        this.environments = isObject(env) ? env : Object(env);
        this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
        this.ownPropertyOnly = (_c = renderOptions.ownPropertyOnly) !== null && _c !== void 0 ? _c : opts.ownPropertyOnly;
        this.memoryLimit = memoryLimit !== null && memoryLimit !== void 0 ? memoryLimit : new Limiter('memory alloc', (_d = renderOptions.memoryLimit) !== null && _d !== void 0 ? _d : opts.memoryLimit);
        this.renderLimit = renderLimit !== null && renderLimit !== void 0 ? renderLimit : new Limiter('template render', getPerformance().now() + ((_e = renderOptions.renderLimit) !== null && _e !== void 0 ? _e : opts.renderLimit));
    }
    getRegister(key) {
        return (this.registers[key] = this.registers[key] || {});
    }
    setRegister(key, value) {
        return (this.registers[key] = value);
    }
    saveRegister(...keys) {
        return keys.map(key => [key, this.getRegister(key)]);
    }
    restoreRegister(keyValues) {
        return keyValues.forEach(([key, value]) => this.setRegister(key, value));
    }
    getAll() {
        return [this.globals, this.environments, ...this.scopes]
            .reduce((ctx, val) => __assign(ctx, val), {});
    }
    /**
     * @deprecated use `_get()` or `getSync()` instead
     */
    get(paths) {
        return this.getSync(paths);
    }
    getSync(paths) {
        return toValueSync(this._get(paths));
    }
    *_get(paths) {
        const scope = this.findScope(paths[0]); // first prop should always be a string
        return yield this._getFromScope(scope, paths);
    }
    /**
     * @deprecated use `_get()` instead
     */
    getFromScope(scope, paths) {
        return toValueSync(this._getFromScope(scope, paths));
    }
    *_getFromScope(scope, paths, strictVariables = this.strictVariables) {
        if (isString(paths))
            paths = paths.split('.');
        for (let i = 0; i < paths.length; i++) {
            scope = yield readProperty(scope, paths[i], this.ownPropertyOnly);
            if (strictVariables && isUndefined(scope)) {
                throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join('.'));
            }
        }
        return scope;
    }
    push(ctx) {
        return this.scopes.push(ctx);
    }
    pop() {
        return this.scopes.pop();
    }
    bottom() {
        return this.scopes[0];
    }
    spawn(scope = {}) {
        return new Context(scope, this.opts, {
            sync: this.sync,
            globals: this.globals,
            strictVariables: this.strictVariables
        }, {
            renderLimit: this.renderLimit,
            memoryLimit: this.memoryLimit
        });
    }
    findScope(key) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            const candidate = this.scopes[i];
            if (key in candidate)
                return candidate;
        }
        if (key in this.environments)
            return this.environments;
        return this.globals;
    }
}
function readProperty(obj, key, ownPropertyOnly) {
    obj = toLiquid(obj);
    key = toValue(key);
    if (isNil(obj))
        return obj;
    if (isArray(obj) && key < 0)
        return obj[obj.length + +key];
    const value = readJSProperty(obj, key, ownPropertyOnly);
    if (value === undefined && obj instanceof Drop)
        return obj.liquidMethodMissing(key);
    if (isFunction(value))
        return value.call(obj);
    if (key === 'size')
        return readSize(obj);
    else if (key === 'first')
        return readFirst(obj);
    else if (key === 'last')
        return readLast(obj);
    return value;
}
function readJSProperty(obj, key, ownPropertyOnly) {
    if (ownPropertyOnly && !hasOwnProperty.call(obj, key) && !(obj instanceof Drop))
        return undefined;
    return obj[key];
}
function readFirst(obj) {
    if (isArray(obj))
        return obj[0];
    return obj['first'];
}
function readLast(obj) {
    if (isArray(obj))
        return obj[obj.length - 1];
    return obj['last'];
}
function readSize(obj) {
    if (hasOwnProperty.call(obj, 'size') || obj['size'] !== undefined)
        return obj['size'];
    if (isArray(obj) || isString(obj))
        return obj.length;
    if (typeof obj === 'object')
        return Object.keys(obj).length;
}

var BlockMode;
(function (BlockMode) {
    /* store rendered html into blocks */
    BlockMode[BlockMode["OUTPUT"] = 0] = "OUTPUT";
    /* output rendered html directly */
    BlockMode[BlockMode["STORE"] = 1] = "STORE";
})(BlockMode || (BlockMode = {}));

const abs = argumentsToValue(Math.abs);
const at_least = argumentsToValue(Math.max);
const at_most = argumentsToValue(Math.min);
const ceil = argumentsToValue(Math.ceil);
const divided_by = argumentsToValue((dividend, divisor, integerArithmetic = false) => integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor);
const floor = argumentsToValue(Math.floor);
const minus = argumentsToValue((v, arg) => v - arg);
const modulo = argumentsToValue((v, arg) => v % arg);
const times = argumentsToValue((v, arg) => v * arg);
function round(v, arg = 0) {
    v = toValue(v);
    arg = toValue(arg);
    const amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
}
function plus(v, arg) {
    v = toValue(v);
    arg = toValue(arg);
    return Number(v) + Number(arg);
}

var mathFilters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  abs: abs,
  at_least: at_least,
  at_most: at_most,
  ceil: ceil,
  divided_by: divided_by,
  floor: floor,
  minus: minus,
  modulo: modulo,
  times: times,
  round: round,
  plus: plus
});

const url_decode = (x) => decodeURIComponent(stringify(x)).replace(/\+/g, ' ');
const url_encode = (x) => encodeURIComponent(stringify(x)).replace(/%20/g, '+');
const cgi_escape = (x) => encodeURIComponent(stringify(x))
    .replace(/%20/g, '+')
    .replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());
const uri_escape = (x) => encodeURI(stringify(x))
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']');
const rSlugifyDefault = /[^\p{M}\p{L}\p{Nd}]+/ug;
const rSlugifyReplacers = {
    'raw': /\s+/g,
    'default': rSlugifyDefault,
    'pretty': /[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,
    'ascii': /[^A-Za-z0-9]+/g,
    'latin': rSlugifyDefault,
    'none': null
};
function slugify(str, mode = 'default', cased = false) {
    str = stringify(str);
    const replacer = rSlugifyReplacers[mode];
    if (replacer) {
        if (mode === 'latin')
            str = removeAccents(str);
        str = str.replace(replacer, '-').replace(/^-|-$/g, '');
    }
    return cased ? str : str.toLowerCase();
}
function removeAccents(str) {
    return str.replace(/[àáâãäå]/g, 'a')
        .replace(/[æ]/g, 'ae')
        .replace(/[ç]/g, 'c')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[ð]/g, 'd')
        .replace(/[ñ]/g, 'n')
        .replace(/[òóôõöø]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ýÿ]/g, 'y')
        .replace(/[ß]/g, 'ss')
        .replace(/[œ]/g, 'oe')
        .replace(/[þ]/g, 'th')
        .replace(/[ẞ]/g, 'SS')
        .replace(/[Œ]/g, 'OE')
        .replace(/[Þ]/g, 'TH');
}

var urlFilters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  url_decode: url_decode,
  url_encode: url_encode,
  cgi_escape: cgi_escape,
  uri_escape: uri_escape,
  slugify: slugify
});

const join = argumentsToValue(function (v, arg) {
    const array = toArray(v);
    const sep = isNil(arg) ? ' ' : stringify(arg);
    const complexity = array.length * (1 + sep.length);
    this.context.memoryLimit.use(complexity);
    return array.join(sep);
});
const last$1 = argumentsToValue((v) => isArrayLike(v) ? last(v) : '');
const first = argumentsToValue((v) => isArrayLike(v) ? v[0] : '');
const reverse = argumentsToValue(function (v) {
    const array = toArray(v);
    this.context.memoryLimit.use(array.length);
    return [...array].reverse();
});
function* sort(arr, property) {
    const values = [];
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
        values.push([
            item,
            property ? yield this.context._getFromScope(item, stringify(property).split('.'), false) : item
        ]);
    }
    return values.sort((lhs, rhs) => {
        const lvalue = lhs[1];
        const rvalue = rhs[1];
        return lvalue < rvalue ? -1 : (lvalue > rvalue ? 1 : 0);
    }).map(tuple => tuple[0]);
}
function sort_natural(input, property) {
    const propertyString = stringify(property);
    const compare = property === undefined
        ? caseInsensitiveCompare
        : (lhs, rhs) => caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]);
    const array = toArray(input);
    this.context.memoryLimit.use(array.length);
    return [...array].sort(compare);
}
const size = (v) => (v && v.length) || 0;
function* map(arr, property) {
    const results = [];
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
        results.push(yield this.context._getFromScope(item, stringify(property), false));
    }
    return results;
}
function* sum(arr, property) {
    let sum = 0;
    const array = toArray(arr);
    for (const item of array) {
        const data = Number(property ? yield this.context._getFromScope(item, stringify(property), false) : item);
        sum += Number.isNaN(data) ? 0 : data;
    }
    return sum;
}
function compact(arr) {
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    return array.filter(x => !isNil(toValue(x)));
}
function concat(v, arg = []) {
    const lhs = toArray(v);
    const rhs = toArray(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return lhs.concat(rhs);
}
function push(v, arg) {
    return concat.call(this, v, [arg]);
}
function unshift(v, arg) {
    const array = toArray(v);
    this.context.memoryLimit.use(array.length);
    const clone = [...array];
    clone.unshift(arg);
    return clone;
}
function pop(v) {
    const clone = [...toArray(v)];
    clone.pop();
    return clone;
}
function shift(v) {
    const array = toArray(v);
    this.context.memoryLimit.use(array.length);
    const clone = [...array];
    clone.shift();
    return clone;
}
function slice(v, begin, length = 1) {
    v = toValue(v);
    if (isNil(v))
        return [];
    if (!isArray(v))
        v = stringify(v);
    begin = begin < 0 ? v.length + begin : begin;
    this.context.memoryLimit.use(length);
    return v.slice(begin, begin + length);
}
function expectedMatcher(expected) {
    if (this.context.opts.jekyllWhere) {
        return (v) => EmptyDrop.is(expected) ? equals(v, expected) : (isArray(v) ? arrayIncludes(v, expected) : equals(v, expected));
    }
    else if (expected === undefined) {
        return (v) => isTruthy(v, this.context);
    }
    else {
        return (v) => equals(v, expected);
    }
}
function* filter(include, arr, property, expected) {
    const values = [];
    arr = toArray(arr);
    this.context.memoryLimit.use(arr.length);
    const token = new Tokenizer(stringify(property)).readScopeValue();
    for (const item of arr) {
        values.push(yield evalToken(token, this.context.spawn(item)));
    }
    const matcher = expectedMatcher.call(this, expected);
    return arr.filter((_, i) => matcher(values[i]) === include);
}
function* filter_exp(include, arr, itemName, exp) {
    const filtered = [];
    const keyTemplate = new Value(stringify(exp), this.liquid);
    const array = toArray(arr);
    this.context.memoryLimit.use(array.length);
    for (const item of array) {
        this.context.push({ [itemName]: item });
        const value = yield keyTemplate.value(this.context);
        this.context.pop();
        if (value === include)
            filtered.push(item);
    }
    return filtered;
}
function* where(arr, property, expected) {
    return yield* filter.call(this, true, arr, property, expected);
}
function* reject(arr, property, expected) {
    return yield* filter.call(this, false, arr, property, expected);
}
function* where_exp(arr, itemName, exp) {
    return yield* filter_exp.call(this, true, arr, itemName, exp);
}
function* reject_exp(arr, itemName, exp) {
    return yield* filter_exp.call(this, false, arr, itemName, exp);
}
function* group_by(arr, property) {
    const map = new Map();
    arr = toEnumerable(arr);
    const token = new Tokenizer(stringify(property)).readScopeValue();
    this.context.memoryLimit.use(arr.length);
    for (const item of arr) {
        const key = yield evalToken(token, this.context.spawn(item));
        if (!map.has(key))
            map.set(key, []);
        map.get(key).push(item);
    }
    return [...map.entries()].map(([name, items]) => ({ name, items }));
}
function* group_by_exp(arr, itemName, exp) {
    const map = new Map();
    const keyTemplate = new Value(stringify(exp), this.liquid);
    arr = toEnumerable(arr);
    this.context.memoryLimit.use(arr.length);
    for (const item of arr) {
        this.context.push({ [itemName]: item });
        const key = yield keyTemplate.value(this.context);
        this.context.pop();
        if (!map.has(key))
            map.set(key, []);
        map.get(key).push(item);
    }
    return [...map.entries()].map(([name, items]) => ({ name, items }));
}
function* search(arr, property, expected) {
    const token = new Tokenizer(stringify(property)).readScopeValue();
    const array = toArray(arr);
    const matcher = expectedMatcher.call(this, expected);
    for (let index = 0; index < array.length; index++) {
        const value = yield evalToken(token, this.context.spawn(array[index]));
        if (matcher(value))
            return [index, array[index]];
    }
}
function* search_exp(arr, itemName, exp) {
    const predicate = new Value(stringify(exp), this.liquid);
    const array = toArray(arr);
    for (let index = 0; index < array.length; index++) {
        this.context.push({ [itemName]: array[index] });
        const value = yield predicate.value(this.context);
        this.context.pop();
        if (value)
            return [index, array[index]];
    }
}
function* has(arr, property, expected) {
    const result = yield* search.call(this, arr, property, expected);
    return !!result;
}
function* has_exp(arr, itemName, exp) {
    const result = yield* search_exp.call(this, arr, itemName, exp);
    return !!result;
}
function* find_index(arr, property, expected) {
    const result = yield* search.call(this, arr, property, expected);
    return result ? result[0] : undefined;
}
function* find_index_exp(arr, itemName, exp) {
    const result = yield* search_exp.call(this, arr, itemName, exp);
    return result ? result[0] : undefined;
}
function* find(arr, property, expected) {
    const result = yield* search.call(this, arr, property, expected);
    return result ? result[1] : undefined;
}
function* find_exp(arr, itemName, exp) {
    const result = yield* search_exp.call(this, arr, itemName, exp);
    return result ? result[1] : undefined;
}
function uniq(arr) {
    arr = toArray(arr);
    this.context.memoryLimit.use(arr.length);
    return [...new Set(arr)];
}
function sample(v, count = 1) {
    v = toValue(v);
    if (isNil(v))
        return [];
    if (!isArray(v))
        v = stringify(v);
    this.context.memoryLimit.use(count);
    const shuffled = [...v].sort(() => Math.random() - 0.5);
    if (count === 1)
        return shuffled[0];
    return shuffled.slice(0, count);
}

var arrayFilters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  join: join,
  last: last$1,
  first: first,
  reverse: reverse,
  sort: sort,
  sort_natural: sort_natural,
  size: size,
  map: map,
  sum: sum,
  compact: compact,
  concat: concat,
  push: push,
  unshift: unshift,
  pop: pop,
  shift: shift,
  slice: slice,
  where: where,
  reject: reject,
  where_exp: where_exp,
  reject_exp: reject_exp,
  group_by: group_by,
  group_by_exp: group_by_exp,
  has: has,
  has_exp: has_exp,
  find_index: find_index,
  find_index_exp: find_index_exp,
  find: find,
  find_exp: find_exp,
  uniq: uniq,
  sample: sample
});

function date(v, format, timezoneOffset) {
    var _a, _b, _c;
    const size = ((_a = v === null || v === void 0 ? void 0 : v.length) !== null && _a !== void 0 ? _a : 0) + ((_b = format === null || format === void 0 ? void 0 : format.length) !== null && _b !== void 0 ? _b : 0) + ((_c = timezoneOffset === null || timezoneOffset === void 0 ? void 0 : timezoneOffset.length) !== null && _c !== void 0 ? _c : 0);
    this.context.memoryLimit.use(size);
    const date = parseDate(v, this.context.opts, timezoneOffset);
    if (!date)
        return v;
    format = toValue(format);
    format = isNil(format) ? this.context.opts.dateFormat : stringify(format);
    return strftime(date, format);
}
function date_to_xmlschema(v) {
    return date.call(this, v, '%Y-%m-%dT%H:%M:%S%:z');
}
function date_to_rfc822(v) {
    return date.call(this, v, '%a, %d %b %Y %H:%M:%S %z');
}
function date_to_string(v, type, style) {
    return stringify_date.call(this, v, '%b', type, style);
}
function date_to_long_string(v, type, style) {
    return stringify_date.call(this, v, '%B', type, style);
}
function stringify_date(v, month_type, type, style) {
    const date = parseDate(v, this.context.opts);
    if (!date)
        return v;
    if (type === 'ordinal') {
        const d = date.getDate();
        return style === 'US'
            ? strftime(date, `${month_type} ${d}%q, %Y`)
            : strftime(date, `${d}%q ${month_type} %Y`);
    }
    return strftime(date, `%d ${month_type} %Y`);
}
function parseDate(v, opts, timezoneOffset) {
    let date;
    const defaultTimezoneOffset = timezoneOffset !== null && timezoneOffset !== void 0 ? timezoneOffset : opts.timezoneOffset;
    const locale = opts.locale;
    v = toValue(v);
    if (v === 'now' || v === 'today') {
        date = new LiquidDate(Date.now(), locale, defaultTimezoneOffset);
    }
    else if (isNumber(v)) {
        date = new LiquidDate(v * 1000, locale, defaultTimezoneOffset);
    }
    else if (isString(v)) {
        if (/^\d+$/.test(v)) {
            date = new LiquidDate(+v * 1000, locale, defaultTimezoneOffset);
        }
        else if (opts.preserveTimezones && timezoneOffset === undefined) {
            date = LiquidDate.createDateFixedToTimezone(v, locale);
        }
        else {
            date = new LiquidDate(v, locale, defaultTimezoneOffset);
        }
    }
    else {
        date = new LiquidDate(v, locale, defaultTimezoneOffset);
    }
    return date.valid() ? date : undefined;
}

var dateFilters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  date_to_xmlschema: date_to_xmlschema,
  date_to_rfc822: date_to_rfc822,
  date_to_string: date_to_string,
  date_to_long_string: date_to_long_string
});

/**
 * String related filters
 *
 * * prefer stringify() to String() since `undefined`, `null` should eval ''
 */
const rCJKWord = /[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu;
// Word boundary followed by word characters (for detecting words)
const rNonCJKWord = /[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;
function append(v, arg) {
    assert$1(arguments.length === 2, 'append expect 2 arguments');
    const lhs = stringify(v);
    const rhs = stringify(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return lhs + rhs;
}
function prepend(v, arg) {
    assert$1(arguments.length === 2, 'prepend expect 2 arguments');
    const lhs = stringify(v);
    const rhs = stringify(arg);
    this.context.memoryLimit.use(lhs.length + rhs.length);
    return rhs + lhs;
}
function lstrip(v, chars) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return str.replace(new RegExp(`^[${chars}]+`, 'g'), '');
    }
    return str.replace(/^\s+/, '');
}
function downcase(v) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.toLowerCase();
}
function upcase(v) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return stringify(str).toUpperCase();
}
function remove(v, arg) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.split(stringify(arg)).join('');
}
function remove_first(v, l) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.replace(stringify(l), '');
}
function remove_last(v, l) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    const pattern = stringify(l);
    const index = str.lastIndexOf(pattern);
    if (index === -1)
        return str;
    return str.substring(0, index) + str.substring(index + pattern.length);
}
function rstrip(str, chars) {
    str = stringify(str);
    this.context.memoryLimit.use(str.length);
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return str.replace(new RegExp(`[${chars}]+$`, 'g'), '');
    }
    return str.replace(/\s+$/, '');
}
function split(v, arg) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    const arr = str.split(stringify(arg));
    // align to ruby split, which is the behavior of shopify/liquid
    // see: https://ruby-doc.org/core-2.4.0/String.html#method-i-split
    while (arr.length && arr[arr.length - 1] === '')
        arr.pop();
    return arr;
}
function strip(v, chars) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    if (chars) {
        chars = escapeRegExp(stringify(chars));
        return str
            .replace(new RegExp(`^[${chars}]+`, 'g'), '')
            .replace(new RegExp(`[${chars}]+$`, 'g'), '');
    }
    return str.trim();
}
function strip_newlines(v) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.replace(/\r?\n/gm, '');
}
function capitalize(str) {
    str = stringify(str);
    this.context.memoryLimit.use(str.length);
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function replace(v, pattern, replacement) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.split(stringify(pattern)).join(replacement);
}
function replace_first(v, arg1, arg2) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.replace(stringify(arg1), arg2);
}
function replace_last(v, arg1, arg2) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    const pattern = stringify(arg1);
    const index = str.lastIndexOf(pattern);
    if (index === -1)
        return str;
    const replacement = stringify(arg2);
    return str.substring(0, index) + replacement + str.substring(index + pattern.length);
}
function truncate(v, l = 50, o = '...') {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    if (str.length <= l)
        return v;
    return str.substring(0, l - o.length) + o;
}
function truncatewords(v, words = 15, o = '...') {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    const arr = str.split(/\s+/);
    if (words <= 0)
        words = 1;
    let ret = arr.slice(0, words).join(' ');
    if (arr.length >= words)
        ret += o;
    return ret;
}
function normalize_whitespace(v) {
    const str = stringify(v);
    this.context.memoryLimit.use(str.length);
    return str.replace(/\s+/g, ' ');
}
function number_of_words(input, mode) {
    const str = stringify(input);
    this.context.memoryLimit.use(str.length);
    input = str.trim();
    if (!input)
        return 0;
    switch (mode) {
        case 'cjk':
            // Count CJK characters and words
            return (input.match(rCJKWord) || []).length + (input.match(rNonCJKWord) || []).length;
        case 'auto':
            // Count CJK characters, if none, count words
            return rCJKWord.test(input)
                ? input.match(rCJKWord).length + (input.match(rNonCJKWord) || []).length
                : input.split(/\s+/).length;
        default:
            // Count words only
            return input.split(/\s+/).length;
    }
}
function array_to_sentence_string(array, connector = 'and') {
    this.context.memoryLimit.use(array.length);
    switch (array.length) {
        case 0:
            return '';
        case 1:
            return array[0];
        case 2:
            return `${array[0]} ${connector} ${array[1]}`;
        default:
            return `${array.slice(0, -1).join(', ')}, ${connector} ${array[array.length - 1]}`;
    }
}

var stringFilters = /*#__PURE__*/Object.freeze({
  __proto__: null,
  append: append,
  prepend: prepend,
  lstrip: lstrip,
  downcase: downcase,
  upcase: upcase,
  remove: remove,
  remove_first: remove_first,
  remove_last: remove_last,
  rstrip: rstrip,
  split: split,
  strip: strip,
  strip_newlines: strip_newlines,
  capitalize: capitalize,
  replace: replace,
  replace_first: replace_first,
  replace_last: replace_last,
  truncate: truncate,
  truncatewords: truncatewords,
  normalize_whitespace: normalize_whitespace,
  number_of_words: number_of_words,
  array_to_sentence_string: array_to_sentence_string
});

const filters = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, htmlFilters), mathFilters), urlFilters), arrayFilters), dateFilters), stringFilters), misc);

class AssignTag extends Tag {
    constructor(token, remainTokens, liquid) {
        super(token, remainTokens, liquid);
        this.identifier = this.tokenizer.readIdentifier();
        this.key = this.identifier.content;
        this.tokenizer.assert(this.key, 'expected variable name');
        this.tokenizer.skipBlank();
        this.tokenizer.assert(this.tokenizer.peek() === '=', 'expected "="');
        this.tokenizer.advance();
        this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
    }
    *render(ctx) {
        ctx.bottom()[this.key] = yield this.value.value(ctx, this.liquid.options.lenientIf);
    }
    *arguments() {
        yield this.value;
    }
    *localScope() {
        yield this.identifier;
    }
}

const MODIFIERS = ['offset', 'limit', 'reversed'];
class ForTag extends Tag {
    constructor(token, remainTokens, liquid, parser) {
        super(token, remainTokens, liquid);
        const variable = this.tokenizer.readIdentifier();
        const inStr = this.tokenizer.readIdentifier();
        const collection = this.tokenizer.readValue();
        if (!variable.size() || inStr.content !== 'in' || !collection) {
            throw new Error(`illegal tag: ${token.getText()}`);
        }
        this.variable = variable.content;
        this.collection = collection;
        this.hash = new Hash(this.tokenizer, liquid.options.keyValueSeparator);
        this.templates = [];
        this.elseTemplates = [];
        let p;
        const stream = parser.parseStream(remainTokens)
            .on('start', () => (p = this.templates))
            .on('tag:else', tag => { assertEmpty(tag.args); p = this.elseTemplates; })
            .on('tag:endfor', tag => { assertEmpty(tag.args); stream.stop(); })
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => { throw new Error(`tag ${token.getText()} not closed`); });
        stream.start();
    }
    *render(ctx, emitter) {
        const r = this.liquid.renderer;
        let collection = toEnumerable(yield evalToken(this.collection, ctx));
        if (!collection.length) {
            yield r.renderTemplates(this.elseTemplates, ctx, emitter);
            return;
        }
        const continueKey = 'continue-' + this.variable + '-' + this.collection.getText();
        ctx.push({ continue: ctx.getRegister(continueKey) });
        const hash = yield this.hash.render(ctx);
        ctx.pop();
        const modifiers = this.liquid.options.orderedFilterParameters
            ? Object.keys(hash).filter(x => MODIFIERS.includes(x))
            : MODIFIERS.filter(x => hash[x] !== undefined);
        collection = modifiers.reduce((collection, modifier) => {
            if (modifier === 'offset')
                return offset(collection, hash['offset']);
            if (modifier === 'limit')
                return limit(collection, hash['limit']);
            return reversed(collection);
        }, collection);
        ctx.setRegister(continueKey, (hash['offset'] || 0) + collection.length);
        const scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
        ctx.push(scope);
        for (const item of collection) {
            scope[this.variable] = item;
            ctx.continueCalled = ctx.breakCalled = false;
            yield r.renderTemplates(this.templates, ctx, emitter);
            if (ctx.breakCalled)
                break;
            scope.forloop.next();
        }
        ctx.continueCalled = ctx.breakCalled = false;
        ctx.pop();
    }
    *children() {
        const templates = this.templates.slice();
        if (this.elseTemplates) {
            templates.push(...this.elseTemplates);
        }
        return templates;
    }
    *arguments() {
        yield this.collection;
        for (const v of Object.values(this.hash.hash)) {
            if (isValueToken(v)) {
                yield v;
            }
        }
    }
    blockScope() {
        return [this.variable, 'forloop'];
    }
}
function reversed(arr) {
    return [...arr].reverse();
}
function offset(arr, count) {
    return arr.slice(count);
}
function limit(arr, count) {
    return arr.slice(0, count);
}

class CaptureTag extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
        super(tagToken, remainTokens, liquid);
        this.templates = [];
        this.identifier = this.readVariable();
        this.variable = this.identifier.content;
        while (remainTokens.length) {
            const token = remainTokens.shift();
            if (isTagToken(token) && token.name === 'endcapture')
                return;
            this.templates.push(parser.parseToken(token, remainTokens));
        }
        throw new Error(`tag ${tagToken.getText()} not closed`);
    }
    readVariable() {
        let ident = this.tokenizer.readIdentifier();
        if (ident.content)
            return ident;
        ident = this.tokenizer.readQuoted();
        if (ident)
            return ident;
        throw this.tokenizer.error('invalid capture name');
    }
    *render(ctx) {
        const r = this.liquid.renderer;
        const html = yield r.renderTemplates(this.templates, ctx);
        ctx.bottom()[this.variable] = html;
    }
    *children() {
        return this.templates;
    }
    *localScope() {
        yield this.identifier;
    }
}

class CaseTag extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
        super(tagToken, remainTokens, liquid);
        this.branches = [];
        this.elseTemplates = [];
        this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
        this.elseTemplates = [];
        let p = [];
        let elseCount = 0;
        const stream = parser.parseStream(remainTokens)
            .on('tag:when', (token) => {
            if (elseCount > 0) {
                return;
            }
            p = [];
            const values = [];
            while (!token.tokenizer.end()) {
                values.push(token.tokenizer.readValueOrThrow());
                token.tokenizer.skipBlank();
                if (token.tokenizer.peek() === ',') {
                    token.tokenizer.readTo(',');
                }
                else {
                    token.tokenizer.readTo('or');
                }
            }
            this.branches.push({
                values,
                templates: p
            });
        })
            .on('tag:else', () => {
            elseCount++;
            p = this.elseTemplates;
        })
            .on('tag:endcase', () => stream.stop())
            .on('template', (tpl) => {
            if (p !== this.elseTemplates || elseCount === 1) {
                p.push(tpl);
            }
        })
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    }
    *render(ctx, emitter) {
        const r = this.liquid.renderer;
        const target = toValue(yield this.value.value(ctx, ctx.opts.lenientIf));
        let branchHit = false;
        for (const branch of this.branches) {
            for (const valueToken of branch.values) {
                const value = yield evalToken(valueToken, ctx, ctx.opts.lenientIf);
                if (equals(target, value)) {
                    yield r.renderTemplates(branch.templates, ctx, emitter);
                    branchHit = true;
                    break;
                }
            }
        }
        if (!branchHit) {
            yield r.renderTemplates(this.elseTemplates, ctx, emitter);
        }
    }
    *arguments() {
        yield this.value;
        yield* this.branches.flatMap(b => b.values);
    }
    *children() {
        const templates = this.branches.flatMap(b => b.templates);
        if (this.elseTemplates) {
            templates.push(...this.elseTemplates);
        }
        return templates;
    }
}

class CommentTag extends Tag {
    constructor(tagToken, remainTokens, liquid) {
        super(tagToken, remainTokens, liquid);
        while (remainTokens.length) {
            const token = remainTokens.shift();
            if (isTagToken(token) && token.name === 'endcomment')
                return;
        }
        throw new Error(`tag ${tagToken.getText()} not closed`);
    }
    render() { }
}

class RenderTag extends Tag {
    constructor(token, remainTokens, liquid, parser) {
        super(token, remainTokens, liquid);
        const tokenizer = this.tokenizer;
        this.file = parseFilePath(tokenizer, this.liquid, parser);
        this.currentFile = token.file;
        while (!tokenizer.end()) {
            tokenizer.skipBlank();
            const begin = tokenizer.p;
            const keyword = tokenizer.readIdentifier();
            if (keyword.content === 'with' || keyword.content === 'for') {
                tokenizer.skipBlank();
                // can be normal key/value pair, like "with: true"
                if (tokenizer.peek() !== ':') {
                    const value = tokenizer.readValue();
                    // can be normal key, like "with,"
                    if (value) {
                        const beforeAs = tokenizer.p;
                        const asStr = tokenizer.readIdentifier();
                        let alias;
                        if (asStr.content === 'as')
                            alias = tokenizer.readIdentifier();
                        else
                            tokenizer.p = beforeAs;
                        this[keyword.content] = { value, alias: alias && alias.content };
                        tokenizer.skipBlank();
                        if (tokenizer.peek() === ',')
                            tokenizer.advance();
                        continue; // matched!
                    }
                }
            }
            /**
             * restore cursor if with/for not matched
             */
            tokenizer.p = begin;
            break;
        }
        this.hash = new Hash(tokenizer, liquid.options.keyValueSeparator);
    }
    *render(ctx, emitter) {
        const { liquid, hash } = this;
        const filepath = (yield renderFilePath(this['file'], ctx, liquid));
        assert$1(filepath, () => `illegal file path "${filepath}"`);
        const childCtx = ctx.spawn();
        const scope = childCtx.bottom();
        __assign(scope, yield hash.render(ctx));
        if (this['with']) {
            const { value, alias } = this['with'];
            scope[alias || filepath] = yield evalToken(value, ctx);
        }
        if (this['for']) {
            const { value, alias } = this['for'];
            const collection = toEnumerable(yield evalToken(value, ctx));
            scope['forloop'] = new ForloopDrop(collection.length, value.getText(), alias);
            for (const item of collection) {
                scope[alias] = item;
                const templates = (yield liquid._parsePartialFile(filepath, childCtx.sync, this['currentFile']));
                yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
                scope['forloop'].next();
            }
        }
        else {
            const templates = (yield liquid._parsePartialFile(filepath, childCtx.sync, this['currentFile']));
            yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
        }
    }
    *children(partials, sync) {
        if (partials && isString(this['file'])) {
            return (yield this.liquid._parsePartialFile(this['file'], sync, this['currentFile']));
        }
        return [];
    }
    partialScope() {
        if (isString(this['file'])) {
            const names = Object.keys(this.hash.hash);
            if (this['with']) {
                const { value, alias } = this['with'];
                if (isString(alias)) {
                    names.push([alias, value]);
                }
                else if (isString(this.file)) {
                    names.push([this.file, value]);
                }
            }
            if (this['for']) {
                const { value, alias } = this['for'];
                if (isString(alias)) {
                    names.push([alias, value]);
                }
                else if (isString(this.file)) {
                    names.push([this.file, value]);
                }
            }
            return { name: this['file'], isolated: true, scope: names };
        }
    }
    *arguments() {
        for (const v of Object.values(this.hash.hash)) {
            if (isValueToken(v)) {
                yield v;
            }
        }
        if (this['with']) {
            const { value } = this['with'];
            if (isValueToken(value)) {
                yield value;
            }
        }
        if (this['for']) {
            const { value } = this['for'];
            if (isValueToken(value)) {
                yield value;
            }
        }
    }
}
/**
 * @return null for "none",
 * @return Template[] for quoted with tags and/or filters
 * @return Token for expression (not quoted)
 * @throws TypeError if cannot read next token
 */
function parseFilePath(tokenizer, liquid, parser) {
    if (liquid.options.dynamicPartials) {
        const file = tokenizer.readValue();
        tokenizer.assert(file, 'illegal file path');
        if (file.getText() === 'none')
            return;
        if (isQuotedToken(file)) {
            // for filenames like "files/{{file}}", eval as liquid template
            const templates = parser.parse(evalQuotedToken(file));
            return optimize(templates);
        }
        return file;
    }
    const tokens = [...tokenizer.readFileNameTemplate(liquid.options)];
    const templates = optimize(parser.parseTokens(tokens));
    return templates === 'none' ? undefined : templates;
}
function optimize(templates) {
    // for filenames like "files/file.liquid", extract the string directly
    if (templates.length === 1 && isHTMLToken(templates[0].token))
        return templates[0].token.getContent();
    return templates;
}
function* renderFilePath(file, ctx, liquid) {
    if (typeof file === 'string')
        return file;
    if (Array.isArray(file))
        return liquid.renderer.renderTemplates(file, ctx);
    return yield evalToken(file, ctx);
}

class IncludeTag extends Tag {
    constructor(token, remainTokens, liquid, parser) {
        super(token, remainTokens, liquid);
        const { tokenizer } = token;
        this['file'] = parseFilePath(tokenizer, this.liquid, parser);
        this['currentFile'] = token.file;
        const begin = tokenizer.p;
        const withStr = tokenizer.readIdentifier();
        if (withStr.content === 'with') {
            tokenizer.skipBlank();
            if (tokenizer.peek() !== ':') {
                this.withVar = tokenizer.readValue();
            }
            else
                tokenizer.p = begin;
        }
        else
            tokenizer.p = begin;
        this.hash = new Hash(tokenizer, liquid.options.jekyllInclude || liquid.options.keyValueSeparator);
    }
    *render(ctx, emitter) {
        const { liquid, hash, withVar } = this;
        const { renderer } = liquid;
        const filepath = (yield renderFilePath(this['file'], ctx, liquid));
        assert$1(filepath, () => `illegal file path "${filepath}"`);
        const saved = ctx.saveRegister('blocks', 'blockMode');
        ctx.setRegister('blocks', {});
        ctx.setRegister('blockMode', BlockMode.OUTPUT);
        const scope = (yield hash.render(ctx));
        if (withVar)
            scope[filepath] = yield evalToken(withVar, ctx);
        const templates = (yield liquid._parsePartialFile(filepath, ctx.sync, this['currentFile']));
        ctx.push(ctx.opts.jekyllInclude ? { include: scope } : scope);
        yield renderer.renderTemplates(templates, ctx, emitter);
        ctx.pop();
        ctx.restoreRegister(saved);
    }
    *children(partials, sync) {
        if (partials && isString(this['file'])) {
            return (yield this.liquid._parsePartialFile(this['file'], sync, this['currentFile']));
        }
        return [];
    }
    partialScope() {
        if (isString(this['file'])) {
            let names;
            if (this.liquid.options.jekyllInclude) {
                names = ['include'];
            }
            else {
                names = Object.keys(this.hash.hash);
                if (this.withVar) {
                    names.push([this['file'], this.withVar]);
                }
            }
            return { name: this['file'], isolated: false, scope: names };
        }
    }
    *arguments() {
        yield* Object.values(this.hash.hash).filter(isValueToken);
        if (isValueToken(this['file'])) {
            yield this['file'];
        }
        if (isValueToken(this.withVar)) {
            yield this.withVar;
        }
    }
}

class DecrementTag extends Tag {
    constructor(token, remainTokens, liquid) {
        super(token, remainTokens, liquid);
        this.identifier = this.tokenizer.readIdentifier();
        this.variable = this.identifier.content;
    }
    render(context, emitter) {
        const scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        emitter.write(stringify(--scope[this.variable]));
    }
    *localScope() {
        yield this.identifier;
    }
}

class CycleTag extends Tag {
    constructor(token, remainTokens, liquid) {
        super(token, remainTokens, liquid);
        this.candidates = [];
        const group = this.tokenizer.readValue();
        this.tokenizer.skipBlank();
        if (group) {
            if (this.tokenizer.peek() === ':') {
                this.group = group;
                this.tokenizer.advance();
            }
            else
                this.candidates.push(group);
        }
        while (!this.tokenizer.end()) {
            const value = this.tokenizer.readValue();
            if (value)
                this.candidates.push(value);
            this.tokenizer.readTo(',');
        }
        this.tokenizer.assert(this.candidates.length, () => `empty candidates: "${token.getText()}"`);
    }
    *render(ctx, emitter) {
        const group = (yield evalToken(this.group, ctx));
        const fingerprint = `cycle:${group}:` + this.candidates.join(',');
        const groups = ctx.getRegister('cycle');
        let idx = groups[fingerprint];
        if (idx === undefined) {
            idx = groups[fingerprint] = 0;
        }
        const candidate = this.candidates[idx];
        idx = (idx + 1) % this.candidates.length;
        groups[fingerprint] = idx;
        return yield evalToken(candidate, ctx);
    }
    *arguments() {
        yield* this.candidates;
        if (this.group) {
            yield this.group;
        }
    }
}

class IfTag extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
        super(tagToken, remainTokens, liquid);
        this.branches = [];
        let p = [];
        parser.parseStream(remainTokens)
            .on('start', () => this.branches.push({
            value: new Value(tagToken.tokenizer.readFilteredValue(), this.liquid),
            templates: (p = [])
        }))
            .on('tag:elsif', (token) => {
            assert$1(!this.elseTemplates, 'unexpected elsif after else');
            this.branches.push({
                value: new Value(token.tokenizer.readFilteredValue(), this.liquid),
                templates: (p = [])
            });
        })
            .on('tag:else', tag => {
            assertEmpty(tag.args);
            assert$1(!this.elseTemplates, 'duplicated else');
            p = this.elseTemplates = [];
        })
            .on('tag:endif', function (tag) { assertEmpty(tag.args); this.stop(); })
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => { throw new Error(`tag ${tagToken.getText()} not closed`); })
            .start();
    }
    *render(ctx, emitter) {
        const r = this.liquid.renderer;
        for (const { value, templates } of this.branches) {
            const v = yield value.value(ctx, ctx.opts.lenientIf);
            if (isTruthy(v, ctx)) {
                yield r.renderTemplates(templates, ctx, emitter);
                return;
            }
        }
        yield r.renderTemplates(this.elseTemplates || [], ctx, emitter);
    }
    *children() {
        const templates = this.branches.flatMap(b => b.templates);
        if (this.elseTemplates) {
            templates.push(...this.elseTemplates);
        }
        return templates;
    }
    arguments() {
        return this.branches.map(b => b.value);
    }
}

class IncrementTag extends Tag {
    constructor(token, remainTokens, liquid) {
        super(token, remainTokens, liquid);
        this.identifier = this.tokenizer.readIdentifier();
        this.variable = this.identifier.content;
    }
    render(context, emitter) {
        const scope = context.environments;
        if (!isNumber(scope[this.variable])) {
            scope[this.variable] = 0;
        }
        const val = scope[this.variable];
        scope[this.variable]++;
        emitter.write(stringify(val));
    }
    *localScope() {
        yield this.identifier;
    }
}

class LayoutTag extends Tag {
    constructor(token, remainTokens, liquid, parser) {
        super(token, remainTokens, liquid);
        this.file = parseFilePath(this.tokenizer, this.liquid, parser);
        this['currentFile'] = token.file;
        this.args = new Hash(this.tokenizer, liquid.options.keyValueSeparator);
        this.templates = parser.parseTokens(remainTokens);
    }
    *render(ctx, emitter) {
        const { liquid, args, file } = this;
        const { renderer } = liquid;
        if (file === undefined) {
            ctx.setRegister('blockMode', BlockMode.OUTPUT);
            yield renderer.renderTemplates(this.templates, ctx, emitter);
            return;
        }
        const filepath = (yield renderFilePath(this.file, ctx, liquid));
        assert$1(filepath, () => `illegal file path "${filepath}"`);
        const templates = (yield liquid._parseLayoutFile(filepath, ctx.sync, this['currentFile']));
        // render remaining contents and store rendered results
        ctx.setRegister('blockMode', BlockMode.STORE);
        const html = yield renderer.renderTemplates(this.templates, ctx);
        const blocks = ctx.getRegister('blocks');
        // set whole content to anonymous block if anonymous doesn't specified
        if (blocks[''] === undefined)
            blocks[''] = (parent, emitter) => emitter.write(html);
        ctx.setRegister('blockMode', BlockMode.OUTPUT);
        // render the layout file use stored blocks
        ctx.push((yield args.render(ctx)));
        yield renderer.renderTemplates(templates, ctx, emitter);
        ctx.pop();
    }
    *children(partials) {
        const templates = this.templates.slice();
        if (partials && isString(this.file)) {
            templates.push(...(yield this.liquid._parsePartialFile(this.file, true, this['currentFile'])));
        }
        return templates;
    }
    *arguments() {
        for (const v of Object.values(this.args.hash)) {
            if (isValueToken(v)) {
                yield v;
            }
        }
        if (isValueToken(this.file)) {
            yield this.file;
        }
    }
    partialScope() {
        if (isString(this.file)) {
            return { name: this.file, isolated: false, scope: Object.keys(this.args.hash) };
        }
    }
}

class BlockTag extends Tag {
    constructor(token, remainTokens, liquid, parser) {
        super(token, remainTokens, liquid);
        this.templates = [];
        const match = /\w+/.exec(token.args);
        this.block = match ? match[0] : '';
        while (remainTokens.length) {
            const token = remainTokens.shift();
            if (isTagToken(token) && token.name === 'endblock')
                return;
            const template = parser.parseToken(token, remainTokens);
            this.templates.push(template);
        }
        throw new Error(`tag ${token.getText()} not closed`);
    }
    *render(ctx, emitter) {
        const blockRender = this.getBlockRender(ctx);
        if (ctx.getRegister('blockMode') === BlockMode.STORE) {
            ctx.getRegister('blocks')[this.block] = blockRender;
        }
        else {
            yield blockRender(new BlockDrop(), emitter);
        }
    }
    getBlockRender(ctx) {
        const { liquid, templates } = this;
        const renderChild = ctx.getRegister('blocks')[this.block];
        const renderCurrent = function* (superBlock, emitter) {
            // add {{ block.super }} support when rendering
            ctx.push({ block: superBlock });
            yield liquid.renderer.renderTemplates(templates, ctx, emitter);
            ctx.pop();
        };
        return renderChild
            ? (superBlock, emitter) => renderChild(new BlockDrop((emitter) => renderCurrent(superBlock, emitter)), emitter)
            : renderCurrent;
    }
    *children() {
        return this.templates;
    }
    blockScope() {
        return ['block'];
    }
}

class RawTag extends Tag {
    constructor(tagToken, remainTokens, liquid) {
        super(tagToken, remainTokens, liquid);
        this.tokens = [];
        while (remainTokens.length) {
            const token = remainTokens.shift();
            if (isTagToken(token) && token.name === 'endraw')
                return;
            this.tokens.push(token);
        }
        throw new Error(`tag ${tagToken.getText()} not closed`);
    }
    render() {
        return this.tokens.map((token) => token.getText()).join('');
    }
}

class TablerowloopDrop extends ForloopDrop {
    constructor(length, cols, collection, variable) {
        super(length, collection, variable);
        this.length = length;
        this.cols = cols;
    }
    row() {
        return Math.floor(this.i / this.cols) + 1;
    }
    col0() {
        return (this.i % this.cols);
    }
    col() {
        return this.col0() + 1;
    }
    col_first() {
        return this.col0() === 0;
    }
    col_last() {
        return this.col() === this.cols;
    }
}

class TablerowTag extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
        super(tagToken, remainTokens, liquid);
        const variable = this.tokenizer.readIdentifier();
        this.tokenizer.skipBlank();
        const predicate = this.tokenizer.readIdentifier();
        const collectionToken = this.tokenizer.readValue();
        if (predicate.content !== 'in' || !collectionToken) {
            throw new Error(`illegal tag: ${tagToken.getText()}`);
        }
        this.variable = variable.content;
        this.collection = collectionToken;
        this.args = new Hash(this.tokenizer, liquid.options.keyValueSeparator);
        this.templates = [];
        let p;
        const stream = parser.parseStream(remainTokens)
            .on('start', () => (p = this.templates))
            .on('tag:endtablerow', () => stream.stop())
            .on('template', (tpl) => p.push(tpl))
            .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
        });
        stream.start();
    }
    *render(ctx, emitter) {
        let collection = toEnumerable(yield evalToken(this.collection, ctx));
        const args = (yield this.args.render(ctx));
        const offset = args.offset || 0;
        const limit = (args.limit === undefined) ? collection.length : args.limit;
        collection = collection.slice(offset, offset + limit);
        const cols = args.cols || collection.length;
        const r = this.liquid.renderer;
        const tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
        const scope = { tablerowloop };
        ctx.push(scope);
        for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
            scope[this.variable] = collection[idx];
            if (tablerowloop.col0() === 0) {
                if (tablerowloop.row() !== 1)
                    emitter.write('</tr>');
                emitter.write(`<tr class="row${tablerowloop.row()}">`);
            }
            emitter.write(`<td class="col${tablerowloop.col()}">`);
            yield r.renderTemplates(this.templates, ctx, emitter);
            emitter.write('</td>');
        }
        if (collection.length)
            emitter.write('</tr>');
        ctx.pop();
    }
    *children() {
        return this.templates;
    }
    *arguments() {
        yield this.collection;
        for (const v of Object.values(this.args.hash)) {
            if (isValueToken(v)) {
                yield v;
            }
        }
    }
    blockScope() {
        return [this.variable, 'tablerowloop'];
    }
}

class UnlessTag extends Tag {
    constructor(tagToken, remainTokens, liquid, parser) {
        super(tagToken, remainTokens, liquid);
        this.branches = [];
        this.elseTemplates = [];
        let p = [];
        let elseCount = 0;
        parser.parseStream(remainTokens)
            .on('start', () => this.branches.push({
            value: new Value(tagToken.tokenizer.readFilteredValue(), this.liquid),
            test: isFalsy,
            templates: (p = [])
        }))
            .on('tag:elsif', (token) => {
            if (elseCount > 0) {
                p = [];
                return;
            }
            this.branches.push({
                value: new Value(token.tokenizer.readFilteredValue(), this.liquid),
                test: isTruthy,
                templates: (p = [])
            });
        })
            .on('tag:else', () => {
            elseCount++;
            p = this.elseTemplates;
        })
            .on('tag:endunless', function () { this.stop(); })
            .on('template', (tpl) => {
            if (p !== this.elseTemplates || elseCount === 1) {
                p.push(tpl);
            }
        })
            .on('end', () => { throw new Error(`tag ${tagToken.getText()} not closed`); })
            .start();
    }
    *render(ctx, emitter) {
        const r = this.liquid.renderer;
        for (const { value, test, templates } of this.branches) {
            const v = yield value.value(ctx, ctx.opts.lenientIf);
            if (test(v, ctx)) {
                yield r.renderTemplates(templates, ctx, emitter);
                return;
            }
        }
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
    *children() {
        const children = this.branches.flatMap(b => b.templates);
        if (this.elseTemplates) {
            children.push(...this.elseTemplates);
        }
        return children;
    }
    arguments() {
        return this.branches.map(b => b.value);
    }
}

class BreakTag extends Tag {
    render(ctx, _emitter) {
        ctx.breakCalled = true;
    }
}

class ContinueTag extends Tag {
    render(ctx, _emitter) {
        ctx.continueCalled = true;
    }
}

class EchoTag extends Tag {
    constructor(token, remainTokens, liquid) {
        super(token, remainTokens, liquid);
        this.tokenizer.skipBlank();
        if (!this.tokenizer.end()) {
            this.value = new Value(this.tokenizer.readFilteredValue(), this.liquid);
        }
    }
    *render(ctx, emitter) {
        if (!this.value)
            return;
        const val = yield this.value.value(ctx, false);
        emitter.write(val);
    }
    *arguments() {
        if (this.value) {
            yield this.value;
        }
    }
}

class LiquidTag extends Tag {
    constructor(token, remainTokens, liquid, parser) {
        super(token, remainTokens, liquid);
        const tokens = this.tokenizer.readLiquidTagTokens(this.liquid.options);
        this.templates = parser.parseTokens(tokens);
    }
    *render(ctx, emitter) {
        yield this.liquid.renderer.renderTemplates(this.templates, ctx, emitter);
    }
    *children() {
        return this.templates;
    }
}

class InlineCommentTag extends Tag {
    constructor(tagToken, remainTokens, liquid) {
        super(tagToken, remainTokens, liquid);
        if (tagToken.args.search(/\n\s*[^#\s]/g) !== -1) {
            throw new Error('every line of an inline comment must start with a \'#\' character');
        }
    }
    render() { }
}

const tags = {
    assign: AssignTag,
    'for': ForTag,
    capture: CaptureTag,
    'case': CaseTag,
    comment: CommentTag,
    include: IncludeTag,
    render: RenderTag,
    decrement: DecrementTag,
    increment: IncrementTag,
    cycle: CycleTag,
    'if': IfTag,
    layout: LayoutTag,
    block: BlockTag,
    raw: RawTag,
    tablerow: TablerowTag,
    unless: UnlessTag,
    'break': BreakTag,
    'continue': ContinueTag,
    echo: EchoTag,
    liquid: LiquidTag,
    '#': InlineCommentTag
};

class Liquid {
    constructor(opts = {}) {
        this.renderer = new Render();
        this.filters = {};
        this.tags = {};
        this.options = normalize(opts);
        // eslint-disable-next-line deprecation/deprecation
        this.parser = new Parser(this);
        forOwn(tags, (conf, name) => this.registerTag(name, conf));
        forOwn(filters, (handler, name) => this.registerFilter(name, handler));
    }
    parse(html, filepath) {
        const parser = new Parser(this);
        return parser.parse(html, filepath);
    }
    _render(tpl, scope, renderOptions) {
        const ctx = scope instanceof Context ? scope : new Context(scope, this.options, renderOptions);
        return this.renderer.renderTemplates(tpl, ctx);
    }
    render(tpl, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return toPromise(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
        });
    }
    renderSync(tpl, scope, renderOptions) {
        return toValueSync(this._render(tpl, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
    }
    renderToNodeStream(tpl, scope, renderOptions = {}) {
        const ctx = new Context(scope, this.options, renderOptions);
        return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
    }
    _parseAndRender(html, scope, renderOptions) {
        const tpl = this.parse(html);
        return this._render(tpl, scope, renderOptions);
    }
    parseAndRender(html, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return toPromise(this._parseAndRender(html, scope, Object.assign(Object.assign({}, renderOptions), { sync: false })));
        });
    }
    parseAndRenderSync(html, scope, renderOptions) {
        return toValueSync(this._parseAndRender(html, scope, Object.assign(Object.assign({}, renderOptions), { sync: true })));
    }
    _parsePartialFile(file, sync, currentFile) {
        return new Parser(this).parseFile(file, sync, LookupType.Partials, currentFile);
    }
    _parseLayoutFile(file, sync, currentFile) {
        return new Parser(this).parseFile(file, sync, LookupType.Layouts, currentFile);
    }
    _parseFile(file, sync, lookupType, currentFile) {
        return new Parser(this).parseFile(file, sync, lookupType, currentFile);
    }
    parseFile(file, lookupType) {
        return __awaiter(this, void 0, void 0, function* () {
            return toPromise(new Parser(this).parseFile(file, false, lookupType));
        });
    }
    parseFileSync(file, lookupType) {
        return toValueSync(new Parser(this).parseFile(file, true, lookupType));
    }
    *_renderFile(file, ctx, renderFileOptions) {
        const templates = (yield this._parseFile(file, renderFileOptions.sync, renderFileOptions.lookupType));
        return yield this._render(templates, ctx, renderFileOptions);
    }
    renderFile(file, ctx, renderFileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return toPromise(this._renderFile(file, ctx, Object.assign(Object.assign({}, renderFileOptions), { sync: false })));
        });
    }
    renderFileSync(file, ctx, renderFileOptions) {
        return toValueSync(this._renderFile(file, ctx, Object.assign(Object.assign({}, renderFileOptions), { sync: true })));
    }
    renderFileToNodeStream(file, scope, renderOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const templates = yield this.parseFile(file);
            return this.renderToNodeStream(templates, scope, renderOptions);
        });
    }
    _evalValue(str, scope) {
        const value = new Value(str, this);
        const ctx = scope instanceof Context ? scope : new Context(scope, this.options);
        return value.value(ctx);
    }
    evalValue(str, scope) {
        return __awaiter(this, void 0, void 0, function* () {
            return toPromise(this._evalValue(str, scope));
        });
    }
    evalValueSync(str, scope) {
        return toValueSync(this._evalValue(str, scope));
    }
    registerFilter(name, filter) {
        this.filters[name] = filter;
    }
    registerTag(name, tag) {
        this.tags[name] = isFunction(tag) ? tag : createTagClass(tag);
    }
    plugin(plugin) {
        return plugin.call(this, Liquid);
    }
    express() {
        const self = this; // eslint-disable-line
        let firstCall = true;
        return function (filePath, ctx, callback) {
            if (firstCall) {
                firstCall = false;
                const dirs = normalizeDirectoryList(this.root);
                self.options.root.unshift(...dirs);
                self.options.layouts.unshift(...dirs);
                self.options.partials.unshift(...dirs);
            }
            self.renderFile(filePath, ctx).then(html => callback(null, html), callback);
        };
    }
    analyze(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return analyze(template, options);
        });
    }
    analyzeSync(template, options = {}) {
        return analyzeSync(template, options);
    }
    parseAndAnalyze(html, filename, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return analyze(this.parse(html, filename), options);
        });
    }
    parseAndAnalyzeSync(html, filename, options = {}) {
        return analyzeSync(this.parse(html, filename), options);
    }
    /** Return an array of all variables without their properties. */
    variables(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const analysis = yield analyze(isString(template) ? this.parse(template) : template, options);
            return Object.keys(analysis.variables);
        });
    }
    /** Return an array of all variables without their properties. */
    variablesSync(template, options = {}) {
        const analysis = analyzeSync(isString(template) ? this.parse(template) : template, options);
        return Object.keys(analysis.variables);
    }
    /** Return an array of all variables including their properties/paths. */
    fullVariables(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const analysis = yield analyze(isString(template) ? this.parse(template) : template, options);
            return Array.from(new Set(Object.values(analysis.variables).flatMap((a) => a.map((v) => String(v)))));
        });
    }
    /** Return an array of all variables including their properties/paths. */
    fullVariablesSync(template, options = {}) {
        const analysis = analyzeSync(isString(template) ? this.parse(template) : template, options);
        return Array.from(new Set(Object.values(analysis.variables).flatMap((a) => a.map((v) => String(v)))));
    }
    /** Return an array of all variables, each as an array of properties/segments. */
    variableSegments(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const analysis = yield analyze(isString(template) ? this.parse(template) : template, options);
            return Array.from(strictUniq(Object.values(analysis.variables).flatMap((a) => a.map((v) => v.toArray()))));
        });
    }
    /** Return an array of all variables, each as an array of properties/segments. */
    variableSegmentsSync(template, options = {}) {
        const analysis = analyzeSync(isString(template) ? this.parse(template) : template, options);
        return Array.from(strictUniq(Object.values(analysis.variables).flatMap((a) => a.map((v) => v.toArray()))));
    }
    /** Return an array of all expected context variables without their properties. */
    globalVariables(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const analysis = yield analyze(isString(template) ? this.parse(template) : template, options);
            return Object.keys(analysis.globals);
        });
    }
    /** Return an array of all expected context variables without their properties. */
    globalVariablesSync(template, options = {}) {
        const analysis = analyzeSync(isString(template) ? this.parse(template) : template, options);
        return Object.keys(analysis.globals);
    }
    /** Return an array of all expected context variables including their properties/paths. */
    globalFullVariables(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const analysis = yield analyze(isString(template) ? this.parse(template) : template, options);
            return Array.from(new Set(Object.values(analysis.globals).flatMap((a) => a.map((v) => String(v)))));
        });
    }
    /** Return an array of all expected context variables including their properties/paths. */
    globalFullVariablesSync(template, options = {}) {
        const analysis = analyzeSync(isString(template) ? this.parse(template) : template, options);
        return Array.from(new Set(Object.values(analysis.globals).flatMap((a) => a.map((v) => String(v)))));
    }
    /** Return an array of all expected context variables, each as an array of properties/segments. */
    globalVariableSegments(template, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const analysis = yield analyze(isString(template) ? this.parse(template) : template, options);
            return Array.from(strictUniq(Object.values(analysis.globals).flatMap((a) => a.map((v) => v.toArray()))));
        });
    }
    /** Return an array of all expected context variables, each as an array of properties/segments. */
    globalVariableSegmentsSync(template, options = {}) {
        const analysis = analyzeSync(isString(template) ? this.parse(template) : template, options);
        return Array.from(strictUniq(Object.values(analysis.globals).flatMap((a) => a.map((v) => v.toArray()))));
    }
}

function render(_ctx, _cache) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
  const _component_v_text_overflow = resolveComponent("v-text-overflow");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list = resolveComponent("v-list");

  return (openBlock(), createBlock(_component_v_list, { nav: "" }, {
    default: withCtx(() => [
      createVNode(_component_v_list_item, { href: "https://app.texttoanything.nl/" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "open_in_new" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Text to anything dashboard" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, { to: "/tta_settings/templates" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "code" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Templates" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, { to: "/tta_settings/flowsLogExplorer" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "short_text" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Flows log explorer" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, { to: "/tta_settings/settings" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "settings" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Settings" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" <v-list-item to=\"/tta_settings/usage\">\r\n      <v-list-item-icon><v-icon name=\"bar_chart\" /></v-list-item-icon>\r\n      <v-list-item-content>\r\n        <v-text-overflow text=\"Usage\" />\r\n      </v-list-item-content>\r\n    </v-list-item> ")
    ]),
    _: 1 /* STABLE */
  }))
}

const script$e = {};


script$e.render = render;
script$e.__file = "settingsmodule/src/TTAnav.vue";

const _withScopeId$3 = n => (pushScopeId("data-v-4a16637c"),n=n(),popScopeId(),n);
const _hoisted_1$7 = {
  key: 0,
  class: "popover"
};
const _hoisted_2$5 = /*#__PURE__*/ _withScopeId$3(() => /*#__PURE__*/createElementVNode("br", null, null, -1 /* HOISTED */));
const _hoisted_3$5 = /*#__PURE__*/ _withScopeId$3(() => /*#__PURE__*/createElementVNode("ul", null, [
  /*#__PURE__*/createElementVNode("li", null, "HTML - preview as webpage"),
  /*#__PURE__*/createElementVNode("li", null, "PDF (Preview) - watermarked, free"),
  /*#__PURE__*/createElementVNode("li", null, "PDF - final version, without watermark"),
  /*#__PURE__*/createElementVNode("li", null, "Code - preview without test input")
], -1 /* HOISTED */));


var script$d = {
  __name: 'explainPreviewMode',
  props: {
  text: {
    type: String,
    required: true,
  },
},
  setup(__props) {



const visible = ref(false);

return (_ctx, _cache) => {
  const _component_v_icon = resolveComponent("v-icon");

  return (openBlock(), createElementBlock("div", {
    class: "info-popover",
    onMouseenter: _cache[0] || (_cache[0] = $event => (visible.value = true)),
    onMouseleave: _cache[1] || (_cache[1] = $event => (visible.value = false))
  }, [
    createVNode(_component_v_icon, {
      name: "question_mark",
      class: "info-icon"
    }),
    (visible.value)
      ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
          createTextVNode(" The preview mode has 4 modes: "),
          _hoisted_2$5,
          _hoisted_3$5
        ]))
      : createCommentVNode("v-if", true)
  ], 32 /* HYDRATE_EVENTS */))
}
}

};

var e=[],t$1=[];function n$1(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t$1[u]={}),a=t$1[u]&&t$1[u][s]?t$1[u][s]:t$1[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$a = "\n.info-popover[data-v-4a16637c] {\r\n  position: relative;\r\n  display: flex;\r\n  color: var(--theme--foreground-subdued);\n}\n.info-icon[data-v-4a16637c] {\r\n  margin: auto;\n}\n.popover[data-v-4a16637c] {\r\n  position: absolute;\r\n  top: 175%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background-color: var(--theme--background);\r\n  color: var(--theme--foreground);\r\n  border: 1px solid var(--theme--border);\r\n  padding: 0.5rem;\r\n  border-radius: 4px;\r\n  white-space: nowrap;\r\n  z-index: 1000;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\r\n";
n$1(css$a,{});

script$d.__scopeId = "data-v-4a16637c";
script$d.__file = "settingsmodule/src/pages/templates/explainPreviewMode.vue";

const HTML_SPINNER = `
    <html>
      <head>
        <style>
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: sans-serif;
            background: #f9f9f9;
          }
          .spinner {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-bottom: 10px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </head>
      <body>
        <div class="spinner">
          <div class="loader"></div>
          <div>Loading...</div>
        </div>
      </body>
    </html>`;

const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("div", { class: "field half" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "type-label" }, " Template name ")
], -1);
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("div", { class: "field half" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "type-label" }, " Description ")
], -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("div", { class: "field half" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "type-label" }, "Format")
], -1);
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("div", { class: "field half" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "type-label" }, " Orientation ")
], -1);
const _hoisted_5$4 = {
  key: 0,
  class: "TTA-popup"
};
const _hoisted_6$3 = { class: "TTA-toolbar" };
const _hoisted_7$3 = { class: "right-side" };
const _hoisted_8$2 = { class: "setwidth" };
const _hoisted_9$1 = { class: "TTA-action" };
const _hoisted_10 = { class: "TTA-wapper" };
const _hoisted_11 = { class: "devFields" };
const _hoisted_12 = { id: "partSelect" };
const _hoisted_13 = ["src", "srcDoc"];
const _hoisted_14 = { class: "tta-notice" };
const _hoisted_15 = /* @__PURE__ */ createElementVNode("a", {
  href: "https://app.texttoanything.nl",
  target: "_blank"
}, "TTA app", -1);
var script$c = /* @__PURE__ */ defineComponent({
  __name: "templates",
  setup(__props) {
    const { useFlowsStore, useNotificationsStore } = useStores();
    const flowStore = useFlowsStore();
    const notificationStore = useNotificationsStore();
    const flowOptions = computed(
      () => flowStore.flows.filter(
        (flow) => flow.trigger === "webhook" && flow.options.method == "POST"
      ).map((flow) => {
        return { text: flow.name, value: flow.id };
      })
    );
    const templates = ref([]), templateDetails = ref(false), editTemplate = ref(false), currentPart = ref("Development"), previewMode = ref("html"), computedTemplate = ref(""), deleting = ref(false), deletingID = ref();
    const widthPartition = ref(50);
    const previewWidth = computed(() => {
      return 100 - widthPartition.value;
    });
    const editorWidth = computed(() => {
      return 100 - previewWidth.value;
    });
    const currentHTML = ref("");
    function updateCurrentHTML() {
      if (currentPart.value == "Development")
        currentHTML.value = "";
      if (currentPart.value == "Header")
        currentHTML.value = currentTemplate.value.header;
      if (currentPart.value == "Body")
        currentHTML.value = currentTemplate.value.template;
      if (currentPart.value == "Footer")
        currentHTML.value = currentTemplate.value.footer;
    }
    watch(
      () => currentPart.value,
      () => {
        updateCurrentHTML();
      },
      {
        immediate: true
      }
    );
    function changeHTML(html2) {
      if (currentPart.value == "Header")
        currentTemplate.value.header = html2;
      else if (currentPart.value == "Body")
        currentTemplate.value.template = html2;
      else
        currentTemplate.value.footer = html2;
    }
    function changeJSON(json) {
      if (currentTemplate.value.input_type == "Fixed") {
        currentTemplate.value.input_fixed = json;
      } else
        currentTemplate.value.input_flow_body = json;
    }
    const api = useApi();
    const defaultTemplate = {
      template: "<h1>Hello {{name}}!</h1>",
      id: -1,
      name: "",
      description: "",
      collection: "",
      format: "A4",
      orientation: "portrait",
      header: "<!-- Any content/styling here is seperated from the body on render-->\n<style> \n    #header, #footer { \n        margin: 0 !important; \n        padding: 0 !important; \n        font-size: 9px; \n        -webkit-print-color-adjust: exact;\n    }\n</style>\n<div style='width:100%'>\n    <span class='date'></span>\n    <span class='title' style='float:right'></span>\n</div>",
      footer: "<!-- Any content/styling here is seperated from the body on render-->\n<style> \n    #header, #footer { \n        margin: 0 !important; \n        padding: 0 !important; \n        font-size: 9px; -webkit-print-color-adjust: exact;\n    }\n</style>\n<div\n  style=\u2018width:100%\u2019>\n  <div style=\u2018float:right\u2019><span\n      class='pageNumber'></span> / <span class='totalPages'></span>\n  </div>\n</div>",
      input_type: "Fixed",
      input_fixed: '{"name": "World!"}',
      input_flow: "",
      input_flow_body: "{}"
    };
    const currentTemplate = ref(structuredClone(defaultTemplate));
    const engine = new Liquid();
    watch(
      () => currentTemplate.value.id,
      (newID, oldID) => {
        if (newID == oldID)
          return;
        currentPart.value = "";
        nextTick(() => {
          currentPart.value = "Body";
        });
      }
    );
    watch(
      () => [
        currentTemplate.value.header,
        currentTemplate.value.template,
        currentTemplate.value.footer,
        currentTemplate.value.input_type,
        currentTemplate.value.input_flow,
        currentTemplate.value.input_fixed,
        previewMode.value
      ],
      () => {
        if (["html", "code"].includes(previewMode.value))
          generateHTML(previewMode.value);
      },
      {
        deep: true,
        immediate: true
      }
    );
    async function generateHTML(mode) {
      if (currentTemplate.value.input_type == "Flow" && !currentTemplate.value.input_flow) {
        return;
      }
      computedTemplate.value = "rendering";
      let input = {};
      try {
        if (currentTemplate.value.input_type == "Flow") {
          const webhookOutput = await api.post(
            "/flows/trigger/" + currentTemplate.value.input_flow,
            JSON.parse(currentTemplate.value.input_flow_body)
          );
          if (typeof webhookOutput.data != "object") {
            throw new Error(
              "Output of flow should be an object, not an " + typeof webhookOutput.data
            );
          }
          if ("name" in webhookOutput.data && "code" in webhookOutput.data && "status" in webhookOutput.data) {
            throw new Error(JSON.stringify(webhookOutput.data));
          }
          input = webhookOutput.data;
        } else {
          if (currentTemplate.value.input_fixed == null)
            currentTemplate.value.input_fixed = "{}";
          input = JSON.parse(currentTemplate.value.input_fixed);
        }
        if (mode == "html" || mode == "code") {
          const html2 = (currentTemplate.value.header || "") + (currentTemplate.value.template || "") + (currentTemplate.value.footer || "");
          const blob = new Blob(
            [
              `<style>
      .date:before{content: "Date here";font-style: italic; }
      .title:before{content: "Title here";font-style: italic; }
      .pageNumber:before{content: "Pagenumber";font-style: italic; }
      .totalPages:before{content: "Total pages";font-style: italic; }
      </style>` + (mode == "code" ? html2 : await engine.render(engine.parse(html2), input))
            ],
            {
              type: "text/html"
            }
          );
          computedTemplate.value = URL.createObjectURL(blob);
        } else {
          const header = engine.parse(currentTemplate.value.header || "");
          const tpl = engine.parse(currentTemplate.value.template);
          const footer = engine.parse(currentTemplate.value.footer || "");
          const headerRendered = await engine.render(header, input);
          const htmlRendered = await engine.render(tpl, input);
          const footerRendered = await engine.render(footer, input);
          const download = await fetch(
            "/tta/pdf?preview=" + (previewMode.value == "pdf-preview" ? "preview" : ""),
            {
              body: JSON.stringify({
                ...currentTemplate.value,
                input_fixed: void 0,
                input_flow: void 0,
                input_flow_body: void 0,
                input_type: void 0,
                id: void 0,
                header: headerRendered,
                html: htmlRendered,
                footer: footerRendered,
                landscape: currentTemplate.value.orientation != "portrait"
              }),
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then((e) => e.blob()).then((blob) => URL.createObjectURL(blob));
          computedTemplate.value = download;
        }
      } catch (error) {
        console.error(error);
        notificationStore.add({
          title: "Error while generating PDF",
          text: `Please check your console/terminal for the error.`,
          type: "error",
          dialog: true
        });
        computedTemplate.value = URL.createObjectURL(
          new Blob(["Error occurred: " + ((error == null ? void 0 : error.message) || error)], {
            type: "text/html"
          })
        );
      }
    }
    function generatePDF() {
      generateHTML("pdf");
    }
    onMounted(async () => {
      widthPartition.value = parseInt(
        localStorage.getItem("TTA-widthPartition") || "50"
      );
      fetchTemplates();
    });
    watch(
      () => widthPartition.value,
      (newval) => localStorage.setItem("TTA-widthPartition", newval + "")
    );
    async function fetchTemplates() {
      const getTemplates = await api.get("/items/TTA_htmltemplates", {
        params: {
          limit: -1
        }
      });
      templates.value = getTemplates.data.data;
    }
    async function saveTemplate() {
      if (currentTemplate.value.id == -1) {
        await api.post("/items/TTA_htmltemplates", {
          ...currentTemplate.value,
          id: void 0
        });
      } else {
        await api.patch(
          "/items/TTA_htmltemplates/" + currentTemplate.value.id,
          {
            ...currentTemplate.value,
            id: void 0
          }
        );
      }
      templateDetails.value = false;
      fetchTemplates();
    }
    function removeTemplate(id) {
      deletingID.value = id;
      deleting.value = true;
    }
    async function confirmDelete() {
      await api.delete("/items/TTA_htmltemplates/" + deletingID.value);
      templates.value = templates.value.filter((e) => e.id != deletingID.value);
      deleting.value = false;
    }
    function openTemplate({ item }) {
      currentTemplate.value = item;
      editTemplate.value = true;
    }
    function closeEditor() {
      currentTemplate.value = structuredClone(defaultTemplate);
      editTemplate.value = false;
    }
    function alignHTML() {
      const alignOptions = {
        wrap_line_length: 0,
        indent_inner_html: true
      };
      currentTemplate.value.template = html(
        currentTemplate.value.template,
        alignOptions
      );
      currentTemplate.value.footer = html(
        currentTemplate.value.footer,
        alignOptions
      );
      currentTemplate.value.header = html(
        currentTemplate.value.header,
        alignOptions
      );
      updateCurrentHTML();
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_input = resolveComponent("v-input");
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_VSelect = resolveComponent("VSelect");
      const _component_v_slider = resolveComponent("v-slider");
      const _component_VButton = resolveComponent("VButton");
      const _component_VIcon = resolveComponent("VIcon");
      const _component_v_table = resolveComponent("v-table");
      const _component_VNotice = resolveComponent("VNotice");
      const _component_private_view = resolveComponent("private-view");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_private_view, { title: "Offline templates" }, {
        navigation: withCtx(() => [
          createVNode(script$e)
        ]),
        actions: withCtx(() => [
          createVNode(_component_v_button, {
            rounded: "",
            icon: "",
            onClick: _cache[0] || (_cache[0] = ($event) => templateDetails.value = true)
          }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "add" })
            ]),
            _: 1
          }),
          createVNode(_component_v_dialog, {
            modelValue: templateDetails.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => templateDetails.value = $event),
            persistent: true
          }, {
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Create a new HTML template")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  _hoisted_1$6,
                                  createVNode(_component_v_input, {
                                    modelValue: currentTemplate.value.name,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentTemplate.value.name = $event),
                                    placeholder: "Template name"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  _hoisted_2$4,
                                  createVNode(_component_v_input, {
                                    modelValue: currentTemplate.value.description,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => currentTemplate.value.description = $event),
                                    placeholder: "Description"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  _hoisted_3$4,
                                  createVNode(_component_v_select, {
                                    modelValue: currentTemplate.value.format,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => currentTemplate.value.format = $event),
                                    placeholder: "Size",
                                    items: [
                                      "A1",
                                      "A2",
                                      "A3",
                                      "A4",
                                      "A5",
                                      "A6",
                                      "Letter",
                                      "Legal",
                                      "Tabloid",
                                      "Ledger"
                                    ].map((e) => ({
                                      text: e,
                                      value: e
                                    }))
                                  }, null, 8, ["modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  _hoisted_4$4,
                                  createVNode(_component_v_select, {
                                    modelValue: currentTemplate.value.orientation,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => currentTemplate.value.orientation = $event),
                                    placeholder: "Orientation",
                                    items: [
                                      {
                                        value: "portrait",
                                        text: "Portrait"
                                      },
                                      {
                                        value: "landscape",
                                        text: "Landscape"
                                      }
                                    ]
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_button, {
                        secondary: "",
                        onClick: _cache[5] || (_cache[5] = ($event) => templateDetails.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_button, {
                        disabled: !currentTemplate.value.name || !currentTemplate.value.format,
                        onClick: saveTemplate
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          editTemplate.value ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
            createElementVNode("div", _hoisted_6$3, [
              createElementVNode("div", {
                onClick: _cache[7] || (_cache[7] = ($event) => templateDetails.value = true),
                class: "TTA-template-title"
              }, [
                createTextVNode(toDisplayString(currentTemplate.value.name) + " ", 1),
                createVNode(_component_v_icon, { name: "edit" })
              ]),
              createElementVNode("div", _hoisted_7$3, [
                createVNode(_component_VSelect, {
                  modelValue: previewMode.value,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => previewMode.value = $event),
                  items: [
                    {
                      text: "HTML",
                      value: "html"
                    },
                    {
                      text: "PDF (Preview)",
                      value: "pdf-preview"
                    },
                    {
                      text: "PDF",
                      value: "pdf"
                    },
                    {
                      text: "Code",
                      value: "code"
                    }
                  ],
                  style: { "width": "170px" }
                }, null, 8, ["modelValue", "items"]),
                createVNode(script$d, { text: "This is helpful info." }),
                withDirectives((openBlock(), createElementBlock("div", {
                  class: "TTA-action",
                  onClick: alignHTML
                }, [
                  createVNode(_component_v_icon, { name: "vertical_align_center" })
                ])), [
                  [
                    _directive_tooltip,
                    "Click to format your HTML",
                    void 0,
                    { bottom: true }
                  ]
                ]),
                withDirectives((openBlock(), createElementBlock("div", {
                  class: "TTA-action",
                  onClick: saveTemplate
                }, [
                  createVNode(_component_v_icon, { name: "save" })
                ])), [
                  [
                    _directive_tooltip,
                    "Click to save the template",
                    void 0,
                    { bottom: true }
                  ]
                ]),
                createElementVNode("div", _hoisted_8$2, [
                  createVNode(_component_v_slider, {
                    modelValue: widthPartition.value,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => widthPartition.value = $event),
                    min: 10,
                    max: 90,
                    class: "TTA-slider"
                  }, null, 8, ["modelValue"])
                ]),
                createElementVNode("div", _hoisted_9$1, [
                  createVNode(_component_v_icon, {
                    name: "close",
                    onClick: closeEditor
                  })
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_10, [
              createElementVNode("div", {
                style: normalizeStyle("width: " + unref(editorWidth) + "%"),
                class: "TTA-editor-wrapper"
              }, [
                currentPart.value == "Development" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createElementVNode("div", _hoisted_11, [
                    createVNode(_component_v_select, {
                      modelValue: currentTemplate.value.input_type,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => currentTemplate.value.input_type = $event),
                      class: "max-w-input",
                      items: [
                        { value: "Flow", text: "Flow" },
                        { value: "Fixed", text: "Fixed" }
                      ]
                    }, null, 8, ["modelValue"]),
                    currentTemplate.value.input_type == "Flow" ? (openBlock(), createBlock(_component_v_select, {
                      key: 0,
                      modelValue: currentTemplate.value.input_flow,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => currentTemplate.value.input_flow = $event),
                      class: "max-w-input",
                      items: unref(flowOptions)
                    }, null, 8, ["modelValue", "items"])) : createCommentVNode("v-if", true)
                  ]),
                  currentTemplate.value.input_type == "Fixed" ? (openBlock(), createBlock(resolveDynamicComponent("interface-input-code"), {
                    key: 0,
                    class: "TTA-editor",
                    value: currentTemplate.value.input_fixed,
                    language: "json",
                    onInput: changeJSON
                  }, null, 40, ["value"])) : createCommentVNode("v-if", true),
                  currentTemplate.value.input_type == "Flow" ? (openBlock(), createBlock(resolveDynamicComponent("interface-input-code"), {
                    key: 1,
                    class: "TTA-editor",
                    value: currentTemplate.value.input_flow_body,
                    language: "json",
                    onInput: changeJSON
                  }, null, 40, ["value"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                currentPart.value != "Development" ? (openBlock(), createBlock(resolveDynamicComponent("interface-input-code"), {
                  key: 1,
                  class: "TTA-editor",
                  value: currentHTML.value,
                  language: "htmlmixed",
                  onInput: changeHTML
                }, null, 40, ["value"])) : createCommentVNode("v-if", true),
                createElementVNode("div", _hoisted_12, [
                  createVNode(_component_v_select, {
                    modelValue: currentPart.value,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => currentPart.value = $event),
                    items: [
                      { value: "Header", text: "Header" },
                      { value: "Body", text: "Body" },
                      { value: "Footer", text: "Footer" },
                      { value: "Development", text: "Test input" }
                    ]
                  }, null, 8, ["modelValue"])
                ])
              ], 4),
              createElementVNode("iframe", {
                class: "TTA-preview",
                src: computedTemplate.value == "rendering" ? void 0 : computedTemplate.value,
                srcDoc: computedTemplate.value == "rendering" ? unref(HTML_SPINNER) : void 0,
                style: normalizeStyle("width: " + unref(previewWidth) + "%")
              }, null, 12, _hoisted_13),
              previewMode.value.startsWith("pdf") ? (openBlock(), createBlock(_component_VButton, {
                key: 0,
                onClick: _cache[13] || (_cache[13] = ($event) => generatePDF()),
                icon: true,
                outlined: false,
                id: "generatePDF"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, { name: "refresh" })
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ])
          ])) : createCommentVNode("v-if", true),
          createVNode(_component_v_table, {
            headers: [
              {
                text: "Name",
                value: "name",
                sortable: false
              },
              {
                text: "Description",
                value: "description",
                width: 600,
                sortable: false
              },
              {
                text: "Format",
                value: "format",
                sortable: false
              },
              {
                text: "",
                value: "del",
                width: 60,
                sortable: false
              }
            ],
            "onClick:row": openTemplate,
            items: templates.value
          }, {
            "item.del": withCtx(({ item }) => [
              createVNode(_component_VButton, {
                onClick: withModifiers(($event) => removeTemplate(item.id), ["stop"]),
                outlined: true,
                icon: true,
                rounded: true
              }, {
                default: withCtx(() => [
                  createVNode(_component_VIcon, { name: "delete" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 1
          }, 8, ["items"]),
          createElementVNode("div", _hoisted_14, [
            createVNode(_component_VNotice, null, {
              default: withCtx(() => [
                createTextVNode(" You can create online templates in the\xA0 "),
                _hoisted_15,
                createTextVNode("\xA0 for a better editor experience. ")
              ]),
              _: 1
            })
          ]),
          createVNode(_component_v_dialog, {
            modelValue: deleting.value,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => deleting.value = $event),
            persistent: true
          }, {
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode(" Are you sure you want to delete this item? This action can not be undone. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_button, {
                        secondary: "",
                        onClick: _cache[14] || (_cache[14] = ($event) => deleting.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_button, {
                        kind: "danger",
                        onClick: confirmDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Proceed ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});

var css$9 = "\n.TTA-popup {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 100;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--theme--form--field--input--background-subdued);\n}\n.TTA-toolbar {\r\n    background-color: var(--theme--form--field--input--background-subdued);\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.TTA-toolbar .right-side {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.TTA-toolbar .TTA-slider {\r\n    padding-top: 5px;\n}\n.TTA-toolbar .TTA-action {\r\n    padding: 5px;\r\n    cursor: pointer;\n}\n.TTA-toolbar .setwidth {\r\n    display: flex;\r\n    gap: 10px;\r\n    padding-top: 6px;\n}\n.TTA-toolbar .TTA-template-title {\r\n    margin: auto 0;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    padding-right: 5px;\r\n    padding-left: 20px;\r\n    border-bottom: 1px solid var(--v-list-item-border-color);\n}\n.TTA-toolbar .TTA-template-title i {\r\n    padding-left: 5px;\n}\n.TTA-wapper {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    overflow: hidden;\r\n    position: relative;\n}\n.TTA-preview {\r\n    flex-grow: 1;\r\n    background-color: white;\r\n    border: 0;\n}\n.TTA-editor {\r\n    flex-grow: 1;\r\n    height: 100%;\r\n    width: 100%;\n}\n.TTA-wapper .TTA-editor-wrapper {\r\n    position: relative;\n}\n.TTA-editor > div {\r\n    height: 100% !important;\r\n    border-radius: 0 !important;\n}\n.TTA-editor .CodeMirror {\r\n    height: 100%;\n}\n.TTA-editor .CodeMirror-dialog.CodeMirror-dialog-top {\r\n    position: fixed !important;\r\n    bottom: 0 !important;\r\n    z-index: 100 !important;\n}\n.TTA-wapper #partSelect {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 200px;\n}\n.devFields {\r\n    border-top: var(--theme--border-width) solid\r\n        var(--theme--form--field--input--border-color);\r\n    margin-left: 25px;\r\n    margin-bottom: 10px;\n}\n.max-w-input {\r\n    max-width: 250px;\r\n    padding: 10px 0;\n}\n.max-w-input .v-input {\r\n    max-width: 250px;\r\n    margin-bottom: 5px;\n}\n#generatePDF {\r\n    position: fixed;\r\n    top: 69px;\r\n    right: 10px;\n}\n.tta-notice {\r\n    padding: 10px;\n}\r\n";
n$1(css$9,{});

script$c.__file = "settingsmodule/src/pages/templates.vue";

var script$b = /* @__PURE__ */ defineComponent({
  __name: "virusscanDialog",
  setup(__props) {
    const api = useApi();
    const folders = ref([]), dialogOpen = ref(false);
    onMounted(async () => {
      const getFolders = await api.get("/folders");
      folders.value = getFolders.data.data.map((e) => ({
        name: e.name,
        id: e.id,
        scanning: e.TTA_VIRUSSCAN_ENABLED == 1
      }));
    });
    const scanningFolderCount = computed(() => {
      return folders.value.filter((e) => e.scanning == true).length;
    });
    async function toggleFolder(folder) {
      folder.scanning = !folder.scanning;
      await api.patch("/folders/" + folder.id, {
        TTA_VIRUSSCAN_ENABLED: folder.scanning
      });
    }
    return (_ctx, _cache) => {
      const _component_VNotice = resolveComponent("VNotice");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_drawer = resolveComponent("v-drawer");
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_v_drawer, {
          modelValue: dialogOpen.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogOpen.value = $event),
          persistent: true,
          placement: "right",
          title: "Manage folders that are scanned for virusses",
          onCancel: _cache[1] || (_cache[1] = ($event) => dialogOpen.value = false),
          icon: "settings"
        }, {
          default: withCtx(() => [
            createVNode(_component_VNotice, null, {
              default: withCtx(() => [
                createTextVNode(" Any uploads to the enabled folders will be scanned. ")
              ]),
              _: 1
            }),
            createVNode(_component_v_table, {
              headers: [
                {
                  text: "",
                  value: "enabled"
                },
                {
                  text: "Name",
                  value: "name"
                }
              ],
              items: folders.value
            }, {
              "item.enabled": withCtx(({ item }) => [
                createVNode(_component_v_button, {
                  onClick: ($event) => toggleFolder(item),
                  small: "",
                  danger: !item.scanning
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.scanning ? "Enabled" : "Disabled"), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "danger"])
              ]),
              _: 1
            }, 8, ["items"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_v_button, {
          align: "left",
          fullWidth: "",
          small: "",
          onClick: _cache[2] || (_cache[2] = ($event) => dialogOpen.value = true)
        }, {
          default: withCtx(() => [
            createVNode(_component_v_icon, { name: "edit" }),
            unref(scanningFolderCount) == folders.value.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" All ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(unref(scanningFolderCount)) + "/" + toDisplayString(folders.value.length), 1)
            ], 64)),
            createTextVNode(" folders are being scanned ")
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

script$b.__file = "settingsmodule/src/pages/settings/virusscanDialog.vue";

var script$a = /* @__PURE__ */ defineComponent({
  __name: "passwordField",
  setup(__props) {
    const model = defineModel();
    const hidden = ref(true);
    function toggleHidePassword() {
      hidden.value = !hidden.value;
    }
    return (_ctx, _cache) => {
      const _component_VIcon = resolveComponent("VIcon");
      const _component_VInput = resolveComponent("VInput");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_VInput, {
        modelValue: unref(model),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
        type: hidden.value ? "password" : "text"
      }, {
        append: withCtx(() => [
          withDirectives(createVNode(_component_VIcon, {
            clickable: "",
            onClick: toggleHidePassword,
            name: hidden.value ? "visibility" : "visibility_off"
          }, null, 8, ["name"]), [
            [_directive_tooltip, hidden.value ? "Show value" : "Hide value"]
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "type"]);
    };
  }
});

script$a.__file = "settingsmodule/src/components/passwordField.vue";

const _withScopeId$2 = (n) => (pushScopeId("data-v-7f9dbb3b"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "cards-wrapper" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("span", { class: "field-name" }, "RapidAPI token", -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("span", { class: "field-name" }, "RapidAPI virusscanner token", -1));
const _hoisted_4$3 = { class: "field-name info-parent" };
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", null, [
  /* @__PURE__ */ createTextVNode(" What should happen when a virus is detected? "),
  /* @__PURE__ */ createElementVNode("ul", null, [
    /* @__PURE__ */ createElementVNode("li", null, " Delete threads, threads will be deleted immediately "),
    /* @__PURE__ */ createElementVNode("li", null, " Trigger flow, the selected flow will be triggered with upload payload ")
  ]),
  /* @__PURE__ */ createElementVNode("div", null, " The trigger flow option is ideal for when you want to send a notification or add extra logic. The trigger flow option will not automaticly delete the file. ")
], -1));
const _hoisted_6$2 = { key: 0 };
const _hoisted_7$2 = { class: "field-name info-parent" };
var script$9 = /* @__PURE__ */ defineComponent({
  __name: "settings",
  setup(__props) {
    const rapidKey = ref(""), rapidKeyVirus = ref("");
    const virusscannerActive = ref(false), virusscannerMode = ref(""), virusscannerFlow = ref("");
    const saving = ref("");
    const api = useApi();
    const { useFlowsStore } = useStores();
    const flowStore = useFlowsStore();
    const flows = computed(() => {
      return flowStore.flows.map((e) => ({ text: e.name, value: e.id }));
    });
    onMounted(async () => {
      const settings = await api.get("/settings");
      rapidKey.value = settings.data.data.TTA_KEY;
      rapidKeyVirus.value = settings.data.data.TTA_KEY_VIRUS;
      virusscannerFlow.value = settings.data.data.TTA_VIRUSSCANNER_FLOW_ID;
      virusscannerActive.value = settings.data.data.TTA_VIRUSSCANNER_ENABLED == 1 || false;
      virusscannerMode.value = settings.data.data.TTA_VIRUSSCANNER_MODE || "delete";
    });
    async function saveAPISettings() {
      saveSettings(
        {
          TTA_KEY: rapidKey.value,
          TTA_KEY_VIRUS: rapidKeyVirus.value
        },
        "apikeys"
      );
    }
    async function saveVirusscannerSettings() {
      saveSettings(
        {
          TTA_VIRUSSCANNER_ENABLED: virusscannerActive.value,
          TTA_VIRUSSCANNER_MODE: virusscannerMode.value,
          TTA_VIRUSSCANNER_FLOW_ID: virusscannerFlow.value
        },
        "virus"
      );
    }
    async function saveSettings(data, mode) {
      saving.value = mode;
      await api.patch("/settings", data);
      setTimeout(() => {
        saving.value = "";
      }, 500);
    }
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      const _component_VCheckbox = resolveComponent("VCheckbox");
      const _component_VIcon = resolveComponent("VIcon");
      const _component_VNotice = resolveComponent("VNotice");
      const _component_v_hover = resolveComponent("v-hover");
      const _component_v_select = resolveComponent("v-select");
      const _component_private_view = resolveComponent("private-view");
      return openBlock(), createBlock(_component_private_view, { title: "Settings" }, {
        navigation: withCtx(() => [
          createVNode(script$e)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$5, [
            createVNode(_component_v_card, { class: "w-full" }, {
              default: withCtx(() => [
                createVNode(_component_v_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode("API settings")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createElementVNode("div", null, [
                      _hoisted_2$3,
                      createVNode(script$a, {
                        modelValue: rapidKey.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => rapidKey.value = $event)
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_button, {
                      href: "https://rapidapi.com/Attacler/api/text-to-anything",
                      target: "_blank",
                      align: "left",
                      fullWidth: "",
                      small: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { name: "open_in_new" }),
                        createTextVNode(" Get RapidAPI token ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createElementVNode("div", null, [
                      _hoisted_3$3,
                      createVNode(script$a, {
                        modelValue: rapidKeyVirus.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => rapidKeyVirus.value = $event)
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_button, {
                      href: "https://rapidapi.com/Attacler/api/virusscan-texttoanything/",
                      target: "_blank",
                      align: "left",
                      fullWidth: "",
                      small: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { name: "open_in_new" }),
                        createTextVNode(" Get RapidAPI virusscanner token ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_actions, { class: "action-buttons" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_button, {
                      onClick: saveAPISettings,
                      disabled: saving.value == "apikeys",
                      id: "save-button"
                    }, {
                      default: withCtx(() => [
                        saving.value != "apikeys" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(" Save ")
                        ], 64)) : (openBlock(), createBlock(_component_v_progress_circular, {
                          key: 1,
                          small: true,
                          indeterminate: ""
                        }))
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_card, { class: "w-full" }, {
              default: withCtx(() => [
                createVNode(_component_v_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode("Virusscanner settings")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createElementVNode("div", null, [
                      createVNode(_component_VCheckbox, {
                        modelValue: virusscannerActive.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => virusscannerActive.value = $event),
                        value: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Automatic scanning ")
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createElementVNode("div", null, [
                      createElementVNode("div", _hoisted_4$3, [
                        createTextVNode(" Mode "),
                        createVNode(_component_v_hover, null, {
                          default: withCtx(({ hover }) => [
                            createVNode(_component_VIcon, { name: "info" }),
                            hover ? (openBlock(), createBlock(_component_VNotice, {
                              key: 0,
                              class: "info-popup"
                            }, {
                              default: withCtx(() => [
                                _hoisted_5$3
                              ]),
                              _: 1
                            })) : createCommentVNode("v-if", true)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_select, {
                        modelValue: virusscannerMode.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => virusscannerMode.value = $event),
                        items: [
                          {
                            text: "Delete threats",
                            value: "delete"
                          },
                          {
                            text: "Trigger flow",
                            value: "flow"
                          }
                        ]
                      }, null, 8, ["modelValue"])
                    ]),
                    virusscannerMode.value == "flow" ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                      createElementVNode("div", _hoisted_7$2, [
                        createTextVNode(" Flow "),
                        createVNode(_component_v_hover, null, {
                          default: withCtx(({ hover }) => [
                            createVNode(_component_VIcon, { name: "info" }),
                            hover ? (openBlock(), createBlock(_component_VNotice, {
                              key: 0,
                              class: "info-popup"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" This flow will be triggered once a virus has been detected. ")
                              ]),
                              _: 1
                            })) : createCommentVNode("v-if", true)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_select, {
                        items: unref(flows),
                        showDeselect: "",
                        modelValue: virusscannerFlow.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => virusscannerFlow.value = $event)
                      }, null, 8, ["items", "modelValue"])
                    ])) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createVNode(script$b)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_button, {
                      href: "https://texttoanything.nl/docs/directus/virusscanner",
                      target: "_blank",
                      align: "left",
                      fullWidth: "",
                      small: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { name: "open_in_new" }),
                        createTextVNode(" Virusscanner documentation ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_actions, { class: "action-buttons" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_button, {
                      onClick: saveVirusscannerSettings,
                      disabled: saving.value == "virus",
                      id: "save-button"
                    }, {
                      default: withCtx(() => [
                        saving.value != "virus" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(" Save ")
                        ], 64)) : (openBlock(), createBlock(_component_v_progress_circular, {
                          key: 1,
                          small: true,
                          indeterminate: ""
                        }))
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      });
    };
  }
});

var css$8 = "\n.w-full[data-v-7f9dbb3b] {\r\n    width: 100%;\n}\n.cards-wrapper[data-v-7f9dbb3b] {\r\n    padding: 0 2.5rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 2.5rem;\n}\n.fields-spacing[data-v-7f9dbb3b] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\n}\n#save-button[data-v-7f9dbb3b] {\r\n    margin-left: auto;\n}\n.info-parent[data-v-7f9dbb3b] {\r\n    position: relative;\r\n    display: flex;\r\n    gap: 5px;\n}\n.info-parent .info-popup[data-v-7f9dbb3b] {\r\n    position: absolute;\r\n    top: 25px;\r\n    left: 0;\r\n    z-index: 10;\n}\r\n";
n$1(css$8,{});

script$9.__scopeId = "data-v-7f9dbb3b";
script$9.__file = "settingsmodule/src/pages/settings.vue";

var script$8 = /* @__PURE__ */ defineComponent({
  __name: "dateTimePicker",
  props: {
    value: { type: [String, null], required: true }
  },
  setup(__props, { emit }) {
    const props = __props;
    const dateTimeMenu = ref(), date = ref(props.value);
    function isValidDate(date2) {
      const toCheckDate = new Date(date2 || -1);
      return toCheckDate instanceof Date && !isNaN(toCheckDate.getTime()) && toCheckDate.getFullYear() != 1970;
    }
    const isValidValue = computed(() => isValidDate(date == null ? void 0 : date.value));
    watch(
      () => date.value,
      () => {
        if (isValidValue.value) {
          console.log(" Updating with", date.value);
          emit("update:modelValue", date.value);
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_v_input = resolveComponent("v-input");
      const _component_v_date_picker = resolveComponent("v-date-picker");
      const _component_v_menu = resolveComponent("v-menu");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_v_menu, {
          ref_key: "dateTimeMenu",
          ref: dateTimeMenu,
          "close-on-content-click": false,
          attached: "",
          "full-height": "",
          seamless: ""
        }, {
          activator: withCtx(({ toggle, active }) => [
            createVNode(_component_v_input, {
              active,
              clickable: "",
              readonly: "",
              placeholder: !unref(isValidValue) ? date.value : void 0,
              onClick: toggle
            }, createSlots({ _: 2 }, [
              unref(isValidValue) ? {
                name: "prepend",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(date.value), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["active", "placeholder", "onClick"])
          ]),
          default: withCtx(() => {
            var _a;
            return [
              createVNode(_component_v_date_picker, {
                type: "date",
                "use-24": true,
                "include-seconds": false,
                "model-value": date.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => date.value = $event),
                onClose: (_a = dateTimeMenu.value) == null ? void 0 : _a.deactivate
              }, null, 8, ["model-value", "onClose"])
            ];
          }),
          _: 1
        }, 512)
      ]);
    };
  }
});

var css$7 = "\n.v-icon.today-icon[data-v-42405105]:hover,\r\n.v-icon.today-icon.active[data-v-42405105] {\r\n  --v-icon-color: var(--theme--primary);\n}\n.v-icon.clear-icon[data-v-42405105]:hover,\r\n.v-icon.clear-icon.active[data-v-42405105] {\r\n  --v-icon-color: var(--theme--danger);\n}\r\n";
n$1(css$7,{});

script$8.__scopeId = "data-v-42405105";
script$8.__file = "settingsmodule/src/components/dateTimePicker.vue";

var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]});},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},n={};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.d(n,{Z:()=>j});const c=(s={computed:()=>e$1.computed,createTextVNode:()=>e$1.createTextVNode,createVNode:()=>e$1.createVNode,defineComponent:()=>e$1.defineComponent,reactive:()=>e$1.reactive,ref:()=>e$1.ref,watch:()=>e$1.watch,watchEffect:()=>e$1.watchEffect},p={},t.d(p,s),p),i=(0, c.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return (0, c.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),u=(0, c.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return {uiType:(0, c.computed)((function(){return e.isMultiple?"checkbox":"radio"})),model:(0, c.computed)({get:function(){return e.checked},set:function(e){return n("update:modelValue",e)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return (0, c.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(e){return e.stopPropagation()}},[(0, c.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0, c.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),d=(0, c.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n="objectStart"===e||"arrayStart"===e;return n||"objectCollapsed"===e||"arrayCollapsed"===e?(0, c.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0, c.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0, c.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});var s,p;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3?arguments[3]:void 0,r=o||{},a=r.key,l=r.index,c=r.type,i=void 0===c?"content":c,u=r.showComma,d=void 0!==u&&u,s=r.length,p=void 0===s?1:s,h=f(e);if("array"===h){var g=v(e.map((function(e,o,r){return y(e,"".concat(t,"[").concat(o,"]"),n+1,{index:o,showComma:o!==r.length-1,length:p,type:i})})));return [y("[",t,n,{showComma:!1,key:a,length:e.length,type:"arrayStart"})[0]].concat(g,y("]",t,n,{showComma:d,length:e.length,type:"arrayEnd"})[0])}if("object"===h){var b=Object.keys(e),m=v(b.map((function(o,r,a){return y(e[o],/^[a-zA-Z_]\w*$/.test(o)?"".concat(t,".").concat(o):"".concat(t,'["').concat(o,'"]'),n+1,{key:o,showComma:r!==a.length-1,length:p,type:i})})));return [y("{",t,n,{showComma:!1,key:a,index:l,length:b.length,type:"objectStart"})[0]].concat(m,y("}",t,n,{showComma:d,length:b.length,type:"objectEnd"})[0])}return [{content:e,level:n,key:a,index:l,path:t,showComma:d,length:p,type:i}]}function v(e){if("function"==typeof Array.prototype.flat)return e.flat();for(var t=a(e),n=[];t.length;){var o=t.shift();Array.isArray(o)?t.unshift.apply(t,a(o)):n.push(o);}return n}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null==e)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!==h(e))return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map((function(e){return g(e,t)}));return t.set(e,n),n}var o={};for(var r in e)o[r]=g(e[r],t);return t.set(e,o),o}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o);}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}var C={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return !0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},theme:{type:String,default:"light"},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}};const k=(0, c.defineComponent)({name:"TreeNode",props:m(m({},C),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,o=(0, c.computed)((function(){return f(e.node.content)})),r=(0, c.computed)((function(){return "vjs-value vjs-value-".concat(o.value)})),a=(0, c.computed)((function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key})),l=(0, c.computed)((function(){return "multiple"===e.selectableType})),s=(0, c.computed)((function(){return "single"===e.selectableType})),p=(0, c.computed)((function(){return e.nodeSelectable(e.node)&&(l.value||s.value)})),h=(0, c.reactive)({editing:!1}),y=function(t){var o,r,a="null"===(r=null===(o=t.target)||void 0===o?void 0:o.value)?null:"undefined"===r?void 0:"true"===r||"false"!==r&&(r[0]+r[r.length-1]==='""'||r[0]+r[r.length-1]==="''"?r.slice(1,-1):"number"==typeof Number(r)&&!isNaN(Number(r))||"NaN"===r?Number(r):r);n("valueChange",a,e.node.path);},v=(0, c.computed)((function(){var t,n=null===(t=e.node)||void 0===t?void 0:t.content;return null===n?n="null":void 0===n&&(n="undefined"),"string"===o.value?'"'.concat(n,'"'):n+""})),g=function(){var t=e.renderNodeValue;return t?t({node:e.node,defaultValue:v.value}):v.value},b=function(){n("bracketsClick",!e.collapsed,e.node);},m=function(){n("iconClick",!e.collapsed,e.node);},C=function(){n("selectedChange",e.node);},k=function(){n("nodeClick",e.node),p.value&&e.selectOnClickNode&&n("selectedChange",e.node);},w=function(t){if(e.editable&&!h.editing){h.editing=!0;var n=function e(n){var o;n.target!==t.target&&(null===(o=n.target)||void 0===o?void 0:o.parentElement)!==t.target&&(h.editing=!1,document.removeEventListener("click",e));};document.removeEventListener("click",n),document.addEventListener("click",n);}};return function(){var t,n=e.node;return (0, c.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked,dark:"dark"===e.theme},onClick:k,style:e.style},[e.showLineNumber&&(0, c.createVNode)("span",{class:"vjs-node-index"},[n.id+1]),e.showSelectController&&p.value&&"objectEnd"!==n.type&&"arrayEnd"!==n.type&&(0, c.createVNode)(u,{isMultiple:l.value,checked:e.checked,onChange:C},null),(0, c.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(n.level)).map((function(t,n){return (0, c.createVNode)("div",{key:n,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)})),e.showIcon&&(0, c.createVNode)(d,{nodeType:n.type,onClick:m},null)]),n.key&&(0, c.createVNode)("span",{class:"vjs-key"},[(t=e.renderNodeKey,t?t({node:e.node,defaultKey:a.value||""}):a.value),(0, c.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0, c.createVNode)("span",null,["content"!==n.type&&n.content?(0, c.createVNode)(i,{data:n.content.toString(),onClick:b},null):(0, c.createVNode)("span",{class:r.value,onClick:!e.editable||e.editableTrigger&&"click"!==e.editableTrigger?void 0:w,onDblclick:e.editable&&"dblclick"===e.editableTrigger?w:void 0},[e.editable&&h.editing?(0, c.createVNode)("input",{value:v.value,onChange:y,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):g()]),n.showComma&&(0, c.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0, c.createVNode)("span",{class:"vjs-comment"},[(0, c.createTextVNode)(" // "),n.length,(0, c.createTextVNode)(" items ")])])])}}});function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o);}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){l(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}const j=(0, c.defineComponent)({name:"Tree",props:N(N({},C),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},collapsedNodeLength:{type:Number,default:1/0},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return !1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return ""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function},theme:{type:String,default:"light"}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,o=t.slots,i=(0, c.ref)(),u=(0, c.computed)((function(){return y(e.data,e.rootPath)})),d=function(t,n){return u.value.reduce((function(o,r){var a,c=r.level>=t||r.length>=n,i=null===(a=e.pathCollapsible)||void 0===a?void 0:a.call(e,r);return "objectStart"!==r.type&&"arrayStart"!==r.type||!c&&!i?o:N(N({},o),{},l({},r.path,1))}),{})},s=(0, c.reactive)({translateY:0,visibleData:null,hiddenPaths:d(e.deep,e.collapsedNodeLength)}),p=(0, c.computed)((function(){for(var e=null,t=[],n=u.value.length,o=0;o<n;o++){var r=N(N({},u.value[o]),{},{id:o}),a=s.hiddenPaths[r.path];if(e&&e.path===r.path){var l="objectStart"===e.type,c=N(N(N({},r),e),{},{showComma:r.showComma,content:l?"{...}":"[...]",type:l?"objectCollapsed":"arrayCollapsed"});e=null,t.push(c);}else {if(a&&!e){e=r;continue}if(e)continue;t.push(r);}}return t})),h=(0, c.computed)((function(){var t=e.selectedValue;return t&&"multiple"===e.selectableType&&Array.isArray(t)?t:[t]})),f=(0, c.computed)((function(){return !e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."})),v=function(){var t=p.value;if(e.virtual){var n,o=e.height/e.itemHeight,r=(null===(n=i.value)||void 0===n?void 0:n.scrollTop)||0,a=Math.floor(r/e.itemHeight),l=a<0?0:a+o>t.length?t.length-o:a;l<0&&(l=0);var c=l+o;s.translateY=l*e.itemHeight,s.visibleData=t.filter((function(e,t){return t>=l&&t<c}));}else s.visibleData=t;},b=function(){v();},m=function(t){var o,l,c=t.path,i=e.selectableType;if("multiple"===i){var u=h.value.findIndex((function(e){return e===c})),d=a(h.value);-1!==u?d.splice(u,1):d.push(c),n("update:selectedValue",d),n("selectedChange",d,a(h.value));}else if("single"===i&&h.value[0]!==c){var s=(o=h.value,l=1,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){c=!0,r=e;}finally{try{l||null==n.return||n.return();}finally{if(c)throw r}}return a}}(o,l)||r(o,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],p=c;n("update:selectedValue",p),n("selectedChange",p,s);}},C=function(e){n("nodeClick",e);},w=function(e,t){if(e)s.hiddenPaths=N(N({},s.hiddenPaths),{},l({},t,1));else {var n=N({},s.hiddenPaths);delete n[t],s.hiddenPaths=n;}},j=function(t,o){e.collapsedOnClickBrackets&&w(t,o.path),n("bracketsClick",t,o);},S=function(e,t){w(e,t.path),n("iconClick",e,t);},O=function(t,o){var r=g(e.data),a=e.rootPath;new Function("data","val","data".concat(o.slice(a.length),"=val"))(r,t),n("update:data",r);};return (0, c.watchEffect)((function(){f.value&&function(e){throw new Error("[VueJSONPretty] ".concat(e))}(f.value);})),(0, c.watchEffect)((function(){p.value&&v();})),(0, c.watch)((function(){return e.deep}),(function(t){t&&(s.hiddenPaths=d(t,e.collapsedNodeLength));})),(0, c.watch)((function(){return e.collapsedNodeLength}),(function(t){t&&(s.hiddenPaths=d(e.deep,t));})),function(){var t,n,r=null!==(t=e.renderNodeKey)&&void 0!==t?t:o.renderNodeKey,a=null!==(n=e.renderNodeValue)&&void 0!==n?n:o.renderNodeValue,l=s.visibleData&&s.visibleData.map((function(t){return (0, c.createVNode)(k,{key:t.id,node:t,collapsed:!!s.hiddenPaths[t.path],theme:e.theme,showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:h.value.includes(t.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:r,renderNodeValue:a,onNodeClick:C,onBracketsClick:j,onIconClick:S,onSelectedChange:m,onValueChange:O,style:e.itemHeight&&20!==e.itemHeight?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)}));return (0, c.createVNode)("div",{ref:i,class:{"vjs-tree":!0,"is-virtual":e.virtual,dark:"dark"===e.theme},onScroll:e.virtual?b:void 0,style:e.showLineNumber?N({paddingLeft:"".concat(12*Number(u.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0, c.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0, c.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(p.value.length*e.itemHeight,"px")}},[(0, c.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(s.translateY,"px)")}},[l])])]):l])}}});var S=n.Z;

var css$6 = ".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit{width:1em}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-value{word-break:break-word}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}";
n$1(css$6,{});

const _withScopeId$1 = (n) => (pushScopeId("data-v-2ded8f93"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "content" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "header" }, [
  /* @__PURE__ */ createElementVNode("span", { class: "dot success" }),
  /* @__PURE__ */ createElementVNode("span", { class: "type-label" }, " Trigger ")
], -1));
const _hoisted_3$2 = { class: "inset" };
const _hoisted_4$2 = { class: "steps" };
const _hoisted_5$2 = { class: "header" };
const _hoisted_6$1 = { class: "type-label" };
const _hoisted_7$1 = { class: "subdued" };
const _hoisted_8$1 = { class: "inset" };
var script$7 = /* @__PURE__ */ defineComponent({
  __name: "displayFlowLogs",
  props: {
    currentLog: { type: null, required: true }
  },
  setup(__props, { emit }) {
    const { currentLog } = __props;
    const currentPath = ref("");
    const steps = computed(() => {
      const { data } = currentLog;
      if (!data)
        return [];
      const steps2 = (data == null ? void 0 : data.steps) || [];
      return steps2.map((step) => {
        return {
          ...step,
          status: step.status === "resolve" ? "success" : "error",
          operationType: step.operationType || "",
          options: step.options ? step.options : null,
          data: data.data[step.key] ? data.data[step.key] : null
        };
      });
    });
    function setPath(key, event) {
      console.log(currentLog);
      currentPath.value = key + event.path.substring(4);
    }
    function copyPath() {
      navigator.clipboard.writeText(currentPath.value);
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_detail = resolveComponent("v-detail");
      const _component_v_drawer = resolveComponent("v-drawer");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_component_v_drawer, {
        modelValue: true,
        title: "Flow log",
        icon: "fact_check",
        onEsc: _cache[1] || (_cache[1] = ($event) => emit("close")),
        onCancel: _cache[2] || (_cache[2] = ($event) => emit("close"))
      }, {
        actions: withCtx(() => [
          currentPath.value ? (openBlock(), createBlock(_component_v_button, {
            key: 0,
            class: "ml-auto",
            onClick: copyPath
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(currentPath.value) + " ", 1),
              createVNode(_component_v_icon, { name: "copy_all" })
            ]),
            _: 1
          })) : createCommentVNode("v-if", true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$4, [
            _hoisted_2$2,
            createElementVNode("div", _hoisted_3$2, [
              createVNode(_component_v_detail, {
                label: "Payload",
                class: "payload"
              }, {
                default: withCtx(() => [
                  createVNode(unref(S), {
                    data: __props.currentLog.data.data.$trigger,
                    virtual: "",
                    onNodeClick: _cache[0] || (_cache[0] = ($event) => setPath("$trigger", $event)),
                    selectableType: "single"
                  }, null, 8, ["data"])
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", _hoisted_4$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(steps), (step) => {
                return openBlock(), createElementBlock("div", {
                  key: step.id,
                  class: "step"
                }, [
                  createElementVNode("div", _hoisted_5$2, [
                    createElementVNode("span", {
                      class: normalizeClass(["dot", step.status])
                    }, null, 2),
                    withDirectives((openBlock(), createElementBlock("span", _hoisted_6$1, [
                      createTextVNode(toDisplayString(step.key) + " ", 1),
                      createElementVNode("span", _hoisted_7$1, "\xA0" + toDisplayString(step.operationType), 1)
                    ])), [
                      [_directive_tooltip, step.key]
                    ])
                  ]),
                  createElementVNode("div", _hoisted_8$1, [
                    step.options ? (openBlock(), createBlock(_component_v_detail, {
                      key: 0,
                      label: "Options"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(S), {
                          data: step.options,
                          virtual: ""
                        }, null, 8, ["data"])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("v-if", true),
                    step.data !== null ? (openBlock(), createBlock(_component_v_detail, {
                      key: 1,
                      label: "Payload",
                      class: "payload"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(S), {
                          data: step.data,
                          virtual: "",
                          onNodeClick: ($event) => setPath(step.key, $event),
                          selectableType: "single"
                        }, null, 8, ["data", "onNodeClick"])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("v-if", true)
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

var css$5 = "\n.content[data-v-2ded8f93] {\r\n  padding: 1rem;\n}\n.header[data-v-2ded8f93] {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\n}\n.dot[data-v-2ded8f93] {\r\n  width: 0.75rem;\r\n  height: 0.75rem;\r\n  border-radius: 50%;\r\n  margin-right: 0.5rem;\r\n  display: inline-block;\n}\n.dot.success[data-v-2ded8f93] {\r\n  background-color: var(--primary);\n}\n.dot.error[data-v-2ded8f93] {\r\n  background-color: var(--red);\n}\n.step[data-v-2ded8f93] {\r\n  margin: 0.5rem 0;\r\n  position: relative;\n}\n.inset[data-v-2ded8f93] {\r\n  border-left: var(--theme--border-width) solid\r\n    var(--theme--border-color-subdued);\r\n  margin-left: 0.35rem;\r\n  padding-top: 5px;\r\n  padding-left: 1rem;\r\n  margin-top: -5px;\n}\r\n";
n$1(css$5,{});

var css$4 = "\n.payload .vjs-value,\r\n.payload .vjs-key {\r\n  cursor: pointer;\n}\r\n";
n$1(css$4,{});

script$7.__scopeId = "data-v-2ded8f93";
script$7.__file = "settingsmodule/src/components/displayFlowLogs.vue";

const _withScopeId = (n) => (pushScopeId("data-v-231dc418"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "px-5 w-full" };
const _hoisted_2$1 = ["title"];
const _hoisted_3$1 = ["title"];
const _hoisted_4$1 = { class: "filters" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h2", null, "Filter", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "field-name" }, "Flow", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "field-name" }, "From date", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "field-name" }, "To date", -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "field-name" }, "Sorting order", -1));
var script$6 = /* @__PURE__ */ defineComponent({
  __name: "flowLogsExplorer",
  setup(__props) {
    const { useFlowsStore } = useStores();
    const api = useApi();
    const flowStore = useFlowsStore();
    const currentFlow = ref(), logs = ref([]), fromDate = ref(), toDate = ref(), inputFilter = ref(""), statusFilter = ref("all"), currentLog = ref(), sortOrder = ref("Descending");
    onMounted(() => {
      const aWeekAgo = new Date();
      aWeekAgo.setDate(aWeekAgo.getDate() - 7);
      fromDate.value = aWeekAgo.toISOString().split("T")[0];
      toDate.value = new Date().toISOString().split("T")[0];
    });
    async function fetchLogs() {
      const fetchLogs2 = await api.get("/revisions", {
        params: {
          "filter[_and][0][collection][_eq]": "directus_flows",
          "filter[_and][1][item][_eq]": currentFlow.value || void 0,
          "filter[_and][2][version][_null]": true,
          "filter[_and][3][activity][action][_eq]": "run",
          "filter[_and][4][activity][timestamp][_gte]": fromDate.value ? fromDate.value : void 0,
          "filter[_and][4][activity][timestamp][_lte]": toDate.value ? toDate.value + "T23:59:59" : void 0,
          "fields[0]": "*",
          "fields[1]": "activity.*",
          limit: 2e3,
          sort: sortOrder.value == "Descending" ? ["-activity.timestamp"] : ["activity.timestamp"]
        }
      });
      logs.value = fetchLogs2.data.data;
    }
    const filteredLogs = computed(() => {
      if (!inputFilter.value && statusFilter.value == "all")
        return logs.value;
      let logsToFilter = logs.value;
      if (statusFilter.value != "all") {
        logsToFilter = logsToFilter.filter((log) => {
          const findLastStepKey = log.data.steps[log.data.steps.length - 1];
          return findLastStepKey.status == (statusFilter.value == "error" ? "reject" : "resolve");
        });
      }
      if (inputFilter.value) {
        logsToFilter = logs.value.filter((log) => {
          const input = log.data.data.$trigger;
          return JSON.stringify(input).toLowerCase().includes(inputFilter.value.toLowerCase());
        });
      }
      return logsToFilter;
    });
    const flows = computed(() => {
      return flowStore.flows.map((e) => ({ text: e.name, value: e.id }));
    });
    function getOutput(log) {
      var _a;
      if (log.data.steps.length == 0)
        return "";
      const findLastStepKey = (_a = log.data.steps[log.data.steps.length - 1]) == null ? void 0 : _a.key;
      if (!findLastStepKey)
        return "";
      return log.data.data[findLastStepKey];
    }
    function openLog(log) {
      currentLog.value = log.item;
    }
    function isError(log) {
      if (log.data.steps.length == 0)
        return false;
      const findLastStepKey = log.data.steps[log.data.steps.length - 1];
      return findLastStepKey.status != "resolve";
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_input = resolveComponent("v-input");
      const _component_VSelect = resolveComponent("VSelect");
      const _component_private_view = resolveComponent("private-view");
      return openBlock(), createBlock(_component_private_view, { title: "Flow logs explorer" }, {
        navigation: withCtx(() => [
          createVNode(script$e)
        ]),
        sidebar: withCtx(() => [
          createElementVNode("div", _hoisted_4$1, [
            _hoisted_5$1,
            createElementVNode("div", null, [
              _hoisted_6,
              createVNode(_component_v_select, {
                items: unref(flows),
                showDeselect: "",
                modelValue: currentFlow.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentFlow.value = $event)
              }, null, 8, ["items", "modelValue"])
            ]),
            createElementVNode("div", null, [
              _hoisted_7,
              fromDate.value ? (openBlock(), createBlock(script$8, {
                key: 0,
                modelValue: fromDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => fromDate.value = $event),
                value: fromDate.value
              }, null, 8, ["modelValue", "value"])) : createCommentVNode("v-if", true)
            ]),
            createElementVNode("div", null, [
              _hoisted_8,
              toDate.value ? (openBlock(), createBlock(script$8, {
                key: 0,
                modelValue: toDate.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => toDate.value = $event),
                value: toDate.value
              }, null, 8, ["modelValue", "value"])) : createCommentVNode("v-if", true)
            ]),
            createElementVNode("div", null, [
              _hoisted_9,
              createVNode(_component_v_select, {
                modelValue: sortOrder.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sortOrder.value = $event),
                items: ["Descending", "Ascending"]
              }, null, 8, ["modelValue"])
            ]),
            createVNode(_component_v_button, {
              onClick: fetchLogs,
              fullWidth: true
            }, {
              default: withCtx(() => [
                createTextVNode("Search")
              ]),
              _: 1
            }),
            createElementVNode("div", null, [
              createTextVNode(" Input filter "),
              createVNode(_component_v_input, {
                modelValue: inputFilter.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => inputFilter.value = $event),
                placeholder: "Input filter",
                class: "w-full"
              }, null, 8, ["modelValue"])
            ]),
            createElementVNode("div", null, [
              createTextVNode(" Status "),
              createVNode(_component_VSelect, {
                modelValue: statusFilter.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => statusFilter.value = $event),
                items: [
                  {
                    text: "All",
                    value: "all"
                  },
                  {
                    text: "Error",
                    value: "error"
                  },
                  {
                    text: "Success",
                    value: "success"
                  }
                ]
              }, null, 8, ["modelValue"])
            ])
          ]),
          currentLog.value ? (openBlock(), createBlock(script$7, {
            key: 0,
            onClose: _cache[6] || (_cache[6] = ($event) => currentLog.value = null),
            currentLog: currentLog.value
          }, null, 8, ["currentLog"])) : createCommentVNode("v-if", true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$3, [
            createVNode(_component_v_table, {
              headers: [
                {
                  text: "Status",
                  value: "status",
                  sortable: false,
                  width: 100
                },
                {
                  text: "Timestamp",
                  value: "timestamp",
                  sortable: false,
                  width: 100
                },
                {
                  text: "Input",
                  value: "input",
                  sortable: false,
                  width: 1e3
                },
                {
                  text: "Output",
                  value: "output",
                  sortable: false,
                  width: 1e3
                }
              ],
              items: unref(filteredLogs),
              "onClick:row": openLog
            }, {
              "item.status": withCtx(({ item }) => [
                createVNode(_component_v_icon, {
                  name: isError(item) ? "error" : "check_circle",
                  class: normalizeClass(["flowLogStatus", { error: isError(item), success: !isError(item) }])
                }, null, 8, ["name", "class"])
              ]),
              "item.timestamp": withCtx(({ item }) => [
                createTextVNode(toDisplayString(new Date(item.activity.timestamp).toLocaleDateString()), 1)
              ]),
              "item.input": withCtx(({ item }) => [
                createElementVNode("div", {
                  title: JSON.stringify(item.data.data.$trigger, null, 2)
                }, toDisplayString(item.data.data.$trigger), 9, _hoisted_2$1)
              ]),
              "item.output": withCtx(({ item }) => [
                createElementVNode("div", {
                  title: JSON.stringify(getOutput(item), null, 2)
                }, toDisplayString(getOutput(item)), 9, _hoisted_3$1)
              ]),
              _: 1
            }, 8, ["items"])
          ])
        ]),
        _: 1
      });
    };
  }
});

var css$3 = "\n.w-full[data-v-231dc418] {\r\n  width: 100%;\n}\n.px-5[data-v-231dc418] {\r\n  padding: 0 2.5rem;\n}\n.date-input[data-v-231dc418] {\r\n  min-width: 300px;\n}\n.filters[data-v-231dc418] {\r\n  padding: 10px 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\n}\n.filters h2[data-v-231dc418] {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\n}\n.grow[data-v-231dc418],\r\n.grow button[data-v-231dc418] {\r\n  flex-grow: 1;\n}\n.flowLogStatus.success[data-v-231dc418] {\r\n  color: var(--primary);\n}\n.flowLogStatus.error[data-v-231dc418] {\r\n  color: var(--red);\n}\r\n";
n$1(css$3,{});

script$6.__scopeId = "data-v-231dc418";
script$6.__file = "settingsmodule/src/pages/flowLogsExplorer.vue";

var e4 = defineModule({
  id: "tta_settings",
  name: "Text to anything settings",
  icon: "text_fields",
  routes: [
    {
      path: "",
      redirect: "/tta_settings/templates"
    },
    {
      path: "templates",
      component: script$c
    },
    {
      path: "settings",
      component: script$9
    },
    {
      path: "flowsLogExplorer",
      component: script$6
    }
  ]
});

var script$5 = /* @__PURE__ */ defineComponent({
  __name: "interface",
  props: ["value"],
  emits: ["input"],
  setup(__props, { emit }) {
    const props = __props;
    const api = inject("api");
    const value = ref(0), templates = ref([]);
    onMounted(async () => {
      watch(
        () => value.value,
        (newval, oldval) => {
          if (newval != oldval) {
            emit("input", newval);
          }
        }
      );
      const getTemplates = await api.get("/tta/pdf/onlineTemplates");
      templates.value = getTemplates.data.map((e) => ({
        text: e.name,
        value: e.id
      }));
      if (getTemplates.data.find((e) => e.id == props.value))
        value.value = parseInt(props.value);
      else
        value.value = null;
    });
    return (_ctx, _cache) => {
      const _component_v_select = resolveComponent("v-select");
      return openBlock(), createBlock(_component_v_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        items: templates.value
      }, null, 8, ["modelValue", "items"]);
    };
  }
});

script$5.__file = "pdf/PDFOnlineTemplateSelector/src/interface.vue";

var e5 = defineInterface({
  id: "TTA-pdf-online-template-selector",
  name: "PDF online template selector",
  icon: "picture_as_pdf",
  description: "Selector for an online PDF template for Text To Anything",
  component: script$5,
  options: null,
  types: ["string"]
});

var script$4 = /* @__PURE__ */ defineComponent({
  __name: "interface",
  props: ["value"],
  emits: ["input"],
  setup(__props, { emit }) {
    const props = __props;
    const api = inject("api");
    const value = ref(""), templates = ref([]);
    onMounted(async () => {
      watch(
        () => value.value,
        (newval, oldval) => {
          if (newval != oldval) {
            emit("input", newval);
          }
        }
      );
      const getTemplates = await api.get("/items/TTA_htmltemplates");
      templates.value = getTemplates.data.data.map((e) => ({
        text: e.name,
        value: e.id
      }));
      value.value = props.value;
    });
    return (_ctx, _cache) => {
      const _component_v_select = resolveComponent("v-select");
      return openBlock(), createBlock(_component_v_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        items: templates.value
      }, null, 8, ["modelValue", "items"]);
    };
  }
});

script$4.__file = "pdf/PDFTemplateSelector/src/interface.vue";

var e6 = defineInterface({
  id: "TTA-pdf-template-selector",
  name: "PDF template selector",
  icon: "picture_as_pdf",
  description: "Selector for a PDF template for Text To Anything",
  component: script$4,
  options: null,
  types: ["string"]
});

const _hoisted_1$2 = { style: { "display": "none" } };
var script$3 = /* @__PURE__ */ defineComponent({
  __name: "interface",
  props: {
    label: { type: String, required: true },
    flow: { type: null, required: true },
    primaryKey: { type: null, required: true },
    disableOnEdit: { type: Boolean, required: true }
  },
  setup(__props) {
    const props = __props;
    const api = useApi();
    const loading = ref(false);
    const hasEdits = ref(false);
    const checkSaveButtonState = () => {
      const saveButton = document.querySelector('.header-bar button:has([data-icon="check"])');
      hasEdits.value = saveButton ? saveButton.hasAttribute("disabled") : true;
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "disabled") {
          checkSaveButtonState();
        }
      });
    });
    onMounted(() => {
      const setupObserver = () => {
        const saveButton = document.querySelector('.header-bar button:has([data-icon="check"])');
        if (saveButton) {
          observer.observe(saveButton, {
            attributes: true,
            attributeFilter: ["disabled"]
          });
          checkSaveButtonState();
          return true;
        }
        return false;
      };
      if (!setupObserver()) {
        const interval = setInterval(() => {
          if (setupObserver())
            clearInterval(interval);
        }, 500);
        setTimeout(() => clearInterval(interval), 5e3);
      }
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    const isDisabled = computed(() => {
      if (loading.value)
        return true;
      if (!props.disableOnEdit)
        return false;
      return !hasEdits.value;
    });
    async function downloadFile() {
      if (isDisabled.value)
        return;
      loading.value = true;
      try {
        const webhookOutput = await api.post("/flows/trigger/" + props.flow, {
          id: props.primaryKey
        });
        window.open("/assets/" + webhookOutput.data, "_blank");
      } catch (e) {
      }
      loading.value = false;
    }
    return (_ctx, _cache) => {
      const _component_VButton = resolveComponent("VButton");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives((openBlock(), createBlock(_component_VButton, {
          onClick: downloadFile,
          loading: loading.value,
          disabled: unref(isDisabled)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(props.label), 1)
          ]),
          _: 1
        }, 8, ["loading", "disabled"])), [
          [_directive_tooltip, unref(isDisabled) ? "Please save first" : null]
        ]),
        createElementVNode("div", _hoisted_1$2, [
          createVNode(_component_VButton, {
            loading: true,
            disabled: true
          })
        ])
      ], 64);
    };
  }
});

script$3.__file = "pdf/GeneratePDFFromTemplateInterface/src/interface.vue";

var e7 = defineInterface({
  id: "tta-download-interface",
  name: "Download interface",
  icon: "sim_card_download",
  description: "Download files based on a flow. (Text to anything)",
  hideLabel: true,
  hideLoader: true,
  component: script$3,
  options: () => {
    const { useFlowsStore } = useStores();
    const flowStore = useFlowsStore();
    const flowOptions = computed(
      () => flowStore.flows.filter(
        (flow) => flow.trigger === "webhook" && flow.options.method == "POST"
      ).map((flow) => {
        return { text: flow.name, value: flow.id };
      })
    );
    return [
      {
        field: "label",
        type: "string",
        name: "$t:label",
        meta: {
          width: "full",
          interface: "system-input-translated-string",
          options: {
            placeholder: "$t:label"
          }
        }
      },
      {
        field: "flow",
        name: "$t:operations.trigger.flow",
        type: "string",
        meta: {
          width: "full",
          interface: "select-dropdown",
          options: {
            choices: flowOptions,
            iconRight: "bolt",
            placeholder: "$t:a_flow_uuid"
          }
        }
      },
      {
        field: "disableOnEdit",
        name: "Disable on Edit",
        type: "boolean",
        meta: {
          width: "full",
          interface: "boolean",
          options: {
            label: "Disable button if there are unsaved changes"
          }
        },
        schema: {
          default_value: false
        }
      }
    ];
  },
  types: ["string"]
});

/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
const LINE_FACTOR = 1.35;
const RenderingIntentFlag = {
  ANY: 0x01,
  DISPLAY: 0x02,
  PRINT: 0x04,
  SAVE: 0x08,
  ANNOTATIONS_FORMS: 0x10,
  ANNOTATIONS_STORAGE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  IS_EDITING: 0x80,
  OPLIST: 0x100
};
const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const AnnotationEditorPrefix = "pdfjs_internal_editor_";
const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  SIGNATURE: 101
};
const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
};
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
const util_ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
};
const DrawOPS = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
};
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  if (options && typeof url === "string") {
    if (options.addDefaultProtocol && url.startsWith("www.")) {
      const dots = url.match(/\./g);
      if (dots?.length >= 2) {
        url = `http://${url}`;
      }
    }
    if (options.tryConvertEncoding) {
      try {
        url = stringToUTF8String(url);
      } catch {}
    }
  }
  const absoluteUrl = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return _isValidProtocol(absoluteUrl) ? absoluteUrl : null;
}
function updateUrlHash(url, hash, allowRel = false) {
  const res = URL.parse(url);
  if (res) {
    res.hash = hash;
    return res.href;
  }
  if (allowRel && createValidAbsoluteUrl(url, "http://example.com")) {
    return url.split("#", 1)[0] + `${hash ? `#${hash}` : ""}`;
  }
  return "";
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
const BaseException = function BaseExceptionClosure() {
  function BaseException(message, name) {
    this.message = message;
    this.name = name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
class PasswordException extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
}
class UnknownErrorException extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
}
class InvalidPDFException extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
}
class ResponseException extends BaseException {
  constructor(msg, status, missing) {
    super(msg, "ResponseException");
    this.status = status;
    this.missing = missing;
  }
}
class FormatError extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
}
class AbortException extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
}
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === undefined) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
class util_FeatureTest {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get platform() {
    const {
      platform,
      userAgent
    } = navigator;
    return shadow(this, "platform", {
      isAndroid: userAgent.includes("Android"),
      isLinux: platform.includes("Linux"),
      isMac: platform.includes("Mac"),
      isWindows: platform.includes("Win"),
      isFirefox: userAgent.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const hexNumbers = Array.from(Array(256).keys(), n => n.toString(16).padStart(2, "0"));
class Util {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static applyTransform(p, m, pos = 0) {
    const p0 = p[pos];
    const p1 = p[pos + 1];
    p[pos] = p0 * m[0] + p1 * m[2] + m[4];
    p[pos + 1] = p0 * m[1] + p1 * m[3] + m[5];
  }
  static applyTransformToBezier(p, transform, pos = 0) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    for (let i = 0; i < 6; i += 2) {
      const pI = p[pos + i];
      const pI1 = p[pos + i + 1];
      p[pos + i] = pI * m0 + pI1 * m2 + m4;
      p[pos + i + 1] = pI * m1 + pI1 * m3 + m5;
    }
  }
  static applyInverseTransform(p, m) {
    const p0 = p[0];
    const p1 = p[1];
    const d = m[0] * m[3] - m[1] * m[2];
    p[0] = (p0 * m[3] - p1 * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    p[1] = (-p0 * m[1] + p1 * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
  }
  static axialAlignedBoundingBox(rect, transform, output) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    const r0 = rect[0];
    const r1 = rect[1];
    const r2 = rect[2];
    const r3 = rect[3];
    let a0 = m0 * r0 + m4;
    let a2 = a0;
    let a1 = m0 * r2 + m4;
    let a3 = a1;
    let b0 = m3 * r1 + m5;
    let b2 = b0;
    let b1 = m3 * r3 + m5;
    let b3 = b1;
    if (m1 !== 0 || m2 !== 0) {
      const m1r0 = m1 * r0;
      const m1r2 = m1 * r2;
      const m2r1 = m2 * r1;
      const m2r3 = m2 * r3;
      a0 += m2r1;
      a3 += m2r1;
      a1 += m2r3;
      a2 += m2r3;
      b0 += m1r0;
      b3 += m1r0;
      b1 += m1r2;
      b2 += m1r2;
    }
    output[0] = Math.min(output[0], a0, a1, a2, a3);
    output[1] = Math.min(output[1], b0, b1, b2, b3);
    output[2] = Math.max(output[2], a0, a1, a2, a3);
    output[3] = Math.max(output[3], b0, b1, b2, b3);
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(matrix, output) {
    const m0 = matrix[0];
    const m1 = matrix[1];
    const m2 = matrix[2];
    const m3 = matrix[3];
    const a = m0 ** 2 + m1 ** 2;
    const b = m0 * m2 + m1 * m3;
    const c = m2 ** 2 + m3 ** 2;
    const first = (a + c) / 2;
    const second = Math.sqrt(first ** 2 - (a * c - b ** 2));
    output[0] = Math.sqrt(first + second || 1);
    output[1] = Math.sqrt(first - second || 1);
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static pointBoundingBox(x, y, minMax) {
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static rectBoundingBox(x0, y0, x1, y1, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x1);
    minMax[1] = Math.min(minMax[1], y0, y1);
    minMax[2] = Math.max(minMax[2], x0, x1);
    minMax[3] = Math.max(minMax[3], y0, y1);
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x3);
    minMax[1] = Math.min(minMax[1], y0, y3);
    minMax[2] = Math.max(minMax[2], x0, x3);
    minMax[3] = Math.max(minMax[3], y0, y3);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
  }
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
let NormalizeRegex = null;
let NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["ﬅ", "ſt"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return bytesToString(buf);
}
const AnnotationPrefix = "pdfjs_internal_id_";
function _isValidExplicitDest(validRef, validName, dest) {
  if (!Array.isArray(dest) || dest.length < 2) {
    return false;
  }
  const [page, zoom, ...args] = dest;
  if (!validRef(page) && !Number.isInteger(page)) {
    return false;
  }
  if (!validName(zoom)) {
    return false;
  }
  const argsLen = args.length;
  let allowNull = true;
  switch (zoom.name) {
    case "XYZ":
      if (argsLen < 2 || argsLen > 3) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return argsLen === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (argsLen > 1) {
        return false;
      }
      break;
    case "FitR":
      if (argsLen !== 4) {
        return false;
      }
      allowNull = false;
      break;
    default:
      return false;
  }
  for (const arg of args) {
    if (typeof arg === "number" || allowNull && arg === null) {
      continue;
    }
    return false;
  }
  return true;
}
function MathClamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
function toBase64Util(arr) {
  if (Uint8Array.prototype.toBase64) {
    return arr.toBase64();
  }
  return btoa(bytesToString(arr));
}
function fromBase64Util(str) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(str);
  }
  return stringToBytes(atob(str));
}
if (typeof Promise.try !== "function") {
  Promise.try = function (fn, ...args) {
    return new Promise(resolve => {
      resolve(fn(...args));
    });
  };
}
if (typeof Math.sumPrecise !== "function") {
  Math.sumPrecise = function (numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  };
}

const SVG_NS = "http://www.w3.org/2000/svg";
class PixelsPerInch {
  static CSS = 96.0;
  static PDF = 72.0;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function fetchData(url, type = "text") {
  if (isValidFetchUrl(url, document.baseURI)) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    switch (type) {
      case "arraybuffer":
        return response.arrayBuffer();
      case "blob":
        return response.blob();
      case "json":
        return response.json();
    }
    return response.text();
  }
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = type;
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (request.status === 200 || request.status === 0) {
        switch (type) {
          case "arraybuffer":
          case "blob":
          case "json":
            resolve(request.response);
            return;
        }
        resolve(request.responseText);
        return;
      }
      reject(new Error(request.statusText));
    };
    request.send(null);
  });
}
class PageViewport {
  constructor({
    viewBox,
    userUnit,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  }) {
    this.viewBox = viewBox;
    this.userUnit = userUnit;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    scale *= userUnit;
    const centerX = (viewBox[2] + viewBox[0]) / 2;
    const centerY = (viewBox[3] + viewBox[1]) / 2;
    let rotateA, rotateB, rotateC, rotateD;
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      case 0:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    let offsetCanvasX, offsetCanvasY;
    let width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = (viewBox[3] - viewBox[1]) * scale;
      height = (viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = (viewBox[2] - viewBox[0]) * scale;
      height = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }
  get rawDims() {
    const dims = this.viewBox;
    return shadow(this, "rawDims", {
      pageWidth: dims[2] - dims[0],
      pageHeight: dims[3] - dims[1],
      pageX: dims[0],
      pageY: dims[1]
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  convertToViewportPoint(x, y) {
    const p = [x, y];
    Util.applyTransform(p, this.transform);
    return p;
  }
  convertToViewportRectangle(rect) {
    const topLeft = [rect[0], rect[1]];
    Util.applyTransform(topLeft, this.transform);
    const bottomRight = [rect[2], rect[3]];
    Util.applyTransform(bottomRight, this.transform);
    return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
  }
  convertToPdfPoint(x, y) {
    const p = [x, y];
    Util.applyInverseTransform(p, this.transform);
    return p;
  }
}
class RenderingCancelledException extends BaseException {
  constructor(msg, extraDelay = 0) {
    super(msg, "RenderingCancelledException");
    this.extraDelay = extraDelay;
  }
}
function isDataScheme(url) {
  const ii = url.length;
  let i = 0;
  while (i < ii && url[i].trim() === "") {
    i++;
  }
  return url.substring(i, i + 5).toLowerCase() === "data:";
}
function isPdfFile(filename) {
  return typeof filename === "string" && /\.pdf$/i.test(filename);
}
function getFilenameFromUrl(url) {
  [url] = url.split(/[#?]/, 1);
  return url.substring(url.lastIndexOf("/") + 1);
}
function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
  if (typeof url !== "string") {
    return defaultFilename;
  }
  if (isDataScheme(url)) {
    warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return defaultFilename;
  }
  const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  const splitURI = reURI.exec(url);
  let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];
    if (suggestedFilename.includes("%")) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch {}
    }
  }
  return suggestedFilename || defaultFilename;
}
class StatTimer {
  started = Object.create(null);
  times = [];
  time(name) {
    if (name in this.started) {
      warn(`Timer is already running for ${name}`);
    }
    this.started[name] = Date.now();
  }
  timeEnd(name) {
    if (!(name in this.started)) {
      warn(`Timer has not been started for ${name}`);
    }
    this.times.push({
      name,
      start: this.started[name],
      end: Date.now()
    });
    delete this.started[name];
  }
  toString() {
    const outBuf = [];
    let longest = 0;
    for (const {
      name
    } of this.times) {
      longest = Math.max(name.length, longest);
    }
    for (const {
      name,
      start,
      end
    } of this.times) {
      outBuf.push(`${name.padEnd(longest)} ${end - start}ms\n`);
    }
    return outBuf.join("");
  }
}
function isValidFetchUrl(url, baseUrl) {
  const res = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return res?.protocol === "http:" || res?.protocol === "https:";
}
function noContextMenu(e) {
  e.preventDefault();
}
function stopEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}
function deprecated(details) {
  console.log("Deprecated API usage: " + details);
}
class PDFDateString {
  static #regex;
  static toDateObject(input) {
    if (!input || typeof input !== "string") {
      return null;
    }
    this.#regex ||= new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
    const matches = this.#regex.exec(input);
    if (!matches) {
      return null;
    }
    const year = parseInt(matches[1], 10);
    let month = parseInt(matches[2], 10);
    month = month >= 1 && month <= 12 ? month - 1 : 0;
    let day = parseInt(matches[3], 10);
    day = day >= 1 && day <= 31 ? day : 1;
    let hour = parseInt(matches[4], 10);
    hour = hour >= 0 && hour <= 23 ? hour : 0;
    let minute = parseInt(matches[5], 10);
    minute = minute >= 0 && minute <= 59 ? minute : 0;
    let second = parseInt(matches[6], 10);
    second = second >= 0 && second <= 59 ? second : 0;
    const universalTimeRelation = matches[7] || "Z";
    let offsetHour = parseInt(matches[8], 10);
    offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
    let offsetMinute = parseInt(matches[9], 10) || 0;
    offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
    if (universalTimeRelation === "-") {
      hour += offsetHour;
      minute += offsetMinute;
    } else if (universalTimeRelation === "+") {
      hour -= offsetHour;
      minute -= offsetMinute;
    }
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
}
function getXfaPageViewport(xfaPage, {
  scale = 1,
  rotation = 0
}) {
  const {
    width,
    height
  } = xfaPage.attributes.style;
  const viewBox = [0, 0, parseInt(width), parseInt(height)];
  return new PageViewport({
    viewBox,
    userUnit: 1,
    scale,
    rotation
  });
}
function getRGB(color) {
  if (color.startsWith("#")) {
    const colorRGB = parseInt(color.slice(1), 16);
    return [(colorRGB & 0xff0000) >> 16, (colorRGB & 0x00ff00) >> 8, colorRGB & 0x0000ff];
  }
  if (color.startsWith("rgb(")) {
    return color.slice(4, -1).split(",").map(x => parseInt(x));
  }
  if (color.startsWith("rgba(")) {
    return color.slice(5, -1).split(",").map(x => parseInt(x)).slice(0, 3);
  }
  warn(`Not a valid color format: "${color}"`);
  return [0, 0, 0];
}
function getColorValues(colors) {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.colorScheme = "only light";
  document.body.append(span);
  for (const name of colors.keys()) {
    span.style.color = name;
    const computedColor = window.getComputedStyle(span).color;
    colors.set(name, getRGB(computedColor));
  }
  span.remove();
}
function getCurrentTransform(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform();
  return [a, b, c, d, e, f];
}
function getCurrentTransformInverse(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform().invertSelf();
  return [a, b, c, d, e, f];
}
function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
  if (viewport instanceof PageViewport) {
    const {
      pageWidth,
      pageHeight
    } = viewport.rawDims;
    const {
      style
    } = div;
    const useRound = util_FeatureTest.isCSSRoundSupported;
    const w = `var(--total-scale-factor) * ${pageWidth}px`,
      h = `var(--total-scale-factor) * ${pageHeight}px`;
    const widthStr = useRound ? `round(down, ${w}, var(--scale-round-x))` : `calc(${w})`,
      heightStr = useRound ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    if (!mustFlip || viewport.rotation % 180 === 0) {
      style.width = widthStr;
      style.height = heightStr;
    } else {
      style.width = heightStr;
      style.height = widthStr;
    }
  }
  if (mustRotate) {
    div.setAttribute("data-main-rotation", viewport.rotation);
  }
}
class OutputScale {
  constructor() {
    const {
      pixelRatio
    } = OutputScale;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(width, height, maxPixels, maxDim, capAreaFactor = -1) {
    let maxAreaScale = Infinity,
      maxWidthScale = Infinity,
      maxHeightScale = Infinity;
    maxPixels = OutputScale.capPixels(maxPixels, capAreaFactor);
    if (maxPixels > 0) {
      maxAreaScale = Math.sqrt(maxPixels / (width * height));
    }
    if (maxDim !== -1) {
      maxWidthScale = maxDim / width;
      maxHeightScale = maxDim / height;
    }
    const maxScale = Math.min(maxAreaScale, maxWidthScale, maxHeightScale);
    if (this.sx > maxScale || this.sy > maxScale) {
      this.sx = maxScale;
      this.sy = maxScale;
      return true;
    }
    return false;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(maxPixels, capAreaFactor) {
    if (capAreaFactor >= 0) {
      const winPixels = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + capAreaFactor / 100));
      return maxPixels > 0 ? Math.min(maxPixels, winPixels) : winPixels;
    }
    return maxPixels;
  }
}
const SupportedImageMimeTypes = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];

class EditorToolbar {
  #toolbar = null;
  #colorPicker = null;
  #editor;
  #buttons = null;
  #altText = null;
  #signatureDescriptionButton = null;
  static #l10nRemove = null;
  constructor(editor) {
    this.#editor = editor;
    EditorToolbar.#l10nRemove ||= Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    });
  }
  render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.classList.add("editToolbar", "hidden");
    editToolbar.setAttribute("role", "toolbar");
    const signal = this.#editor._uiManager._signal;
    editToolbar.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    editToolbar.addEventListener("pointerdown", EditorToolbar.#pointerDown, {
      signal
    });
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    const position = this.#editor.toolbarPosition;
    if (position) {
      const {
        style
      } = editToolbar;
      const x = this.#editor._uiManager.direction === "ltr" ? 1 - position[0] : position[0];
      style.insetInlineEnd = `${100 * x}%`;
      style.top = `calc(${100 * position[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    this.#addDeleteButton();
    return editToolbar;
  }
  get div() {
    return this.#toolbar;
  }
  static #pointerDown(e) {
    e.stopPropagation();
  }
  #focusIn(e) {
    this.#editor._focusEventsAllowed = false;
    stopEvent(e);
  }
  #focusOut(e) {
    this.#editor._focusEventsAllowed = true;
    stopEvent(e);
  }
  #addListenersToElement(element) {
    const signal = this.#editor._uiManager._signal;
    element.addEventListener("focusin", this.#focusIn.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("focusout", this.#focusOut.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("contextmenu", noContextMenu, {
      signal
    });
  }
  hide() {
    this.#toolbar.classList.add("hidden");
    this.#colorPicker?.hideDropdown();
  }
  show() {
    this.#toolbar.classList.remove("hidden");
    this.#altText?.shown();
  }
  #addDeleteButton() {
    const {
      editorType,
      _uiManager
    } = this.#editor;
    const button = document.createElement("button");
    button.className = "delete";
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", EditorToolbar.#l10nRemove[editorType]);
    this.#addListenersToElement(button);
    button.addEventListener("click", e => {
      _uiManager.delete();
    }, {
      signal: _uiManager._signal
    });
    this.#buttons.append(button);
  }
  get #divider() {
    const divider = document.createElement("div");
    divider.className = "divider";
    return divider;
  }
  async addAltText(altText) {
    const button = await altText.render();
    this.#addListenersToElement(button);
    this.#buttons.prepend(button, this.#divider);
    this.#altText = altText;
  }
  addColorPicker(colorPicker) {
    this.#colorPicker = colorPicker;
    const button = colorPicker.renderButton();
    this.#addListenersToElement(button);
    this.#buttons.prepend(button, this.#divider);
  }
  async addEditSignatureButton(signatureManager) {
    const button = this.#signatureDescriptionButton = await signatureManager.renderEditButton(this.#editor);
    this.#addListenersToElement(button);
    this.#buttons.prepend(button, this.#divider);
  }
  updateEditSignatureButton(description) {
    if (this.#signatureDescriptionButton) {
      this.#signatureDescriptionButton.title = description;
    }
  }
  remove() {
    this.#toolbar.remove();
    this.#colorPicker?.destroy();
    this.#colorPicker = null;
  }
}
class HighlightToolbar {
  #buttons = null;
  #toolbar = null;
  #uiManager;
  constructor(uiManager) {
    this.#uiManager = uiManager;
  }
  #render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.className = "editToolbar";
    editToolbar.setAttribute("role", "toolbar");
    editToolbar.addEventListener("contextmenu", noContextMenu, {
      signal: this.#uiManager._signal
    });
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    this.#addHighlightButton();
    return editToolbar;
  }
  #getLastPoint(boxes, isLTR) {
    let lastY = 0;
    let lastX = 0;
    for (const box of boxes) {
      const y = box.y + box.height;
      if (y < lastY) {
        continue;
      }
      const x = box.x + (isLTR ? box.width : 0);
      if (y > lastY) {
        lastX = x;
        lastY = y;
        continue;
      }
      if (isLTR) {
        if (x > lastX) {
          lastX = x;
        }
      } else if (x < lastX) {
        lastX = x;
      }
    }
    return [isLTR ? 1 - lastX : lastX, lastY];
  }
  show(parent, boxes, isLTR) {
    const [x, y] = this.#getLastPoint(boxes, isLTR);
    const {
      style
    } = this.#toolbar ||= this.#render();
    parent.append(this.#toolbar);
    style.insetInlineEnd = `${100 * x}%`;
    style.top = `calc(${100 * y}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#toolbar.remove();
  }
  #addHighlightButton() {
    const button = document.createElement("button");
    button.className = "highlightButton";
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", `pdfjs-highlight-floating-button1`);
    const span = document.createElement("span");
    button.append(span);
    span.className = "visuallyHidden";
    span.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
    const signal = this.#uiManager._signal;
    button.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    button.addEventListener("click", () => {
      this.#uiManager.highlightSelection("floating_button");
    }, {
      signal
    });
    this.#buttons.append(button);
  }
}



function bindEvents(obj, element, names) {
  for (const name of names) {
    element.addEventListener(name, obj[name].bind(obj));
  }
}
class IdManager {
  #id = 0;
  get id() {
    return `${AnnotationEditorPrefix}${this.#id++}`;
  }
}
class ImageManager {
  #baseId = getUuid();
  #id = 0;
  #cache = null;
  static get _isSVGFittingCanvas() {
    const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
    const canvas = new OffscreenCanvas(1, 3);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    const image = new Image();
    image.src = svg;
    const promise = image.decode().then(() => {
      ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 3);
      return new Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return shadow(this, "_isSVGFittingCanvas", promise);
  }
  async #get(key, rawData) {
    this.#cache ||= new Map();
    let data = this.#cache.get(key);
    if (data === null) {
      return null;
    }
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    try {
      data ||= {
        bitmap: null,
        id: `image_${this.#baseId}_${this.#id++}`,
        refCounter: 0,
        isSvg: false
      };
      let image;
      if (typeof rawData === "string") {
        data.url = rawData;
        image = await fetchData(rawData, "blob");
      } else if (rawData instanceof File) {
        image = data.file = rawData;
      } else if (rawData instanceof Blob) {
        image = rawData;
      }
      if (image.type === "image/svg+xml") {
        const mustRemoveAspectRatioPromise = ImageManager._isSVGFittingCanvas;
        const fileReader = new FileReader();
        const imageElement = new Image();
        const imagePromise = new Promise((resolve, reject) => {
          imageElement.onload = () => {
            data.bitmap = imageElement;
            data.isSvg = true;
            resolve();
          };
          fileReader.onload = async () => {
            const url = data.svgUrl = fileReader.result;
            imageElement.src = (await mustRemoveAspectRatioPromise) ? `${url}#svgView(preserveAspectRatio(none))` : url;
          };
          imageElement.onerror = fileReader.onerror = reject;
        });
        fileReader.readAsDataURL(image);
        await imagePromise;
      } else {
        data.bitmap = await createImageBitmap(image);
      }
      data.refCounter = 1;
    } catch (e) {
      warn(e);
      data = null;
    }
    this.#cache.set(key, data);
    if (data) {
      this.#cache.set(data.id, data);
    }
    return data;
  }
  async getFromFile(file) {
    const {
      lastModified,
      name,
      size,
      type
    } = file;
    return this.#get(`${lastModified}_${name}_${size}_${type}`, file);
  }
  async getFromUrl(url) {
    return this.#get(url, url);
  }
  async getFromBlob(id, blobPromise) {
    const blob = await blobPromise;
    return this.#get(id, blob);
  }
  async getFromId(id) {
    this.#cache ||= new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return null;
    }
    if (data.bitmap) {
      data.refCounter += 1;
      return data;
    }
    if (data.file) {
      return this.getFromFile(data.file);
    }
    if (data.blobPromise) {
      const {
        blobPromise
      } = data;
      delete data.blobPromise;
      return this.getFromBlob(data.id, blobPromise);
    }
    return this.getFromUrl(data.url);
  }
  getFromCanvas(id, canvas) {
    this.#cache ||= new Map();
    let data = this.#cache.get(id);
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    data = {
      bitmap: offscreen.transferToImageBitmap(),
      id: `image_${this.#baseId}_${this.#id++}`,
      refCounter: 1,
      isSvg: false
    };
    this.#cache.set(id, data);
    this.#cache.set(data.id, data);
    return data;
  }
  getSvgUrl(id) {
    const data = this.#cache.get(id);
    if (!data?.isSvg) {
      return null;
    }
    return data.svgUrl;
  }
  deleteId(id) {
    this.#cache ||= new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return;
    }
    data.refCounter -= 1;
    if (data.refCounter !== 0) {
      return;
    }
    const {
      bitmap
    } = data;
    if (!data.url && !data.file) {
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext("bitmaprenderer");
      ctx.transferFromImageBitmap(bitmap);
      data.blobPromise = canvas.convertToBlob();
    }
    bitmap.close?.();
    data.bitmap = null;
  }
  isValidId(id) {
    return id.startsWith(`image_${this.#baseId}_`);
  }
}
class CommandManager {
  #commands = [];
  #locked = false;
  #maxSize;
  #position = -1;
  constructor(maxSize = 128) {
    this.#maxSize = maxSize;
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = NaN,
    overwriteIfSameType = false,
    keepUndo = false
  }) {
    if (mustExec) {
      cmd();
    }
    if (this.#locked) {
      return;
    }
    const save = {
      cmd,
      undo,
      post,
      type
    };
    if (this.#position === -1) {
      if (this.#commands.length > 0) {
        this.#commands.length = 0;
      }
      this.#position = 0;
      this.#commands.push(save);
      return;
    }
    if (overwriteIfSameType && this.#commands[this.#position].type === type) {
      if (keepUndo) {
        save.undo = this.#commands[this.#position].undo;
      }
      this.#commands[this.#position] = save;
      return;
    }
    const next = this.#position + 1;
    if (next === this.#maxSize) {
      this.#commands.splice(0, 1);
    } else {
      this.#position = next;
      if (next < this.#commands.length) {
        this.#commands.splice(next);
      }
    }
    this.#commands.push(save);
  }
  undo() {
    if (this.#position === -1) {
      return;
    }
    this.#locked = true;
    const {
      undo,
      post
    } = this.#commands[this.#position];
    undo();
    post?.();
    this.#locked = false;
    this.#position -= 1;
  }
  redo() {
    if (this.#position < this.#commands.length - 1) {
      this.#position += 1;
      this.#locked = true;
      const {
        cmd,
        post
      } = this.#commands[this.#position];
      cmd();
      post?.();
      this.#locked = false;
    }
  }
  hasSomethingToUndo() {
    return this.#position !== -1;
  }
  hasSomethingToRedo() {
    return this.#position < this.#commands.length - 1;
  }
  cleanType(type) {
    if (this.#position === -1) {
      return;
    }
    for (let i = this.#position; i >= 0; i--) {
      if (this.#commands[i].type !== type) {
        this.#commands.splice(i + 1, this.#position - i);
        this.#position = i;
        return;
      }
    }
    this.#commands.length = 0;
    this.#position = -1;
  }
  destroy() {
    this.#commands = null;
  }
}
class KeyboardManager {
  constructor(callbacks) {
    this.buffer = [];
    this.callbacks = new Map();
    this.allKeys = new Set();
    const {
      isMac
    } = util_FeatureTest.platform;
    for (const [keys, callback, options = {}] of callbacks) {
      for (const key of keys) {
        const isMacKey = key.startsWith("mac+");
        if (isMac && isMacKey) {
          this.callbacks.set(key.slice(4), {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        } else if (!isMac && !isMacKey) {
          this.callbacks.set(key, {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        }
      }
    }
  }
  #serialize(event) {
    if (event.altKey) {
      this.buffer.push("alt");
    }
    if (event.ctrlKey) {
      this.buffer.push("ctrl");
    }
    if (event.metaKey) {
      this.buffer.push("meta");
    }
    if (event.shiftKey) {
      this.buffer.push("shift");
    }
    this.buffer.push(event.key);
    const str = this.buffer.join("+");
    this.buffer.length = 0;
    return str;
  }
  exec(self, event) {
    if (!this.allKeys.has(event.key)) {
      return;
    }
    const info = this.callbacks.get(this.#serialize(event));
    if (!info) {
      return;
    }
    const {
      callback,
      options: {
        bubbles = false,
        args = [],
        checker = null
      }
    } = info;
    if (checker && !checker(self, event)) {
      return;
    }
    callback.bind(self, ...args, event)();
    if (!bubbles) {
      stopEvent(event);
    }
  }
}
class ColorManager {
  static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const colors = new Map([["CanvasText", null], ["Canvas", null]]);
    getColorValues(colors);
    return shadow(this, "_colors", colors);
  }
  convert(color) {
    const rgb = getRGB(color);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return rgb;
    }
    for (const [name, RGB] of this._colors) {
      if (RGB.every((x, i) => x === rgb[i])) {
        return ColorManager._colorsMapping.get(name);
      }
    }
    return rgb;
  }
  getHexCode(name) {
    const rgb = this._colors.get(name);
    if (!rgb) {
      return name;
    }
    return Util.makeHexColor(...rgb);
  }
}
class AnnotationEditorUIManager {
  #abortController = new AbortController();
  #activeEditor = null;
  #allEditors = new Map();
  #allLayers = new Map();
  #altTextManager = null;
  #annotationStorage = null;
  #changedExistingAnnotations = null;
  #commandManager = new CommandManager();
  #copyPasteAC = null;
  #currentDrawingSession = null;
  #currentPageIndex = 0;
  #deletedAnnotationsElementIds = new Set();
  #draggingEditors = null;
  #editorTypes = null;
  #editorsToRescale = new Set();
  _editorUndoBar = null;
  #enableHighlightFloatingButton = false;
  #enableUpdatedAddImage = false;
  #enableNewAltTextWhenAddingImage = false;
  #filterFactory = null;
  #focusMainContainerTimeoutId = null;
  #focusManagerAC = null;
  #highlightColors = null;
  #highlightWhenShiftUp = false;
  #highlightToolbar = null;
  #idManager = new IdManager();
  #isEnabled = false;
  #isWaiting = false;
  #keyboardManagerAC = null;
  #lastActiveElement = null;
  #mainHighlightColorPicker = null;
  #missingCanvases = null;
  #mlManager = null;
  #mode = AnnotationEditorType.NONE;
  #selectedEditors = new Set();
  #selectedTextNode = null;
  #signatureManager = null;
  #pageColors = null;
  #showAllStates = null;
  #previousStates = {
    isEditing: false,
    isEmpty: true,
    hasSomethingToUndo: false,
    hasSomethingToRedo: false,
    hasSelectedEditor: false,
    hasSelectedText: false
  };
  #translation = [0, 0];
  #translationTimeoutId = null;
  #container = null;
  #viewer = null;
  #updateModeCapability = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const proto = AnnotationEditorUIManager.prototype;
    const arrowChecker = self => self.#container.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && self.hasSomethingToControl();
    const textInputChecker = (_self, {
      target: el
    }) => {
      if (el instanceof HTMLInputElement) {
        const {
          type
        } = el;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    const small = this.TRANSLATE_SMALL;
    const big = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], proto.selectAll, {
      checker: textInputChecker
    }], [["ctrl+z", "mac+meta+z"], proto.undo, {
      checker: textInputChecker
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], proto.redo, {
      checker: textInputChecker
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], proto.delete, {
      checker: textInputChecker
    }], [["Enter", "mac+Enter"], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(el) && !self.isEnterHandled
    }], [[" ", "mac+ "], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(document.activeElement)
    }], [["Escape", "mac+Escape"], proto.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto.translateSelectedEditors, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto.translateSelectedEditors, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  constructor(container, viewer, altTextManager, signatureManager, eventBus, pdfDocument, pageColors, highlightColors, enableHighlightFloatingButton, enableUpdatedAddImage, enableNewAltTextWhenAddingImage, mlManager, editorUndoBar, supportsPinchToZoom) {
    const signal = this._signal = this.#abortController.signal;
    this.#container = container;
    this.#viewer = viewer;
    this.#altTextManager = altTextManager;
    this.#signatureManager = signatureManager;
    this._eventBus = eventBus;
    eventBus._on("editingaction", this.onEditingAction.bind(this), {
      signal
    });
    eventBus._on("pagechanging", this.onPageChanging.bind(this), {
      signal
    });
    eventBus._on("scalechanging", this.onScaleChanging.bind(this), {
      signal
    });
    eventBus._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal
    });
    eventBus._on("setpreference", this.onSetPreference.bind(this), {
      signal
    });
    eventBus._on("switchannotationeditorparams", evt => this.updateParams(evt.type, evt.value), {
      signal
    });
    this.#addSelectionListener();
    this.#addDragAndDropListeners();
    this.#addKeyboardManager();
    this.#annotationStorage = pdfDocument.annotationStorage;
    this.#filterFactory = pdfDocument.filterFactory;
    this.#pageColors = pageColors;
    this.#highlightColors = highlightColors || null;
    this.#enableHighlightFloatingButton = enableHighlightFloatingButton;
    this.#enableUpdatedAddImage = enableUpdatedAddImage;
    this.#enableNewAltTextWhenAddingImage = enableNewAltTextWhenAddingImage;
    this.#mlManager = mlManager || null;
    this.viewParameters = {
      realScale: PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: 0
    };
    this.isShiftKeyDown = false;
    this._editorUndoBar = editorUndoBar || null;
    this._supportsPinchToZoom = supportsPinchToZoom !== false;
  }
  destroy() {
    this.#updateModeCapability?.resolve();
    this.#updateModeCapability = null;
    this.#abortController?.abort();
    this.#abortController = null;
    this._signal = null;
    for (const layer of this.#allLayers.values()) {
      layer.destroy();
    }
    this.#allLayers.clear();
    this.#allEditors.clear();
    this.#editorsToRescale.clear();
    this.#missingCanvases?.clear();
    this.#activeEditor = null;
    this.#selectedEditors.clear();
    this.#commandManager.destroy();
    this.#altTextManager?.destroy();
    this.#signatureManager?.destroy();
    this.#highlightToolbar?.hide();
    this.#highlightToolbar = null;
    this.#mainHighlightColorPicker?.destroy();
    this.#mainHighlightColorPicker = null;
    if (this.#focusMainContainerTimeoutId) {
      clearTimeout(this.#focusMainContainerTimeoutId);
      this.#focusMainContainerTimeoutId = null;
    }
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
      this.#translationTimeoutId = null;
    }
    this._editorUndoBar?.destroy();
  }
  combinedSignal(ac) {
    return AbortSignal.any([this._signal, ac.signal]);
  }
  get mlManager() {
    return this.#mlManager;
  }
  get useNewAltTextFlow() {
    return this.#enableUpdatedAddImage;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#enableNewAltTextWhenAddingImage;
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", this.#pageColors ? this.#filterFactory.addHCMFilter(this.#pageColors.foreground, this.#pageColors.background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(this.#container).direction);
  }
  get highlightColors() {
    return shadow(this, "highlightColors", this.#highlightColors ? new Map(this.#highlightColors.split(",").map(pair => pair.split("=").map(x => x.trim()))) : null);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, e => e.reverse())) : null);
  }
  setCurrentDrawingSession(layer) {
    if (layer) {
      this.unselectAll();
      this.disableUserSelect(true);
    } else {
      this.disableUserSelect(false);
    }
    this.#currentDrawingSession = layer;
  }
  setMainHighlightColorPicker(colorPicker) {
    this.#mainHighlightColorPicker = colorPicker;
  }
  editAltText(editor, firstTime = false) {
    this.#altTextManager?.editAltText(this, editor, firstTime);
  }
  getSignature(editor) {
    this.#signatureManager?.getSignature({
      uiManager: this,
      editor
    });
  }
  get signatureManager() {
    return this.#signatureManager;
  }
  switchToMode(mode, callback) {
    this._eventBus.on("annotationeditormodechanged", callback, {
      once: true,
      signal: this._signal
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode
    });
  }
  setPreference(name, value) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name,
      value
    });
  }
  onSetPreference({
    name,
    value
  }) {
    switch (name) {
      case "enableNewAltTextWhenAddingImage":
        this.#enableNewAltTextWhenAddingImage = value;
        break;
    }
  }
  onPageChanging({
    pageNumber
  }) {
    this.#currentPageIndex = pageNumber - 1;
  }
  focusMainContainer() {
    this.#container.focus();
  }
  findParent(x, y) {
    for (const layer of this.#allLayers.values()) {
      const {
        x: layerX,
        y: layerY,
        width,
        height
      } = layer.div.getBoundingClientRect();
      if (x >= layerX && x <= layerX + width && y >= layerY && y <= layerY + height) {
        return layer;
      }
    }
    return null;
  }
  disableUserSelect(value = false) {
    this.#viewer.classList.toggle("noUserSelect", value);
  }
  addShouldRescale(editor) {
    this.#editorsToRescale.add(editor);
  }
  removeShouldRescale(editor) {
    this.#editorsToRescale.delete(editor);
  }
  onScaleChanging({
    scale
  }) {
    this.commitOrRemove();
    this.viewParameters.realScale = scale * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const editor of this.#editorsToRescale) {
      editor.onScaleChanging();
    }
    this.#currentDrawingSession?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation
  }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  #getAnchorElementForSelection({
    anchorNode
  }) {
    return anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
  }
  #getLayerForTextLayer(textLayer) {
    const {
      currentLayer
    } = this;
    if (currentLayer.hasTextLayer(textLayer)) {
      return currentLayer;
    }
    for (const layer of this.#allLayers.values()) {
      if (layer.hasTextLayer(textLayer)) {
        return layer;
      }
    }
    return null;
  }
  highlightSelection(methodOfCreation = "") {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = selection;
    const text = selection.toString();
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    selection.empty();
    const layer = this.#getLayerForTextLayer(textLayer);
    const isNoneMode = this.#mode === AnnotationEditorType.NONE;
    const callback = () => {
      layer?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, false, {
        methodOfCreation,
        boxes,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset,
        text
      });
      if (isNoneMode) {
        this.showAllEditors("highlight", true, true);
      }
    };
    if (isNoneMode) {
      this.switchToMode(AnnotationEditorType.HIGHLIGHT, callback);
      return;
    }
    callback();
  }
  #displayHighlightToolbar() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    this.#highlightToolbar ||= new HighlightToolbar(this);
    this.#highlightToolbar.show(textLayer, boxes, this.direction === "ltr");
  }
  addToAnnotationStorage(editor) {
    if (!editor.isEmpty() && this.#annotationStorage && !this.#annotationStorage.has(editor.id)) {
      this.#annotationStorage.setValue(editor.id, editor);
    }
  }
  #selectionChange() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      if (this.#selectedTextNode) {
        this.#highlightToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    const {
      anchorNode
    } = selection;
    if (anchorNode === this.#selectedTextNode) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    if (!textLayer) {
      if (this.#selectedTextNode) {
        this.#highlightToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    this.#highlightToolbar?.hide();
    this.#selectedTextNode = anchorNode;
    this.#dispatchUpdateStates({
      hasSelectedText: true
    });
    if (this.#mode !== AnnotationEditorType.HIGHLIGHT && this.#mode !== AnnotationEditorType.NONE) {
      return;
    }
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.showAllEditors("highlight", true, true);
    }
    this.#highlightWhenShiftUp = this.isShiftKeyDown;
    if (!this.isShiftKeyDown) {
      const activeLayer = this.#mode === AnnotationEditorType.HIGHLIGHT ? this.#getLayerForTextLayer(textLayer) : null;
      activeLayer?.toggleDrawing();
      const ac = new AbortController();
      const signal = this.combinedSignal(ac);
      const pointerup = e => {
        if (e.type === "pointerup" && e.button !== 0) {
          return;
        }
        ac.abort();
        activeLayer?.toggleDrawing(true);
        if (e.type === "pointerup") {
          this.#onSelectEnd("main_toolbar");
        }
      };
      window.addEventListener("pointerup", pointerup, {
        signal
      });
      window.addEventListener("blur", pointerup, {
        signal
      });
    }
  }
  #onSelectEnd(methodOfCreation = "") {
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.highlightSelection(methodOfCreation);
    } else if (this.#enableHighlightFloatingButton) {
      this.#displayHighlightToolbar();
    }
  }
  #addSelectionListener() {
    document.addEventListener("selectionchange", this.#selectionChange.bind(this), {
      signal: this._signal
    });
  }
  #addFocusManager() {
    if (this.#focusManagerAC) {
      return;
    }
    this.#focusManagerAC = new AbortController();
    const signal = this.combinedSignal(this.#focusManagerAC);
    window.addEventListener("focus", this.focus.bind(this), {
      signal
    });
    window.addEventListener("blur", this.blur.bind(this), {
      signal
    });
  }
  #removeFocusManager() {
    this.#focusManagerAC?.abort();
    this.#focusManagerAC = null;
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#highlightWhenShiftUp) {
      this.#highlightWhenShiftUp = false;
      this.#onSelectEnd("main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    const {
      activeElement
    } = document;
    for (const editor of this.#selectedEditors) {
      if (editor.div.contains(activeElement)) {
        this.#lastActiveElement = [editor, activeElement];
        editor._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!this.#lastActiveElement) {
      return;
    }
    const [lastEditor, lastActiveElement] = this.#lastActiveElement;
    this.#lastActiveElement = null;
    lastActiveElement.addEventListener("focusin", () => {
      lastEditor._focusEventsAllowed = true;
    }, {
      once: true,
      signal: this._signal
    });
    lastActiveElement.focus();
  }
  #addKeyboardManager() {
    if (this.#keyboardManagerAC) {
      return;
    }
    this.#keyboardManagerAC = new AbortController();
    const signal = this.combinedSignal(this.#keyboardManagerAC);
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal
    });
    window.addEventListener("keyup", this.keyup.bind(this), {
      signal
    });
  }
  #removeKeyboardManager() {
    this.#keyboardManagerAC?.abort();
    this.#keyboardManagerAC = null;
  }
  #addCopyPasteListeners() {
    if (this.#copyPasteAC) {
      return;
    }
    this.#copyPasteAC = new AbortController();
    const signal = this.combinedSignal(this.#copyPasteAC);
    document.addEventListener("copy", this.copy.bind(this), {
      signal
    });
    document.addEventListener("cut", this.cut.bind(this), {
      signal
    });
    document.addEventListener("paste", this.paste.bind(this), {
      signal
    });
  }
  #removeCopyPasteListeners() {
    this.#copyPasteAC?.abort();
    this.#copyPasteAC = null;
  }
  #addDragAndDropListeners() {
    const signal = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal
    });
    document.addEventListener("drop", this.drop.bind(this), {
      signal
    });
  }
  addEditListeners() {
    this.#addKeyboardManager();
    this.#addCopyPasteListeners();
  }
  removeEditListeners() {
    this.#removeKeyboardManager();
    this.#removeCopyPasteListeners();
  }
  dragOver(event) {
    for (const {
      type
    } of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(type)) {
          event.dataTransfer.dropEffect = "copy";
          event.preventDefault();
          return;
        }
      }
    }
  }
  drop(event) {
    for (const item of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          event.preventDefault();
          return;
        }
      }
    }
  }
  copy(event) {
    event.preventDefault();
    this.#activeEditor?.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const editors = [];
    for (const editor of this.#selectedEditors) {
      const serialized = editor.serialize(true);
      if (serialized) {
        editors.push(serialized);
      }
    }
    if (editors.length === 0) {
      return;
    }
    event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
  }
  cut(event) {
    this.copy(event);
    this.delete();
  }
  async paste(event) {
    event.preventDefault();
    const {
      clipboardData
    } = event;
    for (const item of clipboardData.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          return;
        }
      }
    }
    let data = clipboardData.getData("application/pdfjs");
    if (!data) {
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
      return;
    }
    if (!Array.isArray(data)) {
      return;
    }
    this.unselectAll();
    const layer = this.currentLayer;
    try {
      const newEditors = [];
      for (const editor of data) {
        const deserializedEditor = await layer.deserialize(editor);
        if (!deserializedEditor) {
          return;
        }
        newEditors.push(deserializedEditor);
      }
      const cmd = () => {
        for (const editor of newEditors) {
          this.#addEditorToLayer(editor);
        }
        this.#selectEditors(newEditors);
      };
      const undo = () => {
        for (const editor of newEditors) {
          editor.remove();
        }
      };
      this.addCommands({
        cmd,
        undo,
        mustExec: true
      });
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
    }
  }
  keydown(event) {
    if (!this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = true;
    }
    if (this.#mode !== AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard) {
      AnnotationEditorUIManager._keyboardManager.exec(this, event);
    }
  }
  keyup(event) {
    if (this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = false;
      if (this.#highlightWhenShiftUp) {
        this.#highlightWhenShiftUp = false;
        this.#onSelectEnd("main_toolbar");
      }
    }
  }
  onEditingAction({
    name
  }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  #dispatchUpdateStates(details) {
    const hasChanged = Object.entries(details).some(([key, value]) => this.#previousStates[key] !== value);
    if (hasChanged) {
      this._eventBus.dispatch("annotationeditorstateschanged", {
        source: this,
        details: Object.assign(this.#previousStates, details)
      });
      if (this.#mode === AnnotationEditorType.HIGHLIGHT && details.hasSelectedEditor === false) {
        this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
      }
    }
  }
  #dispatchUpdateUI(details) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details
    });
  }
  setEditingState(isEditing) {
    if (isEditing) {
      this.#addFocusManager();
      this.#addCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: this.#mode !== AnnotationEditorType.NONE,
        isEmpty: this.#isEmpty(),
        hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
        hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
        hasSelectedEditor: false
      });
    } else {
      this.#removeFocusManager();
      this.#removeCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: false
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(types) {
    if (this.#editorTypes) {
      return;
    }
    this.#editorTypes = types;
    for (const editorType of this.#editorTypes) {
      this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#idManager.id;
  }
  get currentLayer() {
    return this.#allLayers.get(this.#currentPageIndex);
  }
  getLayer(pageIndex) {
    return this.#allLayers.get(pageIndex);
  }
  get currentPageIndex() {
    return this.#currentPageIndex;
  }
  addLayer(layer) {
    this.#allLayers.set(layer.pageIndex, layer);
    if (this.#isEnabled) {
      layer.enable();
    } else {
      layer.disable();
    }
  }
  removeLayer(layer) {
    this.#allLayers.delete(layer.pageIndex);
  }
  async updateMode(mode, editId = null, isFromKeyboard = false) {
    if (this.#mode === mode) {
      return;
    }
    if (this.#updateModeCapability) {
      await this.#updateModeCapability.promise;
      if (!this.#updateModeCapability) {
        return;
      }
    }
    this.#updateModeCapability = Promise.withResolvers();
    this.#currentDrawingSession?.commitOrRemove();
    this.#mode = mode;
    if (mode === AnnotationEditorType.NONE) {
      this.setEditingState(false);
      this.#disableAll();
      this._editorUndoBar?.hide();
      this.#updateModeCapability.resolve();
      return;
    }
    if (mode === AnnotationEditorType.SIGNATURE) {
      await this.#signatureManager?.loadSignatures();
    }
    this.setEditingState(true);
    await this.#enableAll();
    this.unselectAll();
    for (const layer of this.#allLayers.values()) {
      layer.updateMode(mode);
    }
    if (!editId) {
      if (isFromKeyboard) {
        this.addNewEditorFromKeyboard();
      }
      this.#updateModeCapability.resolve();
      return;
    }
    for (const editor of this.#allEditors.values()) {
      if (editor.annotationElementId === editId || editor.id === editId) {
        this.setSelected(editor);
        editor.enterInEditMode();
      } else {
        editor.unselect();
      }
    }
    this.#updateModeCapability.resolve();
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(options) {
    if (options.mode === this.#mode) {
      return;
    }
    this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...options
    });
  }
  updateParams(type, value) {
    if (!this.#editorTypes) {
      return;
    }
    switch (type) {
      case AnnotationEditorParamsType.CREATE:
        this.currentLayer.addNewEditor(value);
        return;
      case AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
        this.#mainHighlightColorPicker?.updateColor(value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
        this._eventBus.dispatch("reporttelemetry", {
          source: this,
          details: {
            type: "editing",
            data: {
              type: "highlight",
              action: "toggle_visibility"
            }
          }
        });
        (this.#showAllStates ||= new Map()).set(type, value);
        this.showAllEditors("highlight", value);
        break;
    }
    for (const editor of this.#selectedEditors) {
      editor.updateParams(type, value);
    }
    for (const editorType of this.#editorTypes) {
      editorType.updateDefaultParams(type, value);
    }
  }
  showAllEditors(type, visible, updateButton = false) {
    for (const editor of this.#allEditors.values()) {
      if (editor.editorType === type) {
        editor.show(visible);
      }
    }
    const state = this.#showAllStates?.get(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true;
    if (state !== visible) {
      this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, visible]]);
    }
  }
  enableWaiting(mustWait = false) {
    if (this.#isWaiting === mustWait) {
      return;
    }
    this.#isWaiting = mustWait;
    for (const layer of this.#allLayers.values()) {
      if (mustWait) {
        layer.disableClick();
      } else {
        layer.enableClick();
      }
      layer.div.classList.toggle("waiting", mustWait);
    }
  }
  async #enableAll() {
    if (!this.#isEnabled) {
      this.#isEnabled = true;
      const promises = [];
      for (const layer of this.#allLayers.values()) {
        promises.push(layer.enable());
      }
      await Promise.all(promises);
      for (const editor of this.#allEditors.values()) {
        editor.enable();
      }
    }
  }
  #disableAll() {
    this.unselectAll();
    if (this.#isEnabled) {
      this.#isEnabled = false;
      for (const layer of this.#allLayers.values()) {
        layer.disable();
      }
      for (const editor of this.#allEditors.values()) {
        editor.disable();
      }
    }
  }
  getEditors(pageIndex) {
    const editors = [];
    for (const editor of this.#allEditors.values()) {
      if (editor.pageIndex === pageIndex) {
        editors.push(editor);
      }
    }
    return editors;
  }
  getEditor(id) {
    return this.#allEditors.get(id);
  }
  addEditor(editor) {
    this.#allEditors.set(editor.id, editor);
  }
  removeEditor(editor) {
    if (editor.div.contains(document.activeElement)) {
      if (this.#focusMainContainerTimeoutId) {
        clearTimeout(this.#focusMainContainerTimeoutId);
      }
      this.#focusMainContainerTimeoutId = setTimeout(() => {
        this.focusMainContainer();
        this.#focusMainContainerTimeoutId = null;
      }, 0);
    }
    this.#allEditors.delete(editor.id);
    if (editor.annotationElementId) {
      this.#missingCanvases?.delete(editor.annotationElementId);
    }
    this.unselect(editor);
    if (!editor.annotationElementId || !this.#deletedAnnotationsElementIds.has(editor.annotationElementId)) {
      this.#annotationStorage?.remove(editor.id);
    }
  }
  addDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.add(editor.annotationElementId);
    this.addChangedExistingAnnotation(editor);
    editor.deleted = true;
  }
  isDeletedAnnotationElement(annotationElementId) {
    return this.#deletedAnnotationsElementIds.has(annotationElementId);
  }
  removeDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.delete(editor.annotationElementId);
    this.removeChangedExistingAnnotation(editor);
    editor.deleted = false;
  }
  #addEditorToLayer(editor) {
    const layer = this.#allLayers.get(editor.pageIndex);
    if (layer) {
      layer.addOrRebuild(editor);
    } else {
      this.addEditor(editor);
      this.addToAnnotationStorage(editor);
    }
  }
  setActiveEditor(editor) {
    if (this.#activeEditor === editor) {
      return;
    }
    this.#activeEditor = editor;
    if (editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  get #lastSelectedEditor() {
    let ed = null;
    for (ed of this.#selectedEditors) {}
    return ed;
  }
  updateUI(editor) {
    if (this.#lastSelectedEditor === editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  updateUIForDefaultProperties(editorType) {
    this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
  }
  toggleSelected(editor) {
    if (this.#selectedEditors.has(editor)) {
      this.#selectedEditors.delete(editor);
      editor.unselect();
      this.#dispatchUpdateStates({
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  setSelected(editor) {
    this.#currentDrawingSession?.commitOrRemove();
    for (const ed of this.#selectedEditors) {
      if (ed !== editor) {
        ed.unselect();
      }
    }
    this.#selectedEditors.clear();
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  isSelected(editor) {
    return this.#selectedEditors.has(editor);
  }
  get firstSelectedEditor() {
    return this.#selectedEditors.values().next().value;
  }
  unselect(editor) {
    editor.unselect();
    this.#selectedEditors.delete(editor);
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return this.#selectedEditors.size !== 0;
  }
  get isEnterHandled() {
    return this.#selectedEditors.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#commandManager.undo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: this.#isEmpty()
    });
    this._editorUndoBar?.hide();
  }
  redo() {
    this.#commandManager.redo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
      isEmpty: this.#isEmpty()
    });
  }
  addCommands(params) {
    this.#commandManager.add(params);
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: this.#isEmpty()
    });
  }
  cleanUndoStack(type) {
    this.#commandManager.cleanType(type);
  }
  #isEmpty() {
    if (this.#allEditors.size === 0) {
      return true;
    }
    if (this.#allEditors.size === 1) {
      for (const editor of this.#allEditors.values()) {
        return editor.isEmpty();
      }
    }
    return false;
  }
  delete() {
    this.commitOrRemove();
    const drawingEditor = this.currentLayer?.endDrawingSession(true);
    if (!this.hasSelection && !drawingEditor) {
      return;
    }
    const editors = drawingEditor ? [drawingEditor] : [...this.#selectedEditors];
    const cmd = () => {
      this._editorUndoBar?.show(undo, editors.length === 1 ? editors[0].editorType : editors.length);
      for (const editor of editors) {
        editor.remove();
      }
    };
    const undo = () => {
      for (const editor of editors) {
        this.#addEditorToLayer(editor);
      }
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  commitOrRemove() {
    this.#activeEditor?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#activeEditor || this.hasSelection;
  }
  #selectEditors(editors) {
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    for (const editor of editors) {
      if (editor.isEmpty()) {
        continue;
      }
      this.#selectedEditors.add(editor);
      editor.select();
    }
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  selectAll() {
    for (const editor of this.#selectedEditors) {
      editor.commit();
    }
    this.#selectEditors(this.#allEditors.values());
  }
  unselectAll() {
    if (this.#activeEditor) {
      this.#activeEditor.commitOrRemove();
      if (this.#mode !== AnnotationEditorType.NONE) {
        return;
      }
    }
    if (this.#currentDrawingSession?.commitOrRemove()) {
      return;
    }
    if (!this.hasSelection) {
      return;
    }
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    this.#dispatchUpdateStates({
      hasSelectedEditor: false
    });
  }
  translateSelectedEditors(x, y, noCommit = false) {
    if (!noCommit) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    this.#translation[0] += x;
    this.#translation[1] += y;
    const [totalX, totalY] = this.#translation;
    const editors = [...this.#selectedEditors];
    const TIME_TO_WAIT = 1000;
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
    }
    this.#translationTimeoutId = setTimeout(() => {
      this.#translationTimeoutId = null;
      this.#translation[0] = this.#translation[1] = 0;
      this.addCommands({
        cmd: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(totalX, totalY);
              editor.translationDone();
            }
          }
        },
        undo: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(-totalX, -totalY);
              editor.translationDone();
            }
          }
        },
        mustExec: false
      });
    }, TIME_TO_WAIT);
    for (const editor of editors) {
      editor.translateInPage(x, y);
      editor.translationDone();
    }
  }
  setUpDragSession() {
    if (!this.hasSelection) {
      return;
    }
    this.disableUserSelect(true);
    this.#draggingEditors = new Map();
    for (const editor of this.#selectedEditors) {
      this.#draggingEditors.set(editor, {
        savedX: editor.x,
        savedY: editor.y,
        savedPageIndex: editor.pageIndex,
        newX: 0,
        newY: 0,
        newPageIndex: -1
      });
    }
  }
  endDragSession() {
    if (!this.#draggingEditors) {
      return false;
    }
    this.disableUserSelect(false);
    const map = this.#draggingEditors;
    this.#draggingEditors = null;
    let mustBeAddedInUndoStack = false;
    for (const [{
      x,
      y,
      pageIndex
    }, value] of map) {
      value.newX = x;
      value.newY = y;
      value.newPageIndex = pageIndex;
      mustBeAddedInUndoStack ||= x !== value.savedX || y !== value.savedY || pageIndex !== value.savedPageIndex;
    }
    if (!mustBeAddedInUndoStack) {
      return false;
    }
    const move = (editor, x, y, pageIndex) => {
      if (this.#allEditors.has(editor.id)) {
        const parent = this.#allLayers.get(pageIndex);
        if (parent) {
          editor._setParentAndPosition(parent, x, y);
        } else {
          editor.pageIndex = pageIndex;
          editor.x = x;
          editor.y = y;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (const [editor, {
          newX,
          newY,
          newPageIndex
        }] of map) {
          move(editor, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (const [editor, {
          savedX,
          savedY,
          savedPageIndex
        }] of map) {
          move(editor, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true
    });
    return true;
  }
  dragSelectedEditors(tx, ty) {
    if (!this.#draggingEditors) {
      return;
    }
    for (const editor of this.#draggingEditors.keys()) {
      editor.drag(tx, ty);
    }
  }
  rebuild(editor) {
    if (editor.parent === null) {
      const parent = this.getLayer(editor.pageIndex);
      if (parent) {
        parent.changeParent(editor);
        parent.addOrRebuild(editor);
      } else {
        this.addEditor(editor);
        this.addToAnnotationStorage(editor);
        editor.rebuild();
      }
    } else {
      editor.parent.addOrRebuild(editor);
    }
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || this.#selectedEditors.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(editor) {
    return this.#activeEditor === editor;
  }
  getActive() {
    return this.#activeEditor;
  }
  getMode() {
    return this.#mode;
  }
  get imageManager() {
    return shadow(this, "imageManager", new ImageManager());
  }
  getSelectionBoxes(textLayer) {
    if (!textLayer) {
      return null;
    }
    const selection = document.getSelection();
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      if (!textLayer.contains(selection.getRangeAt(i).commonAncestorContainer)) {
        return null;
      }
    }
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    let rotator;
    switch (textLayer.getAttribute("data-main-rotation")) {
      case "90":
        rotator = (x, y, w, h) => ({
          x: (y - layerY) / parentHeight,
          y: 1 - (x + w - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      case "180":
        rotator = (x, y, w, h) => ({
          x: 1 - (x + w - layerX) / parentWidth,
          y: 1 - (y + h - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
      case "270":
        rotator = (x, y, w, h) => ({
          x: 1 - (y + h - layerY) / parentHeight,
          y: (x - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      default:
        rotator = (x, y, w, h) => ({
          x: (x - layerX) / parentWidth,
          y: (y - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
    }
    const boxes = [];
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      const range = selection.getRangeAt(i);
      if (range.collapsed) {
        continue;
      }
      for (const {
        x,
        y,
        width,
        height
      } of range.getClientRects()) {
        if (width === 0 || height === 0) {
          continue;
        }
        boxes.push(rotator(x, y, width, height));
      }
    }
    return boxes.length === 0 ? null : boxes;
  }
  addChangedExistingAnnotation({
    annotationElementId,
    id
  }) {
    (this.#changedExistingAnnotations ||= new Map()).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({
    annotationElementId
  }) {
    this.#changedExistingAnnotations?.delete(annotationElementId);
  }
  renderAnnotationElement(annotation) {
    const editorId = this.#changedExistingAnnotations?.get(annotation.data.id);
    if (!editorId) {
      return;
    }
    const editor = this.#annotationStorage.getRawValue(editorId);
    if (!editor) {
      return;
    }
    if (this.#mode === AnnotationEditorType.NONE && !editor.hasBeenModified) {
      return;
    }
    editor.renderAnnotationElement(annotation);
  }
  setMissingCanvas(annotationId, annotationElementId, canvas) {
    const editor = this.#missingCanvases?.get(annotationId);
    if (!editor) {
      return;
    }
    editor.setCanvas(annotationElementId, canvas);
    this.#missingCanvases.delete(annotationId);
  }
  addMissingCanvas(annotationId, editor) {
    (this.#missingCanvases ||= new Map()).set(annotationId, editor);
  }
}

class AltText {
  #altText = null;
  #altTextDecorative = false;
  #altTextButton = null;
  #altTextButtonLabel = null;
  #altTextTooltip = null;
  #altTextTooltipTimeout = null;
  #altTextWasFromKeyBoard = false;
  #badge = null;
  #editor = null;
  #guessedText = null;
  #textWithDisclaimer = null;
  #useNewAltTextFlow = false;
  static #l10nNewButton = null;
  static _l10n = null;
  constructor(editor) {
    this.#editor = editor;
    this.#useNewAltTextFlow = editor._uiManager.useNewAltTextFlow;
    AltText.#l10nNewButton ||= Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    });
  }
  static initialize(l10n) {
    AltText._l10n ??= l10n;
  }
  async render() {
    const altText = this.#altTextButton = document.createElement("button");
    altText.className = "altText";
    altText.tabIndex = "0";
    const label = this.#altTextButtonLabel = document.createElement("span");
    altText.append(label);
    if (this.#useNewAltTextFlow) {
      altText.classList.add("new");
      altText.setAttribute("data-l10n-id", AltText.#l10nNewButton.missing);
      label.setAttribute("data-l10n-id", AltText.#l10nNewButton["missing-label"]);
    } else {
      altText.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      label.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    const signal = this.#editor._uiManager._signal;
    altText.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    altText.addEventListener("pointerdown", event => event.stopPropagation(), {
      signal
    });
    const onClick = event => {
      event.preventDefault();
      this.#editor._uiManager.editAltText(this.#editor);
      if (this.#useNewAltTextFlow) {
        this.#editor._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: this.#label
          }
        });
      }
    };
    altText.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    altText.addEventListener("keydown", event => {
      if (event.target === altText && event.key === "Enter") {
        this.#altTextWasFromKeyBoard = true;
        onClick(event);
      }
    }, {
      signal
    });
    await this.#setState();
    return altText;
  }
  get #label() {
    return this.#altText && "added" || this.#altText === null && this.guessedText && "review" || "missing";
  }
  finish() {
    if (!this.#altTextButton) {
      return;
    }
    this.#altTextButton.focus({
      focusVisible: this.#altTextWasFromKeyBoard
    });
    this.#altTextWasFromKeyBoard = false;
  }
  isEmpty() {
    if (this.#useNewAltTextFlow) {
      return this.#altText === null;
    }
    return !this.#altText && !this.#altTextDecorative;
  }
  hasData() {
    if (this.#useNewAltTextFlow) {
      return this.#altText !== null || !!this.#guessedText;
    }
    return this.isEmpty();
  }
  get guessedText() {
    return this.#guessedText;
  }
  async setGuessedText(guessedText) {
    if (this.#altText !== null) {
      return;
    }
    this.#guessedText = guessedText;
    this.#textWithDisclaimer = await AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: guessedText
    });
    this.#setState();
  }
  toggleAltTextBadge(visibility = false) {
    if (!this.#useNewAltTextFlow || this.#altText) {
      this.#badge?.remove();
      this.#badge = null;
      return;
    }
    if (!this.#badge) {
      const badge = this.#badge = document.createElement("div");
      badge.className = "noAltTextBadge";
      this.#editor.div.append(badge);
    }
    this.#badge.classList.toggle("hidden", !visibility);
  }
  serialize(isForCopying) {
    let altText = this.#altText;
    if (!isForCopying && this.#guessedText === altText) {
      altText = this.#textWithDisclaimer;
    }
    return {
      altText,
      decorative: this.#altTextDecorative,
      guessedText: this.#guessedText,
      textWithDisclaimer: this.#textWithDisclaimer
    };
  }
  get data() {
    return {
      altText: this.#altText,
      decorative: this.#altTextDecorative
    };
  }
  set data({
    altText,
    decorative,
    guessedText,
    textWithDisclaimer,
    cancel = false
  }) {
    if (guessedText) {
      this.#guessedText = guessedText;
      this.#textWithDisclaimer = textWithDisclaimer;
    }
    if (this.#altText === altText && this.#altTextDecorative === decorative) {
      return;
    }
    if (!cancel) {
      this.#altText = altText;
      this.#altTextDecorative = decorative;
    }
    this.#setState();
  }
  toggle(enabled = false) {
    if (!this.#altTextButton) {
      return;
    }
    if (!enabled && this.#altTextTooltipTimeout) {
      clearTimeout(this.#altTextTooltipTimeout);
      this.#altTextTooltipTimeout = null;
    }
    this.#altTextButton.disabled = !enabled;
  }
  shown() {
    this.#editor._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#label
      }
    });
  }
  destroy() {
    this.#altTextButton?.remove();
    this.#altTextButton = null;
    this.#altTextButtonLabel = null;
    this.#altTextTooltip = null;
    this.#badge?.remove();
    this.#badge = null;
  }
  async #setState() {
    const button = this.#altTextButton;
    if (!button) {
      return;
    }
    if (this.#useNewAltTextFlow) {
      button.classList.toggle("done", !!this.#altText);
      button.setAttribute("data-l10n-id", AltText.#l10nNewButton[this.#label]);
      this.#altTextButtonLabel?.setAttribute("data-l10n-id", AltText.#l10nNewButton[`${this.#label}-label`]);
      if (!this.#altText) {
        this.#altTextTooltip?.remove();
        return;
      }
    } else {
      if (!this.#altText && !this.#altTextDecorative) {
        button.classList.remove("done");
        this.#altTextTooltip?.remove();
        return;
      }
      button.classList.add("done");
      button.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let tooltip = this.#altTextTooltip;
    if (!tooltip) {
      this.#altTextTooltip = tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.setAttribute("role", "tooltip");
      tooltip.id = `alt-text-tooltip-${this.#editor.id}`;
      const DELAY_TO_SHOW_TOOLTIP = 100;
      const signal = this.#editor._uiManager._signal;
      signal.addEventListener("abort", () => {
        clearTimeout(this.#altTextTooltipTimeout);
        this.#altTextTooltipTimeout = null;
      }, {
        once: true
      });
      button.addEventListener("mouseenter", () => {
        this.#altTextTooltipTimeout = setTimeout(() => {
          this.#altTextTooltipTimeout = null;
          this.#altTextTooltip.classList.add("show");
          this.#editor._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, DELAY_TO_SHOW_TOOLTIP);
      }, {
        signal
      });
      button.addEventListener("mouseleave", () => {
        if (this.#altTextTooltipTimeout) {
          clearTimeout(this.#altTextTooltipTimeout);
          this.#altTextTooltipTimeout = null;
        }
        this.#altTextTooltip?.classList.remove("show");
      }, {
        signal
      });
    }
    if (this.#altTextDecorative) {
      tooltip.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
    } else {
      tooltip.removeAttribute("data-l10n-id");
      tooltip.textContent = this.#altText;
    }
    if (!tooltip.parentNode) {
      button.append(tooltip);
    }
    const element = this.#editor.getElementForAltText();
    element?.setAttribute("aria-describedby", tooltip.id);
  }
}

class TouchManager {
  #container;
  #isPinching = false;
  #isPinchingStopped = null;
  #isPinchingDisabled;
  #onPinchStart;
  #onPinching;
  #onPinchEnd;
  #pointerDownAC = null;
  #signal;
  #touchInfo = null;
  #touchManagerAC;
  #touchMoveAC = null;
  constructor({
    container,
    isPinchingDisabled = null,
    isPinchingStopped = null,
    onPinchStart = null,
    onPinching = null,
    onPinchEnd = null,
    signal
  }) {
    this.#container = container;
    this.#isPinchingStopped = isPinchingStopped;
    this.#isPinchingDisabled = isPinchingDisabled;
    this.#onPinchStart = onPinchStart;
    this.#onPinching = onPinching;
    this.#onPinchEnd = onPinchEnd;
    this.#touchManagerAC = new AbortController();
    this.#signal = AbortSignal.any([signal, this.#touchManagerAC.signal]);
    container.addEventListener("touchstart", this.#onTouchStart.bind(this), {
      passive: false,
      signal: this.#signal
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / OutputScale.pixelRatio;
  }
  #onTouchStart(evt) {
    if (this.#isPinchingDisabled?.()) {
      return;
    }
    if (evt.touches.length === 1) {
      if (this.#pointerDownAC) {
        return;
      }
      const pointerDownAC = this.#pointerDownAC = new AbortController();
      const signal = AbortSignal.any([this.#signal, pointerDownAC.signal]);
      const container = this.#container;
      const opts = {
        capture: true,
        signal,
        passive: false
      };
      const cancelPointerDown = e => {
        if (e.pointerType === "touch") {
          this.#pointerDownAC?.abort();
          this.#pointerDownAC = null;
        }
      };
      container.addEventListener("pointerdown", e => {
        if (e.pointerType === "touch") {
          stopEvent(e);
          cancelPointerDown(e);
        }
      }, opts);
      container.addEventListener("pointerup", cancelPointerDown, opts);
      container.addEventListener("pointercancel", cancelPointerDown, opts);
      return;
    }
    if (!this.#touchMoveAC) {
      this.#touchMoveAC = new AbortController();
      const signal = AbortSignal.any([this.#signal, this.#touchMoveAC.signal]);
      const container = this.#container;
      const opt = {
        signal,
        capture: false,
        passive: false
      };
      container.addEventListener("touchmove", this.#onTouchMove.bind(this), opt);
      const onTouchEnd = this.#onTouchEnd.bind(this);
      container.addEventListener("touchend", onTouchEnd, opt);
      container.addEventListener("touchcancel", onTouchEnd, opt);
      opt.capture = true;
      container.addEventListener("pointerdown", stopEvent, opt);
      container.addEventListener("pointermove", stopEvent, opt);
      container.addEventListener("pointercancel", stopEvent, opt);
      container.addEventListener("pointerup", stopEvent, opt);
      this.#onPinchStart?.();
    }
    stopEvent(evt);
    if (evt.touches.length !== 2 || this.#isPinchingStopped?.()) {
      this.#touchInfo = null;
      return;
    }
    let [touch0, touch1] = evt.touches;
    if (touch0.identifier > touch1.identifier) {
      [touch0, touch1] = [touch1, touch0];
    }
    this.#touchInfo = {
      touch0X: touch0.screenX,
      touch0Y: touch0.screenY,
      touch1X: touch1.screenX,
      touch1Y: touch1.screenY
    };
  }
  #onTouchMove(evt) {
    if (!this.#touchInfo || evt.touches.length !== 2) {
      return;
    }
    stopEvent(evt);
    let [touch0, touch1] = evt.touches;
    if (touch0.identifier > touch1.identifier) {
      [touch0, touch1] = [touch1, touch0];
    }
    const {
      screenX: screen0X,
      screenY: screen0Y
    } = touch0;
    const {
      screenX: screen1X,
      screenY: screen1Y
    } = touch1;
    const touchInfo = this.#touchInfo;
    const {
      touch0X: pTouch0X,
      touch0Y: pTouch0Y,
      touch1X: pTouch1X,
      touch1Y: pTouch1Y
    } = touchInfo;
    const prevGapX = pTouch1X - pTouch0X;
    const prevGapY = pTouch1Y - pTouch0Y;
    const currGapX = screen1X - screen0X;
    const currGapY = screen1Y - screen0Y;
    const distance = Math.hypot(currGapX, currGapY) || 1;
    const pDistance = Math.hypot(prevGapX, prevGapY) || 1;
    if (!this.#isPinching && Math.abs(pDistance - distance) <= TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) {
      return;
    }
    touchInfo.touch0X = screen0X;
    touchInfo.touch0Y = screen0Y;
    touchInfo.touch1X = screen1X;
    touchInfo.touch1Y = screen1Y;
    if (!this.#isPinching) {
      this.#isPinching = true;
      return;
    }
    const origin = [(screen0X + screen1X) / 2, (screen0Y + screen1Y) / 2];
    this.#onPinching?.(origin, pDistance, distance);
  }
  #onTouchEnd(evt) {
    if (evt.touches.length >= 2) {
      return;
    }
    if (this.#touchMoveAC) {
      this.#touchMoveAC.abort();
      this.#touchMoveAC = null;
      this.#onPinchEnd?.();
    }
    if (!this.#touchInfo) {
      return;
    }
    stopEvent(evt);
    this.#touchInfo = null;
    this.#isPinching = false;
  }
  destroy() {
    this.#touchManagerAC?.abort();
    this.#touchManagerAC = null;
    this.#pointerDownAC?.abort();
    this.#pointerDownAC = null;
  }
}






class AnnotationEditor {
  #accessibilityData = null;
  #allResizerDivs = null;
  #altText = null;
  #disabled = false;
  #dragPointerId = null;
  #dragPointerType = "";
  #keepAspectRatio = false;
  #resizersDiv = null;
  #lastPointerCoords = null;
  #savedDimensions = null;
  #focusAC = null;
  #focusedResizerName = "";
  #hasBeenClicked = false;
  #initialRect = null;
  #isEditing = false;
  #isInEditMode = false;
  #isResizerEnabledForKeyboard = false;
  #moveInDOMTimeout = null;
  #prevDragX = 0;
  #prevDragY = 0;
  #telemetryTimeouts = null;
  #touchManager = null;
  isSelected = false;
  _isCopy = false;
  _editToolbar = null;
  _initialOptions = Object.create(null);
  _initialData = null;
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  static _l10n = null;
  static _l10nResizer = null;
  #isDraggable = false;
  #zIndex = AnnotationEditor._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new ColorManager();
  static _zIndex = 1;
  static _telemetryTimeout = 1000;
  static get _resizerKeyboardManager() {
    const resize = AnnotationEditor.prototype._resizeWithKeyboard;
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], resize, {
      args: [-small, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], resize, {
      args: [-big, 0]
    }], [["ArrowRight", "mac+ArrowRight"], resize, {
      args: [small, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], resize, {
      args: [big, 0]
    }], [["ArrowUp", "mac+ArrowUp"], resize, {
      args: [0, -small]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], resize, {
      args: [0, -big]
    }], [["ArrowDown", "mac+ArrowDown"], resize, {
      args: [0, small]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], resize, {
      args: [0, big]
    }], [["Escape", "mac+Escape"], AnnotationEditor.prototype._stopResizingWithKeyboard]]));
  }
  constructor(parameters) {
    this.parent = parameters.parent;
    this.id = parameters.id;
    this.width = this.height = null;
    this.pageIndex = parameters.parent.pageIndex;
    this.name = parameters.name;
    this.div = null;
    this._uiManager = parameters.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = parameters.isCentered;
    this._structTreeParentId = null;
    const {
      rotation,
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    const [width, height] = this.parentDimensions;
    this.x = parameters.x / width;
    this.y = parameters.y / height;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(editor) {
    const fakeEditor = new FakeEditor({
      id: editor.parent.getNextId(),
      parent: editor.parent,
      uiManager: editor._uiManager
    });
    fakeEditor.annotationElementId = editor.annotationElementId;
    fakeEditor.deleted = true;
    fakeEditor._uiManager.addToAnnotationStorage(fakeEditor);
  }
  static initialize(l10n, _uiManager) {
    AnnotationEditor._l10n ??= l10n;
    AnnotationEditor._l10nResizer ||= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    });
    if (AnnotationEditor._borderLineWidth !== -1) {
      return;
    }
    const style = getComputedStyle(document.documentElement);
    AnnotationEditor._borderLineWidth = parseFloat(style.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(_type, _value) {}
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(mime) {
    return false;
  }
  static paste(item, parent) {
    unreachable("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#isDraggable;
  }
  set _isDraggable(value) {
    this.#isDraggable = value;
    this.div?.classList.toggle("draggable", value);
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [pageWidth, pageHeight] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * pageHeight / (pageWidth * 2);
        this.y += this.width * pageWidth / (pageHeight * 2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * pageHeight / (pageWidth * 2);
        this.y -= this.width * pageWidth / (pageHeight * 2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(params) {
    this._uiManager.addCommands(params);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#zIndex;
  }
  setParent(parent) {
    if (parent !== null) {
      this.pageIndex = parent.pageIndex;
      this.pageDimensions = parent.pageDimensions;
    } else {
      this.#stopResizing();
    }
    this.parent = parent;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.#hasBeenClicked) {
      this.parent.setSelected(this);
    } else {
      this.#hasBeenClicked = false;
    }
  }
  focusout(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.isAttachedToDOM) {
      return;
    }
    const target = event.relatedTarget;
    if (target?.closest(`#${this.id}`)) {
      return;
    }
    event.preventDefault();
    if (!this.parent?.isMultipleSelection) {
      this.commitOrRemove();
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(x, y, tx, ty) {
    const [width, height] = this.parentDimensions;
    [tx, ty] = this.screenToPageTranslation(tx, ty);
    this.x = (x + tx) / width;
    this.y = (y + ty) / height;
    this.fixAndSetPosition();
  }
  _moveAfterPaste(baseX, baseY) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
    this._onTranslated();
  }
  #translate([width, height], x, y) {
    [x, y] = this.screenToPageTranslation(x, y);
    this.x += x / width;
    this.y += y / height;
    this._onTranslating(this.x, this.y);
    this.fixAndSetPosition();
  }
  translate(x, y) {
    this.#translate(this.parentDimensions, x, y);
  }
  translateInPage(x, y) {
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    this.#translate(this.pageDimensions, x, y);
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(tx, ty) {
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    const {
      div,
      parentDimensions: [parentWidth, parentHeight]
    } = this;
    this.x += tx / parentWidth;
    this.y += ty / parentHeight;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x,
        y
      } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x, y)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let {
      x,
      y
    } = this;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    const {
      style
    } = div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this._onTranslating(x, y);
    div.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(x, y) {}
  _onTranslated(x, y) {}
  get _hasBeenMoved() {
    return !!this.#initialRect && (this.#initialRect[0] !== this.x || this.#initialRect[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!this.#initialRect && (this.#initialRect[2] !== this.width || this.#initialRect[3] !== this.height);
  }
  getBaseTranslation() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      _borderLineWidth
    } = AnnotationEditor;
    const x = _borderLineWidth / parentWidth;
    const y = _borderLineWidth / parentHeight;
    switch (this.rotation) {
      case 90:
        return [-x, y];
      case 180:
        return [x, y];
      case 270:
        return [x, -y];
      default:
        return [-x, -y];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(rotation = this.rotation) {
    const {
      div: {
        style
      },
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    let {
      x,
      y,
      width,
      height
    } = this;
    width *= pageWidth;
    height *= pageHeight;
    x *= pageWidth;
    y *= pageHeight;
    if (this._mustFixPosition) {
      switch (rotation) {
        case 0:
          x = MathClamp(x, 0, pageWidth - width);
          y = MathClamp(y, 0, pageHeight - height);
          break;
        case 90:
          x = MathClamp(x, 0, pageWidth - height);
          y = MathClamp(y, width, pageHeight);
          break;
        case 180:
          x = MathClamp(x, width, pageWidth);
          y = MathClamp(y, height, pageHeight);
          break;
        case 270:
          x = MathClamp(x, height, pageWidth);
          y = MathClamp(y, 0, pageHeight - width);
          break;
      }
    }
    this.x = x /= pageWidth;
    this.y = y /= pageHeight;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #rotatePoint(x, y, angle) {
    switch (angle) {
      case 90:
        return [y, -x];
      case 180:
        return [-x, -y];
      case 270:
        return [-y, x];
      default:
        return [x, y];
    }
  }
  screenToPageTranslation(x, y) {
    return AnnotationEditor.#rotatePoint(x, y, this.parentRotation);
  }
  pageTranslationToScreen(x, y) {
    return AnnotationEditor.#rotatePoint(x, y, 360 - this.parentRotation);
  }
  #getRotationMatrix(rotation) {
    switch (rotation) {
      case 90:
        {
          const [pageWidth, pageHeight] = this.pageDimensions;
          return [0, -pageWidth / pageHeight, pageHeight / pageWidth, 0];
        }
      case 180:
        return [-1, 0, 0, -1];
      case 270:
        {
          const [pageWidth, pageHeight] = this.pageDimensions;
          return [0, pageWidth / pageHeight, -pageHeight / pageWidth, 0];
        }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale,
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    return [pageWidth * parentScale, pageHeight * parentScale];
  }
  setDims(width, height) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      style
    } = this.div;
    style.width = `${(100 * width / parentWidth).toFixed(2)}%`;
    if (!this.#keepAspectRatio) {
      style.height = `${(100 * height / parentHeight).toFixed(2)}%`;
    }
  }
  fixDims() {
    const {
      style
    } = this.div;
    const {
      height,
      width
    } = style;
    const widthPercent = width.endsWith("%");
    const heightPercent = !this.#keepAspectRatio && height.endsWith("%");
    if (widthPercent && heightPercent) {
      return;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (!widthPercent) {
      style.width = `${(100 * parseFloat(width) / parentWidth).toFixed(2)}%`;
    }
    if (!this.#keepAspectRatio && !heightPercent) {
      style.height = `${(100 * parseFloat(height) / parentHeight).toFixed(2)}%`;
    }
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #createResizers() {
    if (this.#resizersDiv) {
      return;
    }
    this.#resizersDiv = document.createElement("div");
    this.#resizersDiv.classList.add("resizers");
    const classes = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
    const signal = this._uiManager._signal;
    for (const name of classes) {
      const div = document.createElement("div");
      this.#resizersDiv.append(div);
      div.classList.add("resizer", name);
      div.setAttribute("data-resizer-name", name);
      div.addEventListener("pointerdown", this.#resizerPointerdown.bind(this, name), {
        signal
      });
      div.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      div.tabIndex = -1;
    }
    this.div.prepend(this.#resizersDiv);
  }
  #resizerPointerdown(name, event) {
    event.preventDefault();
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    this.#altText?.toggle(false);
    const savedDraggable = this._isDraggable;
    this._isDraggable = false;
    this.#lastPointerCoords = [event.screenX, event.screenY];
    const ac = new AbortController();
    const signal = this._uiManager.combinedSignal(ac);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", this.#resizerPointermove.bind(this, name), {
      passive: true,
      capture: true,
      signal
    });
    window.addEventListener("touchmove", stopEvent, {
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const savedParentCursor = this.parent.div.style.cursor;
    const savedCursor = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(event.target).cursor;
    const pointerUpCallback = () => {
      ac.abort();
      this.parent.togglePointerEvents(true);
      this.#altText?.toggle(true);
      this._isDraggable = savedDraggable;
      this.parent.div.style.cursor = savedParentCursor;
      this.div.style.cursor = savedCursor;
      this.#addResizeToUndoStack();
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  #resize(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(parentWidth * width, parentHeight * height);
    this.fixAndSetPosition();
    this._onResized();
  }
  _onResized() {}
  #addResizeToUndoStack() {
    if (!this.#savedDimensions) {
      return;
    }
    const {
      savedX,
      savedY,
      savedWidth,
      savedHeight
    } = this.#savedDimensions;
    this.#savedDimensions = null;
    const newX = this.x;
    const newY = this.y;
    const newWidth = this.width;
    const newHeight = this.height;
    if (newX === savedX && newY === savedY && newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.addCommands({
      cmd: this.#resize.bind(this, newX, newY, newWidth, newHeight),
      undo: this.#resize.bind(this, savedX, savedY, savedWidth, savedHeight),
      mustExec: true
    });
  }
  static _round(x) {
    return Math.round(x * 10000) / 10000;
  }
  #resizerPointermove(name, event) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const invRotationMatrix = this.#getRotationMatrix(360 - this.rotation);
    const invTransf = (x, y) => [invRotationMatrix[0] * x + invRotationMatrix[2] * y, invRotationMatrix[1] * x + invRotationMatrix[3] * y];
    let getPoint;
    let getOpposite;
    let isDiagonal = false;
    let isHorizontal = false;
    switch (name) {
      case "topLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, 0];
        getOpposite = (w, h) => [w, h];
        break;
      case "topMiddle":
        getPoint = (w, h) => [w / 2, 0];
        getOpposite = (w, h) => [w / 2, h];
        break;
      case "topRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, 0];
        getOpposite = (w, h) => [0, h];
        break;
      case "middleRight":
        isHorizontal = true;
        getPoint = (w, h) => [w, h / 2];
        getOpposite = (w, h) => [0, h / 2];
        break;
      case "bottomRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, h];
        getOpposite = (w, h) => [0, 0];
        break;
      case "bottomMiddle":
        getPoint = (w, h) => [w / 2, h];
        getOpposite = (w, h) => [w / 2, 0];
        break;
      case "bottomLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, h];
        getOpposite = (w, h) => [w, 0];
        break;
      case "middleLeft":
        isHorizontal = true;
        getPoint = (w, h) => [0, h / 2];
        getOpposite = (w, h) => [w, h / 2];
        break;
    }
    const point = getPoint(savedWidth, savedHeight);
    const oppositePoint = getOpposite(savedWidth, savedHeight);
    let transfOppositePoint = transf(...oppositePoint);
    const oppositeX = AnnotationEditor._round(savedX + transfOppositePoint[0]);
    const oppositeY = AnnotationEditor._round(savedY + transfOppositePoint[1]);
    let ratioX = 1;
    let ratioY = 1;
    let deltaX, deltaY;
    if (!event.fromKeyboard) {
      const {
        screenX,
        screenY
      } = event;
      const [lastScreenX, lastScreenY] = this.#lastPointerCoords;
      [deltaX, deltaY] = this.screenToPageTranslation(screenX - lastScreenX, screenY - lastScreenY);
      this.#lastPointerCoords[0] = screenX;
      this.#lastPointerCoords[1] = screenY;
    } else {
      ({
        deltaX,
        deltaY
      } = event);
    }
    [deltaX, deltaY] = invTransf(deltaX / parentWidth, deltaY / parentHeight);
    if (isDiagonal) {
      const oldDiag = Math.hypot(savedWidth, savedHeight);
      ratioX = ratioY = Math.max(Math.min(Math.hypot(oppositePoint[0] - point[0] - deltaX, oppositePoint[1] - point[1] - deltaY) / oldDiag, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    } else if (isHorizontal) {
      ratioX = MathClamp(Math.abs(oppositePoint[0] - point[0] - deltaX), minWidth, 1) / savedWidth;
    } else {
      ratioY = MathClamp(Math.abs(oppositePoint[1] - point[1] - deltaY), minHeight, 1) / savedHeight;
    }
    const newWidth = AnnotationEditor._round(savedWidth * ratioX);
    const newHeight = AnnotationEditor._round(savedHeight * ratioY);
    transfOppositePoint = transf(...getOpposite(newWidth, newHeight));
    const newX = oppositeX - transfOppositePoint[0];
    const newY = oppositeY - transfOppositePoint[1];
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    this.width = newWidth;
    this.height = newHeight;
    this.x = newX;
    this.y = newY;
    this.setDims(parentWidth * newWidth, parentHeight * newHeight);
    this.fixAndSetPosition();
    this._onResizing();
  }
  _onResizing() {}
  altTextFinish() {
    this.#altText?.finish();
  }
  async addEditToolbar() {
    if (this._editToolbar || this.#isInEditMode) {
      return this._editToolbar;
    }
    this._editToolbar = new EditorToolbar(this);
    this.div.append(this._editToolbar.render());
    if (this.#altText) {
      await this._editToolbar.addAltText(this.#altText);
    }
    return this._editToolbar;
  }
  removeEditToolbar() {
    if (!this._editToolbar) {
      return;
    }
    this._editToolbar.remove();
    this._editToolbar = null;
    this.#altText?.destroy();
  }
  addContainer(container) {
    const editToolbarDiv = this._editToolbar?.div;
    if (editToolbarDiv) {
      editToolbarDiv.before(container);
    } else {
      this.div.append(container);
    }
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    if (this.#altText) {
      return;
    }
    AltText.initialize(AnnotationEditor._l10n);
    this.#altText = new AltText(this);
    if (this.#accessibilityData) {
      this.#altText.data = this.#accessibilityData;
      this.#accessibilityData = null;
    }
    await this.addEditToolbar();
  }
  get altTextData() {
    return this.#altText?.data;
  }
  set altTextData(data) {
    if (!this.#altText) {
      return;
    }
    this.#altText.data = data;
  }
  get guessedAltText() {
    return this.#altText?.guessedText;
  }
  async setGuessedAltText(text) {
    await this.#altText?.setGuessedText(text);
  }
  serializeAltText(isForCopying) {
    return this.#altText?.serialize(isForCopying);
  }
  hasAltText() {
    return !!this.#altText && !this.#altText.isEmpty();
  }
  hasAltTextData() {
    return this.#altText?.hasData() ?? false;
  }
  render() {
    const div = this.div = document.createElement("div");
    div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    div.className = this.name;
    div.setAttribute("id", this.id);
    div.tabIndex = this.#disabled ? -1 : 0;
    div.setAttribute("role", "application");
    if (this.defaultL10nId) {
      div.setAttribute("data-l10n-id", this.defaultL10nId);
    }
    if (!this._isVisible) {
      div.classList.add("hidden");
    }
    this.setInForeground();
    this.#addFocusListeners();
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (this.parentRotation % 180 !== 0) {
      div.style.maxWidth = `${(100 * parentHeight / parentWidth).toFixed(2)}%`;
      div.style.maxHeight = `${(100 * parentWidth / parentHeight).toFixed(2)}%`;
    }
    const [tx, ty] = this.getInitialTranslation();
    this.translate(tx, ty);
    bindEvents(this, div, ["keydown", "pointerdown", "dblclick"]);
    if (this.isResizable && this._uiManager._supportsPinchToZoom) {
      this.#touchManager ||= new TouchManager({
        container: div,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: this.#touchPinchStartCallback.bind(this),
        onPinching: this.#touchPinchCallback.bind(this),
        onPinchEnd: this.#touchPinchEndCallback.bind(this),
        signal: this._uiManager._signal
      });
    }
    this._uiManager._editorUndoBar?.hide();
    return div;
  }
  #touchPinchStartCallback() {
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    this.#altText?.toggle(false);
    this.parent.togglePointerEvents(false);
  }
  #touchPinchCallback(_origin, prevDistance, distance) {
    const slowDownFactor = 0.7;
    let factor = slowDownFactor * (distance / prevDistance) + 1 - slowDownFactor;
    if (factor === 1) {
      return;
    }
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    factor = Math.max(Math.min(factor, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    const newWidth = AnnotationEditor._round(savedWidth * factor);
    const newHeight = AnnotationEditor._round(savedHeight * factor);
    if (newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.#initialRect ||= [savedX, savedY, savedWidth, savedHeight];
    const transfCenterPoint = transf(savedWidth / 2, savedHeight / 2);
    const centerX = AnnotationEditor._round(savedX + transfCenterPoint[0]);
    const centerY = AnnotationEditor._round(savedY + transfCenterPoint[1]);
    const newTransfCenterPoint = transf(newWidth / 2, newHeight / 2);
    this.x = centerX - newTransfCenterPoint[0];
    this.y = centerY - newTransfCenterPoint[1];
    this.width = newWidth;
    this.height = newHeight;
    this.setDims(parentWidth * newWidth, parentHeight * newHeight);
    this.fixAndSetPosition();
    this._onResizing();
  }
  #touchPinchEndCallback() {
    this.#altText?.toggle(true);
    this.parent.togglePointerEvents(true);
    this.#addResizeToUndoStack();
  }
  pointerdown(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      event.preventDefault();
      return;
    }
    this.#hasBeenClicked = true;
    if (this._isDraggable) {
      this.#setUpDragSession(event);
      return;
    }
    this.#selectOnPointerEvent(event);
  }
  #selectOnPointerEvent(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
      this.parent.toggleSelected(this);
    } else {
      this.parent.setSelected(this);
    }
  }
  #setUpDragSession(event) {
    const {
      isSelected
    } = this;
    this._uiManager.setUpDragSession();
    let hasDraggingStarted = false;
    const ac = new AbortController();
    const signal = this._uiManager.combinedSignal(ac);
    const opts = {
      capture: true,
      passive: false,
      signal
    };
    const cancelDrag = e => {
      ac.abort();
      this.#dragPointerId = null;
      this.#hasBeenClicked = false;
      if (!this._uiManager.endDragSession()) {
        this.#selectOnPointerEvent(e);
      }
      if (hasDraggingStarted) {
        this._onStopDragging();
      }
    };
    if (isSelected) {
      this.#prevDragX = event.clientX;
      this.#prevDragY = event.clientY;
      this.#dragPointerId = event.pointerId;
      this.#dragPointerType = event.pointerType;
      window.addEventListener("pointermove", e => {
        if (!hasDraggingStarted) {
          hasDraggingStarted = true;
          this._onStartDragging();
        }
        const {
          clientX: x,
          clientY: y,
          pointerId
        } = e;
        if (pointerId !== this.#dragPointerId) {
          stopEvent(e);
          return;
        }
        const [tx, ty] = this.screenToPageTranslation(x - this.#prevDragX, y - this.#prevDragY);
        this.#prevDragX = x;
        this.#prevDragY = y;
        this._uiManager.dragSelectedEditors(tx, ty);
      }, opts);
      window.addEventListener("touchmove", stopEvent, opts);
      window.addEventListener("pointerdown", e => {
        if (e.pointerType === this.#dragPointerType) {
          if (this.#touchManager || e.isPrimary) {
            cancelDrag(e);
          }
        }
        stopEvent(e);
      }, opts);
    }
    const pointerUpCallback = e => {
      if (!this.#dragPointerId || this.#dragPointerId === e.pointerId) {
        cancelDrag(e);
        return;
      }
      stopEvent(e);
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  _onStartDragging() {}
  _onStopDragging() {}
  moveInDOM() {
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
    }
    this.#moveInDOMTimeout = setTimeout(() => {
      this.#moveInDOMTimeout = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(parent, x, y) {
    parent.changeParent(this);
    this.x = x;
    this.y = y;
    this.fixAndSetPosition();
    this._onTranslated();
  }
  getRect(tx, ty, rotation = this.rotation) {
    const scale = this.parentScale;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const shiftX = tx / scale;
    const shiftY = ty / scale;
    const x = this.x * pageWidth;
    const y = this.y * pageHeight;
    const width = this.width * pageWidth;
    const height = this.height * pageHeight;
    switch (rotation) {
      case 0:
        return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
      case 90:
        return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
      case 180:
        return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
      case 270:
        return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(rect, pageHeight) {
    const [x1, y1, x2, y2] = rect;
    const width = x2 - x1;
    const height = y2 - y1;
    switch (this.rotation) {
      case 0:
        return [x1, pageHeight - y2, width, height];
      case 90:
        return [x1, pageHeight - y1, height, width];
      case 180:
        return [x2, pageHeight - y1, width, height];
      case 270:
        return [x2, pageHeight - y2, height, width];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded(focus) {}
  isEmpty() {
    return false;
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(false);
    this.#isInEditMode = true;
    return true;
  }
  disableEditMode() {
    if (!this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(true);
    this.#isInEditMode = false;
    return true;
  }
  isInEditMode() {
    return this.#isInEditMode;
  }
  shouldGetKeyboardEvents() {
    return this.#isResizerEnabledForKeyboard;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top,
      left,
      bottom,
      right
    } = this.getClientDimensions();
    const {
      innerHeight,
      innerWidth
    } = window;
    return left < innerWidth && right > 0 && top < innerHeight && bottom > 0;
  }
  #addFocusListeners() {
    if (this.#focusAC || !this.div) {
      return;
    }
    this.#focusAC = new AbortController();
    const signal = this._uiManager.combinedSignal(this.#focusAC);
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal
    });
    this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal
    });
  }
  rebuild() {
    this.#addFocusListeners();
  }
  rotate(_angle) {}
  resize() {}
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  serialize(isForCopying = false, context = null) {
    unreachable("An editor must be serializable");
  }
  static async deserialize(data, parent, uiManager) {
    const editor = new this.prototype.constructor({
      parent,
      id: parent.getNextId(),
      uiManager
    });
    editor.rotation = data.rotation;
    editor.#accessibilityData = data.accessibilityData;
    editor._isCopy = data.isCopy || false;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
    editor.x = x / pageWidth;
    editor.y = y / pageHeight;
    editor.width = width / pageWidth;
    editor.height = height / pageHeight;
    return editor;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    this.#focusAC?.abort();
    this.#focusAC = null;
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
      this.#moveInDOMTimeout = null;
    }
    this.#stopResizing();
    this.removeEditToolbar();
    if (this.#telemetryTimeouts) {
      for (const timeout of this.#telemetryTimeouts.values()) {
        clearTimeout(timeout);
      }
      this.#telemetryTimeouts = null;
    }
    this.parent = null;
    this.#touchManager?.destroy();
    this.#touchManager = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#createResizers();
      this.#resizersDiv.classList.remove("hidden");
    }
  }
  get toolbarPosition() {
    return null;
  }
  keydown(event) {
    if (!this.isResizable || event.target !== this.div || event.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const children = this.#resizersDiv.children;
    if (!this.#allResizerDivs) {
      this.#allResizerDivs = Array.from(children);
      const boundResizerKeydown = this.#resizerKeydown.bind(this);
      const boundResizerBlur = this.#resizerBlur.bind(this);
      const signal = this._uiManager._signal;
      for (const div of this.#allResizerDivs) {
        const name = div.getAttribute("data-resizer-name");
        div.setAttribute("role", "spinbutton");
        div.addEventListener("keydown", boundResizerKeydown, {
          signal
        });
        div.addEventListener("blur", boundResizerBlur, {
          signal
        });
        div.addEventListener("focus", this.#resizerFocus.bind(this, name), {
          signal
        });
        div.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[name]);
      }
    }
    const first = this.#allResizerDivs[0];
    let firstPosition = 0;
    for (const div of children) {
      if (div === first) {
        break;
      }
      firstPosition++;
    }
    const nextFirstPosition = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#allResizerDivs.length / 4);
    if (nextFirstPosition !== firstPosition) {
      if (nextFirstPosition < firstPosition) {
        for (let i = 0; i < firstPosition - nextFirstPosition; i++) {
          this.#resizersDiv.append(this.#resizersDiv.firstChild);
        }
      } else if (nextFirstPosition > firstPosition) {
        for (let i = 0; i < nextFirstPosition - firstPosition; i++) {
          this.#resizersDiv.firstChild.before(this.#resizersDiv.lastChild);
        }
      }
      let i = 0;
      for (const child of children) {
        const div = this.#allResizerDivs[i++];
        const name = div.getAttribute("data-resizer-name");
        child.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[name]);
      }
    }
    this.#setResizerTabIndex(0);
    this.#isResizerEnabledForKeyboard = true;
    this.#resizersDiv.firstChild.focus({
      focusVisible: true
    });
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  #resizerKeydown(event) {
    AnnotationEditor._resizerKeyboardManager.exec(this, event);
  }
  #resizerBlur(event) {
    if (this.#isResizerEnabledForKeyboard && event.relatedTarget?.parentNode !== this.#resizersDiv) {
      this.#stopResizing();
    }
  }
  #resizerFocus(name) {
    this.#focusedResizerName = this.#isResizerEnabledForKeyboard ? name : "";
  }
  #setResizerTabIndex(value) {
    if (!this.#allResizerDivs) {
      return;
    }
    for (const div of this.#allResizerDivs) {
      div.tabIndex = value;
    }
  }
  _resizeWithKeyboard(x, y) {
    if (!this.#isResizerEnabledForKeyboard) {
      return;
    }
    this.#resizerPointermove(this.#focusedResizerName, {
      deltaX: x,
      deltaY: y,
      fromKeyboard: true
    });
  }
  #stopResizing() {
    this.#isResizerEnabledForKeyboard = false;
    this.#setResizerTabIndex(-1);
    this.#addResizeToUndoStack();
  }
  _stopResizingWithKeyboard() {
    this.#stopResizing();
    this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) {
      return;
    }
    this.isSelected = true;
    this.makeResizable();
    this.div?.classList.add("selectedEditor");
    if (!this._editToolbar) {
      this.addEditToolbar().then(() => {
        if (this.div?.classList.contains("selectedEditor")) {
          this._editToolbar?.show();
        }
      });
      return;
    }
    this._editToolbar?.show();
    this.#altText?.toggleAltTextBadge(false);
  }
  unselect() {
    if (!this.isSelected) {
      return;
    }
    this.isSelected = false;
    this.#resizersDiv?.classList.add("hidden");
    this.div?.classList.remove("selectedEditor");
    if (this.div?.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus({
        preventScroll: true
      });
    }
    this._editToolbar?.hide();
    this.#altText?.toggleAltTextBadge(true);
  }
  updateParams(type, value) {}
  disableEditing() {}
  enableEditing() {}
  get canChangeContent() {
    return false;
  }
  enterInEditMode() {
    if (!this.canChangeContent) {
      return;
    }
    this.enableEditMode();
    this.div.focus();
  }
  dblclick(event) {
    this.enterInEditMode();
    this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id
    });
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#isEditing;
  }
  set isEditing(value) {
    this.#isEditing = value;
    if (!this.parent) {
      return;
    }
    if (value) {
      this.parent.setSelected(this);
      this.parent.setActiveEditor(this);
    } else {
      this.parent.setActiveEditor(null);
    }
  }
  setAspectRatio(width, height) {
    this.#keepAspectRatio = true;
    const aspectRatio = width / height;
    const {
      style
    } = this.div;
    style.aspectRatio = aspectRatio;
    style.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(data, mustWait = false) {
    if (mustWait) {
      this.#telemetryTimeouts ||= new Map();
      const {
        action
      } = data;
      let timeout = this.#telemetryTimeouts.get(action);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this._reportTelemetry(data);
        this.#telemetryTimeouts.delete(action);
        if (this.#telemetryTimeouts.size === 0) {
          this.#telemetryTimeouts = null;
        }
      }, AnnotationEditor._telemetryTimeout);
      this.#telemetryTimeouts.set(action, timeout);
      return;
    }
    data.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data
      }
    });
  }
  show(visible = this._isVisible) {
    this.div.classList.toggle("hidden", !visible);
    this._isVisible = visible;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    this.#disabled = false;
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    this.#disabled = true;
  }
  renderAnnotationElement(annotation) {
    let content = annotation.container.querySelector(".annotationContent");
    if (!content) {
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      annotation.container.prepend(content);
    } else if (content.nodeName === "CANVAS") {
      const canvas = content;
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      canvas.before(content);
    }
    return content;
  }
  resetAnnotationElement(annotation) {
    const {
      firstChild
    } = annotation.container;
    if (firstChild?.nodeName === "DIV" && firstChild.classList.contains("annotationContent")) {
      firstChild.remove();
    }
  }
}
class FakeEditor extends AnnotationEditor {
  constructor(params) {
    super(params);
    this.annotationElementId = params.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const SEED = 0xc3d2e1f0;
const MASK_HIGH = 0xffff0000;
const MASK_LOW = 0xffff;
class MurmurHash3_64 {
  constructor(seed) {
    this.h1 = seed ? seed & 0xffffffff : SEED;
    this.h2 = seed ? seed & 0xffffffff : SEED;
  }
  update(input) {
    let data, length;
    if (typeof input === "string") {
      data = new Uint8Array(input.length * 2);
      length = 0;
      for (let i = 0, ii = input.length; i < ii; i++) {
        const code = input.charCodeAt(i);
        if (code <= 0xff) {
          data[length++] = code;
        } else {
          data[length++] = code >>> 8;
          data[length++] = code & 0xff;
        }
      }
    } else if (ArrayBuffer.isView(input)) {
      data = input.slice();
      length = data.byteLength;
    } else {
      throw new Error("Invalid data format, must be a string or TypedArray.");
    }
    const blockCounts = length >> 2;
    const tailLength = length - blockCounts * 4;
    const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
    let k1 = 0,
      k2 = 0;
    let h1 = this.h1,
      h2 = this.h2;
    const C1 = 0xcc9e2d51,
      C2 = 0x1b873593;
    const C1_LOW = C1 & MASK_LOW,
      C2_LOW = C2 & MASK_LOW;
    for (let i = 0; i < blockCounts; i++) {
      if (i & 1) {
        k1 = dataUint32[i];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = h1 * 5 + 0xe6546b64;
      } else {
        k2 = dataUint32[i];
        k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
        k2 = k2 << 15 | k2 >>> 17;
        k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
        h2 ^= k2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = h2 * 5 + 0xe6546b64;
      }
    }
    k1 = 0;
    switch (tailLength) {
      case 3:
        k1 ^= data[blockCounts * 4 + 2] << 16;
      case 2:
        k1 ^= data[blockCounts * 4 + 1] << 8;
      case 1:
        k1 ^= data[blockCounts * 4];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        if (blockCounts & 1) {
          h1 ^= k1;
        } else {
          h2 ^= k1;
        }
    }
    this.h1 = h1;
    this.h2 = h2;
  }
  hexdigest() {
    let h1 = this.h1,
      h2 = this.h2;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0xed558ccd & MASK_HIGH | h1 * 0x8ccd & MASK_LOW;
    h2 = h2 * 0xff51afd7 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xafd7ed55 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0x1a85ec53 & MASK_HIGH | h1 * 0xec53 & MASK_LOW;
    h2 = h2 * 0xc4ceb9fe & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xb9fe1a85 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  }
}



const SerializableEmpty = Object.freeze({
  map: null,
  hash: "",
  transfer: undefined
});
class AnnotationStorage {
  #modified = false;
  #modifiedIds = null;
  #storage = new Map();
  constructor() {
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(key, defaultValue) {
    const value = this.#storage.get(key);
    if (value === undefined) {
      return defaultValue;
    }
    return Object.assign(defaultValue, value);
  }
  getRawValue(key) {
    return this.#storage.get(key);
  }
  remove(key) {
    this.#storage.delete(key);
    if (this.#storage.size === 0) {
      this.resetModified();
    }
    if (typeof this.onAnnotationEditor === "function") {
      for (const value of this.#storage.values()) {
        if (value instanceof AnnotationEditor) {
          return;
        }
      }
      this.onAnnotationEditor(null);
    }
  }
  setValue(key, value) {
    const obj = this.#storage.get(key);
    let modified = false;
    if (obj !== undefined) {
      for (const [entry, val] of Object.entries(value)) {
        if (obj[entry] !== val) {
          modified = true;
          obj[entry] = val;
        }
      }
    } else {
      modified = true;
      this.#storage.set(key, value);
    }
    if (modified) {
      this.#setModified();
    }
    if (value instanceof AnnotationEditor && typeof this.onAnnotationEditor === "function") {
      this.onAnnotationEditor(value.constructor._type);
    }
  }
  has(key) {
    return this.#storage.has(key);
  }
  get size() {
    return this.#storage.size;
  }
  #setModified() {
    if (!this.#modified) {
      this.#modified = true;
      if (typeof this.onSetModified === "function") {
        this.onSetModified();
      }
    }
  }
  resetModified() {
    if (this.#modified) {
      this.#modified = false;
      if (typeof this.onResetModified === "function") {
        this.onResetModified();
      }
    }
  }
  get print() {
    return new PrintAnnotationStorage(this);
  }
  get serializable() {
    if (this.#storage.size === 0) {
      return SerializableEmpty;
    }
    const map = new Map(),
      hash = new MurmurHash3_64(),
      transfer = [];
    const context = Object.create(null);
    let hasBitmap = false;
    for (const [key, val] of this.#storage) {
      const serialized = val instanceof AnnotationEditor ? val.serialize(false, context) : val;
      if (serialized) {
        map.set(key, serialized);
        hash.update(`${key}:${JSON.stringify(serialized)}`);
        hasBitmap ||= !!serialized.bitmap;
      }
    }
    if (hasBitmap) {
      for (const value of map.values()) {
        if (value.bitmap) {
          transfer.push(value.bitmap);
        }
      }
    }
    return map.size > 0 ? {
      map,
      hash: hash.hexdigest(),
      transfer
    } : SerializableEmpty;
  }
  get editorStats() {
    let stats = null;
    const typeToEditor = new Map();
    for (const value of this.#storage.values()) {
      if (!(value instanceof AnnotationEditor)) {
        continue;
      }
      const editorStats = value.telemetryFinalData;
      if (!editorStats) {
        continue;
      }
      const {
        type
      } = editorStats;
      if (!typeToEditor.has(type)) {
        typeToEditor.set(type, Object.getPrototypeOf(value).constructor);
      }
      stats ||= Object.create(null);
      const map = stats[type] ||= new Map();
      for (const [key, val] of Object.entries(editorStats)) {
        if (key === "type") {
          continue;
        }
        let counters = map.get(key);
        if (!counters) {
          counters = new Map();
          map.set(key, counters);
        }
        const count = counters.get(val) ?? 0;
        counters.set(val, count + 1);
      }
    }
    for (const [type, editor] of typeToEditor) {
      stats[type] = editor.computeTelemetryFinalData(stats[type]);
    }
    return stats;
  }
  resetModifiedIds() {
    this.#modifiedIds = null;
  }
  get modifiedIds() {
    if (this.#modifiedIds) {
      return this.#modifiedIds;
    }
    const ids = [];
    for (const value of this.#storage.values()) {
      if (!(value instanceof AnnotationEditor) || !value.annotationElementId || !value.serialize()) {
        continue;
      }
      ids.push(value.annotationElementId);
    }
    return this.#modifiedIds = {
      ids: new Set(ids),
      hash: ids.join(",")
    };
  }
  [Symbol.iterator]() {
    return this.#storage.entries();
  }
}
class PrintAnnotationStorage extends AnnotationStorage {
  #serializable;
  constructor(parent) {
    super();
    const {
      map,
      hash,
      transfer
    } = parent.serializable;
    const clone = structuredClone(map, transfer ? {
      transfer
    } : null);
    this.#serializable = {
      map: clone,
      hash,
      transfer
    };
  }
  get print() {
    unreachable("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#serializable;
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", {
      ids: new Set(),
      hash: ""
    });
  }
}

class FontLoader {
  #systemFonts = new Set();
  constructor({
    ownerDocument = globalThis.document,
    styleElement = null
  }) {
    this._document = ownerDocument;
    this.nativeFontFaces = new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.add(nativeFontFace);
    this._document.fonts.add(nativeFontFace);
  }
  removeNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.delete(nativeFontFace);
    this._document.fonts.delete(nativeFontFace);
  }
  insertRule(rule) {
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    const styleSheet = this.styleElement.sheet;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
  clear() {
    for (const nativeFontFace of this.nativeFontFaces) {
      this._document.fonts.delete(nativeFontFace);
    }
    this.nativeFontFaces.clear();
    this.#systemFonts.clear();
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({
    systemFontInfo: info,
    disableFontFace,
    _inspectFont
  }) {
    if (!info || this.#systemFonts.has(info.loadedName)) {
      return;
    }
    assert(!disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
    if (this.isFontLoadingAPISupported) {
      const {
        loadedName,
        src,
        style
      } = info;
      const fontFace = new FontFace(loadedName, src, style);
      this.addNativeFontFace(fontFace);
      try {
        await fontFace.load();
        this.#systemFonts.add(loadedName);
        _inspectFont?.(info);
      } catch {
        warn(`Cannot load system font: ${info.baseFontName}, installing it could help to improve PDF rendering.`);
        this.removeNativeFontFace(fontFace);
      }
      return;
    }
    unreachable("Not implemented: loadSystemFont without the Font Loading API.");
  }
  async bind(font) {
    if (font.attached || font.missingFile && !font.systemFontInfo) {
      return;
    }
    font.attached = true;
    if (font.systemFontInfo) {
      await this.loadSystemFont(font);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const nativeFontFace = font.createNativeFontFace();
      if (nativeFontFace) {
        this.addNativeFontFace(nativeFontFace);
        try {
          await nativeFontFace.loaded;
        } catch (ex) {
          warn(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
          font.disableFontFace = true;
          throw ex;
        }
      }
      return;
    }
    const rule = font.createFontFaceRule();
    if (rule) {
      this.insertRule(rule);
      if (this.isSyncFontLoadingSupported) {
        return;
      }
      await new Promise(resolve => {
        const request = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(font, request);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const hasFonts = !!this._document?.fonts;
    return shadow(this, "isFontLoadingAPISupported", hasFonts);
  }
  get isSyncFontLoadingSupported() {
    return shadow(this, "isSyncFontLoadingSupported", isNodeJS || util_FeatureTest.platform.isFirefox);
  }
  _queueLoadingCallback(callback) {
    function completeRequest() {
      assert(!request.done, "completeRequest() cannot be called twice.");
      request.done = true;
      while (loadingRequests.length > 0 && loadingRequests[0].done) {
        const otherRequest = loadingRequests.shift();
        setTimeout(otherRequest.callback, 0);
      }
    }
    const {
      loadingRequests
    } = this;
    const request = {
      done: false,
      complete: completeRequest,
      callback
    };
    loadingRequests.push(request);
    return request;
  }
  get _loadTestFont() {
    const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return shadow(this, "_loadTestFont", testFont);
  }
  _prepareFontLoadEvent(font, request) {
    function int32(data, offset) {
      return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
    }
    function spliceString(s, offset, remove, insert) {
      const chunk1 = s.substring(0, offset);
      const chunk2 = s.substring(offset + remove);
      return chunk1 + insert + chunk2;
    }
    let i, ii;
    const canvas = this._document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    let called = 0;
    function isFontReady(name, callback) {
      if (++called > 30) {
        warn("Load test font never loaded.");
        callback();
        return;
      }
      ctx.font = "30px " + name;
      ctx.fillText(".", 0, 20);
      const imageData = ctx.getImageData(0, 0, 1, 1);
      if (imageData.data[3] > 0) {
        callback();
        return;
      }
      setTimeout(isFontReady.bind(null, name, callback));
    }
    const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
    let data = this._loadTestFont;
    const COMMENT_OFFSET = 976;
    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    const CFF_CHECKSUM_OFFSET = 16;
    const XXXX_VALUE = 0x58585858;
    let checksum = int32(data, CFF_CHECKSUM_OFFSET);
    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    if (i < loadTestFontId.length) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
    }
    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
    const url = `url(data:font/opentype;base64,${btoa(data)});`;
    const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
    this.insertRule(rule);
    const div = this._document.createElement("div");
    div.style.visibility = "hidden";
    div.style.width = div.style.height = "10px";
    div.style.position = "absolute";
    div.style.top = div.style.left = "0px";
    for (const name of [font.loadedName, loadTestFontId]) {
      const span = this._document.createElement("span");
      span.textContent = "Hi";
      span.style.fontFamily = name;
      div.append(span);
    }
    this._document.body.append(div);
    isFontReady(loadTestFontId, () => {
      div.remove();
      request.complete();
    });
  }
}
class FontFaceObject {
  constructor(translatedData, inspectFont = null) {
    this.compiledGlyphs = Object.create(null);
    for (const i in translatedData) {
      this[i] = translatedData[i];
    }
    this._inspectFont = inspectFont;
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    let nativeFontFace;
    if (!this.cssFontInfo) {
      nativeFontFace = new FontFace(this.loadedName, this.data, {});
    } else {
      const css = {
        weight: this.cssFontInfo.fontWeight
      };
      if (this.cssFontInfo.italicAngle) {
        css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
      }
      nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
    }
    this._inspectFont?.(this);
    return nativeFontFace;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const url = `url(data:${this.mimetype};base64,${toBase64Util(this.data)});`;
    let rule;
    if (!this.cssFontInfo) {
      rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
    } else {
      let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
      if (this.cssFontInfo.italicAngle) {
        css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
    }
    this._inspectFont?.(this, url);
    return rule;
  }
  getPathGenerator(objs, character) {
    if (this.compiledGlyphs[character] !== undefined) {
      return this.compiledGlyphs[character];
    }
    const objId = this.loadedName + "_path_" + character;
    let cmds;
    try {
      cmds = objs.get(objId);
    } catch (ex) {
      warn(`getPathGenerator - ignoring character: "${ex}".`);
    }
    const path = new Path2D(cmds || "");
    if (!this.fontExtraProperties) {
      objs.delete(objId);
    }
    return this.compiledGlyphs[character] = path;
  }
}

function getUrlProp(val) {
  if (val instanceof URL) {
    return val.href;
  }
  if (typeof val === "string") {
    if (isNodeJS) {
      return val;
    }
    const url = URL.parse(val, window.location);
    if (url) {
      return url.href;
    }
  }
  throw new Error("Invalid PDF url data: " + "either string or URL-object is expected in the url property.");
}
function getDataProp(val) {
  if (isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  }
  if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
    return val;
  }
  if (typeof val === "string") {
    return stringToBytes(val);
  }
  if (val instanceof ArrayBuffer || ArrayBuffer.isView(val) || typeof val === "object" && !isNaN(val?.length)) {
    return new Uint8Array(val);
  }
  throw new Error("Invalid PDF binary data: either TypedArray, " + "string, or array-like object is expected in the data property.");
}
function getFactoryUrlProp(val) {
  if (typeof val !== "string") {
    return null;
  }
  if (val.endsWith("/")) {
    return val;
  }
  throw new Error(`Invalid factory url: "${val}" must include trailing slash.`);
}
const isRefProxy = v => typeof v === "object" && Number.isInteger(v?.num) && v.num >= 0 && Number.isInteger(v?.gen) && v.gen >= 0;
const isNameProxy = v => typeof v === "object" && typeof v?.name === "string";
const isValidExplicitDest = _isValidExplicitDest.bind(null, isRefProxy, isNameProxy);
class LoopbackPort {
  #listeners = new Map();
  #deferred = Promise.resolve();
  postMessage(obj, transfer) {
    const event = {
      data: structuredClone(obj, transfer ? {
        transfer
      } : null)
    };
    this.#deferred.then(() => {
      for (const [listener] of this.#listeners) {
        listener.call(this, event);
      }
    });
  }
  addEventListener(name, listener, options = null) {
    let rmAbort = null;
    if (options?.signal instanceof AbortSignal) {
      const {
        signal
      } = options;
      if (signal.aborted) {
        warn("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const onAbort = () => this.removeEventListener(name, listener);
      rmAbort = () => signal.removeEventListener("abort", onAbort);
      signal.addEventListener("abort", onAbort);
    }
    this.#listeners.set(listener, rmAbort);
  }
  removeEventListener(name, listener) {
    const rmAbort = this.#listeners.get(listener);
    rmAbort?.();
    this.#listeners.delete(listener);
  }
  terminate() {
    for (const [, rmAbort] of this.#listeners) {
      rmAbort?.();
    }
    this.#listeners.clear();
  }
}

const CallbackKind = {
  DATA: 1,
  ERROR: 2
};
const StreamKind = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function onFn() {}
function wrapReason(ex) {
  if (ex instanceof AbortException || ex instanceof InvalidPDFException || ex instanceof PasswordException || ex instanceof ResponseException || ex instanceof UnknownErrorException) {
    return ex;
  }
  if (!(ex instanceof Error || typeof ex === "object" && ex !== null)) {
    unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  }
  switch (ex.name) {
    case "AbortException":
      return new AbortException(ex.message);
    case "InvalidPDFException":
      return new InvalidPDFException(ex.message);
    case "PasswordException":
      return new PasswordException(ex.message, ex.code);
    case "ResponseException":
      return new ResponseException(ex.message, ex.status, ex.missing);
    case "UnknownErrorException":
      return new UnknownErrorException(ex.message, ex.details);
  }
  return new UnknownErrorException(ex.message, ex.toString());
}
class MessageHandler {
  #messageAC = new AbortController();
  constructor(sourceName, targetName, comObj) {
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = Object.create(null);
    this.streamControllers = Object.create(null);
    this.callbackCapabilities = Object.create(null);
    this.actionHandler = Object.create(null);
    comObj.addEventListener("message", this.#onMessage.bind(this), {
      signal: this.#messageAC.signal
    });
  }
  #onMessage({
    data
  }) {
    if (data.targetName !== this.sourceName) {
      return;
    }
    if (data.stream) {
      this.#processStreamMessage(data);
      return;
    }
    if (data.callback) {
      const callbackId = data.callbackId;
      const capability = this.callbackCapabilities[callbackId];
      if (!capability) {
        throw new Error(`Cannot resolve callback ${callbackId}`);
      }
      delete this.callbackCapabilities[callbackId];
      if (data.callback === CallbackKind.DATA) {
        capability.resolve(data.data);
      } else if (data.callback === CallbackKind.ERROR) {
        capability.reject(wrapReason(data.reason));
      } else {
        throw new Error("Unexpected callback case");
      }
      return;
    }
    const action = this.actionHandler[data.action];
    if (!action) {
      throw new Error(`Unknown action from worker: ${data.action}`);
    }
    if (data.callbackId) {
      const sourceName = this.sourceName,
        targetName = data.sourceName,
        comObj = this.comObj;
      Promise.try(action, data.data).then(function (result) {
        comObj.postMessage({
          sourceName,
          targetName,
          callback: CallbackKind.DATA,
          callbackId: data.callbackId,
          data: result
        });
      }, function (reason) {
        comObj.postMessage({
          sourceName,
          targetName,
          callback: CallbackKind.ERROR,
          callbackId: data.callbackId,
          reason: wrapReason(reason)
        });
      });
      return;
    }
    if (data.streamId) {
      this.#createStreamSink(data);
      return;
    }
    action(data.data);
  }
  on(actionName, handler) {
    const ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error(`There is already an actionName called "${actionName}"`);
    }
    ah[actionName] = handler;
  }
  send(actionName, data, transfers) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data
    }, transfers);
  }
  sendWithPromise(actionName, data, transfers) {
    const callbackId = this.callbackId++;
    const capability = Promise.withResolvers();
    this.callbackCapabilities[callbackId] = capability;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: actionName,
        callbackId,
        data
      }, transfers);
    } catch (ex) {
      capability.reject(ex);
    }
    return capability.promise;
  }
  sendWithStream(actionName, data, queueingStrategy, transfers) {
    const streamId = this.streamId++,
      sourceName = this.sourceName,
      targetName = this.targetName,
      comObj = this.comObj;
    return new ReadableStream({
      start: controller => {
        const startCapability = Promise.withResolvers();
        this.streamControllers[streamId] = {
          controller,
          startCall: startCapability,
          pullCall: null,
          cancelCall: null,
          isClosed: false
        };
        comObj.postMessage({
          sourceName,
          targetName,
          action: actionName,
          streamId,
          data,
          desiredSize: controller.desiredSize
        }, transfers);
        return startCapability.promise;
      },
      pull: controller => {
        const pullCapability = Promise.withResolvers();
        this.streamControllers[streamId].pullCall = pullCapability;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL,
          streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: reason => {
        assert(reason instanceof Error, "cancel must have a valid reason");
        const cancelCapability = Promise.withResolvers();
        this.streamControllers[streamId].cancelCall = cancelCapability;
        this.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CANCEL,
          streamId,
          reason: wrapReason(reason)
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  }
  #createStreamSink(data) {
    const streamId = data.streamId,
      sourceName = this.sourceName,
      targetName = data.sourceName,
      comObj = this.comObj;
    const self = this,
      action = this.actionHandler[data.action];
    const streamSink = {
      enqueue(chunk, size = 1, transfers) {
        if (this.isCancelled) {
          return;
        }
        const lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;
        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = Promise.withResolvers();
          this.ready = this.sinkCapability.promise;
        }
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.ENQUEUE,
          streamId,
          chunk
        }, transfers);
      },
      close() {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CLOSE,
          streamId
        });
        delete self.streamSinks[streamId];
      },
      error(reason) {
        assert(reason instanceof Error, "error must have a valid reason");
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.ERROR,
          streamId,
          reason: wrapReason(reason)
        });
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: data.desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    Promise.try(action, data.data, streamSink).then(function () {
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.START_COMPLETE,
        streamId,
        success: true
      });
    }, function (reason) {
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.START_COMPLETE,
        streamId,
        reason: wrapReason(reason)
      });
    });
  }
  #processStreamMessage(data) {
    const streamId = data.streamId,
      sourceName = this.sourceName,
      targetName = data.sourceName,
      comObj = this.comObj;
    const streamController = this.streamControllers[streamId],
      streamSink = this.streamSinks[streamId];
    switch (data.stream) {
      case StreamKind.START_COMPLETE:
        if (data.success) {
          streamController.startCall.resolve();
        } else {
          streamController.startCall.reject(wrapReason(data.reason));
        }
        break;
      case StreamKind.PULL_COMPLETE:
        if (data.success) {
          streamController.pullCall.resolve();
        } else {
          streamController.pullCall.reject(wrapReason(data.reason));
        }
        break;
      case StreamKind.PULL:
        if (!streamSink) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            success: true
          });
          break;
        }
        if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
          streamSink.sinkCapability.resolve();
        }
        streamSink.desiredSize = data.desiredSize;
        Promise.try(streamSink.onPull || onFn).then(function () {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            reason: wrapReason(reason)
          });
        });
        break;
      case StreamKind.ENQUEUE:
        assert(streamController, "enqueue should have stream controller");
        if (streamController.isClosed) {
          break;
        }
        streamController.controller.enqueue(data.chunk);
        break;
      case StreamKind.CLOSE:
        assert(streamController, "close should have stream controller");
        if (streamController.isClosed) {
          break;
        }
        streamController.isClosed = true;
        streamController.controller.close();
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.ERROR:
        assert(streamController, "error should have stream controller");
        streamController.controller.error(wrapReason(data.reason));
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.CANCEL_COMPLETE:
        if (data.success) {
          streamController.cancelCall.resolve();
        } else {
          streamController.cancelCall.reject(wrapReason(data.reason));
        }
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.CANCEL:
        if (!streamSink) {
          break;
        }
        const dataReason = wrapReason(data.reason);
        Promise.try(streamSink.onCancel || onFn, dataReason).then(function () {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId,
            reason: wrapReason(reason)
          });
        });
        streamSink.sinkCapability.reject(dataReason);
        streamSink.isCancelled = true;
        delete this.streamSinks[streamId];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #deleteStreamController(streamController, streamId) {
    await Promise.allSettled([streamController.startCall?.promise, streamController.pullCall?.promise, streamController.cancelCall?.promise]);
    delete this.streamControllers[streamId];
  }
  destroy() {
    this.#messageAC?.abort();
    this.#messageAC = null;
  }
}

class BaseCanvasFactory {
  #enableHWA = false;
  constructor({
    enableHWA = false
  }) {
    this.#enableHWA = enableHWA;
  }
  create(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    const canvas = this._createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext("2d", {
        willReadFrequently: !this.#enableHWA
      })
    };
  }
  reset(canvasAndContext, width, height) {
    if (!canvasAndContext.canvas) {
      throw new Error("Canvas is not specified");
    }
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    if (!canvasAndContext.canvas) {
      throw new Error("Canvas is not specified");
    }
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
  _createCanvas(width, height) {
    unreachable("Abstract method `_createCanvas` called.");
  }
}
class DOMCanvasFactory extends BaseCanvasFactory {
  constructor({
    ownerDocument = globalThis.document,
    enableHWA = false
  }) {
    super({
      enableHWA
    });
    this._document = ownerDocument;
  }
  _createCanvas(width, height) {
    const canvas = this._document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
}


class BaseCMapReaderFactory {
  constructor({
    baseUrl = null,
    isCompressed = true
  }) {
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  async fetch({
    name
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    }
    if (!name) {
      throw new Error("CMap name must be specified.");
    }
    const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(url).then(cMapData => ({
      cMapData,
      isCompressed: this.isCompressed
    })).catch(reason => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
    });
  }
  async _fetch(url) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMCMapReaderFactory extends BaseCMapReaderFactory {
  async _fetch(url) {
    const data = await fetchData(url, this.isCompressed ? "arraybuffer" : "text");
    return data instanceof ArrayBuffer ? new Uint8Array(data) : stringToBytes(data);
  }
}


class BaseFilterFactory {
  addFilter(maps) {
    return "none";
  }
  addHCMFilter(fgColor, bgColor) {
    return "none";
  }
  addAlphaFilter(map) {
    return "none";
  }
  addLuminosityFilter(map) {
    return "none";
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    return "none";
  }
  destroy(keepHCM = false) {}
}
class DOMFilterFactory extends BaseFilterFactory {
  #baseUrl;
  #_cache;
  #_defs;
  #docId;
  #document;
  #_hcmCache;
  #id = 0;
  constructor({
    docId,
    ownerDocument = globalThis.document
  }) {
    super();
    this.#docId = docId;
    this.#document = ownerDocument;
  }
  get #cache() {
    return this.#_cache ||= new Map();
  }
  get #hcmCache() {
    return this.#_hcmCache ||= new Map();
  }
  get #defs() {
    if (!this.#_defs) {
      const div = this.#document.createElement("div");
      const {
        style
      } = div;
      style.visibility = "hidden";
      style.contain = "strict";
      style.width = style.height = 0;
      style.position = "absolute";
      style.top = style.left = 0;
      style.zIndex = -1;
      const svg = this.#document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("width", 0);
      svg.setAttribute("height", 0);
      this.#_defs = this.#document.createElementNS(SVG_NS, "defs");
      div.append(svg);
      svg.append(this.#_defs);
      this.#document.body.append(div);
    }
    return this.#_defs;
  }
  #createTables(maps) {
    if (maps.length === 1) {
      const mapR = maps[0];
      const buffer = new Array(256);
      for (let i = 0; i < 256; i++) {
        buffer[i] = mapR[i] / 255;
      }
      const table = buffer.join(",");
      return [table, table, table];
    }
    const [mapR, mapG, mapB] = maps;
    const bufferR = new Array(256);
    const bufferG = new Array(256);
    const bufferB = new Array(256);
    for (let i = 0; i < 256; i++) {
      bufferR[i] = mapR[i] / 255;
      bufferG[i] = mapG[i] / 255;
      bufferB[i] = mapB[i] / 255;
    }
    return [bufferR.join(","), bufferG.join(","), bufferB.join(",")];
  }
  #createUrl(id) {
    if (this.#baseUrl === undefined) {
      this.#baseUrl = "";
      const url = this.#document.URL;
      if (url !== this.#document.baseURI) {
        if (isDataScheme(url)) {
          warn('#createUrl: ignore "data:"-URL for performance reasons.');
        } else {
          this.#baseUrl = updateUrlHash(url, "");
        }
      }
    }
    return `url(${this.#baseUrl}#${id})`;
  }
  addFilter(maps) {
    if (!maps) {
      return "none";
    }
    let value = this.#cache.get(maps);
    if (value) {
      return value;
    }
    const [tableR, tableG, tableB] = this.#createTables(maps);
    const key = maps.length === 1 ? tableR : `${tableR}${tableG}${tableB}`;
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(maps, value);
      return value;
    }
    const id = `g_${this.#docId}_transfer_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(maps, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addTransferMapConversion(tableR, tableG, tableB, filter);
    return url;
  }
  addHCMFilter(fgColor, bgColor) {
    const key = `${fgColor}-${bgColor}`;
    const filterName = "base";
    let info = this.#hcmCache.get(filterName);
    if (info?.key === key) {
      return info.url;
    }
    if (info) {
      info.filter?.remove();
      info.key = key;
      info.url = "none";
      info.filter = null;
    } else {
      info = {
        key,
        url: "none",
        filter: null
      };
      this.#hcmCache.set(filterName, info);
    }
    if (!fgColor || !bgColor) {
      return info.url;
    }
    const fgRGB = this.#getRGB(fgColor);
    fgColor = Util.makeHexColor(...fgRGB);
    const bgRGB = this.#getRGB(bgColor);
    bgColor = Util.makeHexColor(...bgRGB);
    this.#defs.style.color = "";
    if (fgColor === "#000000" && bgColor === "#ffffff" || fgColor === bgColor) {
      return info.url;
    }
    const map = new Array(256);
    for (let i = 0; i <= 255; i++) {
      const x = i / 255;
      map[i] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    const table = map.join(",");
    const id = `g_${this.#docId}_hcm_filter`;
    const filter = info.filter = this.#createFilter(id);
    this.#addTransferMapConversion(table, table, table, filter);
    this.#addGrayConversion(filter);
    const getSteps = (c, n) => {
      const start = fgRGB[c] / 255;
      const end = bgRGB[c] / 255;
      const arr = new Array(n + 1);
      for (let i = 0; i <= n; i++) {
        arr[i] = start + i / n * (end - start);
      }
      return arr.join(",");
    };
    this.#addTransferMapConversion(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), filter);
    info.url = this.#createUrl(id);
    return info.url;
  }
  addAlphaFilter(map) {
    let value = this.#cache.get(map);
    if (value) {
      return value;
    }
    const [tableA] = this.#createTables([map]);
    const key = `alpha_${tableA}`;
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(map, value);
      return value;
    }
    const id = `g_${this.#docId}_alpha_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(map, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addTransferMapAlphaConversion(tableA, filter);
    return url;
  }
  addLuminosityFilter(map) {
    let value = this.#cache.get(map || "luminosity");
    if (value) {
      return value;
    }
    let tableA, key;
    if (map) {
      [tableA] = this.#createTables([map]);
      key = `luminosity_${tableA}`;
    } else {
      key = "luminosity";
    }
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(map, value);
      return value;
    }
    const id = `g_${this.#docId}_luminosity_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(map, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addLuminosityConversion(filter);
    if (map) {
      this.#addTransferMapAlphaConversion(tableA, filter);
    }
    return url;
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    const key = `${fgColor}-${bgColor}-${newFgColor}-${newBgColor}`;
    let info = this.#hcmCache.get(filterName);
    if (info?.key === key) {
      return info.url;
    }
    if (info) {
      info.filter?.remove();
      info.key = key;
      info.url = "none";
      info.filter = null;
    } else {
      info = {
        key,
        url: "none",
        filter: null
      };
      this.#hcmCache.set(filterName, info);
    }
    if (!fgColor || !bgColor) {
      return info.url;
    }
    const [fgRGB, bgRGB] = [fgColor, bgColor].map(this.#getRGB.bind(this));
    let fgGray = Math.round(0.2126 * fgRGB[0] + 0.7152 * fgRGB[1] + 0.0722 * fgRGB[2]);
    let bgGray = Math.round(0.2126 * bgRGB[0] + 0.7152 * bgRGB[1] + 0.0722 * bgRGB[2]);
    let [newFgRGB, newBgRGB] = [newFgColor, newBgColor].map(this.#getRGB.bind(this));
    if (bgGray < fgGray) {
      [fgGray, bgGray, newFgRGB, newBgRGB] = [bgGray, fgGray, newBgRGB, newFgRGB];
    }
    this.#defs.style.color = "";
    const getSteps = (fg, bg, n) => {
      const arr = new Array(256);
      const step = (bgGray - fgGray) / n;
      const newStart = fg / 255;
      const newStep = (bg - fg) / (255 * n);
      let prev = 0;
      for (let i = 0; i <= n; i++) {
        const k = Math.round(fgGray + i * step);
        const value = newStart + i * newStep;
        for (let j = prev; j <= k; j++) {
          arr[j] = value;
        }
        prev = k + 1;
      }
      for (let i = prev; i < 256; i++) {
        arr[i] = arr[prev - 1];
      }
      return arr.join(",");
    };
    const id = `g_${this.#docId}_hcm_${filterName}_filter`;
    const filter = info.filter = this.#createFilter(id);
    this.#addGrayConversion(filter);
    this.#addTransferMapConversion(getSteps(newFgRGB[0], newBgRGB[0], 5), getSteps(newFgRGB[1], newBgRGB[1], 5), getSteps(newFgRGB[2], newBgRGB[2], 5), filter);
    info.url = this.#createUrl(id);
    return info.url;
  }
  destroy(keepHCM = false) {
    if (keepHCM && this.#_hcmCache?.size) {
      return;
    }
    this.#_defs?.parentNode.parentNode.remove();
    this.#_defs = null;
    this.#_cache?.clear();
    this.#_cache = null;
    this.#_hcmCache?.clear();
    this.#_hcmCache = null;
    this.#id = 0;
  }
  #addLuminosityConversion(filter) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
    filter.append(feColorMatrix);
  }
  #addGrayConversion(filter) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
    filter.append(feColorMatrix);
  }
  #createFilter(id) {
    const filter = this.#document.createElementNS(SVG_NS, "filter");
    filter.setAttribute("color-interpolation-filters", "sRGB");
    filter.setAttribute("id", id);
    this.#defs.append(filter);
    return filter;
  }
  #appendFeFunc(feComponentTransfer, func, table) {
    const feFunc = this.#document.createElementNS(SVG_NS, func);
    feFunc.setAttribute("type", "discrete");
    feFunc.setAttribute("tableValues", table);
    feComponentTransfer.append(feFunc);
  }
  #addTransferMapConversion(rTable, gTable, bTable, filter) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    this.#appendFeFunc(feComponentTransfer, "feFuncR", rTable);
    this.#appendFeFunc(feComponentTransfer, "feFuncG", gTable);
    this.#appendFeFunc(feComponentTransfer, "feFuncB", bTable);
  }
  #addTransferMapAlphaConversion(aTable, filter) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    this.#appendFeFunc(feComponentTransfer, "feFuncA", aTable);
  }
  #getRGB(color) {
    this.#defs.style.color = color;
    return getRGB(getComputedStyle(this.#defs).getPropertyValue("color"));
  }
}


class BaseStandardFontDataFactory {
  constructor({
    baseUrl = null
  }) {
    this.baseUrl = baseUrl;
  }
  async fetch({
    filename
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    }
    if (!filename) {
      throw new Error("Font filename must be specified.");
    }
    const url = `${this.baseUrl}${filename}`;
    return this._fetch(url).catch(reason => {
      throw new Error(`Unable to load font data at: ${url}`);
    });
  }
  async _fetch(url) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMStandardFontDataFactory extends BaseStandardFontDataFactory {
  async _fetch(url) {
    const data = await fetchData(url, "arraybuffer");
    return new Uint8Array(data);
  }
}


class BaseWasmFactory {
  constructor({
    baseUrl = null
  }) {
    this.baseUrl = baseUrl;
  }
  async fetch({
    filename
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    }
    if (!filename) {
      throw new Error("Wasm filename must be specified.");
    }
    const url = `${this.baseUrl}${filename}`;
    return this._fetch(url).catch(reason => {
      throw new Error(`Unable to load wasm data at: ${url}`);
    });
  }
  async _fetch(url) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMWasmFactory extends BaseWasmFactory {
  async _fetch(url) {
    const data = await fetchData(url, "arraybuffer");
    return new Uint8Array(data);
  }
}






if (isNodeJS) {
  warn("Please use the `legacy` build in Node.js environments.");
}
async function node_utils_fetchData(url) {
  const fs = process.getBuiltinModule("fs");
  const data = await fs.promises.readFile(url);
  return new Uint8Array(data);
}
class NodeFilterFactory extends BaseFilterFactory {}
class NodeCanvasFactory extends BaseCanvasFactory {
  _createCanvas(width, height) {
    const require = process.getBuiltinModule("module").createRequire(import.meta.url);
    const canvas = require("@napi-rs/canvas");
    return canvas.createCanvas(width, height);
  }
}
class NodeCMapReaderFactory extends BaseCMapReaderFactory {
  async _fetch(url) {
    return node_utils_fetchData(url);
  }
}
class NodeStandardFontDataFactory extends BaseStandardFontDataFactory {
  async _fetch(url) {
    return node_utils_fetchData(url);
  }
}
class NodeWasmFactory extends BaseWasmFactory {
  async _fetch(url) {
    return node_utils_fetchData(url);
  }
}


const PathType = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function applyBoundingBox(ctx, bbox) {
  if (!bbox) {
    return;
  }
  const width = bbox[2] - bbox[0];
  const height = bbox[3] - bbox[1];
  const region = new Path2D();
  region.rect(bbox[0], bbox[1], width, height);
  ctx.clip(region);
}
class BaseShadingPattern {
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern() {
    unreachable("Abstract method `getPattern` called.");
  }
}
class RadialAxialShadingPattern extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._type = IR[1];
    this._bbox = IR[2];
    this._colorStops = IR[3];
    this._p0 = IR[4];
    this._p1 = IR[5];
    this._r0 = IR[6];
    this._r1 = IR[7];
    this.matrix = null;
  }
  _createGradient(ctx) {
    let grad;
    if (this._type === "axial") {
      grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
    } else if (this._type === "radial") {
      grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
    }
    for (const colorStop of this._colorStops) {
      grad.addColorStop(colorStop[0], colorStop[1]);
    }
    return grad;
  }
  getPattern(ctx, owner, inverse, pathType) {
    let pattern;
    if (pathType === PathType.STROKE || pathType === PathType.FILL) {
      const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, getCurrentTransform(ctx)) || [0, 0, 0, 0];
      const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
      const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
      const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height);
      const tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.beginPath();
      tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
      inverse = Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
      tmpCtx.transform(...owner.baseTransform);
      if (this.matrix) {
        tmpCtx.transform(...this.matrix);
      }
      applyBoundingBox(tmpCtx, this._bbox);
      tmpCtx.fillStyle = this._createGradient(tmpCtx);
      tmpCtx.fill();
      pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
      const domMatrix = new DOMMatrix(inverse);
      pattern.setTransform(domMatrix);
    } else {
      applyBoundingBox(ctx, this._bbox);
      pattern = this._createGradient(ctx);
    }
    return pattern;
  }
}
function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
  const coords = context.coords,
    colors = context.colors;
  const bytes = data.data,
    rowSize = data.width * 4;
  let tmp;
  if (coords[p1 + 1] > coords[p2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  if (coords[p2 + 1] > coords[p3 + 1]) {
    tmp = p2;
    p2 = p3;
    p3 = tmp;
    tmp = c2;
    c2 = c3;
    c3 = tmp;
  }
  if (coords[p1 + 1] > coords[p2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  const x1 = (coords[p1] + context.offsetX) * context.scaleX;
  const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
  const x2 = (coords[p2] + context.offsetX) * context.scaleX;
  const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
  const x3 = (coords[p3] + context.offsetX) * context.scaleX;
  const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
  if (y1 >= y3) {
    return;
  }
  const c1r = colors[c1],
    c1g = colors[c1 + 1],
    c1b = colors[c1 + 2];
  const c2r = colors[c2],
    c2g = colors[c2 + 1],
    c2b = colors[c2 + 2];
  const c3r = colors[c3],
    c3g = colors[c3 + 1],
    c3b = colors[c3 + 2];
  const minY = Math.round(y1),
    maxY = Math.round(y3);
  let xa, car, cag, cab;
  let xb, cbr, cbg, cbb;
  for (let y = minY; y <= maxY; y++) {
    if (y < y2) {
      const k = y < y1 ? 0 : (y1 - y) / (y1 - y2);
      xa = x1 - (x1 - x2) * k;
      car = c1r - (c1r - c2r) * k;
      cag = c1g - (c1g - c2g) * k;
      cab = c1b - (c1b - c2b) * k;
    } else {
      let k;
      if (y > y3) {
        k = 1;
      } else if (y2 === y3) {
        k = 0;
      } else {
        k = (y2 - y) / (y2 - y3);
      }
      xa = x2 - (x2 - x3) * k;
      car = c2r - (c2r - c3r) * k;
      cag = c2g - (c2g - c3g) * k;
      cab = c2b - (c2b - c3b) * k;
    }
    let k;
    if (y < y1) {
      k = 0;
    } else if (y > y3) {
      k = 1;
    } else {
      k = (y1 - y) / (y1 - y3);
    }
    xb = x1 - (x1 - x3) * k;
    cbr = c1r - (c1r - c3r) * k;
    cbg = c1g - (c1g - c3g) * k;
    cbb = c1b - (c1b - c3b) * k;
    const x1_ = Math.round(Math.min(xa, xb));
    const x2_ = Math.round(Math.max(xa, xb));
    let j = rowSize * y + x1_ * 4;
    for (let x = x1_; x <= x2_; x++) {
      k = (xa - x) / (xa - xb);
      if (k < 0) {
        k = 0;
      } else if (k > 1) {
        k = 1;
      }
      bytes[j++] = car - (car - cbr) * k | 0;
      bytes[j++] = cag - (cag - cbg) * k | 0;
      bytes[j++] = cab - (cab - cbb) * k | 0;
      bytes[j++] = 255;
    }
  }
}
function drawFigure(data, figure, context) {
  const ps = figure.coords;
  const cs = figure.colors;
  let i, ii;
  switch (figure.type) {
    case "lattice":
      const verticesPerRow = figure.verticesPerRow;
      const rows = Math.floor(ps.length / verticesPerRow) - 1;
      const cols = verticesPerRow - 1;
      for (i = 0; i < rows; i++) {
        let q = i * verticesPerRow;
        for (let j = 0; j < cols; j++, q++) {
          drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
          drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
        }
      }
      break;
    case "triangles":
      for (i = 0, ii = ps.length; i < ii; i += 3) {
        drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
      }
      break;
    default:
      throw new Error("illegal figure");
  }
}
class MeshShadingPattern extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._coords = IR[2];
    this._colors = IR[3];
    this._figures = IR[4];
    this._bounds = IR[5];
    this._bbox = IR[6];
    this._background = IR[7];
    this.matrix = null;
  }
  _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
    const EXPECTED_SCALE = 1.1;
    const MAX_PATTERN_SIZE = 3000;
    const BORDER_SIZE = 2;
    const offsetX = Math.floor(this._bounds[0]);
    const offsetY = Math.floor(this._bounds[1]);
    const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
    const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
    const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const scaleX = boundsWidth / width;
    const scaleY = boundsHeight / height;
    const context = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    const paddedWidth = width + BORDER_SIZE * 2;
    const paddedHeight = height + BORDER_SIZE * 2;
    const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight);
    const tmpCtx = tmpCanvas.context;
    const data = tmpCtx.createImageData(width, height);
    if (backgroundColor) {
      const bytes = data.data;
      for (let i = 0, ii = bytes.length; i < ii; i += 4) {
        bytes[i] = backgroundColor[0];
        bytes[i + 1] = backgroundColor[1];
        bytes[i + 2] = backgroundColor[2];
        bytes[i + 3] = 255;
      }
    }
    for (const figure of this._figures) {
      drawFigure(data, figure, context);
    }
    tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
    const canvas = tmpCanvas.canvas;
    return {
      canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX,
      scaleY
    };
  }
  isModifyingCurrentTransform() {
    return true;
  }
  getPattern(ctx, owner, inverse, pathType) {
    applyBoundingBox(ctx, this._bbox);
    const scale = new Float32Array(2);
    if (pathType === PathType.SHADING) {
      Util.singularValueDecompose2dScale(getCurrentTransform(ctx), scale);
    } else if (this.matrix) {
      Util.singularValueDecompose2dScale(this.matrix, scale);
      const [matrixScaleX, matrixScaleY] = scale;
      Util.singularValueDecompose2dScale(owner.baseTransform, scale);
      scale[0] *= matrixScaleX;
      scale[1] *= matrixScaleY;
    } else {
      Util.singularValueDecompose2dScale(owner.baseTransform, scale);
    }
    const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
    if (pathType !== PathType.SHADING) {
      ctx.setTransform(...owner.baseTransform);
      if (this.matrix) {
        ctx.transform(...this.matrix);
      }
    }
    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
    return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
  }
}
class DummyShadingPattern extends BaseShadingPattern {
  getPattern() {
    return "hotpink";
  }
}
function getShadingPattern(IR) {
  switch (IR[0]) {
    case "RadialAxial":
      return new RadialAxialShadingPattern(IR);
    case "Mesh":
      return new MeshShadingPattern(IR);
    case "Dummy":
      return new DummyShadingPattern();
  }
  throw new Error(`Unknown IR type: ${IR[0]}`);
}
const PaintType = {
  COLORED: 1,
  UNCOLORED: 2
};
class TilingPattern {
  static MAX_PATTERN_SIZE = 3000;
  constructor(IR, ctx, canvasGraphicsFactory, baseTransform) {
    this.color = IR[1];
    this.operatorList = IR[2];
    this.matrix = IR[3];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.ctx = ctx;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
  }
  createPatternCanvas(owner) {
    const {
      bbox,
      operatorList,
      paintType,
      tilingType,
      color,
      canvasGraphicsFactory
    } = this;
    let {
      xstep,
      ystep
    } = this;
    xstep = Math.abs(xstep);
    ystep = Math.abs(ystep);
    info("TilingType: " + tilingType);
    const x0 = bbox[0],
      y0 = bbox[1],
      x1 = bbox[2],
      y1 = bbox[3];
    const width = x1 - x0;
    const height = y1 - y0;
    const scale = new Float32Array(2);
    Util.singularValueDecompose2dScale(this.matrix, scale);
    const [matrixScaleX, matrixScaleY] = scale;
    Util.singularValueDecompose2dScale(this.baseTransform, scale);
    const combinedScaleX = matrixScaleX * scale[0];
    const combinedScaleY = matrixScaleY * scale[1];
    let canvasWidth = width,
      canvasHeight = height,
      redrawHorizontally = false,
      redrawVertically = false;
    const xScaledStep = Math.ceil(xstep * combinedScaleX);
    const yScaledStep = Math.ceil(ystep * combinedScaleY);
    const xScaledWidth = Math.ceil(width * combinedScaleX);
    const yScaledHeight = Math.ceil(height * combinedScaleY);
    if (xScaledStep >= xScaledWidth) {
      canvasWidth = xstep;
    } else {
      redrawHorizontally = true;
    }
    if (yScaledStep >= yScaledHeight) {
      canvasHeight = ystep;
    } else {
      redrawVertically = true;
    }
    const dimx = this.getSizeAndScale(canvasWidth, this.ctx.canvas.width, combinedScaleX);
    const dimy = this.getSizeAndScale(canvasHeight, this.ctx.canvas.height, combinedScaleY);
    const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size);
    const tmpCtx = tmpCanvas.context;
    const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
    graphics.groupLevel = owner.groupLevel;
    this.setFillAndStrokeStyleToContext(graphics, paintType, color);
    tmpCtx.translate(-dimx.scale * x0, -dimy.scale * y0);
    graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
    tmpCtx.save();
    this.clipBbox(graphics, x0, y0, x1, y1);
    graphics.baseTransform = getCurrentTransform(graphics.ctx);
    graphics.executeOperatorList(operatorList);
    graphics.endDrawing();
    tmpCtx.restore();
    if (redrawHorizontally || redrawVertically) {
      const image = tmpCanvas.canvas;
      if (redrawHorizontally) {
        canvasWidth = xstep;
      }
      if (redrawVertically) {
        canvasHeight = ystep;
      }
      const dimx2 = this.getSizeAndScale(canvasWidth, this.ctx.canvas.width, combinedScaleX);
      const dimy2 = this.getSizeAndScale(canvasHeight, this.ctx.canvas.height, combinedScaleY);
      const xSize = dimx2.size;
      const ySize = dimy2.size;
      const tmpCanvas2 = owner.cachedCanvases.getCanvas("pattern-workaround", xSize, ySize);
      const tmpCtx2 = tmpCanvas2.context;
      const ii = redrawHorizontally ? Math.floor(width / xstep) : 0;
      const jj = redrawVertically ? Math.floor(height / ystep) : 0;
      for (let i = 0; i <= ii; i++) {
        for (let j = 0; j <= jj; j++) {
          tmpCtx2.drawImage(image, xSize * i, ySize * j, xSize, ySize, 0, 0, xSize, ySize);
        }
      }
      return {
        canvas: tmpCanvas2.canvas,
        scaleX: dimx2.scale,
        scaleY: dimy2.scale,
        offsetX: x0,
        offsetY: y0
      };
    }
    return {
      canvas: tmpCanvas.canvas,
      scaleX: dimx.scale,
      scaleY: dimy.scale,
      offsetX: x0,
      offsetY: y0
    };
  }
  getSizeAndScale(step, realOutputSize, scale) {
    const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
    let size = Math.ceil(step * scale);
    if (size >= maxSize) {
      size = maxSize;
    } else {
      scale = size / step;
    }
    return {
      scale,
      size
    };
  }
  clipBbox(graphics, x0, y0, x1, y1) {
    const bboxWidth = x1 - x0;
    const bboxHeight = y1 - y0;
    graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
    Util.axialAlignedBoundingBox([x0, y0, x1, y1], getCurrentTransform(graphics.ctx), graphics.current.minMax);
    graphics.clip();
    graphics.endPath();
  }
  setFillAndStrokeStyleToContext(graphics, paintType, color) {
    const context = graphics.ctx,
      current = graphics.current;
    switch (paintType) {
      case PaintType.COLORED:
        const {
          fillStyle,
          strokeStyle
        } = this.ctx;
        context.fillStyle = current.fillColor = fillStyle;
        context.strokeStyle = current.strokeColor = strokeStyle;
        break;
      case PaintType.UNCOLORED:
        context.fillStyle = context.strokeStyle = color;
        current.fillColor = current.strokeColor = color;
        break;
      default:
        throw new FormatError(`Unsupported paint type: ${paintType}`);
    }
  }
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern(ctx, owner, inverse, pathType) {
    let matrix = inverse;
    if (pathType !== PathType.SHADING) {
      matrix = Util.transform(matrix, owner.baseTransform);
      if (this.matrix) {
        matrix = Util.transform(matrix, this.matrix);
      }
    }
    const temporaryPatternCanvas = this.createPatternCanvas(owner);
    let domMatrix = new DOMMatrix(matrix);
    domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
    const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
    pattern.setTransform(domMatrix);
    return pattern;
  }
}
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 0xffffffff,
  inverseDecode = false
}) {
  const black = util_FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; i++) {
    for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
      const elem = srcPos < srcLength ? src[srcPos] : 255;
      dest[destPos++] = elem & 0b10000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1000 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b100 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b10 ? oneMapping : zeroMapping;
      dest[destPos++] = elem & 0b1 ? oneMapping : zeroMapping;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; j++) {
      dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
    }
  }
  return {
    srcPos,
    destPos
  };
}




const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 100;
const EXECUTION_TIME = 15;
const EXECUTION_STEPS = 10;
const FULL_CHUNK_HEIGHT = 16;
const SCALE_MATRIX = new DOMMatrix();
const XY = new Float32Array(2);
const MIN_MAX_INIT = new Float32Array([Infinity, Infinity, -Infinity, -Infinity]);
function mirrorContextOperations(ctx, destCtx) {
  if (ctx._removeMirroring) {
    throw new Error("Context is already forwarding operations.");
  }
  ctx.__originalSave = ctx.save;
  ctx.__originalRestore = ctx.restore;
  ctx.__originalRotate = ctx.rotate;
  ctx.__originalScale = ctx.scale;
  ctx.__originalTranslate = ctx.translate;
  ctx.__originalTransform = ctx.transform;
  ctx.__originalSetTransform = ctx.setTransform;
  ctx.__originalResetTransform = ctx.resetTransform;
  ctx.__originalClip = ctx.clip;
  ctx.__originalMoveTo = ctx.moveTo;
  ctx.__originalLineTo = ctx.lineTo;
  ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
  ctx.__originalRect = ctx.rect;
  ctx.__originalClosePath = ctx.closePath;
  ctx.__originalBeginPath = ctx.beginPath;
  ctx._removeMirroring = () => {
    ctx.save = ctx.__originalSave;
    ctx.restore = ctx.__originalRestore;
    ctx.rotate = ctx.__originalRotate;
    ctx.scale = ctx.__originalScale;
    ctx.translate = ctx.__originalTranslate;
    ctx.transform = ctx.__originalTransform;
    ctx.setTransform = ctx.__originalSetTransform;
    ctx.resetTransform = ctx.__originalResetTransform;
    ctx.clip = ctx.__originalClip;
    ctx.moveTo = ctx.__originalMoveTo;
    ctx.lineTo = ctx.__originalLineTo;
    ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
    ctx.rect = ctx.__originalRect;
    ctx.closePath = ctx.__originalClosePath;
    ctx.beginPath = ctx.__originalBeginPath;
    delete ctx._removeMirroring;
  };
  ctx.save = function () {
    destCtx.save();
    this.__originalSave();
  };
  ctx.restore = function () {
    destCtx.restore();
    this.__originalRestore();
  };
  ctx.translate = function (x, y) {
    destCtx.translate(x, y);
    this.__originalTranslate(x, y);
  };
  ctx.scale = function (x, y) {
    destCtx.scale(x, y);
    this.__originalScale(x, y);
  };
  ctx.transform = function (a, b, c, d, e, f) {
    destCtx.transform(a, b, c, d, e, f);
    this.__originalTransform(a, b, c, d, e, f);
  };
  ctx.setTransform = function (a, b, c, d, e, f) {
    destCtx.setTransform(a, b, c, d, e, f);
    this.__originalSetTransform(a, b, c, d, e, f);
  };
  ctx.resetTransform = function () {
    destCtx.resetTransform();
    this.__originalResetTransform();
  };
  ctx.rotate = function (angle) {
    destCtx.rotate(angle);
    this.__originalRotate(angle);
  };
  ctx.clip = function (rule) {
    destCtx.clip(rule);
    this.__originalClip(rule);
  };
  ctx.moveTo = function (x, y) {
    destCtx.moveTo(x, y);
    this.__originalMoveTo(x, y);
  };
  ctx.lineTo = function (x, y) {
    destCtx.lineTo(x, y);
    this.__originalLineTo(x, y);
  };
  ctx.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
    destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };
  ctx.rect = function (x, y, width, height) {
    destCtx.rect(x, y, width, height);
    this.__originalRect(x, y, width, height);
  };
  ctx.closePath = function () {
    destCtx.closePath();
    this.__originalClosePath();
  };
  ctx.beginPath = function () {
    destCtx.beginPath();
    this.__originalBeginPath();
  };
}
class CachedCanvases {
  constructor(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = Object.create(null);
  }
  getCanvas(id, width, height) {
    let canvasEntry;
    if (this.cache[id] !== undefined) {
      canvasEntry = this.cache[id];
      this.canvasFactory.reset(canvasEntry, width, height);
    } else {
      canvasEntry = this.canvasFactory.create(width, height);
      this.cache[id] = canvasEntry;
    }
    return canvasEntry;
  }
  delete(id) {
    delete this.cache[id];
  }
  clear() {
    for (const id in this.cache) {
      const canvasEntry = this.cache[id];
      this.canvasFactory.destroy(canvasEntry);
      delete this.cache[id];
    }
  }
}
function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
  const [a, b, c, d, tx, ty] = getCurrentTransform(ctx);
  if (b === 0 && c === 0) {
    const tlX = destX * a + tx;
    const rTlX = Math.round(tlX);
    const tlY = destY * d + ty;
    const rTlY = Math.round(tlY);
    const brX = (destX + destW) * a + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destY + destH) * d + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rWidth, rHeight];
  }
  if (a === 0 && d === 0) {
    const tlX = destY * c + tx;
    const rTlX = Math.round(tlX);
    const tlY = destX * b + ty;
    const rTlY = Math.round(tlY);
    const brX = (destY + destH) * c + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destX + destW) * b + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rHeight, rWidth];
  }
  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  const scaleX = Math.hypot(a, b);
  const scaleY = Math.hypot(c, d);
  return [scaleX * destW, scaleY * destH];
}
class CanvasExtraState {
  alphaIsShape = false;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = FONT_IDENTITY_MATRIX;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = TextRenderingMode.FILL;
  textRise = 0;
  fillColor = "#000000";
  strokeColor = "#000000";
  patternFill = false;
  patternStroke = false;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = "none";
  constructor(width, height) {
    this.clipBox = new Float32Array([0, 0, width, height]);
    this.minMax = MIN_MAX_INIT.slice();
  }
  clone() {
    const clone = Object.create(this);
    clone.clipBox = this.clipBox.slice();
    clone.minMax = this.minMax.slice();
    return clone;
  }
  getPathBoundingBox(pathType = PathType.FILL, transform = null) {
    const box = this.minMax.slice();
    if (pathType === PathType.STROKE) {
      if (!transform) {
        unreachable("Stroke bounding box must include transform.");
      }
      Util.singularValueDecompose2dScale(transform, XY);
      const xStrokePad = XY[0] * this.lineWidth / 2;
      const yStrokePad = XY[1] * this.lineWidth / 2;
      box[0] -= xStrokePad;
      box[1] -= yStrokePad;
      box[2] += xStrokePad;
      box[3] += yStrokePad;
    }
    return box;
  }
  updateClipFromPath() {
    const intersect = Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === Infinity;
  }
  startNewPathAndClipBox(box) {
    this.clipBox.set(box, 0);
    this.minMax.set(MIN_MAX_INIT, 0);
  }
  getClippedPathBoundingBox(pathType = PathType.FILL, transform = null) {
    return Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
  }
}
function putBinaryImageData(ctx, imgData) {
  if (imgData instanceof ImageData) {
    ctx.putImageData(imgData, 0, 0);
    return;
  }
  const height = imgData.height,
    width = imgData.width;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0,
    destPos;
  const src = imgData.data;
  const dest = chunkImgData.data;
  let i, j, thisChunkHeight, elemsInThisChunk;
  if (imgData.kind === util_ImageKind.GRAYSCALE_1BPP) {
    const srcLength = src.byteLength;
    const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
    const dest32DataLength = dest32.length;
    const fullSrcDiff = width + 7 >> 3;
    const white = 0xffffffff;
    const black = util_FeatureTest.isLittleEndian ? 0xff000000 : 0x000000ff;
    for (i = 0; i < totalChunks; i++) {
      thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      destPos = 0;
      for (j = 0; j < thisChunkHeight; j++) {
        const srcDiff = srcLength - srcPos;
        let k = 0;
        const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
        const kEndUnrolled = kEnd & ~7;
        let mask = 0;
        let srcByte = 0;
        for (; k < kEndUnrolled; k += 8) {
          srcByte = src[srcPos++];
          dest32[destPos++] = srcByte & 128 ? white : black;
          dest32[destPos++] = srcByte & 64 ? white : black;
          dest32[destPos++] = srcByte & 32 ? white : black;
          dest32[destPos++] = srcByte & 16 ? white : black;
          dest32[destPos++] = srcByte & 8 ? white : black;
          dest32[destPos++] = srcByte & 4 ? white : black;
          dest32[destPos++] = srcByte & 2 ? white : black;
          dest32[destPos++] = srcByte & 1 ? white : black;
        }
        for (; k < kEnd; k++) {
          if (mask === 0) {
            srcByte = src[srcPos++];
            mask = 128;
          }
          dest32[destPos++] = srcByte & mask ? white : black;
          mask >>= 1;
        }
      }
      while (destPos < dest32DataLength) {
        dest32[destPos++] = 0;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else if (imgData.kind === util_ImageKind.RGBA_32BPP) {
    j = 0;
    elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
    for (i = 0; i < fullChunks; i++) {
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      srcPos += elemsInThisChunk;
      ctx.putImageData(chunkImgData, 0, j);
      j += FULL_CHUNK_HEIGHT;
    }
    if (i < totalChunks) {
      elemsInThisChunk = width * partialChunkHeight * 4;
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      ctx.putImageData(chunkImgData, 0, j);
    }
  } else if (imgData.kind === util_ImageKind.RGB_24BPP) {
    thisChunkHeight = FULL_CHUNK_HEIGHT;
    elemsInThisChunk = width * thisChunkHeight;
    for (i = 0; i < totalChunks; i++) {
      if (i >= fullChunks) {
        thisChunkHeight = partialChunkHeight;
        elemsInThisChunk = width * thisChunkHeight;
      }
      destPos = 0;
      for (j = elemsInThisChunk; j--;) {
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = 255;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else {
    throw new Error(`bad image kind: ${imgData.kind}`);
  }
}
function putBinaryImageMask(ctx, imgData) {
  if (imgData.bitmap) {
    ctx.drawImage(imgData.bitmap, 0, 0);
    return;
  }
  const height = imgData.height,
    width = imgData.width;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0;
  const src = imgData.data;
  const dest = chunkImgData.data;
  for (let i = 0; i < totalChunks; i++) {
    const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
    ({
      srcPos
    } = convertBlackAndWhiteToRGBA({
      src,
      srcPos,
      dest,
      width,
      height: thisChunkHeight,
      nonBlackColor: 0
    }));
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
  }
}
function copyCtxState(sourceCtx, destCtx) {
  const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const property of properties) {
    if (sourceCtx[property] !== undefined) {
      destCtx[property] = sourceCtx[property];
    }
  }
  if (sourceCtx.setLineDash !== undefined) {
    destCtx.setLineDash(sourceCtx.getLineDash());
    destCtx.lineDashOffset = sourceCtx.lineDashOffset;
  }
}
function resetCtxToDefault(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  if (ctx.setLineDash !== undefined) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  const {
    filter
  } = ctx;
  if (filter !== "none" && filter !== "") {
    ctx.filter = "none";
  }
}
function getImageSmoothingEnabled(transform, interpolate) {
  if (interpolate) {
    return true;
  }
  Util.singularValueDecompose2dScale(transform, XY);
  const actualScale = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
  return XY[0] <= actualScale && XY[1] <= actualScale;
}
const LINE_CAP_STYLES = ["butt", "round", "square"];
const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
const NORMAL_CLIP = {};
const EO_CLIP = {};
class CanvasGraphics {
  constructor(canvasCtx, commonObjs, objs, canvasFactory, filterFactory, {
    optionalContentConfig,
    markedContentStack = null
  }, annotationCanvasMap, pageColors) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this.groupStack = [];
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    this.cachedPatterns = new Map();
    this.annotationCanvasMap = annotationCanvasMap;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = pageColors;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = new Map();
  }
  getObject(data, fallback = null) {
    if (typeof data === "string") {
      return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
    }
    return fallback;
  }
  beginDrawing({
    transform,
    viewport,
    transparency = false,
    background = null
  }) {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    const savedFillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = background || "#ffffff";
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.fillStyle = savedFillStyle;
    if (transparency) {
      const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height);
      this.compositeCtx = this.ctx;
      this.transparentCanvas = transparentCanvas.canvas;
      this.ctx = transparentCanvas.context;
      this.ctx.save();
      this.ctx.transform(...getCurrentTransform(this.compositeCtx));
    }
    this.ctx.save();
    resetCtxToDefault(this.ctx);
    if (transform) {
      this.ctx.transform(...transform);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[0];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = getCurrentTransform(this.ctx);
  }
  executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
    const argsArray = operatorList.argsArray;
    const fnArray = operatorList.fnArray;
    let i = executionStartIdx || 0;
    const argsArrayLen = argsArray.length;
    if (argsArrayLen === i) {
      return i;
    }
    const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
    const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
    let steps = 0;
    const commonObjs = this.commonObjs;
    const objs = this.objs;
    let fnId;
    while (true) {
      if (stepper !== undefined && i === stepper.nextBreakPoint) {
        stepper.breakIt(i, continueCallback);
        return i;
      }
      fnId = fnArray[i];
      if (fnId !== OPS.dependency) {
        this[fnId].apply(this, argsArray[i]);
      } else {
        for (const depObjId of argsArray[i]) {
          const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
          if (!objsPool.has(depObjId)) {
            objsPool.get(depObjId, continueCallback);
            return i;
          }
        }
      }
      i++;
      if (i === argsArrayLen) {
        return i;
      }
      if (chunkOperations && ++steps > EXECUTION_STEPS) {
        if (Date.now() > endTime) {
          continueCallback();
          return i;
        }
        steps = 0;
      }
    }
  }
  #restoreInitialState() {
    while (this.stateStack.length || this.inSMaskMode) {
      this.restore();
    }
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.transparentCanvas = null;
    }
  }
  endDrawing() {
    this.#restoreInitialState();
    this.cachedCanvases.clear();
    this.cachedPatterns.clear();
    for (const cache of this._cachedBitmapsMap.values()) {
      for (const canvas of cache.values()) {
        if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
          canvas.width = canvas.height = 0;
        }
      }
      cache.clear();
    }
    this._cachedBitmapsMap.clear();
    this.#drawFilter();
  }
  #drawFilter() {
    if (this.pageColors) {
      const hcmFilterId = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (hcmFilterId !== "none") {
        const savedFilter = this.ctx.filter;
        this.ctx.filter = hcmFilterId;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = savedFilter;
      }
    }
  }
  _scaleImage(img, inverseTransform) {
    const width = img.width ?? img.displayWidth;
    const height = img.height ?? img.displayHeight;
    let widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
    let heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
    let paintWidth = width,
      paintHeight = height;
    let tmpCanvasId = "prescale1";
    let tmpCanvas, tmpCtx;
    while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
      let newWidth = paintWidth,
        newHeight = paintHeight;
      if (widthScale > 2 && paintWidth > 1) {
        newWidth = paintWidth >= 16384 ? Math.floor(paintWidth / 2) - 1 || 1 : Math.ceil(paintWidth / 2);
        widthScale /= paintWidth / newWidth;
      }
      if (heightScale > 2 && paintHeight > 1) {
        newHeight = paintHeight >= 16384 ? Math.floor(paintHeight / 2) - 1 || 1 : Math.ceil(paintHeight) / 2;
        heightScale /= paintHeight / newHeight;
      }
      tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
      tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, newWidth, newHeight);
      tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
      img = tmpCanvas.canvas;
      paintWidth = newWidth;
      paintHeight = newHeight;
      tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img,
      paintWidth,
      paintHeight
    };
  }
  _createMaskCanvas(img) {
    const ctx = this.ctx;
    const {
      width,
      height
    } = img;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    const currentTransform = getCurrentTransform(ctx);
    let cache, cacheKey, scaled, maskCanvas;
    if ((img.bitmap || img.data) && img.count > 1) {
      const mainKey = img.bitmap || img.data.buffer;
      cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
      cache = this._cachedBitmapsMap.get(mainKey);
      if (!cache) {
        cache = new Map();
        this._cachedBitmapsMap.set(mainKey, cache);
      }
      const cachedImage = cache.get(cacheKey);
      if (cachedImage && !isPatternFill) {
        const offsetX = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
        const offsetY = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
        return {
          canvas: cachedImage,
          offsetX,
          offsetY
        };
      }
      scaled = cachedImage;
    }
    if (!scaled) {
      maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      putBinaryImageMask(maskCanvas.context, img);
    }
    let maskToCanvas = Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
    maskToCanvas = Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
    const minMax = MIN_MAX_INIT.slice();
    Util.axialAlignedBoundingBox([0, 0, width, height], maskToCanvas, minMax);
    const [minX, minY, maxX, maxY] = minMax;
    const drawnWidth = Math.round(maxX - minX) || 1;
    const drawnHeight = Math.round(maxY - minY) || 1;
    const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight);
    const fillCtx = fillCanvas.context;
    const offsetX = minX;
    const offsetY = minY;
    fillCtx.translate(-offsetX, -offsetY);
    fillCtx.transform(...maskToCanvas);
    if (!scaled) {
      scaled = this._scaleImage(maskCanvas.canvas, getCurrentTransformInverse(fillCtx));
      scaled = scaled.img;
      if (cache && isPatternFill) {
        cache.set(cacheKey, scaled);
      }
    }
    fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(fillCtx), img.interpolate);
    drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
    fillCtx.globalCompositeOperation = "source-in";
    const inverse = Util.transform(getCurrentTransformInverse(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
    fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, PathType.FILL) : fillColor;
    fillCtx.fillRect(0, 0, width, height);
    if (cache && !isPatternFill) {
      this.cachedCanvases.delete("fillCanvas");
      cache.set(cacheKey, fillCanvas.canvas);
    }
    return {
      canvas: fillCanvas.canvas,
      offsetX: Math.round(offsetX),
      offsetY: Math.round(offsetY)
    };
  }
  setLineWidth(width) {
    if (width !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = width;
    this.ctx.lineWidth = width;
  }
  setLineCap(style) {
    this.ctx.lineCap = LINE_CAP_STYLES[style];
  }
  setLineJoin(style) {
    this.ctx.lineJoin = LINE_JOIN_STYLES[style];
  }
  setMiterLimit(limit) {
    this.ctx.miterLimit = limit;
  }
  setDash(dashArray, dashPhase) {
    const ctx = this.ctx;
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash(dashArray);
      ctx.lineDashOffset = dashPhase;
    }
  }
  setRenderingIntent(intent) {}
  setFlatness(flatness) {}
  setGState(states) {
    for (const [key, value] of states) {
      switch (key) {
        case "LW":
          this.setLineWidth(value);
          break;
        case "LC":
          this.setLineCap(value);
          break;
        case "LJ":
          this.setLineJoin(value);
          break;
        case "ML":
          this.setMiterLimit(value);
          break;
        case "D":
          this.setDash(value[0], value[1]);
          break;
        case "RI":
          this.setRenderingIntent(value);
          break;
        case "FL":
          this.setFlatness(value);
          break;
        case "Font":
          this.setFont(value[0], value[1]);
          break;
        case "CA":
          this.current.strokeAlpha = value;
          break;
        case "ca":
          this.ctx.globalAlpha = this.current.fillAlpha = value;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = value;
          break;
        case "SMask":
          this.current.activeSMask = value ? this.tempSMask : null;
          this.tempSMask = null;
          this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(value);
          break;
      }
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const inSMaskMode = this.inSMaskMode;
    if (this.current.activeSMask && !inSMaskMode) {
      this.beginSMaskMode();
    } else if (!this.current.activeSMask && inSMaskMode) {
      this.endSMaskMode();
    }
  }
  beginSMaskMode() {
    if (this.inSMaskMode) {
      throw new Error("beginSMaskMode called while already in smask mode");
    }
    const drawnWidth = this.ctx.canvas.width;
    const drawnHeight = this.ctx.canvas.height;
    const cacheId = "smaskGroupAt" + this.groupLevel;
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    this.suspendedCtx = this.ctx;
    const ctx = this.ctx = scratchCanvas.context;
    ctx.setTransform(this.suspendedCtx.getTransform());
    copyCtxState(this.suspendedCtx, ctx);
    mirrorContextOperations(ctx, this.suspendedCtx);
    this.setGState([["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) {
      throw new Error("endSMaskMode called while not in smask mode");
    }
    this.ctx._removeMirroring();
    copyCtxState(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(dirtyBox) {
    if (!this.current.activeSMask) {
      return;
    }
    if (!dirtyBox) {
      dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    } else {
      dirtyBox[0] = Math.floor(dirtyBox[0]);
      dirtyBox[1] = Math.floor(dirtyBox[1]);
      dirtyBox[2] = Math.ceil(dirtyBox[2]);
      dirtyBox[3] = Math.ceil(dirtyBox[3]);
    }
    const smask = this.current.activeSMask;
    const suspendedCtx = this.suspendedCtx;
    this.composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(ctx, smask, layerCtx, layerBox) {
    const layerOffsetX = layerBox[0];
    const layerOffsetY = layerBox[1];
    const layerWidth = layerBox[2] - layerOffsetX;
    const layerHeight = layerBox[3] - layerOffsetY;
    if (layerWidth === 0 || layerHeight === 0) {
      return;
    }
    this.genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(layerCtx.canvas, 0, 0);
    ctx.restore();
  }
  genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
    let maskCanvas = maskCtx.canvas;
    let maskX = layerOffsetX - maskOffsetX;
    let maskY = layerOffsetY - maskOffsetY;
    if (backdrop) {
      if (maskX < 0 || maskY < 0 || maskX + width > maskCanvas.width || maskY + height > maskCanvas.height) {
        const canvas = this.cachedCanvases.getCanvas("maskExtension", width, height);
        const ctx = canvas.context;
        ctx.drawImage(maskCanvas, -maskX, -maskY);
        ctx.globalCompositeOperation = "destination-atop";
        ctx.fillStyle = backdrop;
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "source-over";
        maskCanvas = canvas.canvas;
        maskX = maskY = 0;
      } else {
        maskCtx.save();
        maskCtx.globalAlpha = 1;
        maskCtx.setTransform(1, 0, 0, 1, 0, 0);
        const clip = new Path2D();
        clip.rect(maskX, maskY, width, height);
        maskCtx.clip(clip);
        maskCtx.globalCompositeOperation = "destination-atop";
        maskCtx.fillStyle = backdrop;
        maskCtx.fillRect(maskX, maskY, width, height);
        maskCtx.restore();
      }
    }
    layerCtx.save();
    layerCtx.globalAlpha = 1;
    layerCtx.setTransform(1, 0, 0, 1, 0, 0);
    if (subtype === "Alpha" && transferMap) {
      layerCtx.filter = this.filterFactory.addAlphaFilter(transferMap);
    } else if (subtype === "Luminosity") {
      layerCtx.filter = this.filterFactory.addLuminosityFilter(transferMap);
    }
    const clip = new Path2D();
    clip.rect(layerOffsetX, layerOffsetY, width, height);
    layerCtx.clip(clip);
    layerCtx.globalCompositeOperation = "destination-in";
    layerCtx.drawImage(maskCanvas, maskX, maskY, width, height, layerOffsetX, layerOffsetY, width, height);
    layerCtx.restore();
  }
  save() {
    if (this.inSMaskMode) {
      copyCtxState(this.ctx, this.suspendedCtx);
    }
    this.ctx.save();
    const old = this.current;
    this.stateStack.push(old);
    this.current = old.clone();
  }
  restore() {
    if (this.stateStack.length === 0) {
      if (this.inSMaskMode) {
        this.endSMaskMode();
      }
      return;
    }
    this.current = this.stateStack.pop();
    this.ctx.restore();
    if (this.inSMaskMode) {
      copyCtxState(this.suspendedCtx, this.ctx);
    }
    this.checkSMaskState();
    this.pendingClip = null;
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  transform(a, b, c, d, e, f) {
    this.ctx.transform(a, b, c, d, e, f);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(op, data, minMax) {
    let [path] = data;
    if (!minMax) {
      path ||= data[0] = new Path2D();
      this[op](path);
      return;
    }
    if (!(path instanceof Path2D)) {
      const path2d = data[0] = new Path2D();
      for (let i = 0, ii = path.length; i < ii;) {
        switch (path[i++]) {
          case DrawOPS.moveTo:
            path2d.moveTo(path[i++], path[i++]);
            break;
          case DrawOPS.lineTo:
            path2d.lineTo(path[i++], path[i++]);
            break;
          case DrawOPS.curveTo:
            path2d.bezierCurveTo(path[i++], path[i++], path[i++], path[i++], path[i++], path[i++]);
            break;
          case DrawOPS.closePath:
            path2d.closePath();
            break;
          default:
            warn(`Unrecognized drawing path operator: ${path[i - 1]}`);
            break;
        }
      }
      path = path2d;
    }
    Util.axialAlignedBoundingBox(minMax, getCurrentTransform(this.ctx), this.current.minMax);
    this[op](path);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(path, consumePath = true) {
    const ctx = this.ctx;
    const strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) {
      if (typeof strokeColor === "object" && strokeColor?.getPattern) {
        const baseTransform = strokeColor.isModifyingCurrentTransform() ? ctx.getTransform() : null;
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE);
        if (baseTransform) {
          const newPath = new Path2D();
          newPath.addPath(path, ctx.getTransform().invertSelf().multiplySelf(baseTransform));
          path = newPath;
        }
        this.rescaleAndStroke(path, false);
        ctx.restore();
      } else {
        this.rescaleAndStroke(path, true);
      }
    }
    if (consumePath) {
      this.consumePath(path, this.current.getClippedPathBoundingBox(PathType.STROKE, getCurrentTransform(this.ctx)));
    }
    ctx.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(path) {
    this.stroke(path);
  }
  fill(path, consumePath = true) {
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    let needRestore = false;
    if (isPatternFill) {
      const baseTransform = fillColor.isModifyingCurrentTransform() ? ctx.getTransform() : null;
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL);
      if (baseTransform) {
        const newPath = new Path2D();
        newPath.addPath(path, ctx.getTransform().invertSelf().multiplySelf(baseTransform));
        path = newPath;
      }
      needRestore = true;
    }
    const intersect = this.current.getClippedPathBoundingBox();
    if (this.contentVisible && intersect !== null) {
      if (this.pendingEOFill) {
        ctx.fill(path, "evenodd");
        this.pendingEOFill = false;
      } else {
        ctx.fill(path);
      }
    }
    if (needRestore) {
      ctx.restore();
    }
    if (consumePath) {
      this.consumePath(path, intersect);
    }
  }
  eoFill(path) {
    this.pendingEOFill = true;
    this.fill(path);
  }
  fillStroke(path) {
    this.fill(path, false);
    this.stroke(path, false);
    this.consumePath(path);
  }
  eoFillStroke(path) {
    this.pendingEOFill = true;
    this.fillStroke(path);
  }
  closeFillStroke(path) {
    this.fillStroke(path);
  }
  closeEOFillStroke(path) {
    this.pendingEOFill = true;
    this.fillStroke(path);
  }
  endPath(path) {
    this.consumePath(path);
  }
  rawFillPath(path) {
    this.ctx.fill(path);
  }
  clip() {
    this.pendingClip = NORMAL_CLIP;
  }
  eoClip() {
    this.pendingClip = EO_CLIP;
  }
  beginText() {
    this.current.textMatrix = null;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  endText() {
    const paths = this.pendingTextPaths;
    const ctx = this.ctx;
    if (paths === undefined) {
      return;
    }
    const newPath = new Path2D();
    const invTransf = ctx.getTransform().invertSelf();
    for (const {
      transform,
      x,
      y,
      fontSize,
      path
    } of paths) {
      newPath.addPath(path, new DOMMatrix(transform).preMultiplySelf(invTransf).translate(x, y).scale(fontSize, -fontSize));
    }
    ctx.clip(newPath);
    delete this.pendingTextPaths;
  }
  setCharSpacing(spacing) {
    this.current.charSpacing = spacing;
  }
  setWordSpacing(spacing) {
    this.current.wordSpacing = spacing;
  }
  setHScale(scale) {
    this.current.textHScale = scale / 100;
  }
  setLeading(leading) {
    this.current.leading = -leading;
  }
  setFont(fontRefName, size) {
    const fontObj = this.commonObjs.get(fontRefName);
    const current = this.current;
    if (!fontObj) {
      throw new Error(`Can't find font for ${fontRefName}`);
    }
    current.fontMatrix = fontObj.fontMatrix || FONT_IDENTITY_MATRIX;
    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      warn("Invalid font matrix for font " + fontRefName);
    }
    if (size < 0) {
      size = -size;
      current.fontDirection = -1;
    } else {
      current.fontDirection = 1;
    }
    this.current.font = fontObj;
    this.current.fontSize = size;
    if (fontObj.isType3Font) {
      return;
    }
    const name = fontObj.loadedName || "sans-serif";
    const typeface = fontObj.systemFontInfo?.css || `"${name}", ${fontObj.fallbackName}`;
    let bold = "normal";
    if (fontObj.black) {
      bold = "900";
    } else if (fontObj.bold) {
      bold = "bold";
    }
    const italic = fontObj.italic ? "italic" : "normal";
    let browserFontSize = size;
    if (size < MIN_FONT_SIZE) {
      browserFontSize = MIN_FONT_SIZE;
    } else if (size > MAX_FONT_SIZE) {
      browserFontSize = MAX_FONT_SIZE;
    }
    this.current.fontSizeScale = size / browserFontSize;
    this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
  }
  setTextRenderingMode(mode) {
    this.current.textRenderingMode = mode;
  }
  setTextRise(rise) {
    this.current.textRise = rise;
  }
  moveText(x, y) {
    this.current.x = this.current.lineX += x;
    this.current.y = this.current.lineY += y;
  }
  setLeadingMoveText(x, y) {
    this.setLeading(-y);
    this.moveText(x, y);
  }
  setTextMatrix(matrix) {
    const {
      current
    } = this;
    current.textMatrix = matrix;
    current.textMatrixScale = Math.hypot(matrix[0], matrix[1]);
    current.x = current.lineX = 0;
    current.y = current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  #getScaledPath(path, currentTransform, transform) {
    const newPath = new Path2D();
    newPath.addPath(path, new DOMMatrix(transform).invertSelf().multiplySelf(currentTransform));
    return newPath;
  }
  paintChar(character, x, y, patternFillTransform, patternStrokeTransform) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const textRenderingMode = current.textRenderingMode;
    const fontSize = current.fontSize / current.fontSizeScale;
    const fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
    const isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
    const patternFill = current.patternFill && !font.missingFile;
    const patternStroke = current.patternStroke && !font.missingFile;
    let path;
    if (font.disableFontFace || isAddToPathSet || patternFill || patternStroke) {
      path = font.getPathGenerator(this.commonObjs, character);
    }
    if (font.disableFontFace || patternFill || patternStroke) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(fontSize, -fontSize);
      let currentTransform;
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (patternFillTransform) {
          currentTransform = ctx.getTransform();
          ctx.setTransform(...patternFillTransform);
          ctx.fill(this.#getScaledPath(path, currentTransform, patternFillTransform));
        } else {
          ctx.fill(path);
        }
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (patternStrokeTransform) {
          currentTransform ||= ctx.getTransform();
          ctx.setTransform(...patternStrokeTransform);
          const {
            a,
            b,
            c,
            d
          } = currentTransform;
          const invPatternTransform = Util.inverseTransform(patternStrokeTransform);
          const transf = Util.transform([a, b, c, d, 0, 0], invPatternTransform);
          Util.singularValueDecompose2dScale(transf, XY);
          ctx.lineWidth *= Math.max(XY[0], XY[1]) / fontSize;
          ctx.stroke(this.#getScaledPath(path, currentTransform, patternStrokeTransform));
        } else {
          ctx.lineWidth /= fontSize;
          ctx.stroke(path);
        }
      }
      ctx.restore();
    } else {
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fillText(character, x, y);
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.strokeText(character, x, y);
      }
    }
    if (isAddToPathSet) {
      const paths = this.pendingTextPaths ||= [];
      paths.push({
        transform: getCurrentTransform(ctx),
        x,
        y,
        fontSize,
        path
      });
    }
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: ctx
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    ctx.scale(1.5, 1);
    ctx.fillText("I", 0, 10);
    const data = ctx.getImageData(0, 0, 10, 10).data;
    let enabled = false;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0 && data[i] < 255) {
        enabled = true;
        break;
      }
    }
    return shadow(this, "isFontSubpixelAAEnabled", enabled);
  }
  showText(glyphs) {
    const current = this.current;
    const font = current.font;
    if (font.isType3Font) {
      return this.showType3Text(glyphs);
    }
    const fontSize = current.fontSize;
    if (fontSize === 0) {
      return undefined;
    }
    const ctx = this.ctx;
    const fontSizeScale = current.fontSizeScale;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const fontDirection = current.fontDirection;
    const textHScale = current.textHScale * fontDirection;
    const glyphsLength = glyphs.length;
    const vertical = font.vertical;
    const spacingDir = vertical ? 1 : -1;
    const defaultVMetrics = font.defaultVMetrics;
    const widthAdvanceScale = fontSize * current.fontMatrix[0];
    const simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
    ctx.save();
    if (current.textMatrix) {
      ctx.transform(...current.textMatrix);
    }
    ctx.translate(current.x, current.y + current.textRise);
    if (fontDirection > 0) {
      ctx.scale(textHScale, -1);
    } else {
      ctx.scale(textHScale, 1);
    }
    let patternFillTransform, patternStrokeTransform;
    if (current.patternFill) {
      ctx.save();
      const pattern = current.fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL);
      patternFillTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.fillStyle = pattern;
    }
    if (current.patternStroke) {
      ctx.save();
      const pattern = current.strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE);
      patternStrokeTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.strokeStyle = pattern;
    }
    let lineWidth = current.lineWidth;
    const scale = current.textMatrixScale;
    if (scale === 0 || lineWidth === 0) {
      const fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        lineWidth = this.getSinglePixelWidth();
      }
    } else {
      lineWidth /= scale;
    }
    if (fontSizeScale !== 1.0) {
      ctx.scale(fontSizeScale, fontSizeScale);
      lineWidth /= fontSizeScale;
    }
    ctx.lineWidth = lineWidth;
    if (font.isInvalidPDFjsFont) {
      const chars = [];
      let width = 0;
      for (const glyph of glyphs) {
        chars.push(glyph.unicode);
        width += glyph.width;
      }
      ctx.fillText(chars.join(""), 0, 0);
      current.x += width * widthAdvanceScale * textHScale;
      ctx.restore();
      this.compose();
      return undefined;
    }
    let x = 0,
      i;
    for (i = 0; i < glyphsLength; ++i) {
      const glyph = glyphs[i];
      if (typeof glyph === "number") {
        x += spacingDir * glyph * fontSize / 1000;
        continue;
      }
      let restoreNeeded = false;
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const character = glyph.fontChar;
      const accent = glyph.accent;
      let scaledX, scaledY;
      let width = glyph.width;
      if (vertical) {
        const vmetric = glyph.vmetric || defaultVMetrics;
        const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
        const vy = vmetric[2] * widthAdvanceScale;
        width = vmetric ? -vmetric[0] : width;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
      } else {
        scaledX = x / fontSizeScale;
        scaledY = 0;
      }
      if (font.remeasure && width > 0) {
        const measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
          const characterScaleX = width / measuredWidth;
          restoreNeeded = true;
          ctx.save();
          ctx.scale(characterScaleX, 1);
          scaledX /= characterScaleX;
        } else if (width !== measuredWidth) {
          scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
        }
      }
      if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
        if (simpleFillText && !accent) {
          ctx.fillText(character, scaledX, scaledY);
        } else {
          this.paintChar(character, scaledX, scaledY, patternFillTransform, patternStrokeTransform);
          if (accent) {
            const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
            const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
            this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternFillTransform, patternStrokeTransform);
          }
        }
      }
      const charWidth = vertical ? width * widthAdvanceScale - spacing * fontDirection : width * widthAdvanceScale + spacing * fontDirection;
      x += charWidth;
      if (restoreNeeded) {
        ctx.restore();
      }
    }
    if (vertical) {
      current.y -= x;
    } else {
      current.x += x * textHScale;
    }
    ctx.restore();
    this.compose();
    return undefined;
  }
  showType3Text(glyphs) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const fontSize = current.fontSize;
    const fontDirection = current.fontDirection;
    const spacingDir = font.vertical ? 1 : -1;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const textHScale = current.textHScale * fontDirection;
    const fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
    const glyphsLength = glyphs.length;
    const isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
    let i, glyph, width, spacingLength;
    if (isTextInvisible || fontSize === 0) {
      return;
    }
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    ctx.save();
    if (current.textMatrix) {
      ctx.transform(...current.textMatrix);
    }
    ctx.translate(current.x, current.y + current.textRise);
    ctx.scale(textHScale, fontDirection);
    for (i = 0; i < glyphsLength; ++i) {
      glyph = glyphs[i];
      if (typeof glyph === "number") {
        spacingLength = spacingDir * glyph * fontSize / 1000;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continue;
      }
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const operatorList = font.charProcOperatorList[glyph.operatorListId];
      if (!operatorList) {
        warn(`Type3 character "${glyph.operatorListId}" is not available.`);
      } else if (this.contentVisible) {
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform(...fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();
      }
      const p = [glyph.width, 0];
      Util.applyTransform(p, fontMatrix);
      width = p[0] * fontSize + spacing;
      ctx.translate(width, 0);
      current.x += width * textHScale;
    }
    ctx.restore();
  }
  setCharWidth(xWidth, yWidth) {}
  setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
    const clip = new Path2D();
    clip.rect(llx, lly, urx - llx, ury - lly);
    this.ctx.clip(clip);
    this.endPath();
  }
  getColorN_Pattern(IR) {
    let pattern;
    if (IR[0] === "TilingPattern") {
      const baseTransform = this.baseTransform || getCurrentTransform(this.ctx);
      const canvasGraphicsFactory = {
        createCanvasGraphics: ctx => new CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      pattern = new TilingPattern(IR, this.ctx, canvasGraphicsFactory, baseTransform);
    } else {
      pattern = this._getPattern(IR[1], IR[2]);
    }
    return pattern;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
    this.current.patternStroke = true;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments);
    this.current.patternFill = true;
  }
  setStrokeRGBColor(color) {
    this.ctx.strokeStyle = this.current.strokeColor = color;
    this.current.patternStroke = false;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
    this.current.patternStroke = false;
  }
  setFillRGBColor(color) {
    this.ctx.fillStyle = this.current.fillColor = color;
    this.current.patternFill = false;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
  }
  _getPattern(objId, matrix = null) {
    let pattern;
    if (this.cachedPatterns.has(objId)) {
      pattern = this.cachedPatterns.get(objId);
    } else {
      pattern = getShadingPattern(this.getObject(objId));
      this.cachedPatterns.set(objId, pattern);
    }
    if (matrix) {
      pattern.matrix = matrix;
    }
    return pattern;
  }
  shadingFill(objId) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    this.save();
    const pattern = this._getPattern(objId);
    ctx.fillStyle = pattern.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.SHADING);
    const inv = getCurrentTransformInverse(ctx);
    if (inv) {
      const {
        width,
        height
      } = ctx.canvas;
      const minMax = MIN_MAX_INIT.slice();
      Util.axialAlignedBoundingBox([0, 0, width, height], inv, minMax);
      const [x0, y0, x1, y1] = minMax;
      this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    } else {
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    }
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore();
  }
  beginInlineImage() {
    unreachable("Should not call beginInlineImage");
  }
  beginImageData() {
    unreachable("Should not call beginImageData");
  }
  paintFormXObjectBegin(matrix, bbox) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    this.baseTransformStack.push(this.baseTransform);
    if (matrix) {
      this.transform(...matrix);
    }
    this.baseTransform = getCurrentTransform(this.ctx);
    if (bbox) {
      Util.axialAlignedBoundingBox(bbox, this.baseTransform, this.current.minMax);
      const [x0, y0, x1, y1] = bbox;
      const clip = new Path2D();
      clip.rect(x0, y0, x1 - x0, y1 - y0);
      this.ctx.clip(clip);
      this.endPath();
    }
  }
  paintFormXObjectEnd() {
    if (!this.contentVisible) {
      return;
    }
    this.restore();
    this.baseTransform = this.baseTransformStack.pop();
  }
  beginGroup(group) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    if (this.inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    const currentCtx = this.ctx;
    if (!group.isolated) {
      info("TODO: Support non-isolated groups.");
    }
    if (group.knockout) {
      warn("Knockout groups not supported.");
    }
    const currentTransform = getCurrentTransform(currentCtx);
    if (group.matrix) {
      currentCtx.transform(...group.matrix);
    }
    if (!group.bbox) {
      throw new Error("Bounding box is required.");
    }
    let bounds = MIN_MAX_INIT.slice();
    Util.axialAlignedBoundingBox(group.bbox, getCurrentTransform(currentCtx), bounds);
    const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
    bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
    const offsetX = Math.floor(bounds[0]);
    const offsetY = Math.floor(bounds[1]);
    const drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
    const drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
    this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
    let cacheId = "groupAt" + this.groupLevel;
    if (group.smask) {
      cacheId += "_smask_" + this.smaskCounter++ % 2;
    }
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    const groupCtx = scratchCanvas.context;
    groupCtx.translate(-offsetX, -offsetY);
    groupCtx.transform(...currentTransform);
    let clip = new Path2D();
    const [x0, y0, x1, y1] = group.bbox;
    clip.rect(x0, y0, x1 - x0, y1 - y0);
    if (group.matrix) {
      const path = new Path2D();
      path.addPath(clip, new DOMMatrix(group.matrix));
      clip = path;
    }
    groupCtx.clip(clip);
    if (group.smask) {
      this.smaskStack.push({
        canvas: scratchCanvas.canvas,
        context: groupCtx,
        offsetX,
        offsetY,
        subtype: group.smask.subtype,
        backdrop: group.smask.backdrop,
        transferMap: group.smask.transferMap || null,
        startTransformInverse: null
      });
    } else {
      currentCtx.setTransform(1, 0, 0, 1, 0, 0);
      currentCtx.translate(offsetX, offsetY);
      currentCtx.save();
    }
    copyCtxState(currentCtx, groupCtx);
    this.ctx = groupCtx;
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
    this.groupStack.push(currentCtx);
    this.groupLevel++;
  }
  endGroup(group) {
    if (!this.contentVisible) {
      return;
    }
    this.groupLevel--;
    const groupCtx = this.ctx;
    const ctx = this.groupStack.pop();
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    if (group.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore();
    } else {
      this.ctx.restore();
      const currentMtx = getCurrentTransform(this.ctx);
      this.restore();
      this.ctx.save();
      this.ctx.setTransform(...currentMtx);
      const dirtyBox = MIN_MAX_INIT.slice();
      Util.axialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx, dirtyBox);
      this.ctx.drawImage(groupCtx.canvas, 0, 0);
      this.ctx.restore();
      this.compose(dirtyBox);
    }
  }
  beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
    this.#restoreInitialState();
    resetCtxToDefault(this.ctx);
    this.ctx.save();
    this.save();
    if (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    if (rect) {
      const width = rect[2] - rect[0];
      const height = rect[3] - rect[1];
      if (hasOwnCanvas && this.annotationCanvasMap) {
        transform = transform.slice();
        transform[4] -= rect[0];
        transform[5] -= rect[1];
        rect = rect.slice();
        rect[0] = rect[1] = 0;
        rect[2] = width;
        rect[3] = height;
        Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx), XY);
        const {
          viewportScale
        } = this;
        const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
        const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
        const {
          canvas,
          context
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(id, canvas);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = context;
        this.ctx.save();
        this.ctx.setTransform(XY[0], 0, 0, -XY[1], 0, height * XY[1]);
        resetCtxToDefault(this.ctx);
      } else {
        resetCtxToDefault(this.ctx);
        this.endPath();
        const clip = new Path2D();
        clip.rect(rect[0], rect[1], width, height);
        this.ctx.clip(clip);
      }
    }
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(...transform);
    this.transform(...matrix);
  }
  endAnnotation() {
    if (this.annotationCanvas) {
      this.ctx.restore();
      this.#drawFilter();
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
  }
  paintImageMaskXObject(img) {
    if (!this.contentVisible) {
      return;
    }
    const count = img.count;
    img = this.getObject(img.data, img);
    img.count = count;
    const ctx = this.ctx;
    const mask = this._createMaskCanvas(img);
    const maskCanvas = mask.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectRepeat(img, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    img = this.getObject(img.data, img);
    const ctx = this.ctx;
    ctx.save();
    const currentTransform = getCurrentTransform(ctx);
    ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
    const mask = this._createMaskCanvas(img);
    ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      const trans = Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
      ctx.drawImage(mask.canvas, trans[4], trans[5]);
    }
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectGroup(images) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    for (const image of images) {
      const {
        data,
        width,
        height,
        transform
      } = image;
      const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      const maskCtx = maskCanvas.context;
      maskCtx.save();
      const img = this.getObject(data, image);
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = "source-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, getCurrentTransformInverse(ctx), PathType.FILL) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      ctx.save();
      ctx.transform(...transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintImageXObject(objId) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(imgData);
  }
  paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const map = [];
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      map.push({
        transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
        x: 0,
        y: 0,
        w: width,
        h: height
      });
    }
    this.paintInlineImageXObjectGroup(imgData, map);
  }
  applyTransferMapsToCanvas(ctx) {
    if (this.current.transferMaps !== "none") {
      ctx.filter = this.current.transferMaps;
      ctx.drawImage(ctx.canvas, 0, 0);
      ctx.filter = "none";
    }
    return ctx.canvas;
  }
  applyTransferMapsToBitmap(imgData) {
    if (this.current.transferMaps === "none") {
      return imgData.bitmap;
    }
    const {
      bitmap,
      width,
      height
    } = imgData;
    const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
    const tmpCtx = tmpCanvas.context;
    tmpCtx.filter = this.current.transferMaps;
    tmpCtx.drawImage(bitmap, 0, 0);
    tmpCtx.filter = "none";
    return tmpCanvas.canvas;
  }
  paintInlineImageXObject(imgData) {
    if (!this.contentVisible) {
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const ctx = this.ctx;
    this.save();
    const {
      filter
    } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
    ctx.scale(1 / width, -1 / height);
    let imgToPaint;
    if (imgData.bitmap) {
      imgToPaint = this.applyTransferMapsToBitmap(imgData);
    } else if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
      imgToPaint = imgData;
    } else {
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    const scaled = this._scaleImage(imgToPaint, getCurrentTransformInverse(ctx));
    ctx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(ctx), imgData.interpolate);
    drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
    this.compose();
    this.restore();
  }
  paintInlineImageXObjectGroup(imgData, map) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    let imgToPaint;
    if (imgData.bitmap) {
      imgToPaint = imgData.bitmap;
    } else {
      const w = imgData.width;
      const h = imgData.height;
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    for (const entry of map) {
      ctx.save();
      ctx.transform(...entry.transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, imgToPaint, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintSolidColorImageMask() {
    if (!this.contentVisible) {
      return;
    }
    this.ctx.fillRect(0, 0, 1, 1);
    this.compose();
  }
  markPoint(tag) {}
  markPointProps(tag, properties) {}
  beginMarkedContent(tag) {
    this.markedContentStack.push({
      visible: true
    });
  }
  beginMarkedContentProps(tag, properties) {
    if (tag === "OC") {
      this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(properties)
      });
    } else {
      this.markedContentStack.push({
        visible: true
      });
    }
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat() {}
  endCompat() {}
  consumePath(path, clipBox) {
    const isEmpty = this.current.isEmptyClip();
    if (this.pendingClip) {
      this.current.updateClipFromPath();
    }
    if (!this.pendingClip) {
      this.compose(clipBox);
    }
    const ctx = this.ctx;
    if (this.pendingClip) {
      if (!isEmpty) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip(path, "evenodd");
        } else {
          ctx.clip(path);
        }
      }
      this.pendingClip = null;
    }
    this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const m = getCurrentTransform(this.ctx);
      if (m[1] === 0 && m[2] === 0) {
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
      } else {
        const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
        const normX = Math.hypot(m[0], m[2]);
        const normY = Math.hypot(m[1], m[3]);
        this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth
      } = this.current;
      const {
        a,
        b,
        c,
        d
      } = this.ctx.getTransform();
      let scaleX, scaleY;
      if (b === 0 && c === 0) {
        const normX = Math.abs(a);
        const normY = Math.abs(d);
        if (normX === normY) {
          if (lineWidth === 0) {
            scaleX = scaleY = 1 / normX;
          } else {
            const scaledLineWidth = normX * lineWidth;
            scaleX = scaleY = scaledLineWidth < 1 ? 1 / scaledLineWidth : 1;
          }
        } else if (lineWidth === 0) {
          scaleX = 1 / normX;
          scaleY = 1 / normY;
        } else {
          const scaledXLineWidth = normX * lineWidth;
          const scaledYLineWidth = normY * lineWidth;
          scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
          scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
        }
      } else {
        const absDet = Math.abs(a * d - b * c);
        const normX = Math.hypot(a, b);
        const normY = Math.hypot(c, d);
        if (lineWidth === 0) {
          scaleX = normY / absDet;
          scaleY = normX / absDet;
        } else {
          const baseArea = lineWidth * absDet;
          scaleX = normY > baseArea ? normY / baseArea : 1;
          scaleY = normX > baseArea ? normX / baseArea : 1;
        }
      }
      this._cachedScaleForStroking[0] = scaleX;
      this._cachedScaleForStroking[1] = scaleY;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(path, saveRestore) {
    const {
      ctx,
      current: {
        lineWidth
      }
    } = this;
    const [scaleX, scaleY] = this.getScaleForStroking();
    if (scaleX === scaleY) {
      ctx.lineWidth = (lineWidth || 1) * scaleX;
      ctx.stroke(path);
      return;
    }
    const dashes = ctx.getLineDash();
    if (saveRestore) {
      ctx.save();
    }
    ctx.scale(scaleX, scaleY);
    SCALE_MATRIX.a = 1 / scaleX;
    SCALE_MATRIX.d = 1 / scaleY;
    const newPath = new Path2D();
    newPath.addPath(path, SCALE_MATRIX);
    if (dashes.length > 0) {
      const scale = Math.max(scaleX, scaleY);
      ctx.setLineDash(dashes.map(x => x / scale));
      ctx.lineDashOffset /= scale;
    }
    ctx.lineWidth = lineWidth || 1;
    ctx.stroke(newPath);
    if (saveRestore) {
      ctx.restore();
    }
  }
  isContentVisible() {
    for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
      if (!this.markedContentStack[i].visible) {
        return false;
      }
    }
    return true;
  }
}
for (const op in OPS) {
  if (CanvasGraphics.prototype[op] !== undefined) {
    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
  }
}
class GlobalWorkerOptions {
  static #port = null;
  static #src = "";
  static get workerPort() {
    return this.#port;
  }
  static set workerPort(val) {
    if (!(typeof Worker !== "undefined" && val instanceof Worker) && val !== null) {
      throw new Error("Invalid `workerPort` type.");
    }
    this.#port = val;
  }
  static get workerSrc() {
    return this.#src;
  }
  static set workerSrc(val) {
    if (typeof val !== "string") {
      throw new Error("Invalid `workerSrc` type.");
    }
    this.#src = val;
  }
}
class Metadata {
  #map;
  #data;
  constructor({
    parsedData,
    rawData
  }) {
    this.#map = parsedData;
    this.#data = rawData;
  }
  getRaw() {
    return this.#data;
  }
  get(name) {
    return this.#map.get(name) ?? null;
  }
  [Symbol.iterator]() {
    return this.#map.entries();
  }
}


const INTERNAL = Symbol("INTERNAL");
class OptionalContentGroup {
  #isDisplay = false;
  #isPrint = false;
  #userSet = false;
  #visible = true;
  constructor(renderingIntent, {
    name,
    intent,
    usage,
    rbGroups
  }) {
    this.#isDisplay = !!(renderingIntent & RenderingIntentFlag.DISPLAY);
    this.#isPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    this.name = name;
    this.intent = intent;
    this.usage = usage;
    this.rbGroups = rbGroups;
  }
  get visible() {
    if (this.#userSet) {
      return this.#visible;
    }
    if (!this.#visible) {
      return false;
    }
    const {
      print,
      view
    } = this.usage;
    if (this.#isDisplay) {
      return view?.viewState !== "OFF";
    } else if (this.#isPrint) {
      return print?.printState !== "OFF";
    }
    return true;
  }
  _setVisible(internal, visible, userSet = false) {
    if (internal !== INTERNAL) {
      unreachable("Internal method `_setVisible` called.");
    }
    this.#userSet = userSet;
    this.#visible = visible;
  }
}
class OptionalContentConfig {
  #cachedGetHash = null;
  #groups = new Map();
  #initialHash = null;
  #order = null;
  constructor(data, renderingIntent = RenderingIntentFlag.DISPLAY) {
    this.renderingIntent = renderingIntent;
    this.name = null;
    this.creator = null;
    if (data === null) {
      return;
    }
    this.name = data.name;
    this.creator = data.creator;
    this.#order = data.order;
    for (const group of data.groups) {
      this.#groups.set(group.id, new OptionalContentGroup(renderingIntent, group));
    }
    if (data.baseState === "OFF") {
      for (const group of this.#groups.values()) {
        group._setVisible(INTERNAL, false);
      }
    }
    for (const on of data.on) {
      this.#groups.get(on)._setVisible(INTERNAL, true);
    }
    for (const off of data.off) {
      this.#groups.get(off)._setVisible(INTERNAL, false);
    }
    this.#initialHash = this.getHash();
  }
  #evaluateVisibilityExpression(array) {
    const length = array.length;
    if (length < 2) {
      return true;
    }
    const operator = array[0];
    for (let i = 1; i < length; i++) {
      const element = array[i];
      let state;
      if (Array.isArray(element)) {
        state = this.#evaluateVisibilityExpression(element);
      } else if (this.#groups.has(element)) {
        state = this.#groups.get(element).visible;
      } else {
        warn(`Optional content group not found: ${element}`);
        return true;
      }
      switch (operator) {
        case "And":
          if (!state) {
            return false;
          }
          break;
        case "Or":
          if (state) {
            return true;
          }
          break;
        case "Not":
          return !state;
        default:
          return true;
      }
    }
    return operator === "And";
  }
  isVisible(group) {
    if (this.#groups.size === 0) {
      return true;
    }
    if (!group) {
      info("Optional content group not defined.");
      return true;
    }
    if (group.type === "OCG") {
      if (!this.#groups.has(group.id)) {
        warn(`Optional content group not found: ${group.id}`);
        return true;
      }
      return this.#groups.get(group.id).visible;
    } else if (group.type === "OCMD") {
      if (group.expression) {
        return this.#evaluateVisibilityExpression(group.expression);
      }
      if (!group.policy || group.policy === "AnyOn") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (this.#groups.get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOn") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!this.#groups.get(id).visible) {
            return false;
          }
        }
        return true;
      } else if (group.policy === "AnyOff") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!this.#groups.get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOff") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (this.#groups.get(id).visible) {
            return false;
          }
        }
        return true;
      }
      warn(`Unknown optional content policy ${group.policy}.`);
      return true;
    }
    warn(`Unknown group type ${group.type}.`);
    return true;
  }
  setVisibility(id, visible = true, preserveRB = true) {
    const group = this.#groups.get(id);
    if (!group) {
      warn(`Optional content group not found: ${id}`);
      return;
    }
    if (preserveRB && visible && group.rbGroups.length) {
      for (const rbGroup of group.rbGroups) {
        for (const otherId of rbGroup) {
          if (otherId !== id) {
            this.#groups.get(otherId)?._setVisible(INTERNAL, false, true);
          }
        }
      }
    }
    group._setVisible(INTERNAL, !!visible, true);
    this.#cachedGetHash = null;
  }
  setOCGState({
    state,
    preserveRB
  }) {
    let operator;
    for (const elem of state) {
      switch (elem) {
        case "ON":
        case "OFF":
        case "Toggle":
          operator = elem;
          continue;
      }
      const group = this.#groups.get(elem);
      if (!group) {
        continue;
      }
      switch (operator) {
        case "ON":
          this.setVisibility(elem, true, preserveRB);
          break;
        case "OFF":
          this.setVisibility(elem, false, preserveRB);
          break;
        case "Toggle":
          this.setVisibility(elem, !group.visible, preserveRB);
          break;
      }
    }
    this.#cachedGetHash = null;
  }
  get hasInitialVisibility() {
    return this.#initialHash === null || this.getHash() === this.#initialHash;
  }
  getOrder() {
    if (!this.#groups.size) {
      return null;
    }
    if (this.#order) {
      return this.#order.slice();
    }
    return [...this.#groups.keys()];
  }
  getGroup(id) {
    return this.#groups.get(id) || null;
  }
  getHash() {
    if (this.#cachedGetHash !== null) {
      return this.#cachedGetHash;
    }
    const hash = new MurmurHash3_64();
    for (const [id, group] of this.#groups) {
      hash.update(`${id}:${group.visible}`);
    }
    return this.#cachedGetHash = hash.hexdigest();
  }
  [Symbol.iterator]() {
    return this.#groups.entries();
  }
}


class PDFDataTransportStream {
  constructor(pdfDataRangeTransport, {
    disableRange = false,
    disableStream = false
  }) {
    assert(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length,
      initialData,
      progressiveDone,
      contentDispositionFilename
    } = pdfDataRangeTransport;
    this._queuedChunks = [];
    this._progressiveDone = progressiveDone;
    this._contentDispositionFilename = contentDispositionFilename;
    if (initialData?.length > 0) {
      const buffer = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }
    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    this._contentLength = length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    pdfDataRangeTransport.addRangeListener((begin, chunk) => {
      this._onReceiveData({
        begin,
        chunk
      });
    });
    pdfDataRangeTransport.addProgressListener((loaded, total) => {
      this._onProgress({
        loaded,
        total
      });
    });
    pdfDataRangeTransport.addProgressiveReadListener(chunk => {
      this._onReceiveData({
        chunk
      });
    });
    pdfDataRangeTransport.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    pdfDataRangeTransport.transportReady();
  }
  _onReceiveData({
    begin,
    chunk
  }) {
    const buffer = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
    if (begin === undefined) {
      if (this._fullRequestReader) {
        this._fullRequestReader._enqueue(buffer);
      } else {
        this._queuedChunks.push(buffer);
      }
    } else {
      const found = this._rangeReaders.some(function (rangeReader) {
        if (rangeReader._begin !== begin) {
          return false;
        }
        rangeReader._enqueue(buffer);
        return true;
      });
      assert(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(evt) {
    if (evt.total === undefined) {
      this._rangeReaders[0]?.onProgress?.({
        loaded: evt.loaded
      });
    } else {
      this._fullRequestReader?.onProgress?.({
        loaded: evt.loaded,
        total: evt.total
      });
    }
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(reader) {
    const i = this._rangeReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeReaders.splice(i, 1);
    }
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const queuedChunks = this._queuedChunks;
    this._queuedChunks = null;
    return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
    this._pdfDataRangeTransport.requestDataRange(begin, end);
    this._rangeReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeReaders.slice(0)) {
      reader.cancel(reason);
    }
    this._pdfDataRangeTransport.abort();
  }
}
class PDFDataTransportStreamReader {
  constructor(stream, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
    this._stream = stream;
    this._done = progressiveDone || false;
    this._filename = isPdfFile(contentDispositionFilename) ? contentDispositionFilename : null;
    this._queuedChunks = queuedChunks || [];
    this._loaded = 0;
    for (const chunk of this._queuedChunks) {
      this._loaded += chunk.byteLength;
    }
    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunks.push(chunk);
    }
    this._loaded += chunk.byteLength;
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      const chunk = this._queuedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
  }
  progressiveDone() {
    if (this._done) {
      return;
    }
    this._done = true;
  }
}
class PDFDataTransportStreamRangeReader {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length === 0) {
      this._queuedChunk = chunk;
    } else {
      const requestsCapability = this._requests.shift();
      requestsCapability.resolve({
        value: chunk,
        done: false
      });
      for (const requestCapability of this._requests) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      }
      this._requests.length = 0;
    }
    this._done = true;
    this._stream._removeRangeReader(this);
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    this._stream._removeRangeReader(this);
  }
}

function getFilenameFromContentDispositionHeader(contentDisposition) {
  let needsEncodingFixup = true;
  let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    const filename = rfc2047decode(tmp);
    return fixupEncoding(filename);
  }
  tmp = toParamRegExp("filename", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  function toParamRegExp(attributePattern, flags) {
    return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(value);
        value = decoder.decode(buffer);
        needsEncodingFixup = false;
      } catch {}
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode("utf-8", value);
      if (needsEncodingFixup) {
        value = textdecode("iso-8859-1", value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDispositionStr) {
    const matches = [];
    let match;
    const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((match = iter.exec(contentDispositionStr)) !== null) {
      let [, n, quot, part] = match;
      n = parseInt(n, 10);
      if (n in matches) {
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    const parts = [];
    for (let n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        break;
      }
      let [quot, part] = matches[n];
      part = rfc2616unquote(part);
      if (quot) {
        part = unescape(part);
        if (n === 0) {
          part = rfc5987decode(part);
        }
      }
      parts.push(part);
    }
    return parts.join("");
  }
  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      const parts = value.slice(1).split('\\"');
      for (let i = 0; i < parts.length; ++i) {
        const quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }
        parts[i] = parts[i].replaceAll(/\\(.)/g, "$1");
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    const encodingend = extvalue.indexOf("'");
    if (encodingend === -1) {
      return extvalue;
    }
    const encoding = extvalue.slice(0, encodingend);
    const langvalue = extvalue.slice(encodingend + 1);
    const value = langvalue.replace(/^[^']*'/, "");
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (matches, charset, encoding, text) {
      if (encoding === "q" || encoding === "Q") {
        text = text.replaceAll("_", " ");
        text = text.replaceAll(/=([0-9a-fA-F]{2})/g, function (match, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }
      try {
        text = atob(text);
      } catch {}
      return textdecode(charset, text);
    });
  }
  return "";
}



function createHeaders(isHttp, httpHeaders) {
  const headers = new Headers();
  if (!isHttp || !httpHeaders || typeof httpHeaders !== "object") {
    return headers;
  }
  for (const key in httpHeaders) {
    const val = httpHeaders[key];
    if (val !== undefined) {
      headers.append(key, val);
    }
  }
  return headers;
}
function getResponseOrigin(url) {
  return URL.parse(url)?.origin ?? null;
}
function validateRangeRequestCapabilities({
  responseHeaders,
  isHttp,
  rangeChunkSize,
  disableRange
}) {
  const returnValues = {
    allowRangeRequests: false,
    suggestedLength: undefined
  };
  const length = parseInt(responseHeaders.get("Content-Length"), 10);
  if (!Number.isInteger(length)) {
    return returnValues;
  }
  returnValues.suggestedLength = length;
  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }
  if (disableRange || !isHttp) {
    return returnValues;
  }
  if (responseHeaders.get("Accept-Ranges") !== "bytes") {
    return returnValues;
  }
  const contentEncoding = responseHeaders.get("Content-Encoding") || "identity";
  if (contentEncoding !== "identity") {
    return returnValues;
  }
  returnValues.allowRangeRequests = true;
  return returnValues;
}
function extractFilenameFromHeader(responseHeaders) {
  const contentDisposition = responseHeaders.get("Content-Disposition");
  if (contentDisposition) {
    let filename = getFilenameFromContentDispositionHeader(contentDisposition);
    if (filename.includes("%")) {
      try {
        filename = decodeURIComponent(filename);
      } catch {}
    }
    if (isPdfFile(filename)) {
      return filename;
    }
  }
  return null;
}
function createResponseError(status, url) {
  return new ResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status, status === 404 || status === 0 && url.startsWith("file:"));
}
function validateResponseStatus(status) {
  return status === 200 || status === 206;
}


function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: "GET",
    headers,
    signal: abortController.signal,
    mode: "cors",
    credentials: withCredentials ? "include" : "same-origin",
    redirect: "follow"
  };
}
function getArrayBuffer(val) {
  if (val instanceof Uint8Array) {
    return val.buffer;
  }
  if (val instanceof ArrayBuffer) {
    return val;
  }
  warn(`getArrayBuffer - unexpected data format: ${val}`);
  return new Uint8Array(val).buffer;
}
class PDFFetchStream {
  _responseOrigin = null;
  constructor(source) {
    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.headers = createHeaders(this.isHttp, source.httpHeaders);
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFFetchStreamReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new PDFFetchStreamRangeReader(this, begin, end);
    this._rangeRequestReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
}
class PDFFetchStreamReader {
  constructor(stream) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    const source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._contentLength = source.length;
    this._headersCapability = Promise.withResolvers();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._abortController = new AbortController();
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    const headers = new Headers(stream.headers);
    const url = source.url;
    fetch(url, createFetchOptions(headers, this._withCredentials, this._abortController)).then(response => {
      stream._responseOrigin = getResponseOrigin(response.url);
      if (!validateResponseStatus(response.status)) {
        throw createResponseError(response.status, url);
      }
      this._reader = response.body.getReader();
      this._headersCapability.resolve();
      const responseHeaders = response.headers;
      const {
        allowRangeRequests,
        suggestedLength
      } = validateRangeRequestCapabilities({
        responseHeaders,
        isHttp: stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = extractFilenameFromHeader(responseHeaders);
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException("Streaming is disabled."));
      }
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
    this._abortController.abort();
  }
}
class PDFFetchStreamRangeReader {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    const source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._readCapability = Promise.withResolvers();
    this._isStreamingSupported = !source.disableStream;
    this._abortController = new AbortController();
    const headers = new Headers(stream.headers);
    headers.append("Range", `bytes=${begin}-${end - 1}`);
    const url = source.url;
    fetch(url, createFetchOptions(headers, this._withCredentials, this._abortController)).then(response => {
      const responseOrigin = getResponseOrigin(response.url);
      if (responseOrigin !== stream._responseOrigin) {
        throw new Error(`Expected range response-origin "${responseOrigin}" to match "${stream._responseOrigin}".`);
      }
      if (!validateResponseStatus(response.status)) {
        throw createResponseError(response.status, url);
      }
      this._readCapability.resolve();
      this._reader = response.body.getReader();
    }).catch(this._readCapability.reject);
    this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded
    });
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
    this._abortController.abort();
  }
}


const OK_RESPONSE = 200;
const PARTIAL_CONTENT_RESPONSE = 206;
function network_getArrayBuffer(xhr) {
  const data = xhr.response;
  if (typeof data !== "string") {
    return data;
  }
  return stringToBytes(data).buffer;
}
class NetworkManager {
  _responseOrigin = null;
  constructor({
    url,
    httpHeaders,
    withCredentials
  }) {
    this.url = url;
    this.isHttp = /^https?:/i.test(url);
    this.headers = createHeaders(this.isHttp, httpHeaders);
    this.withCredentials = withCredentials || false;
    this.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }
  request(args) {
    const xhr = new XMLHttpRequest();
    const xhrId = this.currXhrId++;
    const pendingRequest = this.pendingRequests[xhrId] = {
      xhr
    };
    xhr.open("GET", this.url);
    xhr.withCredentials = this.withCredentials;
    for (const [key, val] of this.headers) {
      xhr.setRequestHeader(key, val);
    }
    if (this.isHttp && "begin" in args && "end" in args) {
      xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
      pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
    } else {
      pendingRequest.expectedStatus = OK_RESPONSE;
    }
    xhr.responseType = "arraybuffer";
    assert(args.onError, "Expected `onError` callback to be provided.");
    xhr.onerror = () => {
      args.onError(xhr.status);
    };
    xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
    xhr.onprogress = this.onProgress.bind(this, xhrId);
    pendingRequest.onHeadersReceived = args.onHeadersReceived;
    pendingRequest.onDone = args.onDone;
    pendingRequest.onError = args.onError;
    pendingRequest.onProgress = args.onProgress;
    xhr.send(null);
    return xhrId;
  }
  onProgress(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    pendingRequest.onProgress?.(evt);
  }
  onStateChange(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    const xhr = pendingRequest.xhr;
    if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
      pendingRequest.onHeadersReceived();
      delete pendingRequest.onHeadersReceived;
    }
    if (xhr.readyState !== 4) {
      return;
    }
    if (!(xhrId in this.pendingRequests)) {
      return;
    }
    delete this.pendingRequests[xhrId];
    if (xhr.status === 0 && this.isHttp) {
      pendingRequest.onError(xhr.status);
      return;
    }
    const xhrStatus = xhr.status || OK_RESPONSE;
    const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
    if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
      pendingRequest.onError(xhr.status);
      return;
    }
    const chunk = network_getArrayBuffer(xhr);
    if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
      const rangeHeader = xhr.getResponseHeader("Content-Range");
      const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
      if (matches) {
        pendingRequest.onDone({
          begin: parseInt(matches[1], 10),
          chunk
        });
      } else {
        warn(`Missing or invalid "Content-Range" header.`);
        pendingRequest.onError(0);
      }
    } else if (chunk) {
      pendingRequest.onDone({
        begin: 0,
        chunk
      });
    } else {
      pendingRequest.onError(xhr.status);
    }
  }
  getRequestXhr(xhrId) {
    return this.pendingRequests[xhrId].xhr;
  }
  isPendingRequest(xhrId) {
    return xhrId in this.pendingRequests;
  }
  abortRequest(xhrId) {
    const xhr = this.pendingRequests[xhrId].xhr;
    delete this.pendingRequests[xhrId];
    xhr.abort();
  }
}
class PDFNetworkStream {
  constructor(source) {
    this._source = source;
    this._manager = new NetworkManager(source);
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(reader) {
    const i = this._rangeRequestReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeRequestReaders.splice(i, 1);
    }
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
    return this._fullRequestReader;
  }
  getRangeReader(begin, end) {
    const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
    reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
}
class PDFNetworkStreamFullRequestReader {
  constructor(manager, source) {
    this._manager = manager;
    this._url = source.url;
    this._fullRequestId = manager.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    });
    this._headersCapability = Promise.withResolvers();
    this._disableRange = source.disableRange || false;
    this._contentLength = source.length;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = undefined;
    this._filename = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    const fullRequestXhrId = this._fullRequestId;
    const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
    this._manager._responseOrigin = getResponseOrigin(fullRequestXhr.responseURL);
    const rawResponseHeaders = fullRequestXhr.getAllResponseHeaders();
    const responseHeaders = new Headers(rawResponseHeaders ? rawResponseHeaders.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map(x => {
      const [key, ...val] = x.split(": ");
      return [key, val.join(": ")];
    }) : []);
    const {
      allowRangeRequests,
      suggestedLength
    } = validateRangeRequestCapabilities({
      responseHeaders,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    if (allowRangeRequests) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = extractFilenameFromHeader(responseHeaders);
    if (this._isRangeSupported) {
      this._manager.abortRequest(fullRequestXhrId);
    }
    this._headersCapability.resolve();
  }
  _onDone(data) {
    if (data) {
      if (this._requests.length > 0) {
        const requestCapability = this._requests.shift();
        requestCapability.resolve({
          value: data.chunk,
          done: false
        });
      } else {
        this._cachedChunks.push(data.chunk);
      }
    }
    this._done = true;
    if (this._cachedChunks.length > 0) {
      return;
    }
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
  }
  _onError(status) {
    this._storedError = createResponseError(status, this._url);
    this._headersCapability.reject(this._storedError);
    for (const requestCapability of this._requests) {
      requestCapability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(evt) {
    this.onProgress?.({
      loaded: evt.loaded,
      total: evt.lengthComputable ? evt.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    await this._headersCapability.promise;
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._cachedChunks.length > 0) {
      const chunk = this._cachedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    this._headersCapability.reject(reason);
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
}
class PDFNetworkStreamRangeRequestReader {
  constructor(manager, begin, end) {
    this._manager = manager;
    this._url = manager.url;
    this._requestId = manager.request({
      begin,
      end,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    });
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this._storedError = undefined;
    this.onProgress = null;
    this.onClosed = null;
  }
  _onHeadersReceived() {
    const responseOrigin = getResponseOrigin(this._manager.getRequestXhr(this._requestId)?.responseURL);
    if (responseOrigin !== this._manager._responseOrigin) {
      this._storedError = new Error(`Expected range response-origin "${responseOrigin}" to match "${this._manager._responseOrigin}".`);
      this._onError(0);
    }
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone(data) {
    const chunk = data.chunk;
    if (this._requests.length > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunk = chunk;
    }
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    this._close();
  }
  _onError(status) {
    this._storedError ??= createResponseError(status, this._url);
    for (const requestCapability of this._requests) {
      requestCapability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  _onProgress(evt) {
    if (!this.isStreamingSupported) {
      this.onProgress?.({
        loaded: evt.loaded
      });
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._queuedChunk !== null) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    this._close();
  }
}


const urlRegex = /^[a-z][a-z0-9\-+.]+:/i;
function parseUrlOrPath(sourceUrl) {
  if (urlRegex.test(sourceUrl)) {
    return new URL(sourceUrl);
  }
  const url = process.getBuiltinModule("url");
  return new URL(url.pathToFileURL(sourceUrl));
}
class PDFNodeStream {
  constructor(source) {
    this.source = source;
    this.url = parseUrlOrPath(source.url);
    assert(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNodeStreamFsFullReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(start, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const rangeReader = new PDFNodeStreamFsRangeReader(this, start, end);
    this._rangeRequestReaders.push(rangeReader);
    return rangeReader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
}
class PDFNodeStreamFsFullReader {
  constructor(stream) {
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    const source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    this._headersCapability = Promise.withResolvers();
    const fs = process.getBuiltinModule("fs");
    fs.promises.lstat(this._url).then(stat => {
      this._contentLength = stat.size;
      this._setReadableStream(fs.createReadStream(this._url));
      this._headersCapability.resolve();
    }, error => {
      if (error.code === "ENOENT") {
        error = createResponseError(0, this._url.href);
      }
      this._storedError = error;
      this._headersCapability.reject(error);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const chunk = this._readableStream.read();
    if (chunk === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += chunk.length;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
    const buffer = new Uint8Array(chunk).buffer;
    return {
      value: buffer,
      done: false
    };
  }
  cancel(reason) {
    if (!this._readableStream) {
      this._error(reason);
      return;
    }
    this._readableStream.destroy(reason);
  }
  _error(reason) {
    this._storedError = reason;
    this._readCapability.resolve();
  }
  _setReadableStream(readableStream) {
    this._readableStream = readableStream;
    readableStream.on("readable", () => {
      this._readCapability.resolve();
    });
    readableStream.on("end", () => {
      readableStream.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    readableStream.on("error", reason => {
      this._error(reason);
    });
    if (!this._isStreamingSupported && this._isRangeSupported) {
      this._error(new AbortException("streaming is disabled"));
    }
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
class PDFNodeStreamFsRangeReader {
  constructor(stream, start, end) {
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    const source = stream.source;
    this._isStreamingSupported = !source.disableStream;
    const fs = process.getBuiltinModule("fs");
    this._setReadableStream(fs.createReadStream(this._url, {
      start,
      end: end - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const chunk = this._readableStream.read();
    if (chunk === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += chunk.length;
    this.onProgress?.({
      loaded: this._loaded
    });
    const buffer = new Uint8Array(chunk).buffer;
    return {
      value: buffer,
      done: false
    };
  }
  cancel(reason) {
    if (!this._readableStream) {
      this._error(reason);
      return;
    }
    this._readableStream.destroy(reason);
  }
  _error(reason) {
    this._storedError = reason;
    this._readCapability.resolve();
  }
  _setReadableStream(readableStream) {
    this._readableStream = readableStream;
    readableStream.on("readable", () => {
      this._readCapability.resolve();
    });
    readableStream.on("end", () => {
      readableStream.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    readableStream.on("error", reason => {
      this._error(reason);
    });
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
const INITIAL_DATA = Symbol("INITIAL_DATA");
class PDFObjects {
  #objs = Object.create(null);
  #ensureObj(objId) {
    return this.#objs[objId] ||= {
      ...Promise.withResolvers(),
      data: INITIAL_DATA
    };
  }
  get(objId, callback = null) {
    if (callback) {
      const obj = this.#ensureObj(objId);
      obj.promise.then(() => callback(obj.data));
      return null;
    }
    const obj = this.#objs[objId];
    if (!obj || obj.data === INITIAL_DATA) {
      throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
    }
    return obj.data;
  }
  has(objId) {
    const obj = this.#objs[objId];
    return !!obj && obj.data !== INITIAL_DATA;
  }
  delete(objId) {
    const obj = this.#objs[objId];
    if (!obj || obj.data === INITIAL_DATA) {
      return false;
    }
    delete this.#objs[objId];
    return true;
  }
  resolve(objId, data = null) {
    const obj = this.#ensureObj(objId);
    obj.data = data;
    obj.resolve();
  }
  clear() {
    for (const objId in this.#objs) {
      const {
        data
      } = this.#objs[objId];
      data?.bitmap?.close();
    }
    this.#objs = Object.create(null);
  }
  *[Symbol.iterator]() {
    for (const objId in this.#objs) {
      const {
        data
      } = this.#objs[objId];
      if (data === INITIAL_DATA) {
        continue;
      }
      yield [objId, data];
    }
  }
}


const MAX_TEXT_DIVS_TO_RENDER = 100000;
const DEFAULT_FONT_SIZE = 30;
class TextLayer {
  #capability = Promise.withResolvers();
  #container = null;
  #disableProcessItems = false;
  #fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
  #lang = null;
  #layoutTextParams = null;
  #pageHeight = 0;
  #pageWidth = 0;
  #reader = null;
  #rootContainer = null;
  #rotation = 0;
  #scale = 0;
  #styleCache = Object.create(null);
  #textContentItemsStr = [];
  #textContentSource = null;
  #textDivs = [];
  #textDivProperties = new WeakMap();
  #transform = null;
  static #ascentCache = new Map();
  static #canvasContexts = new Map();
  static #canvasCtxFonts = new WeakMap();
  static #minFontSize = null;
  static #pendingTextLayers = new Set();
  constructor({
    textContentSource,
    container,
    viewport
  }) {
    if (textContentSource instanceof ReadableStream) {
      this.#textContentSource = textContentSource;
    } else if (typeof textContentSource === "object") {
      this.#textContentSource = new ReadableStream({
        start(controller) {
          controller.enqueue(textContentSource);
          controller.close();
        }
      });
    } else {
      throw new Error('No "textContentSource" parameter specified.');
    }
    this.#container = this.#rootContainer = container;
    this.#scale = viewport.scale * OutputScale.pixelRatio;
    this.#rotation = viewport.rotation;
    this.#layoutTextParams = {
      div: null,
      properties: null,
      ctx: null
    };
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    this.#transform = [1, 0, 0, -1, -pageX, pageY + pageHeight];
    this.#pageWidth = pageWidth;
    this.#pageHeight = pageHeight;
    TextLayer.#ensureMinFontSizeComputed();
    setLayerDimensions(container, viewport);
    this.#capability.promise.finally(() => {
      TextLayer.#pendingTextLayers.delete(this);
      this.#layoutTextParams = null;
      this.#styleCache = null;
    }).catch(() => {});
  }
  static get fontFamilyMap() {
    const {
      isWindows,
      isFirefox
    } = util_FeatureTest.platform;
    return shadow(this, "fontFamilyMap", new Map([["sans-serif", `${isWindows && isFirefox ? "Calibri, " : ""}sans-serif`], ["monospace", `${isWindows && isFirefox ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const pump = () => {
      this.#reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          this.#capability.resolve();
          return;
        }
        this.#lang ??= value.lang;
        Object.assign(this.#styleCache, value.styles);
        this.#processItems(value.items);
        pump();
      }, this.#capability.reject);
    };
    this.#reader = this.#textContentSource.getReader();
    TextLayer.#pendingTextLayers.add(this);
    pump();
    return this.#capability.promise;
  }
  update({
    viewport,
    onBefore = null
  }) {
    const scale = viewport.scale * OutputScale.pixelRatio;
    const rotation = viewport.rotation;
    if (rotation !== this.#rotation) {
      onBefore?.();
      this.#rotation = rotation;
      setLayerDimensions(this.#rootContainer, {
        rotation
      });
    }
    if (scale !== this.#scale) {
      onBefore?.();
      this.#scale = scale;
      const params = {
        div: null,
        properties: null,
        ctx: TextLayer.#getCtx(this.#lang)
      };
      for (const div of this.#textDivs) {
        params.properties = this.#textDivProperties.get(div);
        params.div = div;
        this.#layout(params);
      }
    }
  }
  cancel() {
    const abortEx = new AbortException("TextLayer task cancelled.");
    this.#reader?.cancel(abortEx).catch(() => {});
    this.#reader = null;
    this.#capability.reject(abortEx);
  }
  get textDivs() {
    return this.#textDivs;
  }
  get textContentItemsStr() {
    return this.#textContentItemsStr;
  }
  #processItems(items) {
    if (this.#disableProcessItems) {
      return;
    }
    this.#layoutTextParams.ctx ??= TextLayer.#getCtx(this.#lang);
    const textDivs = this.#textDivs,
      textContentItemsStr = this.#textContentItemsStr;
    for (const item of items) {
      if (textDivs.length > MAX_TEXT_DIVS_TO_RENDER) {
        warn("Ignoring additional textDivs for performance reasons.");
        this.#disableProcessItems = true;
        return;
      }
      if (item.str === undefined) {
        if (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
          const parent = this.#container;
          this.#container = document.createElement("span");
          this.#container.classList.add("markedContent");
          if (item.id !== null) {
            this.#container.setAttribute("id", `${item.id}`);
          }
          parent.append(this.#container);
        } else if (item.type === "endMarkedContent") {
          this.#container = this.#container.parentNode;
        }
        continue;
      }
      textContentItemsStr.push(item.str);
      this.#appendText(item);
    }
  }
  #appendText(geom) {
    const textDiv = document.createElement("span");
    const textDivProperties = {
      angle: 0,
      canvasWidth: 0,
      hasText: geom.str !== "",
      hasEOL: geom.hasEOL,
      fontSize: 0
    };
    this.#textDivs.push(textDiv);
    const tx = Util.transform(this.#transform, geom.transform);
    let angle = Math.atan2(tx[1], tx[0]);
    const style = this.#styleCache[geom.fontName];
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    let fontFamily = this.#fontInspectorEnabled && style.fontSubstitution || style.fontFamily;
    fontFamily = TextLayer.fontFamilyMap.get(fontFamily) || fontFamily;
    const fontHeight = Math.hypot(tx[2], tx[3]);
    const fontAscent = fontHeight * TextLayer.#getAscent(fontFamily, style, this.#lang);
    let left, top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }
    const scaleFactorStr = "calc(var(--total-scale-factor) *";
    const divStyle = textDiv.style;
    if (this.#container === this.#rootContainer) {
      divStyle.left = `${(100 * left / this.#pageWidth).toFixed(2)}%`;
      divStyle.top = `${(100 * top / this.#pageHeight).toFixed(2)}%`;
    } else {
      divStyle.left = `${scaleFactorStr}${left.toFixed(2)}px)`;
      divStyle.top = `${scaleFactorStr}${top.toFixed(2)}px)`;
    }
    divStyle.fontSize = `${scaleFactorStr}${(TextLayer.#minFontSize * fontHeight).toFixed(2)}px)`;
    divStyle.fontFamily = fontFamily;
    textDivProperties.fontSize = fontHeight;
    textDiv.setAttribute("role", "presentation");
    textDiv.textContent = geom.str;
    textDiv.dir = geom.dir;
    if (this.#fontInspectorEnabled) {
      textDiv.dataset.fontName = style.fontSubstitutionLoadedName || geom.fontName;
    }
    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }
    let shouldScaleText = false;
    if (geom.str.length > 1) {
      shouldScaleText = true;
    } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
      const absScaleX = Math.abs(geom.transform[0]),
        absScaleY = Math.abs(geom.transform[3]);
      if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
        shouldScaleText = true;
      }
    }
    if (shouldScaleText) {
      textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
    }
    this.#textDivProperties.set(textDiv, textDivProperties);
    this.#layoutTextParams.div = textDiv;
    this.#layoutTextParams.properties = textDivProperties;
    this.#layout(this.#layoutTextParams);
    if (textDivProperties.hasText) {
      this.#container.append(textDiv);
    }
    if (textDivProperties.hasEOL) {
      const br = document.createElement("br");
      br.setAttribute("role", "presentation");
      this.#container.append(br);
    }
  }
  #layout(params) {
    const {
      div,
      properties,
      ctx
    } = params;
    const {
      style
    } = div;
    let transform = "";
    if (TextLayer.#minFontSize > 1) {
      transform = `scale(${1 / TextLayer.#minFontSize})`;
    }
    if (properties.canvasWidth !== 0 && properties.hasText) {
      const {
        fontFamily
      } = style;
      const {
        canvasWidth,
        fontSize
      } = properties;
      TextLayer.#ensureCtxFont(ctx, fontSize * this.#scale, fontFamily);
      const {
        width
      } = ctx.measureText(div.textContent);
      if (width > 0) {
        transform = `scaleX(${canvasWidth * this.#scale / width}) ${transform}`;
      }
    }
    if (properties.angle !== 0) {
      transform = `rotate(${properties.angle}deg) ${transform}`;
    }
    if (transform.length > 0) {
      style.transform = transform;
    }
  }
  static cleanup() {
    if (this.#pendingTextLayers.size > 0) {
      return;
    }
    this.#ascentCache.clear();
    for (const {
      canvas
    } of this.#canvasContexts.values()) {
      canvas.remove();
    }
    this.#canvasContexts.clear();
  }
  static #getCtx(lang = null) {
    let ctx = this.#canvasContexts.get(lang ||= "");
    if (!ctx) {
      const canvas = document.createElement("canvas");
      canvas.className = "hiddenCanvasElement";
      canvas.lang = lang;
      document.body.append(canvas);
      ctx = canvas.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      });
      this.#canvasContexts.set(lang, ctx);
      this.#canvasCtxFonts.set(ctx, {
        size: 0,
        family: ""
      });
    }
    return ctx;
  }
  static #ensureCtxFont(ctx, size, family) {
    const cached = this.#canvasCtxFonts.get(ctx);
    if (size === cached.size && family === cached.family) {
      return;
    }
    ctx.font = `${size}px ${family}`;
    cached.size = size;
    cached.family = family;
  }
  static #ensureMinFontSizeComputed() {
    if (this.#minFontSize !== null) {
      return;
    }
    const div = document.createElement("div");
    div.style.opacity = 0;
    div.style.lineHeight = 1;
    div.style.fontSize = "1px";
    div.style.position = "absolute";
    div.textContent = "X";
    document.body.append(div);
    this.#minFontSize = div.getBoundingClientRect().height;
    div.remove();
  }
  static #getAscent(fontFamily, style, lang) {
    const cachedAscent = this.#ascentCache.get(fontFamily);
    if (cachedAscent) {
      return cachedAscent;
    }
    const ctx = this.#getCtx(lang);
    ctx.canvas.width = ctx.canvas.height = DEFAULT_FONT_SIZE;
    this.#ensureCtxFont(ctx, DEFAULT_FONT_SIZE, fontFamily);
    const metrics = ctx.measureText("");
    const ascent = metrics.fontBoundingBoxAscent;
    const descent = Math.abs(metrics.fontBoundingBoxDescent);
    ctx.canvas.width = ctx.canvas.height = 0;
    let ratio = 0.8;
    if (ascent) {
      ratio = ascent / (ascent + descent);
    } else {
      if (util_FeatureTest.platform.isFirefox) {
        warn("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference " + "in `about:config` to improve TextLayer rendering.");
      }
      if (style.ascent) {
        ratio = style.ascent;
      } else if (style.descent) {
        ratio = 1 + style.descent;
      }
    }
    this.#ascentCache.set(fontFamily, ratio);
    return ratio;
  }
}
class XfaText {
  static textContent(xfa) {
    const items = [];
    const output = {
      items,
      styles: Object.create(null)
    };
    function walk(node) {
      if (!node) {
        return;
      }
      let str = null;
      const name = node.name;
      if (name === "#text") {
        str = node.value;
      } else if (!XfaText.shouldBuildText(name)) {
        return;
      } else if (node?.attributes?.textContent) {
        str = node.attributes.textContent;
      } else if (node.value) {
        str = node.value;
      }
      if (str !== null) {
        items.push({
          str
        });
      }
      if (!node.children) {
        return;
      }
      for (const child of node.children) {
        walk(child);
      }
    }
    walk(xfa);
    return output;
  }
  static shouldBuildText(name) {
    return !(name === "textarea" || name === "input" || name === "option" || name === "select");
  }
}























const RENDERING_CANCELLED_TIMEOUT = 100;
function getDocument(src = {}) {
  if (typeof src === "string" || src instanceof URL) {
    src = {
      url: src
    };
  } else if (src instanceof ArrayBuffer || ArrayBuffer.isView(src)) {
    src = {
      data: src
    };
  }
  const task = new PDFDocumentLoadingTask();
  const {
    docId
  } = task;
  const url = src.url ? getUrlProp(src.url) : null;
  const data = src.data ? getDataProp(src.data) : null;
  const httpHeaders = src.httpHeaders || null;
  const withCredentials = src.withCredentials === true;
  const password = src.password ?? null;
  const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
  const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : 2 ** 16;
  let worker = src.worker instanceof PDFWorker ? src.worker : null;
  const verbosity = src.verbosity;
  const docBaseUrl = typeof src.docBaseUrl === "string" && !isDataScheme(src.docBaseUrl) ? src.docBaseUrl : null;
  const cMapUrl = getFactoryUrlProp(src.cMapUrl);
  const cMapPacked = src.cMapPacked !== false;
  const CMapReaderFactory = src.CMapReaderFactory || (isNodeJS ? NodeCMapReaderFactory : DOMCMapReaderFactory);
  const iccUrl = getFactoryUrlProp(src.iccUrl);
  const standardFontDataUrl = getFactoryUrlProp(src.standardFontDataUrl);
  const StandardFontDataFactory = src.StandardFontDataFactory || (isNodeJS ? NodeStandardFontDataFactory : DOMStandardFontDataFactory);
  const wasmUrl = getFactoryUrlProp(src.wasmUrl);
  const WasmFactory = src.WasmFactory || (isNodeJS ? NodeWasmFactory : DOMWasmFactory);
  const ignoreErrors = src.stopAtErrors !== true;
  const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
  const isEvalSupported = src.isEvalSupported !== false;
  const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !isNodeJS;
  const isImageDecoderSupported = typeof src.isImageDecoderSupported === "boolean" ? src.isImageDecoderSupported : !isNodeJS && (util_FeatureTest.platform.isFirefox || !globalThis.chrome);
  const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
  const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : isNodeJS;
  const fontExtraProperties = src.fontExtraProperties === true;
  const enableXfa = src.enableXfa === true;
  const ownerDocument = src.ownerDocument || globalThis.document;
  const disableRange = src.disableRange === true;
  const disableStream = src.disableStream === true;
  const disableAutoFetch = src.disableAutoFetch === true;
  const pdfBug = src.pdfBug === true;
  const CanvasFactory = src.CanvasFactory || (isNodeJS ? NodeCanvasFactory : DOMCanvasFactory);
  const FilterFactory = src.FilterFactory || (isNodeJS ? NodeFilterFactory : DOMFilterFactory);
  const enableHWA = src.enableHWA === true;
  const useWasm = src.useWasm !== false;
  const length = rangeTransport ? rangeTransport.length : src.length ?? NaN;
  const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !isNodeJS && !disableFontFace;
  const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : !!(CMapReaderFactory === DOMCMapReaderFactory && StandardFontDataFactory === DOMStandardFontDataFactory && WasmFactory === DOMWasmFactory && cMapUrl && standardFontDataUrl && wasmUrl && isValidFetchUrl(cMapUrl, document.baseURI) && isValidFetchUrl(standardFontDataUrl, document.baseURI) && isValidFetchUrl(wasmUrl, document.baseURI));
  const styleElement = null;
  setVerbosityLevel(verbosity);
  const transportFactory = {
    canvasFactory: new CanvasFactory({
      ownerDocument,
      enableHWA
    }),
    filterFactory: new FilterFactory({
      docId,
      ownerDocument
    }),
    cMapReaderFactory: useWorkerFetch ? null : new CMapReaderFactory({
      baseUrl: cMapUrl,
      isCompressed: cMapPacked
    }),
    standardFontDataFactory: useWorkerFetch ? null : new StandardFontDataFactory({
      baseUrl: standardFontDataUrl
    }),
    wasmFactory: useWorkerFetch ? null : new WasmFactory({
      baseUrl: wasmUrl
    })
  };
  if (!worker) {
    worker = PDFWorker.create({
      verbosity,
      port: GlobalWorkerOptions.workerPort
    });
    task._worker = worker;
  }
  const docParams = {
    docId,
    apiVersion: "5.3.31",
    data,
    password,
    disableAutoFetch,
    rangeChunkSize,
    length,
    docBaseUrl,
    enableXfa,
    evaluatorOptions: {
      maxImageSize,
      disableFontFace,
      ignoreErrors,
      isEvalSupported,
      isOffscreenCanvasSupported,
      isImageDecoderSupported,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      useSystemFonts,
      useWasm,
      useWorkerFetch,
      cMapUrl,
      iccUrl,
      standardFontDataUrl,
      wasmUrl
    }
  };
  const transportParams = {
    ownerDocument,
    pdfBug,
    styleElement,
    loadingParams: {
      disableAutoFetch,
      enableXfa
    }
  };
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error("Loading aborted");
    }
    if (worker.destroyed) {
      throw new Error("Worker was destroyed");
    }
    const workerIdPromise = worker.messageHandler.sendWithPromise("GetDocRequest", docParams, data ? [data.buffer] : null);
    let networkStream;
    if (rangeTransport) {
      networkStream = new PDFDataTransportStream(rangeTransport, {
        disableRange,
        disableStream
      });
    } else if (!data) {
      if (!url) {
        throw new Error("getDocument - no `url` parameter provided.");
      }
      const NetworkStream = isValidFetchUrl(url) ? PDFFetchStream : isNodeJS ? PDFNodeStream : PDFNetworkStream;
      networkStream = new NetworkStream({
        url,
        length,
        httpHeaders,
        withCredentials,
        rangeChunkSize,
        disableRange,
        disableStream
      });
    }
    return workerIdPromise.then(workerId => {
      if (task.destroyed) {
        throw new Error("Loading aborted");
      }
      if (worker.destroyed) {
        throw new Error("Worker was destroyed");
      }
      const messageHandler = new MessageHandler(docId, workerId, worker.port);
      const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory);
      task._transport = transport;
      messageHandler.send("Ready", null);
    });
  }).catch(task._capability.reject);
  return task;
}
class PDFDocumentLoadingTask {
  static #docId = 0;
  _capability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = `d${PDFDocumentLoadingTask.#docId++}`;
  destroyed = false;
  onPassword = null;
  onProgress = null;
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = true;
    try {
      if (this._worker?.port) {
        this._worker._pendingDestroy = true;
      }
      await this._transport?.destroy();
    } catch (ex) {
      if (this._worker?.port) {
        delete this._worker._pendingDestroy;
      }
      throw ex;
    }
    this._transport = null;
    this._worker?.destroy();
    this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
}
class PDFDataRangeTransport {
  #capability = Promise.withResolvers();
  #progressiveDoneListeners = [];
  #progressiveReadListeners = [];
  #progressListeners = [];
  #rangeListeners = [];
  constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this.contentDispositionFilename = contentDispositionFilename;
  }
  addRangeListener(listener) {
    this.#rangeListeners.push(listener);
  }
  addProgressListener(listener) {
    this.#progressListeners.push(listener);
  }
  addProgressiveReadListener(listener) {
    this.#progressiveReadListeners.push(listener);
  }
  addProgressiveDoneListener(listener) {
    this.#progressiveDoneListeners.push(listener);
  }
  onDataRange(begin, chunk) {
    for (const listener of this.#rangeListeners) {
      listener(begin, chunk);
    }
  }
  onDataProgress(loaded, total) {
    this.#capability.promise.then(() => {
      for (const listener of this.#progressListeners) {
        listener(loaded, total);
      }
    });
  }
  onDataProgressiveRead(chunk) {
    this.#capability.promise.then(() => {
      for (const listener of this.#progressiveReadListeners) {
        listener(chunk);
      }
    });
  }
  onDataProgressiveDone() {
    this.#capability.promise.then(() => {
      for (const listener of this.#progressiveDoneListeners) {
        listener();
      }
    });
  }
  transportReady() {
    this.#capability.resolve();
  }
  requestDataRange(begin, end) {
    unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {}
}
class PDFDocumentProxy {
  constructor(pdfInfo, transport) {
    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(pageNumber) {
    return this._transport.getPage(pageNumber);
  }
  getPageIndex(ref) {
    return this._transport.getPageIndex(ref);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(id) {
    return this._transport.getDestination(id);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getOptionalContentConfig(renderingIntent);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(keepLoadedFonts = false) {
    return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(ref) {
    return this._transport.cachedPageNumber(ref);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class PDFPageProxy {
  #pendingCleanup = false;
  constructor(pageIndex, pageInfo, transport, pdfBug = false) {
    this._pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new StatTimer() : null;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this._intentStates = new Map();
    this.destroyed = false;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale,
    rotation = this.rotate,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  getAnnotations({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getAnnotations(this._pageIndex, renderingIntent);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext,
    viewport,
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    transform = null,
    background = null,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null,
    isEditing = false
  }) {
    this._stats?.time("Overall");
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing);
    const {
      renderingIntent,
      cacheKey
    } = intentArgs;
    this.#pendingCleanup = false;
    optionalContentConfigPromise ||= this._transport.getOptionalContentConfig(renderingIntent);
    let intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      intentState = Object.create(null);
      this._intentStates.set(cacheKey, intentState);
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    const intentPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    if (!intentState.displayReadyCapability) {
      intentState.displayReadyCapability = Promise.withResolvers();
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    const complete = error => {
      intentState.renderTasks.delete(internalRenderTask);
      if (intentPrint) {
        this.#pendingCleanup = true;
      }
      this.#tryCleanup();
      if (error) {
        internalRenderTask.capability.reject(error);
        this._abortOperatorList({
          intentState,
          reason: error instanceof Error ? error : new Error(error)
        });
      } else {
        internalRenderTask.capability.resolve();
      }
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        if (globalThis.Stats?.enabled) {
          globalThis.Stats.add(this.pageNumber, this._stats);
        }
      }
    };
    const internalRenderTask = new InternalRenderTask({
      callback: complete,
      params: {
        canvasContext,
        viewport,
        transform,
        background
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap,
      operatorList: intentState.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !intentPrint,
      pdfBug: this._pdfBug,
      pageColors
    });
    (intentState.renderTasks ||= new Set()).add(internalRenderTask);
    const renderTask = internalRenderTask.task;
    Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
      if (this.destroyed) {
        complete();
        return;
      }
      this._stats?.time("Rendering");
      if (!(optionalContentConfig.renderingIntent & renderingIntent)) {
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` " + "and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      }
      internalRenderTask.initializeGraphics({
        transparency,
        optionalContentConfig
      });
      internalRenderTask.operatorListChanged();
    }).catch(complete);
    return renderTask;
  }
  getOperatorList({
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    printAnnotationStorage = null,
    isEditing = false
  } = {}) {
    function operatorListChanged() {
      if (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        intentState.renderTasks.delete(opListTask);
      }
    }
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing, true);
    let intentState = this._intentStates.get(intentArgs.cacheKey);
    if (!intentState) {
      intentState = Object.create(null);
      this._intentStates.set(intentArgs.cacheKey, intentState);
    }
    let opListTask;
    if (!intentState.opListReadCapability) {
      opListTask = Object.create(null);
      opListTask.operatorListChanged = operatorListChanged;
      intentState.opListReadCapability = Promise.withResolvers();
      (intentState.renderTasks ||= new Set()).add(opListTask);
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    return intentState.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent = false,
    disableNormalization = false
  } = {}) {
    const TEXT_CONTENT_CHUNK_SIZE = 100;
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: includeMarkedContent === true,
      disableNormalization: disableNormalization === true
    }, {
      highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
      size(textContent) {
        return textContent.items.length;
      }
    });
  }
  getTextContent(params = {}) {
    if (this._transport._htmlForXfa) {
      return this.getXfa().then(xfa => XfaText.textContent(xfa));
    }
    const readableStream = this.streamTextContent(params);
    return new Promise(function (resolve, reject) {
      function pump() {
        reader.read().then(function ({
          value,
          done
        }) {
          if (done) {
            resolve(textContent);
            return;
          }
          textContent.lang ??= value.lang;
          Object.assign(textContent.styles, value.styles);
          textContent.items.push(...value.items);
          pump();
        }, reject);
      }
      const reader = readableStream.getReader();
      const textContent = {
        items: [],
        styles: Object.create(null),
        lang: null
      };
      pump();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const waitOn = [];
    for (const intentState of this._intentStates.values()) {
      this._abortOperatorList({
        intentState,
        reason: new Error("Page was destroyed."),
        force: true
      });
      if (intentState.opListReadCapability) {
        continue;
      }
      for (const internalRenderTask of intentState.renderTasks) {
        waitOn.push(internalRenderTask.completed);
        internalRenderTask.cancel();
      }
    }
    this.objs.clear();
    this.#pendingCleanup = false;
    return Promise.all(waitOn);
  }
  cleanup(resetStats = false) {
    this.#pendingCleanup = true;
    const success = this.#tryCleanup();
    if (resetStats && success) {
      this._stats &&= new StatTimer();
    }
    return success;
  }
  #tryCleanup() {
    if (!this.#pendingCleanup || this.destroyed) {
      return false;
    }
    for (const {
      renderTasks,
      operatorList
    } of this._intentStates.values()) {
      if (renderTasks.size > 0 || !operatorList.lastChunk) {
        return false;
      }
    }
    this._intentStates.clear();
    this.objs.clear();
    this.#pendingCleanup = false;
    return true;
  }
  _startRenderPage(transparency, cacheKey) {
    const intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      return;
    }
    this._stats?.timeEnd("Page Request");
    intentState.displayReadyCapability?.resolve(transparency);
  }
  _renderPageChunk(operatorListChunk, intentState) {
    for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
      intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
      intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
    }
    intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
    intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
    for (const internalRenderTask of intentState.renderTasks) {
      internalRenderTask.operatorListChanged();
    }
    if (operatorListChunk.lastChunk) {
      this.#tryCleanup();
    }
  }
  _pumpOperatorList({
    renderingIntent,
    cacheKey,
    annotationStorageSerializable,
    modifiedIds
  }) {
    const {
      map,
      transfer
    } = annotationStorageSerializable;
    const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: renderingIntent,
      cacheKey,
      annotationStorage: map,
      modifiedIds
    }, transfer);
    const reader = readableStream.getReader();
    const intentState = this._intentStates.get(cacheKey);
    intentState.streamReader = reader;
    const pump = () => {
      reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          intentState.streamReader = null;
          return;
        }
        if (this._transport.destroyed) {
          return;
        }
        this._renderPageChunk(value, intentState);
        pump();
      }, reason => {
        intentState.streamReader = null;
        if (this._transport.destroyed) {
          return;
        }
        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          for (const internalRenderTask of intentState.renderTasks) {
            internalRenderTask.operatorListChanged();
          }
          this.#tryCleanup();
        }
        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(reason);
        } else if (intentState.opListReadCapability) {
          intentState.opListReadCapability.reject(reason);
        } else {
          throw reason;
        }
      });
    };
    pump();
  }
  _abortOperatorList({
    intentState,
    reason,
    force = false
  }) {
    if (!intentState.streamReader) {
      return;
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    if (!force) {
      if (intentState.renderTasks.size > 0) {
        return;
      }
      if (reason instanceof RenderingCancelledException) {
        let delay = RENDERING_CANCELLED_TIMEOUT;
        if (reason.extraDelay > 0 && reason.extraDelay < 1000) {
          delay += reason.extraDelay;
        }
        intentState.streamReaderCancelTimeout = setTimeout(() => {
          intentState.streamReaderCancelTimeout = null;
          this._abortOperatorList({
            intentState,
            reason,
            force: true
          });
        }, delay);
        return;
      }
    }
    intentState.streamReader.cancel(new AbortException(reason.message)).catch(() => {});
    intentState.streamReader = null;
    if (this._transport.destroyed) {
      return;
    }
    for (const [curCacheKey, curIntentState] of this._intentStates) {
      if (curIntentState === intentState) {
        this._intentStates.delete(curCacheKey);
        break;
      }
    }
    this.cleanup();
  }
  get stats() {
    return this._stats;
  }
}
class PDFWorker {
  #capability = Promise.withResolvers();
  #messageHandler = null;
  #port = null;
  #webWorker = null;
  static #fakeWorkerId = 0;
  static #isWorkerDisabled = false;
  static #workerPorts = new WeakMap();
  static {
    if (isNodeJS) {
      this.#isWorkerDisabled = true;
      GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
    }
    this._isSameOrigin = (baseUrl, otherUrl) => {
      const base = URL.parse(baseUrl);
      if (!base?.origin || base.origin === "null") {
        return false;
      }
      const other = new URL(otherUrl, base);
      return base.origin === other.origin;
    };
    this._createCDNWrapper = url => {
      const wrapper = `await import("${url}");`;
      return URL.createObjectURL(new Blob([wrapper], {
        type: "text/javascript"
      }));
    };
    this.fromPort = params => {
      deprecated("`PDFWorker.fromPort` - please use `PDFWorker.create` instead.");
      if (!params?.port) {
        throw new Error("PDFWorker.fromPort - invalid method signature.");
      }
      return this.create(params);
    };
  }
  constructor({
    name = null,
    port = null,
    verbosity = getVerbosityLevel()
  } = {}) {
    this.name = name;
    this.destroyed = false;
    this.verbosity = verbosity;
    if (port) {
      if (PDFWorker.#workerPorts.has(port)) {
        throw new Error("Cannot use more than one PDFWorker per port.");
      }
      PDFWorker.#workerPorts.set(port, this);
      this.#initializeFromPort(port);
    } else {
      this.#initialize();
    }
  }
  get promise() {
    return this.#capability.promise;
  }
  #resolve() {
    this.#capability.resolve();
    this.#messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  get port() {
    return this.#port;
  }
  get messageHandler() {
    return this.#messageHandler;
  }
  #initializeFromPort(port) {
    this.#port = port;
    this.#messageHandler = new MessageHandler("main", "worker", port);
    this.#messageHandler.on("ready", () => {});
    this.#resolve();
  }
  #initialize() {
    if (PDFWorker.#isWorkerDisabled || PDFWorker.#mainThreadWorkerMessageHandler) {
      this.#setupFakeWorker();
      return;
    }
    let {
      workerSrc
    } = PDFWorker;
    try {
      if (!PDFWorker._isSameOrigin(window.location, workerSrc)) {
        workerSrc = PDFWorker._createCDNWrapper(new URL(workerSrc, window.location).href);
      }
      const worker = new Worker(workerSrc, {
        type: "module"
      });
      const messageHandler = new MessageHandler("main", "worker", worker);
      const terminateEarly = () => {
        ac.abort();
        messageHandler.destroy();
        worker.terminate();
        if (this.destroyed) {
          this.#capability.reject(new Error("Worker was destroyed"));
        } else {
          this.#setupFakeWorker();
        }
      };
      const ac = new AbortController();
      worker.addEventListener("error", () => {
        if (!this.#webWorker) {
          terminateEarly();
        }
      }, {
        signal: ac.signal
      });
      messageHandler.on("test", data => {
        ac.abort();
        if (this.destroyed || !data) {
          terminateEarly();
          return;
        }
        this.#messageHandler = messageHandler;
        this.#port = worker;
        this.#webWorker = worker;
        this.#resolve();
      });
      messageHandler.on("ready", data => {
        ac.abort();
        if (this.destroyed) {
          terminateEarly();
          return;
        }
        try {
          sendTest();
        } catch {
          this.#setupFakeWorker();
        }
      });
      const sendTest = () => {
        const testObj = new Uint8Array();
        messageHandler.send("test", testObj, [testObj.buffer]);
      };
      sendTest();
      return;
    } catch {
      info("The worker has been disabled.");
    }
    this.#setupFakeWorker();
  }
  #setupFakeWorker() {
    if (!PDFWorker.#isWorkerDisabled) {
      warn("Setting up fake worker.");
      PDFWorker.#isWorkerDisabled = true;
    }
    PDFWorker._setupFakeWorkerGlobal.then(WorkerMessageHandler => {
      if (this.destroyed) {
        this.#capability.reject(new Error("Worker was destroyed"));
        return;
      }
      const port = new LoopbackPort();
      this.#port = port;
      const id = `fake${PDFWorker.#fakeWorkerId++}`;
      const workerHandler = new MessageHandler(id + "_worker", id, port);
      WorkerMessageHandler.setup(workerHandler, port);
      this.#messageHandler = new MessageHandler(id, id + "_worker", port);
      this.#resolve();
    }).catch(reason => {
      this.#capability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
    });
  }
  destroy() {
    this.destroyed = true;
    this.#webWorker?.terminate();
    this.#webWorker = null;
    PDFWorker.#workerPorts.delete(this.#port);
    this.#port = null;
    this.#messageHandler?.destroy();
    this.#messageHandler = null;
  }
  static create(params) {
    const cachedPort = this.#workerPorts.get(params?.port);
    if (cachedPort) {
      if (cachedPort._pendingDestroy) {
        throw new Error("PDFWorker.create - the worker is being destroyed.\n" + "Please remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      }
      return cachedPort;
    }
    return new PDFWorker(params);
  }
  static get workerSrc() {
    if (GlobalWorkerOptions.workerSrc) {
      return GlobalWorkerOptions.workerSrc;
    }
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get #mainThreadWorkerMessageHandler() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  }
  static get _setupFakeWorkerGlobal() {
    const loader = async () => {
      if (this.#mainThreadWorkerMessageHandler) {
        return this.#mainThreadWorkerMessageHandler;
      }
      const worker = await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc);
      return worker.WorkerMessageHandler;
    };
    return shadow(this, "_setupFakeWorkerGlobal", loader());
  }
}
class WorkerTransport {
  #methodPromises = new Map();
  #pageCache = new Map();
  #pagePromises = new Map();
  #pageRefCache = new Map();
  #passwordCapability = null;
  constructor(messageHandler, loadingTask, networkStream, params, factory) {
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader({
      ownerDocument: params.ownerDocument,
      styleElement: params.styleElement
    });
    this.loadingParams = params.loadingParams;
    this._params = params;
    this.canvasFactory = factory.canvasFactory;
    this.filterFactory = factory.filterFactory;
    this.cMapReaderFactory = factory.cMapReaderFactory;
    this.standardFontDataFactory = factory.standardFontDataFactory;
    this.wasmFactory = factory.wasmFactory;
    this.destroyed = false;
    this.destroyCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = Promise.withResolvers();
    this.setupMessageHandler();
  }
  #cacheSimpleMethod(name, data = null) {
    const cachedPromise = this.#methodPromises.get(name);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise(name, data);
    this.#methodPromises.set(name, promise);
    return promise;
  }
  get annotationStorage() {
    return shadow(this, "annotationStorage", new AnnotationStorage());
  }
  getRenderingIntent(intent, annotationMode = AnnotationMode.ENABLE, printAnnotationStorage = null, isEditing = false, isOpList = false) {
    let renderingIntent = RenderingIntentFlag.DISPLAY;
    let annotationStorageSerializable = SerializableEmpty;
    switch (intent) {
      case "any":
        renderingIntent = RenderingIntentFlag.ANY;
        break;
      case "display":
        break;
      case "print":
        renderingIntent = RenderingIntentFlag.PRINT;
        break;
      default:
        warn(`getRenderingIntent - invalid intent: ${intent}`);
    }
    const annotationStorage = renderingIntent & RenderingIntentFlag.PRINT && printAnnotationStorage instanceof PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
    switch (annotationMode) {
      case AnnotationMode.DISABLE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_DISABLE;
        break;
      case AnnotationMode.ENABLE:
        break;
      case AnnotationMode.ENABLE_FORMS:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_FORMS;
        break;
      case AnnotationMode.ENABLE_STORAGE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_STORAGE;
        annotationStorageSerializable = annotationStorage.serializable;
        break;
      default:
        warn(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);
    }
    if (isEditing) {
      renderingIntent += RenderingIntentFlag.IS_EDITING;
    }
    if (isOpList) {
      renderingIntent += RenderingIntentFlag.OPLIST;
    }
    const {
      ids: modifiedIds,
      hash: modifiedIdsHash
    } = annotationStorage.modifiedIds;
    const cacheKeyBuf = [renderingIntent, annotationStorageSerializable.hash, modifiedIdsHash];
    return {
      renderingIntent,
      cacheKey: cacheKeyBuf.join("_"),
      annotationStorageSerializable,
      modifiedIds
    };
  }
  destroy() {
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    this.#passwordCapability?.reject(new Error("Worker was destroyed during onPassword callback"));
    const waitOn = [];
    for (const page of this.#pageCache.values()) {
      waitOn.push(page._destroy());
    }
    this.#pageCache.clear();
    this.#pagePromises.clear();
    this.#pageRefCache.clear();
    if (this.hasOwnProperty("annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    const terminated = this.messageHandler.sendWithPromise("Terminate", null);
    waitOn.push(terminated);
    Promise.all(waitOn).then(() => {
      this.commonObjs.clear();
      this.fontLoader.clear();
      this.#methodPromises.clear();
      this.filterFactory.destroy();
      TextLayer.cleanup();
      this._networkStream?.cancelAllRequests(new AbortException("Worker was terminated."));
      this.messageHandler?.destroy();
      this.messageHandler = null;
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler,
      loadingTask
    } = this;
    messageHandler.on("GetReader", (data, sink) => {
      assert(this._networkStream, "GetReader - no `IPDFStream` instance available.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = evt => {
        this._lastProgress = {
          loaded: evt.loaded,
          total: evt.total
        };
      };
      sink.onPull = () => {
        this._fullReader.read().then(function ({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch(reason => {
          sink.error(reason);
        });
      };
      sink.onCancel = reason => {
        this._fullReader.cancel(reason);
        sink.ready.catch(readyReason => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", async data => {
      await this._fullReader.headersReady;
      const {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      } = this._fullReader;
      if (!isStreamingSupported || !isRangeSupported) {
        if (this._lastProgress) {
          loadingTask.onProgress?.(this._lastProgress);
        }
        this._fullReader.onProgress = evt => {
          loadingTask.onProgress?.({
            loaded: evt.loaded,
            total: evt.total
          });
        };
      }
      return {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      };
    });
    messageHandler.on("GetRangeReader", (data, sink) => {
      assert(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
      if (!rangeReader) {
        sink.close();
        return;
      }
      sink.onPull = () => {
        rangeReader.read().then(function ({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch(reason => {
          sink.error(reason);
        });
      };
      sink.onCancel = reason => {
        rangeReader.cancel(reason);
        sink.ready.catch(readyReason => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("GetDoc", ({
      pdfInfo
    }) => {
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      delete pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
    });
    messageHandler.on("DocException", ex => {
      loadingTask._capability.reject(wrapReason(ex));
    });
    messageHandler.on("PasswordRequest", ex => {
      this.#passwordCapability = Promise.withResolvers();
      try {
        if (!loadingTask.onPassword) {
          throw wrapReason(ex);
        }
        const updatePassword = password => {
          if (password instanceof Error) {
            this.#passwordCapability.reject(password);
          } else {
            this.#passwordCapability.resolve({
              password
            });
          }
        };
        loadingTask.onPassword(updatePassword, ex.code);
      } catch (err) {
        this.#passwordCapability.reject(err);
      }
      return this.#passwordCapability.promise;
    });
    messageHandler.on("DataLoaded", data => {
      loadingTask.onProgress?.({
        loaded: data.length,
        total: data.length
      });
      this.downloadInfoCapability.resolve(data);
    });
    messageHandler.on("StartRenderPage", data => {
      if (this.destroyed) {
        return;
      }
      const page = this.#pageCache.get(data.pageIndex);
      page._startRenderPage(data.transparency, data.cacheKey);
    });
    messageHandler.on("commonobj", ([id, type, exportedData]) => {
      if (this.destroyed) {
        return null;
      }
      if (this.commonObjs.has(id)) {
        return null;
      }
      switch (type) {
        case "Font":
          if ("error" in exportedData) {
            const exportedError = exportedData.error;
            warn(`Error during font loading: ${exportedError}`);
            this.commonObjs.resolve(id, exportedError);
            break;
          }
          const inspectFont = this._params.pdfBug && globalThis.FontInspector?.enabled ? (font, url) => globalThis.FontInspector.fontAdded(font, url) : null;
          const font = new FontFaceObject(exportedData, inspectFont);
          this.fontLoader.bind(font).catch(() => messageHandler.sendWithPromise("FontFallback", {
            id
          })).finally(() => {
            if (!font.fontExtraProperties && font.data) {
              font.data = null;
            }
            this.commonObjs.resolve(id, font);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef
          } = exportedData;
          assert(imageRef, "The imageRef must be defined.");
          for (const pageProxy of this.#pageCache.values()) {
            for (const [, data] of pageProxy.objs) {
              if (data?.ref !== imageRef) {
                continue;
              }
              if (!data.dataLen) {
                return null;
              }
              this.commonObjs.resolve(id, structuredClone(data));
              return data.dataLen;
            }
          }
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(id, exportedData);
          break;
        default:
          throw new Error(`Got unknown common object type ${type}`);
      }
      return null;
    });
    messageHandler.on("obj", ([id, pageIndex, type, imageData]) => {
      if (this.destroyed) {
        return;
      }
      const pageProxy = this.#pageCache.get(pageIndex);
      if (pageProxy.objs.has(id)) {
        return;
      }
      if (pageProxy._intentStates.size === 0) {
        imageData?.bitmap?.close();
        return;
      }
      switch (type) {
        case "Image":
        case "Pattern":
          pageProxy.objs.resolve(id, imageData);
          break;
        default:
          throw new Error(`Got unknown object type ${type}`);
      }
    });
    messageHandler.on("DocProgress", data => {
      if (this.destroyed) {
        return;
      }
      loadingTask.onProgress?.({
        loaded: data.loaded,
        total: data.total
      });
    });
    messageHandler.on("FetchBinaryData", async data => {
      if (this.destroyed) {
        throw new Error("Worker was destroyed.");
      }
      const factory = this[data.type];
      if (!factory) {
        throw new Error(`${data.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      }
      return factory.fetch(data);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    if (this.annotationStorage.size <= 0) {
      warn("saveDocument called while `annotationStorage` is empty, " + "please use the getData-method instead.");
    }
    const {
      map,
      transfer
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: map,
      filename: this._fullReader?.filename ?? null
    }, transfer).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(pageNumber) {
    if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
      return Promise.reject(new Error("Invalid page request."));
    }
    const pageIndex = pageNumber - 1,
      cachedPromise = this.#pagePromises.get(pageIndex);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex
    }).then(pageInfo => {
      if (this.destroyed) {
        throw new Error("Transport destroyed");
      }
      if (pageInfo.refStr) {
        this.#pageRefCache.set(pageInfo.refStr, pageNumber);
      }
      const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.pdfBug);
      this.#pageCache.set(pageIndex, page);
      return page;
    });
    this.#pagePromises.set(pageIndex, promise);
    return promise;
  }
  getPageIndex(ref) {
    if (!isRefProxy(ref)) {
      return Promise.reject(new Error("Invalid pageIndex request."));
    }
    return this.messageHandler.sendWithPromise("GetPageIndex", {
      num: ref.num,
      gen: ref.gen
    });
  }
  getAnnotations(pageIndex, intent) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex,
      intent
    });
  }
  getFieldObjects() {
    return this.#cacheSimpleMethod("GetFieldObjects");
  }
  hasJSActions() {
    return this.#cacheSimpleMethod("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(id) {
    if (typeof id !== "string") {
      return Promise.reject(new Error("Invalid destination request."));
    }
    return this.messageHandler.sendWithPromise("GetDestination", {
      id
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return this.#cacheSimpleMethod("GetDocJSActions");
  }
  getPageJSActions(pageIndex) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex
    });
  }
  getStructTree(pageIndex) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(renderingIntent) {
    return this.#cacheSimpleMethod("GetOptionalContentConfig").then(data => new OptionalContentConfig(data, renderingIntent));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const name = "GetMetadata",
      cachedPromise = this.#methodPromises.get(name);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise(name, null).then(results => ({
      info: results[0],
      metadata: results[1] ? new Metadata(results[1]) : null,
      contentDispositionFilename: this._fullReader?.filename ?? null,
      contentLength: this._fullReader?.contentLength ?? null
    }));
    this.#methodPromises.set(name, promise);
    return promise;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(keepLoadedFonts = false) {
    if (this.destroyed) {
      return;
    }
    await this.messageHandler.sendWithPromise("Cleanup", null);
    for (const page of this.#pageCache.values()) {
      const cleanupSuccessful = page.cleanup();
      if (!cleanupSuccessful) {
        throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);
      }
    }
    this.commonObjs.clear();
    if (!keepLoadedFonts) {
      this.fontLoader.clear();
    }
    this.#methodPromises.clear();
    this.filterFactory.destroy(true);
    TextLayer.cleanup();
  }
  cachedPageNumber(ref) {
    if (!isRefProxy(ref)) {
      return null;
    }
    const refStr = ref.gen === 0 ? `${ref.num}R` : `${ref.num}R${ref.gen}`;
    return this.#pageRefCache.get(refStr) ?? null;
  }
}
class RenderTask {
  #internalRenderTask = null;
  onContinue = null;
  onError = null;
  constructor(internalRenderTask) {
    this.#internalRenderTask = internalRenderTask;
  }
  get promise() {
    return this.#internalRenderTask.capability.promise;
  }
  cancel(extraDelay = 0) {
    this.#internalRenderTask.cancel(null, extraDelay);
  }
  get separateAnnots() {
    const {
      separateAnnots
    } = this.#internalRenderTask.operatorList;
    if (!separateAnnots) {
      return false;
    }
    const {
      annotationCanvasMap
    } = this.#internalRenderTask;
    return separateAnnots.form || separateAnnots.canvas && annotationCanvasMap?.size > 0;
  }
}
class InternalRenderTask {
  #rAF = null;
  static #canvasInUse = new WeakSet();
  constructor({
    callback,
    params,
    objs,
    commonObjs,
    annotationCanvasMap,
    operatorList,
    pageIndex,
    canvasFactory,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = false,
    pageColors = null
  }) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this._pdfBug = pdfBug;
    this.pageColors = pageColors;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new RenderTask(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function () {});
  }
  initializeGraphics({
    transparency = false,
    optionalContentConfig
  }) {
    if (this.cancelled) {
      return;
    }
    if (this._canvas) {
      if (InternalRenderTask.#canvasInUse.has(this._canvas)) {
        throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
      }
      InternalRenderTask.#canvasInUse.add(this._canvas);
    }
    if (this._pdfBug && globalThis.StepperManager?.enabled) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    const {
      canvasContext,
      viewport,
      transform,
      background
    } = this.params;
    this.gfx = new CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig
    }, this.annotationCanvasMap, this.pageColors);
    this.gfx.beginDrawing({
      transform,
      viewport,
      transparency,
      background
    });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  cancel(error = null, extraDelay = 0) {
    this.running = false;
    this.cancelled = true;
    this.gfx?.endDrawing();
    if (this.#rAF) {
      window.cancelAnimationFrame(this.#rAF);
      this.#rAF = null;
    }
    InternalRenderTask.#canvasInUse.delete(this._canvas);
    error ||= new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, extraDelay);
    this.callback(error);
    this.task.onError?.(error);
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.stepper?.updateOperatorList(this.operatorList);
    if (this.running) {
      return;
    }
    this._continue();
  }
  _continue() {
    this.running = true;
    if (this.cancelled) {
      return;
    }
    if (this.task.onContinue) {
      this.task.onContinue(this._scheduleNextBound);
    } else {
      this._scheduleNext();
    }
  }
  _scheduleNext() {
    if (this._useRequestAnimationFrame) {
      this.#rAF = window.requestAnimationFrame(() => {
        this.#rAF = null;
        this._nextBound().catch(this._cancelBound);
      });
    } else {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  async _next() {
    if (this.cancelled) {
      return;
    }
    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
    if (this.operatorListIdx === this.operatorList.argsArray.length) {
      this.running = false;
      if (this.operatorList.lastChunk) {
        this.gfx.endDrawing();
        InternalRenderTask.#canvasInUse.delete(this._canvas);
        this.callback();
      }
    }
  }
}
const version = "5.3.31";
const build = "47ad820d9";
function makeColorComp(n) {
  return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
}
function scaleAndClamp(x) {
  return Math.max(0, Math.min(255, 255 * x));
}
class ColorConverters {
  static CMYK_G([c, y, m, k]) {
    return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
  }
  static G_CMYK([g]) {
    return ["CMYK", 0, 0, 0, 1 - g];
  }
  static G_RGB([g]) {
    return ["RGB", g, g, g];
  }
  static G_rgb([g]) {
    g = scaleAndClamp(g);
    return [g, g, g];
  }
  static G_HTML([g]) {
    const G = makeColorComp(g);
    return `#${G}${G}${G}`;
  }
  static RGB_G([r, g, b]) {
    return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
  }
  static RGB_rgb(color) {
    return color.map(scaleAndClamp);
  }
  static RGB_HTML(color) {
    return `#${color.map(makeColorComp).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([c, y, m, k]) {
    return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
  }
  static CMYK_rgb([c, y, m, k]) {
    return [scaleAndClamp(1 - Math.min(1, c + k)), scaleAndClamp(1 - Math.min(1, m + k)), scaleAndClamp(1 - Math.min(1, y + k))];
  }
  static CMYK_HTML(components) {
    const rgb = this.CMYK_RGB(components).slice(1);
    return this.RGB_HTML(rgb);
  }
  static RGB_CMYK([r, g, b]) {
    const c = 1 - r;
    const m = 1 - g;
    const y = 1 - b;
    const k = Math.min(c, m, y);
    return ["CMYK", c, m, y, k];
  }
}


class BaseSVGFactory {
  create(width, height, skipDimensions = false) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid SVG dimensions");
    }
    const svg = this._createSVG("svg:svg");
    svg.setAttribute("version", "1.1");
    if (!skipDimensions) {
      svg.setAttribute("width", `${width}px`);
      svg.setAttribute("height", `${height}px`);
    }
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    return svg;
  }
  createElement(type) {
    if (typeof type !== "string") {
      throw new Error("Invalid SVG element type");
    }
    return this._createSVG(type);
  }
  _createSVG(type) {
    unreachable("Abstract method `_createSVG` called.");
  }
}
class DOMSVGFactory extends BaseSVGFactory {
  _createSVG(type) {
    return document.createElementNS(SVG_NS, type);
  }
}

class XfaLayer {
  static setupStorage(html, id, element, storage, intent) {
    const storedData = storage.getValue(id, {
      value: null
    });
    switch (element.name) {
      case "textarea":
        if (storedData.value !== null) {
          html.textContent = storedData.value;
        }
        if (intent === "print") {
          break;
        }
        html.addEventListener("input", event => {
          storage.setValue(id, {
            value: event.target.value
          });
        });
        break;
      case "input":
        if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
          if (storedData.value === element.attributes.xfaOn) {
            html.setAttribute("checked", true);
          } else if (storedData.value === element.attributes.xfaOff) {
            html.removeAttribute("checked");
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("change", event => {
            storage.setValue(id, {
              value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (storedData.value !== null) {
            html.setAttribute("value", storedData.value);
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("input", event => {
            storage.setValue(id, {
              value: event.target.value
            });
          });
        }
        break;
      case "select":
        if (storedData.value !== null) {
          html.setAttribute("value", storedData.value);
          for (const option of element.children) {
            if (option.attributes.value === storedData.value) {
              option.attributes.selected = true;
            } else if (option.attributes.hasOwnProperty("selected")) {
              delete option.attributes.selected;
            }
          }
        }
        html.addEventListener("input", event => {
          const options = event.target.options;
          const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
          storage.setValue(id, {
            value
          });
        });
        break;
    }
  }
  static setAttributes({
    html,
    element,
    storage = null,
    intent,
    linkService
  }) {
    const {
      attributes
    } = element;
    const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
    if (attributes.type === "radio") {
      attributes.name = `${attributes.name}-${intent}`;
    }
    for (const [key, value] of Object.entries(attributes)) {
      if (value === null || value === undefined) {
        continue;
      }
      switch (key) {
        case "class":
          if (value.length) {
            html.setAttribute(key, value.join(" "));
          }
          break;
        case "dataId":
          break;
        case "id":
          html.setAttribute("data-element-id", value);
          break;
        case "style":
          Object.assign(html.style, value);
          break;
        case "textContent":
          html.textContent = value;
          break;
        default:
          if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
            html.setAttribute(key, value);
          }
      }
    }
    if (isHTMLAnchorElement) {
      linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(parameters) {
    const storage = parameters.annotationStorage;
    const linkService = parameters.linkService;
    const root = parameters.xfaHtml;
    const intent = parameters.intent || "display";
    const rootHtml = document.createElement(root.name);
    if (root.attributes) {
      this.setAttributes({
        html: rootHtml,
        element: root,
        intent,
        linkService
      });
    }
    const isNotForRichText = intent !== "richText";
    const rootDiv = parameters.div;
    rootDiv.append(rootHtml);
    if (parameters.viewport) {
      const transform = `matrix(${parameters.viewport.transform.join(",")})`;
      rootDiv.style.transform = transform;
    }
    if (isNotForRichText) {
      rootDiv.setAttribute("class", "xfaLayer xfaFont");
    }
    const textDivs = [];
    if (root.children.length === 0) {
      if (root.value) {
        const node = document.createTextNode(root.value);
        rootHtml.append(node);
        if (isNotForRichText && XfaText.shouldBuildText(root.name)) {
          textDivs.push(node);
        }
      }
      return {
        textDivs
      };
    }
    const stack = [[root, -1, rootHtml]];
    while (stack.length > 0) {
      const [parent, i, html] = stack.at(-1);
      if (i + 1 === parent.children.length) {
        stack.pop();
        continue;
      }
      const child = parent.children[++stack.at(-1)[1]];
      if (child === null) {
        continue;
      }
      const {
        name
      } = child;
      if (name === "#text") {
        const node = document.createTextNode(child.value);
        textDivs.push(node);
        html.append(node);
        continue;
      }
      const childHtml = child?.attributes?.xmlns ? document.createElementNS(child.attributes.xmlns, name) : document.createElement(name);
      html.append(childHtml);
      if (child.attributes) {
        this.setAttributes({
          html: childHtml,
          element: child,
          storage,
          intent,
          linkService
        });
      }
      if (child.children?.length > 0) {
        stack.push([child, -1, childHtml]);
      } else if (child.value) {
        const node = document.createTextNode(child.value);
        if (isNotForRichText && XfaText.shouldBuildText(name)) {
          textDivs.push(node);
        }
        childHtml.append(node);
      }
    }
    for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      el.setAttribute("readOnly", true);
    }
    return {
      textDivs
    };
  }
  static update(parameters) {
    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
    parameters.div.style.transform = transform;
    parameters.div.hidden = false;
  }
}






const DEFAULT_TAB_INDEX = 1000;
const annotation_layer_DEFAULT_FONT_SIZE = 9;
const GetElementsByNameSet = new WeakSet();
class AnnotationElementFactory {
  static create(parameters) {
    const subtype = parameters.data.annotationType;
    switch (subtype) {
      case AnnotationType.LINK:
        return new LinkAnnotationElement(parameters);
      case AnnotationType.TEXT:
        return new TextAnnotationElement(parameters);
      case AnnotationType.WIDGET:
        const fieldType = parameters.data.fieldType;
        switch (fieldType) {
          case "Tx":
            return new TextWidgetAnnotationElement(parameters);
          case "Btn":
            if (parameters.data.radioButton) {
              return new RadioButtonWidgetAnnotationElement(parameters);
            } else if (parameters.data.checkBox) {
              return new CheckboxWidgetAnnotationElement(parameters);
            }
            return new PushButtonWidgetAnnotationElement(parameters);
          case "Ch":
            return new ChoiceWidgetAnnotationElement(parameters);
          case "Sig":
            return new SignatureWidgetAnnotationElement(parameters);
        }
        return new WidgetAnnotationElement(parameters);
      case AnnotationType.POPUP:
        return new PopupAnnotationElement(parameters);
      case AnnotationType.FREETEXT:
        return new FreeTextAnnotationElement(parameters);
      case AnnotationType.LINE:
        return new LineAnnotationElement(parameters);
      case AnnotationType.SQUARE:
        return new SquareAnnotationElement(parameters);
      case AnnotationType.CIRCLE:
        return new CircleAnnotationElement(parameters);
      case AnnotationType.POLYLINE:
        return new PolylineAnnotationElement(parameters);
      case AnnotationType.CARET:
        return new CaretAnnotationElement(parameters);
      case AnnotationType.INK:
        return new InkAnnotationElement(parameters);
      case AnnotationType.POLYGON:
        return new PolygonAnnotationElement(parameters);
      case AnnotationType.HIGHLIGHT:
        return new HighlightAnnotationElement(parameters);
      case AnnotationType.UNDERLINE:
        return new UnderlineAnnotationElement(parameters);
      case AnnotationType.SQUIGGLY:
        return new SquigglyAnnotationElement(parameters);
      case AnnotationType.STRIKEOUT:
        return new StrikeOutAnnotationElement(parameters);
      case AnnotationType.STAMP:
        return new StampAnnotationElement(parameters);
      case AnnotationType.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(parameters);
      default:
        return new AnnotationElement(parameters);
    }
  }
}
class AnnotationElement {
  #updates = null;
  #hasBorder = false;
  #popupElement = null;
  constructor(parameters, {
    isRenderable = false,
    ignoreBorder = false,
    createQuadrilaterals = false
  } = {}) {
    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderForms = parameters.renderForms;
    this.svgFactory = parameters.svgFactory;
    this.annotationStorage = parameters.annotationStorage;
    this.enableScripting = parameters.enableScripting;
    this.hasJSActions = parameters.hasJSActions;
    this._fieldObjects = parameters.fieldObjects;
    this.parent = parameters.parent;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this._createQuadrilaterals();
    }
  }
  static _hasPopupData({
    titleObj,
    contentsObj,
    richText
  }) {
    return !!(titleObj?.str || contentsObj?.str || richText?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return AnnotationElement._hasPopupData(this.data);
  }
  updateEdited(params) {
    if (!this.container) {
      return;
    }
    this.#updates ||= {
      rect: this.data.rect.slice(0)
    };
    const {
      rect
    } = params;
    if (rect) {
      this.#setRectEdited(rect);
    }
    this.#popupElement?.popup.updateEdited(params);
  }
  resetEdited() {
    if (!this.#updates) {
      return;
    }
    this.#setRectEdited(this.#updates.rect);
    this.#popupElement?.popup.resetEdited();
    this.#updates = null;
  }
  #setRectEdited(rect) {
    const {
      container: {
        style
      },
      data: {
        rect: currentRect,
        rotation
      },
      parent: {
        viewport: {
          rawDims: {
            pageWidth,
            pageHeight,
            pageX,
            pageY
          }
        }
      }
    } = this;
    currentRect?.splice(0, 4, ...rect);
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (pageHeight - rect[3] + pageY) / pageHeight}%`;
    if (rotation === 0) {
      style.width = `${100 * (rect[2] - rect[0]) / pageWidth}%`;
      style.height = `${100 * (rect[3] - rect[1]) / pageHeight}%`;
    } else {
      this.setRotation(rotation);
    }
  }
  _createContainer(ignoreBorder) {
    const {
      data,
      parent: {
        page,
        viewport
      }
    } = this;
    const container = document.createElement("section");
    container.setAttribute("data-annotation-id", data.id);
    if (!(this instanceof WidgetAnnotationElement)) {
      container.tabIndex = DEFAULT_TAB_INDEX;
    }
    const {
      style
    } = container;
    style.zIndex = this.parent.zIndex++;
    if (data.alternativeText) {
      container.title = data.alternativeText;
    }
    if (data.noRotate) {
      container.classList.add("norotate");
    }
    if (!data.rect || this instanceof PopupAnnotationElement) {
      const {
        rotation
      } = data;
      if (!data.hasOwnCanvas && rotation !== 0) {
        this.setRotation(rotation, container);
      }
      return container;
    }
    const {
      width,
      height
    } = this;
    if (!ignoreBorder && data.borderStyle.width > 0) {
      style.borderWidth = `${data.borderStyle.width}px`;
      const horizontalRadius = data.borderStyle.horizontalCornerRadius;
      const verticalRadius = data.borderStyle.verticalCornerRadius;
      if (horizontalRadius > 0 || verticalRadius > 0) {
        const radius = `calc(${horizontalRadius}px * var(--total-scale-factor)) / calc(${verticalRadius}px * var(--total-scale-factor))`;
        style.borderRadius = radius;
      } else if (this instanceof RadioButtonWidgetAnnotationElement) {
        const radius = `calc(${width}px * var(--total-scale-factor)) / calc(${height}px * var(--total-scale-factor))`;
        style.borderRadius = radius;
      }
      switch (data.borderStyle.style) {
        case AnnotationBorderStyleType.SOLID:
          style.borderStyle = "solid";
          break;
        case AnnotationBorderStyleType.DASHED:
          style.borderStyle = "dashed";
          break;
        case AnnotationBorderStyleType.BEVELED:
          warn("Unimplemented border style: beveled");
          break;
        case AnnotationBorderStyleType.INSET:
          warn("Unimplemented border style: inset");
          break;
        case AnnotationBorderStyleType.UNDERLINE:
          style.borderBottomStyle = "solid";
          break;
      }
      const borderColor = data.borderColor || null;
      if (borderColor) {
        this.#hasBorder = true;
        style.borderColor = Util.makeHexColor(borderColor[0] | 0, borderColor[1] | 0, borderColor[2] | 0);
      } else {
        style.borderWidth = 0;
      }
    }
    const rect = Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (rect[1] - pageY) / pageHeight}%`;
    const {
      rotation
    } = data;
    if (data.hasOwnCanvas || rotation === 0) {
      style.width = `${100 * width / pageWidth}%`;
      style.height = `${100 * height / pageHeight}%`;
    } else {
      this.setRotation(rotation, container);
    }
    return container;
  }
  setRotation(angle, container = this.container) {
    if (!this.data.rect) {
      return;
    }
    const {
      pageWidth,
      pageHeight
    } = this.parent.viewport.rawDims;
    let {
      width,
      height
    } = this;
    if (angle % 180 !== 0) {
      [width, height] = [height, width];
    }
    container.style.width = `${100 * width / pageWidth}%`;
    container.style.height = `${100 * height / pageHeight}%`;
    container.setAttribute("data-main-rotation", (360 - angle) % 360);
  }
  get _commonActions() {
    const setColor = (jsName, styleName, event) => {
      const color = event.detail[jsName];
      const colorType = color[0];
      const colorArray = color.slice(1);
      event.target.style[styleName] = ColorConverters[`${colorType}_HTML`](colorArray);
      this.annotationStorage.setValue(this.data.id, {
        [styleName]: ColorConverters[`${colorType}_rgb`](colorArray)
      });
    };
    return shadow(this, "_commonActions", {
      display: event => {
        const {
          display
        } = event.detail;
        const hidden = display % 2 === 1;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noView: hidden,
          noPrint: display === 1 || display === 2
        });
      },
      print: event => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !event.detail.print
        });
      },
      hidden: event => {
        const {
          hidden
        } = event.detail;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noPrint: hidden,
          noView: hidden
        });
      },
      focus: event => {
        setTimeout(() => event.target.focus({
          preventScroll: false
        }), 0);
      },
      userName: event => {
        event.target.title = event.detail.userName;
      },
      readonly: event => {
        event.target.disabled = event.detail.readonly;
      },
      required: event => {
        this._setRequired(event.target, event.detail.required);
      },
      bgColor: event => {
        setColor("bgColor", "backgroundColor", event);
      },
      fillColor: event => {
        setColor("fillColor", "backgroundColor", event);
      },
      fgColor: event => {
        setColor("fgColor", "color", event);
      },
      textColor: event => {
        setColor("textColor", "color", event);
      },
      borderColor: event => {
        setColor("borderColor", "borderColor", event);
      },
      strokeColor: event => {
        setColor("strokeColor", "borderColor", event);
      },
      rotation: event => {
        const angle = event.detail.rotation;
        this.setRotation(angle);
        this.annotationStorage.setValue(this.data.id, {
          rotation: angle
        });
      }
    });
  }
  _dispatchEventFromSandbox(actions, jsEvent) {
    const commonActions = this._commonActions;
    for (const name of Object.keys(jsEvent.detail)) {
      const action = actions[name] || commonActions[name];
      action?.(jsEvent);
    }
  }
  _setDefaultPropertiesFromJS(element) {
    if (!this.enableScripting) {
      return;
    }
    const storedData = this.annotationStorage.getRawValue(this.data.id);
    if (!storedData) {
      return;
    }
    const commonActions = this._commonActions;
    for (const [actionName, detail] of Object.entries(storedData)) {
      const action = commonActions[actionName];
      if (action) {
        const eventProxy = {
          detail: {
            [actionName]: detail
          },
          target: element
        };
        action(eventProxy);
        delete storedData[actionName];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) {
      return;
    }
    const {
      quadPoints
    } = this.data;
    if (!quadPoints) {
      return;
    }
    const [rectBlX, rectBlY, rectTrX, rectTrY] = this.data.rect.map(x => Math.fround(x));
    if (quadPoints.length === 8) {
      const [trX, trY, blX, blY] = quadPoints.subarray(2, 6);
      if (rectTrX === trX && rectTrY === trY && rectBlX === blX && rectBlY === blY) {
        return;
      }
    }
    const {
      style
    } = this.container;
    let svgBuffer;
    if (this.#hasBorder) {
      const {
        borderColor,
        borderWidth
      } = style;
      style.borderWidth = 0;
      svgBuffer = ["url('data:image/svg+xml;utf8,", `<svg xmlns="http://www.w3.org/2000/svg"`, ` preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`];
      this.container.classList.add("hasBorder");
    }
    const width = rectTrX - rectBlX;
    const height = rectTrY - rectBlY;
    const {
      svgFactory
    } = this;
    const svg = svgFactory.createElement("svg");
    svg.classList.add("quadrilateralsContainer");
    svg.setAttribute("width", 0);
    svg.setAttribute("height", 0);
    const defs = svgFactory.createElement("defs");
    svg.append(defs);
    const clipPath = svgFactory.createElement("clipPath");
    const id = `clippath_${this.data.id}`;
    clipPath.setAttribute("id", id);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    defs.append(clipPath);
    for (let i = 2, ii = quadPoints.length; i < ii; i += 8) {
      const trX = quadPoints[i];
      const trY = quadPoints[i + 1];
      const blX = quadPoints[i + 2];
      const blY = quadPoints[i + 3];
      const rect = svgFactory.createElement("rect");
      const x = (blX - rectBlX) / width;
      const y = (rectTrY - trY) / height;
      const rectWidth = (trX - blX) / width;
      const rectHeight = (trY - blY) / height;
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", rectWidth);
      rect.setAttribute("height", rectHeight);
      clipPath.append(rect);
      svgBuffer?.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}"/>`);
    }
    if (this.#hasBorder) {
      svgBuffer.push(`</g></svg>')`);
      style.backgroundImage = svgBuffer.join("");
    }
    this.container.append(svg);
    this.container.style.clipPath = `url(#${id})`;
  }
  _createPopup() {
    const {
      data
    } = this;
    const popup = this.#popupElement = new PopupAnnotationElement({
      data: {
        color: data.color,
        titleObj: data.titleObj,
        modificationDate: data.modificationDate,
        contentsObj: data.contentsObj,
        richText: data.richText,
        parentRect: data.rect,
        borderStyle: 0,
        id: `popup_${data.id}`,
        rotation: data.rotation
      },
      parent: this.parent,
      elements: [this]
    });
    this.parent.div.append(popup.render());
  }
  render() {
    unreachable("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(name, skipId = null) {
    const fields = [];
    if (this._fieldObjects) {
      const fieldObj = this._fieldObjects[name];
      if (fieldObj) {
        for (const {
          page,
          id,
          exportValues
        } of fieldObj) {
          if (page === -1) {
            continue;
          }
          if (id === skipId) {
            continue;
          }
          const exportValue = typeof exportValues === "string" ? exportValues : null;
          const domElement = document.querySelector(`[data-element-id="${id}"]`);
          if (domElement && !GetElementsByNameSet.has(domElement)) {
            warn(`_getElementsByName - element not allowed: ${id}`);
            continue;
          }
          fields.push({
            id,
            exportValue,
            domElement
          });
        }
      }
      return fields;
    }
    for (const domElement of document.getElementsByName(name)) {
      const {
        exportValue
      } = domElement;
      const id = domElement.getAttribute("data-element-id");
      if (id === skipId) {
        continue;
      }
      if (!GetElementsByNameSet.has(domElement)) {
        continue;
      }
      fields.push({
        id,
        exportValue,
        domElement
      });
    }
    return fields;
  }
  show() {
    if (this.container) {
      this.container.hidden = false;
    }
    this.popup?.maybeShow();
  }
  hide() {
    if (this.container) {
      this.container.hidden = true;
    }
    this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const triggers = this.getElementsToTriggerPopup();
    if (Array.isArray(triggers)) {
      for (const element of triggers) {
        element.classList.add("highlightArea");
      }
    } else {
      triggers.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    if (!this._isEditable) {
      return;
    }
    const {
      annotationEditorType: mode,
      data: {
        id: editId
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode,
        editId
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
}
class LinkAnnotationElement extends AnnotationElement {
  constructor(parameters, options = null) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: !!options?.ignoreBorder,
      createQuadrilaterals: true
    });
    this.isTooltipOnly = parameters.data.isTooltipOnly;
  }
  render() {
    const {
      data,
      linkService
    } = this;
    const link = document.createElement("a");
    link.setAttribute("data-element-id", data.id);
    let isBound = false;
    if (data.url) {
      linkService.addLinkAttributes(link, data.url, data.newWindow);
      isBound = true;
    } else if (data.action) {
      this._bindNamedAction(link, data.action);
      isBound = true;
    } else if (data.attachment) {
      this.#bindAttachment(link, data.attachment, data.attachmentDest);
      isBound = true;
    } else if (data.setOCGState) {
      this.#bindSetOCGState(link, data.setOCGState);
      isBound = true;
    } else if (data.dest) {
      this._bindLink(link, data.dest);
      isBound = true;
    } else {
      if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(link, data);
        isBound = true;
      }
      if (data.resetForm) {
        this._bindResetFormAction(link, data.resetForm);
        isBound = true;
      } else if (this.isTooltipOnly && !isBound) {
        this._bindLink(link, "");
        isBound = true;
      }
    }
    this.container.classList.add("linkAnnotation");
    if (isBound) {
      this.container.append(link);
    }
    return this.container;
  }
  #setInternalLink() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(link, destination) {
    link.href = this.linkService.getDestinationHash(destination);
    link.onclick = () => {
      if (destination) {
        this.linkService.goToDestination(destination);
      }
      return false;
    };
    if (destination || destination === "") {
      this.#setInternalLink();
    }
  }
  _bindNamedAction(link, action) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeNamedAction(action);
      return false;
    };
    this.#setInternalLink();
  }
  #bindAttachment(link, attachment, dest = null) {
    link.href = this.linkService.getAnchorUrl("");
    if (attachment.description) {
      link.title = attachment.description;
    }
    link.onclick = () => {
      this.downloadManager?.openOrDownloadData(attachment.content, attachment.filename, dest);
      return false;
    };
    this.#setInternalLink();
  }
  #bindSetOCGState(link, action) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeSetOCGState(action);
      return false;
    };
    this.#setInternalLink();
  }
  _bindJSAction(link, data) {
    link.href = this.linkService.getAnchorUrl("");
    const map = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const name of Object.keys(data.actions)) {
      const jsName = map.get(name);
      if (!jsName) {
        continue;
      }
      link[jsName] = () => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: data.id,
            name
          }
        });
        return false;
      };
    }
    if (!link.onclick) {
      link.onclick = () => false;
    }
    this.#setInternalLink();
  }
  _bindResetFormAction(link, resetForm) {
    const otherClickAction = link.onclick;
    if (!otherClickAction) {
      link.href = this.linkService.getAnchorUrl("");
    }
    this.#setInternalLink();
    if (!this._fieldObjects) {
      warn(`_bindResetFormAction - "resetForm" action not supported, ` + "ensure that the `fieldObjects` parameter is provided.");
      if (!otherClickAction) {
        link.onclick = () => false;
      }
      return;
    }
    link.onclick = () => {
      otherClickAction?.();
      const {
        fields: resetFormFields,
        refs: resetFormRefs,
        include
      } = resetForm;
      const allFields = [];
      if (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
        const fieldIds = new Set(resetFormRefs);
        for (const fieldName of resetFormFields) {
          const fields = this._fieldObjects[fieldName] || [];
          for (const {
            id
          } of fields) {
            fieldIds.add(id);
          }
        }
        for (const fields of Object.values(this._fieldObjects)) {
          for (const field of fields) {
            if (fieldIds.has(field.id) === include) {
              allFields.push(field);
            }
          }
        }
      } else {
        for (const fields of Object.values(this._fieldObjects)) {
          allFields.push(...fields);
        }
      }
      const storage = this.annotationStorage;
      const allIds = [];
      for (const field of allFields) {
        const {
          id
        } = field;
        allIds.push(id);
        switch (field.type) {
          case "text":
            {
              const value = field.defaultValue || "";
              storage.setValue(id, {
                value
              });
              break;
            }
          case "checkbox":
          case "radiobutton":
            {
              const value = field.defaultValue === field.exportValues;
              storage.setValue(id, {
                value
              });
              break;
            }
          case "combobox":
          case "listbox":
            {
              const value = field.defaultValue || "";
              storage.setValue(id, {
                value
              });
              break;
            }
          default:
            continue;
        }
        const domElement = document.querySelector(`[data-element-id="${id}"]`);
        if (!domElement) {
          continue;
        } else if (!GetElementsByNameSet.has(domElement)) {
          warn(`_bindResetFormAction - element not allowed: ${id}`);
          continue;
        }
        domElement.dispatchEvent(new Event("resetform"));
      }
      if (this.enableScripting) {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: allIds,
            name: "ResetForm"
          }
        });
      }
      return false;
    };
  }
}
class TextAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const image = document.createElement("img");
    image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
    image.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
    image.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    }));
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(image);
    return this.container;
  }
}
class WidgetAnnotationElement extends AnnotationElement {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(element) {
    if (this.data.hasOwnCanvas) {
      if (element.previousSibling?.nodeName === "CANVAS") {
        element.previousSibling.hidden = true;
      }
      element.hidden = false;
    }
  }
  _getKeyModifier(event) {
    return util_FeatureTest.platform.isMac ? event.metaKey : event.ctrlKey;
  }
  _setEventListener(element, elementData, baseName, eventName, valueGetter) {
    if (baseName.includes("mouse")) {
      element.addEventListener(baseName, event => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: eventName,
            value: valueGetter(event),
            shift: event.shiftKey,
            modifier: this._getKeyModifier(event)
          }
        });
      });
    } else {
      element.addEventListener(baseName, event => {
        if (baseName === "blur") {
          if (!elementData.focused || !event.relatedTarget) {
            return;
          }
          elementData.focused = false;
        } else if (baseName === "focus") {
          if (elementData.focused) {
            return;
          }
          elementData.focused = true;
        }
        if (!valueGetter) {
          return;
        }
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: eventName,
            value: valueGetter(event)
          }
        });
      });
    }
  }
  _setEventListeners(element, elementData, names, getter) {
    for (const [baseName, eventName] of names) {
      if (eventName === "Action" || this.data.actions?.[eventName]) {
        if (eventName === "Focus" || eventName === "Blur") {
          elementData ||= {
            focused: false
          };
        }
        this._setEventListener(element, elementData, baseName, eventName, getter);
        if (eventName === "Focus" && !this.data.actions?.Blur) {
          this._setEventListener(element, elementData, "blur", "Blur", null);
        } else if (eventName === "Blur" && !this.data.actions?.Focus) {
          this._setEventListener(element, elementData, "focus", "Focus", null);
        }
      }
    }
  }
  _setBackgroundColor(element) {
    const color = this.data.backgroundColor || null;
    element.style.backgroundColor = color === null ? "transparent" : Util.makeHexColor(color[0], color[1], color[2]);
  }
  _setTextStyle(element) {
    const TEXT_ALIGNMENT = ["left", "center", "right"];
    const {
      fontColor
    } = this.data.defaultAppearanceData;
    const fontSize = this.data.defaultAppearanceData.fontSize || annotation_layer_DEFAULT_FONT_SIZE;
    const style = element.style;
    let computedFontSize;
    const BORDER_SIZE = 2;
    const roundToOneDecimal = x => Math.round(10 * x) / 10;
    if (this.data.multiLine) {
      const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      const numberOfLines = Math.round(height / (LINE_FACTOR * fontSize)) || 1;
      const lineHeight = height / numberOfLines;
      computedFontSize = Math.min(fontSize, roundToOneDecimal(lineHeight / LINE_FACTOR));
    } else {
      const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      computedFontSize = Math.min(fontSize, roundToOneDecimal(height / LINE_FACTOR));
    }
    style.fontSize = `calc(${computedFontSize}px * var(--total-scale-factor))`;
    style.color = Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
    if (this.data.textAlignment !== null) {
      style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
    }
  }
  _setRequired(element, isRequired) {
    if (isRequired) {
      element.setAttribute("required", true);
    } else {
      element.removeAttribute("required");
    }
    element.setAttribute("aria-required", isRequired);
  }
}
class TextWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    const isRenderable = parameters.renderForms || parameters.data.hasOwnCanvas || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    super(parameters, {
      isRenderable
    });
  }
  setPropertyOnSiblings(base, key, value, keyInStorage) {
    const storage = this.annotationStorage;
    for (const element of this._getElementsByName(base.name, base.id)) {
      if (element.domElement) {
        element.domElement[key] = value;
      }
      storage.setValue(element.id, {
        [keyInStorage]: value
      });
    }
  }
  render() {
    const storage = this.annotationStorage;
    const id = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let element = null;
    if (this.renderForms) {
      const storedData = storage.getValue(id, {
        value: this.data.fieldValue
      });
      let textContent = storedData.value || "";
      const maxLen = storage.getValue(id, {
        charLimit: this.data.maxLen
      }).charLimit;
      if (maxLen && textContent.length > maxLen) {
        textContent = textContent.slice(0, maxLen);
      }
      let fieldFormattedValues = storedData.formattedValue || this.data.textContent?.join("\n") || null;
      if (fieldFormattedValues && this.data.comb) {
        fieldFormattedValues = fieldFormattedValues.replaceAll(/\s+/g, "");
      }
      const elementData = {
        userValue: textContent,
        formattedValue: fieldFormattedValues,
        lastCommittedValue: null,
        commitKey: 1,
        focused: false
      };
      if (this.data.multiLine) {
        element = document.createElement("textarea");
        element.textContent = fieldFormattedValues ?? textContent;
        if (this.data.doNotScroll) {
          element.style.overflowY = "hidden";
        }
      } else {
        element = document.createElement("input");
        element.type = this.data.password ? "password" : "text";
        element.setAttribute("value", fieldFormattedValues ?? textContent);
        if (this.data.doNotScroll) {
          element.style.overflowX = "hidden";
        }
      }
      if (this.data.hasOwnCanvas) {
        element.hidden = true;
      }
      GetElementsByNameSet.add(element);
      element.setAttribute("data-element-id", id);
      element.disabled = this.data.readOnly;
      element.name = this.data.fieldName;
      element.tabIndex = DEFAULT_TAB_INDEX;
      this._setRequired(element, this.data.required);
      if (maxLen) {
        element.maxLength = maxLen;
      }
      element.addEventListener("input", event => {
        storage.setValue(id, {
          value: event.target.value
        });
        this.setPropertyOnSiblings(element, "value", event.target.value, "value");
        elementData.formattedValue = null;
      });
      element.addEventListener("resetform", event => {
        const defaultValue = this.data.defaultFieldValue ?? "";
        element.value = elementData.userValue = defaultValue;
        elementData.formattedValue = null;
      });
      let blurListener = event => {
        const {
          formattedValue
        } = elementData;
        if (formattedValue !== null && formattedValue !== undefined) {
          event.target.value = formattedValue;
        }
        event.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        element.addEventListener("focus", event => {
          if (elementData.focused) {
            return;
          }
          const {
            target
          } = event;
          if (elementData.userValue) {
            target.value = elementData.userValue;
          }
          elementData.lastCommittedValue = target.value;
          elementData.commitKey = 1;
          if (!this.data.actions?.Focus) {
            elementData.focused = true;
          }
        });
        element.addEventListener("updatefromsandbox", jsEvent => {
          this.showElementAndHideCanvas(jsEvent.target);
          const actions = {
            value(event) {
              elementData.userValue = event.detail.value ?? "";
              storage.setValue(id, {
                value: elementData.userValue.toString()
              });
              event.target.value = elementData.userValue;
            },
            formattedValue(event) {
              const {
                formattedValue
              } = event.detail;
              elementData.formattedValue = formattedValue;
              if (formattedValue !== null && formattedValue !== undefined && event.target !== document.activeElement) {
                event.target.value = formattedValue;
              }
              storage.setValue(id, {
                formattedValue
              });
            },
            selRange(event) {
              event.target.setSelectionRange(...event.detail.selRange);
            },
            charLimit: event => {
              const {
                charLimit
              } = event.detail;
              const {
                target
              } = event;
              if (charLimit === 0) {
                target.removeAttribute("maxLength");
                return;
              }
              target.setAttribute("maxLength", charLimit);
              let value = elementData.userValue;
              if (!value || value.length <= charLimit) {
                return;
              }
              value = value.slice(0, charLimit);
              target.value = elementData.userValue = value;
              storage.setValue(id, {
                value
              });
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id,
                  name: "Keystroke",
                  value,
                  willCommit: true,
                  commitKey: 1,
                  selStart: target.selectionStart,
                  selEnd: target.selectionEnd
                }
              });
            }
          };
          this._dispatchEventFromSandbox(actions, jsEvent);
        });
        element.addEventListener("keydown", event => {
          elementData.commitKey = 1;
          let commitKey = -1;
          if (event.key === "Escape") {
            commitKey = 0;
          } else if (event.key === "Enter" && !this.data.multiLine) {
            commitKey = 2;
          } else if (event.key === "Tab") {
            elementData.commitKey = 3;
          }
          if (commitKey === -1) {
            return;
          }
          const {
            value
          } = event.target;
          if (elementData.lastCommittedValue === value) {
            return;
          }
          elementData.lastCommittedValue = value;
          elementData.userValue = value;
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id,
              name: "Keystroke",
              value,
              willCommit: true,
              commitKey,
              selStart: event.target.selectionStart,
              selEnd: event.target.selectionEnd
            }
          });
        });
        const _blurListener = blurListener;
        blurListener = null;
        element.addEventListener("blur", event => {
          if (!elementData.focused || !event.relatedTarget) {
            return;
          }
          if (!this.data.actions?.Blur) {
            elementData.focused = false;
          }
          const {
            value
          } = event.target;
          elementData.userValue = value;
          if (elementData.lastCommittedValue !== value) {
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id,
                name: "Keystroke",
                value,
                willCommit: true,
                commitKey: elementData.commitKey,
                selStart: event.target.selectionStart,
                selEnd: event.target.selectionEnd
              }
            });
          }
          _blurListener(event);
        });
        if (this.data.actions?.Keystroke) {
          element.addEventListener("beforeinput", event => {
            elementData.lastCommittedValue = null;
            const {
              data,
              target
            } = event;
            const {
              value,
              selectionStart,
              selectionEnd
            } = target;
            let selStart = selectionStart,
              selEnd = selectionEnd;
            switch (event.inputType) {
              case "deleteWordBackward":
                {
                  const match = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                  if (match) {
                    selStart -= match[0].length;
                  }
                  break;
                }
              case "deleteWordForward":
                {
                  const match = value.substring(selectionStart).match(/^[^\w]*\w*/);
                  if (match) {
                    selEnd += match[0].length;
                  }
                  break;
                }
              case "deleteContentBackward":
                if (selectionStart === selectionEnd) {
                  selStart -= 1;
                }
                break;
              case "deleteContentForward":
                if (selectionStart === selectionEnd) {
                  selEnd += 1;
                }
                break;
            }
            event.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id,
                name: "Keystroke",
                value,
                change: data || "",
                willCommit: false,
                selStart,
                selEnd
              }
            });
          });
        }
        this._setEventListeners(element, elementData, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.value);
      }
      if (blurListener) {
        element.addEventListener("blur", blurListener);
      }
      if (this.data.comb) {
        const fieldWidth = this.data.rect[2] - this.data.rect[0];
        const combWidth = fieldWidth / maxLen;
        element.classList.add("comb");
        element.style.letterSpacing = `calc(${combWidth}px * var(--total-scale-factor) - 1ch)`;
      }
    } else {
      element = document.createElement("div");
      element.textContent = this.data.fieldValue;
      element.style.verticalAlign = "middle";
      element.style.display = "table-cell";
      if (this.data.hasOwnCanvas) {
        element.hidden = true;
      }
    }
    this._setTextStyle(element);
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
}
class SignatureWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: !!parameters.data.hasOwnCanvas
    });
  }
}
class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    let value = storage.getValue(id, {
      value: data.exportValue === data.fieldValue
    }).value;
    if (typeof value === "string") {
      value = value !== "Off";
      storage.setValue(id, {
        value
      });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const element = document.createElement("input");
    GetElementsByNameSet.add(element);
    element.setAttribute("data-element-id", id);
    element.disabled = data.readOnly;
    this._setRequired(element, this.data.required);
    element.type = "checkbox";
    element.name = data.fieldName;
    if (value) {
      element.setAttribute("checked", true);
    }
    element.setAttribute("exportValue", data.exportValue);
    element.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("change", event => {
      const {
        name,
        checked
      } = event.target;
      for (const checkbox of this._getElementsByName(name, id)) {
        const curChecked = checked && checkbox.exportValue === data.exportValue;
        if (checkbox.domElement) {
          checkbox.domElement.checked = curChecked;
        }
        storage.setValue(checkbox.id, {
          value: curChecked
        });
      }
      storage.setValue(id, {
        value: checked
      });
    });
    element.addEventListener("resetform", event => {
      const defaultValue = data.defaultFieldValue || "Off";
      event.target.checked = defaultValue === data.exportValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      element.addEventListener("updatefromsandbox", jsEvent => {
        const actions = {
          value(event) {
            event.target.checked = event.detail.value !== "Off";
            storage.setValue(id, {
              value: event.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
    }
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
}
class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    let value = storage.getValue(id, {
      value: data.fieldValue === data.buttonValue
    }).value;
    if (typeof value === "string") {
      value = value !== data.buttonValue;
      storage.setValue(id, {
        value
      });
    }
    if (value) {
      for (const radio of this._getElementsByName(data.fieldName, id)) {
        storage.setValue(radio.id, {
          value: false
        });
      }
    }
    const element = document.createElement("input");
    GetElementsByNameSet.add(element);
    element.setAttribute("data-element-id", id);
    element.disabled = data.readOnly;
    this._setRequired(element, this.data.required);
    element.type = "radio";
    element.name = data.fieldName;
    if (value) {
      element.setAttribute("checked", true);
    }
    element.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("change", event => {
      const {
        name,
        checked
      } = event.target;
      for (const radio of this._getElementsByName(name, id)) {
        storage.setValue(radio.id, {
          value: false
        });
      }
      storage.setValue(id, {
        value: checked
      });
    });
    element.addEventListener("resetform", event => {
      const defaultValue = data.defaultFieldValue;
      event.target.checked = defaultValue !== null && defaultValue !== undefined && defaultValue === data.buttonValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      const pdfButtonValue = data.buttonValue;
      element.addEventListener("updatefromsandbox", jsEvent => {
        const actions = {
          value: event => {
            const checked = pdfButtonValue === event.detail.value;
            for (const radio of this._getElementsByName(event.target.name)) {
              const curChecked = checked && radio.id === id;
              if (radio.domElement) {
                radio.domElement.checked = curChecked;
              }
              storage.setValue(radio.id, {
                value: curChecked
              });
            }
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
    }
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
}
class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      ignoreBorder: parameters.data.hasAppearance
    });
  }
  render() {
    const container = super.render();
    container.classList.add("buttonWidgetAnnotation", "pushButton");
    const linkElement = container.lastChild;
    if (this.enableScripting && this.hasJSActions && linkElement) {
      this._setDefaultPropertiesFromJS(linkElement);
      linkElement.addEventListener("updatefromsandbox", jsEvent => {
        this._dispatchEventFromSandbox({}, jsEvent);
      });
    }
    return container;
  }
}
class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const storage = this.annotationStorage;
    const id = this.data.id;
    const storedData = storage.getValue(id, {
      value: this.data.fieldValue
    });
    const selectElement = document.createElement("select");
    GetElementsByNameSet.add(selectElement);
    selectElement.setAttribute("data-element-id", id);
    selectElement.disabled = this.data.readOnly;
    this._setRequired(selectElement, this.data.required);
    selectElement.name = this.data.fieldName;
    selectElement.tabIndex = DEFAULT_TAB_INDEX;
    let addAnEmptyEntry = this.data.combo && this.data.options.length > 0;
    if (!this.data.combo) {
      selectElement.size = this.data.options.length;
      if (this.data.multiSelect) {
        selectElement.multiple = true;
      }
    }
    selectElement.addEventListener("resetform", event => {
      const defaultValue = this.data.defaultFieldValue;
      for (const option of selectElement.options) {
        option.selected = option.value === defaultValue;
      }
    });
    for (const option of this.data.options) {
      const optionElement = document.createElement("option");
      optionElement.textContent = option.displayValue;
      optionElement.value = option.exportValue;
      if (storedData.value.includes(option.exportValue)) {
        optionElement.setAttribute("selected", true);
        addAnEmptyEntry = false;
      }
      selectElement.append(optionElement);
    }
    let removeEmptyEntry = null;
    if (addAnEmptyEntry) {
      const noneOptionElement = document.createElement("option");
      noneOptionElement.value = " ";
      noneOptionElement.setAttribute("hidden", true);
      noneOptionElement.setAttribute("selected", true);
      selectElement.prepend(noneOptionElement);
      removeEmptyEntry = () => {
        noneOptionElement.remove();
        selectElement.removeEventListener("input", removeEmptyEntry);
        removeEmptyEntry = null;
      };
      selectElement.addEventListener("input", removeEmptyEntry);
    }
    const getValue = isExport => {
      const name = isExport ? "value" : "textContent";
      const {
        options,
        multiple
      } = selectElement;
      if (!multiple) {
        return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
      }
      return Array.prototype.filter.call(options, option => option.selected).map(option => option[name]);
    };
    let selectedValues = getValue(false);
    const getItems = event => {
      const options = event.target.options;
      return Array.prototype.map.call(options, option => ({
        displayValue: option.textContent,
        exportValue: option.value
      }));
    };
    if (this.enableScripting && this.hasJSActions) {
      selectElement.addEventListener("updatefromsandbox", jsEvent => {
        const actions = {
          value(event) {
            removeEmptyEntry?.();
            const value = event.detail.value;
            const values = new Set(Array.isArray(value) ? value : [value]);
            for (const option of selectElement.options) {
              option.selected = values.has(option.value);
            }
            storage.setValue(id, {
              value: getValue(true)
            });
            selectedValues = getValue(false);
          },
          multipleSelection(event) {
            selectElement.multiple = true;
          },
          remove(event) {
            const options = selectElement.options;
            const index = event.detail.remove;
            options[index].selected = false;
            selectElement.remove(index);
            if (options.length > 0) {
              const i = Array.prototype.findIndex.call(options, option => option.selected);
              if (i === -1) {
                options[0].selected = true;
              }
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          clear(event) {
            while (selectElement.length !== 0) {
              selectElement.remove(0);
            }
            storage.setValue(id, {
              value: null,
              items: []
            });
            selectedValues = getValue(false);
          },
          insert(event) {
            const {
              index,
              displayValue,
              exportValue
            } = event.detail.insert;
            const selectChild = selectElement.children[index];
            const optionElement = document.createElement("option");
            optionElement.textContent = displayValue;
            optionElement.value = exportValue;
            if (selectChild) {
              selectChild.before(optionElement);
            } else {
              selectElement.append(optionElement);
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          items(event) {
            const {
              items
            } = event.detail;
            while (selectElement.length !== 0) {
              selectElement.remove(0);
            }
            for (const item of items) {
              const {
                displayValue,
                exportValue
              } = item;
              const optionElement = document.createElement("option");
              optionElement.textContent = displayValue;
              optionElement.value = exportValue;
              selectElement.append(optionElement);
            }
            if (selectElement.options.length > 0) {
              selectElement.options[0].selected = true;
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          indices(event) {
            const indices = new Set(event.detail.indices);
            for (const option of event.target.options) {
              option.selected = indices.has(option.index);
            }
            storage.setValue(id, {
              value: getValue(true)
            });
            selectedValues = getValue(false);
          },
          editable(event) {
            event.target.disabled = !event.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      selectElement.addEventListener("input", event => {
        const exportValue = getValue(true);
        const change = getValue(false);
        storage.setValue(id, {
          value: exportValue
        });
        event.preventDefault();
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id,
            name: "Keystroke",
            value: selectedValues,
            change,
            changeEx: exportValue,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      });
      this._setEventListeners(selectElement, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], event => event.target.value);
    } else {
      selectElement.addEventListener("input", function (event) {
        storage.setValue(id, {
          value: getValue(true)
        });
      });
    }
    if (this.data.combo) {
      this._setTextStyle(selectElement);
    }
    this._setBackgroundColor(selectElement);
    this._setDefaultPropertiesFromJS(selectElement);
    this.container.append(selectElement);
    return this.container;
  }
}
class PopupAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    const {
      data,
      elements
    } = parameters;
    super(parameters, {
      isRenderable: AnnotationElement._hasPopupData(data)
    });
    this.elements = elements;
    this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const popup = this.popup = new PopupElement({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    });
    const elementIds = [];
    for (const element of this.elements) {
      element.popup = popup;
      element.container.ariaHasPopup = "dialog";
      elementIds.push(element.data.id);
      element.addHighlightArea();
    }
    this.container.setAttribute("aria-controls", elementIds.map(id => `${AnnotationPrefix}${id}`).join(","));
    return this.container;
  }
}
class PopupElement {
  #boundKeyDown = this.#keyDown.bind(this);
  #boundHide = this.#hide.bind(this);
  #boundShow = this.#show.bind(this);
  #boundToggle = this.#toggle.bind(this);
  #color = null;
  #container = null;
  #contentsObj = null;
  #dateObj = null;
  #elements = null;
  #parent = null;
  #parentRect = null;
  #pinned = false;
  #popup = null;
  #position = null;
  #rect = null;
  #richText = null;
  #titleObj = null;
  #updates = null;
  #wasVisible = false;
  constructor({
    container,
    color,
    elements,
    titleObj,
    modificationDate,
    contentsObj,
    richText,
    parent,
    rect,
    parentRect,
    open
  }) {
    this.#container = container;
    this.#titleObj = titleObj;
    this.#contentsObj = contentsObj;
    this.#richText = richText;
    this.#parent = parent;
    this.#color = color;
    this.#rect = rect;
    this.#parentRect = parentRect;
    this.#elements = elements;
    this.#dateObj = PDFDateString.toDateObject(modificationDate);
    this.trigger = elements.flatMap(e => e.getElementsToTriggerPopup());
    for (const element of this.trigger) {
      element.addEventListener("click", this.#boundToggle);
      element.addEventListener("mouseenter", this.#boundShow);
      element.addEventListener("mouseleave", this.#boundHide);
      element.classList.add("popupTriggerArea");
    }
    for (const element of elements) {
      element.container?.addEventListener("keydown", this.#boundKeyDown);
    }
    this.#container.hidden = true;
    if (open) {
      this.#toggle();
    }
  }
  render() {
    if (this.#popup) {
      return;
    }
    const popup = this.#popup = document.createElement("div");
    popup.className = "popup";
    if (this.#color) {
      const baseColor = popup.style.outlineColor = Util.makeHexColor(...this.#color);
      popup.style.backgroundColor = `color-mix(in srgb, ${baseColor} 30%, white)`;
    }
    const header = document.createElement("span");
    header.className = "header";
    const title = document.createElement("h1");
    header.append(title);
    ({
      dir: title.dir,
      str: title.textContent
    } = this.#titleObj);
    popup.append(header);
    if (this.#dateObj) {
      const modificationDate = document.createElement("span");
      modificationDate.classList.add("popupDate");
      modificationDate.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
      modificationDate.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: this.#dateObj.valueOf()
      }));
      header.append(modificationDate);
    }
    const html = this.#html;
    if (html) {
      XfaLayer.render({
        xfaHtml: html,
        intent: "richText",
        div: popup
      });
      popup.lastChild.classList.add("richText", "popupContent");
    } else {
      const contents = this._formatContents(this.#contentsObj);
      popup.append(contents);
    }
    this.#container.append(popup);
  }
  get #html() {
    const richText = this.#richText;
    const contentsObj = this.#contentsObj;
    if (richText?.str && (!contentsObj?.str || contentsObj.str === richText.str)) {
      return this.#richText.html || null;
    }
    return null;
  }
  get #fontSize() {
    return this.#html?.attributes?.style?.fontSize || 0;
  }
  get #fontColor() {
    return this.#html?.attributes?.style?.color || null;
  }
  #makePopupContent(text) {
    const popupLines = [];
    const popupContent = {
      str: text,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [{
          name: "p",
          children: popupLines
        }]
      }
    };
    const lineAttributes = {
      style: {
        color: this.#fontColor,
        fontSize: this.#fontSize ? `calc(${this.#fontSize}px * var(--total-scale-factor))` : ""
      }
    };
    for (const line of text.split("\n")) {
      popupLines.push({
        name: "span",
        value: line,
        attributes: lineAttributes
      });
    }
    return popupContent;
  }
  _formatContents({
    str,
    dir
  }) {
    const p = document.createElement("p");
    p.classList.add("popupContent");
    p.dir = dir;
    const lines = str.split(/(?:\r\n?|\n)/);
    for (let i = 0, ii = lines.length; i < ii; ++i) {
      const line = lines[i];
      p.append(document.createTextNode(line));
      if (i < ii - 1) {
        p.append(document.createElement("br"));
      }
    }
    return p;
  }
  #keyDown(event) {
    if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
      return;
    }
    if (event.key === "Enter" || event.key === "Escape" && this.#pinned) {
      this.#toggle();
    }
  }
  updateEdited({
    rect,
    popupContent
  }) {
    this.#updates ||= {
      contentsObj: this.#contentsObj,
      richText: this.#richText
    };
    if (rect) {
      this.#position = null;
    }
    if (popupContent) {
      this.#richText = this.#makePopupContent(popupContent);
      this.#contentsObj = null;
    }
    this.#popup?.remove();
    this.#popup = null;
  }
  resetEdited() {
    if (!this.#updates) {
      return;
    }
    ({
      contentsObj: this.#contentsObj,
      richText: this.#richText
    } = this.#updates);
    this.#updates = null;
    this.#popup?.remove();
    this.#popup = null;
    this.#position = null;
  }
  #setPosition() {
    if (this.#position !== null) {
      return;
    }
    const {
      page: {
        view
      },
      viewport: {
        rawDims: {
          pageWidth,
          pageHeight,
          pageX,
          pageY
        }
      }
    } = this.#parent;
    let useParentRect = !!this.#parentRect;
    let rect = useParentRect ? this.#parentRect : this.#rect;
    for (const element of this.#elements) {
      if (!rect || Util.intersect(element.data.rect, rect) !== null) {
        rect = element.data.rect;
        useParentRect = true;
        break;
      }
    }
    const normalizedRect = Util.normalizeRect([rect[0], view[3] - rect[1] + view[1], rect[2], view[3] - rect[3] + view[1]]);
    const HORIZONTAL_SPACE_AFTER_ANNOTATION = 5;
    const parentWidth = useParentRect ? rect[2] - rect[0] + HORIZONTAL_SPACE_AFTER_ANNOTATION : 0;
    const popupLeft = normalizedRect[0] + parentWidth;
    const popupTop = normalizedRect[1];
    this.#position = [100 * (popupLeft - pageX) / pageWidth, 100 * (popupTop - pageY) / pageHeight];
    const {
      style
    } = this.#container;
    style.left = `${this.#position[0]}%`;
    style.top = `${this.#position[1]}%`;
  }
  #toggle() {
    this.#pinned = !this.#pinned;
    if (this.#pinned) {
      this.#show();
      this.#container.addEventListener("click", this.#boundToggle);
      this.#container.addEventListener("keydown", this.#boundKeyDown);
    } else {
      this.#hide();
      this.#container.removeEventListener("click", this.#boundToggle);
      this.#container.removeEventListener("keydown", this.#boundKeyDown);
    }
  }
  #show() {
    if (!this.#popup) {
      this.render();
    }
    if (!this.isVisible) {
      this.#setPosition();
      this.#container.hidden = false;
      this.#container.style.zIndex = parseInt(this.#container.style.zIndex) + 1000;
    } else if (this.#pinned) {
      this.#container.classList.add("focused");
    }
  }
  #hide() {
    this.#container.classList.remove("focused");
    if (this.#pinned || !this.isVisible) {
      return;
    }
    this.#container.hidden = true;
    this.#container.style.zIndex = parseInt(this.#container.style.zIndex) - 1000;
  }
  forceHide() {
    this.#wasVisible = this.isVisible;
    if (!this.#wasVisible) {
      return;
    }
    this.#container.hidden = true;
  }
  maybeShow() {
    if (!this.#wasVisible) {
      return;
    }
    if (!this.#popup) {
      this.#show();
    }
    this.#wasVisible = false;
    this.#container.hidden = false;
  }
  get isVisible() {
    return this.#container.hidden === false;
  }
}
class FreeTextAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.textContent = parameters.data.textContent;
    this.textPosition = parameters.data.textPosition;
    this.annotationEditorType = AnnotationEditorType.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    if (this.textContent) {
      const content = document.createElement("div");
      content.classList.add("annotationTextContent");
      content.setAttribute("role", "comment");
      for (const line of this.textContent) {
        const lineSpan = document.createElement("span");
        lineSpan.textContent = line;
        content.append(lineSpan);
      }
      this.container.append(content);
    }
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
}
class LineAnnotationElement extends AnnotationElement {
  #line = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data,
      width,
      height
    } = this;
    const svg = this.svgFactory.create(width, height, true);
    const line = this.#line = this.svgFactory.createElement("svg:line");
    line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
    line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
    line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
    line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
    line.setAttribute("stroke-width", data.borderStyle.width || 1);
    line.setAttribute("stroke", "transparent");
    line.setAttribute("fill", "transparent");
    svg.append(line);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#line;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class SquareAnnotationElement extends AnnotationElement {
  #square = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data,
      width,
      height
    } = this;
    const svg = this.svgFactory.create(width, height, true);
    const borderWidth = data.borderStyle.width;
    const square = this.#square = this.svgFactory.createElement("svg:rect");
    square.setAttribute("x", borderWidth / 2);
    square.setAttribute("y", borderWidth / 2);
    square.setAttribute("width", width - borderWidth);
    square.setAttribute("height", height - borderWidth);
    square.setAttribute("stroke-width", borderWidth || 1);
    square.setAttribute("stroke", "transparent");
    square.setAttribute("fill", "transparent");
    svg.append(square);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#square;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class CircleAnnotationElement extends AnnotationElement {
  #circle = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data,
      width,
      height
    } = this;
    const svg = this.svgFactory.create(width, height, true);
    const borderWidth = data.borderStyle.width;
    const circle = this.#circle = this.svgFactory.createElement("svg:ellipse");
    circle.setAttribute("cx", width / 2);
    circle.setAttribute("cy", height / 2);
    circle.setAttribute("rx", width / 2 - borderWidth / 2);
    circle.setAttribute("ry", height / 2 - borderWidth / 2);
    circle.setAttribute("stroke-width", borderWidth || 1);
    circle.setAttribute("stroke", "transparent");
    circle.setAttribute("fill", "transparent");
    svg.append(circle);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#circle;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class PolylineAnnotationElement extends AnnotationElement {
  #polyline = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        vertices,
        borderStyle,
        popupRef
      },
      width,
      height
    } = this;
    if (!vertices) {
      return this.container;
    }
    const svg = this.svgFactory.create(width, height, true);
    let points = [];
    for (let i = 0, ii = vertices.length; i < ii; i += 2) {
      const x = vertices[i] - rect[0];
      const y = rect[3] - vertices[i + 1];
      points.push(`${x},${y}`);
    }
    points = points.join(" ");
    const polyline = this.#polyline = this.svgFactory.createElement(this.svgElementName);
    polyline.setAttribute("points", points);
    polyline.setAttribute("stroke-width", borderStyle.width || 1);
    polyline.setAttribute("stroke", "transparent");
    polyline.setAttribute("fill", "transparent");
    svg.append(polyline);
    this.container.append(svg);
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#polyline;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class PolygonAnnotationElement extends PolylineAnnotationElement {
  constructor(parameters) {
    super(parameters);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:polygon";
  }
}
class CaretAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
}
class InkAnnotationElement extends AnnotationElement {
  #polylinesGroupElement = null;
  #polylines = [];
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polyline";
    this.annotationEditorType = this.data.it === "InkHighlight" ? AnnotationEditorType.HIGHLIGHT : AnnotationEditorType.INK;
  }
  #getTransform(rotation, rect) {
    switch (rotation) {
      case 90:
        return {
          transform: `rotate(90) translate(${-rect[0]},${rect[1]}) scale(1,-1)`,
          width: rect[3] - rect[1],
          height: rect[2] - rect[0]
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-rect[2]},${rect[1]}) scale(1,-1)`,
          width: rect[2] - rect[0],
          height: rect[3] - rect[1]
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-rect[2]},${rect[3]}) scale(1,-1)`,
          width: rect[3] - rect[1],
          height: rect[2] - rect[0]
        };
      default:
        return {
          transform: `translate(${-rect[0]},${rect[3]}) scale(1,-1)`,
          width: rect[2] - rect[0],
          height: rect[3] - rect[1]
        };
    }
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        rotation,
        inkLists,
        borderStyle,
        popupRef
      }
    } = this;
    const {
      transform,
      width,
      height
    } = this.#getTransform(rotation, rect);
    const svg = this.svgFactory.create(width, height, true);
    const g = this.#polylinesGroupElement = this.svgFactory.createElement("svg:g");
    svg.append(g);
    g.setAttribute("stroke-width", borderStyle.width || 1);
    g.setAttribute("stroke-linecap", "round");
    g.setAttribute("stroke-linejoin", "round");
    g.setAttribute("stroke-miterlimit", 10);
    g.setAttribute("stroke", "transparent");
    g.setAttribute("fill", "transparent");
    g.setAttribute("transform", transform);
    for (let i = 0, ii = inkLists.length; i < ii; i++) {
      const polyline = this.svgFactory.createElement(this.svgElementName);
      this.#polylines.push(polyline);
      polyline.setAttribute("points", inkLists[i].join(","));
      g.append(polyline);
    }
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(svg);
    this._editOnDoubleClick();
    return this.container;
  }
  updateEdited(params) {
    super.updateEdited(params);
    const {
      thickness,
      points,
      rect
    } = params;
    const g = this.#polylinesGroupElement;
    if (thickness >= 0) {
      g.setAttribute("stroke-width", thickness || 1);
    }
    if (points) {
      for (let i = 0, ii = this.#polylines.length; i < ii; i++) {
        this.#polylines[i].setAttribute("points", points[i].join(","));
      }
    }
    if (rect) {
      const {
        transform,
        width,
        height
      } = this.#getTransform(this.data.rotation, rect);
      const root = g.parentElement;
      root.setAttribute("viewBox", `0 0 ${width} ${height}`);
      g.setAttribute("transform", transform);
    }
  }
  getElementsToTriggerPopup() {
    return this.#polylines;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class HighlightAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
    this.annotationEditorType = AnnotationEditorType.HIGHLIGHT;
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("highlightAnnotation");
    this._editOnDoubleClick();
    return this.container;
  }
}
class UnderlineAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("underlineAnnotation");
    return this.container;
  }
}
class SquigglyAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("squigglyAnnotation");
    return this.container;
  }
}
class StrikeOutAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("strikeoutAnnotation");
    return this.container;
  }
}
class StampAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.annotationEditorType = AnnotationEditorType.STAMP;
  }
  render() {
    this.container.classList.add("stampAnnotation");
    this.container.setAttribute("role", "img");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
}
class FileAttachmentAnnotationElement extends AnnotationElement {
  #trigger = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true
    });
    const {
      file
    } = this.data;
    this.filename = file.filename;
    this.content = file.content;
    this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      ...file
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container,
      data
    } = this;
    let trigger;
    if (data.hasAppearance || data.fillAlpha === 0) {
      trigger = document.createElement("div");
    } else {
      trigger = document.createElement("img");
      trigger.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? "paperclip" : "pushpin"}.svg`;
      if (data.fillAlpha && data.fillAlpha < 1) {
        trigger.style = `filter: opacity(${Math.round(data.fillAlpha * 100)}%);`;
      }
    }
    trigger.addEventListener("dblclick", this.#download.bind(this));
    this.#trigger = trigger;
    const {
      isMac
    } = util_FeatureTest.platform;
    container.addEventListener("keydown", evt => {
      if (evt.key === "Enter" && (isMac ? evt.metaKey : evt.ctrlKey)) {
        this.#download();
      }
    });
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    } else {
      trigger.classList.add("popupTriggerArea");
    }
    container.append(trigger);
    return container;
  }
  getElementsToTriggerPopup() {
    return this.#trigger;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  #download() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
  }
}
class AnnotationLayer {
  #accessibilityManager = null;
  #annotationCanvasMap = null;
  #editableAnnotations = new Map();
  #structTreeLayer = null;
  constructor({
    div,
    accessibilityManager,
    annotationCanvasMap,
    annotationEditorUIManager,
    page,
    viewport,
    structTreeLayer
  }) {
    this.div = div;
    this.#accessibilityManager = accessibilityManager;
    this.#annotationCanvasMap = annotationCanvasMap;
    this.#structTreeLayer = structTreeLayer || null;
    this.page = page;
    this.viewport = viewport;
    this.zIndex = 0;
    this._annotationEditorUIManager = annotationEditorUIManager;
  }
  hasEditableAnnotations() {
    return this.#editableAnnotations.size > 0;
  }
  async #appendElement(element, id) {
    const contentElement = element.firstChild || element;
    const annotationId = contentElement.id = `${AnnotationPrefix}${id}`;
    const ariaAttributes = await this.#structTreeLayer?.getAriaAttributes(annotationId);
    if (ariaAttributes) {
      for (const [key, value] of ariaAttributes) {
        contentElement.setAttribute(key, value);
      }
    }
    this.div.append(element);
    this.#accessibilityManager?.moveElementInDOM(this.div, element, contentElement, false);
  }
  async render(params) {
    const {
      annotations
    } = params;
    const layer = this.div;
    setLayerDimensions(layer, this.viewport);
    const popupToElements = new Map();
    const elementParams = {
      data: null,
      layer,
      linkService: params.linkService,
      downloadManager: params.downloadManager,
      imageResourcesPath: params.imageResourcesPath || "",
      renderForms: params.renderForms !== false,
      svgFactory: new DOMSVGFactory(),
      annotationStorage: params.annotationStorage || new AnnotationStorage(),
      enableScripting: params.enableScripting === true,
      hasJSActions: params.hasJSActions,
      fieldObjects: params.fieldObjects,
      parent: this,
      elements: null
    };
    for (const data of annotations) {
      if (data.noHTML) {
        continue;
      }
      const isPopupAnnotation = data.annotationType === AnnotationType.POPUP;
      if (!isPopupAnnotation) {
        if (data.rect[2] === data.rect[0] || data.rect[3] === data.rect[1]) {
          continue;
        }
      } else {
        const elements = popupToElements.get(data.id);
        if (!elements) {
          continue;
        }
        elementParams.elements = elements;
      }
      elementParams.data = data;
      const element = AnnotationElementFactory.create(elementParams);
      if (!element.isRenderable) {
        continue;
      }
      if (!isPopupAnnotation && data.popupRef) {
        const elements = popupToElements.get(data.popupRef);
        if (!elements) {
          popupToElements.set(data.popupRef, [element]);
        } else {
          elements.push(element);
        }
      }
      const rendered = element.render();
      if (data.hidden) {
        rendered.style.visibility = "hidden";
      }
      await this.#appendElement(rendered, data.id);
      if (element._isEditable) {
        this.#editableAnnotations.set(element.data.id, element);
        this._annotationEditorUIManager?.renderAnnotationElement(element);
      }
    }
    this.#setAnnotationCanvasMap();
  }
  async addLinkAnnotations(annotations, linkService) {
    const elementParams = {
      data: null,
      layer: this.div,
      linkService,
      svgFactory: new DOMSVGFactory(),
      parent: this
    };
    for (const data of annotations) {
      data.borderStyle ||= AnnotationLayer._defaultBorderStyle;
      elementParams.data = data;
      const element = AnnotationElementFactory.create(elementParams);
      if (!element.isRenderable) {
        continue;
      }
      const rendered = element.render();
      await this.#appendElement(rendered, data.id);
    }
  }
  update({
    viewport
  }) {
    const layer = this.div;
    this.viewport = viewport;
    setLayerDimensions(layer, {
      rotation: viewport.rotation
    });
    this.#setAnnotationCanvasMap();
    layer.hidden = false;
  }
  #setAnnotationCanvasMap() {
    if (!this.#annotationCanvasMap) {
      return;
    }
    const layer = this.div;
    for (const [id, canvas] of this.#annotationCanvasMap) {
      const element = layer.querySelector(`[data-annotation-id="${id}"]`);
      if (!element) {
        continue;
      }
      canvas.className = "annotationContent";
      const {
        firstChild
      } = element;
      if (!firstChild) {
        element.append(canvas);
      } else if (firstChild.nodeName === "CANVAS") {
        firstChild.replaceWith(canvas);
      } else if (!firstChild.classList.contains("annotationContent")) {
        firstChild.before(canvas);
      } else {
        firstChild.after(canvas);
      }
      const editableAnnotation = this.#editableAnnotations.get(id);
      if (!editableAnnotation) {
        continue;
      }
      if (editableAnnotation._hasNoCanvas) {
        this._annotationEditorUIManager?.setMissingCanvas(id, element.id, canvas);
        editableAnnotation._hasNoCanvas = false;
      } else {
        editableAnnotation.canvas = canvas;
      }
    }
    this.#annotationCanvasMap.clear();
  }
  getEditableAnnotations() {
    return Array.from(this.#editableAnnotations.values());
  }
  getEditableAnnotation(id) {
    return this.#editableAnnotations.get(id);
  }
  static get _defaultBorderStyle() {
    return shadow(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: AnnotationBorderStyleType.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}




const EOL_PATTERN = /\r\n?|\n/g;
class FreeTextEditor extends AnnotationEditor {
  #color;
  #content = "";
  #editorDivId = `${this.id}-editor`;
  #editModeAC = null;
  #fontSize;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const proto = FreeTextEditor.prototype;
    const arrowChecker = self => self.isEmpty();
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], proto.commitOrRemove, {
      bubbles: true
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], proto.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], proto._translateEmpty, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto._translateEmpty, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto._translateEmpty, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto._translateEmpty, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto._translateEmpty, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto._translateEmpty, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto._translateEmpty, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto._translateEmpty, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  static _type = "freetext";
  static _editorType = AnnotationEditorType.FREETEXT;
  constructor(params) {
    super({
      ...params,
      name: "freeTextEditor"
    });
    this.#color = params.color || FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor;
    this.#fontSize = params.fontSize || FreeTextEditor._defaultFontSize;
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    const style = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        FreeTextEditor._defaultFontSize = value;
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        FreeTextEditor._defaultColor = value;
        break;
    }
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        this.#updateFontSize(value);
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        this.#updateColor(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, this.#fontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, this.#color]];
  }
  #updateFontSize(fontSize) {
    const setFontsize = size => {
      this.editorDiv.style.fontSize = `calc(${size}px * var(--total-scale-factor))`;
      this.translate(0, -(size - this.#fontSize) * this.parentScale);
      this.#fontSize = size;
      this.#setEditorDimensions();
    };
    const savedFontsize = this.#fontSize;
    this.addCommands({
      cmd: setFontsize.bind(this, fontSize),
      undo: setFontsize.bind(this, savedFontsize),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  #updateColor(color) {
    const setColor = col => {
      this.#color = this.editorDiv.style.color = col;
    };
    const savedColor = this.#color;
    this.addCommands({
      cmd: setColor.bind(this, color),
      undo: setColor.bind(this, savedColor),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _translateEmpty(x, y) {
    this._uiManager.translateSelectedEditors(x, y, true);
  }
  getInitialTranslation() {
    const scale = this.parentScale;
    return [-FreeTextEditor._internalPadding * scale, -(FreeTextEditor._internalPadding + this.#fontSize) * scale];
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  enableEditMode() {
    if (!super.enableEditMode()) {
      return false;
    }
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    this.#editModeAC = new AbortController();
    const signal = this._uiManager.combinedSignal(this.#editModeAC);
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal
    });
    return true;
  }
  disableEditMode() {
    if (!super.disableEditMode()) {
      return false;
    }
    this.overlayDiv.classList.add("enabled");
    this.editorDiv.contentEditable = false;
    this.div.setAttribute("aria-activedescendant", this.#editorDivId);
    this._isDraggable = true;
    this.#editModeAC?.abort();
    this.#editModeAC = null;
    this.div.focus({
      preventScroll: true
    });
    this.isEditing = false;
    this.parent.div.classList.add("freetextEditing");
    return true;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    super.focusin(event);
    if (event.target !== this.editorDiv) {
      this.editorDiv.focus();
    }
  }
  onceAdded(focus) {
    if (this.width) {
      return;
    }
    this.enableEditMode();
    if (focus) {
      this.editorDiv.focus();
    }
    if (this._initialOptions?.isCentered) {
      this.center();
    }
    this._initialOptions = null;
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  #extractText() {
    const buffer = [];
    this.editorDiv.normalize();
    let prevChild = null;
    for (const child of this.editorDiv.childNodes) {
      if (prevChild?.nodeType === Node.TEXT_NODE && child.nodeName === "BR") {
        continue;
      }
      buffer.push(FreeTextEditor.#getNodeContent(child));
      prevChild = child;
    }
    return buffer.join("\n");
  }
  #setEditorDimensions() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    let rect;
    if (this.isAttachedToDOM) {
      rect = this.div.getBoundingClientRect();
    } else {
      const {
        currentLayer,
        div
      } = this;
      const savedDisplay = div.style.display;
      const savedVisibility = div.classList.contains("hidden");
      div.classList.remove("hidden");
      div.style.display = "hidden";
      currentLayer.div.append(this.div);
      rect = div.getBoundingClientRect();
      div.remove();
      div.style.display = savedDisplay;
      div.classList.toggle("hidden", savedVisibility);
    }
    if (this.rotation % 180 === this.parentRotation % 180) {
      this.width = rect.width / parentWidth;
      this.height = rect.height / parentHeight;
    } else {
      this.width = rect.height / parentWidth;
      this.height = rect.width / parentHeight;
    }
    this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    super.commit();
    this.disableEditMode();
    const savedText = this.#content;
    const newText = this.#content = this.#extractText().trimEnd();
    if (savedText === newText) {
      return;
    }
    const setText = text => {
      this.#content = text;
      if (!text) {
        this.remove();
        return;
      }
      this.#setContent();
      this._uiManager.rebuild(this);
      this.#setEditorDimensions();
    };
    this.addCommands({
      cmd: () => {
        setText(newText);
      },
      undo: () => {
        setText(savedText);
      },
      mustExec: false
    });
    this.#setEditorDimensions();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  keydown(event) {
    if (event.target === this.div && event.key === "Enter") {
      this.enterInEditMode();
      event.preventDefault();
    }
  }
  editorDivKeydown(event) {
    FreeTextEditor._keyboardManager.exec(this, event);
  }
  editorDivFocus(event) {
    this.isEditing = true;
  }
  editorDivBlur(event) {
    this.isEditing = false;
  }
  editorDivInput(event) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  get canChangeContent() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this._isCopy || this.annotationElementId) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", this.#editorDivId);
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
    this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
    this.enableEditing();
    this.editorDiv.contentEditable = true;
    const {
      style
    } = this.editorDiv;
    style.fontSize = `calc(${this.#fontSize}px * var(--total-scale-factor))`;
    style.color = this.#color;
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    if (this._isCopy || this.annotationElementId) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position
        } = this._initialData;
        let [tx, ty] = this.getInitialTranslation();
        [tx, ty] = this.pageTranslationToScreen(tx, ty);
        const [pageWidth, pageHeight] = this.pageDimensions;
        const [pageX, pageY] = this.pageTranslation;
        let posX, posY;
        switch (this.rotation) {
          case 0:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY + this.height - (position[1] - pageY) / pageHeight;
            break;
          case 90:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [ty, -tx];
            break;
          case 180:
            posX = baseX - this.width + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [-tx, -ty];
            break;
          case 270:
            posX = baseX + (position[0] - pageX - this.height * pageHeight) / pageWidth;
            posY = baseY + (position[1] - pageY - this.width * pageWidth) / pageHeight;
            [tx, ty] = [-ty, tx];
            break;
        }
        this.setAt(posX * parentWidth, posY * parentHeight, tx, ty);
      } else {
        this._moveAfterPaste(baseX, baseY);
      }
      this.#setContent();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  static #getNodeContent(node) {
    return (node.nodeType === Node.TEXT_NODE ? node.nodeValue : node.innerText).replaceAll(EOL_PATTERN, "");
  }
  editorDivPaste(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const {
      types
    } = clipboardData;
    if (types.length === 1 && types[0] === "text/plain") {
      return;
    }
    event.preventDefault();
    const paste = FreeTextEditor.#deserializeContent(clipboardData.getData("text") || "").replaceAll(EOL_PATTERN, "\n");
    if (!paste) {
      return;
    }
    const selection = window.getSelection();
    if (!selection.rangeCount) {
      return;
    }
    this.editorDiv.normalize();
    selection.deleteFromDocument();
    const range = selection.getRangeAt(0);
    if (!paste.includes("\n")) {
      range.insertNode(document.createTextNode(paste));
      this.editorDiv.normalize();
      selection.collapseToStart();
      return;
    }
    const {
      startContainer,
      startOffset
    } = range;
    const bufferBefore = [];
    const bufferAfter = [];
    if (startContainer.nodeType === Node.TEXT_NODE) {
      const parent = startContainer.parentElement;
      bufferAfter.push(startContainer.nodeValue.slice(startOffset).replaceAll(EOL_PATTERN, ""));
      if (parent !== this.editorDiv) {
        let buffer = bufferBefore;
        for (const child of this.editorDiv.childNodes) {
          if (child === parent) {
            buffer = bufferAfter;
            continue;
          }
          buffer.push(FreeTextEditor.#getNodeContent(child));
        }
      }
      bufferBefore.push(startContainer.nodeValue.slice(0, startOffset).replaceAll(EOL_PATTERN, ""));
    } else if (startContainer === this.editorDiv) {
      let buffer = bufferBefore;
      let i = 0;
      for (const child of this.editorDiv.childNodes) {
        if (i++ === startOffset) {
          buffer = bufferAfter;
        }
        buffer.push(FreeTextEditor.#getNodeContent(child));
      }
    }
    this.#content = `${bufferBefore.join("\n")}${paste}${bufferAfter.join("\n")}`;
    this.#setContent();
    const newRange = new Range();
    let beforeLength = Math.sumPrecise(bufferBefore.map(line => line.length));
    for (const {
      firstChild
    } of this.editorDiv.childNodes) {
      if (firstChild.nodeType === Node.TEXT_NODE) {
        const length = firstChild.nodeValue.length;
        if (beforeLength <= length) {
          newRange.setStart(firstChild, beforeLength);
          newRange.setEnd(firstChild, beforeLength);
          break;
        }
        beforeLength -= length;
      }
    }
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
  #setContent() {
    this.editorDiv.replaceChildren();
    if (!this.#content) {
      return;
    }
    for (const line of this.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      this.editorDiv.append(div);
    }
  }
  #serializeContent() {
    return this.#content.replaceAll("\xa0", " ");
  }
  static #deserializeContent(content) {
    return content.replaceAll(" ", "\xa0");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof FreeTextAnnotationElement) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize,
            fontColor
          },
          rect,
          rotation,
          id,
          popupRef
        },
        textContent,
        textPosition,
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      if (!textContent || textContent.length === 0) {
        return null;
      }
      initialData = data = {
        annotationType: AnnotationEditorType.FREETEXT,
        color: Array.from(fontColor),
        fontSize,
        value: textContent.join("\n"),
        position: textPosition,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    editor.#fontSize = data.fontSize;
    editor.#color = Util.makeHexColor(...data.color);
    editor.#content = FreeTextEditor.#deserializeContent(data.value);
    editor.annotationElementId = data.id || null;
    editor._initialData = initialData;
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const padding = FreeTextEditor._internalPadding * this.parentScale;
    const rect = this.getRect(padding, padding);
    const color = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#color);
    const serialized = {
      annotationType: AnnotationEditorType.FREETEXT,
      color,
      fontSize: this.#fontSize,
      value: this.#serializeContent(),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      serialized.isCopy = true;
      return serialized;
    }
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      value,
      fontSize,
      color,
      pageIndex
    } = this._initialData;
    return this._hasBeenMoved || serialized.value !== value || serialized.fontSize !== fontSize || serialized.color.some((c, i) => c !== color[i]) || serialized.pageIndex !== pageIndex;
  }
  renderAnnotationElement(annotation) {
    const content = super.renderAnnotationElement(annotation);
    if (this.deleted) {
      return content;
    }
    const {
      style
    } = content;
    style.fontSize = `calc(${this.#fontSize}px * var(--total-scale-factor))`;
    style.color = this.#color;
    content.replaceChildren();
    for (const line of this.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      content.append(div);
    }
    const padding = FreeTextEditor._internalPadding * this.parentScale;
    annotation.updateEdited({
      rect: this.getRect(padding, padding),
      popupContent: this.#content
    });
    return content;
  }
  resetAnnotationElement(annotation) {
    super.resetAnnotationElement(annotation);
    annotation.resetEdited();
  }
}

class Outline {
  static PRECISION = 1e-4;
  toSVGPath() {
    unreachable("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    unreachable("Abstract getter `box` must be implemented.");
  }
  serialize(_bbox, _rotation) {
    unreachable("Abstract method `serialize` must be implemented.");
  }
  static _rescale(src, tx, ty, sx, sy, dest) {
    dest ||= new Float32Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i] * sx;
      dest[i + 1] = ty + src[i + 1] * sy;
    }
    return dest;
  }
  static _rescaleAndSwap(src, tx, ty, sx, sy, dest) {
    dest ||= new Float32Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i + 1] * sx;
      dest[i + 1] = ty + src[i] * sy;
    }
    return dest;
  }
  static _translate(src, tx, ty, dest) {
    dest ||= new Float32Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i];
      dest[i + 1] = ty + src[i + 1];
    }
    return dest;
  }
  static svgRound(x) {
    return Math.round(x * 10000);
  }
  static _normalizePoint(x, y, parentWidth, parentHeight, rotation) {
    switch (rotation) {
      case 90:
        return [1 - y / parentWidth, x / parentHeight];
      case 180:
        return [1 - x / parentWidth, 1 - y / parentHeight];
      case 270:
        return [y / parentWidth, 1 - x / parentHeight];
      default:
        return [x / parentWidth, y / parentHeight];
    }
  }
  static _normalizePagePoint(x, y, rotation) {
    switch (rotation) {
      case 90:
        return [1 - y, x];
      case 180:
        return [1 - x, 1 - y];
      case 270:
        return [y, 1 - x];
      default:
        return [x, y];
    }
  }
  static createBezierPoints(x1, y1, x2, y2, x3, y3) {
    return [(x1 + 5 * x2) / 6, (y1 + 5 * y2) / 6, (5 * x2 + x3) / 6, (5 * y2 + y3) / 6, (x2 + x3) / 2, (y2 + y3) / 2];
  }
}


class FreeDrawOutliner {
  #box;
  #bottom = [];
  #innerMargin;
  #isLTR;
  #top = [];
  #last = new Float32Array(18);
  #lastX;
  #lastY;
  #min;
  #min_dist;
  #scaleFactor;
  #thickness;
  #points = [];
  static #MIN_DIST = 8;
  static #MIN_DIFF = 2;
  static #MIN = FreeDrawOutliner.#MIN_DIST + FreeDrawOutliner.#MIN_DIFF;
  constructor({
    x,
    y
  }, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    this.#box = box;
    this.#thickness = thickness * scaleFactor;
    this.#isLTR = isLTR;
    this.#last.set([NaN, NaN, NaN, NaN, x, y], 6);
    this.#innerMargin = innerMargin;
    this.#min_dist = FreeDrawOutliner.#MIN_DIST * scaleFactor;
    this.#min = FreeDrawOutliner.#MIN * scaleFactor;
    this.#scaleFactor = scaleFactor;
    this.#points.push(x, y);
  }
  isEmpty() {
    return isNaN(this.#last[8]);
  }
  #getLastCoords() {
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [x, y, width, height] = this.#box;
    return [(this.#lastX + (lastTop[0] - lastBottom[0]) / 2 - x) / width, (this.#lastY + (lastTop[1] - lastBottom[1]) / 2 - y) / height, (this.#lastX + (lastBottom[0] - lastTop[0]) / 2 - x) / width, (this.#lastY + (lastBottom[1] - lastTop[1]) / 2 - y) / height];
  }
  add({
    x,
    y
  }) {
    this.#lastX = x;
    this.#lastY = y;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    let [x1, y1, x2, y2] = this.#last.subarray(8, 12);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(diffX, diffY);
    if (d < this.#min) {
      return false;
    }
    const diffD = d - this.#min_dist;
    const K = diffD / d;
    const shiftX = K * diffX;
    const shiftY = K * diffY;
    let x0 = x1;
    let y0 = y1;
    x1 = x2;
    y1 = y2;
    x2 += shiftX;
    y2 += shiftY;
    this.#points?.push(x, y);
    const nX = -shiftY / diffD;
    const nY = shiftX / diffD;
    const thX = nX * this.#thickness;
    const thY = nY * this.#thickness;
    this.#last.set(this.#last.subarray(2, 8), 0);
    this.#last.set([x2 + thX, y2 + thY], 4);
    this.#last.set(this.#last.subarray(14, 18), 12);
    this.#last.set([x2 - thX, y2 - thY], 16);
    if (isNaN(this.#last[6])) {
      if (this.#top.length === 0) {
        this.#last.set([x1 + thX, y1 + thY], 2);
        this.#top.push(NaN, NaN, NaN, NaN, (x1 + thX - layerX) / layerWidth, (y1 + thY - layerY) / layerHeight);
        this.#last.set([x1 - thX, y1 - thY], 14);
        this.#bottom.push(NaN, NaN, NaN, NaN, (x1 - thX - layerX) / layerWidth, (y1 - thY - layerY) / layerHeight);
      }
      this.#last.set([x0, y0, x1, y1, x2, y2], 6);
      return !this.isEmpty();
    }
    this.#last.set([x0, y0, x1, y1, x2, y2], 6);
    const angle = Math.abs(Math.atan2(y0 - y1, x0 - x1) - Math.atan2(shiftY, shiftX));
    if (angle < Math.PI / 2) {
      [x1, y1, x2, y2] = this.#last.subarray(2, 6);
      this.#top.push(NaN, NaN, NaN, NaN, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
      [x1, y1, x0, y0] = this.#last.subarray(14, 18);
      this.#bottom.push(NaN, NaN, NaN, NaN, ((x0 + x1) / 2 - layerX) / layerWidth, ((y0 + y1) / 2 - layerY) / layerHeight);
      return true;
    }
    [x0, y0, x1, y1, x2, y2] = this.#last.subarray(0, 6);
    this.#top.push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    [x2, y2, x1, y1, x0, y0] = this.#last.subarray(12, 18);
    this.#bottom.push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    return true;
  }
  toSVGPath() {
    if (this.isEmpty()) {
      return "";
    }
    const top = this.#top;
    const bottom = this.#bottom;
    if (isNaN(this.#last[6]) && !this.isEmpty()) {
      return this.#toSVGPathTwoPoints();
    }
    const buffer = [];
    buffer.push(`M${top[4]} ${top[5]}`);
    for (let i = 6; i < top.length; i += 6) {
      if (isNaN(top[i])) {
        buffer.push(`L${top[i + 4]} ${top[i + 5]}`);
      } else {
        buffer.push(`C${top[i]} ${top[i + 1]} ${top[i + 2]} ${top[i + 3]} ${top[i + 4]} ${top[i + 5]}`);
      }
    }
    this.#toSVGPathEnd(buffer);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      if (isNaN(bottom[i])) {
        buffer.push(`L${bottom[i + 4]} ${bottom[i + 5]}`);
      } else {
        buffer.push(`C${bottom[i]} ${bottom[i + 1]} ${bottom[i + 2]} ${bottom[i + 3]} ${bottom[i + 4]} ${bottom[i + 5]}`);
      }
    }
    this.#toSVGPathStart(buffer);
    return buffer.join(" ");
  }
  #toSVGPathTwoPoints() {
    const [x, y, width, height] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    return `M${(this.#last[2] - x) / width} ${(this.#last[3] - y) / height} L${(this.#last[4] - x) / width} ${(this.#last[5] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(this.#last[16] - x) / width} ${(this.#last[17] - y) / height} L${(this.#last[14] - x) / width} ${(this.#last[15] - y) / height} Z`;
  }
  #toSVGPathStart(buffer) {
    const bottom = this.#bottom;
    buffer.push(`L${bottom[4]} ${bottom[5]} Z`);
  }
  #toSVGPathEnd(buffer) {
    const [x, y, width, height] = this.#box;
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    buffer.push(`L${(lastTop[0] - x) / width} ${(lastTop[1] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(lastBottom[0] - x) / width} ${(lastBottom[1] - y) / height}`);
  }
  newFreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR) {
    return new FreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR);
  }
  getOutlines() {
    const top = this.#top;
    const bottom = this.#bottom;
    const last = this.#last;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const points = new Float32Array((this.#points?.length ?? 0) + 2);
    for (let i = 0, ii = points.length - 2; i < ii; i += 2) {
      points[i] = (this.#points[i] - layerX) / layerWidth;
      points[i + 1] = (this.#points[i + 1] - layerY) / layerHeight;
    }
    points[points.length - 2] = (this.#lastX - layerX) / layerWidth;
    points[points.length - 1] = (this.#lastY - layerY) / layerHeight;
    if (isNaN(last[6]) && !this.isEmpty()) {
      return this.#getOutlineTwoPoints(points);
    }
    const outline = new Float32Array(this.#top.length + 24 + this.#bottom.length);
    let N = top.length;
    for (let i = 0; i < N; i += 2) {
      if (isNaN(top[i])) {
        outline[i] = outline[i + 1] = NaN;
        continue;
      }
      outline[i] = top[i];
      outline[i + 1] = top[i + 1];
    }
    N = this.#getOutlineEnd(outline, N);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      for (let j = 0; j < 6; j += 2) {
        if (isNaN(bottom[i + j])) {
          outline[N] = outline[N + 1] = NaN;
          N += 2;
          continue;
        }
        outline[N] = bottom[i + j];
        outline[N + 1] = bottom[i + j + 1];
        N += 2;
      }
    }
    this.#getOutlineStart(outline, N);
    return this.newFreeDrawOutline(outline, points, this.#box, this.#scaleFactor, this.#innerMargin, this.#isLTR);
  }
  #getOutlineTwoPoints(points) {
    const last = this.#last;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    const outline = new Float32Array(36);
    outline.set([NaN, NaN, NaN, NaN, (last[2] - layerX) / layerWidth, (last[3] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[4] - layerX) / layerWidth, (last[5] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (last[16] - layerX) / layerWidth, (last[17] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[14] - layerX) / layerWidth, (last[15] - layerY) / layerHeight], 0);
    return this.newFreeDrawOutline(outline, points, this.#box, this.#scaleFactor, this.#innerMargin, this.#isLTR);
  }
  #getOutlineStart(outline, pos) {
    const bottom = this.#bottom;
    outline.set([NaN, NaN, NaN, NaN, bottom[4], bottom[5]], pos);
    return pos += 6;
  }
  #getOutlineEnd(outline, pos) {
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    outline.set([NaN, NaN, NaN, NaN, (lastTop[0] - layerX) / layerWidth, (lastTop[1] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (lastBottom[0] - layerX) / layerWidth, (lastBottom[1] - layerY) / layerHeight], pos);
    return pos += 24;
  }
}
class FreeDrawOutline extends Outline {
  #box;
  #bbox = new Float32Array(4);
  #innerMargin;
  #isLTR;
  #points;
  #scaleFactor;
  #outline;
  constructor(outline, points, box, scaleFactor, innerMargin, isLTR) {
    super();
    this.#outline = outline;
    this.#points = points;
    this.#box = box;
    this.#scaleFactor = scaleFactor;
    this.#innerMargin = innerMargin;
    this.#isLTR = isLTR;
    this.lastPoint = [NaN, NaN];
    this.#computeMinMax(isLTR);
    const [x, y, width, height] = this.#bbox;
    for (let i = 0, ii = outline.length; i < ii; i += 2) {
      outline[i] = (outline[i] - x) / width;
      outline[i + 1] = (outline[i + 1] - y) / height;
    }
    for (let i = 0, ii = points.length; i < ii; i += 2) {
      points[i] = (points[i] - x) / width;
      points[i + 1] = (points[i + 1] - y) / height;
    }
  }
  toSVGPath() {
    const buffer = [`M${this.#outline[4]} ${this.#outline[5]}`];
    for (let i = 6, ii = this.#outline.length; i < ii; i += 6) {
      if (isNaN(this.#outline[i])) {
        buffer.push(`L${this.#outline[i + 4]} ${this.#outline[i + 5]}`);
        continue;
      }
      buffer.push(`C${this.#outline[i]} ${this.#outline[i + 1]} ${this.#outline[i + 2]} ${this.#outline[i + 3]} ${this.#outline[i + 4]} ${this.#outline[i + 5]}`);
    }
    buffer.push("Z");
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], rotation) {
    const width = trX - blX;
    const height = trY - blY;
    let outline;
    let points;
    switch (rotation) {
      case 0:
        outline = Outline._rescale(this.#outline, blX, trY, width, -height);
        points = Outline._rescale(this.#points, blX, trY, width, -height);
        break;
      case 90:
        outline = Outline._rescaleAndSwap(this.#outline, blX, blY, width, height);
        points = Outline._rescaleAndSwap(this.#points, blX, blY, width, height);
        break;
      case 180:
        outline = Outline._rescale(this.#outline, trX, blY, -width, height);
        points = Outline._rescale(this.#points, trX, blY, -width, height);
        break;
      case 270:
        outline = Outline._rescaleAndSwap(this.#outline, trX, trY, -width, -height);
        points = Outline._rescaleAndSwap(this.#points, trX, trY, -width, -height);
        break;
    }
    return {
      outline: Array.from(outline),
      points: [Array.from(points)]
    };
  }
  #computeMinMax(isLTR) {
    const outline = this.#outline;
    let lastX = outline[4];
    let lastY = outline[5];
    const minMax = [lastX, lastY, lastX, lastY];
    let lastPointX = lastX;
    let lastPointY = lastY;
    const ltrCallback = isLTR ? Math.max : Math.min;
    for (let i = 6, ii = outline.length; i < ii; i += 6) {
      const x = outline[i + 4],
        y = outline[i + 5];
      if (isNaN(outline[i])) {
        Util.pointBoundingBox(x, y, minMax);
        if (lastPointY < y) {
          lastPointX = x;
          lastPointY = y;
        } else if (lastPointY === y) {
          lastPointX = ltrCallback(lastPointX, x);
        }
      } else {
        const bbox = [Infinity, Infinity, -Infinity, -Infinity];
        Util.bezierBoundingBox(lastX, lastY, ...outline.slice(i, i + 6), bbox);
        Util.rectBoundingBox(...bbox, minMax);
        if (lastPointY < bbox[3]) {
          lastPointX = bbox[2];
          lastPointY = bbox[3];
        } else if (lastPointY === bbox[3]) {
          lastPointX = ltrCallback(lastPointX, bbox[2]);
        }
      }
      lastX = x;
      lastY = y;
    }
    const bbox = this.#bbox;
    bbox[0] = minMax[0] - this.#innerMargin;
    bbox[1] = minMax[1] - this.#innerMargin;
    bbox[2] = minMax[2] - minMax[0] + 2 * this.#innerMargin;
    bbox[3] = minMax[3] - minMax[1] + 2 * this.#innerMargin;
    this.lastPoint = [lastPointX, lastPointY];
  }
  get box() {
    return this.#bbox;
  }
  newOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    return new FreeDrawOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin);
  }
  getNewOutline(thickness, innerMargin) {
    const [x, y, width, height] = this.#bbox;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const sx = width * layerWidth;
    const sy = height * layerHeight;
    const tx = x * layerWidth + layerX;
    const ty = y * layerHeight + layerY;
    const outliner = this.newOutliner({
      x: this.#points[0] * sx + tx,
      y: this.#points[1] * sy + ty
    }, this.#box, this.#scaleFactor, thickness, this.#isLTR, innerMargin ?? this.#innerMargin);
    for (let i = 2; i < this.#points.length; i += 2) {
      outliner.add({
        x: this.#points[i] * sx + tx,
        y: this.#points[i + 1] * sy + ty
      });
    }
    return outliner.getOutlines();
  }
}



class HighlightOutliner {
  #box;
  #lastPoint;
  #verticalEdges = [];
  #intervals = [];
  constructor(boxes, borderWidth = 0, innerMargin = 0, isLTR = true) {
    const minMax = [Infinity, Infinity, -Infinity, -Infinity];
    const NUMBER_OF_DIGITS = 4;
    const EPSILON = 10 ** -NUMBER_OF_DIGITS;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const x1 = Math.floor((x - borderWidth) / EPSILON) * EPSILON;
      const x2 = Math.ceil((x + width + borderWidth) / EPSILON) * EPSILON;
      const y1 = Math.floor((y - borderWidth) / EPSILON) * EPSILON;
      const y2 = Math.ceil((y + height + borderWidth) / EPSILON) * EPSILON;
      const left = [x1, y1, y2, true];
      const right = [x2, y1, y2, false];
      this.#verticalEdges.push(left, right);
      Util.rectBoundingBox(x1, y1, x2, y2, minMax);
    }
    const bboxWidth = minMax[2] - minMax[0] + 2 * innerMargin;
    const bboxHeight = minMax[3] - minMax[1] + 2 * innerMargin;
    const shiftedMinX = minMax[0] - innerMargin;
    const shiftedMinY = minMax[1] - innerMargin;
    const lastEdge = this.#verticalEdges.at(isLTR ? -1 : -2);
    const lastPoint = [lastEdge[0], lastEdge[2]];
    for (const edge of this.#verticalEdges) {
      const [x, y1, y2] = edge;
      edge[0] = (x - shiftedMinX) / bboxWidth;
      edge[1] = (y1 - shiftedMinY) / bboxHeight;
      edge[2] = (y2 - shiftedMinY) / bboxHeight;
    }
    this.#box = new Float32Array([shiftedMinX, shiftedMinY, bboxWidth, bboxHeight]);
    this.#lastPoint = lastPoint;
  }
  getOutlines() {
    this.#verticalEdges.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const outlineVerticalEdges = [];
    for (const edge of this.#verticalEdges) {
      if (edge[3]) {
        outlineVerticalEdges.push(...this.#breakEdge(edge));
        this.#insert(edge);
      } else {
        this.#remove(edge);
        outlineVerticalEdges.push(...this.#breakEdge(edge));
      }
    }
    return this.#getOutlines(outlineVerticalEdges);
  }
  #getOutlines(outlineVerticalEdges) {
    const edges = [];
    const allEdges = new Set();
    for (const edge of outlineVerticalEdges) {
      const [x, y1, y2] = edge;
      edges.push([x, y1, edge], [x, y2, edge]);
    }
    edges.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    for (let i = 0, ii = edges.length; i < ii; i += 2) {
      const edge1 = edges[i][2];
      const edge2 = edges[i + 1][2];
      edge1.push(edge2);
      edge2.push(edge1);
      allEdges.add(edge1);
      allEdges.add(edge2);
    }
    const outlines = [];
    let outline;
    while (allEdges.size > 0) {
      const edge = allEdges.values().next().value;
      let [x, y1, y2, edge1, edge2] = edge;
      allEdges.delete(edge);
      let lastPointX = x;
      let lastPointY = y1;
      outline = [x, y2];
      outlines.push(outline);
      while (true) {
        let e;
        if (allEdges.has(edge1)) {
          e = edge1;
        } else if (allEdges.has(edge2)) {
          e = edge2;
        } else {
          break;
        }
        allEdges.delete(e);
        [x, y1, y2, edge1, edge2] = e;
        if (lastPointX !== x) {
          outline.push(lastPointX, lastPointY, x, lastPointY === y1 ? y1 : y2);
          lastPointX = x;
        }
        lastPointY = lastPointY === y1 ? y2 : y1;
      }
      outline.push(lastPointX, lastPointY);
    }
    return new HighlightOutline(outlines, this.#box, this.#lastPoint);
  }
  #binarySearch(y) {
    const array = this.#intervals;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const middle = start + end >> 1;
      const y1 = array[middle][0];
      if (y1 === y) {
        return middle;
      }
      if (y1 < y) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return end + 1;
  }
  #insert([, y1, y2]) {
    const index = this.#binarySearch(y1);
    this.#intervals.splice(index, 0, [y1, y2]);
  }
  #remove([, y1, y2]) {
    const index = this.#binarySearch(y1);
    for (let i = index; i < this.#intervals.length; i++) {
      const [start, end] = this.#intervals[i];
      if (start !== y1) {
        break;
      }
      if (start === y1 && end === y2) {
        this.#intervals.splice(i, 1);
        return;
      }
    }
    for (let i = index - 1; i >= 0; i--) {
      const [start, end] = this.#intervals[i];
      if (start !== y1) {
        break;
      }
      if (start === y1 && end === y2) {
        this.#intervals.splice(i, 1);
        return;
      }
    }
  }
  #breakEdge(edge) {
    const [x, y1, y2] = edge;
    const results = [[x, y1, y2]];
    const index = this.#binarySearch(y2);
    for (let i = 0; i < index; i++) {
      const [start, end] = this.#intervals[i];
      for (let j = 0, jj = results.length; j < jj; j++) {
        const [, y3, y4] = results[j];
        if (end <= y3 || y4 <= start) {
          continue;
        }
        if (y3 >= start) {
          if (y4 > end) {
            results[j][1] = end;
          } else {
            if (jj === 1) {
              return [];
            }
            results.splice(j, 1);
            j--;
            jj--;
          }
          continue;
        }
        results[j][2] = start;
        if (y4 > end) {
          results.push([x, end, y4]);
        }
      }
    }
    return results;
  }
}
class HighlightOutline extends Outline {
  #box;
  #outlines;
  constructor(outlines, box, lastPoint) {
    super();
    this.#outlines = outlines;
    this.#box = box;
    this.lastPoint = lastPoint;
  }
  toSVGPath() {
    const buffer = [];
    for (const polygon of this.#outlines) {
      let [prevX, prevY] = polygon;
      buffer.push(`M${prevX} ${prevY}`);
      for (let i = 2; i < polygon.length; i += 2) {
        const x = polygon[i];
        const y = polygon[i + 1];
        if (x === prevX) {
          buffer.push(`V${y}`);
          prevY = y;
        } else if (y === prevY) {
          buffer.push(`H${x}`);
          prevX = x;
        }
      }
      buffer.push("Z");
    }
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], _rotation) {
    const outlines = [];
    const width = trX - blX;
    const height = trY - blY;
    for (const outline of this.#outlines) {
      const points = new Array(outline.length);
      for (let i = 0; i < outline.length; i += 2) {
        points[i] = blX + outline[i] * width;
        points[i + 1] = trY - outline[i + 1] * height;
      }
      outlines.push(points);
    }
    return outlines;
  }
  get box() {
    return this.#box;
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
class FreeHighlightOutliner extends FreeDrawOutliner {
  newFreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR) {
    return new FreeHighlightOutline(outline, points, box, scaleFactor, innerMargin, isLTR);
  }
}
class FreeHighlightOutline extends FreeDrawOutline {
  newOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    return new FreeHighlightOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin);
  }
}



class ColorPicker {
  #button = null;
  #buttonSwatch = null;
  #defaultColor;
  #dropdown = null;
  #dropdownWasFromKeyboard = false;
  #isMainColorPicker = false;
  #editor = null;
  #eventBus;
  #openDropdownAC = null;
  #uiManager = null;
  #type;
  static #l10nColor = null;
  static get _keyboardManager() {
    return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape", "mac+Escape"], ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], ColorPicker.prototype._moveToEnd]]));
  }
  constructor({
    editor = null,
    uiManager = null
  }) {
    if (editor) {
      this.#isMainColorPicker = false;
      this.#type = AnnotationEditorParamsType.HIGHLIGHT_COLOR;
      this.#editor = editor;
    } else {
      this.#isMainColorPicker = true;
      this.#type = AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR;
    }
    this.#uiManager = editor?._uiManager || uiManager;
    this.#eventBus = this.#uiManager._eventBus;
    this.#defaultColor = editor?.color || this.#uiManager?.highlightColors.values().next().value || "#FFFF98";
    ColorPicker.#l10nColor ||= Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    });
  }
  renderButton() {
    const button = this.#button = document.createElement("button");
    button.className = "colorPicker";
    button.tabIndex = "0";
    button.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    button.setAttribute("aria-haspopup", true);
    const signal = this.#uiManager._signal;
    button.addEventListener("click", this.#openDropdown.bind(this), {
      signal
    });
    button.addEventListener("keydown", this.#keyDown.bind(this), {
      signal
    });
    const swatch = this.#buttonSwatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.setAttribute("aria-hidden", true);
    swatch.style.backgroundColor = this.#defaultColor;
    button.append(swatch);
    return button;
  }
  renderMainDropdown() {
    const dropdown = this.#dropdown = this.#getDropdownRoot();
    dropdown.setAttribute("aria-orientation", "horizontal");
    dropdown.setAttribute("aria-labelledby", "highlightColorPickerLabel");
    return dropdown;
  }
  #getDropdownRoot() {
    const div = document.createElement("div");
    const signal = this.#uiManager._signal;
    div.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    div.className = "dropdown";
    div.role = "listbox";
    div.setAttribute("aria-multiselectable", false);
    div.setAttribute("aria-orientation", "vertical");
    div.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    for (const [name, color] of this.#uiManager.highlightColors) {
      const button = document.createElement("button");
      button.tabIndex = "0";
      button.role = "option";
      button.setAttribute("data-color", color);
      button.title = name;
      button.setAttribute("data-l10n-id", ColorPicker.#l10nColor[name]);
      const swatch = document.createElement("span");
      button.append(swatch);
      swatch.className = "swatch";
      swatch.style.backgroundColor = color;
      button.setAttribute("aria-selected", color === this.#defaultColor);
      button.addEventListener("click", this.#colorSelect.bind(this, color), {
        signal
      });
      div.append(button);
    }
    div.addEventListener("keydown", this.#keyDown.bind(this), {
      signal
    });
    return div;
  }
  #colorSelect(color, event) {
    event.stopPropagation();
    this.#eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: this.#type,
      value: color
    });
  }
  _colorSelectFromKeyboard(event) {
    if (event.target === this.#button) {
      this.#openDropdown(event);
      return;
    }
    const color = event.target.getAttribute("data-color");
    if (!color) {
      return;
    }
    this.#colorSelect(color, event);
  }
  _moveToNext(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    if (event.target === this.#button) {
      this.#dropdown.firstChild?.focus();
      return;
    }
    event.target.nextSibling?.focus();
  }
  _moveToPrevious(event) {
    if (event.target === this.#dropdown?.firstChild || event.target === this.#button) {
      if (this.#isDropdownVisible) {
        this._hideDropdownFromKeyboard();
      }
      return;
    }
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
    }
    event.target.previousSibling?.focus();
  }
  _moveToBeginning(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    this.#dropdown.firstChild?.focus();
  }
  _moveToEnd(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    this.#dropdown.lastChild?.focus();
  }
  #keyDown(event) {
    ColorPicker._keyboardManager.exec(this, event);
  }
  #openDropdown(event) {
    if (this.#isDropdownVisible) {
      this.hideDropdown();
      return;
    }
    this.#dropdownWasFromKeyboard = event.detail === 0;
    if (!this.#openDropdownAC) {
      this.#openDropdownAC = new AbortController();
      window.addEventListener("pointerdown", this.#pointerDown.bind(this), {
        signal: this.#uiManager.combinedSignal(this.#openDropdownAC)
      });
    }
    if (this.#dropdown) {
      this.#dropdown.classList.remove("hidden");
      return;
    }
    const root = this.#dropdown = this.#getDropdownRoot();
    this.#button.append(root);
  }
  #pointerDown(event) {
    if (this.#dropdown?.contains(event.target)) {
      return;
    }
    this.hideDropdown();
  }
  hideDropdown() {
    this.#dropdown?.classList.add("hidden");
    this.#openDropdownAC?.abort();
    this.#openDropdownAC = null;
  }
  get #isDropdownVisible() {
    return this.#dropdown && !this.#dropdown.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (this.#isMainColorPicker) {
      return;
    }
    if (!this.#isDropdownVisible) {
      this.#editor?.unselect();
      return;
    }
    this.hideDropdown();
    this.#button.focus({
      preventScroll: true,
      focusVisible: this.#dropdownWasFromKeyboard
    });
  }
  updateColor(color) {
    if (this.#buttonSwatch) {
      this.#buttonSwatch.style.backgroundColor = color;
    }
    if (!this.#dropdown) {
      return;
    }
    const i = this.#uiManager.highlightColors.values();
    for (const child of this.#dropdown.children) {
      child.setAttribute("aria-selected", i.next().value === color);
    }
  }
  destroy() {
    this.#button?.remove();
    this.#button = null;
    this.#buttonSwatch = null;
    this.#dropdown?.remove();
    this.#dropdown = null;
  }
}







class HighlightEditor extends AnnotationEditor {
  #anchorNode = null;
  #anchorOffset = 0;
  #boxes;
  #clipPathId = null;
  #colorPicker = null;
  #focusOutlines = null;
  #focusNode = null;
  #focusOffset = 0;
  #highlightDiv = null;
  #highlightOutlines = null;
  #id = null;
  #isFreeHighlight = false;
  #lastPoint = null;
  #opacity;
  #outlineId = null;
  #text = "";
  #thickness;
  #methodOfCreation = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _type = "highlight";
  static _editorType = AnnotationEditorType.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    const proto = HighlightEditor.prototype;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], proto._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], proto._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], proto._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], proto._moveCaret, {
      args: [3]
    }]]));
  }
  constructor(params) {
    super({
      ...params,
      name: "highlightEditor"
    });
    this.color = params.color || HighlightEditor._defaultColor;
    this.#thickness = params.thickness || HighlightEditor._defaultThickness;
    this.#opacity = params.opacity || HighlightEditor._defaultOpacity;
    this.#boxes = params.boxes || null;
    this.#methodOfCreation = params.methodOfCreation || "";
    this.#text = params.text || "";
    this._isDraggable = false;
    this.defaultL10nId = "pdfjs-editor-highlight-editor";
    if (params.highlightId > -1) {
      this.#isFreeHighlight = true;
      this.#createFreeOutlines(params);
      this.#addToDrawLayer();
    } else if (this.#boxes) {
      this.#anchorNode = params.anchorNode;
      this.#anchorOffset = params.anchorOffset;
      this.#focusNode = params.focusNode;
      this.#focusOffset = params.focusOffset;
      this.#createOutlines();
      this.#addToDrawLayer();
      this.rotate(this.rotation);
    }
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this.#isFreeHighlight ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: this.#thickness,
      methodOfCreation: this.#methodOfCreation
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(data) {
    return {
      numberOfColors: data.get("color").size
    };
  }
  #createOutlines() {
    const outliner = new HighlightOutliner(this.#boxes, 0.001);
    this.#highlightOutlines = outliner.getOutlines();
    [this.x, this.y, this.width, this.height] = this.#highlightOutlines.box;
    const outlinerForOutline = new HighlightOutliner(this.#boxes, 0.0025, 0.001, this._uiManager.direction === "ltr");
    this.#focusOutlines = outlinerForOutline.getOutlines();
    const {
      lastPoint
    } = this.#focusOutlines;
    this.#lastPoint = [(lastPoint[0] - this.x) / this.width, (lastPoint[1] - this.y) / this.height];
  }
  #createFreeOutlines({
    highlightOutlines,
    highlightId,
    clipPathId
  }) {
    this.#highlightOutlines = highlightOutlines;
    const extraThickness = 1.5;
    this.#focusOutlines = highlightOutlines.getNewOutline(this.#thickness / 2 + extraThickness, 0.0025);
    if (highlightId >= 0) {
      this.#id = highlightId;
      this.#clipPathId = clipPathId;
      this.parent.drawLayer.finalizeDraw(highlightId, {
        bbox: highlightOutlines.box,
        path: {
          d: highlightOutlines.toSVGPath()
        }
      });
      this.#outlineId = this.parent.drawLayer.drawOutline({
        rootClass: {
          highlightOutline: true,
          free: true
        },
        bbox: this.#focusOutlines.box,
        path: {
          d: this.#focusOutlines.toSVGPath()
        }
      }, true);
    } else if (this.parent) {
      const angle = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(this.#id, {
        bbox: HighlightEditor.#rotateBbox(this.#highlightOutlines.box, (angle - this.rotation + 360) % 360),
        path: {
          d: highlightOutlines.toSVGPath()
        }
      });
      this.parent.drawLayer.updateProperties(this.#outlineId, {
        bbox: HighlightEditor.#rotateBbox(this.#focusOutlines.box, angle),
        path: {
          d: this.#focusOutlines.toSVGPath()
        }
      });
    }
    const [x, y, width, height] = highlightOutlines.box;
    switch (this.rotation) {
      case 0:
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        break;
      case 90:
        {
          const [pageWidth, pageHeight] = this.parentDimensions;
          this.x = y;
          this.y = 1 - x;
          this.width = width * pageHeight / pageWidth;
          this.height = height * pageWidth / pageHeight;
          break;
        }
      case 180:
        this.x = 1 - x;
        this.y = 1 - y;
        this.width = width;
        this.height = height;
        break;
      case 270:
        {
          const [pageWidth, pageHeight] = this.parentDimensions;
          this.x = 1 - y;
          this.y = x;
          this.width = width * pageHeight / pageWidth;
          this.height = height * pageWidth / pageHeight;
          break;
        }
    }
    const {
      lastPoint
    } = this.#focusOutlines;
    this.#lastPoint = [(lastPoint[0] - x) / width, (lastPoint[1] - y) / height];
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    HighlightEditor._defaultColor ||= uiManager.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
        HighlightEditor._defaultColor = value;
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        HighlightEditor._defaultThickness = value;
        break;
    }
  }
  translateInPage(x, y) {}
  get toolbarPosition() {
    return this.#lastPoint;
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        this.#updateColor(value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        this.#updateThickness(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, HighlightEditor._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, this.#thickness || HighlightEditor._defaultThickness], [AnnotationEditorParamsType.HIGHLIGHT_FREE, this.#isFreeHighlight]];
  }
  #updateColor(color) {
    const setColorAndOpacity = (col, opa) => {
      this.color = col;
      this.#opacity = opa;
      this.parent?.drawLayer.updateProperties(this.#id, {
        root: {
          fill: col,
          "fill-opacity": opa
        }
      });
      this.#colorPicker?.updateColor(col);
    };
    const savedColor = this.color;
    const savedOpacity = this.#opacity;
    this.addCommands({
      cmd: setColorAndOpacity.bind(this, color, HighlightEditor._defaultOpacity),
      undo: setColorAndOpacity.bind(this, savedColor, savedOpacity),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.highlightColorNames.get(color)
    }, true);
  }
  #updateThickness(thickness) {
    const savedThickness = this.#thickness;
    const setThickness = th => {
      this.#thickness = th;
      this.#changeThickness(th);
    };
    this.addCommands({
      cmd: setThickness.bind(this, thickness),
      undo: setThickness.bind(this, savedThickness),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "thickness_changed",
      thickness
    }, true);
  }
  async addEditToolbar() {
    const toolbar = await super.addEditToolbar();
    if (!toolbar) {
      return null;
    }
    if (this._uiManager.highlightColors) {
      this.#colorPicker = new ColorPicker({
        editor: this
      });
      toolbar.addColorPicker(this.#colorPicker);
    }
    return toolbar;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#getRotation());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(tx, ty) {
    return super.getRect(tx, ty, this.#getRotation());
  }
  onceAdded(focus) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    if (focus) {
      this.div.focus();
    }
  }
  remove() {
    this.#cleanDrawLayer();
    this._reportTelemetry({
      action: "deleted"
    });
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    this.#addToDrawLayer();
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    let mustBeSelected = false;
    if (this.parent && !parent) {
      this.#cleanDrawLayer();
    } else if (parent) {
      this.#addToDrawLayer(parent);
      mustBeSelected = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(parent);
    this.show(this._isVisible);
    if (mustBeSelected) {
      this.select();
    }
  }
  #changeThickness(thickness) {
    if (!this.#isFreeHighlight) {
      return;
    }
    this.#createFreeOutlines({
      highlightOutlines: this.#highlightOutlines.getNewOutline(thickness / 2)
    });
    this.fixAndSetPosition();
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
  }
  #cleanDrawLayer() {
    if (this.#id === null || !this.parent) {
      return;
    }
    this.parent.drawLayer.remove(this.#id);
    this.#id = null;
    this.parent.drawLayer.remove(this.#outlineId);
    this.#outlineId = null;
  }
  #addToDrawLayer(parent = this.parent) {
    if (this.#id !== null) {
      return;
    }
    ({
      id: this.#id,
      clipPathId: this.#clipPathId
    } = parent.drawLayer.draw({
      bbox: this.#highlightOutlines.box,
      root: {
        viewBox: "0 0 1 1",
        fill: this.color,
        "fill-opacity": this.#opacity
      },
      rootClass: {
        highlight: true,
        free: this.#isFreeHighlight
      },
      path: {
        d: this.#highlightOutlines.toSVGPath()
      }
    }, false, true));
    this.#outlineId = parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: this.#isFreeHighlight
      },
      bbox: this.#focusOutlines.box,
      path: {
        d: this.#focusOutlines.toSVGPath()
      }
    }, this.#isFreeHighlight);
    if (this.#highlightDiv) {
      this.#highlightDiv.style.clipPath = this.#clipPathId;
    }
  }
  static #rotateBbox([x, y, width, height], angle) {
    switch (angle) {
      case 90:
        return [1 - y - height, x, height, width];
      case 180:
        return [1 - x - width, 1 - y - height, width, height];
      case 270:
        return [y, 1 - x - width, height, width];
    }
    return [x, y, width, height];
  }
  rotate(angle) {
    const {
      drawLayer
    } = this.parent;
    let box;
    if (this.#isFreeHighlight) {
      angle = (angle - this.rotation + 360) % 360;
      box = HighlightEditor.#rotateBbox(this.#highlightOutlines.box, angle);
    } else {
      box = HighlightEditor.#rotateBbox([this.x, this.y, this.width, this.height], angle);
    }
    drawLayer.updateProperties(this.#id, {
      bbox: box,
      root: {
        "data-main-rotation": angle
      }
    });
    drawLayer.updateProperties(this.#outlineId, {
      bbox: HighlightEditor.#rotateBbox(this.#focusOutlines.box, angle),
      root: {
        "data-main-rotation": angle
      }
    });
  }
  render() {
    if (this.div) {
      return this.div;
    }
    const div = super.render();
    if (this.#text) {
      div.setAttribute("aria-label", this.#text);
      div.setAttribute("role", "mark");
    }
    if (this.#isFreeHighlight) {
      div.classList.add("free");
    } else {
      this.div.addEventListener("keydown", this.#keydown.bind(this), {
        signal: this._uiManager._signal
      });
    }
    const highlightDiv = this.#highlightDiv = document.createElement("div");
    div.append(highlightDiv);
    highlightDiv.setAttribute("aria-hidden", "true");
    highlightDiv.className = "internal";
    highlightDiv.style.clipPath = this.#clipPathId;
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
    bindEvents(this, this.#highlightDiv, ["pointerover", "pointerleave"]);
    this.enableEditing();
    return div;
  }
  pointerover() {
    if (!this.isSelected) {
      this.parent?.drawLayer.updateProperties(this.#outlineId, {
        rootClass: {
          hovered: true
        }
      });
    }
  }
  pointerleave() {
    if (!this.isSelected) {
      this.parent?.drawLayer.updateProperties(this.#outlineId, {
        rootClass: {
          hovered: false
        }
      });
    }
  }
  #keydown(event) {
    HighlightEditor._keyboardManager.exec(this, event);
  }
  _moveCaret(direction) {
    this.parent.unselect(this);
    switch (direction) {
      case 0:
      case 2:
        this.#setCaret(true);
        break;
      case 1:
      case 3:
        this.#setCaret(false);
        break;
    }
  }
  #setCaret(start) {
    if (!this.#anchorNode) {
      return;
    }
    const selection = window.getSelection();
    if (start) {
      selection.setPosition(this.#anchorNode, this.#anchorOffset);
    } else {
      selection.setPosition(this.#focusNode, this.#focusOffset);
    }
  }
  select() {
    super.select();
    if (!this.#outlineId) {
      return;
    }
    this.parent?.drawLayer.updateProperties(this.#outlineId, {
      rootClass: {
        hovered: false,
        selected: true
      }
    });
  }
  unselect() {
    super.unselect();
    if (!this.#outlineId) {
      return;
    }
    this.parent?.drawLayer.updateProperties(this.#outlineId, {
      rootClass: {
        selected: false
      }
    });
    if (!this.#isFreeHighlight) {
      this.#setCaret(false);
    }
  }
  get _mustFixPosition() {
    return !this.#isFreeHighlight;
  }
  show(visible = this._isVisible) {
    super.show(visible);
    if (this.parent) {
      this.parent.drawLayer.updateProperties(this.#id, {
        rootClass: {
          hidden: !visible
        }
      });
      this.parent.drawLayer.updateProperties(this.#outlineId, {
        rootClass: {
          hidden: !visible
        }
      });
    }
  }
  #getRotation() {
    return this.#isFreeHighlight ? this.rotation : 0;
  }
  #serializeBoxes() {
    if (this.#isFreeHighlight) {
      return null;
    }
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const boxes = this.#boxes;
    const quadPoints = new Float32Array(boxes.length * 8);
    let i = 0;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const sx = x * pageWidth + pageX;
      const sy = (1 - y) * pageHeight + pageY;
      quadPoints[i] = quadPoints[i + 4] = sx;
      quadPoints[i + 1] = quadPoints[i + 3] = sy;
      quadPoints[i + 2] = quadPoints[i + 6] = sx + width * pageWidth;
      quadPoints[i + 5] = quadPoints[i + 7] = sy - height * pageHeight;
      i += 8;
    }
    return quadPoints;
  }
  #serializeOutlines(rect) {
    return this.#highlightOutlines.serialize(rect, this.#getRotation());
  }
  static startHighlighting(parent, isLTR, {
    target: textLayer,
    x,
    y
  }) {
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    const ac = new AbortController();
    const signal = parent.combinedSignal(ac);
    const pointerUpCallback = e => {
      ac.abort();
      this.#endHighlight(parent, e);
    };
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerdown", stopEvent, {
      capture: true,
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    textLayer.addEventListener("pointermove", this.#highlightMove.bind(this, parent), {
      signal
    });
    this._freeHighlight = new FreeHighlightOutliner({
      x,
      y
    }, [layerX, layerY, parentWidth, parentHeight], parent.scale, this._defaultThickness / 2, isLTR, 0.001);
    ({
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = parent.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: true,
        free: true
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, true, true));
  }
  static #highlightMove(parent, event) {
    if (this._freeHighlight.add(event)) {
      parent.drawLayer.updateProperties(this._freeHighlightId, {
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      });
    }
  }
  static #endHighlight(parent, event) {
    if (!this._freeHighlight.isEmpty()) {
      parent.createAndAddNewEditor(event, false, {
        highlightId: this._freeHighlightId,
        highlightOutlines: this._freeHighlight.getOutlines(),
        clipPathId: this._freeHighlightClipId,
        methodOfCreation: "main_toolbar"
      });
    } else {
      parent.drawLayer.remove(this._freeHighlightId);
    }
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof HighlightAnnotationElement) {
      const {
        data: {
          quadPoints,
          rect,
          rotation,
          id,
          color,
          opacity,
          popupRef
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color),
        opacity,
        quadPoints,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    } else if (data instanceof InkAnnotationElement) {
      const {
        data: {
          inkLists,
          rect,
          rotation,
          id,
          color,
          borderStyle: {
            rawWidth: thickness
          },
          popupRef
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color),
        thickness,
        inkLists,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    }
    const {
      color,
      quadPoints,
      inkLists,
      opacity
    } = data;
    const editor = await super.deserialize(data, parent, uiManager);
    editor.color = Util.makeHexColor(...color);
    editor.#opacity = opacity || 1;
    if (inkLists) {
      editor.#thickness = data.thickness;
    }
    editor.annotationElementId = data.id || null;
    editor._initialData = initialData;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [pageX, pageY] = editor.pageTranslation;
    if (quadPoints) {
      const boxes = editor.#boxes = [];
      for (let i = 0; i < quadPoints.length; i += 8) {
        boxes.push({
          x: (quadPoints[i] - pageX) / pageWidth,
          y: 1 - (quadPoints[i + 1] - pageY) / pageHeight,
          width: (quadPoints[i + 2] - quadPoints[i]) / pageWidth,
          height: (quadPoints[i + 1] - quadPoints[i + 5]) / pageHeight
        });
      }
      editor.#createOutlines();
      editor.#addToDrawLayer();
      editor.rotate(editor.rotation);
    } else if (inkLists) {
      editor.#isFreeHighlight = true;
      const points = inkLists[0];
      const point = {
        x: points[0] - pageX,
        y: pageHeight - (points[1] - pageY)
      };
      const outliner = new FreeHighlightOutliner(point, [0, 0, pageWidth, pageHeight], 1, editor.#thickness / 2, true, 0.001);
      for (let i = 0, ii = points.length; i < ii; i += 2) {
        point.x = points[i] - pageX;
        point.y = pageHeight - (points[i + 1] - pageY);
        outliner.add(point);
      }
      const {
        id,
        clipPathId
      } = parent.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: editor.color,
          "fill-opacity": editor._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: outliner.toSVGPath()
        }
      }, true, true);
      editor.#createFreeOutlines({
        highlightOutlines: outliner.getOutlines(),
        highlightId: id,
        clipPathId
      });
      editor.#addToDrawLayer();
      editor.rotate(editor.parentRotation);
    }
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty() || isForCopying) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const rect = this.getRect(0, 0);
    const color = AnnotationEditor._colorManager.convert(this.color);
    const serialized = {
      annotationType: AnnotationEditorType.HIGHLIGHT,
      color,
      opacity: this.#opacity,
      thickness: this.#thickness,
      quadPoints: this.#serializeBoxes(),
      outlines: this.#serializeOutlines(rect),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.#getRotation(),
      structTreeParentId: this._structTreeParentId
    };
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      color
    } = this._initialData;
    return serialized.color.some((c, i) => c !== color[i]);
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getRect(0, 0)
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}



class DrawingOptions {
  #svgProperties = Object.create(null);
  updateProperty(name, value) {
    this[name] = value;
    this.updateSVGProperty(name, value);
  }
  updateProperties(properties) {
    if (!properties) {
      return;
    }
    for (const [name, value] of Object.entries(properties)) {
      if (!name.startsWith("_")) {
        this.updateProperty(name, value);
      }
    }
  }
  updateSVGProperty(name, value) {
    this.#svgProperties[name] = value;
  }
  toSVGProperties() {
    const root = this.#svgProperties;
    this.#svgProperties = Object.create(null);
    return {
      root
    };
  }
  reset() {
    this.#svgProperties = Object.create(null);
  }
  updateAll(options = this) {
    this.updateProperties(options);
  }
  clone() {
    unreachable("Not implemented");
  }
}
class DrawingEditor extends AnnotationEditor {
  #drawOutlines = null;
  #mustBeCommitted;
  _drawId = null;
  static _currentDrawId = -1;
  static _currentParent = null;
  static #currentDraw = null;
  static #currentDrawingAC = null;
  static #currentDrawingOptions = null;
  static #currentPointerId = NaN;
  static #currentPointerType = null;
  static #currentPointerIds = null;
  static #currentMoveTimestamp = NaN;
  static _INNER_MARGIN = 3;
  constructor(params) {
    super(params);
    this.#mustBeCommitted = params.mustBeCommitted || false;
    this._addOutlines(params);
  }
  _addOutlines(params) {
    if (params.drawOutlines) {
      this.#createDrawOutlines(params);
      this.#addToDrawLayer();
    }
  }
  #createDrawOutlines({
    drawOutlines,
    drawId,
    drawingOptions
  }) {
    this.#drawOutlines = drawOutlines;
    this._drawingOptions ||= drawingOptions;
    if (drawId >= 0) {
      this._drawId = drawId;
      this.parent.drawLayer.finalizeDraw(drawId, drawOutlines.defaultProperties);
    } else {
      this._drawId = this.#createDrawing(drawOutlines, this.parent);
    }
    this.#updateBbox(drawOutlines.box);
  }
  #createDrawing(drawOutlines, parent) {
    const {
      id
    } = parent.drawLayer.draw(DrawingEditor._mergeSVGProperties(this._drawingOptions.toSVGProperties(), drawOutlines.defaultSVGProperties), false, false);
    return id;
  }
  static _mergeSVGProperties(p1, p2) {
    const p1Keys = new Set(Object.keys(p1));
    for (const [key, value] of Object.entries(p2)) {
      if (p1Keys.has(key)) {
        Object.assign(p1[key], value);
      } else {
        p1[key] = value;
      }
    }
    return p1;
  }
  static getDefaultDrawingOptions(_options) {
    unreachable("Not implemented");
  }
  static get typesMap() {
    unreachable("Not implemented");
  }
  static get isDrawer() {
    return true;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static updateDefaultParams(type, value) {
    const propertyName = this.typesMap.get(type);
    if (propertyName) {
      this._defaultDrawingOptions.updateProperty(propertyName, value);
    }
    if (this._currentParent) {
      DrawingEditor.#currentDraw.updateProperty(propertyName, value);
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  updateParams(type, value) {
    const propertyName = this.constructor.typesMap.get(type);
    if (propertyName) {
      this._updateProperty(type, propertyName, value);
    }
  }
  static get defaultPropertiesToUpdate() {
    const properties = [];
    const options = this._defaultDrawingOptions;
    for (const [type, name] of this.typesMap) {
      properties.push([type, options[name]]);
    }
    return properties;
  }
  get propertiesToUpdate() {
    const properties = [];
    const {
      _drawingOptions
    } = this;
    for (const [type, name] of this.constructor.typesMap) {
      properties.push([type, _drawingOptions[name]]);
    }
    return properties;
  }
  _updateProperty(type, name, value) {
    const options = this._drawingOptions;
    const savedValue = options[name];
    const setter = val => {
      options.updateProperty(name, val);
      const bbox = this.#drawOutlines.updateProperty(name, val);
      if (bbox) {
        this.#updateBbox(bbox);
      }
      this.parent?.drawLayer.updateProperties(this._drawId, options.toSVGProperties());
    };
    this.addCommands({
      cmd: setter.bind(this, value),
      undo: setter.bind(this, savedValue),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#drawOutlines.getPathResizingSVGProperties(this.#convertToDrawSpace()), {
      bbox: this.#rotateBox()
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#drawOutlines.getPathResizedSVGProperties(this.#convertToDrawSpace()), {
      bbox: this.#rotateBox()
    }));
  }
  _onTranslating(_x, _y) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: this.#rotateBox()
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#drawOutlines.getPathTranslatedSVGProperties(this.#convertToDrawSpace(), this.parentDimensions), {
      bbox: this.#rotateBox()
    }));
  }
  _onStartDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: true
      }
    });
  }
  _onStopDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: false
      }
    });
  }
  commit() {
    super.commit();
    this.disableEditMode();
    this.disableEditing();
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return true;
  }
  onceAdded(focus) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    this._isDraggable = true;
    if (this.#mustBeCommitted) {
      this.#mustBeCommitted = false;
      this.commit();
      this.parent.setSelected(this);
      if (focus && this.isOnScreen) {
        this.div.focus();
      }
    }
  }
  remove() {
    this.#cleanDrawLayer();
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    this.#addToDrawLayer();
    this.#updateBbox(this.#drawOutlines.box);
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    let mustBeSelected = false;
    if (this.parent && !parent) {
      this._uiManager.removeShouldRescale(this);
      this.#cleanDrawLayer();
    } else if (parent) {
      this._uiManager.addShouldRescale(this);
      this.#addToDrawLayer(parent);
      mustBeSelected = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(parent);
    if (mustBeSelected) {
      this.select();
    }
  }
  #cleanDrawLayer() {
    if (this._drawId === null || !this.parent) {
      return;
    }
    this.parent.drawLayer.remove(this._drawId);
    this._drawId = null;
    this._drawingOptions.reset();
  }
  #addToDrawLayer(parent = this.parent) {
    if (this._drawId !== null && this.parent === parent) {
      return;
    }
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, parent.drawLayer);
      return;
    }
    this._drawingOptions.updateAll();
    this._drawId = this.#createDrawing(this.#drawOutlines, parent);
  }
  #convertToParentSpace([x, y, width, height]) {
    const {
      parentDimensions: [pW, pH],
      rotation
    } = this;
    switch (rotation) {
      case 90:
        return [y, 1 - x, width * (pH / pW), height * (pW / pH)];
      case 180:
        return [1 - x, 1 - y, width, height];
      case 270:
        return [1 - y, x, width * (pH / pW), height * (pW / pH)];
      default:
        return [x, y, width, height];
    }
  }
  #convertToDrawSpace() {
    const {
      x,
      y,
      width,
      height,
      parentDimensions: [pW, pH],
      rotation
    } = this;
    switch (rotation) {
      case 90:
        return [1 - y, x, width * (pW / pH), height * (pH / pW)];
      case 180:
        return [1 - x, 1 - y, width, height];
      case 270:
        return [y, 1 - x, width * (pW / pH), height * (pH / pW)];
      default:
        return [x, y, width, height];
    }
  }
  #updateBbox(bbox) {
    [this.x, this.y, this.width, this.height] = this.#convertToParentSpace(bbox);
    if (this.div) {
      this.fixAndSetPosition();
      const [parentWidth, parentHeight] = this.parentDimensions;
      this.setDims(this.width * parentWidth, this.height * parentHeight);
    }
    this._onResized();
  }
  #rotateBox() {
    const {
      x,
      y,
      width,
      height,
      rotation,
      parentRotation,
      parentDimensions: [pW, pH]
    } = this;
    switch ((rotation * 4 + parentRotation) / 90) {
      case 1:
        return [1 - y - height, x, height, width];
      case 2:
        return [1 - x - width, 1 - y - height, width, height];
      case 3:
        return [y, 1 - x - width, height, width];
      case 4:
        return [x, y - width * (pW / pH), height * (pH / pW), width * (pW / pH)];
      case 5:
        return [1 - y, x, width * (pW / pH), height * (pH / pW)];
      case 6:
        return [1 - x - height * (pH / pW), 1 - y, height * (pH / pW), width * (pW / pH)];
      case 7:
        return [y - width * (pW / pH), 1 - x - height * (pH / pW), width * (pW / pH), height * (pH / pW)];
      case 8:
        return [x - width, y - height, width, height];
      case 9:
        return [1 - y, x - width, height, width];
      case 10:
        return [1 - x, 1 - y, width, height];
      case 11:
        return [y - height, 1 - x, height, width];
      case 12:
        return [x - height * (pH / pW), y, height * (pH / pW), width * (pW / pH)];
      case 13:
        return [1 - y - width * (pW / pH), x - height * (pH / pW), width * (pW / pH), height * (pH / pW)];
      case 14:
        return [1 - x, 1 - y - width * (pW / pH), height * (pH / pW), width * (pW / pH)];
      case 15:
        return [y, 1 - x, width * (pW / pH), height * (pH / pW)];
      default:
        return [x, y, width, height];
    }
  }
  rotate() {
    if (!this.parent) {
      return;
    }
    this.parent.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties({
      bbox: this.#rotateBox()
    }, this.#drawOutlines.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    this.#updateBbox(this.#drawOutlines.updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {}
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this._isCopy) {
      baseX = this.x;
      baseY = this.y;
    }
    const div = super.render();
    div.classList.add("draw");
    const drawDiv = document.createElement("div");
    div.append(drawDiv);
    drawDiv.setAttribute("aria-hidden", "true");
    drawDiv.className = "internal";
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
    this._uiManager.addShouldRescale(this);
    this.disableEditing();
    if (this._isCopy) {
      this._moveAfterPaste(baseX, baseY);
    }
    return div;
  }
  static createDrawerInstance(_x, _y, _parentWidth, _parentHeight, _rotation) {
    unreachable("Not implemented");
  }
  static startDrawing(parent, uiManager, _isLTR, event) {
    const {
      target,
      offsetX: x,
      offsetY: y,
      pointerId,
      pointerType
    } = event;
    if (DrawingEditor.#currentPointerType && DrawingEditor.#currentPointerType !== pointerType) {
      return;
    }
    const {
      viewport: {
        rotation
      }
    } = parent;
    const {
      width: parentWidth,
      height: parentHeight
    } = target.getBoundingClientRect();
    const ac = DrawingEditor.#currentDrawingAC = new AbortController();
    const signal = parent.combinedSignal(ac);
    DrawingEditor.#currentPointerId ||= pointerId;
    DrawingEditor.#currentPointerType ??= pointerType;
    window.addEventListener("pointerup", e => {
      if (DrawingEditor.#currentPointerId === e.pointerId) {
        this._endDraw(e);
      } else {
        DrawingEditor.#currentPointerIds?.delete(e.pointerId);
      }
    }, {
      signal
    });
    window.addEventListener("pointercancel", e => {
      if (DrawingEditor.#currentPointerId === e.pointerId) {
        this._currentParent.endDrawingSession();
      } else {
        DrawingEditor.#currentPointerIds?.delete(e.pointerId);
      }
    }, {
      signal
    });
    window.addEventListener("pointerdown", e => {
      if (DrawingEditor.#currentPointerType !== e.pointerType) {
        return;
      }
      (DrawingEditor.#currentPointerIds ||= new Set()).add(e.pointerId);
      if (DrawingEditor.#currentDraw.isCancellable()) {
        DrawingEditor.#currentDraw.removeLastElement();
        if (DrawingEditor.#currentDraw.isEmpty()) {
          this._currentParent.endDrawingSession(true);
        } else {
          this._endDraw(null);
        }
      }
    }, {
      capture: true,
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    target.addEventListener("pointermove", this._drawMove.bind(this), {
      signal
    });
    target.addEventListener("touchmove", e => {
      if (e.timeStamp === DrawingEditor.#currentMoveTimestamp) {
        stopEvent(e);
      }
    }, {
      signal
    });
    parent.toggleDrawing();
    uiManager._editorUndoBar?.hide();
    if (DrawingEditor.#currentDraw) {
      parent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#currentDraw.startNew(x, y, parentWidth, parentHeight, rotation));
      return;
    }
    uiManager.updateUIForDefaultProperties(this);
    DrawingEditor.#currentDraw = this.createDrawerInstance(x, y, parentWidth, parentHeight, rotation);
    DrawingEditor.#currentDrawingOptions = this.getDefaultDrawingOptions();
    this._currentParent = parent;
    ({
      id: this._currentDrawId
    } = parent.drawLayer.draw(this._mergeSVGProperties(DrawingEditor.#currentDrawingOptions.toSVGProperties(), DrawingEditor.#currentDraw.defaultSVGProperties), true, false));
  }
  static _drawMove(event) {
    DrawingEditor.#currentMoveTimestamp = -1;
    if (!DrawingEditor.#currentDraw) {
      return;
    }
    const {
      offsetX,
      offsetY,
      pointerId
    } = event;
    if (DrawingEditor.#currentPointerId !== pointerId) {
      return;
    }
    if (DrawingEditor.#currentPointerIds?.size >= 1) {
      this._endDraw(event);
      return;
    }
    this._currentParent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#currentDraw.add(offsetX, offsetY));
    DrawingEditor.#currentMoveTimestamp = event.timeStamp;
    stopEvent(event);
  }
  static _cleanup(all) {
    if (all) {
      this._currentDrawId = -1;
      this._currentParent = null;
      DrawingEditor.#currentDraw = null;
      DrawingEditor.#currentDrawingOptions = null;
      DrawingEditor.#currentPointerType = null;
      DrawingEditor.#currentMoveTimestamp = NaN;
    }
    if (DrawingEditor.#currentDrawingAC) {
      DrawingEditor.#currentDrawingAC.abort();
      DrawingEditor.#currentDrawingAC = null;
      DrawingEditor.#currentPointerId = NaN;
      DrawingEditor.#currentPointerIds = null;
    }
  }
  static _endDraw(event) {
    const parent = this._currentParent;
    if (!parent) {
      return;
    }
    parent.toggleDrawing(true);
    this._cleanup(false);
    if (event?.target === parent.div) {
      parent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#currentDraw.end(event.offsetX, event.offsetY));
    }
    if (this.supportMultipleDrawings) {
      const draw = DrawingEditor.#currentDraw;
      const drawId = this._currentDrawId;
      const lastElement = draw.getLastElement();
      parent.addCommands({
        cmd: () => {
          parent.drawLayer.updateProperties(drawId, draw.setLastElement(lastElement));
        },
        undo: () => {
          parent.drawLayer.updateProperties(drawId, draw.removeLastElement());
        },
        mustExec: false,
        type: AnnotationEditorParamsType.DRAW_STEP
      });
      return;
    }
    this.endDrawing(false);
  }
  static endDrawing(isAborted) {
    const parent = this._currentParent;
    if (!parent) {
      return null;
    }
    parent.toggleDrawing(true);
    parent.cleanUndoStack(AnnotationEditorParamsType.DRAW_STEP);
    if (!DrawingEditor.#currentDraw.isEmpty()) {
      const {
        pageDimensions: [pageWidth, pageHeight],
        scale
      } = parent;
      const editor = parent.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, false, {
        drawId: this._currentDrawId,
        drawOutlines: DrawingEditor.#currentDraw.getOutlines(pageWidth * scale, pageHeight * scale, scale, this._INNER_MARGIN),
        drawingOptions: DrawingEditor.#currentDrawingOptions,
        mustBeCommitted: !isAborted
      });
      this._cleanup(true);
      return editor;
    }
    parent.drawLayer.remove(this._currentDrawId);
    this._cleanup(true);
    return null;
  }
  createDrawingOptions(_data) {}
  static deserializeDraw(_pageX, _pageY, _pageWidth, _pageHeight, _innerWidth, _data) {
    unreachable("Not implemented");
  }
  static async deserialize(data, parent, uiManager) {
    const {
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = parent.viewport;
    const drawOutlines = this.deserializeDraw(pageX, pageY, pageWidth, pageHeight, this._INNER_MARGIN, data);
    const editor = await super.deserialize(data, parent, uiManager);
    editor.createDrawingOptions(data);
    editor.#createDrawOutlines({
      drawOutlines
    });
    editor.#addToDrawLayer();
    editor.onScaleChanging();
    editor.rotate();
    return editor;
  }
  serializeDraw(isForCopying) {
    const [pageX, pageY] = this.pageTranslation;
    const [pageWidth, pageHeight] = this.pageDimensions;
    return this.#drawOutlines.serialize([pageX, pageY, pageWidth, pageHeight], isForCopying);
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getRect(0, 0)
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}


class InkDrawOutliner {
  #last = new Float64Array(6);
  #line;
  #lines;
  #rotation;
  #thickness;
  #points;
  #lastSVGPath = "";
  #lastIndex = 0;
  #outlines = new InkDrawOutline();
  #parentWidth;
  #parentHeight;
  constructor(x, y, parentWidth, parentHeight, rotation, thickness) {
    this.#parentWidth = parentWidth;
    this.#parentHeight = parentHeight;
    this.#rotation = rotation;
    this.#thickness = thickness;
    [x, y] = this.#normalizePoint(x, y);
    const line = this.#line = [NaN, NaN, NaN, NaN, x, y];
    this.#points = [x, y];
    this.#lines = [{
      line,
      points: this.#points
    }];
    this.#last.set(line, 0);
  }
  updateProperty(name, value) {
    if (name === "stroke-width") {
      this.#thickness = value;
    }
  }
  #normalizePoint(x, y) {
    return Outline._normalizePoint(x, y, this.#parentWidth, this.#parentHeight, this.#rotation);
  }
  isEmpty() {
    return !this.#lines || this.#lines.length === 0;
  }
  isCancellable() {
    return this.#points.length <= 10;
  }
  add(x, y) {
    [x, y] = this.#normalizePoint(x, y);
    const [x1, y1, x2, y2] = this.#last.subarray(2, 6);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(this.#parentWidth * diffX, this.#parentHeight * diffY);
    if (d <= 2) {
      return null;
    }
    this.#points.push(x, y);
    if (isNaN(x1)) {
      this.#last.set([x2, y2, x, y], 2);
      this.#line.push(NaN, NaN, NaN, NaN, x, y);
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    if (isNaN(this.#last[0])) {
      this.#line.splice(6, 6);
    }
    this.#last.set([x1, y1, x2, y2, x, y], 0);
    this.#line.push(...Outline.createBezierPoints(x1, y1, x2, y2, x, y));
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  end(x, y) {
    const change = this.add(x, y);
    if (change) {
      return change;
    }
    if (this.#points.length === 2) {
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    return null;
  }
  startNew(x, y, parentWidth, parentHeight, rotation) {
    this.#parentWidth = parentWidth;
    this.#parentHeight = parentHeight;
    this.#rotation = rotation;
    [x, y] = this.#normalizePoint(x, y);
    const line = this.#line = [NaN, NaN, NaN, NaN, x, y];
    this.#points = [x, y];
    const last = this.#lines.at(-1);
    if (last) {
      last.line = new Float32Array(last.line);
      last.points = new Float32Array(last.points);
    }
    this.#lines.push({
      line,
      points: this.#points
    });
    this.#last.set(line, 0);
    this.#lastIndex = 0;
    this.toSVGPath();
    return null;
  }
  getLastElement() {
    return this.#lines.at(-1);
  }
  setLastElement(element) {
    if (!this.#lines) {
      return this.#outlines.setLastElement(element);
    }
    this.#lines.push(element);
    this.#line = element.line;
    this.#points = element.points;
    this.#lastIndex = 0;
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    if (!this.#lines) {
      return this.#outlines.removeLastElement();
    }
    this.#lines.pop();
    this.#lastSVGPath = "";
    for (let i = 0, ii = this.#lines.length; i < ii; i++) {
      const {
        line,
        points
      } = this.#lines[i];
      this.#line = line;
      this.#points = points;
      this.#lastIndex = 0;
      this.toSVGPath();
    }
    return {
      path: {
        d: this.#lastSVGPath
      }
    };
  }
  toSVGPath() {
    const firstX = Outline.svgRound(this.#line[4]);
    const firstY = Outline.svgRound(this.#line[5]);
    if (this.#points.length === 2) {
      this.#lastSVGPath = `${this.#lastSVGPath} M ${firstX} ${firstY} Z`;
      return this.#lastSVGPath;
    }
    if (this.#points.length <= 6) {
      const i = this.#lastSVGPath.lastIndexOf("M");
      this.#lastSVGPath = `${this.#lastSVGPath.slice(0, i)} M ${firstX} ${firstY}`;
      this.#lastIndex = 6;
    }
    if (this.#points.length === 4) {
      const secondX = Outline.svgRound(this.#line[10]);
      const secondY = Outline.svgRound(this.#line[11]);
      this.#lastSVGPath = `${this.#lastSVGPath} L ${secondX} ${secondY}`;
      this.#lastIndex = 12;
      return this.#lastSVGPath;
    }
    const buffer = [];
    if (this.#lastIndex === 0) {
      buffer.push(`M ${firstX} ${firstY}`);
      this.#lastIndex = 6;
    }
    for (let i = this.#lastIndex, ii = this.#line.length; i < ii; i += 6) {
      const [c1x, c1y, c2x, c2y, x, y] = this.#line.slice(i, i + 6).map(Outline.svgRound);
      buffer.push(`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`);
    }
    this.#lastSVGPath += buffer.join(" ");
    this.#lastIndex = this.#line.length;
    return this.#lastSVGPath;
  }
  getOutlines(parentWidth, parentHeight, scale, innerMargin) {
    const last = this.#lines.at(-1);
    last.line = new Float32Array(last.line);
    last.points = new Float32Array(last.points);
    this.#outlines.build(this.#lines, parentWidth, parentHeight, scale, this.#rotation, this.#thickness, innerMargin);
    this.#last = null;
    this.#line = null;
    this.#lines = null;
    this.#lastSVGPath = null;
    return this.#outlines;
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: true
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
class InkDrawOutline extends Outline {
  #bbox;
  #currentRotation = 0;
  #innerMargin;
  #lines;
  #parentWidth;
  #parentHeight;
  #parentScale;
  #rotation;
  #thickness;
  build(lines, parentWidth, parentHeight, parentScale, rotation, thickness, innerMargin) {
    this.#parentWidth = parentWidth;
    this.#parentHeight = parentHeight;
    this.#parentScale = parentScale;
    this.#rotation = rotation;
    this.#thickness = thickness;
    this.#innerMargin = innerMargin ?? 0;
    this.#lines = lines;
    this.#computeBbox();
  }
  get thickness() {
    return this.#thickness;
  }
  setLastElement(element) {
    this.#lines.push(element);
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    this.#lines.pop();
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const buffer = [];
    for (const {
      line
    } of this.#lines) {
      buffer.push(`M${Outline.svgRound(line[4])} ${Outline.svgRound(line[5])}`);
      if (line.length === 6) {
        buffer.push("Z");
        continue;
      }
      if (line.length === 12 && isNaN(line[6])) {
        buffer.push(`L${Outline.svgRound(line[10])} ${Outline.svgRound(line[11])}`);
        continue;
      }
      for (let i = 6, ii = line.length; i < ii; i += 6) {
        const [c1x, c1y, c2x, c2y, x, y] = line.subarray(i, i + 6).map(Outline.svgRound);
        buffer.push(`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`);
      }
    }
    return buffer.join("");
  }
  serialize([pageX, pageY, pageWidth, pageHeight], isForCopying) {
    const serializedLines = [];
    const serializedPoints = [];
    const [x, y, width, height] = this.#getBBoxWithNoMargin();
    let tx, ty, sx, sy, x1, y1, x2, y2, rescaleFn;
    switch (this.#rotation) {
      case 0:
        rescaleFn = Outline._rescale;
        tx = pageX;
        ty = pageY + pageHeight;
        sx = pageWidth;
        sy = -pageHeight;
        x1 = pageX + x * pageWidth;
        y1 = pageY + (1 - y - height) * pageHeight;
        x2 = pageX + (x + width) * pageWidth;
        y2 = pageY + (1 - y) * pageHeight;
        break;
      case 90:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageX;
        ty = pageY;
        sx = pageWidth;
        sy = pageHeight;
        x1 = pageX + y * pageWidth;
        y1 = pageY + x * pageHeight;
        x2 = pageX + (y + height) * pageWidth;
        y2 = pageY + (x + width) * pageHeight;
        break;
      case 180:
        rescaleFn = Outline._rescale;
        tx = pageX + pageWidth;
        ty = pageY;
        sx = -pageWidth;
        sy = pageHeight;
        x1 = pageX + (1 - x - width) * pageWidth;
        y1 = pageY + y * pageHeight;
        x2 = pageX + (1 - x) * pageWidth;
        y2 = pageY + (y + height) * pageHeight;
        break;
      case 270:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageX + pageWidth;
        ty = pageY + pageHeight;
        sx = -pageWidth;
        sy = -pageHeight;
        x1 = pageX + (1 - y - height) * pageWidth;
        y1 = pageY + (1 - x - width) * pageHeight;
        x2 = pageX + (1 - y) * pageWidth;
        y2 = pageY + (1 - x) * pageHeight;
        break;
    }
    for (const {
      line,
      points
    } of this.#lines) {
      serializedLines.push(rescaleFn(line, tx, ty, sx, sy, isForCopying ? new Array(line.length) : null));
      serializedPoints.push(rescaleFn(points, tx, ty, sx, sy, isForCopying ? new Array(points.length) : null));
    }
    return {
      lines: serializedLines,
      points: serializedPoints,
      rect: [x1, y1, x2, y2]
    };
  }
  static deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, {
    paths: {
      lines,
      points
    },
    rotation,
    thickness
  }) {
    const newLines = [];
    let tx, ty, sx, sy, rescaleFn;
    switch (rotation) {
      case 0:
        rescaleFn = Outline._rescale;
        tx = -pageX / pageWidth;
        ty = pageY / pageHeight + 1;
        sx = 1 / pageWidth;
        sy = -1 / pageHeight;
        break;
      case 90:
        rescaleFn = Outline._rescaleAndSwap;
        tx = -pageY / pageHeight;
        ty = -pageX / pageWidth;
        sx = 1 / pageHeight;
        sy = 1 / pageWidth;
        break;
      case 180:
        rescaleFn = Outline._rescale;
        tx = pageX / pageWidth + 1;
        ty = -pageY / pageHeight;
        sx = -1 / pageWidth;
        sy = 1 / pageHeight;
        break;
      case 270:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageY / pageHeight + 1;
        ty = pageX / pageWidth + 1;
        sx = -1 / pageHeight;
        sy = -1 / pageWidth;
        break;
    }
    if (!lines) {
      lines = [];
      for (const point of points) {
        const len = point.length;
        if (len === 2) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, point[0], point[1]]));
          continue;
        }
        if (len === 4) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, point[0], point[1], NaN, NaN, NaN, NaN, point[2], point[3]]));
          continue;
        }
        const line = new Float32Array(3 * (len - 2));
        lines.push(line);
        let [x1, y1, x2, y2] = point.subarray(0, 4);
        line.set([NaN, NaN, NaN, NaN, x1, y1], 0);
        for (let i = 4; i < len; i += 2) {
          const x = point[i];
          const y = point[i + 1];
          line.set(Outline.createBezierPoints(x1, y1, x2, y2, x, y), (i - 2) * 3);
          [x1, y1, x2, y2] = [x2, y2, x, y];
        }
      }
    }
    for (let i = 0, ii = lines.length; i < ii; i++) {
      newLines.push({
        line: rescaleFn(lines[i].map(x => x ?? NaN), tx, ty, sx, sy),
        points: rescaleFn(points[i].map(x => x ?? NaN), tx, ty, sx, sy)
      });
    }
    const outlines = new this.prototype.constructor();
    outlines.build(newLines, pageWidth, pageHeight, 1, rotation, thickness, innerMargin);
    return outlines;
  }
  #getMarginComponents(thickness = this.#thickness) {
    const margin = this.#innerMargin + thickness / 2 * this.#parentScale;
    return this.#rotation % 180 === 0 ? [margin / this.#parentWidth, margin / this.#parentHeight] : [margin / this.#parentHeight, margin / this.#parentWidth];
  }
  #getBBoxWithNoMargin() {
    const [x, y, width, height] = this.#bbox;
    const [marginX, marginY] = this.#getMarginComponents(0);
    return [x + marginX, y + marginY, width - 2 * marginX, height - 2 * marginY];
  }
  #computeBbox() {
    const bbox = this.#bbox = new Float32Array([Infinity, Infinity, -Infinity, -Infinity]);
    for (const {
      line
    } of this.#lines) {
      if (line.length <= 12) {
        for (let i = 4, ii = line.length; i < ii; i += 6) {
          Util.pointBoundingBox(line[i], line[i + 1], bbox);
        }
        continue;
      }
      let lastX = line[4],
        lastY = line[5];
      for (let i = 6, ii = line.length; i < ii; i += 6) {
        const [c1x, c1y, c2x, c2y, x, y] = line.subarray(i, i + 6);
        Util.bezierBoundingBox(lastX, lastY, c1x, c1y, c2x, c2y, x, y, bbox);
        lastX = x;
        lastY = y;
      }
    }
    const [marginX, marginY] = this.#getMarginComponents();
    bbox[0] = MathClamp(bbox[0] - marginX, 0, 1);
    bbox[1] = MathClamp(bbox[1] - marginY, 0, 1);
    bbox[2] = MathClamp(bbox[2] + marginX, 0, 1);
    bbox[3] = MathClamp(bbox[3] + marginY, 0, 1);
    bbox[2] -= bbox[0];
    bbox[3] -= bbox[1];
  }
  get box() {
    return this.#bbox;
  }
  updateProperty(name, value) {
    if (name === "stroke-width") {
      return this.#updateThickness(value);
    }
    return null;
  }
  #updateThickness(thickness) {
    const [oldMarginX, oldMarginY] = this.#getMarginComponents();
    this.#thickness = thickness;
    const [newMarginX, newMarginY] = this.#getMarginComponents();
    const [diffMarginX, diffMarginY] = [newMarginX - oldMarginX, newMarginY - oldMarginY];
    const bbox = this.#bbox;
    bbox[0] -= diffMarginX;
    bbox[1] -= diffMarginY;
    bbox[2] += 2 * diffMarginX;
    bbox[3] += 2 * diffMarginY;
    return bbox;
  }
  updateParentDimensions([width, height], scale) {
    const [oldMarginX, oldMarginY] = this.#getMarginComponents();
    this.#parentWidth = width;
    this.#parentHeight = height;
    this.#parentScale = scale;
    const [newMarginX, newMarginY] = this.#getMarginComponents();
    const diffMarginX = newMarginX - oldMarginX;
    const diffMarginY = newMarginY - oldMarginY;
    const bbox = this.#bbox;
    bbox[0] -= diffMarginX;
    bbox[1] -= diffMarginY;
    bbox[2] += 2 * diffMarginX;
    bbox[3] += 2 * diffMarginY;
    return bbox;
  }
  updateRotation(rotation) {
    this.#currentRotation = rotation;
    return {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return this.#bbox.map(Outline.svgRound).join(" ");
  }
  get defaultProperties() {
    const [x, y] = this.#bbox;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Outline.svgRound(x)} ${Outline.svgRound(y)}`
      }
    };
  }
  get rotationTransform() {
    const [,, width, height] = this.#bbox;
    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      e = 0,
      f = 0;
    switch (this.#currentRotation) {
      case 90:
        b = height / width;
        c = -width / height;
        e = width;
        break;
      case 180:
        a = -1;
        d = -1;
        e = width;
        f = height;
        break;
      case 270:
        b = -height / width;
        c = width / height;
        f = height;
        break;
      default:
        return "";
    }
    return `matrix(${a} ${b} ${c} ${d} ${Outline.svgRound(e)} ${Outline.svgRound(f)})`;
  }
  getPathResizingSVGProperties([newX, newY, newWidth, newHeight]) {
    const [marginX, marginY] = this.#getMarginComponents();
    const [x, y, width, height] = this.#bbox;
    if (Math.abs(width - marginX) <= Outline.PRECISION || Math.abs(height - marginY) <= Outline.PRECISION) {
      const tx = newX + newWidth / 2 - (x + width / 2);
      const ty = newY + newHeight / 2 - (y + height / 2);
      return {
        path: {
          "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
          transform: `${this.rotationTransform} translate(${tx} ${ty})`
        }
      };
    }
    const s1x = (newWidth - 2 * marginX) / (width - 2 * marginX);
    const s1y = (newHeight - 2 * marginY) / (height - 2 * marginY);
    const s2x = width / newWidth;
    const s2y = height / newHeight;
    return {
      path: {
        "transform-origin": `${Outline.svgRound(x)} ${Outline.svgRound(y)}`,
        transform: `${this.rotationTransform} scale(${s2x} ${s2y}) ` + `translate(${Outline.svgRound(marginX)} ${Outline.svgRound(marginY)}) scale(${s1x} ${s1y}) ` + `translate(${Outline.svgRound(-marginX)} ${Outline.svgRound(-marginY)})`
      }
    };
  }
  getPathResizedSVGProperties([newX, newY, newWidth, newHeight]) {
    const [marginX, marginY] = this.#getMarginComponents();
    const bbox = this.#bbox;
    const [x, y, width, height] = bbox;
    bbox[0] = newX;
    bbox[1] = newY;
    bbox[2] = newWidth;
    bbox[3] = newHeight;
    if (Math.abs(width - marginX) <= Outline.PRECISION || Math.abs(height - marginY) <= Outline.PRECISION) {
      const tx = newX + newWidth / 2 - (x + width / 2);
      const ty = newY + newHeight / 2 - (y + height / 2);
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._translate(line, tx, ty, line);
        Outline._translate(points, tx, ty, points);
      }
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const s1x = (newWidth - 2 * marginX) / (width - 2 * marginX);
    const s1y = (newHeight - 2 * marginY) / (height - 2 * marginY);
    const tx = -s1x * (x + marginX) + newX + marginX;
    const ty = -s1y * (y + marginY) + newY + marginY;
    if (s1x !== 1 || s1y !== 1 || tx !== 0 || ty !== 0) {
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._rescale(line, tx, ty, s1x, s1y, line);
        Outline._rescale(points, tx, ty, s1x, s1y, points);
      }
    }
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([newX, newY], parentDimensions) {
    const [newParentWidth, newParentHeight] = parentDimensions;
    const bbox = this.#bbox;
    const tx = newX - bbox[0];
    const ty = newY - bbox[1];
    if (this.#parentWidth === newParentWidth && this.#parentHeight === newParentHeight) {
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._translate(line, tx, ty, line);
        Outline._translate(points, tx, ty, points);
      }
    } else {
      const sx = this.#parentWidth / newParentWidth;
      const sy = this.#parentHeight / newParentHeight;
      this.#parentWidth = newParentWidth;
      this.#parentHeight = newParentHeight;
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._rescale(line, tx, ty, sx, sy, line);
        Outline._rescale(points, tx, ty, sx, sy, points);
      }
      bbox[2] *= sx;
      bbox[3] *= sy;
    }
    bbox[0] = newX;
    bbox[1] = newY;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`
      }
    };
  }
  get defaultSVGProperties() {
    const bbox = this.#bbox;
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: true
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Outline.svgRound(bbox[0])} ${Outline.svgRound(bbox[1])}`,
        transform: this.rotationTransform || null
      },
      bbox
    };
  }
}





class InkDrawingOptions extends DrawingOptions {
  constructor(viewerParameters) {
    super();
    this._viewParameters = viewerParameters;
    super.updateProperties({
      fill: "none",
      stroke: AnnotationEditor._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(name, value) {
    if (name === "stroke-width") {
      value ??= this["stroke-width"];
      value *= this._viewParameters.realScale;
    }
    super.updateSVGProperty(name, value);
  }
  clone() {
    const clone = new InkDrawingOptions(this._viewParameters);
    clone.updateAll(this);
    return clone;
  }
}
class InkEditor extends DrawingEditor {
  static _type = "ink";
  static _editorType = AnnotationEditorType.INK;
  static _defaultDrawingOptions = null;
  constructor(params) {
    super({
      ...params,
      name: "inkEditor"
    });
    this._willKeepAspectRatio = true;
    this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    this._defaultDrawingOptions = new InkDrawingOptions(uiManager.viewParameters);
  }
  static getDefaultDrawingOptions(options) {
    const clone = this._defaultDrawingOptions.clone();
    clone.updateProperties(options);
    return clone;
  }
  static get supportMultipleDrawings() {
    return true;
  }
  static get typesMap() {
    return shadow(this, "typesMap", new Map([[AnnotationEditorParamsType.INK_THICKNESS, "stroke-width"], [AnnotationEditorParamsType.INK_COLOR, "stroke"], [AnnotationEditorParamsType.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(x, y, parentWidth, parentHeight, rotation) {
    return new InkDrawOutliner(x, y, parentWidth, parentHeight, rotation, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(pageX, pageY, pageWidth, pageHeight, innerMargin, data) {
    return InkDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof InkAnnotationElement) {
      const {
        data: {
          inkLists,
          rect,
          rotation,
          id,
          color,
          opacity,
          borderStyle: {
            rawWidth: thickness
          },
          popupRef
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.INK,
        color: Array.from(color),
        thickness,
        opacity,
        paths: {
          points: inkLists
        },
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    editor.annotationElementId = data.id || null;
    editor._initialData = initialData;
    return editor;
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    super.onScaleChanging();
    const {
      _drawId,
      _drawingOptions,
      parent
    } = this;
    _drawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(_drawId, _drawingOptions.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const parent = this._currentParent;
    if (!parent) {
      return;
    }
    super.onScaleChangingWhenDrawing();
    this._defaultDrawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
  }
  createDrawingOptions({
    color,
    thickness,
    opacity
  }) {
    this._drawingOptions = InkEditor.getDefaultDrawingOptions({
      stroke: Util.makeHexColor(...color),
      "stroke-width": thickness,
      "stroke-opacity": opacity
    });
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const {
      lines,
      points,
      rect
    } = this.serializeDraw(isForCopying);
    const {
      _drawingOptions: {
        stroke,
        "stroke-opacity": opacity,
        "stroke-width": thickness
      }
    } = this;
    const serialized = {
      annotationType: AnnotationEditorType.INK,
      color: AnnotationEditor._colorManager.convert(stroke),
      opacity,
      thickness,
      paths: {
        lines,
        points
      },
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      serialized.isCopy = true;
      return serialized;
    }
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      color,
      thickness,
      opacity,
      pageIndex
    } = this._initialData;
    return this._hasBeenMoved || this._hasBeenResized || serialized.color.some((c, i) => c !== color[i]) || serialized.thickness !== thickness || serialized.opacity !== opacity || serialized.pageIndex !== pageIndex;
  }
  renderAnnotationElement(annotation) {
    const {
      points,
      rect
    } = this.serializeDraw(false);
    annotation.updateEdited({
      rect,
      thickness: this._drawingOptions["stroke-width"],
      points
    });
    return null;
  }
}

class ContourDrawOutline extends InkDrawOutline {
  toSVGPath() {
    let path = super.toSVGPath();
    if (!path.endsWith("Z")) {
      path += "Z";
    }
    return path;
  }
}




const BASE_HEADER_LENGTH = 8;
const POINTS_PROPERTIES_NUMBER = 3;
class SignatureExtractor {
  static #PARAMETERS = {
    maxDim: 512,
    sigmaSFactor: 0.02,
    sigmaR: 25,
    kernelSize: 16
  };
  static #neighborIndexToId(i0, j0, i, j) {
    i -= i0;
    j -= j0;
    if (i === 0) {
      return j > 0 ? 0 : 4;
    }
    if (i === 1) {
      return j + 6;
    }
    return 2 - j;
  }
  static #neighborIdToIndex = new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
  static #clockwiseNonZero(buf, width, i0, j0, i, j, offset) {
    const id = this.#neighborIndexToId(i0, j0, i, j);
    for (let k = 0; k < 8; k++) {
      const kk = (-k + id - offset + 16) % 8;
      const shiftI = this.#neighborIdToIndex[2 * kk];
      const shiftJ = this.#neighborIdToIndex[2 * kk + 1];
      if (buf[(i0 + shiftI) * width + (j0 + shiftJ)] !== 0) {
        return kk;
      }
    }
    return -1;
  }
  static #counterClockwiseNonZero(buf, width, i0, j0, i, j, offset) {
    const id = this.#neighborIndexToId(i0, j0, i, j);
    for (let k = 0; k < 8; k++) {
      const kk = (k + id + offset + 16) % 8;
      const shiftI = this.#neighborIdToIndex[2 * kk];
      const shiftJ = this.#neighborIdToIndex[2 * kk + 1];
      if (buf[(i0 + shiftI) * width + (j0 + shiftJ)] !== 0) {
        return kk;
      }
    }
    return -1;
  }
  static #findContours(buf, width, height, threshold) {
    const N = buf.length;
    const types = new Int32Array(N);
    for (let i = 0; i < N; i++) {
      types[i] = buf[i] <= threshold ? 1 : 0;
    }
    for (let i = 1; i < height - 1; i++) {
      types[i * width] = types[i * width + width - 1] = 0;
    }
    for (let i = 0; i < width; i++) {
      types[i] = types[width * height - 1 - i] = 0;
    }
    let nbd = 1;
    let lnbd;
    const contours = [];
    for (let i = 1; i < height - 1; i++) {
      lnbd = 1;
      for (let j = 1; j < width - 1; j++) {
        const ij = i * width + j;
        const pix = types[ij];
        if (pix === 0) {
          continue;
        }
        let i2 = i;
        let j2 = j;
        if (pix === 1 && types[ij - 1] === 0) {
          nbd += 1;
          j2 -= 1;
        } else if (pix >= 1 && types[ij + 1] === 0) {
          nbd += 1;
          j2 += 1;
          if (pix > 1) {
            lnbd = pix;
          }
        } else {
          if (pix !== 1) {
            lnbd = Math.abs(pix);
          }
          continue;
        }
        const points = [j, i];
        const isHole = j2 === j + 1;
        const contour = {
          isHole,
          points,
          id: nbd,
          parent: 0
        };
        contours.push(contour);
        let contour0;
        for (const c of contours) {
          if (c.id === lnbd) {
            contour0 = c;
            break;
          }
        }
        if (!contour0) {
          contour.parent = isHole ? lnbd : 0;
        } else if (contour0.isHole) {
          contour.parent = isHole ? contour0.parent : lnbd;
        } else {
          contour.parent = isHole ? lnbd : contour0.parent;
        }
        const k = this.#clockwiseNonZero(types, width, i, j, i2, j2, 0);
        if (k === -1) {
          types[ij] = -nbd;
          if (types[ij] !== 1) {
            lnbd = Math.abs(types[ij]);
          }
          continue;
        }
        let shiftI = this.#neighborIdToIndex[2 * k];
        let shiftJ = this.#neighborIdToIndex[2 * k + 1];
        const i1 = i + shiftI;
        const j1 = j + shiftJ;
        i2 = i1;
        j2 = j1;
        let i3 = i;
        let j3 = j;
        while (true) {
          const kk = this.#counterClockwiseNonZero(types, width, i3, j3, i2, j2, 1);
          shiftI = this.#neighborIdToIndex[2 * kk];
          shiftJ = this.#neighborIdToIndex[2 * kk + 1];
          const i4 = i3 + shiftI;
          const j4 = j3 + shiftJ;
          points.push(j4, i4);
          const ij3 = i3 * width + j3;
          if (types[ij3 + 1] === 0) {
            types[ij3] = -nbd;
          } else if (types[ij3] === 1) {
            types[ij3] = nbd;
          }
          if (i4 === i && j4 === j && i3 === i1 && j3 === j1) {
            if (types[ij] !== 1) {
              lnbd = Math.abs(types[ij]);
            }
            break;
          } else {
            i2 = i3;
            j2 = j3;
            i3 = i4;
            j3 = j4;
          }
        }
      }
    }
    return contours;
  }
  static #douglasPeuckerHelper(points, start, end, output) {
    if (end - start <= 4) {
      for (let i = start; i < end - 2; i += 2) {
        output.push(points[i], points[i + 1]);
      }
      return;
    }
    const ax = points[start];
    const ay = points[start + 1];
    const abx = points[end - 4] - ax;
    const aby = points[end - 3] - ay;
    const dist = Math.hypot(abx, aby);
    const nabx = abx / dist;
    const naby = aby / dist;
    const aa = nabx * ay - naby * ax;
    const m = aby / abx;
    const invS = 1 / dist;
    const phi = Math.atan(m);
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);
    const tmax = invS * (Math.abs(cosPhi) + Math.abs(sinPhi));
    const poly = invS * (1 - tmax + tmax ** 2);
    const partialPhi = Math.max(Math.atan(Math.abs(sinPhi + cosPhi) * poly), Math.atan(Math.abs(sinPhi - cosPhi) * poly));
    let dmax = 0;
    let index = start;
    for (let i = start + 2; i < end - 2; i += 2) {
      const d = Math.abs(aa - nabx * points[i + 1] + naby * points[i]);
      if (d > dmax) {
        index = i;
        dmax = d;
      }
    }
    if (dmax > (dist * partialPhi) ** 2) {
      this.#douglasPeuckerHelper(points, start, index + 2, output);
      this.#douglasPeuckerHelper(points, index, end, output);
    } else {
      output.push(ax, ay);
    }
  }
  static #douglasPeucker(points) {
    const output = [];
    const len = points.length;
    this.#douglasPeuckerHelper(points, 0, len, output);
    output.push(points[len - 2], points[len - 1]);
    return output.length <= 4 ? null : output;
  }
  static #bilateralFilter(buf, width, height, sigmaS, sigmaR, kernelSize) {
    const kernel = new Float32Array(kernelSize ** 2);
    const sigmaS2 = -2 * sigmaS ** 2;
    const halfSize = kernelSize >> 1;
    for (let i = 0; i < kernelSize; i++) {
      const x = (i - halfSize) ** 2;
      for (let j = 0; j < kernelSize; j++) {
        kernel[i * kernelSize + j] = Math.exp((x + (j - halfSize) ** 2) / sigmaS2);
      }
    }
    const rangeValues = new Float32Array(256);
    const sigmaR2 = -2 * sigmaR ** 2;
    for (let i = 0; i < 256; i++) {
      rangeValues[i] = Math.exp(i ** 2 / sigmaR2);
    }
    const N = buf.length;
    const out = new Uint8Array(N);
    const histogram = new Uint32Array(256);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const ij = i * width + j;
        const center = buf[ij];
        let sum = 0;
        let norm = 0;
        for (let k = 0; k < kernelSize; k++) {
          const y = i + k - halfSize;
          if (y < 0 || y >= height) {
            continue;
          }
          for (let l = 0; l < kernelSize; l++) {
            const x = j + l - halfSize;
            if (x < 0 || x >= width) {
              continue;
            }
            const neighbour = buf[y * width + x];
            const w = kernel[k * kernelSize + l] * rangeValues[Math.abs(neighbour - center)];
            sum += neighbour * w;
            norm += w;
          }
        }
        const pix = out[ij] = Math.round(sum / norm);
        histogram[pix]++;
      }
    }
    return [out, histogram];
  }
  static #getHistogram(buf) {
    const histogram = new Uint32Array(256);
    for (const g of buf) {
      histogram[g]++;
    }
    return histogram;
  }
  static #toUint8(buf) {
    const N = buf.length;
    const out = new Uint8ClampedArray(N >> 2);
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0, ii = out.length; i < ii; i++) {
      const A = buf[(i << 2) + 3];
      if (A === 0) {
        max = out[i] = 0xff;
        continue;
      }
      const pix = out[i] = buf[i << 2];
      if (pix > max) {
        max = pix;
      }
      if (pix < min) {
        min = pix;
      }
    }
    const ratio = 255 / (max - min);
    for (let i = 0; i < N; i++) {
      out[i] = (out[i] - min) * ratio;
    }
    return out;
  }
  static #guessThreshold(histogram) {
    let i;
    let M = -Infinity;
    let L = -Infinity;
    const min = histogram.findIndex(v => v !== 0);
    let pos = min;
    let spos = min;
    for (i = min; i < 256; i++) {
      const v = histogram[i];
      if (v > M) {
        if (i - pos > L) {
          L = i - pos;
          spos = i - 1;
        }
        M = v;
        pos = i;
      }
    }
    for (i = spos - 1; i >= 0; i--) {
      if (histogram[i] > histogram[i + 1]) {
        break;
      }
    }
    return i;
  }
  static #getGrayPixels(bitmap) {
    const originalBitmap = bitmap;
    const {
      width,
      height
    } = bitmap;
    const {
      maxDim
    } = this.#PARAMETERS;
    let newWidth = width;
    let newHeight = height;
    if (width > maxDim || height > maxDim) {
      let prevWidth = width;
      let prevHeight = height;
      let steps = Math.log2(Math.max(width, height) / maxDim);
      const isteps = Math.floor(steps);
      steps = steps === isteps ? isteps - 1 : isteps;
      for (let i = 0; i < steps; i++) {
        newWidth = Math.ceil(prevWidth / 2);
        newHeight = Math.ceil(prevHeight / 2);
        const offscreen = new OffscreenCanvas(newWidth, newHeight);
        const ctx = offscreen.getContext("2d");
        ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
        prevWidth = newWidth;
        prevHeight = newHeight;
        if (bitmap !== originalBitmap) {
          bitmap.close();
        }
        bitmap = offscreen.transferToImageBitmap();
      }
      const ratio = Math.min(maxDim / newWidth, maxDim / newHeight);
      newWidth = Math.round(newWidth * ratio);
      newHeight = Math.round(newHeight * ratio);
    }
    const offscreen = new OffscreenCanvas(newWidth, newHeight);
    const ctx = offscreen.getContext("2d", {
      willReadFrequently: true
    });
    ctx.filter = "grayscale(1)";
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, newWidth, newHeight);
    const grayImage = ctx.getImageData(0, 0, newWidth, newHeight).data;
    const uint8Buf = this.#toUint8(grayImage);
    return [uint8Buf, newWidth, newHeight];
  }
  static extractContoursFromText(text, {
    fontFamily,
    fontStyle,
    fontWeight
  }, pageWidth, pageHeight, rotation, innerMargin) {
    let canvas = new OffscreenCanvas(1, 1);
    let ctx = canvas.getContext("2d", {
      alpha: false
    });
    const fontSize = 200;
    const font = ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
    const {
      actualBoundingBoxLeft,
      actualBoundingBoxRight,
      actualBoundingBoxAscent,
      actualBoundingBoxDescent,
      fontBoundingBoxAscent,
      fontBoundingBoxDescent,
      width
    } = ctx.measureText(text);
    const SCALE = 1.5;
    const canvasWidth = Math.ceil(Math.max(Math.abs(actualBoundingBoxLeft) + Math.abs(actualBoundingBoxRight) || 0, width) * SCALE);
    const canvasHeight = Math.ceil(Math.max(Math.abs(actualBoundingBoxAscent) + Math.abs(actualBoundingBoxDescent) || fontSize, Math.abs(fontBoundingBoxAscent) + Math.abs(fontBoundingBoxDescent) || fontSize) * SCALE);
    canvas = new OffscreenCanvas(canvasWidth, canvasHeight);
    ctx = canvas.getContext("2d", {
      alpha: true,
      willReadFrequently: true
    });
    ctx.font = font;
    ctx.filter = "grayscale(1)";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "black";
    ctx.fillText(text, canvasWidth * (SCALE - 1) / 2, canvasHeight * (3 - SCALE) / 2);
    const uint8Buf = this.#toUint8(ctx.getImageData(0, 0, canvasWidth, canvasHeight).data);
    const histogram = this.#getHistogram(uint8Buf);
    const threshold = this.#guessThreshold(histogram);
    const contourList = this.#findContours(uint8Buf, canvasWidth, canvasHeight, threshold);
    return this.processDrawnLines({
      lines: {
        curves: contourList,
        width: canvasWidth,
        height: canvasHeight
      },
      pageWidth,
      pageHeight,
      rotation,
      innerMargin,
      mustSmooth: true,
      areContours: true
    });
  }
  static process(bitmap, pageWidth, pageHeight, rotation, innerMargin) {
    const [uint8Buf, width, height] = this.#getGrayPixels(bitmap);
    const [buffer, histogram] = this.#bilateralFilter(uint8Buf, width, height, Math.hypot(width, height) * this.#PARAMETERS.sigmaSFactor, this.#PARAMETERS.sigmaR, this.#PARAMETERS.kernelSize);
    const threshold = this.#guessThreshold(histogram);
    const contourList = this.#findContours(buffer, width, height, threshold);
    return this.processDrawnLines({
      lines: {
        curves: contourList,
        width,
        height
      },
      pageWidth,
      pageHeight,
      rotation,
      innerMargin,
      mustSmooth: true,
      areContours: true
    });
  }
  static processDrawnLines({
    lines,
    pageWidth,
    pageHeight,
    rotation,
    innerMargin,
    mustSmooth,
    areContours
  }) {
    if (rotation % 180 !== 0) {
      [pageWidth, pageHeight] = [pageHeight, pageWidth];
    }
    const {
      curves,
      width,
      height
    } = lines;
    const thickness = lines.thickness ?? 0;
    const linesAndPoints = [];
    const ratio = Math.min(pageWidth / width, pageHeight / height);
    const xScale = ratio / pageWidth;
    const yScale = ratio / pageHeight;
    const newCurves = [];
    for (const {
      points
    } of curves) {
      const reducedPoints = mustSmooth ? this.#douglasPeucker(points) : points;
      if (!reducedPoints) {
        continue;
      }
      newCurves.push(reducedPoints);
      const len = reducedPoints.length;
      const newPoints = new Float32Array(len);
      const line = new Float32Array(3 * (len === 2 ? 2 : len - 2));
      linesAndPoints.push({
        line,
        points: newPoints
      });
      if (len === 2) {
        newPoints[0] = reducedPoints[0] * xScale;
        newPoints[1] = reducedPoints[1] * yScale;
        line.set([NaN, NaN, NaN, NaN, newPoints[0], newPoints[1]], 0);
        continue;
      }
      let [x1, y1, x2, y2] = reducedPoints;
      x1 *= xScale;
      y1 *= yScale;
      x2 *= xScale;
      y2 *= yScale;
      newPoints.set([x1, y1, x2, y2], 0);
      line.set([NaN, NaN, NaN, NaN, x1, y1], 0);
      for (let i = 4; i < len; i += 2) {
        const x = newPoints[i] = reducedPoints[i] * xScale;
        const y = newPoints[i + 1] = reducedPoints[i + 1] * yScale;
        line.set(Outline.createBezierPoints(x1, y1, x2, y2, x, y), (i - 2) * 3);
        [x1, y1, x2, y2] = [x2, y2, x, y];
      }
    }
    if (linesAndPoints.length === 0) {
      return null;
    }
    const outline = areContours ? new ContourDrawOutline() : new InkDrawOutline();
    outline.build(linesAndPoints, pageWidth, pageHeight, 1, rotation, areContours ? 0 : thickness, innerMargin);
    return {
      outline,
      newCurves,
      areContours,
      thickness,
      width,
      height
    };
  }
  static async compressSignature({
    outlines,
    areContours,
    thickness,
    width,
    height
  }) {
    let minDiff = Infinity;
    let maxDiff = -Infinity;
    let outlinesLength = 0;
    for (const points of outlines) {
      outlinesLength += points.length;
      for (let i = 2, ii = points.length; i < ii; i++) {
        const dx = points[i] - points[i - 2];
        minDiff = Math.min(minDiff, dx);
        maxDiff = Math.max(maxDiff, dx);
      }
    }
    let bufferType;
    if (minDiff >= -128 && maxDiff <= 127) {
      bufferType = Int8Array;
    } else if (minDiff >= -32768 && maxDiff <= 32767) {
      bufferType = Int16Array;
    } else {
      bufferType = Int32Array;
    }
    const len = outlines.length;
    const headerLength = BASE_HEADER_LENGTH + POINTS_PROPERTIES_NUMBER * len;
    const header = new Uint32Array(headerLength);
    let offset = 0;
    header[offset++] = headerLength * Uint32Array.BYTES_PER_ELEMENT + (outlinesLength - 2 * len) * bufferType.BYTES_PER_ELEMENT;
    header[offset++] = 0;
    header[offset++] = width;
    header[offset++] = height;
    header[offset++] = areContours ? 0 : 1;
    header[offset++] = Math.max(0, Math.floor(thickness ?? 0));
    header[offset++] = len;
    header[offset++] = bufferType.BYTES_PER_ELEMENT;
    for (const points of outlines) {
      header[offset++] = points.length - 2;
      header[offset++] = points[0];
      header[offset++] = points[1];
    }
    const cs = new CompressionStream("deflate-raw");
    const writer = cs.writable.getWriter();
    await writer.ready;
    writer.write(header);
    const BufferCtor = bufferType.prototype.constructor;
    for (const points of outlines) {
      const diffs = new BufferCtor(points.length - 2);
      for (let i = 2, ii = points.length; i < ii; i++) {
        diffs[i - 2] = points[i] - points[i - 2];
      }
      writer.write(diffs);
    }
    writer.close();
    const buf = await new Response(cs.readable).arrayBuffer();
    const bytes = new Uint8Array(buf);
    return toBase64Util(bytes);
  }
  static async decompressSignature(signatureData) {
    try {
      const bytes = fromBase64Util(signatureData);
      const {
        readable,
        writable
      } = new DecompressionStream("deflate-raw");
      const writer = writable.getWriter();
      await writer.ready;
      writer.write(bytes).then(async () => {
        await writer.ready;
        await writer.close();
      }).catch(() => {});
      let data = null;
      let offset = 0;
      for await (const chunk of readable) {
        data ||= new Uint8Array(new Uint32Array(chunk.buffer, 0, 4)[0]);
        data.set(chunk, offset);
        offset += chunk.length;
      }
      const header = new Uint32Array(data.buffer, 0, data.length >> 2);
      const version = header[1];
      if (version !== 0) {
        throw new Error(`Invalid version: ${version}`);
      }
      const width = header[2];
      const height = header[3];
      const areContours = header[4] === 0;
      const thickness = header[5];
      const numberOfDrawings = header[6];
      const bufferType = header[7];
      const outlines = [];
      const diffsOffset = (BASE_HEADER_LENGTH + POINTS_PROPERTIES_NUMBER * numberOfDrawings) * Uint32Array.BYTES_PER_ELEMENT;
      let diffs;
      switch (bufferType) {
        case Int8Array.BYTES_PER_ELEMENT:
          diffs = new Int8Array(data.buffer, diffsOffset);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          diffs = new Int16Array(data.buffer, diffsOffset);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          diffs = new Int32Array(data.buffer, diffsOffset);
          break;
      }
      offset = 0;
      for (let i = 0; i < numberOfDrawings; i++) {
        const len = header[POINTS_PROPERTIES_NUMBER * i + BASE_HEADER_LENGTH];
        const points = new Float32Array(len + 2);
        outlines.push(points);
        for (let j = 0; j < POINTS_PROPERTIES_NUMBER - 1; j++) {
          points[j] = header[POINTS_PROPERTIES_NUMBER * i + BASE_HEADER_LENGTH + j + 1];
        }
        for (let j = 0; j < len; j++) {
          points[j + 2] = points[j] + diffs[offset++];
        }
      }
      return {
        areContours,
        thickness,
        outlines,
        width,
        height
      };
    } catch (e) {
      warn(`decompressSignature: ${e}`);
      return null;
    }
  }
}







class SignatureOptions extends DrawingOptions {
  constructor() {
    super();
    super.updateProperties({
      fill: AnnotationEditor._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const clone = new SignatureOptions();
    clone.updateAll(this);
    return clone;
  }
}
class DrawnSignatureOptions extends InkDrawingOptions {
  constructor(viewerParameters) {
    super(viewerParameters);
    super.updateProperties({
      stroke: AnnotationEditor._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const clone = new DrawnSignatureOptions(this._viewParameters);
    clone.updateAll(this);
    return clone;
  }
}
class SignatureEditor extends DrawingEditor {
  #isExtracted = false;
  #description = null;
  #signatureData = null;
  #signatureUUID = null;
  static _type = "signature";
  static _editorType = AnnotationEditorType.SIGNATURE;
  static _defaultDrawingOptions = null;
  constructor(params) {
    super({
      ...params,
      mustBeCommitted: true,
      name: "signatureEditor"
    });
    this._willKeepAspectRatio = true;
    this.#signatureData = params.signatureData || null;
    this.#description = null;
    this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    this._defaultDrawingOptions = new SignatureOptions();
    this._defaultDrawnSignatureOptions = new DrawnSignatureOptions(uiManager.viewParameters);
  }
  static getDefaultDrawingOptions(options) {
    const clone = this._defaultDrawingOptions.clone();
    clone.updateProperties(options);
    return clone;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static get typesMap() {
    return shadow(this, "typesMap", new Map());
  }
  static get isDrawer() {
    return false;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!this.#description
    };
  }
  static computeTelemetryFinalData(data) {
    const hasDescriptionStats = data.get("hasDescription");
    return {
      hasAltText: hasDescriptionStats.get(true) ?? 0,
      hasNoAltText: hasDescriptionStats.get(false) ?? 0
    };
  }
  get isResizable() {
    return true;
  }
  onScaleChanging() {
    if (this._drawId === null) {
      return;
    }
    super.onScaleChanging();
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    const {
      _isCopy
    } = this;
    if (_isCopy) {
      this._isCopy = false;
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    if (this._drawId === null) {
      if (this.#signatureData) {
        const {
          lines,
          mustSmooth,
          areContours,
          description,
          uuid,
          heightInPage
        } = this.#signatureData;
        const {
          rawDims: {
            pageWidth,
            pageHeight
          },
          rotation
        } = this.parent.viewport;
        const outline = SignatureExtractor.processDrawnLines({
          lines,
          pageWidth,
          pageHeight,
          rotation,
          innerMargin: SignatureEditor._INNER_MARGIN,
          mustSmooth,
          areContours
        });
        this.addSignature(outline, heightInPage, description, uuid);
      } else {
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        }));
        this.div.hidden = true;
        this._uiManager.getSignature(this);
      }
    }
    if (_isCopy) {
      this._isCopy = true;
      this._moveAfterPaste(baseX, baseY);
    }
    return this.div;
  }
  setUuid(uuid) {
    this.#signatureUUID = uuid;
    this.addEditToolbar();
  }
  getUuid() {
    return this.#signatureUUID;
  }
  get description() {
    return this.#description;
  }
  set description(description) {
    this.#description = description;
    super.addEditToolbar().then(toolbar => {
      toolbar?.updateEditSignatureButton(description);
    });
  }
  getSignaturePreview() {
    const {
      newCurves,
      areContours,
      thickness,
      width,
      height
    } = this.#signatureData;
    const maxDim = Math.max(width, height);
    const outlineData = SignatureExtractor.processDrawnLines({
      lines: {
        curves: newCurves.map(points => ({
          points
        })),
        thickness,
        width,
        height
      },
      pageWidth: maxDim,
      pageHeight: maxDim,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: false,
      areContours
    });
    return {
      areContours,
      outline: outlineData.outline
    };
  }
  async addEditToolbar() {
    const toolbar = await super.addEditToolbar();
    if (!toolbar) {
      return null;
    }
    if (this._uiManager.signatureManager && this.#description !== null) {
      await toolbar.addEditSignatureButton(this._uiManager.signatureManager, this.#signatureUUID, this.#description);
      toolbar.show();
    }
    return toolbar;
  }
  addSignature(data, heightInPage, description, uuid) {
    const {
      x: savedX,
      y: savedY
    } = this;
    const {
      outline
    } = this.#signatureData = data;
    this.#isExtracted = outline instanceof ContourDrawOutline;
    this.#description = description;
    this.div.setAttribute("data-l10n-args", JSON.stringify({
      description
    }));
    let drawingOptions;
    if (this.#isExtracted) {
      drawingOptions = SignatureEditor.getDefaultDrawingOptions();
    } else {
      drawingOptions = SignatureEditor._defaultDrawnSignatureOptions.clone();
      drawingOptions.updateProperties({
        "stroke-width": outline.thickness
      });
    }
    this._addOutlines({
      drawOutlines: outline,
      drawingOptions
    });
    const [parentWidth, parentHeight] = this.parentDimensions;
    const [, pageHeight] = this.pageDimensions;
    let newHeight = heightInPage / pageHeight;
    newHeight = newHeight >= 1 ? 0.5 : newHeight;
    this.width *= newHeight / this.height;
    if (this.width >= 1) {
      newHeight *= 0.9 / this.width;
      this.width = 0.9;
    }
    this.height = newHeight;
    this.setDims(parentWidth * this.width, parentHeight * this.height);
    this.x = savedX;
    this.y = savedY;
    this.center();
    this._onResized();
    this.onScaleChanging();
    this.rotate();
    this._uiManager.addToAnnotationStorage(this);
    this.setUuid(uuid);
    this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!uuid,
        hasDescription: !!description
      }
    });
    this.div.hidden = false;
  }
  getFromImage(bitmap) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.process(bitmap, pageWidth, pageHeight, rotation, SignatureEditor._INNER_MARGIN);
  }
  getFromText(text, fontInfo) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.extractContoursFromText(text, fontInfo, pageWidth, pageHeight, rotation, SignatureEditor._INNER_MARGIN);
  }
  getDrawnSignature(curves) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.processDrawnLines({
      lines: curves,
      pageWidth,
      pageHeight,
      rotation,
      innerMargin: SignatureEditor._INNER_MARGIN,
      mustSmooth: false,
      areContours: false
    });
  }
  createDrawingOptions({
    areContours,
    thickness
  }) {
    if (areContours) {
      this._drawingOptions = SignatureEditor.getDefaultDrawingOptions();
    } else {
      this._drawingOptions = SignatureEditor._defaultDrawnSignatureOptions.clone();
      this._drawingOptions.updateProperties({
        "stroke-width": thickness
      });
    }
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    const {
      lines,
      points,
      rect
    } = this.serializeDraw(isForCopying);
    const {
      _drawingOptions: {
        "stroke-width": thickness
      }
    } = this;
    const serialized = {
      annotationType: AnnotationEditorType.SIGNATURE,
      isSignature: true,
      areContours: this.#isExtracted,
      color: [0, 0, 0],
      thickness: this.#isExtracted ? 0 : thickness,
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      serialized.paths = {
        lines,
        points
      };
      serialized.uuid = this.#signatureUUID;
      serialized.isCopy = true;
    } else {
      serialized.lines = lines;
    }
    if (this.#description) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: this.#description
      };
    }
    return serialized;
  }
  static deserializeDraw(pageX, pageY, pageWidth, pageHeight, innerMargin, data) {
    if (data.areContours) {
      return ContourDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
    }
    return InkDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
  }
  static async deserialize(data, parent, uiManager) {
    const editor = await super.deserialize(data, parent, uiManager);
    editor.#isExtracted = data.areContours;
    editor.#description = data.accessibilityData?.alt || "";
    editor.#signatureUUID = data.uuid;
    return editor;
  }
}




class StampEditor extends AnnotationEditor {
  #bitmap = null;
  #bitmapId = null;
  #bitmapPromise = null;
  #bitmapUrl = null;
  #bitmapFile = null;
  #bitmapFileName = "";
  #canvas = null;
  #missingCanvas = false;
  #resizeTimeoutId = null;
  #isSvg = false;
  #hasBeenAddedInUndoStack = false;
  static _type = "stamp";
  static _editorType = AnnotationEditorType.STAMP;
  constructor(params) {
    super({
      ...params,
      name: "stampEditor"
    });
    this.#bitmapUrl = params.bitmapUrl;
    this.#bitmapFile = params.bitmapFile;
    this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
  }
  static isHandlingMimeForPasting(mime) {
    return SupportedImageMimeTypes.includes(mime);
  }
  static paste(item, parent) {
    parent.pasteEditor({
      mode: AnnotationEditorType.STAMP
    }, {
      bitmapFile: item.getAsFile()
    });
  }
  altTextFinish() {
    if (this._uiManager.useNewAltTextFlow) {
      this.div.hidden = false;
    }
    super.altTextFinish();
  }
  get telemetryFinalData() {
    return {
      type: "stamp",
      hasAltText: !!this.altTextData?.altText
    };
  }
  static computeTelemetryFinalData(data) {
    const hasAltTextStats = data.get("hasAltText");
    return {
      hasAltText: hasAltTextStats.get(true) ?? 0,
      hasNoAltText: hasAltTextStats.get(false) ?? 0
    };
  }
  #getBitmapFetched(data, fromId = false) {
    if (!data) {
      this.remove();
      return;
    }
    this.#bitmap = data.bitmap;
    if (!fromId) {
      this.#bitmapId = data.id;
      this.#isSvg = data.isSvg;
    }
    if (data.file) {
      this.#bitmapFileName = data.file.name;
    }
    this.#createCanvas();
  }
  #getBitmapDone() {
    this.#bitmapPromise = null;
    this._uiManager.enableWaiting(false);
    if (!this.#canvas) {
      return;
    }
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#bitmap) {
      this._editToolbar.hide();
      this._uiManager.editAltText(this, true);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#bitmap) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: false,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {}
    }
    this.div.focus();
  }
  async mlGuessAltText(imageData = null, updateAltTextData = true) {
    if (this.hasAltTextData()) {
      return null;
    }
    const {
      mlManager
    } = this._uiManager;
    if (!mlManager) {
      throw new Error("No ML.");
    }
    if (!(await mlManager.isEnabledFor("altText"))) {
      throw new Error("ML isn't enabled for alt text.");
    }
    const {
      data,
      width,
      height
    } = imageData || this.copyCanvas(null, null, true).imageData;
    const response = await mlManager.guess({
      name: "altText",
      request: {
        data,
        width,
        height,
        channels: data.length / (width * height)
      }
    });
    if (!response) {
      throw new Error("No response from the AI service.");
    }
    if (response.error) {
      throw new Error("Error from the AI service.");
    }
    if (response.cancel) {
      return null;
    }
    if (!response.output) {
      throw new Error("No valid response from the AI service.");
    }
    const altText = response.output;
    await this.setGuessedAltText(altText);
    if (updateAltTextData && !this.hasAltTextData()) {
      this.altTextData = {
        alt: altText,
        decorative: false
      };
    }
    return altText;
  }
  #getBitmap() {
    if (this.#bitmapId) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(this.#bitmapId).then(data => this.#getBitmapFetched(data, true)).finally(() => this.#getBitmapDone());
      return;
    }
    if (this.#bitmapUrl) {
      const url = this.#bitmapUrl;
      this.#bitmapUrl = null;
      this._uiManager.enableWaiting(true);
      this.#bitmapPromise = this._uiManager.imageManager.getFromUrl(url).then(data => this.#getBitmapFetched(data)).finally(() => this.#getBitmapDone());
      return;
    }
    if (this.#bitmapFile) {
      const file = this.#bitmapFile;
      this.#bitmapFile = null;
      this._uiManager.enableWaiting(true);
      this.#bitmapPromise = this._uiManager.imageManager.getFromFile(file).then(data => this.#getBitmapFetched(data)).finally(() => this.#getBitmapDone());
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = SupportedImageMimeTypes.join(",");
    const signal = this._uiManager._signal;
    this.#bitmapPromise = new Promise(resolve => {
      input.addEventListener("change", async () => {
        if (!input.files || input.files.length === 0) {
          this.remove();
        } else {
          this._uiManager.enableWaiting(true);
          const data = await this._uiManager.imageManager.getFromFile(input.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          });
          this.#getBitmapFetched(data);
        }
        resolve();
      }, {
        signal
      });
      input.addEventListener("cancel", () => {
        this.remove();
        resolve();
      }, {
        signal
      });
    }).finally(() => this.#getBitmapDone());
    input.click();
  }
  remove() {
    if (this.#bitmapId) {
      this.#bitmap = null;
      this._uiManager.imageManager.deleteId(this.#bitmapId);
      this.#canvas?.remove();
      this.#canvas = null;
      if (this.#resizeTimeoutId) {
        clearTimeout(this.#resizeTimeoutId);
        this.#resizeTimeoutId = null;
      }
    }
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      if (this.#bitmapId) {
        this.#getBitmap();
      }
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (this.#bitmapId && this.#canvas === null) {
      this.#getBitmap();
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  onceAdded(focus) {
    this._isDraggable = true;
    if (focus) {
      this.div.focus();
    }
  }
  isEmpty() {
    return !(this.#bitmapPromise || this.#bitmap || this.#bitmapUrl || this.#bitmapFile || this.#bitmapId || this.#missingCanvas);
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this._isCopy) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.addAltTextButton();
    if (!this.#missingCanvas) {
      if (this.#bitmap) {
        this.#createCanvas();
      } else {
        this.#getBitmap();
      }
    }
    if (this._isCopy) {
      this._moveAfterPaste(baseX, baseY);
    }
    this._uiManager.addShouldRescale(this);
    return this.div;
  }
  setCanvas(annotationElementId, canvas) {
    const {
      id: bitmapId,
      bitmap
    } = this._uiManager.imageManager.getFromCanvas(annotationElementId, canvas);
    canvas.remove();
    if (bitmapId && this._uiManager.imageManager.isValidId(bitmapId)) {
      this.#bitmapId = bitmapId;
      if (bitmap) {
        this.#bitmap = bitmap;
      }
      this.#missingCanvas = false;
      this.#createCanvas();
    }
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    if (this.#resizeTimeoutId !== null) {
      clearTimeout(this.#resizeTimeoutId);
    }
    const TIME_TO_WAIT = 200;
    this.#resizeTimeoutId = setTimeout(() => {
      this.#resizeTimeoutId = null;
      this.#drawBitmap();
    }, TIME_TO_WAIT);
  }
  #createCanvas() {
    const {
      div
    } = this;
    let {
      width,
      height
    } = this.#bitmap;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const MAX_RATIO = 0.75;
    if (this.width) {
      width = this.width * pageWidth;
      height = this.height * pageHeight;
    } else if (width > MAX_RATIO * pageWidth || height > MAX_RATIO * pageHeight) {
      const factor = Math.min(MAX_RATIO * pageWidth / width, MAX_RATIO * pageHeight / height);
      width *= factor;
      height *= factor;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(width * parentWidth / pageWidth, height * parentHeight / pageHeight);
    this._uiManager.enableWaiting(false);
    const canvas = this.#canvas = document.createElement("canvas");
    canvas.setAttribute("role", "img");
    this.addContainer(canvas);
    this.width = width / pageWidth;
    this.height = height / pageHeight;
    if (this._initialOptions?.isCentered) {
      this.center();
    } else {
      this.fixAndSetPosition();
    }
    this._initialOptions = null;
    if (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) {
      div.hidden = false;
    }
    this.#drawBitmap();
    if (!this.#hasBeenAddedInUndoStack) {
      this.parent.addUndoableEditor(this);
      this.#hasBeenAddedInUndoStack = true;
    }
    this._reportTelemetry({
      action: "inserted_image"
    });
    if (this.#bitmapFileName) {
      this.div.setAttribute("aria-description", this.#bitmapFileName);
    }
  }
  copyCanvas(maxDataDimension, maxPreviewDimension, createImageData = false) {
    if (!maxDataDimension) {
      maxDataDimension = 224;
    }
    const {
      width: bitmapWidth,
      height: bitmapHeight
    } = this.#bitmap;
    const outputScale = new OutputScale();
    let bitmap = this.#bitmap;
    let width = bitmapWidth,
      height = bitmapHeight;
    let canvas = null;
    if (maxPreviewDimension) {
      if (bitmapWidth > maxPreviewDimension || bitmapHeight > maxPreviewDimension) {
        const ratio = Math.min(maxPreviewDimension / bitmapWidth, maxPreviewDimension / bitmapHeight);
        width = Math.floor(bitmapWidth * ratio);
        height = Math.floor(bitmapHeight * ratio);
      }
      canvas = document.createElement("canvas");
      const scaledWidth = canvas.width = Math.ceil(width * outputScale.sx);
      const scaledHeight = canvas.height = Math.ceil(height * outputScale.sy);
      if (!this.#isSvg) {
        bitmap = this.#scaleBitmap(scaledWidth, scaledHeight);
      }
      const ctx = canvas.getContext("2d");
      ctx.filter = this._uiManager.hcmFilter;
      let white = "white",
        black = "#cfcfd8";
      if (this._uiManager.hcmFilter !== "none") {
        black = "black";
      } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        white = "#8f8f9d";
        black = "#42414d";
      }
      const boxDim = 15;
      const boxDimWidth = boxDim * outputScale.sx;
      const boxDimHeight = boxDim * outputScale.sy;
      const pattern = new OffscreenCanvas(boxDimWidth * 2, boxDimHeight * 2);
      const patternCtx = pattern.getContext("2d");
      patternCtx.fillStyle = white;
      patternCtx.fillRect(0, 0, boxDimWidth * 2, boxDimHeight * 2);
      patternCtx.fillStyle = black;
      patternCtx.fillRect(0, 0, boxDimWidth, boxDimHeight);
      patternCtx.fillRect(boxDimWidth, boxDimHeight, boxDimWidth, boxDimHeight);
      ctx.fillStyle = ctx.createPattern(pattern, "repeat");
      ctx.fillRect(0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, scaledWidth, scaledHeight);
    }
    let imageData = null;
    if (createImageData) {
      let dataWidth, dataHeight;
      if (outputScale.symmetric && bitmap.width < maxDataDimension && bitmap.height < maxDataDimension) {
        dataWidth = bitmap.width;
        dataHeight = bitmap.height;
      } else {
        bitmap = this.#bitmap;
        if (bitmapWidth > maxDataDimension || bitmapHeight > maxDataDimension) {
          const ratio = Math.min(maxDataDimension / bitmapWidth, maxDataDimension / bitmapHeight);
          dataWidth = Math.floor(bitmapWidth * ratio);
          dataHeight = Math.floor(bitmapHeight * ratio);
          if (!this.#isSvg) {
            bitmap = this.#scaleBitmap(dataWidth, dataHeight);
          }
        }
      }
      const offscreen = new OffscreenCanvas(dataWidth, dataHeight);
      const offscreenCtx = offscreen.getContext("2d", {
        willReadFrequently: true
      });
      offscreenCtx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, dataWidth, dataHeight);
      imageData = {
        width: dataWidth,
        height: dataHeight,
        data: offscreenCtx.getImageData(0, 0, dataWidth, dataHeight).data
      };
    }
    return {
      canvas,
      width,
      height,
      imageData
    };
  }
  #scaleBitmap(width, height) {
    const {
      width: bitmapWidth,
      height: bitmapHeight
    } = this.#bitmap;
    let newWidth = bitmapWidth;
    let newHeight = bitmapHeight;
    let bitmap = this.#bitmap;
    while (newWidth > 2 * width || newHeight > 2 * height) {
      const prevWidth = newWidth;
      const prevHeight = newHeight;
      if (newWidth > 2 * width) {
        newWidth = newWidth >= 16384 ? Math.floor(newWidth / 2) - 1 : Math.ceil(newWidth / 2);
      }
      if (newHeight > 2 * height) {
        newHeight = newHeight >= 16384 ? Math.floor(newHeight / 2) - 1 : Math.ceil(newHeight / 2);
      }
      const offscreen = new OffscreenCanvas(newWidth, newHeight);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
      bitmap = offscreen.transferToImageBitmap();
    }
    return bitmap;
  }
  #drawBitmap() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      width,
      height
    } = this;
    const outputScale = new OutputScale();
    const scaledWidth = Math.ceil(width * parentWidth * outputScale.sx);
    const scaledHeight = Math.ceil(height * parentHeight * outputScale.sy);
    const canvas = this.#canvas;
    if (!canvas || canvas.width === scaledWidth && canvas.height === scaledHeight) {
      return;
    }
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;
    const bitmap = this.#isSvg ? this.#bitmap : this.#scaleBitmap(scaledWidth, scaledHeight);
    const ctx = canvas.getContext("2d");
    ctx.filter = this._uiManager.hcmFilter;
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, scaledWidth, scaledHeight);
  }
  #serializeBitmap(toUrl) {
    if (toUrl) {
      if (this.#isSvg) {
        const url = this._uiManager.imageManager.getSvgUrl(this.#bitmapId);
        if (url) {
          return url;
        }
      }
      const canvas = document.createElement("canvas");
      ({
        width: canvas.width,
        height: canvas.height
      } = this.#bitmap);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0);
      return canvas.toDataURL();
    }
    if (this.#isSvg) {
      const [pageWidth, pageHeight] = this.pageDimensions;
      const width = Math.round(this.width * pageWidth * PixelsPerInch.PDF_TO_CSS_UNITS);
      const height = Math.round(this.height * pageHeight * PixelsPerInch.PDF_TO_CSS_UNITS);
      const offscreen = new OffscreenCanvas(width, height);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0, this.#bitmap.width, this.#bitmap.height, 0, 0, width, height);
      return offscreen.transferToImageBitmap();
    }
    return structuredClone(this.#bitmap);
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    let missingCanvas = false;
    if (data instanceof StampAnnotationElement) {
      const {
        data: {
          rect,
          rotation,
          id,
          structParent,
          popupRef
        },
        container,
        parent: {
          page: {
            pageNumber
          }
        },
        canvas
      } = data;
      let bitmapId, bitmap;
      if (canvas) {
        delete data.canvas;
        ({
          id: bitmapId,
          bitmap
        } = uiManager.imageManager.getFromCanvas(container.id, canvas));
        canvas.remove();
      } else {
        missingCanvas = true;
        data._hasNoCanvas = true;
      }
      const altText = (await parent._structTree.getAriaAttributes(`${AnnotationPrefix}${id}`))?.get("aria-label") || "";
      initialData = data = {
        annotationType: AnnotationEditorType.STAMP,
        bitmapId,
        bitmap,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        accessibilityData: {
          decorative: false,
          altText
        },
        isSvg: false,
        structParent,
        popupRef
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    const {
      rect,
      bitmap,
      bitmapUrl,
      bitmapId,
      isSvg,
      accessibilityData
    } = data;
    if (missingCanvas) {
      uiManager.addMissingCanvas(data.id, editor);
      editor.#missingCanvas = true;
    } else if (bitmapId && uiManager.imageManager.isValidId(bitmapId)) {
      editor.#bitmapId = bitmapId;
      if (bitmap) {
        editor.#bitmap = bitmap;
      }
    } else {
      editor.#bitmapUrl = bitmapUrl;
    }
    editor.#isSvg = isSvg;
    const [parentWidth, parentHeight] = editor.pageDimensions;
    editor.width = (rect[2] - rect[0]) / parentWidth;
    editor.height = (rect[3] - rect[1]) / parentHeight;
    editor.annotationElementId = data.id || null;
    if (accessibilityData) {
      editor.altTextData = accessibilityData;
    }
    editor._initialData = initialData;
    editor.#hasBeenAddedInUndoStack = !!initialData;
    return editor;
  }
  serialize(isForCopying = false, context = null) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const serialized = {
      annotationType: AnnotationEditorType.STAMP,
      bitmapId: this.#bitmapId,
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: this.#isSvg,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      serialized.bitmapUrl = this.#serializeBitmap(true);
      serialized.accessibilityData = this.serializeAltText(true);
      serialized.isCopy = true;
      return serialized;
    }
    const {
      decorative,
      altText
    } = this.serializeAltText(false);
    if (!decorative && altText) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: altText
      };
    }
    if (this.annotationElementId) {
      const changes = this.#hasElementChanged(serialized);
      if (changes.isSame) {
        return null;
      }
      if (changes.isSameAltText) {
        delete serialized.accessibilityData;
      } else {
        serialized.accessibilityData.structParent = this._initialData.structParent ?? -1;
      }
    }
    serialized.id = this.annotationElementId;
    if (context === null) {
      return serialized;
    }
    context.stamps ||= new Map();
    const area = this.#isSvg ? (serialized.rect[2] - serialized.rect[0]) * (serialized.rect[3] - serialized.rect[1]) : null;
    if (!context.stamps.has(this.#bitmapId)) {
      context.stamps.set(this.#bitmapId, {
        area,
        serialized
      });
      serialized.bitmap = this.#serializeBitmap(false);
    } else if (this.#isSvg) {
      const prevData = context.stamps.get(this.#bitmapId);
      if (area > prevData.area) {
        prevData.area = area;
        prevData.serialized.bitmap.close();
        prevData.serialized.bitmap = this.#serializeBitmap(false);
      }
    }
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      pageIndex,
      accessibilityData: {
        altText
      }
    } = this._initialData;
    const isSamePageIndex = serialized.pageIndex === pageIndex;
    const isSameAltText = (serialized.accessibilityData?.alt || "") === altText;
    return {
      isSame: !this._hasBeenMoved && !this._hasBeenResized && isSamePageIndex && isSameAltText,
      isSameAltText
    };
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getRect(0, 0)
    });
    return null;
  }
}








class AnnotationEditorLayer {
  #accessibilityManager;
  #allowClick = false;
  #annotationLayer = null;
  #clickAC = null;
  #editorFocusTimeoutId = null;
  #editors = new Map();
  #hadPointerDown = false;
  #isDisabling = false;
  #isEnabling = false;
  #drawingAC = null;
  #focusedElement = null;
  #textLayer = null;
  #textSelectionAC = null;
  #uiManager;
  static _initialized = false;
  static #editorTypes = new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor, SignatureEditor].map(type => [type._editorType, type]));
  constructor({
    uiManager,
    pageIndex,
    div,
    structTreeLayer,
    accessibilityManager,
    annotationLayer,
    drawLayer,
    textLayer,
    viewport,
    l10n
  }) {
    const editorTypes = [...AnnotationEditorLayer.#editorTypes.values()];
    if (!AnnotationEditorLayer._initialized) {
      AnnotationEditorLayer._initialized = true;
      for (const editorType of editorTypes) {
        editorType.initialize(l10n, uiManager);
      }
    }
    uiManager.registerEditorTypes(editorTypes);
    this.#uiManager = uiManager;
    this.pageIndex = pageIndex;
    this.div = div;
    this.#accessibilityManager = accessibilityManager;
    this.#annotationLayer = annotationLayer;
    this.viewport = viewport;
    this.#textLayer = textLayer;
    this.drawLayer = drawLayer;
    this._structTree = structTreeLayer;
    this.#uiManager.addLayer(this);
  }
  get isEmpty() {
    return this.#editors.size === 0;
  }
  get isInvisible() {
    return this.isEmpty && this.#uiManager.getMode() === AnnotationEditorType.NONE;
  }
  updateToolbar(options) {
    this.#uiManager.updateToolbar(options);
  }
  updateMode(mode = this.#uiManager.getMode()) {
    this.#cleanup();
    switch (mode) {
      case AnnotationEditorType.NONE:
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case AnnotationEditorType.INK:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
        break;
      case AnnotationEditorType.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const {
      classList
    } = this.div;
    for (const editorType of AnnotationEditorLayer.#editorTypes.values()) {
      classList.toggle(`${editorType._type}Editing`, mode === editorType._editorType);
    }
    this.div.hidden = false;
  }
  hasTextLayer(textLayer) {
    return textLayer === this.#textLayer?.div;
  }
  setEditingState(isEditing) {
    this.#uiManager.setEditingState(isEditing);
  }
  addCommands(params) {
    this.#uiManager.addCommands(params);
  }
  cleanUndoStack(type) {
    this.#uiManager.cleanUndoStack(type);
  }
  toggleDrawing(enabled = false) {
    this.div.classList.toggle("drawing", !enabled);
  }
  togglePointerEvents(enabled = false) {
    this.div.classList.toggle("disabled", !enabled);
  }
  toggleAnnotationLayerPointerEvents(enabled = false) {
    this.#annotationLayer?.div.classList.toggle("disabled", !enabled);
  }
  async enable() {
    this.#isEnabling = true;
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    const annotationElementIds = new Set();
    for (const editor of this.#editors.values()) {
      editor.enableEditing();
      editor.show(true);
      if (editor.annotationElementId) {
        this.#uiManager.removeChangedExistingAnnotation(editor);
        annotationElementIds.add(editor.annotationElementId);
      }
    }
    if (!this.#annotationLayer) {
      this.#isEnabling = false;
      return;
    }
    const editables = this.#annotationLayer.getEditableAnnotations();
    for (const editable of editables) {
      editable.hide();
      if (this.#uiManager.isDeletedAnnotationElement(editable.data.id)) {
        continue;
      }
      if (annotationElementIds.has(editable.data.id)) {
        continue;
      }
      const editor = await this.deserialize(editable);
      if (!editor) {
        continue;
      }
      this.addOrRebuild(editor);
      editor.enableEditing();
    }
    this.#isEnabling = false;
  }
  disable() {
    this.#isDisabling = true;
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    const changedAnnotations = new Map();
    const resetAnnotations = new Map();
    for (const editor of this.#editors.values()) {
      editor.disableEditing();
      if (!editor.annotationElementId) {
        continue;
      }
      if (editor.serialize() !== null) {
        changedAnnotations.set(editor.annotationElementId, editor);
        continue;
      } else {
        resetAnnotations.set(editor.annotationElementId, editor);
      }
      this.getEditableAnnotation(editor.annotationElementId)?.show();
      editor.remove();
    }
    if (this.#annotationLayer) {
      const editables = this.#annotationLayer.getEditableAnnotations();
      for (const editable of editables) {
        const {
          id
        } = editable.data;
        if (this.#uiManager.isDeletedAnnotationElement(id)) {
          continue;
        }
        let editor = resetAnnotations.get(id);
        if (editor) {
          editor.resetAnnotationElement(editable);
          editor.show(false);
          editable.show();
          continue;
        }
        editor = changedAnnotations.get(id);
        if (editor) {
          this.#uiManager.addChangedExistingAnnotation(editor);
          if (editor.renderAnnotationElement(editable)) {
            editor.show(false);
          }
        }
        editable.show();
      }
    }
    this.#cleanup();
    if (this.isEmpty) {
      this.div.hidden = true;
    }
    const {
      classList
    } = this.div;
    for (const editorType of AnnotationEditorLayer.#editorTypes.values()) {
      classList.remove(`${editorType._type}Editing`);
    }
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    this.#isDisabling = false;
  }
  getEditableAnnotation(id) {
    return this.#annotationLayer?.getEditableAnnotation(id) || null;
  }
  setActiveEditor(editor) {
    const currentActive = this.#uiManager.getActive();
    if (currentActive === editor) {
      return;
    }
    this.#uiManager.setActiveEditor(editor);
  }
  enableTextSelection() {
    this.div.tabIndex = -1;
    if (this.#textLayer?.div && !this.#textSelectionAC) {
      this.#textSelectionAC = new AbortController();
      const signal = this.#uiManager.combinedSignal(this.#textSelectionAC);
      this.#textLayer.div.addEventListener("pointerdown", this.#textLayerPointerDown.bind(this), {
        signal
      });
      this.#textLayer.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0;
    if (this.#textLayer?.div && this.#textSelectionAC) {
      this.#textSelectionAC.abort();
      this.#textSelectionAC = null;
      this.#textLayer.div.classList.remove("highlighting");
    }
  }
  #textLayerPointerDown(event) {
    this.#uiManager.unselectAll();
    const {
      target
    } = event;
    if (target === this.#textLayer.div || (target.getAttribute("role") === "img" || target.classList.contains("endOfContent")) && this.#textLayer.div.contains(target)) {
      const {
        isMac
      } = util_FeatureTest.platform;
      if (event.button !== 0 || event.ctrlKey && isMac) {
        return;
      }
      this.#uiManager.showAllEditors("highlight", true, true);
      this.#textLayer.div.classList.add("free");
      this.toggleDrawing();
      HighlightEditor.startHighlighting(this, this.#uiManager.direction === "ltr", {
        target: this.#textLayer.div,
        x: event.x,
        y: event.y
      });
      this.#textLayer.div.addEventListener("pointerup", () => {
        this.#textLayer.div.classList.remove("free");
        this.toggleDrawing(true);
      }, {
        once: true,
        signal: this.#uiManager._signal
      });
      event.preventDefault();
    }
  }
  enableClick() {
    if (this.#clickAC) {
      return;
    }
    this.#clickAC = new AbortController();
    const signal = this.#uiManager.combinedSignal(this.#clickAC);
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal
    });
    const pointerup = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", pointerup, {
      signal
    });
    this.div.addEventListener("pointercancel", pointerup, {
      signal
    });
  }
  disableClick() {
    this.#clickAC?.abort();
    this.#clickAC = null;
  }
  attach(editor) {
    this.#editors.set(editor.id, editor);
    const {
      annotationElementId
    } = editor;
    if (annotationElementId && this.#uiManager.isDeletedAnnotationElement(annotationElementId)) {
      this.#uiManager.removeDeletedAnnotationElement(editor);
    }
  }
  detach(editor) {
    this.#editors.delete(editor.id);
    this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
    if (!this.#isDisabling && editor.annotationElementId) {
      this.#uiManager.addDeletedAnnotationElement(editor);
    }
  }
  remove(editor) {
    this.detach(editor);
    this.#uiManager.removeEditor(editor);
    editor.div.remove();
    editor.isAttachedToDOM = false;
  }
  changeParent(editor) {
    if (editor.parent === this) {
      return;
    }
    if (editor.parent && editor.annotationElementId) {
      this.#uiManager.addDeletedAnnotationElement(editor.annotationElementId);
      AnnotationEditor.deleteAnnotationElement(editor);
      editor.annotationElementId = null;
    }
    this.attach(editor);
    editor.parent?.detach(editor);
    editor.setParent(this);
    if (editor.div && editor.isAttachedToDOM) {
      editor.div.remove();
      this.div.append(editor.div);
    }
  }
  add(editor) {
    if (editor.parent === this && editor.isAttachedToDOM) {
      return;
    }
    this.changeParent(editor);
    this.#uiManager.addEditor(editor);
    this.attach(editor);
    if (!editor.isAttachedToDOM) {
      const div = editor.render();
      this.div.append(div);
      editor.isAttachedToDOM = true;
    }
    editor.fixAndSetPosition();
    editor.onceAdded(!this.#isEnabling);
    this.#uiManager.addToAnnotationStorage(editor);
    editor._reportTelemetry(editor.telemetryInitialData);
  }
  moveEditorInDOM(editor) {
    if (!editor.isAttachedToDOM) {
      return;
    }
    const {
      activeElement
    } = document;
    if (editor.div.contains(activeElement) && !this.#editorFocusTimeoutId) {
      editor._focusEventsAllowed = false;
      this.#editorFocusTimeoutId = setTimeout(() => {
        this.#editorFocusTimeoutId = null;
        if (!editor.div.contains(document.activeElement)) {
          editor.div.addEventListener("focusin", () => {
            editor._focusEventsAllowed = true;
          }, {
            once: true,
            signal: this.#uiManager._signal
          });
          activeElement.focus();
        } else {
          editor._focusEventsAllowed = true;
        }
      }, 0);
    }
    editor._structTreeParentId = this.#accessibilityManager?.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
  }
  addOrRebuild(editor) {
    if (editor.needsToBeRebuilt()) {
      editor.parent ||= this;
      editor.rebuild();
      editor.show();
    } else {
      this.add(editor);
    }
  }
  addUndoableEditor(editor) {
    const cmd = () => editor._uiManager.rebuild(editor);
    const undo = () => {
      editor.remove();
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: false
    });
  }
  getNextId() {
    return this.#uiManager.getId();
  }
  get #currentEditorType() {
    return AnnotationEditorLayer.#editorTypes.get(this.#uiManager.getMode());
  }
  combinedSignal(ac) {
    return this.#uiManager.combinedSignal(ac);
  }
  #createNewEditor(params) {
    const editorType = this.#currentEditorType;
    return editorType ? new editorType.prototype.constructor(params) : null;
  }
  canCreateNewEmptyEditor() {
    return this.#currentEditorType?.canCreateNewEmptyEditor();
  }
  async pasteEditor(options, params) {
    this.updateToolbar(options);
    await this.#uiManager.updateMode(options.mode);
    const {
      offsetX,
      offsetY
    } = this.#getCenterPoint();
    const id = this.getNextId();
    const editor = this.#createNewEditor({
      parent: this,
      id,
      x: offsetX,
      y: offsetY,
      uiManager: this.#uiManager,
      isCentered: true,
      ...params
    });
    if (editor) {
      this.add(editor);
    }
  }
  async deserialize(data) {
    return (await AnnotationEditorLayer.#editorTypes.get(data.annotationType ?? data.annotationEditorType)?.deserialize(data, this, this.#uiManager)) || null;
  }
  createAndAddNewEditor(event, isCentered, data = {}) {
    const id = this.getNextId();
    const editor = this.#createNewEditor({
      parent: this,
      id,
      x: event.offsetX,
      y: event.offsetY,
      uiManager: this.#uiManager,
      isCentered,
      ...data
    });
    if (editor) {
      this.add(editor);
    }
    return editor;
  }
  #getCenterPoint() {
    const {
      x,
      y,
      width,
      height
    } = this.div.getBoundingClientRect();
    const tlX = Math.max(0, x);
    const tlY = Math.max(0, y);
    const brX = Math.min(window.innerWidth, x + width);
    const brY = Math.min(window.innerHeight, y + height);
    const centerX = (tlX + brX) / 2 - x;
    const centerY = (tlY + brY) / 2 - y;
    const [offsetX, offsetY] = this.viewport.rotation % 180 === 0 ? [centerX, centerY] : [centerY, centerX];
    return {
      offsetX,
      offsetY
    };
  }
  addNewEditor(data = {}) {
    this.createAndAddNewEditor(this.#getCenterPoint(), true, data);
  }
  setSelected(editor) {
    this.#uiManager.setSelected(editor);
  }
  toggleSelected(editor) {
    this.#uiManager.toggleSelected(editor);
  }
  unselect(editor) {
    this.#uiManager.unselect(editor);
  }
  pointerup(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    if (!this.#hadPointerDown) {
      return;
    }
    this.#hadPointerDown = false;
    if (this.#currentEditorType?.isDrawer && this.#currentEditorType.supportMultipleDrawings) {
      return;
    }
    if (!this.#allowClick) {
      this.#allowClick = true;
      return;
    }
    const currentMode = this.#uiManager.getMode();
    if (currentMode === AnnotationEditorType.STAMP || currentMode === AnnotationEditorType.SIGNATURE) {
      this.#uiManager.unselectAll();
      return;
    }
    this.createAndAddNewEditor(event, false);
  }
  pointerdown(event) {
    if (this.#uiManager.getMode() === AnnotationEditorType.HIGHLIGHT) {
      this.enableTextSelection();
    }
    if (this.#hadPointerDown) {
      this.#hadPointerDown = false;
      return;
    }
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    this.#hadPointerDown = true;
    if (this.#currentEditorType?.isDrawer) {
      this.startDrawingSession(event);
      return;
    }
    const editor = this.#uiManager.getActive();
    this.#allowClick = !editor || editor.isEmpty();
  }
  startDrawingSession(event) {
    this.div.focus({
      preventScroll: true
    });
    if (this.#drawingAC) {
      this.#currentEditorType.startDrawing(this, this.#uiManager, false, event);
      return;
    }
    this.#uiManager.setCurrentDrawingSession(this);
    this.#drawingAC = new AbortController();
    const signal = this.#uiManager.combinedSignal(this.#drawingAC);
    this.div.addEventListener("blur", ({
      relatedTarget
    }) => {
      if (relatedTarget && !this.div.contains(relatedTarget)) {
        this.#focusedElement = null;
        this.commitOrRemove();
      }
    }, {
      signal
    });
    this.#currentEditorType.startDrawing(this, this.#uiManager, false, event);
  }
  pause(on) {
    if (on) {
      const {
        activeElement
      } = document;
      if (this.div.contains(activeElement)) {
        this.#focusedElement = activeElement;
      }
      return;
    }
    if (this.#focusedElement) {
      setTimeout(() => {
        this.#focusedElement?.focus();
        this.#focusedElement = null;
      }, 0);
    }
  }
  endDrawingSession(isAborted = false) {
    if (!this.#drawingAC) {
      return null;
    }
    this.#uiManager.setCurrentDrawingSession(null);
    this.#drawingAC.abort();
    this.#drawingAC = null;
    this.#focusedElement = null;
    return this.#currentEditorType.endDrawing(isAborted);
  }
  findNewParent(editor, x, y) {
    const layer = this.#uiManager.findParent(x, y);
    if (layer === null || layer === this) {
      return false;
    }
    layer.changeParent(editor);
    return true;
  }
  commitOrRemove() {
    if (this.#drawingAC) {
      this.endDrawingSession();
      return true;
    }
    return false;
  }
  onScaleChanging() {
    if (!this.#drawingAC) {
      return;
    }
    this.#currentEditorType.onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove();
    if (this.#uiManager.getActive()?.parent === this) {
      this.#uiManager.commitOrRemove();
      this.#uiManager.setActiveEditor(null);
    }
    if (this.#editorFocusTimeoutId) {
      clearTimeout(this.#editorFocusTimeoutId);
      this.#editorFocusTimeoutId = null;
    }
    for (const editor of this.#editors.values()) {
      this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
      editor.setParent(null);
      editor.isAttachedToDOM = false;
      editor.div.remove();
    }
    this.div = null;
    this.#editors.clear();
    this.#uiManager.removeLayer(this);
  }
  #cleanup() {
    for (const editor of this.#editors.values()) {
      if (editor.isEmpty()) {
        editor.remove();
      }
    }
  }
  render({
    viewport
  }) {
    this.viewport = viewport;
    setLayerDimensions(this.div, viewport);
    for (const editor of this.#uiManager.getEditors(this.pageIndex)) {
      this.add(editor);
      editor.rebuild();
    }
    this.updateMode();
  }
  update({
    viewport
  }) {
    this.#uiManager.commitOrRemove();
    this.#cleanup();
    const oldRotation = this.viewport.rotation;
    const rotation = viewport.rotation;
    this.viewport = viewport;
    setLayerDimensions(this.div, {
      rotation
    });
    if (oldRotation !== rotation) {
      for (const editor of this.#editors.values()) {
        editor.rotate(rotation);
      }
    }
  }
  get pageDimensions() {
    const {
      pageWidth,
      pageHeight
    } = this.viewport.rawDims;
    return [pageWidth, pageHeight];
  }
  get scale() {
    return this.#uiManager.viewParameters.realScale;
  }
}


class DrawLayer {
  #parent = null;
  #mapping = new Map();
  #toUpdate = new Map();
  static #id = 0;
  constructor({
    pageIndex
  }) {
    this.pageIndex = pageIndex;
  }
  setParent(parent) {
    if (!this.#parent) {
      this.#parent = parent;
      return;
    }
    if (this.#parent !== parent) {
      if (this.#mapping.size > 0) {
        for (const root of this.#mapping.values()) {
          root.remove();
          parent.append(root);
        }
      }
      this.#parent = parent;
    }
  }
  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }
  static #setBox(element, [x, y, width, height]) {
    const {
      style
    } = element;
    style.top = `${100 * y}%`;
    style.left = `${100 * x}%`;
    style.width = `${100 * width}%`;
    style.height = `${100 * height}%`;
  }
  #createSVG() {
    const svg = DrawLayer._svgFactory.create(1, 1, true);
    this.#parent.append(svg);
    svg.setAttribute("aria-hidden", true);
    return svg;
  }
  #createClipPath(defs, pathId) {
    const clipPath = DrawLayer._svgFactory.createElement("clipPath");
    defs.append(clipPath);
    const clipPathId = `clip_${pathId}`;
    clipPath.setAttribute("id", clipPathId);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    const clipPathUse = DrawLayer._svgFactory.createElement("use");
    clipPath.append(clipPathUse);
    clipPathUse.setAttribute("href", `#${pathId}`);
    clipPathUse.classList.add("clip");
    return clipPathId;
  }
  #updateProperties(element, properties) {
    for (const [key, value] of Object.entries(properties)) {
      if (value === null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    }
  }
  draw(properties, isPathUpdatable = false, hasClip = false) {
    const id = DrawLayer.#id++;
    const root = this.#createSVG();
    const defs = DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    if (isPathUpdatable) {
      this.#toUpdate.set(id, path);
    }
    const clipPathId = hasClip ? this.#createClipPath(defs, pathId) : null;
    const use = DrawLayer._svgFactory.createElement("use");
    root.append(use);
    use.setAttribute("href", `#${pathId}`);
    this.updateProperties(root, properties);
    this.#mapping.set(id, root);
    return {
      id,
      clipPathId: `url(#${clipPathId})`
    };
  }
  drawOutline(properties, mustRemoveSelfIntersections) {
    const id = DrawLayer.#id++;
    const root = this.#createSVG();
    const defs = DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    let maskId;
    if (mustRemoveSelfIntersections) {
      const mask = DrawLayer._svgFactory.createElement("mask");
      defs.append(mask);
      maskId = `mask_p${this.pageIndex}_${id}`;
      mask.setAttribute("id", maskId);
      mask.setAttribute("maskUnits", "objectBoundingBox");
      const rect = DrawLayer._svgFactory.createElement("rect");
      mask.append(rect);
      rect.setAttribute("width", "1");
      rect.setAttribute("height", "1");
      rect.setAttribute("fill", "white");
      const use = DrawLayer._svgFactory.createElement("use");
      mask.append(use);
      use.setAttribute("href", `#${pathId}`);
      use.setAttribute("stroke", "none");
      use.setAttribute("fill", "black");
      use.setAttribute("fill-rule", "nonzero");
      use.classList.add("mask");
    }
    const use1 = DrawLayer._svgFactory.createElement("use");
    root.append(use1);
    use1.setAttribute("href", `#${pathId}`);
    if (maskId) {
      use1.setAttribute("mask", `url(#${maskId})`);
    }
    const use2 = use1.cloneNode();
    root.append(use2);
    use1.classList.add("mainOutline");
    use2.classList.add("secondaryOutline");
    this.updateProperties(root, properties);
    this.#mapping.set(id, root);
    return id;
  }
  finalizeDraw(id, properties) {
    this.#toUpdate.delete(id);
    this.updateProperties(id, properties);
  }
  updateProperties(elementOrId, properties) {
    if (!properties) {
      return;
    }
    const {
      root,
      bbox,
      rootClass,
      path
    } = properties;
    const element = typeof elementOrId === "number" ? this.#mapping.get(elementOrId) : elementOrId;
    if (!element) {
      return;
    }
    if (root) {
      this.#updateProperties(element, root);
    }
    if (bbox) {
      DrawLayer.#setBox(element, bbox);
    }
    if (rootClass) {
      const {
        classList
      } = element;
      for (const [className, value] of Object.entries(rootClass)) {
        classList.toggle(className, value);
      }
    }
    if (path) {
      const defs = element.firstChild;
      const pathElement = defs.firstChild;
      this.#updateProperties(pathElement, path);
    }
  }
  updateParent(id, layer) {
    if (layer === this) {
      return;
    }
    const root = this.#mapping.get(id);
    if (!root) {
      return;
    }
    layer.#parent.append(root);
    this.#mapping.delete(id);
    layer.#mapping.set(id, root);
  }
  remove(id) {
    this.#toUpdate.delete(id);
    if (this.#parent === null) {
      return;
    }
    this.#mapping.get(id).remove();
    this.#mapping.delete(id);
  }
  destroy() {
    this.#parent = null;
    for (const root of this.#mapping.values()) {
      root.remove();
    }
    this.#mapping.clear();
    this.#toUpdate.clear();
  }
}
















{
  globalThis._pdfjsTestingUtils = {
    HighlightOutliner: HighlightOutliner
  };
}
globalThis.pdfjsLib = {
  AbortException: AbortException,
  AnnotationEditorLayer: AnnotationEditorLayer,
  AnnotationEditorParamsType: AnnotationEditorParamsType,
  AnnotationEditorType: AnnotationEditorType,
  AnnotationEditorUIManager: AnnotationEditorUIManager,
  AnnotationLayer: AnnotationLayer,
  AnnotationMode: AnnotationMode,
  AnnotationType: AnnotationType,
  build: build,
  ColorPicker: ColorPicker,
  createValidAbsoluteUrl: createValidAbsoluteUrl,
  DOMSVGFactory: DOMSVGFactory,
  DrawLayer: DrawLayer,
  FeatureTest: util_FeatureTest,
  fetchData: fetchData,
  getDocument: getDocument,
  getFilenameFromUrl: getFilenameFromUrl,
  getPdfFilenameFromUrl: getPdfFilenameFromUrl,
  getUuid: getUuid,
  getXfaPageViewport: getXfaPageViewport,
  GlobalWorkerOptions: GlobalWorkerOptions,
  ImageKind: util_ImageKind,
  InvalidPDFException: InvalidPDFException,
  isDataScheme: isDataScheme,
  isPdfFile: isPdfFile,
  isValidExplicitDest: isValidExplicitDest,
  MathClamp: MathClamp,
  noContextMenu: noContextMenu,
  normalizeUnicode: normalizeUnicode,
  OPS: OPS,
  OutputScale: OutputScale,
  PasswordResponses: PasswordResponses,
  PDFDataRangeTransport: PDFDataRangeTransport,
  PDFDateString: PDFDateString,
  PDFWorker: PDFWorker,
  PermissionFlag: PermissionFlag,
  PixelsPerInch: PixelsPerInch,
  RenderingCancelledException: RenderingCancelledException,
  ResponseException: ResponseException,
  setLayerDimensions: setLayerDimensions,
  shadow: shadow,
  SignatureExtractor: SignatureExtractor,
  stopEvent: stopEvent,
  SupportedImageMimeTypes: SupportedImageMimeTypes,
  TextLayer: TextLayer,
  TouchManager: TouchManager,
  updateUrlHash: updateUrlHash,
  Util: Util,
  VerbosityLevel: VerbosityLevel,
  version: version,
  XfaLayer: XfaLayer
};

const _hoisted_1$1 = {
  key: 0,
  class: "loading-screen"
};
const _hoisted_2 = {
  key: 1,
  class: "image-display-area"
};
const _hoisted_3 = {
  class: "ocr-container",
  ref: "containerRef"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = ["onClick", "onMouseover"];
var script$2 = /* @__PURE__ */ defineComponent({
  __name: "renderOCRResponse",
  props: {
    image: { type: null, required: true },
    language: { type: String, required: true }
  },
  emits: ["close", "loadingUpdate"],
  setup(__props, { emit }) {
    const props = __props;
    GlobalWorkerOptions.workerSrc = "/tta/pdf.worker.mjs";
    const { useNotificationsStore } = useStores();
    const notificationStore = useNotificationsStore();
    const hoveredIndex = ref(null), textElements = ref([]), imageRef = ref(), selectedImage = ref(), selectedIndexes = ref([]), hocr = ref(""), processingOCR = ref(false), renderedImages = ref([]), currentImageIndex = ref(1);
    const fullText = computed(() => {
      return selectedIndexes.value.sort().map((e) => {
        var _a;
        return (_a = textElements.value[e]) == null ? void 0 : _a.text;
      }).join(" ");
    });
    onMounted(async () => {
      const file = await new Promise((res) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          res(e.target.result);
        };
        if (props.image.type == "application/pdf") {
          reader.readAsArrayBuffer(props.image);
        } else
          reader.readAsDataURL(props.image);
      });
      if (props.image.type.startsWith("image/")) {
        loadImage(file, props.image);
      } else if (props.image.type == "application/pdf") {
        const typedArray = new Uint8Array(file);
        const pdf = await getDocument(typedArray).promise;
        console.log(pdf.numPages);
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: context, viewport }).promise;
          const blob = await new Promise(
            (resolve) => canvas.toBlob((b) => resolve(b), "image/png")
          );
          renderedImages.value.push({
            string: canvas.toDataURL("image/png"),
            file: new File([blob], "page" + i + ".png", { type: "image/png" })
          });
          canvas.remove();
          console.log({ i });
        }
        const [first] = renderedImages.value;
        if (first)
          loadImage(first.string, first.file).then(
            (resp) => first.response = resp
          );
      } else {
        emit("close");
        notificationStore.add({
          title: "Error while using OCR",
          text: `File type '${props.image.type}' not supported.`,
          type: "error",
          dialog: true
        });
      }
    });
    watch(
      () => currentImageIndex.value,
      (newIndex) => {
        const image = renderedImages.value[newIndex - 1];
        if (image) {
          loadImage(image.string, image.file, image.response).then(
            (resp) => image.response = resp
          );
        }
      }
    );
    async function loadImage(imgString, imageBlob, previouseResponse) {
      selectedImage.value = imgString;
      if (previouseResponse) {
        hocr.value = previouseResponse;
        onImageLoad();
        return previouseResponse;
      }
      console.log(imageBlob);
      document.addEventListener("click", inputClickHandler);
      processingOCR.value = true;
      emit("loadingUpdate", true);
      const formData = new FormData();
      formData.append("image", imageBlob);
      let result;
      try {
        const response = await fetch("/tta/ocr?language=" + props.language, {
          method: "POST",
          body: formData
        });
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        result = await response.text();
        hocr.value = result;
        onImageLoad();
      } catch (e) {
        notificationStore.add({
          title: "Error while using OCR",
          text: `Please check your console/terminal for the error.`,
          type: "error",
          dialog: true
        });
        console.error(e);
      }
      processingOCR.value = false;
      emit("loadingUpdate", false);
      return result;
    }
    onBeforeUnmount(() => {
      document.removeEventListener("click", inputClickHandler);
    });
    function onImageLoad() {
      const img = imageRef.value;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const displayWidth = img.clientWidth;
      const displayHeight = img.clientHeight;
      const words = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(hocr.value, "text/html");
      const spans = doc.querySelectorAll(".ocrx_word");
      spans.forEach((span) => {
        const title = span.getAttribute("title");
        if (title) {
          const bboxMatch = title.match(/bbox (\d+) (\d+) (\d+) (\d+)/);
          if (bboxMatch) {
            const [_, left, top, right, bottom] = bboxMatch.map(Number);
            const scaledLeft = left / imgWidth * displayWidth;
            const scaledTop = top / imgHeight * displayHeight;
            const scaledWidth = (right - left) / imgWidth * displayWidth;
            const scaledHeight = (bottom - top) / imgHeight * displayHeight;
            const bbox = {
              x0: scaledLeft,
              y0: scaledTop,
              x1: scaledLeft + scaledWidth,
              y1: scaledTop + scaledHeight
            };
            words.push({
              text: span.textContent.trim(),
              bbox
            });
          } else {
            console.warn("Malformed bbox data for span:", span);
          }
        } else {
          console.warn("Missing title attribute for span:", span);
        }
      });
      textElements.value = words;
    }
    function handleTextClick(index) {
      const selIndex = selectedIndexes.value.indexOf(index);
      if (selIndex == -1) {
        selectedIndexes.value.push(index);
      } else {
        selectedIndexes.value.splice(selIndex, 1);
      }
    }
    function inputClickHandler() {
      const el = document.activeElement;
      if ((el.tagName === "INPUT" || el.tagName === "TEXTAREA") && !el.readOnly && !el.disabled && fullText.value) {
        const start = el.selectionStart;
        const end = el.selectionEnd;
        const currentValue = el.value;
        el.value = currentValue.slice(0, start) + fullText.value + currentValue.slice(end);
        el.selectionStart = el.selectionEnd = start + fullText.length;
        selectedIndexes.value = [];
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
    return (_ctx, _cache) => {
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_VPagination = resolveComponent("VPagination");
      const _component_v_input = resolveComponent("v-input");
      return openBlock(), createElementBlock(Fragment, null, [
        processingOCR.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(_component_v_progress_circular, {
            indeterminate: "",
            class: "c"
          })
        ])) : createCommentVNode("v-if", true),
        selectedImage.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("img", {
              src: selectedImage.value,
              onLoad: onImageLoad,
              style: { width: "100%", "object-fit": "contain" },
              ref_key: "imageRef",
              ref: imageRef,
              onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, null, 40, _hoisted_4),
            (openBlock(true), createElementBlock(Fragment, null, renderList(textElements.value, (word, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "text-overlay",
                style: normalizeStyle({
                  padding: "2px",
                  position: "absolute",
                  left: `${word.bbox.x0}px`,
                  top: `${word.bbox.y0}px`,
                  width: `${word.bbox.x1 - word.bbox.x0}px`,
                  height: `${word.bbox.y1 - word.bbox.y0}px`,
                  border: selectedIndexes.value.includes(index) ? "2px solid green" : hoveredIndex.value === index ? "2px solid blue" : "1px solid transparent",
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 0, 0.3)"
                }),
                onClick: ($event) => handleTextClick(index),
                onMouseover: ($event) => hoveredIndex.value = index,
                onMouseleave: _cache[1] || (_cache[1] = ($event) => hoveredIndex.value = null)
              }, null, 44, _hoisted_5);
            }), 128))
          ], 512),
          renderedImages.value.length > 1 ? (openBlock(), createBlock(_component_VPagination, {
            key: 0,
            modelValue: currentImageIndex.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => currentImageIndex.value = $event),
            length: renderedImages.value.length,
            totalVisible: 4,
            class: "pagination-center"
          }, null, 8, ["modelValue", "length"])) : createCommentVNode("v-if", true),
          createVNode(_component_v_input, { modelValue: unref(fullText) }, null, 8, ["modelValue"])
        ])) : createCommentVNode("v-if", true)
      ], 64);
    };
  }
});

var css$2 = "\n.image-display-area[data-v-0d65f7ea] {\r\n  position: relative;\r\n  background: white;\r\n  border: 1px solid white;\r\n  color: black;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  margin: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.pagination-center[data-v-0d65f7ea] {\r\n  margin: 5px auto;\n}\n.ocr-container[data-v-0d65f7ea] {\r\n  position: relative;\r\n  height: 100%;\n}\n.text-overlay[data-v-0d65f7ea] {\r\n  position: absolute;\n}\n.loading-screen[data-v-0d65f7ea] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  display: flex;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 1000;\n}\n.loading-screen .c[data-v-0d65f7ea] {\r\n  margin: auto;\n}\r\n";
n$1(css$2,{});

script$2.__scopeId = "data-v-0d65f7ea";
script$2.__file = "ocr/OCR-interface/src/renderOCRResponse.vue";

var script$1 = /* @__PURE__ */ defineComponent({
  __name: "ocredrag",
  props: {
    initialX: { type: Number, required: true },
    initialY: { type: Number, required: true }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const draggableElement = ref(null);
    const isDragging = ref(false);
    const position = reactive({
      x: props.initialX || 50,
      y: props.initialY || 50
    });
    const dragOffset = reactive({
      x: 0,
      y: 0
    });
    const startDrag = (event) => {
      isDragging.value = true;
      dragOffset.x = event.clientX - position.x;
      dragOffset.y = event.clientY - position.y;
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
    };
    const onDrag = (event) => {
      if (isDragging.value) {
        position.x = event.clientX - dragOffset.x;
        position.y = event.clientY - dragOffset.y;
      }
    };
    const stopDrag = () => {
      isDragging.value = false;
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    };
    onUnmounted(() => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    });
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_VButton = resolveComponent("VButton");
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createElementVNode("div", {
          ref_key: "draggableElement",
          ref: draggableElement,
          style: normalizeStyle({
            position: "absolute",
            left: position.x + "px",
            top: position.y + "px",
            cursor: isDragging.value ? "grabbing" : "grab",
            width: "500px",
            "max-width": "80vw",
            height: "auto",
            padding: "20px",
            backgroundColor: "var(--theme--background)",
            color: "var(--theme--form--field--label--foreground)",
            border: "var(--theme--border-color) 2px solid",
            borderRadius: "4px",
            userSelect: "none",
            "z-index": 100
          }),
          onMousedown: startDrag
        }, [
          renderSlot(_ctx.$slots, "default"),
          createVNode(_component_VButton, {
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close")),
            outlined: false,
            icon: true,
            rounded: true,
            class: "close-btn"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "close" })
            ]),
            _: 1
          })
        ], 36)
      ]);
    };
  }
});

var css$1 = "\n.close-btn[data-v-6008a42c] {\r\n  position: absolute;\r\n  right: -10px;\r\n  top: -10px;\r\n  z-index: 1001;\n}\r\n";
n$1(css$1,{});

script$1.__scopeId = "data-v-6008a42c";
script$1.__file = "ocr/OCR-interface/src/ocredrag.vue";

const _hoisted_1 = { class: "ocr-container" };
var script = /* @__PURE__ */ defineComponent({
  __name: "interface",
  props: {
    language: { type: String, required: true },
    collection: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const { useFieldsStore } = useStores();
    const fieldsStore = useFieldsStore();
    const shouldTeleport = ref(false), inputRef = ref(), processingOCR = ref(false), uploadedFile = ref(), imageButtons = ref([]);
    onMounted(() => {
      const findImages = fieldsStore.getFieldsForCollection(props.collection).filter((e) => {
        var _a;
        return ((_a = e.meta) == null ? void 0 : _a.interface) == "file-image";
      });
      nextTick(() => {
        setTimeout(() => {
          for (const image of findImages) {
            const selector = "[data-collection=" + props.collection + "][data-field=" + image.field + "]";
            const find = document.querySelector(selector);
            if (find)
              find.addEventListener("mouseover", (event) => {
                const imgPreview = find.querySelector(".image-preview img");
                if (imgPreview) {
                  const hasOCR = find.querySelector(".ocr_button");
                  if (!hasOCR && getIMGsrc(imgPreview)) {
                    imageButtons.value.push(selector + " .actions");
                  }
                }
              });
          }
        }, 500);
        const findFileUploads = fieldsStore.getFieldsForCollection(props.collection).filter((e) => {
          var _a;
          return ((_a = e.meta) == null ? void 0 : _a.interface) == "file";
        });
        nextTick(() => {
          setTimeout(() => {
            for (const fileUpload of findFileUploads) {
              const selector = "[data-collection=" + props.collection + "][data-field=" + fileUpload.field + "]";
              const find = document.querySelector(selector);
              if (find) {
                const input = find.querySelector("input");
                input == null ? void 0 : input.addEventListener("change", () => {
                  var _a;
                  (_a = document.getElementById("_SCAN_OCR")) == null ? void 0 : _a.remove();
                });
                find.addEventListener("click", () => {
                  setTimeout(() => {
                    var _a;
                    const link = document.querySelector("a[download]");
                    if (link) {
                      const cloned = link.cloneNode(true);
                      cloned.href = "#";
                      cloned.querySelector("i").setAttribute("data-icon", "camera_video");
                      cloned.id = "_SCAN_OCR";
                      cloned.classList.add("hide-by-default");
                      cloned.children[1].innerText = "Scan with OCR";
                      cloned.addEventListener("click", (event) => {
                        event.preventDefault();
                        clickImage(void 0, link.getAttribute("href"));
                      });
                      (_a = link.parentNode) == null ? void 0 : _a.insertBefore(cloned, link);
                    }
                  }, 100);
                });
              }
            }
          });
        });
        shouldTeleport.value = true;
      });
    });
    function clickInput() {
      inputRef.value.click();
    }
    async function ocrUpload(event) {
      const file = event.target.files[0];
      if (!file)
        return;
      uploadedFile.value = file;
    }
    async function clickImage($event, src) {
      const imageSRC = src || getIMGsrc($event.target.parentElement);
      if (imageSRC) {
        const image = await fetch(imageSRC).then((e) => e.blob());
        const file = new File([image], "image.png", { type: image.type });
        const input = inputRef.value, dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    function getIMGsrc(parent) {
      let i = 0, imageSRC = "";
      while (i < 10) {
        parent = parent.parentElement;
        const img = parent.querySelector("img");
        if (img) {
          imageSRC = img.src;
          break;
        }
        i++;
      }
      return imageSRC.split("?")[0];
    }
    function closeOCR() {
      uploadedFile.value = null;
      inputRef.value.value = "";
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_VButton = resolveComponent("VButton");
      const _component_v_button = resolveComponent("v-button");
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(imageButtons.value, (btn) => {
          return openBlock(), createBlock(Teleport, { to: btn }, [
            createVNode(_component_VButton, {
              onClick: clickImage,
              outlined: false,
              icon: true,
              rounded: true,
              class: "ocr_button"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_icon, { name: "camera_video" })
              ]),
              _: 1
            })
          ], 8, ["to"]);
        }), 256)),
        shouldTeleport.value ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: "#sidebar .v-item-group"
        }, [
          createElementVNode("div", _hoisted_1, [
            createVNode(_component_v_button, {
              class: "ocr-btn",
              onClick: clickInput,
              loading: processingOCR.value
            }, {
              default: withCtx(() => [
                createTextVNode(" Import data with OCR ")
              ]),
              _: 1
            }, 8, ["loading"]),
            createElementVNode("input", {
              type: "file",
              onChange: ocrUpload,
              class: "ocr-input",
              ref_key: "inputRef",
              ref: inputRef,
              accept: "image/*,application/pdf"
            }, null, 544),
            uploadedFile.value != null ? (openBlock(), createBlock(script$1, {
              key: 0,
              onClose: closeOCR
            }, {
              default: withCtx(() => [
                createVNode(script$2, {
                  image: uploadedFile.value,
                  onClose: _cache[0] || (_cache[0] = () => closeOCR()),
                  language: __props.language,
                  onLoadingUpdate: _cache[1] || (_cache[1] = ($event) => processingOCR.value = $event)
                }, null, 8, ["image", "language"])
              ]),
              _: 1
            })) : createCommentVNode("v-if", true)
          ])
        ])) : createCommentVNode("v-if", true)
      ], 64);
    };
  }
});

var css = "\n.ocr-container {\r\n  display: flex;\n}\n.ocr-container .ocr-btn {\r\n  margin: 10px auto;\n}\n.ocr-container .ocr-input {\r\n  display: none;\n}\n.hide-by-default {\r\n  display: none;\n}\na ~ #_SCAN_OCR {\r\n  display: block;\n}\r\n";
n$1(css,{});

script.__file = "ocr/OCR-interface/src/interface.vue";

const languages$1 = [
  { value: "eng", text: "English" },
  { value: "por", text: "Portuguese" },
  { value: "fra", text: "French" },
  { value: "osd", text: "Orientation and Script Detection" },
  { value: "chi_sim", text: "Chinese (Simplified)" },
  { value: "spa", text: "Spanish" },
  { value: "deu", text: "German" },
  { value: "chi_tra", text: "Chinese (Traditional)" },
  { value: "heb", text: "Hebrew" },
  { value: "kor", text: "Korean" },
  { value: "jpn", text: "Japanese" },
  { value: "rus", text: "Russian" },
  { value: "nld", text: "Dutch" },
  { value: "hin", text: "Hindi" },
  { value: "ita", text: "Italian" },
  { value: "jpn_vert", text: "Japanese (Vertical)" },
  { value: "pol", text: "Polish" },
  { value: "ron", text: "Romanian" },
  { value: "mar", text: "Marathi" },
  { value: "ukr", text: "Ukrainian" },
  { value: "mal", text: "Malayalam" },
  { value: "tam", text: "Tamil" },
  { value: "guj", text: "Gujarati" },
  { value: "tha", text: "Thai" },
  { value: "kan", text: "Kannada" },
  { value: "vie", text: "Vietnamese" },
  { value: "tel", text: "Telugu" },
  { value: "swe", text: "Swedish" },
  { value: "tur", text: "Turkish" },
  { value: "nor", text: "Norwegian" },
  { value: "ces", text: "Czech" },
  { value: "ben", text: "Bengali" },
  { value: "pan", text: "Punjabi" },
  { value: "equ", text: "Math / Equation Detection" },
  { value: "ell", text: "Greek" },
  { value: "bul", text: "Bulgarian" },
  { value: "lat", text: "Latin" },
  { value: "kur", text: "Kurdish" },
  { value: "ori", text: "Odia" },
  { value: "kat", text: "Georgian" },
  { value: "amh", text: "Amharic" },
  { value: "kaz", text: "Kazakh" },
  { value: "cat", text: "Catalan" },
  { value: "nep", text: "Nepali" },
  { value: "urd", text: "Urdu" },
  { value: "khm", text: "Khmer" },
  { value: "dan", text: "Danish" },
  { value: "chi_sim_vert", text: "Chinese (Simplified, Vertical)" },
  { value: "uzb", text: "Uzbek (Latin)" },
  { value: "slv", text: "Slovenian" },
  { value: "mkd", text: "Macedonian" },
  { value: "tgl", text: "Tagalog" },
  { value: "srp", text: "Serbian (Cyrillic)" },
  { value: "hrv", text: "Croatian" },
  { value: "tir", text: "Tigrinya" },
  { value: "syr", text: "Syriac" },
  { value: "lao", text: "Lao" },
  { value: "fin", text: "Finnish" },
  { value: "est", text: "Estonian" },
  { value: "bos", text: "Bosnian" },
  { value: "uig", text: "Uyghur" },
  { value: "sin", text: "Sinhala" },
  { value: "hye", text: "Armenian" },
  { value: "eus", text: "Basque" },
  { value: "sqi", text: "Albanian" },
  { value: "isl", text: "Icelandic" },
  { value: "bel", text: "Belarusian" },
  { value: "aze", text: "Azerbaijani (Latin)" },
  { value: "pus", text: "Pashto" },
  { value: "oci", text: "Occitan" },
  { value: "lit", text: "Lithuanian" },
  { value: "jav", text: "Javanese" },
  { value: "hun", text: "Hungarian" },
  { value: "grc", text: "Ancient Greek" },
  { value: "gle", text: "Irish" },
  { value: "frm", text: "Middle French" },
  { value: "afr", text: "Afrikaans" },
  { value: "uzb_cyrl", text: "Uzbek (Cyrillic)" },
  { value: "spa_old", text: "Old Spanish" },
  { value: "snd", text: "Sindhi" },
  { value: "mya", text: "Burmese" },
  { value: "iku", text: "Inuktitut" },
  { value: "fil", text: "Filipino" },
  { value: "fas", text: "Persian" },
  { value: "fao", text: "Faroese" },
  { value: "dzo", text: "Dzongkha" },
  { value: "cym", text: "Welsh" },
  { value: "aze_cyrl", text: "Azerbaijani (Cyrillic)" },
  { value: "ind", text: "Indonesian" },
  { value: "ara", text: "Arabic" },
  { value: "yid", text: "Yiddish" },
  { value: "ton", text: "Tongan" },
  { value: "tgk", text: "Tajik" },
  { value: "srp_latn", text: "Serbian (Latin)" },
  { value: "slk_frak", text: "Slovak (Fraktur)" },
  { value: "slk", text: "Slovak" },
  { value: "san", text: "Sanskrit" },
  { value: "msa", text: "Malay" },
  { value: "mri", text: "Maori" },
  { value: "mlt", text: "Maltese" },
  { value: "lav", text: "Latvian" },
  { value: "kur_ara", text: "Kurdish (Arabic)" },
  { value: "kor_vert", text: "Korean (Vertical)" },
  { value: "kmr", text: "Kurmanji" },
  { value: "kir", text: "Kyrgyz" },
  { value: "hat", text: "Haitian Creole" },
  { value: "glg", text: "Galician" },
  { value: "fry", text: "Frisian" },
  { value: "epo", text: "Esperanto" },
  { value: "div", text: "Divehi" },
  { value: "chr", text: "Cherokee" },
  { value: "bod", text: "Tibetan" },
  { value: "asm", text: "Assamese" },
  { value: "yor", text: "Yoruba" },
  { value: "tat", text: "Tatar" },
  { value: "sun", text: "Sundanese" },
  { value: "occ", text: "Occitan (alternative)" },
  { value: "mon", text: "Mongolian" },
  { value: "ita_old", text: "Old Italian" },
  { value: "gla", text: "Scottish Gaelic" },
  { value: "frk", text: "Frankish" },
  { value: "enm", text: "Middle English" },
  { value: "deu_frak", text: "German (Fraktur)" },
  { value: "dan_frak", text: "Danish (Fraktur)" },
  { value: "chi_tra_vert", text: "Chinese (Traditional, Vertical)" },
  { value: "ceb", text: "Cebuano" },
  { value: "bre", text: "Breton" },
  { value: "swa", text: "Swahili" },
  { value: "que", text: "Quechua" },
  { value: "ltz", text: "Luxembourgish" },
  { value: "kat_old", text: "Old Georgian" },
  { value: "cos", text: "Corsican" }
];

var e8 = defineInterface({
  id: "tta-ocr-interface",
  name: "OCR interface",
  icon: "camera_video",
  description: "Use OCR to fill fields. (Text to anything)",
  hideLabel: true,
  hideLoader: true,
  component: script,
  types: ["alias"],
  localTypes: ["presentation"],
  options: [
    {
      field: "language",
      name: "Language",
      type: "dropdown",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: languages$1
        }
      }
    }
  ]
});

const languages = [
  { value: "eng", text: "English" },
  { value: "por", text: "Portuguese" },
  { value: "fra", text: "French" },
  { value: "osd", text: "Orientation and Script Detection" },
  { value: "chi_sim", text: "Chinese (Simplified)" },
  { value: "spa", text: "Spanish" },
  { value: "deu", text: "German" },
  { value: "chi_tra", text: "Chinese (Traditional)" },
  { value: "heb", text: "Hebrew" },
  { value: "kor", text: "Korean" },
  { value: "jpn", text: "Japanese" },
  { value: "rus", text: "Russian" },
  { value: "nld", text: "Dutch" },
  { value: "hin", text: "Hindi" },
  { value: "ita", text: "Italian" },
  { value: "jpn_vert", text: "Japanese (Vertical)" },
  { value: "pol", text: "Polish" },
  { value: "ron", text: "Romanian" },
  { value: "mar", text: "Marathi" },
  { value: "ukr", text: "Ukrainian" },
  { value: "mal", text: "Malayalam" },
  { value: "tam", text: "Tamil" },
  { value: "guj", text: "Gujarati" },
  { value: "tha", text: "Thai" },
  { value: "kan", text: "Kannada" },
  { value: "vie", text: "Vietnamese" },
  { value: "tel", text: "Telugu" },
  { value: "swe", text: "Swedish" },
  { value: "tur", text: "Turkish" },
  { value: "nor", text: "Norwegian" },
  { value: "ces", text: "Czech" },
  { value: "ben", text: "Bengali" },
  { value: "pan", text: "Punjabi" },
  { value: "equ", text: "Math / Equation Detection" },
  { value: "ell", text: "Greek" },
  { value: "bul", text: "Bulgarian" },
  { value: "lat", text: "Latin" },
  { value: "kur", text: "Kurdish" },
  { value: "ori", text: "Odia" },
  { value: "kat", text: "Georgian" },
  { value: "amh", text: "Amharic" },
  { value: "kaz", text: "Kazakh" },
  { value: "cat", text: "Catalan" },
  { value: "nep", text: "Nepali" },
  { value: "urd", text: "Urdu" },
  { value: "khm", text: "Khmer" },
  { value: "dan", text: "Danish" },
  { value: "chi_sim_vert", text: "Chinese (Simplified, Vertical)" },
  { value: "uzb", text: "Uzbek (Latin)" },
  { value: "slv", text: "Slovenian" },
  { value: "mkd", text: "Macedonian" },
  { value: "tgl", text: "Tagalog" },
  { value: "srp", text: "Serbian (Cyrillic)" },
  { value: "hrv", text: "Croatian" },
  { value: "tir", text: "Tigrinya" },
  { value: "syr", text: "Syriac" },
  { value: "lao", text: "Lao" },
  { value: "fin", text: "Finnish" },
  { value: "est", text: "Estonian" },
  { value: "bos", text: "Bosnian" },
  { value: "uig", text: "Uyghur" },
  { value: "sin", text: "Sinhala" },
  { value: "hye", text: "Armenian" },
  { value: "eus", text: "Basque" },
  { value: "sqi", text: "Albanian" },
  { value: "isl", text: "Icelandic" },
  { value: "bel", text: "Belarusian" },
  { value: "aze", text: "Azerbaijani (Latin)" },
  { value: "pus", text: "Pashto" },
  { value: "oci", text: "Occitan" },
  { value: "lit", text: "Lithuanian" },
  { value: "jav", text: "Javanese" },
  { value: "hun", text: "Hungarian" },
  { value: "grc", text: "Ancient Greek" },
  { value: "gle", text: "Irish" },
  { value: "frm", text: "Middle French" },
  { value: "afr", text: "Afrikaans" },
  { value: "uzb_cyrl", text: "Uzbek (Cyrillic)" },
  { value: "spa_old", text: "Old Spanish" },
  { value: "snd", text: "Sindhi" },
  { value: "mya", text: "Burmese" },
  { value: "iku", text: "Inuktitut" },
  { value: "fil", text: "Filipino" },
  { value: "fas", text: "Persian" },
  { value: "fao", text: "Faroese" },
  { value: "dzo", text: "Dzongkha" },
  { value: "cym", text: "Welsh" },
  { value: "aze_cyrl", text: "Azerbaijani (Cyrillic)" },
  { value: "ind", text: "Indonesian" },
  { value: "ara", text: "Arabic" },
  { value: "yid", text: "Yiddish" },
  { value: "ton", text: "Tongan" },
  { value: "tgk", text: "Tajik" },
  { value: "srp_latn", text: "Serbian (Latin)" },
  { value: "slk_frak", text: "Slovak (Fraktur)" },
  { value: "slk", text: "Slovak" },
  { value: "san", text: "Sanskrit" },
  { value: "msa", text: "Malay" },
  { value: "mri", text: "Maori" },
  { value: "mlt", text: "Maltese" },
  { value: "lav", text: "Latvian" },
  { value: "kur_ara", text: "Kurdish (Arabic)" },
  { value: "kor_vert", text: "Korean (Vertical)" },
  { value: "kmr", text: "Kurmanji" },
  { value: "kir", text: "Kyrgyz" },
  { value: "hat", text: "Haitian Creole" },
  { value: "glg", text: "Galician" },
  { value: "fry", text: "Frisian" },
  { value: "epo", text: "Esperanto" },
  { value: "div", text: "Divehi" },
  { value: "chr", text: "Cherokee" },
  { value: "bod", text: "Tibetan" },
  { value: "asm", text: "Assamese" },
  { value: "yor", text: "Yoruba" },
  { value: "tat", text: "Tatar" },
  { value: "sun", text: "Sundanese" },
  { value: "occ", text: "Occitan (alternative)" },
  { value: "mon", text: "Mongolian" },
  { value: "ita_old", text: "Old Italian" },
  { value: "gla", text: "Scottish Gaelic" },
  { value: "frk", text: "Frankish" },
  { value: "enm", text: "Middle English" },
  { value: "deu_frak", text: "German (Fraktur)" },
  { value: "dan_frak", text: "Danish (Fraktur)" },
  { value: "chi_tra_vert", text: "Chinese (Traditional, Vertical)" },
  { value: "ceb", text: "Cebuano" },
  { value: "bre", text: "Breton" },
  { value: "swa", text: "Swahili" },
  { value: "que", text: "Quechua" },
  { value: "ltz", text: "Luxembourgish" },
  { value: "kat_old", text: "Old Georgian" },
  { value: "cos", text: "Corsican" }
];

var e9 = defineOperationApp({
  id: "ttaocr",
  name: "TTA OCR",
  icon: "camera_video",
  description: "TTA scan image with OCR",
  overview: ({ fileID, mode, language }) => [
    {
      label: "Mode",
      text: mode
    },
    {
      label: "Language",
      text: language
    },
    {
      label: "File ID",
      text: fileID
    }
  ],
  options: [
    {
      field: "fileID",
      name: "File ID",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "mode",
      name: "Mode",
      type: "string",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Text", value: "text" },
            { text: "Horc", value: "horc" }
          ]
        }
      }
    },
    {
      field: "language",
      name: "Language",
      type: "dropdown",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: languages
        }
      }
    }
  ]
});

const interfaces = [e5,e6,e7,e8];const displays = [];const layouts = [];const modules = [e4];const panels = [];const operations = [e0,e1,e2,e3,e9];

export { displays, interfaces, layouts, modules, operations, panels };
