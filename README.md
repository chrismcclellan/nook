# Scrape (A Nook sails.js app)

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [mongodb](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/): `brew install mongodb`

## Installation

Navigate to your code directory (or wherever your dev directory is)
```
cd ~\code
```

Clone the repository to your local dev environment
```bash
git clone git@github.com:chrismcclellan/scrape.git
```

## Development

Navigate to your project folder
```bash
cd scrape
```

While working on your project, run the following commands:
Each command should be executed in a new terminal window/prompt (`CMD + T` to open a new tab)

Start a MongoDB instance
```bash
mongod
```

Start the app
```bash
sails lift
```

Watch for changes to files as you develop
```bash
grunt watch
```


## Usage

If you visit http://localhost:1337 in your browser, you'll see a homepage.

If you visit http://localhost:1337/api/v1/posts in your browser, you'll see a post API.
