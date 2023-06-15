import styled from 'styled-components'

export const SPost = styled.div`
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 15px;
  position: relative;
`

export const SPostWrapper = styled.div`
  padding: 10px 20px 20px;
`
export const SPostTitle = styled.h2`
  font-size: 42px;
  font-weight: 900;
`
export const SPostContent = styled.div`
  margin: 30px 0 50px;
  font-size: 22px;
  line-height: 36px;
  width: 100%;
  overflow-y: auto;
  word-wrap: break-word;
  max-height: 180px;
`

export const SDateWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`
