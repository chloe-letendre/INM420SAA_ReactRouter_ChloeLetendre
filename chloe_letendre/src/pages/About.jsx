export default function About() {
    return (
      <div className='content'>
        <h1 className="pageTitle">
            About
        </h1>
        <main className='about'>
            <section className='aboutMain'>
                <h2>
                    Hello all!
                </h2>
                <br></br>
                <p>
                    I am a Toronto-based cosplayer and illustrator known as Oddity. I am the face and artistic force behind the YouTube hit <a href='https://www.youtube.com/watch?v=-F1Y8B7G3C0&t=11s' target='_blank'>A Creeptastic New Generation</a>, which has warmed the hearts of over 26,000 Monster High fans since December 2022.
                </p>
                <br></br>
                <p>
                    Make sure to save this page to see all my fabulous upcoming content!
                </p>
            </section>
            <img src={require('../assets/images/aboutImage.jpg')} id="aboutPic"></img>
        </main>
      </div>
    );
  }
  