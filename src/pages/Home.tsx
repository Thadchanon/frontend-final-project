import Content from '../components/Content'
import useContents from '../hooks/useContents'
import CreateButton from '../components/CreateButton'
import classes from './Home.module.css'

const Home = () => {
  const { contents, isLoading } = useContents()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <CreateButton />
      <div className={classes.container}>
        {contents &&
          contents.data.map((content) => {
            return <Content key={content.id} content={content} />
          })}
      </div>
    </div>
  )
}

export default Home
