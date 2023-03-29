import { Component, createRef } from 'react';
import { FormData } from 'models/form-data-model';
import { FormErrors } from 'models/form-errors-model';
import { IUser } from 'models/user-model';

import './Form.css';

interface FormState {
  formData: FormData[];
  formErrors: FormErrors;
  isSaved: boolean;
  selectedFile: File | null;
  users: IUser[];
}

export default class Form extends Component<object, FormState> {
  private nameInput = createRef<HTMLInputElement>();
  private birthdateInput = createRef<HTMLInputElement>();
  private favoriteColorInput = createRef<HTMLSelectElement>();
  private isStudentInput = createRef<HTMLInputElement>();
  private genderInput = createRef<HTMLInputElement>();
  private imageInput = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      formData: [],
      formErrors: {},
      isSaved: false,
      selectedFile: null,
      users: [],
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderFormError = this.renderFormError.bind(this);
    this.renderFormCard = this.renderFormCard.bind(this);
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    this.setState({ selectedFile: file });
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData: FormData = {
      name: this.nameInput.current!.value,
      birthdate: this.birthdateInput.current!.value,
      favoriteColor: this.favoriteColorInput.current!.value,
      isStudent: this.isStudentInput.current!.checked,
      gender: this.genderInput.current!.value,
      image: this.imageInput.current!.files![0],
    };
    console.log(formData.image?.name);
    //*****
    // Validate form data
    const errors: FormErrors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Z]/.test(formData.name)) {
      errors.name = 'Name should start with an uppercase letter';
    }

    if (!formData.birthdate) {
      errors.birthdate = 'Birthdate is required';
    }

    if (!formData.favoriteColor) {
      errors.favoriteColor = 'Favorite color is required';
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        formErrors: errors,
      });
    } else {
      // Add form data to state
      const updatedFormData = [...this.state.formData, formData];
      this.setState({
        formData: updatedFormData,
        formErrors: {},
        isSaved: true,
      });

      // Clear form inputs
      this.nameInput.current!.value = '';
      this.birthdateInput.current!.value = '';
      this.favoriteColorInput.current!.value = '';
      this.isStudentInput.current!.checked = false;
      this.genderInput.current!.checked = false;
      this.imageInput.current!.value = '';
    }
  }

  renderFormError(field: keyof FormErrors) {
    const error = this.state.formErrors[field];
    return error ? <span className="error">{error}</span> : null;
  }
  renderFormCard(formData: FormData, index: number) {
    return (
      <div className="card" key={index}>
        <h2>{formData.name}</h2>
        <p>{formData.birthdate}</p>
        <p>{formData.favoriteColor}</p>
        <p>{formData.isStudent ? 'Student' : 'Not a student'}</p>
        <p>{formData.gender}</p>
        {formData.image && <img src={URL.createObjectURL(formData.image)} alt=""></img>}
      </div>
    );
  }

  //***** */

  render() {
    return (
      <>
        <form
          className="register-form"
          action="POST"
          name="register-form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input type="text" name="name" ref={this.nameInput} required></input>
          <input type="date" name="birthdate" ref={this.birthdateInput} required></input>
          <label htmlFor="favColor">Favorite color</label>
          <select name="favColor" ref={this.favoriteColorInput} id="favColor" required>
            <option>---</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
          </select>
          <label htmlFor="student">I am a student.</label>
          <input type="checkbox" name="student" ref={this.isStudentInput} id="student"></input>
          <label htmlFor="woman">Woman</label>
          <input
            id="woman"
            type="radio"
            name="gender"
            ref={this.genderInput}
            value="woman"
            defaultChecked
          ></input>
          <label htmlFor="man">Man</label>
          <input id="man" type="radio" name="gender" ref={this.genderInput} value="man"></input>
          <input type="file" ref={this.imageInput} onChange={this.handleFileChange}></input>
          <input type="submit" value="submit"></input>
        </form>
        <div className="users-container">
          {this.state.formData.map(({ name }, idx) => (
            <div className="userCard" key={idx}>
              <h1>{name}</h1>
              {/* <img src={image} alt="name"></img> */}
            </div>
          ))}
        </div>
      </>
    );
  }
}
