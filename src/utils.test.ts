import * as utils from "./utils"

describe("utils.getPostFixExpression", () => {
    test("0", () => {
        let result: any = utils.getPostFixExpression("1+2+3")
        expect(result).toBe("1 2 + 3 +")
    })

    test("1", () => {
        let result: any = utils.getPostFixExpression("4*(5-(7+2))")
        expect(result).toBe("4 5 7 2 + - *")
    })

    test("2", () => {
        let result: any = utils.getPostFixExpression("((3+4)*2)/7")
        expect(result).toBe("3 4 + 2 * 7 /")
    })

    test("3", () => {
        let result: any = utils.getPostFixExpression("(5+7)*(6-2)")
        expect(result).toBe("5 7 + 6 2 - *")
    })
})


describe("utils.splitExpression", () => {
    test("0", () => {
        let result: any = utils.splitExpression("(5+7)*(6-2)")
        expect(result).toEqual(["(", "5", "+", "7", ")", "*", "(", "6", "-", "2", ")"])
    })

    test("1", () => {
        let result: any = utils.splitExpression("(556+75)*(000-254)")
        expect(result).toEqual(["(", "556", "+", "75", ")", "*", "(", "000", "-", "254", ")"])
    })
})


describe("utils.isEqualBracketPair", () => {
    test("0", () => {
        let result: any = utils.isEqualBracketPair("(a+b))")
        expect(result).toBe(false)
    })

    test("1", () => {
        let result: any = utils.isEqualBracketPair("(10+256*320)*(10*7/3)")
        expect(result).toBe(true)
    })

    test("2", () => {
        let result: any = utils.isEqualBracketPair("10+1")
        expect(result).toBe(true)
    })

    test("3", () => {
        let result: any = utils.isEqualBracketPair(")()(")
        expect(result).toBe(true)
    })
})
