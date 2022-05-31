console.log("hello");


function converter() {
  const input = document.getElementById('dval');
  const dtype = document.getElementById('dtype');
  const result = document.getElementById('rval');
  const rtype = document.getElementById('rtype');

  if (input.value === '') {
    result.value = '';
    alert('Please enter a valid value in the inputbox');
  }
  else if(dtype.options[dtype.selectedIndex].value === 'C' && rtype.options[rtype.selectedIndex].value === 'F'){
    result.value = ((Number(input.value)*9)/5 + 32).toFixed(2) + ' '+' F';
  }
  else if(dtype.options[dtype.selectedIndex].value === 'C' && rtype.options[rtype.selectedIndex].value === 'K'){
    result.value = (Number(input.value)+273.15).toFixed(2)+' '+'K';
  }
  else if(dtype.options[dtype.selectedIndex].value === 'F' && rtype.options[rtype.selectedIndex].value === 'C'){
    result.value = (((Number(input.value)-32)*5)/9).toFixed(2) + ' '+' C';
  }
  else if(dtype.options[dtype.selectedIndex].value === 'F' && rtype.options[rtype.selectedIndex].value === 'K'){
    result.value = (((Number(input.value)-32)*5)/9 + 273.15).toFixed(2)+' '+ 'K';
  }
  else if(dtype.options[dtype.selectedIndex].value === 'K' && rtype.options[rtype.selectedIndex].value === 'C'){
    console.log(input.val);
    result.value = (Number(input.value)-273.15).toFixed(2) + ' '+' C';
  }
  
  else if(dtype.options[dtype.selectedIndex].value === 'K' && rtype.options[rtype.selectedIndex].value === 'F'){
    result.value = (((Number(input.value)-273.15)*9)/5 + 32).toFixed(2)+' '+'F';
  }
  else if(dtype.options[dtype.selectedIndex].value === 'F' && rtype.options[rtype.selectedIndex].value === 'F'){
    result.value = input.value + ' ' + 'F';
  }
  else if(dtype.options[dtype.selectedIndex].value === 'K' && rtype.options[rtype.selectedIndex].value === 'K'){
    result.value = input.value + ' ' + 'K';
  }
  
  else if(dtype.options[dtype.selectedIndex].value === 'C' && rtype.options[rtype.selectedIndex].value === 'C'){
    result.value = input.value + ' ' + 'C';
  }
}