  /*
  *    [[a,[b,c]],[a,[b,c]]]
  *    [Angle,point.x,point.y]
  *    Angle 為point跟origin的角度
  */
  function swap(a,b){
    var temp = parray[a];
    parray[a] = parray[b];
    parray[b] = temp;    
  }

  function mysort(origin,parray){
//  alert(parray.length);
    for (var i=parray.length-1;i>0;i--){
      for(var j=0;j<i;j++){
        if(parray[j][0]>parray[j+1][0]){
          swap(j,j+1);
        }
        else if(parray[j][0]==parray[j+1][0]){          // if same Angle,then sort by metric
          var p1metric = Math.ceil(Math.sqrt(Math.pow((parray[j][1][0]-origin[0]),2)+Math.pow((parray[j][1][1]-origin[1]),2)));
          var p2metric = Math.ceil(Math.sqrt(Math.pow((parray[j+1][1][0]-origin[0]),2)+Math.pow((parray[j+1][1][1]-origin[1]),2)));
//alert(p1metric + " > " + p2metric + " ? ");
          if(p1metric > p2metric){
            swap(j,j+1);
          }
          //alert(list.join(" | "));
        }
      }
    }
    return parray;
  }
  function mysort2(parray){
    var count = 0;
    var spliceArray = [];
    for (var i=0; i<parray.length-1;i++){
      //alert(parray[i]);
      if(parray[i][0] == parray[i+1][0]){
        spliceArray.push(i-count);
        count+=1;
      }
    }
    for (var i=0; i<spliceArray.length-1;i++){
      parray.splice(spliceArray[i],1);
    }
    return spliceArray;
  }
  /*    test
  var list = [[63,850,650],[63,8,5],[63,50,65],[63,850,680],[63,850,699],[63,50,60],[63,80,80]];
  var origin = [0,0];
  sort(origin,list);
  alert(list.join(" | "));
  */
