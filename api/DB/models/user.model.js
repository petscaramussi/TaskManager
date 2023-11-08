const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// JWT Secret
const jwtSecret = "@¨&&!&112@*#dasdasdb@(!@)#*Asnjdasjdajks12@!(asndasd"

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expireAt: {
            type: Number,
            required: true
        }
    }]
});


// Instance methods \\

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    // return the document except the password and sessions
    return _.omit(userObject, ['password', 'sessions']);

}

UserSchema.methods.generateAccessAuthToken = function() {
    const user = this;
    return new Promise((resolve, reject) => {
        // Create the JSON Web Token and return that
        jwt.sign({_id: user._id.toHexString()}, jwtSecret, { expiresIn: '15m'}, (err, token) => {
            if (!err) {
                resolve(token);
            } else {
                reject();
            }
        })
    })
}

UserSchema.methods.generateAccessAuthToken = function () {
    return new Promisse((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (!err) {
                let token = buf.toString('hex');

                return resolve(token);
            }
        })
    })
}

let saveSessionToDatabase = (user, refreshToken) => {
    return new Promisse((resolve, reject) => {
        let expiresAt = generateRefreshTokenExpirytime();

        user.sessions.push({'token': refreshToken, expiresAt});
    })
}

let generateRefreshTokenExpirytime = () => {
    let daysUntilExpire = "10";
    let secondsUntilExpire = ((daysUntilExpire * 24) * 60) * 60;
    return ((Date.now() / 1000) + secondsUntilExpire);
}