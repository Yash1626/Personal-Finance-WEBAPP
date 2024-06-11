document.getElementById('addIncomeButton').addEventListener('click', () => {
    let amount = document.getElementById('incomeInput').value;
    if (amount) {
        fetch('/deposit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: parseFloat(amount) })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Income added: ${amount}`);
            } else {
                alert('Deposit failed!');
            }
        });
    }
});

document.getElementById('doneButton').addEventListener('click', () => {
    window.location.href = 'home.html';
});
