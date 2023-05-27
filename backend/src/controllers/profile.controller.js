const { UserProfile } = require('../models/usersProfiles.models')

class UserProfileController {
    async update(req, res) {
        const { desription, profilePictures } = req.body
        await UserProfile.update(desription, profilePictures, { where: { userId: req.params.id } })
    }
}




module.exports = new UserProfileController()