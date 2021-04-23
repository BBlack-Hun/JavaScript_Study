// URL 해부해보기

let url = new URL('http://example.com/business/mart/item?category=14&id=2965');

console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);

/**
 * 출력 예시
 * http:
 * example.com
 * /business/mart/item
 * ?category=14&id=2965
 */