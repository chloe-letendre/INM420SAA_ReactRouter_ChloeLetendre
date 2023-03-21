export default function Contact() {
    return (
      <div className='content'>
        <h1 className="pageTitle">
            Contact
        </h1>
        <main className="contact">
            <form className="contactForm">
                <h2>
                    Question? Comment? Concern?
                </h2>
                <h3>
                    Shoot me an email!
                </h3>
                
                <legend>
                    Fields marked by a * are mandatory.
                </legend>
                <label for="fullName">
                    Full Name*
                </label>
                <input type="type" id="fullName"></input>

                <label for="email">
                    Email*
                </label>
                <input type="type" id="email"></input>

                <label for="message">
                    Type your message here
                </label>
                <textarea type="type" id="message"></textarea>

                <input type="submit" value="Submit" id="button"></input>
            </form>


            <section className='contactMain'>
                <h3>
                    Check out my socials!
                </h3>
                <ul className="socialIcons">
                    <li>
                        <a href="https://www.instagram.com/sprinkle.of.oddity/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC6xz__ji3lsv5phLGCq-GBg" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:sprinkle.oddity@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
      </div>
    );
  }