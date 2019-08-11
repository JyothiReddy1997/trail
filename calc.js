var numField1=document.getElementById('numField1');
var numField2=document.getElementById('numField2');
var resultField=document.getElementById('resultField');
var form=document.getElementById('XiswhatpercentageofY');

form.addEventListener('submit',function(event)
                     {
    if(!numField1.value||!numField2.value)
    {
        alert("please enter x and y value");
    }
    else
    {
    var x=parseFloat(numField1.value);
    var y=parseFloat(numField2.value);
    
    var result=(x/y)*100;
    resultField.innerText="Answer: "+ result+"%";
        event.preventDefault();

    }
                        
   
                    }
                     );