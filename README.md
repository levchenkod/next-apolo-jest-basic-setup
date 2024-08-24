# Next.js + Jest + Apollo fails

Test file [/app/api/faq/__tests__/faq.test.ts](/app/api/faq/__tests__/faq.test.ts)

Running test 
```bash
npm test
```

Error message:
```bash
TypeError: (0 , _experimentalnextjsappsupport.registerApolloClient) is not a function
...
 > 11 | const { getClient: graphClient } = registerApolloClient(() => {
```

