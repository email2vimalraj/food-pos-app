import type { NextPage } from 'next';
import React from 'react';

const AddTaxGroups: NextPage = () => {
  const [taxGroup, setTaxGroup] = React.useState<string>('');

  const handleAddTaxGroup = async () => {
    await fetch('/api/taxgroup', {
      method: 'POST',
      body: JSON.stringify({ name: taxGroup })
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          value={taxGroup}
          onChange={e => setTaxGroup(e.target.value)}
        />
        <button onClick={() => handleAddTaxGroup()}>Add Tax Group</button>
      </div>
    </>
  );
};

export default AddTaxGroups;
