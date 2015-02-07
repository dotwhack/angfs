'use strict';
var mongo_uri;

if(process.env.VCAP_SERVICES){
	var env = JSON.parse(process.env.VCAP_SERVICES);
	mongo_uri = env['mongolab'][0].credentials.uri;		
}
else{
	mongo_uri = 'mongodb://bbailey:redtango1@ds031691.mongolab.com:31691/testsite'
}


// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP || process.env.VCAP_APP_HOST || undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT || process.env.VCAP_APP_PORT || 8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME || 
            mongo_uri
  }
};