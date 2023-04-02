// i

// export const Form = () => {
//   return (
//     <>
//       <form
//         className="register-form"
//         action="POST"
//         name="register-form"
//         ref={this.registerForm}
//         onSubmit={(e) => this.handleSubmit(e)}
//       >
//         <input type="text" name="name" ref={this.nameInput} required></input>
//         <input type="date" name="birthdate" ref={this.birthdateInput} required></input>
//         <label htmlFor="favColor">Favorite color</label>
//         <select name="favColor" ref={this.favoriteColorInput} id="favColor" required>
//           <option>---</option>
//           <option value="blue">blue</option>
//           <option value="green">green</option>
//           <option value="yellow">yellow</option>
//         </select>
//         <label htmlFor="student">I am a student.</label>
//         <input type="checkbox" name="student" ref={this.isStudentInput} id="student"></input>
//         <label htmlFor="woman">Woman</label>
//         <input
//           id="woman"
//           type="radio"
//           name="gender"
//           ref={this.genderInput}
//           value="Woman"
//           defaultChecked
//         ></input>
//         <label htmlFor="man">Man</label>
//         <input id="man" type="radio" name="gender" ref={this.genderInput} value="Man"></input>
//         <input type="file" ref={this.imageInput} onChange={this.handleFileChange}></input>
//         <button type="submit" value="submit"></button>
//       </form>
//       <div className="users-container">
//         {this.state.users.map(
//           ({ name, image, favoriteColor, isStudent, birthdate, gender }, idx) => (
//             <UserCard
//               key={idx}
//               name={name}
//               image={image}
//               favoriteColor={favoriteColor}
//               isStudent={isStudent}
//               birthdate={birthdate}
//               gender={gender}
//             />
//           )
//         )}
//       </div>
//     </>
//   );
// };
