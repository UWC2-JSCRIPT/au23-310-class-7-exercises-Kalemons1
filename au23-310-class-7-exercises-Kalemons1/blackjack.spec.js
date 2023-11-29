describe('Tests for the BlackJack Game', () => {
    it('should calculate the score of a hand', () => {
        const hand = [
        {displayVal: 'six', val: 6, suit: 'hearts'},
        {displayVal: 'Seven', val: 7, suit: 'hearts'},
        ]

        const result = calcPoints(hand)

        expect(result.total).toEqual(false)
    });
}); 

describe("Tests for the Soccer Game", () => {

    describe("Tests for the getTotalPoints function", () => {
        it("should return an accurate toal score of 10 for a string input 'wwdlw' ", () => {
            const result = getTotalPoints('wwdlw'); 
            expect(result).toEqual(10)
        })
    })
}) 

