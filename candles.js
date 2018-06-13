function birthdayCakeCandles(ar) {
    var counter = 0;
    var highest = 0;
    ar.forEach(function(candle) {
       if (candle > highest) {
           highest = candle;
           counter = 1;
       } else if (candle === highest) {
          counter++;  
       }
    });
     return counter;
}

// Detects the tallest candles on the cake