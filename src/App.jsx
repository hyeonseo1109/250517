import { useState } from 'react'
import styled from "styled-components"

const Span = styled.span`
  color: black;
  text-shadow: 0 0 3px white;
  font-size: 15px;
`;

const BackgroundColorDiv = styled.div `
	width: 100vw;
	height: 100vh;	
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
	background-color: rgb(
		${ (props) => props.input1 },
		${ (props) => props.input2 },
		${ (props) => props.input3 },
    ${ (props) => props.input4 }
	);
`;

function App() {
	const [input1, setInput1] = useState(100);
	const [input2, setInput2] = useState(180);
	const [input3, setInput3] = useState(255);
  const [input4, setInput4] = useState(1);
	
	return (
		<BackgroundColorDiv  input1={input1} input2={input2} input3={input3} input4={input4}>
			<Span>R: {input1}</Span>
      <input
				type="range"
				value={input1}
				onChange={ (e) => setInput1(e.target.value) }
				min={0}
				max={255}
			/>
      <Span>G: {input2}</Span>
			<input
				type="range"
				value={input2}
				onChange={ (e) => setInput2(e.target.value) }
				min={0}
				max={255}
			/>
      <Span>B: {input3}</Span>
			<input
				type="range"
				value={input3}
				onChange={ (e) => setInput3(e.target.value) }
				min={0}
				max={255}
			/>
      <Span>투명도: {input4}</Span>
      <input
				type="range"
				value={input4}
				onChange={ (e) => setInput4(e.target.value) }
				min={0}
        step={0.01}
				max={1}
			/>

		</BackgroundColorDiv>
	);
}


export default App
