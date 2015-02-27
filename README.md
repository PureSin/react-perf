# react-perf

From [React.addons.Perf](http://facebook.github.io/react/docs/perf.html#perf.printinclusivemeasurements)

Initially I thought I would use Perf by doing Perf.start (in componentWillUpdate) and Perf.stop + Perf.(printWasted|printInclusive|printExclusive) in (componentDidUpdate). But when I did that `ReactDefaultPerf.js` threw an error in measure.

So I looked into the code for Perf and found that stop funtion is:
```
stop: function() {
    ReactPerf.enableMeasure = false;
  },
```
it just sets the enableMeasure flag to false. While the initial start call injects the masure function and also resets the measurements.

After a few tests this is what I ended up with.
