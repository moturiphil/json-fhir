// test.js
const JsonToFhirConverter = require('./index');

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
