<template lang="html">
  <div>hello world!
    <UserSearchForm />
    <UserProfile :user="user" />
  </div>
</template>

<script>
import UserSearchForm from '@/components/UserSearchForm'
import UserProfile from '@/components/UserProfile'

export default {
  data() {
    return {
      user: {
        name: ''
      }
    }
  },
  name: 'UserView',
  components: {
    UserSearchForm,
    UserProfile,
  }
}
</script>
