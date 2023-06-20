
// // function checkEid()
// // {
// //     var employeeId=document.getElementById('eid').value;
// //     var span1=document.getElementById('sp1');
// //     if(employeeId !='')
// //     {
// //         span1.innerHTML='ok'
// //     }
// //     else
// //     {
// //         span1.innerHTML='Enter a Employee Id';
// //     }
// // }
// // function checkUser()
// // {
// //     var employeeName=document.getElementById('ename').value;
// //     var errorMsg=document.getElementById('sp2');//span tag
// //     var storeData;
// //     if(employeeName.length>5)
// //     {
// //     //    errorMsg.textContent='valid';
// //     storeData='valid';
// //     }
// //     else
// //     {
// //     //    errorMsg.textContent='invalid'; 
// //     storeData='invalid';
// //     }
// // errorMsg.innerHTML=storeData;
// // }

// // function checkEroll()
// // {
// //     var employeeRoll=document.getElementById('eroll').value;
// //     var span3=document.getElementById('sp3');
// //     if(employeeRoll !='')
// //     {
// //         span3.innerHTML='ok';
// //     }
// //     else
// //     {
// //         span3.innerHTML='Plase fill the Employee Roll';
// //     }
// // }

// // function calSalary()
// // {
// //     var basicPay=parseInt(document.getElementById('basic').value);
// //     var hra=document.getElementById('hra').value=basicPay*(15/100);
// //     var da=document.getElementById('da').value=basicPay*(10/100);
// //     var pf=document.getElementById('pf').value=basicPay*(5/100);
// //     var hra1=parseInt(hra);
// //     var da1=parseInt(da);
// //     var pf1=parseInt(pf);
// //     var netSalary=document.getElementById('nsalary').value=(basicPay+hra1+da1);
// //     var netSalary1=parseInt(netSalary);
// //     var grossSalary=document.getElementById('gsalary').value=netSalary1-pf1;

// //     document.getElementById('tbodyid').innerHTML='<tr><td>'+basicPay+'</td><td>'+hra1+'</td><td>'+da1+'</td><td>'+pf1+'</td><td>'+netSalary1+'</td><td>'+grossSalary+'</td></tr>'
// // }


// // function on()
// // {
// //     let bulbOn=document.getElementById('bulb').src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png';
// //     let catOn=document.getElementById('cat').src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png';
// // }

// // function off()
// // {
// //     let bulbOff=document.getElementById('bulb').src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png';
// //     let catOff=document.getElementById('cat').src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png';

// // }

// // var arr=[12,23,34,45,'a','arun'];
// // console.log(arr);
// // console.log(arr[5]);

// // console.log(arr.push('ram'));
// // console.log(arr);
// // console.log(arr.unshift(10));
// // console.log(arr);
// // console.log(arr.pop());
// // console.log(arr);
// // console.log(arr.shift());



// var item_list=[];

// function addItem()
// {
//     var stockItem=document.getElementById('item').value;

//     item_list.push(stockItem);

//    // console.log(item_list);

//     document.getElementById('item').value='';

//     getItem();
// }

// function getItem()
// {
//     var sno=0;
//     var emptyString='';

//     item_list.forEach(function(value,index)
//     {
//         sno+=1;//sno =sno+1
//         emptyString += '<tr><td>'+sno+'</td><td>'+value+'</td><td><button type="button" onclick=removeItem('+index+')>Remove</button></td></tr>';//emptyString=emptyString+<tr><td>'+sno+'</td><td>'+value+'</td></tr>
//     })

//     document.getElementById('tbodyid').innerHTML=emptyString;

// }

// function removeItem(id)
// {
//     item_list.splice(id,1);
//     getItem();
    
// }



// var arr=[23,345,56,67,'js','ram','bala'];

// arr.splice(4,0,'sindhu',23,34);

// console.log(arr);

// function addNumbers()
// {
//    var g1=document.getElementsByName('gender');
//    alert(g1.length);

// }

// function UseClassName()
// {
   

//     var collection=document.getElementsByClassName('example');
// // alert('Total Class name'+collection.length);

// collection[0].innerHTML = "Hello World!";
// }


// function showcommentform() {

// var data='<div><label>Enter a username</label><input type="text" id="uname" value=""/></div>';
// document.getElementById('mylocation').innerHTML=data;
// }

// function validate() {
//     var input1=document.getElementById('userPass').value
//     var msg;
    
//     if(input1.length>5){
    
//     msg="good";
    
//     }
    
//     else{
    
//     msg="poor";
    
//     }
    
//     document.getElementById('mylocation').innerText=msg;
    
//  }

// function check()
// {
//     var num=parseInt(document.getElementById('num').value);
//     var opt='<option>select</option>';
//     for(let i=0;i<num;i++)
//     {
//         opt += '<option>'+i+'</option>';
//     }

//     document.getElementById('sel').innerHTML=opt;

// }

// function demo()
// {
//     var image=document.querySelector('img');
//     image.style.width="300px";
//     image.style.height="500px";


//     createElement
//     appendChild
//     removeChild
// }



// function demo()
// {
//         var parentEle=document.getElementById('divid');
//         var childEle=document.createElement('input');
//         childEle.setAttribute('id','inp1');
//         childEle.className="p-5"
//         parentEle.appendChild(childEle);
// }