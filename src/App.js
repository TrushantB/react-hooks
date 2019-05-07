import React,{useState,useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Card ,Input } from 'antd';
export default function App() {

  const width=useWidth()
  
  const name=useInput('trush');
  const address=useInput('sangamner')
  useTitle(name.value+ ' ' +address.value);

   function useInput(initial) {
    const [value,setValue] = useState(initial);

    function handleChange(e) {
      setValue(e.target.value)
    }
    return {
      value,
      onChange:handleChange,
      onMouseOver :mousehover
    };
  }
  
  return (
    <div className="App">
    <h1>Index</h1>
       <Card style={{ width: 400 }} >
        <Input  placeholder="Name"  {...name}/> <br/><br/>
        <Input  placeholder="Address"  {...address}/> <br/><br/>
        <Input  placeholder="Address"  value={width} />

      </Card>
    </div>
  );
}
    function useWidth() {
      const [width, setWidth]=useState(window.innerWidth);
      useEffect(() => {
        const resizeHandle = () => setWidth(window.innerWidth)
        window.addEventListener('resize',resizeHandle)
        return () => {
          window.removeEventListener('resize',resizeHandle)
        }
      })
      return width;
    }

    function useTitle(name){
      useEffect(() => {
        document.title=name;
      })
    }
    function mousehover(e) {
      document.title=e.target.value;
    }


