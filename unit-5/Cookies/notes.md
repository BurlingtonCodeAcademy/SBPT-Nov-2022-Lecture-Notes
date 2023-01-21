# Cookies
- Data
  - set by the web server
  - stored by the client
  - sent back to server on **every** request.

## Uses
- Tracking over a time span (through browser)
- storing data w/o allocating server space
- early version of **localStorage** for storing objects on client side.

## Limitations
- not secure
- not very large
  - client can restrict further
- users can erase them at any time.
  - browser settings can erase them after sessions.

## Local Storage vs Cookies

| Cookies | Local Storage |
| --- | --- |
| server-side reference | client-side reference |
| in headers request | server can't access |
| required when servers need to access data | stores user settings (light/dark modes) |
| Max size: 4096 bytes | Max size: 5MB |
| expires | no expiration |

## Additional Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

- [Docs](
https://www.rfc-editor.org/rfc/rfc6265)

- [every()](https://masteringjs.io/tutorials/fundamentals/foreach-break)