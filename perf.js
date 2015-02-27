var React = require('react/addons')
  , Perf = require('react/addons').addons.Perf
  ;
module.exports = {
  getInitialState: function(){
    console.log('getInitialState');
    return {};
  },

  getDefaultProps: function(){ //also works here but has 2 measurements
    console.log('getDefaultProps');
    return {};
  },

  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidMount: function(){ //works here
    Perf.start();
    console.log('componentDidMount');
  },

  componentWillReceiveProps: function(){ //no errors but also never starts for top level component
    console.log('componentWillReceiveProps');
  },

  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  },

  componentDidUpdate: function(){ //works here
    var measurements = Perf.getLastMeasurements();
    if (measurements.length > 0) {
      this.numRenders = this.numRenders || 0;
      this.averageRenderTime = this.averageRenderTime || 0;
      var time = measurements[0].totalTime;
      var newAvg = ((this.averageRenderTime * this.numRenders) + time) / (this.numRenders + 1)
      this.numRenders = this.numRenders + 1;
      this.averageRenderTime = newAvg;
      console.log("Average: " + this.averageRenderTime + " over " + this.numRenders + " renders.");
      Perf.printInclusive(measurements);
      Perf.printExclusive(measurements);
      Perf.printWasted(measurements);
      Perf.start(); // clears measurements and try it again
    }
    console.log('componentDidUpdate');
  },

  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  }
};
