// ::::::::: Not recommended like this!!! :::::::::

// 1. Stopwatch
const stopwatch = new Stopwatch();

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  Object.defineProperty(this, "startTime", {
    get: () => startTime,
  });
  Object.defineProperty(this, "endTime", {
    get: () => endTime,
  });
  Object.defineProperty(this, "running", {
    get: () => running,
  });
  Object.defineProperty(this, "duration", {
    get: () => duration,
    set: function (value) {
      duration = value;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started");
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch has already stopped");
  this.running = false;
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};
