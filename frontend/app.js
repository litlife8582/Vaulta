const form = document.getElementById('transaction-form');
const transactionContainer = document.getElementById('transaction-container');

async function loadTransactions() {
  try {
    const response = await fetch('http://localhost:3000/api/transactions');
    
    if (!response.ok) throw new Error("Failed to fetch");
    
    const transactions = await response.json();
    
    transactionContainer.innerHTML = '';
    
    transactions.forEach(transaction => {
      const li = document.createElement('li');
      li.textContent = `${transaction.Date} | ${transaction.Title} : $${transaction.Amount} (${transaction['Credit/Debit']})`;
      transactionContainer.appendChild(li);
    });
    
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title').value;
  const amountInput = document.getElementById('amount').value;
  const typeInput = document.getElementById('type').value;
  const dateInput = document.getElementById('date').value;
  const timeInput = document.getElementById('time').value;

  try {
    const response = await fetch('http://localhost:3000/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        Title: titleInput, 
        Amount: parseFloat(amountInput),
        "Credit/Debit": typeInput,
        Date: dateInput,
        Time: timeInput
      })
    });

    if (!response.ok) throw new Error("Failed to save");
    
    alert("Transaction logged successfully!");
    form.reset();
    
    loadTransactions();
    
  } catch (error) {
    console.error(error);
  }
});

loadTransactions();