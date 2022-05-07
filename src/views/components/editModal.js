import { today } from "../../helpers/constants.js";

const editModal = `
  <div class="modal fade" id="editUserModal" data-backdrop="false" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editUserModalLabel">Edit user:</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class='submitForm'>
      <form>
      <div class="modal-body">
        <span style='font-weight: 500;color: orangered;'>All fields are required!</span>
        <div class="form__group" data-formgroup>
                <input
                  type="email"
                  name="email"
                  class="emailInput"
                  placeholder="Email"
                  disabled
                />
                <span class="form__error" data-error="email"></span>
        </div>

        <div class="form__group" data-formgroup>
                <input
                  type="password"
                  name="password"
                  class="password"
                  placeholder="Password"
                  required
                  data-empty-message="Field should not be empty!"
                  data-length-message="Password must contain at least 1 uppercase letter, 1 digit and be with at least 8 characters!"
                />
                <span class="form__error" data-error="password"></span>
        </div>

        
        <div class="form__group" data-formgroup>
                <input
                  required
                  type="password"
                  name="repeatPassword"
                  class="repeatPassword"
                  placeholder="Repeat Password"
                  data-empty-message="Field should not be empty!"
                  data-match-message="Passwords must be equal"
                />
                <span class="form__error" data-error="repeatPassword"></span>
        </div>
        <div class="form__group" data-formgroup>
                <select name="sex" class='sex'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
        </div>
        <div class="form__group" data-formgroup>
                <input required type="date" class='date' name='dateEditModal' value=${today} max="${today}">
        </div>
         <div class="form__group" data-formgroup>
               <input required class="form-control mt-4" name='editAvatar' type="file" accept=".jpg, .jpeg, .png" required/>
                <span class="form__error" data-error="avatar"></span>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
    </div>
  </div>
</div>
  `;

export default editModal;
