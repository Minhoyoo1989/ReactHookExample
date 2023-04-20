# ReactHookExample

리액트 훅 연습 예제

useState :

- useState는 가장 기본적인 훅이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줍니다.

- useState와 onChange기능을 사용하여 인풋받은 내용을 실시간으로 가변으로 만들 수 있습니다.

useEffect :

- useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행 하도록 설정 할 수 있는 Hook입니다. 클래스형 컴포넌트의 comnentDidMount와 componmentDidUpdate를 합친 형태로 봐도 무방합니다.

- useEffect를 사용한 결과물을 보면, 컴포넌트가 처음 나타났을 때 '렌더링이 완료되었습니다.' 라는 문구가 타이피잉 될 때 마다 출력이 되고 변하는 타이핑에 따라 값이 출력되는 것을 console창을 통해 알 수 있습니다.
  이는 React.StrictMode가 적용 된 개발 환경에서만 발생하는 현상인데요. useEffect를 사용한 코드에 문제가 있는 지 없는 지 감지하기 위해 두 번 실행이 된다고 합니다. 추가로 미래의 리액트 작동방식을 대비하기 위함이기도 합니다. 미래의 리액트 버젼에서는 컴포넌트가 사라졌다가 다시 나타나도 컴포넌트의 상태를 유지하는 기능이 도입이 된다고 합니다. 컴포넌트가 나타날 때 useEffect가 두 번 실행이 되어도 컴포넌트 작동 방식에 문제가 없어야 추후 호환이 정상 적으로 이루어 질 수 있기 때문이라고 합니다. 당장은 이 기능이 도입되진 않았기 때문에 이 부분에 대하여 크게 신경쓰지 않아도 괜찮습니다. 지금은 useEffect는 개발환경에서 컴포넌트가 화면에 나타날 때 두 번 호출이 된다는 것만 알아두면 됩니다.

- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 마운트가 될 떼만 실행하고, 업데이트 될 때는 실행하지 않으려면 함수의 두번 째 파라미터로 비어있는 배열을 넣어 주면 됩니다.

- useEffect에서 특정 값이 변 할 때만 호출하고 싶은 경우에는 두번 째 파라미터로 전달되는 배열 값 안에 검사하고 싶은 값을 넣어주면 됩니다.

- useEffect는 기본적으로 렌더링이 된 직 후 마다 실행이 되며, 두번 째 배열 파라미터에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다. 컴포넌트가 언마운트(unmount)되기 전이나 업데이트가 되기 직전에 어더한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanUP) 함수를 반환해 주어야 합니다.
  useEffect 첫번 째 파라미터 함수 안에 cleanup하는 뒷정리 함수를 리턴을 하게 된다면 해당 컴포넌트가 재 호출 될 때마다 기존의 넣었던 값이 초기화가 됩니다. 이는 React.StrictMode가 활성화가 되어 있기 때문에, 컴포넌트가 여러번 마운트가 되먄 첫 번째 파라미터의 함수의 로직이 실행이되고 언마운트가 되고 다시 실행이 된다면 상태값이 보존되어있는것이 아니라 리턴된 뒷정리 함수가 됩니다.
  렌더링 될 때마다 뒷정리 함수는 계속 호출이 되고있기 때문에 두번 리턴함수가 실해잉 되는 것을 확인 할 수 있습니다. 그리고 뒷정리 함수가 호출이 될 때에는 업데이트가 되기 직전의 값을 보여 줍니다.

useReducer:

useMemo

useCallback

useRef

커스텀 훅 만들기

정리
