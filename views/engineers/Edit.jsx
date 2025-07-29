const React = require('react')

function Edit({ engineer }) {
  return (
    <div>
      <h1>Edit Engineer</h1>
      <form method="POST" action={`/engineers/${engineer._id}?_method=PUT`}>
        <label>Name: </label>
        <input type="text" name="name" defaultValue={engineer.name} required /><br />

        <label>Specialty: </label>
        <input type="text" name="specialty" defaultValue={engineer.specialty} required /><br />

        <label>Years of Experience: </label>
        <input type="number" name="yearsExperience" defaultValue={engineer.yearsExperience} /><br />

        <label>Available: </label>
        <input type="checkbox" name="available" defaultChecked={engineer.available} /><br />

        <button type="submit">Update Engineer</button>
      </form>
      <br />
      <a href="/engineers">← Back to List</a>
    </div>
  )
}

module.exports = Edit
