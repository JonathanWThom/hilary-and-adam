import React from "react";

const Rsvp = () => {
  return(
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Name (as it appears on invitation) <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Can you make it? </label>
        <input type="radio" id="yes" name="coming" value="yes"
               checked />
             <label for="yes">Yes</label>
        <input type="radio" id="no" name="coming" value="no" />
        <label for="no">No</label>
      </p>
      <p>
        <label>How many in your party? <input type="number" name="howMany" /></label>
      </p>
      <p>
        <label>Any extra notes (food allergies, etc): <textarea name="notes"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default Rsvp;
