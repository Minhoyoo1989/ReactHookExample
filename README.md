# ReactHookExample

리액트 훅 연습 예제

## useState :

- useState는 가장 기본적인 훅이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줍니다.

- useState와 onChange기능을 사용하여 인풋받은 내용을 실시간으로 가변으로 만들 수 있습니다.

## useEffect :

- useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행 하도록 설정 할 수 있는 Hook입니다. 클래스형 컴포넌트의 comnentDidMount와 componmentDidUpdate를 합친 형태로 봐도 무방합니다.

- useEffect를 사용한 결과물을 보면, 컴포넌트가 처음 나타났을 때 '렌더링이 완료되었습니다.' 라는 문구가 타이피잉 될 때 마다 출력이 되고 변하는 타이핑에 따라 값이 출력되는 것을 console창을 통해 알 수 있습니다.
  이는 React.StrictMode가 적용 된 개발 환경에서만 발생하는 현상인데요. useEffect를 사용한 코드에 문제가 있는 지 없는 지 감지하기 위해 두 번 실행이 된다고 합니다. 추가로 미래의 리액트 작동방식을 대비하기 위함이기도 합니다. 미래의 리액트 버젼에서는 컴포넌트가 사라졌다가 다시 나타나도 컴포넌트의 상태를 유지하는 기능이 도입이 된다고 합니다. 컴포넌트가 나타날 때 useEffect가 두 번 실행이 되어도 컴포넌트 작동 방식에 문제가 없어야 추후 호환이 정상 적으로 이루어 질 수 있기 때문이라고 합니다. 당장은 이 기능이 도입되진 않았기 때문에 이 부분에 대하여 크게 신경쓰지 않아도 괜찮습니다. 지금은 useEffect는 개발환경에서 컴포넌트가 화면에 나타날 때 두 번 호출이 된다는 것만 알아두면 됩니다.

- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 마운트가 될 떼만 실행하고, 업데이트 될 때는 실행하지 않으려면 함수의 두번 째 파라미터로 비어있는 배열을 넣어 주면 됩니다.

- useEffect에서 특정 값이 변 할 때만 호출하고 싶은 경우에는 두번 째 파라미터로 전달되는 배열 값 안에 검사하고 싶은 값을 넣어주면 됩니다.

- useEffect는 기본적으로 렌더링이 된 직 후 마다 실행이 되며, 두번 째 배열 파라미터에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다. 컴포넌트가 언마운트(unmount)되기 전이나 업데이트가 되기 직전에 어더한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanUP) 함수를 반환해 주어야 합니다.
  useEffect 첫번 째 파라미터 함수 안에 cleanup하는 뒷정리 함수를 리턴을 하게 된다면 해당 컴포넌트가 재 호출 될 때마다 기존의 넣었던 값이 초기화가 됩니다. 이는 React.StrictMode가 활성화가 되어 있기 때문에, 컴포넌트가 여러번 마운트가 되먄 첫 번째 파라미터의 함수의 로직이 실행이되고 언마운트가 되고 다시 실행이 된다면 상태값이 보존되어있는것이 아니라 리턴된 뒷정리 함수가 됩니다.
  렌더링 될 때마다 뒷정리 함수는 계속 호출이 되고있기 때문에 두번 리턴함수가 실행이 되는 것을 확인 할 수 있습니다. 그리고 뒷정리 함수가 호출이 될 때에는 업데이트가 되기 직전의 값을 보여 줍니다.

- 오직 언마운트가 될 때만 뒷정리 함수를 싱행하고 싶다면 두번 째 파라미터에 빈배열을 넣어주면 됩니다.

## useReducer:

- useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해 주고 싶을 때 사용하는 Hook입니다. 리듀서(Reducer)의 개념은 리덕스에서 좀 더 구체적으로 사용하고 있습니다.
  리듀서는 현재상태, 그리고 업데이트를 위한 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수입니다.
  리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야 합니다.
- useReducer의 첫 번째파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어 줍니다. 이 Hook을 사용하게 되면 state값과 dispatch 함수를 받아오는데 state는 현재 상태 dispatch는 액션으로 변화된 값을 가리킵니다. dispatch가 적용된 값이 변화될 때마다 useReducer는 작동하여 해당값으로 변화된 값을 렌더링하여 보여줍니다.

## useMemo:

- useMemo를 사용하면 함수컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.

## useCallback:

- useCallback은 useMemo와 상당히 유사한 함수입니다. 주로 렌더링 성능을 최적화해야하는 상황에서 사용하며 특징으로 이 Hook을 사용하면 만들어 두었던 함수를 재사용 할 수 있습니다.

- 기존에 만들어 두었던 함수를 재사용하는 방법과 유사하지만 기존의 만들어놓았던 함수의 경우 컴포넌트가 선언이 될 때마다 컴포넌트의 렌더링이 자주 발생하거나 렌더링 해야 할 컴포넌트가 많아지게 되면 렌더링 시간적으로 오래 걸릴 수 있습니다.

때문에 useCallback을 사용하여 이 부분을 최적화 해주는 것이 좋습니다.

- useCallback 사용법은 첫번째 파라미터에 생성하고 싶은 함수를 생성하고 두번째 파라미터에는 배열을 넣으면 됩니다. 이 배열에는 어떤값이 바뀌었을 때 함수를 새로 생성하는지 명시애햐 합니다.

함수내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 합니다.

## useRef:

- useRef Hook은 함수 컴포넌트에서 ref를 쉽게 사용 할 수 있도록 해 줍니다.

- useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안에 current 값이 실제 엘리먼트 를 가리킵니다.

## 커스텀 Hook 만들기:

- 여러 컴포넌트에서 비슷한 기능을 공유할 경우, 자체적으로 Hook을 작성하여 로직을 제작 하여 사용 할 수 있습니다.

- 기존에 useReducer를 사용한 부분을 따로 컴포넌트로 만들어서 import하여 사용을 하게 될 경우, 재사용 성이 높아지게 되어 다른 컴포넌트에서도 사용이 가능하게 됩니다.

- 이외에도 여러 Hooks가 있기 때문에 라이브러리를 설치하여 사용해 보실 수 있습니다.

* http://nikgraf.github.io/react-hooks/
* http://github.com/rehooks/awesome-react-hooks/

## 정리:

- 리액트에서 Hooks패턴을 사용하게 되면 클래스형 컴포넌트를 작성하지 않아도 대부분의 기능을 구현 할 수 있습니다.

- 이러한 기능이 리액트에서 릴리즈 되었다고 해서 useState나 useReducer를 사용하여 구현 할 수 있는 기능을 기존의 setState를 써서 구현하는 방식이 잘못 된 것은 아님니다.

- 리액트 메뉴얼에 따르면, 기존의 클래스형 컴포넌트는 앞으로도 계속해서 지원될 예정입니다. 그렇기 때문에 만약 유지 보수하고 있는 프로젝트에서 클래스형 컴포넌트를 사용하고 있다면, 이를 굳이 함수 컴포넌트와 Hooks를 사용하는 형태로 전환 할 필요는 없습니다. 다만, 메뉴얼에서는 새로 작성하는 컴포넌트의 경우 함수 컴포넌트와 Hooks를 사용하는 것을 권장하고 있습니다. 앞으로 리액트 프로젝트를 개발할 때에는 함수 컴포넌트 사용을 첫번 째 옵션으로 두고, 꼭 필요한 경우에만 클래스형 컴포넌트 구현하는것을 원칙으로 하는 것이 좋습니다.
