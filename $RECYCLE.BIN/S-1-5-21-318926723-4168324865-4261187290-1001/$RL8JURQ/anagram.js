
function sortt(str){
    var array = str.split("");
    array=array.sort();
    var yo = array.join("");
    return yo;
  }
  
  function isAnagram(str1, str2) {
      if(sortt(str1)==sortt(str2)) return true;
      else false;
  }

  var test = isAnagram("car","rac");

  console.log(test);