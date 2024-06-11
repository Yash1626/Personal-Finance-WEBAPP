document.getElementById('addExpenseButton').addEventListener('click', () => {
    let amount = document.getElementById('expenseInput').value;
    if (amount) {
        fetch('/spend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: parseFloat(amount) })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Expense updated: ${amount}`);
            } else {
                alert('Expense recording failed!');
            }
        });
    }
});

document.getElementById('doneButton').addEventListener('click', () => {
    window.location.href = 'home.html';
});
