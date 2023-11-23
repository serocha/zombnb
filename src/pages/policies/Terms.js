import classes from './policies.module.scss';

const Terms = () => {
  return (
    <>
      <header className={classes.hrStyle}>
        <h2>Terms and Conditions</h2>
      </header>
      <div className={classes.policyWrapper}>
        <main>
          <section>
            <h3>I. Introduction</h3>
            <p>Welcome to zomBnB, where the end of the world meets extraordinary accommodations. 
              By using our website, you agree that surviving the apocalypse is unpredictable, and so are these terms. 
              The Terms and Conditions contained herein on this webpage shall govern your use of this website, including all pages within this website. 
              By using this website, you expressly accept all terms and conditions contained herein in full. 
              You must not use this website if you have any objection to any of these Terms and Conditions.</p>
          </section>

          <section>
            <h3>II. Undead-Friendly Lodging</h3>
            <p>Our accommodations are not purpose-built nor expressly designed to withstand the zombie apocalypse. 
              All properties listed by zomBnB have been built prior to societal collapse and, as artifacts of civilization, cannot inherently be considered safe. 
              While we guarantee that the amenities as stated on this website shall be present at a given property, we cannot be held responsible for any encounters with armed humans, the walking dead, or other apocalyptic mishaps.</p>
          </section>

          <section>
            <h3>III. Booking and Cancellation</h3>
            <p>Booking a stay with us implies an understanding that for the duration of this apocalypse, cancellations will not be accepted for any reason. 
              No refunds will be provided in case of further global catastrophe, zombie infighting, or any other world-ending events. 
              You hereby waive the right to refunds, credit or compensation in any form from zomBnB.</p>
          </section>

          <section>
            <h3>IV. Liability and Indemnity</h3>
            <p>You understand and agree that zomBnB shall not be held liable for any injuries including, but not limited to, infections, transformations bites, scratches, curses, or building collapse as a result of your stay. 
              You waive the right to hold us accountable for personal property damage and loss that occurs on our premises.</p>
          </section>

          <section>
            <h3>V. No-Guarantee of Sanctuary</h3>
            <p>Please note that zomBnB cannot guarantee absolute safety or complete sanctuary. 
              Our facilities are merely a well-disguised haven amidst the chaos, and we advise all guests to be on high alert at all times.
              Factors such as smells, sounds, and lights, whether from zomBnB premises or elsewhere, may draw unwanted attention and can subsequently lead to injury or death.</p>
          </section>

          <section>
            <h3>VI. End-of-the-World Etiquette</h3>
            <p>We request guests to refrain from provoking the humans, attempting to reason with mutants, or engaging in any activities that may attract the hostile living.
              Common sense is expected.
              It is expected that your reservation is cleaned thoroughly prior to checkout, including but not limited to, blood stains, rotten food, or soiled linens.
              Please enjoy the apocalypse responsibly.
            </p>
          </section>

          <section>
            <h3>VII. Conclusion</h3>
            <p>By accessing our website and making a reservation, you acknowledge the imminent threats of the apocalypse and agree to embrace the uncertainty of our collective future.
              Proceed at your own risk.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default Terms;