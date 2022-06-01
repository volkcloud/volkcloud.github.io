# Bank website

**A functioning bank prototype powered by Anima & Strapi**

Most of the code was generated automatically with [Anima App](https://www.animaapp.com).

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