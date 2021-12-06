Section { items }
Form
Input (3)
Button
List
ListItem

useEffect(() => {}, []) = componentDidMount, componentDidUpdate, componentWillUnmount
useState = setState
useRef = createRef
useContext = createContext
useReducer

---

useFetch
useLocalStorage

---

## Prevent rerenders

- class component (`extends React.Component`)
  - PureComponent (`extends React.PureComponent`)
    shouldComponentUpdate - shallow equality
  - shouldComponentUpdate: boolean (true when we need to update component/false when we need to skip updating)
- functional component (`const funcName/function funcName()`)
  - React.memo (HOC) - accepts component, function to check equality
    React.memo(Button)
    React.memo(Button, (prevProps, nextProps) => prevProps.value !== nextProps.value)
    React.memo - делает проверку на equality (равенство) и возвращает true если значения равны (в таком случае обновления не будет), false - если пропсы не равны и тогда компонент продолжит обновляться

---

## How to update components

- update props
- update state
  - class component
    setState
  - functional component
    setFieldName

---

## Siblings

```jsx
    <List key="1">
    <ListItem key="1" />
    <ListItem key="2" />
    <ListItem key="3" />
    <ListItem key="3" /> // error
    </List>

    <List key="2">
    <ListItem key="1" />
    <ListItem key="2" />
    <ListItem key="3" />
    </List>
```
