const database = require('../models/index');
const { User } = database;

class UserService {
    static async getAllUsers() {
        try {
            return await User.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addUser(newUser) {
        try {
            return await User.create(newUser);
        } catch (error) {
            throw error;
        }
    }

    // method to update the user details in the database
    static async updateUser(id, updateUser) {
        try {
            const UserToUpdate = await User.findOne({
                where: { id: Number(id) },
            });
            if (UserToUpdate) {
                await UserToUpdate.update(updateUser);
                return updateUser;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;
