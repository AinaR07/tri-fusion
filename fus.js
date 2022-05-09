function fusion (tab1, tab2) {
    let resultArray = [];
    let tab1Index = 0;
    let tab2Index = 0;
  
    
    while (tab1Index < tab1.length && tab2Index < tab2.length) {
      if (tab1[tab1Index] < tab2[tab2Index]) {
        resultArray.push(tab1[tab1Index]);
        tab1Index++; 
      } else {
        resultArray.push(tab2[tab2Index]);
        
      }
    }
  
    
    return resultArray
            .concat(tab1.slice(tab1Index))
            .concat(tab2.slice(tab2Index));
  }
  let tab = [ 5, 4 , 3 , 1]
console.log(fusion(tab));