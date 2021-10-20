import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { processRegister, setUserName, processLogin, googleSignin, setUser, error, setError, setIsLoading } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    //redirect user after login
    const location = useLocation();
    const redirectUrl = location.state?.from || '/';
    const history = useHistory();

    //check if login or register
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
        setError('');
    }
    //get form data and process login/register
    const onSubmit = data => {
        console.log(data.username)
        console.log(typeof(data.username));
        if (isLogin) {
            processLogin(data.email, data.password)
                .then((result) => {
                    setUser(result.user);
                    setError('');
                    history.push(redirectUrl);
                }).catch((error) => {
                    setError(error.message);
                }).finally(() => {
                    setIsLoading(false);
                });
        }
        else {
            processRegister(data.email, data.password)
            .then((result) => {
                setUserName(data.username);
                setUser(result.user);
                setError('');
                history.push(redirectUrl);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
        }
    };

    

    //google sign in
    const handleGoogleSigin = () => {
        googleSignin()
            .then((result) => {
                setUser(result.user);
                setError('');
                history.push(redirectUrl);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }
    return (
        <main>
            <Container>
                <Row>
                    <Col sm={{ span: 8, offset: 2 }}>
                        <h2 className='text-center'>{isLogin ? 'Login' : 'Register'} Here</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {!isLogin && <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" {...register("username")} />
                                {errors.username && <span className='text-danger'>Name is required</span>}
                            </Form.Group>}
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} />
                                {errors.email && <span className='text-danger'>Please input a valid email</span>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" {...register("password", { required: true, pattern: /.{8}/ })} />
                                {errors.password && <span className='text-danger'>Password should be minimum 8 character</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" {...register("checkbox")}>
                                <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registred?" />
                            </Form.Group>
                            <p className='text-danger'>
                                {
                                (error === 'Firebase: Error (auth/wrong-password).') ?  'user email address or password did not match.' : error
                                }</p>
                            <Button className="mb-3" variant="primary" type="submit">
                                {isLogin ? 'login' : 'Register'}
                            </Button>
                        </Form>
                        <div className='text-center'>
                            <p className='text-center'>--------------------OR--------------------</p>
                            <Button onClick={handleGoogleSigin} variant="warning" type="button">Google Sign In</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </main>


    );
};

export default Login;