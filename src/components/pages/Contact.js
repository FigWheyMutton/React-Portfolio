import React from 'react';
import '../../styles/main.css';
import '../../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div className='bodyContainer'>
      <h1>Contact Page</h1>
      <form>
  <div className="form-group">
            <label for="exampleInputPassword1">Name:</label>
            <input type="Name" className="form-control" id="exampleInputPassword1" placeholder="Required" required="required"/>
  </div>
  <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Required"required="required"/>
  </div>
  <div className="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Optional"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Required" required="required"></textarea>
  </div>
  <button type="submit" className="btn btn-primary submit">Submit</button>
</form>
</div>
  );
}
