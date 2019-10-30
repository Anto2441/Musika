import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="upperFooter">
        <div className="services">
          <h5>Services</h5>
          <p>Web design<br />
          Development<br />
          Hosting</p>
        </div>
        <div className="about">
          <h5>About</h5>
          <p>Company<br />
          Team<br />
          Careers</p>
        </div>
        <div className="companyName">
          <h5>Musika !</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat illo facere accusamus nisi delectus repudiandae fuga cumque dolore reiciendis soluta qui,
            itaque harum rerum fugiat voluptatum excepturi voluptatibus molestiae sapiente!</p>
        </div>
      </div>
      <div className="logos">
        <SocialIcon className="github" network="github" bgColor="black" style={{ height: 35, width: 35 }} />
        <SocialIcon className="linkedin" network="linkedin" bgColor="black" style={{ height: 35, width: 35 }} />
        <SocialIcon className="pinterest" network="pinterest" bgColor="black" style={{ height: 35, width: 35 }} />
        <SocialIcon network="twitter" bgColor="black" style={{ height: 35, width: 35 }} />
      </div>
      <div className="signature">
        Company Name @ 2019
      </div>
    </div>

  );
}


export default Footer;