# Password Brew

A simple and secure password generator that works with both CommonJS (`require`) and ES Modules (`import`).

## Installation

Install the package via **npm**:

```sh
npm install password-brew
```

---

## Usage

### CommonJS (`require`)

```js
const generatePassword = require("password-brew");

const password = generatePassword({ length: 12, symbols: true });
```

### ES Modules (`import`)

```js
import generatePassword from "password-brew";

const password = generatePassword({ length: 12, numbers: false });
```

---

## Options

The function `generatePassword(options)` accepts an options object with the following properties:

| **Option**   | **Type**  | **Default** | **Description** |
|-------------|----------|-----------|----------------|
| `length`    | Number   | `10`       | Length of the generated password |
| `lowercase` | Boolean  | `true`     | Include lowercase letters |
| `uppercase` | Boolean  | `true`     | Include uppercase letters |
| `numbers`   | Boolean  | `true`     | Include numbers |
| `symbols`   | Boolean  | `false`    | Include special characters |

---

## License

MIT

---