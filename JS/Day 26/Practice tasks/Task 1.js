let globalVar = "Global scope";
function testScope() {
    let funcVar = "Function scope";
    if (true) {
        let blockVar = "Block scope";
        console.log(globalVar, funcVar, blockVar);
    }

}
testScope();
console.log(globalVar);  