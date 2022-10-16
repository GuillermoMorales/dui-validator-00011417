import {describe, expect} from 'vitest'
import duiValidator from './duiValidator'

describe("duiValidator", () => {

    it('should return false if dui length is != 9',() => {
        expect(duiValidator("00000000")).toBe(false);
    })

    it("should return false for characters in DUI", () => {
        expect(duiValidator("hola56789")).toBe(false)
    })

    it("should return false for invalid DUI", () => {
        expect(duiValidator("123456789")).toBe(false)
    })
    
    it("should return true for valid DUI", () => {
        expect(duiValidator("023827235")).toBe(true)
    })
    
    
    
})