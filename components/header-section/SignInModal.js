import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PasswordStrengthBar from 'react-password-strength-bar'
import OtpInput from 'react-otp-input'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { resend } from '../../redux/actions/loginActions'
import { signIn } from '../../redux/actions/loginActions'
import { signUp } from '../../redux/actions/loginActions'
import { otpsection } from '../../redux/actions/loginActions'
import { useDispatch, useSelector } from 'react-redux'

const SignInModal = (props) => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const loginDetails = useSelector((state) => state.loginDetails)
  const { login, error } = loginDetails
  const signupDetails = useSelector((state) => state.signupDetails)
  const { signup, err } = signupDetails
  const otpDetails = useSelector((state) => state.otpDetails)
  const { otpverify, errr } = otpDetails
  const token = signup?.credentials?.token
  // console.log(token);
  const [btnEnabled, setBtnEnabled] = useState(false)
  const [btnClass, setBtnClass] = useState('disabled')
  const [email, SetEmail] = useState('')
  const [phone, SetPhone] = useState('')
  const [password, SetPassword] = useState('')
  const [confirm, SetConfirm] = useState('')
  const [firstname, SetFirstname] = useState('')
  const [lastname, SetLastname] = useState('')
  const [showOtp, setshowOtp] = useState(false)
  const [otp, setOtp] = useState('')
  const [user, setUser] = useState('')
  const [isDisabled, SetIsDisabled] = useState(true)

  const [SignInEmail, SetSignInEmail] = useState('')
  const [SignInPassword, SetSignInPassword] = useState('')

  const [signup_alert, SetSignupAlert] = useState(false)
  const [signin_alert, SetSigninAlert] = useState(false)

  const [showSignUp, setShowSignUp] = useState(false)
  const [showSignIn, setShowSignIn] = useState(true)

  const ToggleSignIn = () => {
    setShowSignIn(true)
    setShowSignUp(false)
  }

  const ToggleSignUp = () => {
    setShowSignIn(false)
    setShowSignUp(true)
  }

  useEffect(() => {
    if (login) {
      toast.success('Logged in')
      window.location.reload()
    } else {
      toast.error(error)
    }
    if (signup) {
      toast.success('Verify your OTP')
      setshowOtp(true)
      setShowSignIn(false)
      setShowSignUp(false)
    } else {
      toast.error(err)
    }
  }, [login, error])

  useEffect(() => {
    if (signup) {
      toast.success('Verify your OTP')
      setshowOtp(true)
      setShowSignIn(false)
      setShowSignUp(false)
    } else {
      toast.error(err)
    }
  }, [signup, err])

  useEffect(() => {
    if (otpverify) {
      toast.success('Verified')
      window.location.reload()
    } else {
      toast.error(errr)
    }
  }, [otpverify, errr])

  const SignInSubmit = (e) => {
    e.preventDefault()
    dispatch(
      signIn({
        email: SignInEmail,
        password: SignInPassword,
      })
    );
  };
  const SignUpSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp({
        category: user,
        utm_source: 'https://mentorkart-new-ui.netlify.app/',
        username: email,
        first_name: firstname,
        last_name: lastname,
        mobile_no: +phone.slice(2, 12),
        email: email,
        password: password,
        password_confirmation: confirm,
        user_type: 'MENTEE',
        country_code: 91,
        country_name: 'INDIA',
      })
    );
  };

  const otpVerify = (e) => {
    e.preventDefault();
    setOtp(otp);
    console.log(otp);
    dispatch(
      otpsection({
        otp,
        country_code: 91,
        country_name: 'INDIA',
        token,
        utm_source: 'https://mentorkart-new-ui.netlify.app/',
        user_category: user,
        mobile_number: +phone.slice(2, 12),
        email: email,
        first_name: firstname,
        last_name: lastname,
      })
    );
  };

  const [passwordType1, SetPasswordType1] = useState('password');
  const [passwordType2, SetPasswordType2] = useState('password');
  const [passwordType3, SetPasswordType3] = useState('password');

  return (
    <>
      <div className="signup-modal">
        <div className="modal-img d-lg-block d-none col-lg-6">
          <img src="/images/signup-left.png" alt="" />
        </div>
        <div className="modal-form px-md-5 px-1 d-flex flex-column justify-content-center align-item-center col-lg-6 col-12">
          {signup && showOtp && (
            <div>
              <div className="content">
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                  Otp send to{' '}
                </h1>
                <p style={{ display: 'flex', justifyContent: 'center' }}>
                  {phone}
                </p>
              </div>
              <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                Enter otp
              </h3>

              <OtpInput
                inputStyle={{
                  width: '3rem',
                  height: '3rem',
                  margin: '5px',
                  fontSize: '2rem',
                  color: '#FCCF31',
                  borderRadius: 4,
                  border: '2px solid white',
                  boxShadow: '3px 3px grey',
                  marginTop: '20px',
                }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                shouldAutoFocus={true}
                containerStyle={{ justifyContent: 'center' }}
                focusStyle={{
                  border: '1px solid #FCCF31',
                  outline: 'none',
                }}
              />

              <div
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  marginTop: '30px',
                }}
              >
                <button
                  className="btn btn-dark"
                  style={{ marginRight: '20px' }}
                  onClick={otpVerify}
                >
                  Verify
                </button>
                <div>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch(
                        resend({
                          phone_number: +phone.slice(2, 12),
                          country_code: 91,
                          token: token,
                          email: email,
                          password: password,
                        })
                      );
                    }}
                  >
                    Resend
                  </button>
                </div>
              </div>
            </div>
          )}
          {showSignUp === true && (
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  SignUpSubmit(e)
                }}
              >
                <fieldset>
                  <legend className="d-flex justify-content-between align-items-center mb-3">
                    <h2>I am...</h2>
                    <span
                      onClick={() => {
                        props.showModalBtn(false)
                      }}
                      className="btn"
                    >
                      <i className="fas fa-times fa-2x"></i>
                    </span>
                  </legend>
                  <div className="d-md-flex d-none justify-content-between align-items-center mb-4">
                    <div className="form-check radio-btn">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          required="required"
                          className="form-check-input "
                          name="radio"
                          id="Student"
                          value="Student"
                          checked={user === 'Student'}
                          onClick={() => {
                            setUser('Student')
                            setShow(true)
                          }}
                        />
                        Student
                      </label>
                    </div>
                    <div className="form-check radio-btn">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="radio"
                          id="Professional"
                          value="Professional"
                          checked={user === 'Professional'}
                          onClick={() => {
                            setUser('Professional')
                            setShow(true)
                          }}
                        />
                        Professional
                      </label>
                    </div>
                    <div className="form-check radio-btn">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="radio"
                          id="Entrepreneur"
                          value="Entrepreneur"
                          checked={user === 'Entrepreneur'}
                          onClick={() => {
                            setUser('Entrepreneur');
                            setShow(true);
                          }}
                        />
                        Entrepreneur
                      </label>
                    </div>
                  </div>
                  <div className='d-md-none d-block mb-4'>
                    <select className='form-select' required>
                      <option
                        value='Student'
                        onChange={() => {
                          setUser('Student');
                          setShow(true);
                        }}
                      >
                        Student
                      </option>
                      <option
                        value='Professional'
                        onChange={() => {
                          setUser('Professional');
                          setShow(true);
                        }}
                      >
                        Professional
                      </option>
                      <option
                        value='Entrepreneur'
                        onChange={() => {
                          setUser('Entrepreneur');
                          setShow(true);
                        }}
                      >
                        Entrepreneur
                      </option>
                    </select>
                  </div>
                  <div style={show === false ? { display: 'none' } : {}}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          name="Firstname"
                          id="firstname"
                          value={firstname}
                          onChange={(e) => {
                            SetFirstname(e.target.value)
                          }}
                          required
                          className="form-control form-control-sm"
                          placeholder="Firstname"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          name="Lastname"
                          id="lastname"
                          value={lastname}
                          onChange={(e) => {
                            SetLastname(e.target.value)
                          }}
                          required
                          className="form-control form-control-sm"
                          placeholder="Lastname"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          SetEmail(e.target.value)
                        }}
                        required
                        className="form-control form-control-sm"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <PhoneInput
                        inputExtraProps={{
                          name: 'phone',
                          required: true,
                        }}
                        className="form-control form-control-sm"
                        country={'in'}
                        value={phone}
                        onChange={(phone) => SetPhone(phone)}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <div className="password-div">
                        <input
                          required
                          type={passwordType1}
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => {
                            SetPassword(e.target.value)
                          }}
                          className="form-control form-control-sm"
                          placeholder="Password"
                        />
                        <span
                          className="btn"
                          onClick={(e) => {
                            if (passwordType1 === 'password') {
                              SetPasswordType1('text')
                            } else {
                              SetPasswordType1('password')
                            }
                          }}
                        >
                          {passwordType1 === 'password' ? (
                            <i className="fas fa-eye"></i>
                          ) : (
                            <i className="fas fa-eye-slash"></i>
                          )}
                        </span>
                        <abbr
                          style={{ cursor: 'pointer' }}
                          title="minimum 14 characters with atleast 1 small letter, 1 capital letter, 1 special character and 1 numeric value "
                        >
                          <i className="fas fa-info"></i>
                        </abbr>
                      </div>
                      <PasswordStrengthBar password={password} />
                    </div>
                    <div className="form-group mb-3">
                      <div className="password-div">
                        <input
                          required
                          type={passwordType2}
                          name="confirm-password"
                          id="confirm-password"
                          value={confirm}
                          onChange={(e) => {
                            SetConfirm(e.target.value)
                          }}
                          className="form-control form-control-sm"
                          placeholder="Confirm password"
                        />
                        <span
                          className="btn"
                          onClick={(e) => {
                            if (passwordType2 === 'password') {
                              SetPasswordType2('text')
                            } else {
                              SetPasswordType2('password')
                            }
                          }}
                        >
                          {passwordType2 === 'password' ? (
                            <i className="fas fa-eye"></i>
                          ) : (
                            <i className="fas fa-eye-slash"></i>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="form-check mb-3 align-items-end">
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        onChange={(e) => {
                          if (btnEnabled) {
                            setBtnEnabled(false)
                            setBtnClass('btn col-12 disabled')
                          } else {
                            setBtnEnabled(true)
                            setBtnClass('btn col-12')
                          }
                        }}
                        id="agree"
                      />

                      <label className="form-check-label" htmlFor="agree">
                        I agree to terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className="row px-2">
                    <button type="submit" className="btn btn-dark">
                      Get OTP
                    </button>
                  </div>
                </fieldset>
              </form>

              <div className="text-center mt-2">
                <h6>
                  Already have an account ?
                  <span
                    onClick={() => ToggleSignIn()}
                    className={'toggle-span ps-2'}
                  >
                    Log In
                  </span>
                </h6>
              </div>
            </div>
          )}

          {showSignIn && (
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  SignInSubmit(e)
                }}
              >
                <fieldset>
                  <legend className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Log In</h2>
                    <span
                      onClick={() => {
                        props.showModalBtn(false)
                      }}
                      className="btn"
                    >
                      <i className="fas fa-times fa-2x"></i>
                    </span>
                  </legend>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      name="SignInEmail"
                      id="signinemail"
                      value={SignInEmail}
                      onChange={(e) => {
                        SetSignInEmail(e.target.value)
                      }}
                      required
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="password-div">
                      <input
                        required
                        type={passwordType3}
                        name="SignInPassword"
                        id="signinpassword"
                        value={SignInPassword}
                        onChange={(e) => {
                          SetSignInPassword(e.target.value)
                        }}
                        className="form-control"
                        placeholder="Password"
                      />
                      <span
                        className="btn"
                        onClick={(e) => {
                          if (passwordType3 === 'password') {
                            SetPasswordType3('text')
                          } else {
                            SetPasswordType3('password')
                          }
                        }}
                      >
                        {passwordType1 === 'password' ? (
                          <i className="fas fa-eye"></i>
                        ) : (
                          <i className="fas fa-eye-slash"></i>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="row px-2">
                    <button type="submit" className="btn btn-dark">
                      Login
                    </button>
                  </div>
                </fieldset>
              </form>

              <div className="text-center">
                <span>or</span>
                <h6>
                  Don't have an account ?
                  <span
                    onClick={() => ToggleSignUp()}
                    className={'toggle-span ps-2'}
                  >
                    Sign Up
                  </span>
                </h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignInModal;
