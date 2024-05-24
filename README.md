# Sportsee, projet Open Classrooms

## Installation

1. `git clone https://github.com/sylvain-galoustoff/oc-sportsee.git`
2. `cd oc-sportsee`
3. `npm install`
4. `npm run dev`

## Utilisation

L'application retrouve les données de l'utilisateur en fonction d'un id passé en paramètre de l'URL, suivant ce schema :
`http://localhost:5173/${userId}`

### Récupération des données

L'application peut récupérer les données depuis deux sources distinctes :

- Des données locales (mock)
- Des données distantes fournie par une API qu'il faudra installer pour l'utiliser (voir : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

Pour passer d'une source à l'autre, modifiez le fichier `src/env.ts` :

- `api: 'locale'` pour utiliser les données mockées (réglage par défaut)
- `api: 'distant'` pour utiliser l'API REST
