# MAP_Project

Projeto de uma dashboard de controle de pacientes, para clínicas ou hospitais.

# Como Rodar

Clone o projeto com git clone:

```sh
git clone https://github.com/MatheusMcod/MAP_Project
```

# BackEnd

Inicie um novo ambiente virtual python:

```sh
python -m venv nomeDoAmbiente
```

Ative o ambiente:
```sh
venv\Scripts\activate
```

Instalando as dependências:
```sh
pip install -r requirements.txt
```

Após configurar sua database.<br>
Rodando o Projeto:
```sh
python main.py
```

## DataBase
Crie um arquivo <span style="color: yellow; font-weight: bold;">.env</span> com base no <span style="color: yellow; font-weight: bold;">.env.example</span>, passando os dados da sua database.

Caso esteja utilizando um banco de dados local, rode as migrações:
```sh
alembic upgrade head
```

# FrontEnd

Instalando as dependências:

```sh
npm i
```

Rodando o projeto:
```sh
npm run dev
```

# Links

[Documentação da API](https://documenter.getpostman.com/view/26661894/2sA3QwapCx) <br>
[Hospedagem do Projeto](URL)
