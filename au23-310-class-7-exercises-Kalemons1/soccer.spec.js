//three main Jasmine functions describe
// it
//expect


describe("Tests for the Soccer Game", () => {

    describe("Tests for the getTotalPoints function", () => {
        it("should return an accurate toal score of 10 for a string input 'wwdlw' ", () => {
            const result = getTotalPoints('wwdlw'); 
            expect(result).toEqual(10)
        })
    })
}) 

