import Socials from '../common/Socialsbar'

const Potter = () => {
  return (
    <main id="home">
      <section id="content" >
        <div id="page-content">
          <div id="locked-content">
            <div id="me">
              <h1 className="title" id="potter-title">Harry Potter Database</h1>
              <div className="sub-heading" id="potter-sub-heading">
              </div>
            </div>
          </div>
          {/* <div id="about" className="heading">About me</div> */}
          <div id="about-text">
          </div>
        </div>
        <Socials />
      </section>
    </main>
  )
}

export default Potter