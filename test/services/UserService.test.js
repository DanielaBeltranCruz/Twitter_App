const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "danielabeltrancruz", "Daniela")
        expect(user.id).toBe(1)
        expect(user.username).toBe("danielabeltrancruz")
        expect(user.name).toBe("Daniela")
        expect(user.bio).not.toBeUndefined()
    });  
})