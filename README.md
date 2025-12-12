# **Projeto Integrados – Sistema de Catálogo de Filmes Infantil**

### *Trabalho acadêmico — Desenvolvimento Full Stack (Frontend + Backend + Banco + Documentação)*

Este repositório contém todas as etapas, artefatos, códigos e documentações produzidas durante o desenvolvimento do sistema de catálogo de filmes, seguindo o cronograma de 4 dias de entregas.

O projeto foi desenvolvido como integrador entre as disciplinas desenvolvidas no 2º Semestre do Curso de Desenvolvimento de Sistemas no SENAI Gaspar Ricardo Junior - CFP 402 - Sorocaba/SP

Professor Instrutor: [Vedilson Prado](https://github.com/vedilsonprado)

---
# 🧑‍💻 **Desenvolvedores:**
Matheus Henrique Magalhaes Rodrigues Dev 12: [Matheus Henrique](https://github.com/magalhaes000)
Rhyan Pyetro Alves dos Anjos Dev 24: [Rhyan Pyetro](https://github.com/Rhyanzin01)
Thais Gimenez Siva Dev 27: [Thais Gimenez](https://github.com/thaasilvaa)
Thayna Visentin Silva 28: [Thayná Visentin](https://github.com/devthaynasilva-star)
Vitor Moreira Berganton Dev 32: [Vitor Moreira](https://github.com/devvitorberganton-pixel)

---

## 🛠️ Tecnologias e Ferramentas
![Java](https://skillicons.dev/icons?i=java,spring,js,html,css,mysql)
---

# 📁 **Estrutura do Repositório**

```
projeto-filmes/
├── backend/
│   ├── src/main/java/com/cinekids/
│   │   ├── CinekidsApplication.java
│   │   ├── controller/
│   │   │   ├── FilmeController.java
│   │   │   └── GeneroController.java
│   │   ├── model/
│   │   │   ├── Filme.java
│   │   │   └── Genero.java
│   │   ├── repository/
│   │   │   ├── FilmeRepository.java
│   │   │   └── GeneroRepository.java
│   │   └── service/
│   │       └── StartupDataLoader.java
│   ├── pom.xml
│   └── src/main/resources/application.properties
└── frontend/
    ├── index.html
    ├── filmes.html
    └── scripts/
        └── main.js

```

---

# 🛠️ **Guia de Instalação e Execução**

## **Backend (Spring Boot)**

### **1. Configurar banco no `application.properties`**

```
spring.application.name=projeto-cine-kids
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/db_cineKids?useSSL=false
spring.datasource.username=root
spring.datasource.password=12345

spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQLDialect
spring.jpa.defer-datasource-initialization=true
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.hibernate.ddl-auto=update


```

### **2. Rodar o backend**

---

# 🌐 **Documentação da API**

## **Entidades**

### **🎭 Gênero**

```json
{
  "id": 1,
  "fk_genero": "Infantil"
}
```

### **🎬 Filme**

```json
{
  "titulo": "Enrolados",
  "anoLancamento": 2010,
  "classificacao": "Livre",
  "idioma": "Português",
  "sinopse": "conta a história de Rapunzel, uma princesa com cabelos mágicos dourados, mantida presa numa torre por anos pela vilã Mamãe Gothel, que usa seu cabelo para se manter jovem, mas Rapunzel sonha em ver as lanternas flutuantes que aparecem todo ano no seu aniversário.",
}


```

---

# 📡 **Endpoints**

## **Gêneros**

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /generos | Lista todos |
| POST | /generos | Cria novo |
| PUT | /generos/{id} | Atualiza |
| DELETE | /generos/{id} | Remove |

## **Filmes**

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /filmes | Lista todos |
| POST | /filmes | Cria |
| PUT | /filmes/{id} | Atualiza |
| DELETE | /filmes/{id} | Remove |

---

# 🖥️ **Exemplos de Requisição**

### **POST /filmes**

```json
{
  "titulo": "Zootopia",
  "anoLancamento": 2016,
  "classificacao": "10",
  "idioma": "Português",
  "sinopse": "Em uma cidade formada por animais, a policial coelha Judy Hopps se une ao raposo Nick Wilde para desvendar um mistério que ameaça Zootopia.",
}

```

---

# 📎 **Links Importantes**

🔗 **Trello:** *"https://trello.com/b/2AJ9CFr8/devsys"*

🔗 **Figma:** *https://www.figma.com/proto/PItA0BWVGAY6haX4GJNXZs/Untitled?node-id=5-368&p=f&t=eRnbr7JDZsRW6Deo-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1*
