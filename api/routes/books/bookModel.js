'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Map to fields in the DB
const serviceSchema = exports.schema = new Schema({
    id: String,
    serviceName: String,
    location: String,
    description: String,
    participantCount: Number,
    activities: [
      {
        activityName: String,
        activityDescription: String,
        cost: Number,
      }
    ]
})

exports.model = mongoose.model('Book', serviceSchema)
