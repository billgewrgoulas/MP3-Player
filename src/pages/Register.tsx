import { Form, json, redirect } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Form method="POST">
      <h3>Register Here</h3>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" name="email" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" name="password" id="password" />

      <button type="submit">Register</button>
    </ Form>
  );
}

export default RegisterPage;

export const RegisterAction = async ({params, request}: {params: any, request: any}) => {
  const data = await request.formData();

  const userData = {
    email: data.get('email'), 
    password: data.get('password')
  };

  const response = await fetch('https://reacthttp-9ffec-default-rtdb.firebaseio.com/users.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(userData)
  });

  if(response.status === 422 || response.status === 401){
    return response;
  }else if(!response.ok){
    throw json({msg: 'Could not authenticate user'}, {status: 500});
  }

  return redirect('/login');
}