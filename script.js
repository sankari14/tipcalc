// Write JavaScript here
//document.getElementById("totaltip").style.display="none";
//document.getElementById("tip").style.display="none";


function calculateTip()
{
  var amount=document.getElementById("amt").value;
  var qual=document.getElementById("qual").value;
  var people=document.getElementById("people").value;
 
  
  if (amount == "" && qual =="") 
    {
      alert("please enter the values");
      return;
      
    }

     if ( people < 1)
    {
      people=1;
      
    }

    var total=(amount*qual)/people;
    total=total.toFixed(2);
     document.getElementById("totaltip").style.display = "block";
     document.getElementById("tip").innerHTML = total;
     document.getElementById("each").style.display = "block";
    
     
  
};
