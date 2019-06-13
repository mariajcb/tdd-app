import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'
import UserSearchForm from '@/components/UserSearchForm'
import UserProfile from '@/components/UserProfile'

describe('UserView', () => {
  const build = () => {
    const wrapper = shallowMount(UserView)

    return {
      wrapper,
      const userSearchForm: () => wrapper.find(UserSearchForm),
      const userProfile: () => wrapper.find(UserProfile)
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
    const { userSearchForm, userProfile} = build()
    //assert
    expect(userSearchForm.exists()).toBe(true)
    expect(userProfile.exists()).toBe(true)
  })
})
