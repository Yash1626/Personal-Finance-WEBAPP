document.getElementById('setBudgetButton').addEventListener('click', () => {
    let amount = document.getElementById('budgetInput').value;
    if (amount) {
        fetch('/set_budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: parseFloat(amount) })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Budget set to ${amount}`);
            } else {
                alert('Failed to set budget!');
            }
        });
    }
});

document.getElementById('viewBudgetButton').addEventListener('click', () => {
    fetch('/get_budget')
    .then(response => response.json())
    .then(data => {
        document.getElementById('budgetTextBox').value = `Your current budget is ${data.budget}`;
    });
});

document.getElementById('doneButton').addEventListener('click', () => {
    window.location.href = 'home.html';
});
