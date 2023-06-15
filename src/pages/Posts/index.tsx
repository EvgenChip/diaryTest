import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { postsStore } from 'stores/posts-store'
import 'easymde/dist/easymde.min.css'

import { Card } from 'components/Card'
import { Post } from 'components/Post'
import { Search } from 'components/Search'
import { usePosts } from './hooks/usePosts'
import { SAddPostInputTitle, PostCard, PostCardWrap } from './styles'

export const Posts = observer<{ store: typeof postsStore }>(({ store }) => {
  const { formData, onChangeFormData, addOrUpdatePost, formDataIsFilled, removePost, changePost, filteredPosts, changeSearch, search } = usePosts(store)

  return (
    <PostCardWrap>
      <Search
        onChange={changeSearch}
        search={search}
      />
      <Card
        title='Posts'
        width={600}
      >
        <PostCard>
          <SAddPostInputTitle
            name='title'
            variant='outlined'
            placeholder='Заголовок статьи...'
            value={formData.title}
            onChange={onChangeFormData}
            id='inputTitle'
            fullWidth
          />
          <SAddPostInputTitle
            name='description'
            variant='outlined'
            placeholder='Текст...'
            multiline
            rows={4}
            value={formData.description}
            onChange={onChangeFormData}
            fullWidth
          />
          <Button
            onClick={addOrUpdatePost}
            disabled={!formDataIsFilled}
          >
            Опубликовать
          </Button>
        </PostCard>
        {filteredPosts.map(({ id, title, description, created, updated }: FormDataObject) => (
          <PostCard key={id}>
            <Post
              id={id}
              title={title}
              created={created}
              updated={updated}
              description={description}
              removePost={removePost}
              changePost={changePost}
            />
          </PostCard>
        ))}
      </Card>
    </PostCardWrap>
  )
})
