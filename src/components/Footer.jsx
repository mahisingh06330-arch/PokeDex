import '../Styles/footer.css'
import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-inner">
        <div className="submit">
          <h2>Sign up for Pokémon emails!</h2>
          <input type="email" placeholder='Enter Your Email' />
          <div className="row">
            <select name="country">
              <option value="">Select Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Angola">Angola</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Denmark">Denmark</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Liberia">Liberia</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Namibia">Namibia</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="North Korea">North Korea</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Russia">Russia</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Korea">South Korea</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Thailand">Thailand</option>
              <option value="Turkey">Turkey</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>

            </select>
          </div>
          <button>SIGN UP</button>
        </div>
        <div className='main'>
          <div className='about'>
            <h3>The Pokémon Company</h3>
            <a href="#">News</a>
            <a href="#">Parents Guide</a>
            <a href="#">Customer Service</a>
            <a href="#">About Our Company</a>
            <a href="#">Careers</a>
            <a href="#">Select a Country/Region</a>
            <a href="#">Press Site</a>
          </div>
          <div className="icons">
            <a href="https://m.youtube.com/user/Pokemon" target='main'><i class="fa-brands fa-youtube" id='utube'></i></a>
            <a heref="https://www.facebook.com/Pokemon/" target='main'><i class="fa-brands fa-facebook" id='fb'></i></a>
           <a href="https://x.com/pokemon" target='main'><i class="fa-brands fa-linkedin" id='ln'></i></a>
            <a href="https://www.instagram.com/pokemon" target='main'><i class="fa-brands fa-instagram" id='ig'></i></a>
            <a href='https://www.pinterest.com/pokemon/' target='main'><i class="fa-brands fa-pinterest" id='pt'></i></a>
          </div>
          <div className='info'>
            <li>Terms of Use</li>
            <li>Privacy Notice</li>
            <li>Cookie Page</li>
            <li>Legal Info</li>
            <li>Security</li>
            <li>&copy;2026 Pokémon. &copy;1995-2026 inc.TM, &reg;Nintendo</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer