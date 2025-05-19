const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

// porta do server 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server rodando na PORTA: ${PORT}`);
})