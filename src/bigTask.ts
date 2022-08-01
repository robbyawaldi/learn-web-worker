
export function bigTask() {
  console.log("start big task");
  new Array(5_000).fill(1).map(console.log);  
  console.log("finish");
}