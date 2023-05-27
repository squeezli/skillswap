const User = require('../models/users.models')
const UserProfile = require('../models/usersProfiles.models')

class UserController {
    async delete(req,res) {
        const id=req.params.id
        const user=await User.destroy({where:{id:id}})
        await UserProfile.destroy({where:{userId:id}})
        return res.json(user)
    }
}

module.exports = new UserController()