import { ChangeEvent, useCallback, useState, useEffect, useMemo } from 'react'
import { postsStore } from 'stores/posts-store'
import 'easymde/dist/easymde.min.css'
import { enqueueSnackbar } from 'notistack'
import { VALID_LENGTH } from '../../../constants'

const initialState: Pick<FormDataObject, 'title' | 'description'> = { title: '', description: '' }

export const usePosts = (store: typeof postsStore) => {
  const [filteredPosts, setFilteredPosts] = useState(store.posts)
  const [formData, setFormData] = useState(initialState)
  const [updatingPostId, setUpdatingPostId] = useState<number>(0)
  const [search, setSearch] = useState('')

  const formDataIsFilled = useMemo(() => formData.title && formData.description, [formData])

  useEffect(() => {
    setFilteredPosts(store.posts)
  }, [store.posts])

  const changeSearch = useCallback(
    ({ target }: ChangeEvent<any>) => {
      setSearch(target.value)

      const _filteredPosts = store.posts.filter(({ title, description }) => {
        const _search = target.value.toLowerCase()

        return title.toLowerCase().includes(_search) || description.toLowerCase().includes(_search)
      })

      setFilteredPosts(_filteredPosts)
    },
    [store.posts],
  )

  const onChangeFormData = useCallback(({ target }: ChangeEvent<any>) => {
    const { name, value } = target as { name: 'title' | 'description'; value: string }

    if (value.length > VALID_LENGTH[name]) return

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }, [])

  const addPost = useCallback(() => {
    store.addPost(formData)
    setFormData(initialState)
    setSearch('')
    enqueueSnackbar('post created', { variant: 'success' })
  }, [formData, store])

  const removePost = useCallback(
    (id: number) => {
      store.removePost(id)
      setSearch('')
    },
    [store],
  )

  const updatePost = useCallback(
    (id: number) => {
      store.updatePost({ id, ...formData })
      setFormData(initialState)
      setSearch('')
      setUpdatingPostId(0)
      enqueueSnackbar('post updated', { variant: 'success' })
    },
    [store, formData],
  )

  const addOrUpdatePost = useCallback(() => {
    if (updatingPostId) {
      updatePost(updatingPostId)
    } else {
      addPost()
    }
  }, [updatingPostId, addPost, updatePost])

  const changePost = useCallback(({ id, title, description }: Omit<FormDataObject, 'created' | 'updated'>) => {
    setUpdatingPostId(id)

    setFormData({ title, description })

    const inputTitle: HTMLInputElement | null = document.querySelector('#inputTitle')

    if (inputTitle) inputTitle.focus()
  }, [])

  const enterKeyAction = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Enter' && formDataIsFilled) {
        addOrUpdatePost()
      }
    },
    [formDataIsFilled, addOrUpdatePost],
  )

  useEffect(() => {
    document.addEventListener('keyup', enterKeyAction)

    return () => {
      document.removeEventListener('keyup', enterKeyAction)
    }
  }, [enterKeyAction])

  return { formData, onChangeFormData, addOrUpdatePost, formDataIsFilled, removePost, changePost, filteredPosts, changeSearch, search }
}
