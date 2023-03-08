# Products API

A free API where you can get various products from different categories and different price range

## Tech Stack

![Tech Stack](https://skillicons.dev/icons?i=ts,nodejs,express&theme=dark)

Typescript - Node - Express

## How to use

Root url : [https://products.cyclic.app/](https://products.cyclic.app/)

### Response object

A success variable denoting the success or failure (boolean value, true or false)

Message (string value)

### Endpoints

| Endpoints | Description |
| - | - |
| /api/v1/product/{id} | responds with a product to the corresponding id (throws 404 error if the url is invalid or the product is not found)  |
| /api/v1/product/all  | responds with all the products available in the database (throws 404 error if the url is invalid or there are no products in the database) |

### Valid query parameters

| Query | Description |
| - | - |
| type | responds with the corresponding type of products |
| lte | Products with price lesser and equal to the specified value |
| gte | Products with price greater and equal to the specified value |
| page | Products at specified page number |

**Note - Each page contains 10 products**

### Examples

----

**https://products.cyclic.app/api/v1/product/all?type=keyboard**

*Returns all the keyboard type products*

----

**https://products.cyclic.app/api/v1/product/all?gte=1000&lte=25000**

*Returns all the products with price greater than equal to 1000 and lesser than equal to 25000*

----

**https://products.cyclic.app/api/v1/product/all?page=2**

*Returns all the products at page number 2*

----

**https://products.cyclic.app/api/v1/product/some-random-id**

*Returns the product with the corresponding id*

----

## Install

Download the zipped directory of this project by clicking on the green button above or clone it to your machine using the following command

```bash
git clone https://github.com/angkushsahu/products-api.git
```

After installing the project, go to the root directory of this project and hit the commands below

```bash
npm i
```

## About the Developer

### Hey, this is Angkush

Contact Me from [here](https://angkush.vercel.app/contact)

[![portfolio](https://img.shields.io/badge/my_portfolio-teal?style=for-the-badge&logo=ko-fi&logoColor=white)](https://angkush.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/angkush-sahu-0409311bb)
[![mail](https://img.shields.io/badge/Mail-red?style=for-the-badge&logo=gmail&logoColor=white)](https://angkush.vercel.app/contact)
[![github](https://img.shields.io/badge/Github-gray?style=for-the-badge&logo=github&logoColor=white)](https://github.com/angkushsahu)
