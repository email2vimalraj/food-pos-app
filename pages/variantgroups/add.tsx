import type { NextPage } from 'next';
import React from 'react';

const AddVariantGroups: NextPage = () => {
  const [variantGroup, setVariantGroup] = React.useState<string>('');

  const handleAddVariantGroup = async () => {
    await fetch('/api/variantgroup', {
      method: 'POST',
      body: JSON.stringify({ name: variantGroup })
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          value={variantGroup}
          onChange={e => setVariantGroup(e.target.value)}
        />
        <button onClick={() => handleAddVariantGroup()}>Add Variant Group</button>
      </div>
    </>
  );
};

export default AddVariantGroups;
