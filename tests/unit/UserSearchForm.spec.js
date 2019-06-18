import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import UserSearchForm from '@/components/UserSearchForm'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('UserSearchForm', () => {
  const build = () => {
    const options = { localVue }
    const wrapper = shallowMount(UserSearchForm, options)
    const wrapperMounted = mount(UserSearchForm, options)

    return {
      wrapper,
      wrapperMounted,
      input: () => wrapper.find('.search-form__input'),
      inputMounted: () => wrapperMounted.find('input'),
      button: () => wrapperMounted.find('button')
    }
  }

  it('renders the component', () => {
    //arrange
    const { wrapper } = build()

    //assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    //arrange
    const { input, button } = build()

    //assert
    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  it('calls "submitted" event when submitting form', () => {
    //arrange
    const expectedUser = 'kuroski'
    const { wrapperMounted, button, inputMounted } = build()
    inputMounted().element.value = expectedUser

    //act
    inputMounted().trigger('input')
    button().trigger('click')
    button().trigger('submit')

    //assert
    expect(wrapperMounted.emitted().submitted[0]).toEqual([expectedUser])
  })
})
