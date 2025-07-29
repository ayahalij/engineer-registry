const React = require('react')

function New() {
  return (
    <div>
      <h1>Add a New Engineer</h1>
      <form method="POST" action="/engineers">
        <label>Name: </label>
        <input type="text" name="name" required /><br />

        <label>Specialty: </label>
        <input type="text" name="specialty" required /><br />

        <label>Years of Experience: </label>
        <input type="number" name="yearsExperience" /><br />

        <label>Available: </label>
        <input type="checkbox" name="available" /><br />

        <button type="submit">Create Engineer</button>
      </form>
      <br />
      <a href="/engineers">← Back to List</a>
    </div>
  )
}

module.exports = New
