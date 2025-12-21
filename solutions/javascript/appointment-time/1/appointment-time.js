// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const baseTime = now !== undefined ? now : Date.now();
  return new Date(baseTime + days * msPerDay);
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  return {
    year: Number(timestamp.slice(0,4)),
    month: Number(timestamp.slice(5,7))-1,
    date: Number(timestamp.slice(8,10)),
    hour: Number(timestamp.slice(11,13)),
    minute: Number(timestamp.slice(14,16)),
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp)
  if (options.year) date.setFullYear(options.year)
  if (options.month) date.setMonth(options.month)
  if (options.date) date.setDate(options.date)
  if (options.hour) date.setHours(options.hour)
  if (options.minute !== undefined) date.setMinutes(options.minute)
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dA = new Date(timestampA)
  const dB = new Date(timestampB)
  const diff = Math.abs(dA - dB)
  return Math.round(diff / 1000)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appDate = new Date(appointmentTimestamp)
  const currDate = new Date(currentTimestamp)
  return appDate > currDate
}
