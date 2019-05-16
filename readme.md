[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Skeleton for Node.js applications written in TypeScript

### Development

```bash
npm run dev
```

### Running tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Building a container

```bash
docker build -t rahulse97/rest-api-typescript .
```

### Run docker image

```bash
docker run -p 8080:3000 -d rahulse97/rest-api-typescript
```

### Print app output
```bash
docker logs <container id>
```

### Enter the container
```bash
docker exec -it <container id> /bin/bash
```