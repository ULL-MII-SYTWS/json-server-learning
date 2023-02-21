See <https://github.com/typicode/json-server> for more information.

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