function feeCal(Broker){
  return function (buyOrSell){
    return function (amount){
  
      if(Broker== 'BrokerA' && buyOrSell==='buy'){
        fee=0.005
        
      }else if(Broker==='BrokerA' && buyOrSell==='sell'){
        fee=5
        
      }else{return 'Invalid Info'}
      return amount*fee
    }
  }
}

const brokerABuyFee = feeCal('BrokerA')('buy')

// Now you can reuse this specialized function
console.log(brokerABuyFee(10000)); // 50
console.log(brokerABuyFee(50000)); // 250