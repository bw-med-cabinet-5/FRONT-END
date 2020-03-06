const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let profiles = [
  {
    id: 1,
    name: 'Wonder Woman OG',
    profile: 'hybrid',
    effects: `Depression, Pain, Stress, Lack of Appetite, Headache,
 Headaches,
 `

   
  },
  {
    id: 2,
    name: 'Guard Dawg',
    profile: 'hybrid',
    effects: `Depression,
    Insomnia,
    Pain,
    Stress,
    Muscle Spasms,`
  },
  {
    id: 3,
    name: "Little Dragon",
    profile: '"hybrid"',
    effects: `Pain,
    Stress,
    Fatigue,
    Inflammation,
    Muscle Spasms
    `
  },
  {
    id: 4,
    name: 'M-39',
    profile: "indica",
    effects: '"Headache"'
  },
  {
    id: 5,
    name: 'Master Yoda',
    profile: "sativa",
    effects: 'Lack of Appetite'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'kim' && password === 'enter') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/profiles', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(profiles);
  }, 1000);
});

app.get('/api/profiles/:id', authenticator, (req, res) => {
  const profile = profiles.find(f => f.id == req.params.id);

  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404).send({ msg: 'Profile not found' });
  }
});

app.post('/api/profiles', authenticator, (req, res) => {
  const profile = { id: getNextId(), ...req.body };

  profiles = [...profiles, profile];

  res.send(profiles);
});

app.put('/api/profiles/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const profileIndex = profiles.findIndex(f => f.id == id);

  if (profileIndex > -1) {
    const profile = { ...profiles[profileIndex], ...req.body };

    profiles = [
      ...profiles.slice(0, profileIndex),
      profile,
      ...profiles.slice(profileIndex + 1)
    ];
    res.send(profiles);
  } else {
    res.status(404).send({ msg: 'Profile not found' });
  }
});

app.delete('/api/profiles/:id', authenticator, (req, res) => {
  const { id } = req.params;

  profiles = profiles.filter(f => f.id !== Number(id));

  res.send(profiles);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
