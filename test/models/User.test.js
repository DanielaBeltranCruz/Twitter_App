const User = require('./../../app/models/User')

describe("Unit Tests of User Class", () => {
    test('Create an user object', () => {
        const user = new User(1, "danielabeltrancruz", "Daniela", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("danielabeltrancruz")
        expect(user.name).toBe("Daniela")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    
    test('Add getters', () => {
        const user = new User(1, "danielabeltrancruz", "Daniela", "Bio")
        expect(user.getUsername).toBe("danielabeltrancruz")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
})

