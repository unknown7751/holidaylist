function numOfRows(monthIndex,rowPerMonth){
    const tableBody= document.getElementById('myTableBody');

    for(let i=0;i<rowPerMonth;i++){
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = `${objArr[monthIndex].day[i]} ${objArr[monthIndex].month}`;
        cell2.textContent =  `${objArr[monthIndex].info[i]}`;
        if((((objArr[monthIndex].day[i]) < date) && ((objArr[monthIndex].num) === month)) || (month > (objArr[monthIndex].num))){
            cell1.classList.add('passedDate');
            cell2.classList.add('passedInfo');
        }
        else{
            cell1.classList.add('date');
            cell2.classList.add('info');
        }
    }
}

function removeRows(){
    const tableBody= document.getElementById('myTableBody');
    tableBody.innerHTML="";
}


function myButton(){
    if(monthC===11){
        removeRows();
        monthC=0;
        numOfRows(0,jan);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    if ( monthC === 0){
        removeRows();
        monthC+=1;
        numOfRows(1,feb);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===1){
        removeRows();
        monthC+=1;
        numOfRows(2,march);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if( monthC ===2){
        removeRows();
        monthC+=1;
        numOfRows(3,april);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if( monthC ===3){
        removeRows();
        monthC+=1;
        numOfRows(4,may);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===4){
        removeRows();
        monthC+=1;
        numOfRows(5,june);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===5){
        removeRows();
        monthC+=1;
        numOfRows(6,july);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===6){
        removeRows();
        monthC+=1;
        numOfRows(7,august);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===7){
        removeRows();
        monthC+=1;
        numOfRows(8,september);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===8){
        removeRows();
        monthC+=1;
        numOfRows(9,october);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===9){
        removeRows();
        monthC+=1;
        numOfRows(10,november);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===10){
        removeRows();
        monthC+=1;
        numOfRows(11,december);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
}

function myButton2(){
    if(monthC===11){
        removeRows();
        monthC-=1;
        numOfRows(10,november);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if ( monthC === 0){
        removeRows();
        monthC=11;
        numOfRows(11,december);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===1){
        removeRows();
        monthC-=1;
        numOfRows(0,jan);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if( monthC ===2){
        removeRows();
        monthC-=1;
        numOfRows(1,feb);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if( monthC ===3){
        removeRows();
        monthC-=1;
        numOfRows(2,march);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===4){
        removeRows();
        monthC-=1;
        numOfRows(3,april);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===5){
        removeRows();
        monthC-=1;
        numOfRows(4,may);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===6){
        removeRows();
        monthC-=1;
        numOfRows(5,june);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===7){
        removeRows();
        monthC-=1;
        numOfRows(6,july);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===8){
        removeRows();
        monthC-=1;
        numOfRows(7,august);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===9){
        removeRows();
        monthC-=1;
        numOfRows(8,september);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
    else if(monthC ===10){
        removeRows();
        monthC-=1;
        numOfRows(9,october);
        document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;
    }
}

let objArr = [
    // January
    {
        day : [22,26],
        month : "January",
        info :["Pran Pratishtha","Republic Day"],
        num : 0 ,

    },
    //February
    {
        day : [19],
        month : "February",
        info : ["Chhatrapati Shivaji Maharaj Jayanti"],
        num :1,
    },
    //March
    {
        day : [8,25,29],
        month : "March",
        info : ["Maha Shivaratri","Holi","Good Friday"],
        num : 2,
    },
    // April
    {
        day : [9,11,14,17,21],
        month : "April",
        info : ["Gudi Padwa","Ramzan Id/Eid-ul-Fitar","Dr. Babasaheb Ambedkar Jayanti","Ram Navami","Mahavir Janam Kalyanak"],
        num :3,
    },
    // May
    {
        day : [1,23],
        month : "May",
        info : ["Maharashtra Day", "Buddha Purnima/Vesak"],
        num: 4,
    },
    // June
    {
        day : [17],
        month : "June",
        info : ["Bakri Eid (Eid-ul-Jhua)"],
        num: 5,
    },
    // July
    {
        day : [17],
        month : "July",
        info : ["Muharram/Ashura"],
        num :6,
    },
    //August
    {
        day : [15],
        month : "August",
        info : ["Independence Day\n\Parsi New Year's Day(Shahenshahi)"],
        num :7,
    },
    //September
    {
        day : [7,16,30],
        month : "September",
        info : ["Shri Ganesh Chaturthi","Eid-e-Milad","Rao Bahadur D Lakshminarayan Day"],
        num :8,
    },
    // October
    {
        day : [2,12],
        month : "October",
        info : ["Mahatma Gandhi Jayanti","Dussehra"],
        num :9,
    },
    // November
    {
        day : [1,2,3,15],
        month : "November",
        info : ["Diwali Amavasya (Lakshmi Pujan)","Diwali (Balipratipada)","Bhaubeej","Guru Nanak Jayanti"],
        num :10,
    },
    // December
    {
        day : [25],
        month : "December",
        info : ["Christmas"],
        num : 11,
    }
];


let myDate= new Date();
let date= myDate.getDate();
let month =myDate.getMonth();
let year = myDate.getFullYear();

let monthC=month;
const jan=2,feb=1,march=3,april=5,may=2,june=1,july=1,august=1,september=3,october=2,november=4,december=1;

document.getElementById("monthHeading").innerHTML=`Holidays in ${objArr[monthC].month}`;

if ( month === 0){
    numOfRows(0,jan);
}
else if(month ===1){
    numOfRows(1,feb);
}
else if( month ===2){
    numOfRows(2,march);
}
else if( month ===3){
    numOfRows(3,april);
}
else if(month ===4){
    numOfRows(4,may);
}
else if(month ===5){
    numOfRows(5,june);
}
else if(month ===6){
    numOfRows(6,july);
}
else if(month ===7){
    numOfRows(7,august);
}
else if(month ===8){
    numOfRows(8,september);
}
else if(month ===9){
    numOfRows(9,october);
}
else if(month ===10){
    numOfRows(10,november);
}
else if( month ===11){
    numOfRows(11,december)
}

document.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "ArrowLeft":
        myButton2();
        break;
      case "ArrowRight":
        myButton();
        break;
    }
  });

  document.getElementById("date").innerHTML=`${date} ${objArr[month].month}`;

  