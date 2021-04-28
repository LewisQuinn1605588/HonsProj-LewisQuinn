function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function addPurchase() {
  var payee=document.sample.payee.value;
  var account=document.sample.account.value;
  var method=document.sample.method.value;
  var datePaid=document.sample.datePaid.value;
  var ref=document.sample.ref.value;
  var amount=document.sample.amount.value;

  var tr = document.createElement('tr');

  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));

  td1.innerHTML=payee;
  td2.innerHTML=account;
  td3.innerHTML=method;
  td4.innerHTML=datePaid;
  td5.innerHTML=ref;
  td6.innerHTML=amount;

  document.getElementById("tb1").appendChild(tr);
}
