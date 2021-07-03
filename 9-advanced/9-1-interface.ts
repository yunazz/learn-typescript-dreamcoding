// Type 과 Interface 의 차이 (기술적)
{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PostionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PostiionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  //Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositioType & { z: number };

  // 🙂✨ only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }
}

/**Type 과 Interface 의 차이 (개념적)
 * interface: 규격 사항 / 공통적으로 구현할 것이 무엇인지 정할때 사용한다.
 * type : 어떤 데이터들을 담을건지 정할때
 */
{
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
