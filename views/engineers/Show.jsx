const React = require('react')

function Show({ engineer }) {
  return (
    <div>
      <h1>Engineer Details</h1>
      <p><strong>Name:</strong> {engineer.name}</p>
      <p><strong>Specialty:</strong> {engineer.specialty}</p>
      <p><strong>Years of Experience:</strong> {engineer.yearsExperience}</p>
      <p><strong>Available:</strong> {engineer.available ? 'Yes' : 'No'}</p>

      <a href={`/engineers/${engineer._id}/edit`}>✏️ Edit</a><br />
      <a href="/engineers">← Back to List</a>
    </div>
  )
}

module.exports = Show
