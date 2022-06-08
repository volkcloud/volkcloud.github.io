# Bank website

[![Netlify Status](https://api.netlify.com/api/v1/badges/9d830211-5fb8-4d50-9622-0931e0d8a36f/deploy-status)](https://app.netlify.com/sites/anima-bank-demo/deploys)

**A functioning bank app powered by Anima & Strapi: [Live Demo](https://anima-bank-demo.netlify.app/)**

In this tutorial, we redesigned SVBs banking dashboard using [Anima](https://www.animaapp.com)'s open source Component Library for Figma, then connected our data using [Strapi](https://strapi.io/)'s headless CMS.

[Anima](https://www.animaapp.com) brings leading open source libraries like [Ant Design](https://ant.design/), [MUI](https://mui.com/), and [Recharts](https://recharts.org/) into Figma, enabling R&D teams to ship React apps faster than ever.

[![](https://animaapp.s3.amazonaws.com/sample-files/bank-website/bank-app-cover.png)](https://anima-bank-demo.netlify.app/)

## Instructions

### Setup Strapi
1. Create a [Strapi](https://strapi.io/) API following their [quick start guide](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#quick-start-guide)
2. Create a `.env` file and add the following variables:
    - API_URL: The url of your strapi service (i.e. http://localhost:1337/)
    - API_TOKEN: An API token for strapi (excluding the word 'bearer')
3. Create the [Schema](SCHEMA.md) and populate with data

### Run locally
```
cd package_code
npm install
npm start
```
Open [http://localhost:1234](http://localhost:1234).

### Build for deploying 

After building, you can upload `dist` folder to a hosting service like Netlify

```
cd package_code
npm install
npm run build
```

You will also need to [Deploy Strapi](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html) and update the `.env` parameters

### Deploy to Netlify

Edit README and replace `myorg` and `myrepo` for one-click deploy

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/myorg/myrepo)