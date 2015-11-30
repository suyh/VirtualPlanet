var pomelo = require('pomelo');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'VirtualPlanet');

// app configuration
app.configure('production|development', 'connector', function(){
  app.set('connectorConfig',
      {
        connector : pomelo.connectors.sioconnector,
        //websocket, htmlfile, xhr-polling, jsonp-polling, flashsocket
        transports : ['websocket'],
        heartbeats : true,
        closeTimeout : 60,
        heartbeatTimeout : 60,
        heartbeatInterval : 25
      });
});

// app configure
/*app.configure('production|development', function() {
    // route configures
    console.log(app.getServersByType('area'));
    app.route('area', app.getServersByType('area'));
});*/

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
