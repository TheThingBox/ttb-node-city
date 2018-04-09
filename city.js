module.exports = function(RED) {
  "use strict";
  function main(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.city = config.city;
    node.country = config.country;
    this.on("input", function(msg){
      var city = node.city;
      if(msg.city !== undefined){
        city = msg.city;
      }
      var country = node.country;
      if(msg.country !== undefined){
        country = msg.country;
      }
      msg.city = city;
      msg.country = country;
      node.send(msg);
    });
  }
  RED.nodes.registerType("city", main);
}
