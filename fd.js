function Counter() {

  var busyFlag = false; //private
  var count = 0; //private

  this.add = function(value) {

    console.log(this);

    while (busyFlag); // Wait for other threads to finish

    busyFlag = true; // Keep other threads out.
    // Critical section
    count = count + value;
    // End critical section

    busyFlag = false; // Let other threads in.
  }
}

var counter = new Counter()
var counter2 = new Counter()

counter.add(3);
counter2.add(2);




























function Counter() {

  this.busyFlag = false;
  this.count = 0;

  this.add = function(value) {
    while (this.busyFlag); // Wait for other threads to finish
    this.busyFlag = true; // Keep other threads out.

    // Critical section
    this.count = this.count + value;
    // End critical section

    this.busyFlag = false; // Let other threads in.
  }

}

var Count = new Counter()

count.add(2)

count.add(3)

count.busyflag = false;
