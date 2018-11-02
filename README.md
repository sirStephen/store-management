[![travis build](https://img.shields.io/travis/sirStephen/store-management.svg?style=flat-square)](https://travis-ci.org/sirStephen/store-management)
[![Coverage Status](https://coveralls.io/repos/github/sirStephen/store-management/badge.svg)](https://coveralls.io/github/sirStephen/store-management)
<a href="https://codeclimate.com/github/sirStephen/store-management/maintainability"><img src="https://api.codeclimate.com/v1/badges/7b4969b7145be6cde12b/maintainability" /></a>

# Store-management

Store Manager is a web application that helps store owners manage sales and product inventory
records. This application is meant for use in a single store.

## features

1. Attendants and admin should be about to view all products
2. Attendant can search and add products to buyer’s cart.
3. Attendant can see his/her sale records but can’t modify them.
4. App should show available products, quantity and price.
5. Admin can see sales and can filter by attendants.
6. Admin can add, modify and delete products.

## Tech Tools

<ul>
  <li><a href="https://nodejs.org/en/">Node js</a></li>
  <li><a href="https://expressjs.com/">Express js</a></li>
  <li><a href="https://developer.mozilla.org/bm/docs/Web/JavaScript">JavaScript es6+</a></li>
  <li><a href="https://developer.mozilla.org/kab/docs/Web/HTML">Html and Css</a></li>
  <li><a href="https://mochajs.org/">Mocha</a></li>
  <li><a href="https://www.chaijs.com/">Chai</a></li>
</ul>

## Api Endpoints

| Endpoints                     | Functionalities                             |
| ----------------------------- | ------------------------------------------- |
| GET _/api/v1/products_        | get all products                            |
| GET _/api/v1/products/:id_    | get a specific product                      |
| POST _/api/v1/products_       | creates a product                           |
| DELETE _/api/v1/products/:id_ | delete a product                            |
| GET _/api/v1/sales_           | get all sales record of attendants          |
| GET _/api/v1/sales/:id_       | get a specific sales record of an attendant |
| POST _/api/v1/sales_          | create new attendant                        |

## Get Started

**1. clone repo and cd into directory**

- git clone _https://github.com/sirStephen/store-management.git_

**2. install dependencies**

- npm install

**3. start app**

- npm run dev-start

**4. test**

- npm run test

## Links

gh-pages _https://sirstephen.github.io/store-management/ui/index.html_

heroku _https://storemgt.herokuapp.com/_

## Author

Gregory Otiono
