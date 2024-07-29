// index.js
class JsonToFhirConverter {
    constructor() {}
  
    convertToPatient(json) {
      return {
        resourceType: "Patient",
        id: json.id || null,
        name: [{
          use: "official",
          family: json.lastName,
          given: [json.firstName]
        }],
        gender: json.gender,
        birthDate: json.birthDate
      };
    }
  
    convertToObservation(json) {
      return {
        resourceType: "Observation",
        id: json.id || null,
        status: json.status,
        code: {
          coding: [{
            system: "http://loinc.org",
            code: json.code,
            display: json.display
          }]
        },
        subject: {
          reference: `Patient/${json.patientId}`
        },
        effectiveDateTime: json.date,
        valueQuantity: {
          value: json.value,
          unit: json.unit,
          system: "http://unitsofmeasure.org",
          code: json.unit
        }
      };
    }
  }
  
  module.exports = JsonToFhirConverter;
  