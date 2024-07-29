# JSON to FHIR Converter

A simple library to convert JSON objects to FHIR resources.

## Installation

```sh
npm install json-to-fhir


## Usage

const JsonToFhirConverter = require('json-to-fhir');

const converter = new JsonToFhirConverter();

const patientJson = {
  id: "123",
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  birthDate: "1980-01-01"
};

const observationJson = {
  id: "456",
  status: "final",
  code: "8310-5",
  display: "Body temperature",
  patientId: "123",
  date: "2020-01-01T12:00:00Z",
  value: 37.5,
  unit: "C"
};

console.log("FHIR Patient:", converter.convertToPatient(patientJson));
console.log("FHIR Observation:", converter.convertToObservation(observationJson));


## Result

FHIR Patient: {
  resourceType: 'Patient',
  id: '123',
  name: [ { use: 'official', family: 'Doe', given: [Array] } ],
  gender: 'male',
  birthDate: '1980-01-01'
}
FHIR Observation: {
  resourceType: 'Observation',
  id: '456',
  status: 'final',
  code: { coding: [ [Object] ] },
  subject: { reference: 'Patient/123' },
  effectiveDateTime: '2020-01-01T12:00:00Z',
  valueQuantity: {
    value: 37.5,
    unit: 'C',
    system: 'http://unitsofmeasure.org',
    code: 'C'
  }
}