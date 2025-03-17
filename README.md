# 🖥️ npx cardme - Create & Share your Terminal Business Card 

## 🛠️ What is it?
**npx cardme** is an open-source tool that lets developers create **custom, interactive business cards** directly in the terminal. 

Just create your dev profile with:

```sh
npx cardme
```

Once generated, your business card can be published on npm and shared with a single command:

```sh
npx your-card-name
```

## 📌 How It works
1️⃣ **Run the generator:**
```sh
npx cardme
```
Follow the prompts to enter your name, job title, GitHub, LinkedIn, and Discord info.

2️⃣ **Get your card files:**
A new folder (`npx-your-card-name`) will be created with:
- `card.js` (your terminal card script)
- `package.json` (npm package config)

3️⃣ **Publish it on npm:**
```sh
cd npx-your-card-name
npm login
npm publish --access public
```

4️⃣ **Share your card:**
Tell others to run:
```sh
npx your-card-name
```

## 🔄 Updating Your Card
Need changes? Edit `card.js`, change the version in `package.json`, and republish:
```sh
npm version patch
npm publish
```

## ❓ Need Help?
Check out the [npm docs](https://docs.npmjs.com/) or open an issue in the repo.

🚀 **Now go create and share your terminal business card!**
