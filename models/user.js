const UserSchema = new mongoose.Schema(
    {
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
    }
)

const userCollection = new mongoose.model('users', UserSchema)

module.exports = userCollection