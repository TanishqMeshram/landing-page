import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddYourOwn = () => {
  return (
    <div className="add-your-own-container">
      <div className="add-your-own-header">
        <FaPlus className="add-your-own-icon " />
        <strong>Add your own</strong>
      </div>
      <div className="add-your-own-content">
        Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on hobbycue? Go ahead and add your own page.
        <button className="add-your-own-button">Add new</button>
      </div>
    </div>
  );
};

export default AddYourOwn;
