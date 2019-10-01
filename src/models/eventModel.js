/**
 * @file eventModel.js
 * @author Ripan Halder
* @version 1.0
* @since 09/29/2019
* @copyright Northeastern University
*/

var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

//each model maps to 1 COLLECTION
//hence, each collection has a different schema

//defining the type of the schema
var Schema = mongoose.Schema;

//defining the model scheme for specific collections

var eventModelSchema = new Schema({
    title: { 
        type: String ,
        required: true,
    },
    type: { type: String },
    startRecur: { type: String },
    endRecur: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    allDay: { type: Boolean }

}, {
        collection: 'events'
    })


var eventModel = mongoose.model('events', eventModelSchema);

module.exports = eventModel;
