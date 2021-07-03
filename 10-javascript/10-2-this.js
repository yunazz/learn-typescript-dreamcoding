/** this 정리
 * this 는 누가 호출하는지에 따라 가르키는 대상이 다르다.
 * So, 선언된 당시 scope의 문맥(context)을 유지하고 싶다면 => bind를 하거나 Arrow function을 사용해야 한다.
 */
{
  console.log(this);

  function simpleFunc() {
    console.log(this);
  }
  window.simpleFunc();
  console.clear();

  class Counter {
    count = 0;
    increase = function () {
      console.log(this);
    };
  }
  const counter = new Counter();
  counter.increase();
  const caller = counter.increase;
  //const caller = counter.increase.bind(counter);
  caller();
}
