# hash-it
Create and compare hashes from the command line using NPM's `bcrypt` package.

## Option 1
**Create a hash**
```
node index.js <some-plain-text-password>
```

**Compare a hash**
Single quotes are required.
```
node index.js <some-plain-text-password> '<some-long-hash-here>'
```

## Option 2
**Create a hash**
```
npm run hash <some-plain-text-password>
```

**Compare a hash**
Single quotes are required.
```
npm run hash <some-plain-text-password> '<some-long-hash-here>'
```
