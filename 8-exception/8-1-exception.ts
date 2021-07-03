// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally(error가 발생했어도 끝까지 실행되어야 하는 것들)

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!💩";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
