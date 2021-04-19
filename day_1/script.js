function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkDate() {
const inputData = document.querySelector('#input-date');
let data = inputData.value;
const userData = validateData(data);
if (!userData && data.length) {
  inputData.value = '';
  alert('data invalida');
  return false;
}
return userData;
}

let send = document.querySelector('#send');
send.addEventListener('click', checkDate);