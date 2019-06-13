<template lang="html">
  <div>hello world!
    <UserSearchForm />
    <UserProfile />
  </div>
</template>

<script>
export default {
  name: 'UserView',
  components: {
    UserSearchForm,
    UserProfile,
  }
}
</script>
