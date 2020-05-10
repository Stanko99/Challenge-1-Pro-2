
//retrieve all counters from body
let counters = document.querySelectorAll('.counter');

//retrieve all counter value
let vals = Array.from(counters).map(x => Number(x.innerText));

//convert counters to an array
counters = Array.from(counters);

//loop through all counters
counters.forEach(el => {
  el.innerHTML = '0';
  el.counter = 0;
});

let update = () => {
  counters.forEach((el, i) => {
    el.counter += 10;
    //update counter display value min
    el.innerHTML = Math.min(vals[i], el.counter);
  });
  requestAnimationFrame(update);
}
update();