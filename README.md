<p align="center">
  <img src="/icon.png" width="150">
</p>
<h1 align="center">Invite-code.com</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/mashape/apistatus.svg" target="_blank" />
  </a>

  <a href="https://twitter.com/farbodsaraf">
    <img alt="Twitter: farbodsaraf" src="https://img.shields.io/twitter/follow/farbodsaraf.svg?style=social" target="_blank" />
  </a>
</p>

All the invite codes at the right place 🏷️🤑

### 👉 [Get invite codes](https://invite-code.com)
<br>

## ⚙️ How to run

### Install

```sh
npm install
bundler install
```

### Development

```sh
npm run dev
```
## 🏷️ How to add codes

### Add a company
1. Choose an unique id for the company (`acme` for example)
2. Open `_data/companies.yml`
3. Add the unique id to `all`
4. At the end of the file add the companies metadata following this example
```yaml
acme: #replace acme by the unique id
  name: ACME
  title: Get a 20 € in your ACME account
  color: '#f4f4f4' # should match the theme color of the company
  guide: Create an account using this invite code and do a first purchase
  link: /acme/
  icon: acme.png
```
5. Add the icon of the company in `_images/icons/` using the same name that in the previous metadata

### Create a user
1. Choose an unique id as a username (`johndoe` for example)
2. Open `_data/users.yml`
3. Add the unique id to `all`
4. At the end of the file add the username followed by these 3 attributes `url`, `codes` and `companies` following this example:
```yaml
johndoe:
  url:
    uber: https://www.uber.com/invite/f416b
    airbnb: https://abnb.me/e/JEIN6Vvx9N
    acme: https://www.acme.com/code123
  codes:
    uber: f416b
    airbnb: JEIN6Vvx9N
    acme: code123
  companies:
    - uber
    - airbnb
    - acme
```

### Create a page for a company
todo

### Create a page for a user
todo

### Create a page for a promocode of a specific user
todo

## Authors

👤 **Sandoche ADITTANE & Farbod SARAF**

* Twitter: [@farbodsaraf](https://twitter.com/farbodsaraf)
* Github: [@sandoche](https://github.com/sandoche)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## ⭐️ Show your support

Give a ⭐️ if this project helped you!

## ☕️ Buy me a coffee 

If you like this project, feel free to donate: https://www.buymeacoffee.com/detoxify

## 📝 License

Copyright © 2020 [Sandoche ADITTANE](https://www.sandoche.com) & [Farbod SARAF](https://farbodsaraf.com/)<br />
This project is [MIT](/LICENSE) licensed.