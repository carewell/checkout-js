interface Address {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  stateOrProvince?: string
  stateOrProvinceCode?: string
  countryCode?: string
  postalCode?: string
}

export async function detectFraud(address: Address) {
  try {
    const res = await fetch('/api/fraud/address/lookup', {
      method: 'POST',
      body: JSON.stringify(address),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })

    if (res.ok) {
      const {isPotentialFraud} = await res.json()

      return Boolean(isPotentialFraud)
    }

    return false
  } catch(err) {
    console.error('Fraud detection failure', err)
  }

  // If something breaks in this endpoint - do NOT block customers
  return false
}
