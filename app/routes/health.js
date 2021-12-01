'use strict'

const response_handler = require('./../helper/response_handler')

let mx = [
  {
    method: 'GET',
    path: '/health',
    options: {
      description: 'HealthCheck',
      tags: ['api'],
      handler: async (req, h) => {
        return response_handler.success(req, { health: 'success' }, 'OK', h)
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    options: {
      description: 'Home',
      tags: ['api'],
      handler: async (req, h) => {
        return response_handler.success(req, null, 'server is running', h)
      }
    }
  }
]

module.exports = mx
