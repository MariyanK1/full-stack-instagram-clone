const registerForm = `
<h3 class="titleContent">Please register.</h3>
  <form class='submitForm'
  <div class="form__group" data-formgroup>
                <input
                  type="email"
                  name="email"
                  class="emailInput"
                  placeholder="Email"
                  data-email-empty-message="Field should not be empty!"
                  data-email-message="Email is not valid!"
                  data-email-taken="Email is already taken!"
                  required
                />
                <span class="form__error" data-error="email"></span>
        </div>

        <div class="form__group" data-formgroup>
                <input
                  type="password"
                  name="password"
                  class="password"
                  placeholder="Password"
                  data-empty-message="Field should not be empty!"
                  data-length-message="Password must contain at least 1 uppercase letter, 1 digit and be with at least 8 characters!"
                  required
                />
                <span class="form__error" data-error="password"></span>
        </div>

        
        <div class="form__group" data-formgroup>
                <input
                  type="password"
                  name="repeatPassword"
                  class="repeatPassword"
                  placeholder="Repeat Password"
                  data-empty-message="Field should not be empty!"
                  data-match-message="Passwords must be equal"
                  required
                />
                <span class="form__error" data-error="repeatPassword"></span>
        </div>
        <div class="form__group" data-formgroup>
                <select name="sex" class="sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
        </div>
         <div class="form__group" data-formgroup>
                <input class="avatarInput" id='avatar' name='avatar' type="file" accept=".jpg, .jpeg, .png" required/>
                <label class="labelAvatar" for="avatar" />Upload an avatar</label>
                <span class='uploaded hidden'>Image uploaded successfully!</span>
                <span class="form__error" data-error="avatar"></span>
        </div>
        <button type="submit" class="submitBtn">Register</button>
        </div>
`;

export default registerForm;
