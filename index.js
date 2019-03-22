var context = new require('rabbit.js').createContext('amqp://localhost');
var inServer = net.createServer(function(connection) {
  var s = context.socket('PUB');
  s.connect('incoming', function() {
    connection.pipe(s);
  });
});
inServer.listen(5000);