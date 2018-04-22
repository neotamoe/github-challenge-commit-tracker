var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var ChallengeSchema = new Schema({
  challenge_name: String,
  start_date: Date,
  end_date: Date,
  current: Boolean
});

var ParticipantSchema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    github_username: {type: String, required: true},
    total_commits: Number,
    challenge: {type: Array}
});

var AdminSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

AdminSchema.pre('save', function (next) { 
    var admin = this;
    // only hash the password if it has been modified (or is new)
    if (!admin.isModified('password')) return next();
    
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
    
        // hash the password along with our new salt
        bcrypt.hash(admin.password, salt, function(err, hash) {
            if (err) return next(err);
    
            // override the cleartext password with the hashed one
            admin.password = hash;
            next();
        });
    })
})

AdminSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var Participant = mongoose.model("Participant", ParticipantSchema);

var Challenge = mongoose.model("Challenge", ChallengeSchema);

var Admin = mongoose.model("Admin", AdminSchema);

module.exports = {
    Challenge: Challenge,
    Participant: Participant,
    Admin: Admin
}
