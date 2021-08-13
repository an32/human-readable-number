module.exports = function toReadable (number) {
 
    let a = number

    let b = Math.floor(a/100); 
    let c = a-b*100; 
    let d = Math.floor(c/10); 
    let e = c-d*10; 
    let er = ""
    let dr = ""
    let br = ""
    
    switch (d){
      
      case 2 : dr = "twenty";//20
        break;
         case 3 : dr = "thirty";//30
        break;
         case 4 : dr = "forty";//40
        break;
         case 5 : dr = "fifty";//50
        break;
     case 6 : dr = "sixty";//60
        break;
     case 7 : dr = "seventy";//70
        break;
         case 8 : dr = "eighty";//80
        break;
         case 9 : dr = "ninety";//90
        break;
    }
    switch (e){
      case 1 : er = "one";//"один"; 1
        break; 
      case 2 : er = "two";//"два";
        break;
         case 3 : er = "three";//"три";
        break;
         case 4 : er = "four";//"четыре";
        break;
         case 5 : er = "five";//"пять";
        break;
     case 6 : er = "six";//"шесть";
        break;
     case 7 : er = "seven";//"семь";
        break;
         case 8 : er = "eight";//"восемь";
        break;
         case 9 : er = "nine";//"девять";
        break;
    }
    switch (b){
      case 1 : br = "one hundred";//"сто";
        break; 
      case 2 : br = "two hundred";//"двесте";
        break;
         case 3 : br = "three hundred";//"триста";
        break;
         case 4 : br = "four hundred";//"четыреста";
        break;
         case 5 : br = "five hundred";//"пятьсот";
        break;
     case 6 : br = "six hundred";//"шестьсот";
        break;
     case 7 : br = "seven hundred";//"семьсот";
        break;
         case 8 : br = "eight hundred";//"восетмьсот";
        break;
         case 9 : br = "nine hundred";//"девятьсот";
        break;
    } 
    if (d == 1){switch (e){
      case 0 : er = "ten";//"десять";
        break; 
      case 1 : er = "eleven";//одинадцать";
        break; 
      case 2 : er = "twelve";//"двенадцать";
        break;
         case 3 : er = "thirteen";//"тринадцать ";
        break;
         case 4 : er = "fourteen";//"четырнадцать";
        break;
         case 5 : er = "fifteen";//"пятьнадцать";
        break;
     case 6 : er = "sixteen";//"шестнадцать";
        break;
     case 7 : er = "seventeen";//"семьнадцать";
        break;
         case 8 : er = "eighteen";//"восемнадцать";
        break;
         case 9 : er = "nineteen";//"девятнадцать";
        break;} 
        }
      
        
    let result = `${br } ${dr} ${er}`;
    
     if (br==0){
                 result = `${dr} ${er}`
                 
               } ;
      if (dr==0){
                  result = `${br} ${er}`
                 
                } ;
                if (er==0){
                    result = `${br} ${dr}`
                   
                  } ;
     if ((br== 0) && (dr==0)) {
       result = `${er}`
                         }
     if ((er== 0) && (dr==0)) {
       result = `${br}`
                          }
     if ((br== 0) && (er==0)) {
        result = `${dr}`
                          }
    
     if (a == 0){switch (e){
      case 0 : result = "zero";//"нуль";
        break; }
                 
                }
    
    
   return result 
  
}

