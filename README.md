# TDD App

This is an app that allows a user to search for a Github account and see that account's avatar and bio. The purpose of building this app was to set up unit tests with Jest and Vue.js and achieve 100% code coverage.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Type Github account name into search bar
Account's avatar image and bio will appear


## Tests

### Run your unit tests
```
npm run test:unit
```

### Watch for changes
```
npm run test:unit:watch
```

### Testing the following

If the view (parent) component renders:

```
  it('renders the component', () => {
    //arrange
    const { wrapper } = build()
    //assert
    expect(wrapper.html()).toMatchSnapshot()
  })
```
If the child components render:
```
  it('renders main child components', () => {
    //arrange
    const { userSearchForm, userProfile} = build()

    //assert
    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })
```
If binds are set up properly, i.e. right props are passed to the child components:
```
  it('passes binded user prop to user profile component', () => {
    //arrange
    state.user = userFixture
    const { userProfile } = build()

    //assert
    expect(userProfile().vm.user).toBe(state.user)
  })
```
If binds are set up properly, i.e. right props are passed to the child components:
```
  it('passes binded user prop to user profile component', () => {
    //arrange
    state.user = userFixture
    const { userProfile } = build()

    //assert
    expect(userProfile().vm.user).toBe(state.user)
  })
```
If events, such as submit buttons, behave as expected:
```
  it('searches for a user when received "submitted"', () => {
    //arrange
    const expectedUser = 'kuroski'
    const { userSearchForm } = build()

    //act
    userSearchForm().vm.$emit('submitted', expectedUser)

    //assert
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })
```
If API request service works as expected:
```
describe('api', () => {
  it('searches for the user', async () => {
    //arrange
    const expectedUser = 'kuroski'

    const request = nock('https://api.github.com')
      .get(`/users/${expectedUser}`)
      .reply(200, userFixture)

    //act
    const result = await api.searchUser(expectedUser)
    await flushPromises()

    //assert
    expect(result).toEqual(userFixture)
    expect(request.isDone()).toBe(true)
  })
})
```
## Deployment

[See the app live here!](https://mariajcb-tdd-app-9ew2iagkn.now.sh)

Deployed with [ZEIT Now](https://zeit.co/docs/v2/getting-started/introduction-to-now/), [following this tutorial](https://zeit.co/guides/deploying-vuejs-to-now).

## Built With

* [Vue 2]([https://vuejs.org/v2/guide/](https://vuejs.org/v2/guide/)) - progressive user interface framework
* [Vue CLI 3]([https://cli.vuejs.org/](https://cli.vuejs.org/)) - created template with support for Babel, PWA, Router, Vuex, Linter, Unit Testing
* [Element]([https://element.eleme.io/#/en-US](https://element.eleme.io/#/en-US)) - Vue-based component library
* [Jest]([https://jestjs.io/](https://jestjs.io/)) - Unit Testing
* [Axios]([https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)) -promise-based http client
* [Flush Promises]([https://www.npmjs.com/package/flush-promises](https://www.npmjs.com/package/flush-promises)])- guarantees that all the promises will be solved
* [Nock]([https://www.npmjs.com/package/nock](https://www.npmjs.com/package/nock)](https://www.npmjs.com/package/axios)) - HTTP server mocking and expectations library for Node.js; can be used to test modules that perform HTTP requests in isolation.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This app was created following [this guide by Daniel Kuroski](https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b).
