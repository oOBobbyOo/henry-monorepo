# [husky](https://typicode.github.io/husky/get-started.html)

```bash
## install
pnpm add -D husky

## husky init
pnpm exec husky init

## pre-commit
### v8
pnpm exec husky add .husky/pre-commit "pnpm exec lint-staged"
### v9
echo "pnpm exec lint-staged" > .husky/pre-commit

## commit-msg
### v8
pnpm exec husky add .husky/commit-msg "pnpm exec commitlint --edit $1"
### v9
echo "pnpm exec commitlint --edit \$1" > .husky/commit-msg
```

```bash
## set scripts.prepare
npm pkg set scripts.prepare="husky"

## or change package.json
{
  "scripts": {
    "prepare": "husky"
  }
}

## run prepare
pnpm run prepare
```

## [commitlint](https://commitlint.js.org/guides/getting-started.html)

```bash
## Install
pnpm add -D @commitlint/{cli,config-conventional}

## Configuration
echo "export default { extends: ['@commitlint/config-conventional'] }" > commitlint.config.ts
```

## [lint-staged](https://github.com/lint-staged/lint-staged)

```bash
## Install
pnpm add -D lint-staged

## Change package.json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": "pnpm lint:fix"
  }
}
```

## [prettier](https://www.prettier.cn/docs/install.html)

```bash
## Install
pnpm add --save-dev --save-exact prettier
```

## [eslint](https://github.com/antfu/eslint-config)

```bash
## CLI command
pnpm dlx @antfu/eslint-config@latest
```

```bash
## Manual Install
pnpm i -D eslint @antfu/eslint-config

## create eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu()

## Add script for package.json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
