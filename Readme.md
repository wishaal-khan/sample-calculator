### Sample Calculator
This is a simple calculator application that performs arithmetic operations as well as writes the expression in PostFix order.

## Installation
In order to install NPM packages, run the following command;
```
npm install
```

Run the following command to serve the application locally;
```
npm run dev
```

In order to run in production, first build the application with 
```
npm run build
```

Running the following commands serves the built application from `./dist`

```
npm run serve
```

## Functionality
##### Core Logic
Main functionality of calculator is placed inside `src/lib/calculator-core.ts`
This file contains the logic of controlling the expression as it grows, character-by-character. The functionality of arithmatic operations is also placed inside.

##### Utility
Some utility methods are contained in `./utils.ts`. This file has logic to validate the mathematical expressions, count characters, count operands and other similar logic.

##### Components
The following are the main components shown inside the application
- `Calculator` is the main body containing all the buttons.
- `CalculatorButton` displays a button and handles it's UI, plus checks what type of button is being displayed.
- `AdditionalResult` is a simple component that is displayed to show any additional message, in this case, PostFix notation of mathematical expression.
- `Screen` is a simple component that is the main display of calculator
- `HistoryItem` displays a single History item that contains expression, its post fix, and result
- `HistoryContainer` displays list of history. It also displays an information message when nothing is present.




 _This project is built with Vite instead of create-react-app. The reason being the faster build times. As opposed to create-react-app, Vite achieves faster build times because of intelligent dependency analysis which helps it hot reload only the parts that changed. Also, due to it's lightweight packages, it is way easier to setup and provides atleast 5x less installation time._
