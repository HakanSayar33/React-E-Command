import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12040.755861334368!2d29.0041105!3d41.0211216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab82bea99445f%3A0x6ed7f4baceb4476c!2sK%C4%B1z%20Kulesi!5e0!3m2!1str!2str!4v1710401600723!5m2!1str!2str"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Contact with us</h4>
            <h2>Get In Touch</h2>
            <p>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec
              orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius
              vel leo a, pretium lobortis metus. Vivamus consectetur consequat
              justo.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Your Name
                  <span>*</span>
                </label>
                <input type="text" required="" />
              </div>
              <div className="">
                <label>
                  Your email
                  <span>*</span>
                </label>
                <input type="text" required="" />
              </div>
              <div className="">
                <label>
                  Subject
                  <span>*</span>
                </label>
                <input type="text" required="" />
              </div>
              <div className="">
                <label>
                  Your message
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  value=""
                  size={30}
                  required=""
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-sm form-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Clotya Store</strong>
                  <p className="contact-street">
                    Clotya Store Germany — 785 15h Street, Office 478/B Green
                    Mall Berlin, De 81566
                  </p>
                  <a href="tel:Phone: +1 1234 567 88">Phone: +1 1234 567 88</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: contact@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Opening Hours</strong>
                  <p className="contact-date">Monday - Friday : 9am - 5pm</p>
                  <p>Weekend Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
