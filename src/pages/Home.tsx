import Content from '../components/Content'
import useContents from '../hooks/useContents'
import CreateButton from '../components/CreateButton'

const Home = () => {
  const { contents, isLoading } = useContents()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <CreateButton />
      <div className="grid justify-items-stretch items-stretch gap-8 mx-32 my-9 grid-cols-auto-fill-280">
        {contents &&
          contents.data.map((content) => {
            return <Content key={content.id} content={content} />
          })}
      </div>
    </div>
  )
}

export default Home
