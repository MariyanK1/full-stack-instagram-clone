const loginForm = `
      <h3 class="titleContent">Please login.</h3>
      <form class='submitForm'
        <div class="form__group" data-formgroup>
                <input
                  type="email"
                  name="email"
                  class="emailInput"
                  placeholder="Email"
                  data-email-empty-message="Field should not be empty!"
                  data-email-message="Email is not valid!"
                  data-email-does-not-exist="Email does not exist!"
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
                />
                <span class="form__error" data-error="password"></span>
        </div>
        <button type="submit" class="submitBtn">Login</button>
        </form>
  `;

export default loginForm;
