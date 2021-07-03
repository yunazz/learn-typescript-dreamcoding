/** 모듈화 : 코드를 그 파일 내부에서만 한정시키는 것
 * 1. 모듈화를 시키면 사용하고자 하면 export / import 해야 한다.
 * <script type="module" src="10-3-module1.js"></script>
 * 2. export default 는 한번만 선언 가능
 * 3. import 할 때 default 가 아닌 것들은 { }를 이용해서 불러와야함
 * 4. A 를 B 라는 이름으로 import 해오고 싶다면 {A as B}
 * 5. import * as C 로 import 해오면 C.add 이런식으로 사용가능!
 */

export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log("print");
}
