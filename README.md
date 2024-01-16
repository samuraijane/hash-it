# hash-it
Create and compare hashes from the command line using NPM's `bcrypt` package.

## Option 1
**Create a hash**
```
node index.js '<some-plain-text-password>'
```

**Compare a hash**
```
node index.js '<some-plain-text-password>' '<some-long-hash-here>'
```

## Option 2
**Create a hash**
```
npm run hash '<some-plain-text-password>'
```

**Compare a hash**
```
npm run hash '<some-plain-text-password>' '<some-long-hash-here>'
```

## Single quotes
If you are passing in alphanumeric characters only, single quotes are not necessary. Others have noted issues when trying to pass a string from the command line that includes `$` but we have found that some punctuation and other symbols cause problems, as well, so we recommend always that you enclose your arguments in single quotes. If you care to research further, see the threads below.
- [NPM issue 19505](https://github.com/npm/npm/issues/19505)
- [PowerShell issue 4024](https://github.com/PowerShell/PowerShell/issues/4024)
- [ts-node issue 1875](https://github.com/TypeStrong/ts-node/discussions/1875)