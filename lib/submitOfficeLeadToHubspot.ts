export async function submitOfficeLeadToHubspot(data: {
  firstName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceType: string;
  numberOfRooms: string;
  squareFootage: string;
  numberOfRestrooms: string;
  floorType: string;
  cleaningFrequency: string;
  preferredTime: string;
  additionalNotes: string;
}) {
  const portalId = '246258605';
  const formGuid = 'fda5d224-97f4-4b79-ba1b-ff0ef512ce7f';

  const payload = {
    fields: [
      { name: 'firstname', value: data.firstName },
      { name: 'email', value: data.email },
      { name: 'phone', value: data.phone },
      { name: 'company', value: data.businessName },
      { name: 'service_type', value: data.serviceType },
      { name: 'num_rooms', value: data.numberOfRooms },
      { name: 'square_footage', value: data.squareFootage },
      { name: 'num_restrooms', value: data.numberOfRestrooms },
      { name: 'floor_type', value: data.floorType },
      { name: 'cleaning_frequency', value: data.cleaningFrequency },
      { name: 'preferred_time', value: data.preferredTime },
      { name: 'message', value: data.additionalNotes },
    ],
    context: {
      pageUri: typeof window !== 'undefined' ? window.location.href : '',
      pageName: typeof document !== 'undefined' ? document.title : '',
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error('HubSpot office form submission failed');
  }

  return response.json();
}
