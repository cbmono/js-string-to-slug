js-string-to-slug
=================

Get the slug version of a string.


@todo 
-----
Add support for special characters like ü, á, ì, etc. Right now they get deleted.


Usage:
------
``` javascript
'Mono á &$§ - s__ fsd- 23-2'.toSlug();

// Output: 'mono-s__-fsd-232'
```