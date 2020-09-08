# Nuxt TypeScript starter template

A [Nuxt.js](https://github.com/nuxt/nuxt.js) + [@nuxt/typescript](https://github.com/nuxt/typescript) starter project template.

## Setup

Create your repository by [Use this template](https://github.com/nuxt-community/typescript-template/generate) button from [this template](https://github.com/nuxt-community/typescript-template) and clone into your local.

Then, run below command and follow its message.

```
./init.sh
```

The command will ask your preference for the API to write Vue component among:

- Options API
- Class API with with nuxt-property-decorator
- Composition API (Experimental) with [@nuxt/composition-api](https://github.com/nuxt-community/composition-api)

## Usage

### Run Development server

```sh
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Build/Run SSR enabled application

```sh
npm run build
npm start
```

### Static Generation

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5bf3478-1cb8-44c4-8aeb-040083bd39ca/deploy-status)](https://nuxt-ts-template.netlify.com/)

```sh
npm run generate #=> Then distribute /dist
```

## FAQ

- Q. How about providing sample usage of "xyz" (The name of OSS which you want to use)?
  - A. Recommend running into [create-nuxt-app](https://github.com/nuxt/create-nuxt-app). This template aims to provide a minimal sample that follows the latest version of Nuxt.js and [@nuxt/typescript](https://github.com/nuxt/typescript). 
- Q. I think the usage of Vuex is not typed enough...?
  - A. We know! We desire the next major version of Vuex (v4) saves our bacon.

## Miss the old way of this repository?

That still alives on [master](https://github.com/nuxt-community/typescript-template/tree/master) branch.
