import Socials from '../common/Socialsbar'

const Story = () => {
  return (
    <main id="story">
      <section id="content" >
        <div id="page-content">
          <h1 className="title" id="story-title">My Story</h1>
          <div id="first-text">
            My name is Ross Rogerson.
          </div>
        </div>
        <Socials />
      </section>
    </main>
  )
}

export default Story