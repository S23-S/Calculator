const display = document.getElementById("display");
let history = [];

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + ' = ' + result);
  } catch (error) {
    alert("Invalid calculation");
    clearDisplay();
  }
}

function addToHistory(entry) {
  if (history.length >= 5) {
    history.shift(); // Remove the oldest entry if more than 5 entries
  }
  history.push(entry);
  localStorage.setItem('history', JSON.stringify(history));
}

function loadHistoryPage() {
  window.location.href = 'history.html';
}

function displayHistory() {
  const historyList = document.getElementById('history-list');
  const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
  historyList.innerHTML = savedHistory.map(item => `<li>${item}</li>`).join('');
}
