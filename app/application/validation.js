import {
    validatePresence,
    validateFormat
} from 'ember-changeset-validations/validators';

export default {
    'status': [
        validatePresence({ presence: true, message: 'Status is required' })
    ],
    'name': [
        validatePresence({ presence: true, message: '{description} is required' })
    ],
    'email': [
        validateFormat({ presence: true, type: 'email', message: 'Invalid {description}' })
    ],
    'address.street': [
        validatePresence({ presence: true, message: 'Street is required' })
    ],
    'address.city': [
        validatePresence({ presence: true, message: 'City is required' })
    ],
    'address.state': [
        validatePresence({ presence: true, message: 'State is required' })
    ],
    'address.zip': [
        validatePresence({ presence: true, message: 'Zip Code is required' }),
        validateFormat({ regex: /^\d{5}$/, message: 'Invalid Format (00501)' }),
    ]
};