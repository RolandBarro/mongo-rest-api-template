var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema here
var employeesSchema = mongoose.Schema({	        
    firstName: String,  
    lastName: String,  
    dept_id: String,
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

module.exports = restful.model('Employees', employeesSchema);