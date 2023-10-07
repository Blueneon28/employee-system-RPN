
# Employee System

Sistem manajemen karyawan yang mencakup informasi tentang karyawan yang bekerja pada proyek-proyek tertentu. Ini dapat digunakan untuk mengelola proyek, alokasi sumber daya, dan penggajian karyawan.


##  What can this app solve?
Efisiensi dalam manajemen sumber daya manusia dan proyek. Dengan sistem ini, perusahaan dapat dengan mudah melihat siapa yang bekerja pada proyek tertentu, mengatur jadwal, dan memastikan bahwa sumber daya manusia dialokasikan dengan baik.
## Features

- **Database**: Relational Database using Prisma
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)
### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Projects route**:\
`POST /v1/projects` - create a project\
`GET /v1/projects` - get all projects\
`GET /v1/projects/:projectId` - get projects by id\
`PATCH /v1/projects/:projectId` - update projects\
`DELETE /v1/projects/:projectId` - delete projects

**Projects route**:\
`POST /v1/employeeProject` - create a employeeProject\
`GET /v1/employeeProject` - get all employeeProject\
`GET /v1/employeeProject/:employeeProjectId` - get employeeProject by id\
`PATCH /v1/employeeProject/:employeeProjectId` - update employeeProject\
`DELETE /v1/employeeProject/:employeeProjectId` - delete employeeProjects

# API Reference

## Authentication

#### Register Sistem

```http
  POST /v1/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your API key |
| `email` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |

#### Login Sistem

```http
  POST /v1/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |

## Users Sistem

#### Get all data users

To use this we need a user token

```http
  GET /v1/users
```

#### Get data users By id

To use this we need a user token

```http
  GET /v1/users/{$id}
```

#### Create User

To use this we need a user token

```http
  POST /v1/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Your API key |
| `email` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |
| `role` | `string` | **Required**. **Default (user**) |

#### Update User

To use this we need a user token

```http
  PATCH /v1/users/{$userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Your API key |
| `email` | `string` | **Required**. Your API key |
| `password` | `string` | **Required**. Your API key |
| `role` | `string` | **Required**. **Default (user**) |

#### Delete User

To use this we need a user token

```http
  DELETE /v1/users/{$userId}
```

## Project Sistem

#### Get all data projects

To use this we need a user token

```http
  GET /v1/projects
```

#### Get data projects By id

To use this we need a user token

```http
  GET /v1/projects/{$projectId}
```

#### Create Projects

To use this we need a user token

```http
  POST /v1/projects/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Your API key |
| `status` | `string` | **Required**. Your API key |

#### Update Projects

To use this we need a user token

```http
  PATCH /v1/projects/{$projectId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required**. Your API key |
| `status` | `string` | **Required**. Your API key |


#### Delete project

To use this we need a user token

```http
  DELETE /v1/projects/{$projectId}
```

## EmployeeProject Sistem

#### Get all data EmployeeProject

To use this we need a user token

```http
  GET /v1/employeeProject
```

#### Get data EmployeeProjects By id

To use this we need a user token

```http
  GET /v1/employeeProject/{$employeeProjectId}
```

#### Create EmployeeProjects

To use this we need a user token

```http
  POST /v1/employeeProject/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId` | `string` | **Required**. |
| `projectId` | `string` | **Required**. |

#### Update EmployeeProjects

To use this we need a user token

```http
  PATCH /v1/employeeProject/{$employeeProjectId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId` | `string` | **Required**. Your API key |
| `projectId` | `string` | **Required**. Your API key |


#### Delete employeeProjects

To use this we need a user token

```http
  DELETE /v1/employeeProject/{$employeProjectId}
```

