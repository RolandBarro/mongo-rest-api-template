var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema here
var usersSchema = new mongoose.Schema({	        
    userName: String,
	password: String,  
	userType: Number,
    create_date:{
    	type: Date,
    	default: Date.now
    },
    isActive: {
    	type: Boolean,
    	default: true
    },
    isDeleted: {
    	type: Boolean,
    	default: false
    }

});

module.exports = restful.model('Users', usersSchema);

