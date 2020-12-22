const UserService = require("../services/UserServices");



class UserController {
    static async getAllUsers(req, res) {
        try {
            const allUsers = await UserService.getAllUsers();
            res.status(200)
            return res.json(allUsers);

        } catch (error) {
            console.log('error in the getAllUsers in UserController.js', error);
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async addUser(req, res) {

        try {
            const createdUser = await UserService.addUser(req.body);
            res.status(200)
            return res.json(createdUser);
        } catch (error) {
            console.log('Error in register in UserController.js', error);
            util.setError(400, error);
            return util.send(res);
        }
    }


}

module.exports = UserController;
