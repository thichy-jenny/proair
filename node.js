Specifying the Node.js version

The starter workflow includes a matrix strategy that builds and tests your code with four Node.
js versions: 14.x, 16.x, 18.x, and 20.x. The 'x' is a wildcard character that matches the latest minor and patch release available for a version. 
Each version of Node.js specified in the node-version array creates a job that runs the same steps.


YAML:
strategy:
  matrix:
    node-version: [10.17.0, 17.9.0]
