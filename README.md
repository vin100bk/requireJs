# requireJs
Lightweight and very simple JS require

## Examples of use :
### Init

```html
<script src="pathtojs/require.js"></script>
```

```js
require.init({
    'alias1': 'path/file1.js',
    'alias2': 'path/file2.js',
    'alias3': 'path/file3.js',
    'alias4': 'path/file4.js',
});
```

### Call
```js
require.get('alias1').done(function() {
	// Script loaded, we can use it
})
.fail(function() {
	
});

```
### Dependencies
 - JQuery
