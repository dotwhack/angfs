/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Messages = require('../api/messages/messages.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
	    provider: 'local',
	    role: 'user',
	    name: 'brandon',
	    email: 'b@gmail.com',
	    password: 'user'
	  }, function() {
      console.log('finished populating users');
    }
  );
});

Messages.find({}).remove(function() {
	Messages.create({
	    name : 'Message1',
	    info : 'THis is a Message'
	  }, {
	    name : 'Message2',
	    info : 'THis is a Message'
	  }, {
	    name : 'Message3',
	    info : 'THis is a Message'
	  },  {
	    name : 'Message4',
	    info : 'THis is a Message'
	  },  {
	    name : 'Message5',
	    info : 'THis is a Message'
	  },{
	    name : 'Message6',
	    info : 'THis is a Message'
	  });
	});