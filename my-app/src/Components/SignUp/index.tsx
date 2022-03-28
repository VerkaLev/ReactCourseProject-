import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';
import { ErrorPasword, ValueState } from '../../Ducks/Types/types';

export const SignUp = () => {
  const history = useHistory();
  const [value, setValue] = useState<ValueState>({
    email: '',
    password: '',
  });

  const [errorPassword, setErrorPassword] = useState<ErrorPasword>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> & {
      target: { name: string; value: string };
    }
  ) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(value.email, value.password);
      setErrorPassword('');
      localStorage.setItem('user', JSON.stringify(value));
      history.push('/Menu');
    } catch (e: any) {
      setErrorPassword(e.message);
    }
  };

  return (
    <>
      <form className="form_signup_login" onSubmit={handleSubmit}>
        <div className="header_signup_login">Registration</div>

        <div>
          <input
            className="input_email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="input_password"
            placeholder="Enter password"
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
          <p className="word_no_correct_validation">{errorPassword}</p>
        </div>

        <div>
          <button className="btn_signup">Sign Up</button>
        </div>
      </form>
    </>
  );
};
