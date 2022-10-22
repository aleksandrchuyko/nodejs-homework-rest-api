const path = require('path');
const fs = require('fs/promises');

const { User } = require('../../models/users/user');

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const extension = originalname.split(".").pop();
    const filename = `${_id}.${extension}`;
    const uploadFullPath = path.join(avatarDir, filename);

    await fs.rename(tempUpload, uploadFullPath);
    const avatarURL = path.join("avatars", filename);
    
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.status(200).json({
        avatarURL
    });

}

module.exports = updateAvatar;