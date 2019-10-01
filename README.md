# Fire Emblem Character API

Welcome to shiratap's Fire Emblem Character API. **This is a open source
project, let me know via email (spencerhirata@gmail.com) that you're interested
in making this massive project a reality**

### Live Site: https://fe-api.herokuapp.com/

### Endpoints (REST)

#### Generic

```js
app.get('/api/v1/all');
```

```js
app.get('/api/v1/Characters');
```

```js
app.get('/api/v1/Begnion');
```

#### Radiant Dawn Game Specific

```js
app.get('/api/v1/StarterCharacters');
```

```js
app.get('/api/v1/enemies');
```

### Future Updates

- GraphQL Endpoints
- All CRUD operations
- Authorization/Protected Routes
- AWS/Heroku Deployment
