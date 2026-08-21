import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({
        email: '',
        role: '',
    })

    // Get user from local storage
    function getUser() {
        const _user = JSON.parse(localStorage.getItem('user'))
        if (_user) {
            user.value = _user
        }
        return user.value
    }

    // Set user in local storage
    function setUser(userData) {
        user.value = userData
        localStorage.setItem('user', JSON.stringify(userData))
    }

    return {
        user,
        getUser,
        setUser
    }
}, {
    persist: true
})

export default useUserStore