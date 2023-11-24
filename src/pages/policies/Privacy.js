import classes from './policies.module.scss';

const Privacy = () => {
  return (
    <>
      <header className={classes.hrStyle}>
        <h2>Privacy Policy</h2>
      </header>
      <div className={classes.policyWrapper}>
        <main>
          <section>
            <p>Last updated: November 23, 2023</p>
            <h3>Overview</h3>
            <p>
              zomBnB ("us", "we", or "our") operates [https goes here] (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
              We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h3>Information Collection And Use</h3>
            <p>
              While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to identify you for authentication purposes. 
              Personally identifiable information may include, but is not limited to your email address and your computer's Internet Protocol ("IP") address ("Personal Information").
              Additionally, we make use of third-party authentication services through Google. <a href='https://policies.google.com/privacy?hl=en-US' className={classes.glink}>Google's policy may be viewed here.</a>
            </p>
          </section>

          <section>
            <h3>Log Data</h3>
            <p>
              Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
              This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the time and date of your visit, and other statistics.
              The purpose of gathering this Log Data is for authentication and to safeguard our Site against unauthorized access, fraudulent activities, and spam.
              <br/><br/>
              Please note that while we collect this information for security and operational purposes, we do not use it to personally identify individuals or track their online activities beyond our Site. 
              Additionally, we may utilize third-party services that collect, monitor, and analyze this Log Data on our behalf to enhance our Site's functionality and security.
            </p>
          </section>

          <section>
            <h3>Cookies</h3>
            <p>
              Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
              Like many sites, we use "cookies" to store authentication information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section>
            <h3>Security</h3>
            <p>
              We employ a range of security measures to safeguard your Personal Information and maintain its confidentiality. These measures include, but are not limited to, industry-standard encryption protocols, access controls, regular system scans for vulnerabilities, and third party security and encryption services.
              <br/><br/>
              The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. 
              While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h3>Changes To This Privacy Policy</h3>
            <p>
              This Privacy Policy is effective as of November 23, 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. 
              <br/><br/>
              Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
              If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our website.
            </p>
          </section>

          <section>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default Privacy;