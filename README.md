工事中。急ぎの用事でだいぶ雑に作りました。
内容はほとんど[こちら](https://stackoverflow.com/questions/57426699/using-eslint-with-a-templating-language)からのコピコードです。
今のところ特に公開予定はありません。

# eslint-plugin-jinja2

preprocess jinja2 template sytax

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jinja2`:

```
$ npm install eslint-plugin-jinja2 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jinja2` globally.

## Usage

Add `jinja2` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jinja2"
    ]
}
```





