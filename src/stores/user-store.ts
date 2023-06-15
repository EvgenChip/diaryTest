import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class UserStore {
  user: string = ''

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, { name: 'UserStore', properties: ['user'], storage: window.localStorage })
  }

  addUser(user: string) {
    this.user = user
  }

  removeUser() {
    this.user = ''
  }
}

export const userStore = new UserStore()
