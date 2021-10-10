import rewire from "rewire"
const calculator_core = rewire("./calculator-core")
const setDecimal = calculator_core.__get__("setDecimal")

const startBracket = calculator_core.__get__("startBracket")
describe("setDecimal", () => {
    test("0", () => {
        let result: any = setDecimal("1+2")
        expect(result).toBe("1+2.")
    })

    test("1", () => {
        let result: any = setDecimal("1+2.0")
        expect(result).toBe("1+2.0")
    })

    test("2", () => {
        let result: any = setDecimal("45+")
        expect(result).toBe("45+0.")
    })

    test("3", () => {
        let result: any = setDecimal("52.0x5")
        expect(result).toBe("52.0x5.")
    })
})

describe("startBracket", () => {
    test("0", () => {
        let result: any = startBracket("0")
        expect(result).toBe("(")
    })

    test("1", () => {
        let result: any = startBracket("10")
        expect(result).toBe("10(")
    })

    test("2", () => {
        let result: any = startBracket("45x(45+10")
        expect(result).toBe("45x(45+10(")
    })
})


describe("calculator_core.evaluate", () => {
    test("0", () => {
        let result: any = calculator_core.evaluate("1+24-30")
        expect(result).toBe(-5)
    })

    test("1", () => {
        let result: any = calculator_core.evaluate("1*(10*50)*(3+10)")
        expect(result).toBe(6500)
    })

    test("2", () => {
        let callFunction: any = () => {
            calculator_core.evaluate("a+b+10+50")
        }
    
        expect(callFunction).toThrow('Expression is not valid.')
    })

    test("3", () => {
        let callFunction: any = () => {
            calculator_core.evaluate("(10+10)*(10")
        }
    
        expect(callFunction).toThrow('Expression is not valid.')
    })
})
