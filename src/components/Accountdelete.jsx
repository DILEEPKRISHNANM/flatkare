import React from 'react'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';
import '../styles/delete.css';

function Accountdelete() {

    const navigate = useNavigate();

const handleDeleteAccount = async () => {
    
    const user = auth.currentUser;
  
    if (!user) {
      alert('You are not signed in.');
      navigate('/');
    }
  
    try {
      await user.delete();
      alert('Account deleted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Failed to delete account. Please try again later.');
    }
  };
  return (
    <div className='accdel'>
        <button type='submit' onClick={handleDeleteAccount}>Delete</button>
    </div>
  )
}

export default Accountdelete