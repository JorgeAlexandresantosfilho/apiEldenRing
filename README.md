# Elden Ring API - Boss Database 🏰⚔️

Uma API RESTful para gerenciar informações sobre bosses de Elden Ring, construída com Node.js, Express e MySQL.

## 📌 Recursos Atuais

- Listagem completa de todos os bosses cadastrados
- Detalhes de cada boss incluindo:
  - Nome (`Name_Boss`)
  - Drops (`Drops`)
  - Imagem (`Image` - URL)
  - Localização (`Location`)
  - Pontos de vida (`HealthPoints`)

## 🚀 Futuras Implementações

- [ ] Adicionar sistema de usuários
- [ ] Incluir armas, armaduras e itens
- [ ] Adicionar NPCs e questlines
- [ ] Sistema de builds recomendadas
- [ ] Integração com wiki externa

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **Banco de Dados**: MySQL
- **Gerenciamento de Pacotes**: npm
- **Variáveis de Ambiente**: dotenv

## 📋 Estrutura do Banco de Dados

```sql
CREATE TABLE bosses (
    Id_Boss INTEGER PRIMARY KEY AUTO_INCREMENT,
    Name_Boss VARCHAR(255) NOT NULL,
    Drops VARCHAR(500) NOT NULL, 
    Image VARCHAR(300) NOT NULL,
    Location VARCHAR(255) NOT NULL,
    HealthPoints VARCHAR(10) NOT NULL
);
```

## ⚙️ Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=elden_ring_db
   PORT=3000
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

## 📡 Endpoints da API

### GET /bosses
Retorna todos os bosses cadastrados

**Exemplo de resposta:**
```json
[
  {
    "Id_Boss": 1,
    "Name_Boss": "Margit, the Fell Omen",
    "Drops": "Talisman Pouch, 12,000 Runes",
    "Image": "https://example.com/images/margit.jpg",
    "Location": "Stormhill, Limgrave",
    "HealthPoints": 4174
  },
  {
    "Id_Boss": 2,
    "Name_Boss": "Godrick the Grafted",
    "Drops": "Godrick's Great Rune, Remembrance of the Grafted",
    "Image": "https://example.com/images/godrick.jpg",
    "Location": "Stormveil Castle",
    "HealthPoints": 6080
  }
]
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## ✉️ Contato

Seu Nome - jorgedbl309@gmail.com.com

Link do Projeto: [https://github.com/JorgeAlexandresantosfilho/apiEldenRing]

---

<p align="center">
  "Put these foolish ambitions to rest." <br>
  - Margit, the Fell Omen
</p>
