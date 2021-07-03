/**
 * Readonly<T>
 * 미리 정의되어 있는 type들 많이 있음.
 * Readonly, Pick, Record, Exclude, Partial ...
 * cf) 처음 본 문법 -> required 기능: '-?'
 */

{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    //todo.title = 'jaja';
  }
}
