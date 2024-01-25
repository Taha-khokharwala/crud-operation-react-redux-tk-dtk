import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDataType, updateDataType, deleteDataType } from "./slice";

const Appps = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const tableData = useSelector((state) => state.data);

  const insertData = (e) => {
    e.preventDefault();
    dispatch(addDataType({ email, password }));
    setEmail('');
    setPassword('');
  };

  const updateData = (index) => {
    const { email, password } = tableData[index];
    setEmail(email);
    setPassword(password);
    dispatch(updateDataType({ index, email, password }));
  };

  const deleteData = (index) => {
    dispatch(deleteDataType(index));
  };

  return (
    <div>
      <form onSubmit={insertData} id="dataForm">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/><br/>

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
        <button type="submit">Submit</button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.email}</td>
              <td>{entry.password}</td>
              <td>
                <button onClick={() => updateData(index)}>Update</button>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appps;
