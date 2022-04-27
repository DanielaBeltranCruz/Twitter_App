const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "danielabeltrancruz", "Daniela")
        expect(user.id).toBe(1)
        expect(user.username).toBe("danielabeltrancruz")
        expect(user.name).toBe("Daniela")
        expect(user.bio).not.toBeUndefined()
    });  
    
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "danielabeltrancruz", "Daniela")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("danielabeltrancruz")
        expect(userInfoInList[2]).toBe("Daniela")
        expect(userInfoInList[3]).toBe("Sin bio")
    });  

    test("3. Update username", () => {
        const user = UserService.create(1, "danielabeltrancruz", "Daniela")
        UserService.updateUserUsername(user, "danielabc")
        expect(user.username).toBe("danielabc")
    }); 
})