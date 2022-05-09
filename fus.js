function fusion (tableau1, tableau2) {
    let resultArray = [];
    let tableau1Index = 0;
    let tableau2Index = 0;
  
    
    while (tableau1Index < tableau1.length && tableau2Index < tableau2.length) {
      if (tableau1[tableau1Index] < tableau2[tableau2Index]) {
        resultArray.push(tableau1[tableau1Index]);
        tableau1Index++; 
      } else {
        resultArray.push(tableau2[tableau2Index]);
        tableau2Index++;
      }
    }
  
    
    return resultArray
            .concat(tableau1.slice(tableau1Index))
            .concat(tableau2.slice(tableau2Index));
  }
  let tableau = [ 5, 4 , 3 , 1]
console.log(fusion(tab));