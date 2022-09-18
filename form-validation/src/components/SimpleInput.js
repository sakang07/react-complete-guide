import { useRef, useState, useEffect } from 'react';

const SimpleInput = props => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); // 초기 입력값은 false
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // enteredNameIsValid를 감시하며 유효한 값이 제출되면 콘솔에 알려주기
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid!');
    }
  }, [enteredNameIsValid]);

  // 예제를 위해 두 가지 방식을 섞어쓰고 있으나 원래는 한 가지 방식을 택해야 한다!!

  // 1. 입력값을 실시간으로 state에 저장하는 방식
  // onChange event가 발생하면 state에 입력값 저장
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  // 2. ref의 입력값을 원하는 타이밍에 조회하는 방식
  // onSubmit event가 발생하면 서버로 제출
  const formSubmissionHandler = event => {
    event.preventDefault(); // onSubmit event를 사용할 때는 서버에 HTTP 요청을 보내는 브라우저의 기본 동작을 막기 위해 꼭 추가해 주어야 한다
    setEnteredNameTouched(true); // 사용자가 폼을 제출했으므로 모든 폼은 touched 된 걸로 보아야 한다

    // 입력값이 비어 있으면 실행이 되지 않도록 반환
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true); // 검증 절차를 통과했으므로 유효값으로 state 전환
    const enteredValue = nameInputRef.current.value; // ref에서 입력된 값을 받아온다
    console.log(enteredValue);

    // 제출이 끝나면 입력된 값을 지운다
    setEnteredName('');
    // nameInputRef.current.value = ''; // 이것도 작동은 하지만 React를 통하지 않고 DOM에 직접 접근하는 방식은 권장하지 않는다
  };

  // 사용자가 폼을 건드렸으나 입력된 값이 유효하지 않을 때만 에러를 보여주게 한다
  // nameInputIsValid는 enteredNameIsValid가 false이며 enteredNameTouched가 true일 때 유효한 boolean 값
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" value={enteredName} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
