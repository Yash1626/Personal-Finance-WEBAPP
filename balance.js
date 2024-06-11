document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_balance')
    .then(response => response.json())
    .then(data => {
        document.getElementById('balanceTextBox').value = `Your current balance is ${data.balance}`;
    });

    document.getElementById('doneButton').addEventListener('click', () => {
        window.location.href = 'home.html';
    });
});
