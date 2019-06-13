import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import UserSearchForm from '@/components/UserSearchForm'
import UserProfile from '@/components/UserProfile'

describe('UserView', () => {
  it('renders the component', () => {
    //arrange
    const wrapper = shallowMount(UserView)
    //assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const wrapper = shallowMount(UserView)
    const userSearchForm = wrapper.find(UserSearchForm)
    const userProfile = wrapper.find(UserProfile)

    expect(userSearchForm.exists()).toBe(true)
    expect(userProfile.exists()).toBe(true)
  })
})
