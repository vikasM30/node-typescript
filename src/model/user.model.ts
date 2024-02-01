import mongoose from "mongoose";


class UserModel {
    private collectionKeys: { [key: string]: Object}
    private userSchema: any
    private userModel: any
    constructor() {
        this.collectionKeys = {
            username: { type: String, required: true },
            email: { type: String, required: true },
            authentication: {
                password: { type: String, required: true, select: false },
                salt: { type: String, select: false },
                token: { type: String, select: false },
            },
        }
        this.userSchema = new mongoose.Schema(this.collectionKeys)
        this.userModel = mongoose.model('User', this.userSchema)
    }

    public getUserModel() {
        return this.userModel
    }

    public getUsers() {
        return this.userModel.find()
    }

    public getUserByEmail(email: string) {
        return this.userModel.findOne({ email })
    }

    public getUserById(id: string) {
        return this.userModel.findById(id)
    }

    public async createUser(values: Record<string, any>) {
        return await new this.userModel(values).save()
    }

    public deleteUserById(id: string) {
        return this.userModel.findOneAndDelete({ _id: id })
    }

    public updateUserById(id: string, values: Record<string, any>) {
        return this.userModel.findByIdAndUpdate({ id, values })
    }
}

export default UserModel