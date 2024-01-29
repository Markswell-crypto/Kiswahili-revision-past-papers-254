const Contact = () => {
    return (
      <div className="container contact">
        <h2 className="main-title text-center">CONTACT</h2>
  
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
          </div>
  
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              placeholder="Enter your message"
            />
          </div>
  
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
        <br></br>
      </div>
    );
  };
  
  export default Contact;
  