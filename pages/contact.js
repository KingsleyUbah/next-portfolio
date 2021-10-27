import Image from 'next/image'

export default function Contact() {
    return (
        <div className="container">
            <h1> Contact me </h1>
            <p> I'd love to hear from you. Want to reach out, you can contact me on the following profiles</p>
            <ul className="contact">
                <div className="link">
                    <li><Image src='/facebook.png' height={20} width={20} alt='social-icon'/> <a href='https://twitter.com/UbahTheBuilder'> Like me on Facebook</a></li>
                </div>
                <div className="link">
                    <li><Image src='/twitter.png' height={20} width={20} alt='social-icon'/> <a href='https://twitter.com/UbahTheBuilder'> Follow me on Twitter</a></li>
                </div>
                <div className="link">
                    <li><Image src='/linkedin.png' height={20} width={20} alt='social-icon'/> <a href='https://twitter.com/UbahTheBuilder'> Connect with me on LinkedIn</a></li>
                </div>
                <div className="link">
                    <li><Image src='/whatsapp.png' height={20} width={20} alt='social-icon'/> <a href='https://twitter.com/UbahTheBuilder'> Chat with me on Whatsapp</a></li>
                </div>
            </ul>

            <form>
                <input type="text" placeholder="your name" /> <br />
                <input type="email" placeholder="your email address"  /> <br />
                <input type="text" placeholder="subject" /> <br />
                <textarea id="mytext" rows="15" cols="65" placeholder="your message"></textarea> <br />
                <input type="submit" value="Reach out" />
            </form>
        </div>
    )
}

