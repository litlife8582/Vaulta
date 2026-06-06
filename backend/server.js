require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/api/transactions', async (req, res) => {
  const { data, error } = await supabase
    .from('Transactions')
    .select('*');
    
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/api/transactions', async (req, res) => {
  const { Title, Amount, "Credit/Debit": CreditDebit, Date, Time } = req.body;
  
  const { data, error } = await supabase
    .from('Transactions')
    .insert([{ Title, Amount, "Credit/Debit": CreditDebit, Date, Time }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});