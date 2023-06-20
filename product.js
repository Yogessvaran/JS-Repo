function checkEid()
{
    var employeeId=document.getElementById('pName').value;
    var span1=document.getElementById('sp1');
    if(employeeId !='')
    {
        span1.innerHTML='ok'
    }
    else
    {
        span1.innerHTML='Enter a Employee Id';
    }
}
function checkUser()
{
    var employeeName=document.getElementById('ename').value;
    var errorMsg=document.getElementById('sp2');//span tag
    var storeData;
    if(employeeName.length>5)
    {
    //    errorMsg.textContent='valid';
    storeData='valid';
    }
    else
    {
    //    errorMsg.textContent='invalid'; 
    storeData='invalid';
    }
errorMsg.innerHTML=storeData;
}

function checkEroll()
{
    var employeeRoll=document.getElementById('eroll').value;
    var span3=document.getElementById('sp3');
    if(employeeRoll !='')
    {
        span3.innerHTML='ok';
    }
    else
    {
        span3.innerHTML='Plase fill the Employee Roll';
    }
}

function calSalary()
{
    var basicPay=parseInt(document.getElementById('basic').value);
    var quant=parseInt(document.getElementById('qty').value);
    var hra=document.getElementById('hra').value=basicPay*quant*(15/100);
    var da=document.getElementById('da').value=basicPay*quant*(10/100);
    var pf=document.getElementById('pf').value=basicPay*quant*(5/100);
    var hra1=parseInt(hra);
    var da1=parseInt(da);
    var pf1=parseInt(pf);
    var netSalary=document.getElementById('nsalary').value=(basicPay+hra1+da1);
    var netSalary1=parseInt(netSalary);
    var grossSalary=document.getElementById('gsalary').value=netSalary1-pf1;

    document.getElementById('tbodyid').innerHTML='<tr><td>'+basicPay+'</td><td>'+hra1+'</td><td>'+da1+'</td><td>'+pf1+'</td><td>'+netSalary1+'</td><td>'+grossSalary+'</td></tr>'
}   