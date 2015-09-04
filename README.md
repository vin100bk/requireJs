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

You can use then() as well and enojy its chaining power:

```js
require.get('alias1').then(function() {
	// Script loaded, we can use it
	return $aValue;
})
.then(function($aValue) {
	// You can use the value computed in the previous then statement 
});
```

### Dependencies
 - JQuery
