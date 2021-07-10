function panggilForEach() {
  var kalimat = "Saya ingin belajar bersama";
  // console.log(kalimat);
  var result = kalimat.split(" ");
  // return result
  result.forEach(function (item, index) {
    console.log("Item : " + item+" Index ke " +index);
    // console.log("Index ke " +index);
    // console.log(array);
  });

}
console.log(panggilForEach());
