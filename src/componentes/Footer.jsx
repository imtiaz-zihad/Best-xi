import bottomlogo from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-black mt-72 relative">
    
      <div className="w-4/5 mx-auto rounded-2xl shadow-2xl border-10 bg-gradient-to-r from-[#a1c4fd] to-[#fbc2eb] transform -translate-y-28"> 
        <div className="w-1/2 mx-auto text-center flex flex-col items-center space-y-4 pt-24 pb-24">
          <h2 className="text-3xl font-bold text-black">Subscribe to our Newsletter</h2>
          <p className="text-gray-400">Get the latest updates and news right in your inbox!</p>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary text-black border-none bg-[#d4c11a] join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      
      <div>
        <div className="flex items-center justify-center ">
          <img src={bottomlogo} alt="" />
        </div>
        <div>
          <footer className="footer text-white p-10 w-4/5 mx-auto flex justify-between">
            <nav>
              <h6 className="footer-title">About Us</h6>
              <p>
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </nav>
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Contact</a>
            </nav>

            <form>
              <h6 className="footer-title">Subscribe</h6>
              <p>
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary text-black border-none bg-[#d4c11a] join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </footer>
        </div>
        <hr />
        <div className="text-center text-white pt-10 pb-10">
          <h3>@2024 Your Company All Rights Reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
