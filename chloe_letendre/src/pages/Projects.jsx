export default function Projects() {
    return (
      <div className='content'>
        <h1 className="pageTitle">
            Projects
        </h1>
        <main className="projects">
            <div className="projectItem">
                    <img src={require('../assets/images/projectsCardCaptor.jpg')} class="proPic"></img>
                <h3>
                    Cardcaptor Sakura
                </h3>
            </div>

            <div className="projectItem">
                <img src={require('../assets/images/projectsGravityFalls.JPG')} class="proPic"></img>
                <h3>
                    Gravity Falls
                </h3>
            </div>

            <div className="projectItem">
                <img src={require('../assets/images/projectsSailorMars.JPG')} class="proPic"></img>
                <h3>
                    Sailor Mars
                </h3>
            </div>

            <div className="projectItem">
                <img src={require('../assets/images/projectsWinxClub.jpg')} class="proPic"></img>
                <h3>
                    Winx Club Bloom
                </h3>
            </div>

        </main>
      </div>
    );
  }