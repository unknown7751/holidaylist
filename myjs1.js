function numOfRows(monthIndex,rowPerMonth){
    const tableBody= document.getElementById('myTableBody');

    for(let i=0;i<rowPerMonth;i++){
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = `${objArr[monthIndex].day[i]} ${objArr[monthIndex].month}`;
        cell2.textContent =  `${objArr[monthIndex].info[i]}`;

        cell1.classList.add('date');
        cell2.classList.add('info');
        row.classList.add('myRow');
        
    }
}