const billamount = document.getElementById('billamount');
const percentagetip = document.getElementById('percentagetip');
const tipamount = document.getElementById('tipamount');
const total = document.getElementById('total');
const button = document.getElementById('button');

button.addEventListener('click',calculate)
function calculate(){
    const bill = billamount.value;
    const tip = percentagetip.value;
    if((bill<0) || (tip<0) || (bill && tip <0)){
        alert('please enter bill & tip positve values only')
    }
    if(bill==''){
        alert('please enter bill amount')
    }
    if(tip==''){
        alert('please enter tip')
        }
    else{
        const totaltip = bill * (tip / 100);
        tipamount.value = `$${totaltip}`;
        const totalamount = `$${totaltip + Number(bill)}`;
        total.value = totalamount;
    }
}