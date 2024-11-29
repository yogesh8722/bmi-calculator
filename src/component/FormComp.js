import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormComp = () => {
    const [heights,setHeights]=useState(0);
    const [weights,setWeights]=useState(0);
    const [bmi,setBmi]=useState();
    const [message,setMessage]=useState();
    // const [err,setErr]=useState('')


    const handleForm =(e)=>{
        e.preventDefault();
        if (weights===0 || heights===0) {
            alert("Please enter tha valid entry")
        }
        else{
            let bmi=(weights/(heights*heights))*703;
            setBmi(bmi.toFixed(1));

            if(bmi<25){
                setMessage('you are under weight');
            }
            else if(bmi<25 && bmi<30){
                setMessage("you are helthy weight");
            }else if(bmi<30){
                setMessage('you are overweight');
            }else if(bmi<=0){
                setBmi('');
                setMessage('');
            }else{
                setBmi('')
            }
        }
    }
    const reload=()=>{
        setHeights ('')
        setWeights('')
        setBmi('');
        setMessage('');
    }
    return (
        <>
            <div className='containers'>
            <h1>Bmi Project React</h1>
                <Form onSubmit={handleForm}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Weight(ibs)</Form.Label>
                        <Form.Control type="text" value={weights} placeholder="Enter weight value" onChange={(e)=>setWeights(e.target.value)}/>
                            {/* <p>{err}</p> */}
                        
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Height (in)</Form.Label>
                        <Form.Control type="text" value={heights} placeholder="Enter height value" onChange={(e)=>setHeights(e.target.value)} />
                            {/* <p>{err}</p> */}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="primary" onClick={reload} className='m-4' type="submit">
                        Reload
                    </Button>
                    <div className='center'>
                            <h2>{bmi}</h2>
                            <p>{message}</p>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default FormComp
