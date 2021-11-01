import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "@lib/fetcher";
import type { TaxGroup } from ".prisma/client";

const AddTax: NextPage = () => {
  const { data: taxGroups, error: taxGroupsError } = useSWR<any>('/api/taxgroup', fetcher)
  const [tax, setTax] = React.useState<string>("")
  const [taxPercent, setTaxPercent] = React.useState<number>(0.00)
  const [taxGroup, setTaxGroup] = React.useState<number | null>(null)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const handleAddTax = async () => {
    if (!taxGroup) {
      setErrorMessage("Please select a tax group")
      return
    }
    if (!tax || tax === "") {
      setErrorMessage("Please enter a tax name")
      return
    }

    await fetch('/api/tax', {
      method: 'POST',
      body: JSON.stringify({ name: tax, taxPercent, taxGroupId: taxGroup }),
    })
    setErrorMessage(null)
    setTax("")
    setTaxGroup(null)
    setTaxPercent(0.00)
  }

  if (taxGroupsError) return <div>An error occured.</div>
  if (!taxGroups) return <div>Loading ...</div>

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        <input type="text" name="name" id="name" value={tax} onChange={e => setTax(e.target.value)} />
        <input type="number" name="price" id="price" step={0.01} value={taxPercent} onChange={e => setTaxPercent(+e.target.value)} />
        <select onChange={e => setTaxGroup(+e.target.value)}>
          <option value="">Select tax group</option>
          {taxGroups.map((taxGroup: TaxGroup) => (
            <option key={taxGroup.id} value={taxGroup.id}>{taxGroup.name}</option>
          ))}
        </select>
        <button onClick={() => handleAddTax()}>Add Tax</button>
      </div>
    </>
  )
}

export default AddTax;