# requireJs
Lightweight JS require

## Examples of use :
### Init

require.init({
    'alias1': 'path/file1.js',
    'alias2': 'path/file2.js',
    'alias3': 'path/file3.js',
    'alias4': 'path/file4.js',
});

### Call
require.get('alias1');
