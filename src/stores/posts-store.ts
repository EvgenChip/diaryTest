import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class PostsStore {
  posts: FormDataObject[] = []
  filterPosts: FormDataObject[] = []

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, { name: 'PostsStore', properties: ['posts'], storage: window.localStorage })
  }

  removePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }

  addPost(post: Pick<FormDataObject, 'title' | 'description'>) {
    this.posts.push({
      id: Date.now(),
      created: new Date().toLocaleString(),
      ...post,
    })
  }

  updatePost(editPost: Omit<FormDataObject, 'created' | 'updated'>) {
    this.posts = this.posts.map((post) => {
      if (post.id !== editPost.id) return post

      return { ...post, title: editPost.title, description: editPost.description, updated: new Date().toLocaleString() }
    })
  }
}

export const postsStore = new PostsStore()
