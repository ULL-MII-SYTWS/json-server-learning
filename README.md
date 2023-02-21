# JSON Server

See <https://github.com/typicode/json-server> for more information.


## Demo in the cloud for testing

and <https://jsonplaceholder.typicode.com/> for a demon in the cloud hosted in Heroku 

Pricing: <https://my-json-server.typicode.com/pricing>

* 10KB db.json max
* 5 max REST endpoints
* 30 max items per endpoint

## Usage 

```
➜  json-server-learning json-server --help   
json-server [options] <source>

Opciones:
  -c, --config                   Path to config file
                                                   [defecto: "json-server.json"]
  -p, --port                     Set port                        [defecto: 3000]
  -H, --host                     Set host                 [defecto: "localhost"]
  -w, --watch                    Watch file(s)                        [booleano]
  -r, --routes                   Path to routes file
  -m, --middlewares              Paths to middleware files               [tabla]
  -s, --static                   Set static files directory
      --read-only, --ro          Allow only GET requests              [booleano]
      --no-cors, --nc            Disable Cross-Origin Resource Sharing[booleano]
      --no-gzip, --ng            Disable GZIP Content-Encoding        [booleano]
  -S, --snapshots                Set snapshots directory          [defecto: "."]
  -d, --delay                    Add delay to responses (ms)
  -i, --id                       Set database id property (e.g. _id)
                                                                 [defecto: "id"]
      --foreignKeySuffix, --fks  Set foreign key suffix (e.g. _id as in post_id)
                                                                 [defecto: "Id"]
  -q, --quiet                    Suppress log messages from output    [booleano]
  -h, --help                     Muestra ayuda                        [booleano]
  -v, --version                  Muestra número de versión            [booleano]

Ejemplos:
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json
  json-server --host 0.0.0.0 --watch db.json

```

## Tests

See file [test.http](test.http) for testing the servers

## API Driven Application with Vue.js, JSON-Server and Axios

See [Youtube video](https://youtu.be/yNrqlxn0nc0) and article [Create a Vue.js 3 App with JSON Server and Axios](https://developer.school/how-to-use-vue-js-json-server-and-axios) by Paul Halliday (2021-10-16)
and the Github repo [developer-school/how-to-use-vue-js-json-server-and-axios](https://github.com/developer-school/how-to-use-vue-js-json-server-and-axios)

### TODO Plan

Watch the former video and then [FREE API Hosting! Easy Serverless APIs with Netlify Functions & JavaScript!
](https://youtu.be/vEFJZ9rSSNM)