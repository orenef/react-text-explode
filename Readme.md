# react-text-explode

react-text-explode is a react base component with zero dependencies, use to add the exploding effect.

codesandbox demo -> [Demo](https://codesandbox.io/s/pedantic-zhukovsky-zkyds?file=/public/index.html)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-text-explode) to install .

```bash
npm install react-text-explode
```

## Usage

```jsx
import React from "react";
import { TextExplode } from "react-text-explode";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>react-text-explode</h1>
      <TextExplode text="Are you ready ?" trigger="click" />
    </div>
  );
}
```

props| default value| type | info
--- | --- | --- | ---
text | `Loading` | string | the text you want to apply the effect on.
trigger | `mouseover` | string | event to trigger the effect ( `mouseover` or `click` ).
initialFontSize | `12px` | string | text font size before effect apply.
timerMs | `undefined` | number Or undefined | active auto trigger when timer end
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)